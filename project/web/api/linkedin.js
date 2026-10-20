import { brevo, clean, cleanEmail, cleanLinkedin, handler, HttpError, notifyTeam, verifyToken } from '../lib/brevo.js';

// "Skip the line" step on the talent confirmation screen. Saves the LinkedIn
// profile on the contact (once the double opt-in is confirmed the contact
// exists) and emails the team so they can book the 20-minute call.
export default handler(async body => {
  const email = cleanEmail(body.email);
  if (!verifyToken(email, body.token)) throw new HttpError(403, 'forbidden');
  const linkedin = cleanLinkedin(body.linkedin);
  const name = [clean(body.firstName), clean(body.lastName)].filter(Boolean).join(' ');

  // 404 just means they haven't clicked the confirmation link yet.
  const r = await brevo('/contacts/' + encodeURIComponent(email), { method: 'PUT', body: { attributes: { LINKEDIN: linkedin } } });
  const saved = r.ok;
  if (!r.ok && r.status !== 404) console.error('brevo update failed', r.status, r.data);

  const notified = await notifyTeam(`Beta fast-track request: ${name || email}`, [
    ['Name', name],
    ['Email', email],
    ['LinkedIn', linkedin],
    ['Language', body.lang === 'de' ? 'DE' : 'EN'],
    ['Saved on Brevo contact', saved ? 'yes' : 'not yet (double opt-in pending)']
  ]);

  if (!saved && !notified) throw new HttpError(502, 'upstream');
  return {};
});
