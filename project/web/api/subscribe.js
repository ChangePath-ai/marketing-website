import { brevo, clean, cleanEmail, env, handler, HttpError, notifyTeam, siteOrigin, signToken } from '../lib/brevo.js';

const FUNCTIONS = ['Product', 'Design', 'Marketing', 'Sales', 'Legal', 'Finance', 'Other'];

// Waitlist / pilot sign-up. Creates the contact through Brevo's double opt-in
// flow: Brevo emails a confirmation link and only adds the contact to the list
// once it is clicked.
export default handler(async (body, req) => {
  // Honeypot: real visitors never see or fill the "website" field.
  if (clean(body.website)) return { token: '' };

  const audience = body.audience === 'employers' ? 'employers' : 'talent';
  const lang = body.lang === 'de' ? 'de' : 'en';
  const email = cleanEmail(body.email);
  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  if (!firstName || !lastName) throw new HttpError(400, 'missing_name');
  if (body.consent !== true) throw new HttpError(400, 'missing_consent');

  const attributes = { FIRSTNAME: firstName, LASTNAME: lastName, LANGUAGE: lang.toUpperCase(), AUDIENCE: audience };

  if (audience === 'talent') {
    const picked = (Array.isArray(body.functions) ? body.functions : []).filter(f => FUNCTIONS.includes(f));
    const other = clean(body.otherFunction);
    const fns = [...new Set(picked)].map(f => (f === 'Other' && other ? `Other: ${other}` : f));
    if (fns.length) attributes.FUNCTIONS = fns.join(', ');
  } else {
    const company = clean(body.company);
    if (!company) throw new HttpError(400, 'missing_company');
    attributes.COMPANY = company;
    const role = clean(body.role);
    if (role) attributes.HIRING_ROLE = role;
  }

  const listId = Number(env(audience === 'employers' ? 'BREVO_LIST_ID_EMPLOYERS' : 'BREVO_LIST_ID_TALENT'));
  const templateId = Number(env(lang === 'de' ? 'BREVO_DOI_TEMPLATE_ID_DE' : 'BREVO_DOI_TEMPLATE_ID_EN', { required: false }) || env('BREVO_DOI_TEMPLATE_ID'));
  const redirectionUrl = env('BREVO_DOI_REDIRECT_URL', { required: false }) || `${siteOrigin(req)}/confirmed?lang=${lang}`;

  const r = await brevo('/contacts/doubleOptinConfirmation', {
    body: { email, attributes, includeListIds: [listId], templateId, redirectionUrl }
  });
  if (!r.ok) {
    if (r.status === 400 && /email/i.test(JSON.stringify(r.data))) throw new HttpError(400, 'invalid_email');
    console.error('brevo doi failed', r.status, r.data);
    throw new HttpError(502, 'upstream');
  }

  if (audience === 'employers') {
    await notifyTeam(`New pilot request: ${attributes.COMPANY}`, [
      ['Name', `${firstName} ${lastName}`],
      ['Email', email],
      ['Company', attributes.COMPANY],
      ['Hiring for', attributes.HIRING_ROLE],
      ['Language', attributes.LANGUAGE],
      ['Note', 'Double opt-in pending until they click the confirmation email.']
    ]);
  }

  return { token: signToken(email) };
});
