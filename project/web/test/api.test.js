import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import subscribe from '../api/subscribe.js';

let calls;
let replies;

beforeEach(() => {
  Object.assign(process.env, {
    BREVO_API_KEY: 'test-key', BREVO_LIST_ID_TALENT: '3', BREVO_LIST_ID_EMPLOYERS: '4',
    BREVO_DOI_TEMPLATE_ID: '7', BREVO_DOI_TEMPLATE_ID_DE: '8',
    BREVO_SENDER_EMAIL: 'noreply@changepath.ai', NOTIFY_EMAIL: 'support@changepath.ai'
  });
  delete process.env.SITE_URL;
  calls = [];
  replies = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url, method: init.method, headers: init.headers, body: init.body ? JSON.parse(init.body) : null });
    const [status, body] = replies.shift() || [201, ''];
    return { ok: status < 300, status, text: async () => (typeof body === 'string' ? body : JSON.stringify(body)) };
  };
});

function call(fn, body, { method = 'POST', origin = 'https://changepath.vercel.app' } = {}) {
  const req = { method, body, headers: { host: 'changepath.vercel.app', origin } };
  return new Promise(resolve => {
    const res = {
      headers: {},
      setHeader(k, v) { this.headers[k] = v; },
      status(code) { this.code = code; return this; },
      json(data) { resolve({ code: this.code, data }); }
    };
    fn(req, res);
  });
}

const talent = { audience: 'talent', lang: 'en', firstName: 'Lena', lastName: 'Weber', email: 'Lena@Email.com ', functions: ['Marketing', 'Other', 'Hacker'], otherFunction: 'HR', consent: true, website: '' };

test('talent sign-up goes through Brevo double opt-in', async () => {
  const r = await call(subscribe, talent);
  assert.equal(r.code, 200);
  assert.equal(calls.length, 1);
  const c = calls[0];
  assert.equal(c.url, 'https://api.brevo.com/v3/contacts/doubleOptinConfirmation');
  assert.equal(c.headers['api-key'], 'test-key');
  assert.deepEqual(c.body, {
    email: 'lena@email.com',
    attributes: { FIRSTNAME: 'Lena', LASTNAME: 'Weber', LANGUAGE: 'EN', AUDIENCE: 'talent', FUNCTIONS: 'Marketing, Other: HR' },
    includeListIds: [3], templateId: 7,
    redirectionUrl: 'https://changepath.vercel.app/email-confirmed?lang=en'
  });
});

test('employer sign-up uses employer list, DE template and notifies the team', async () => {
  const r = await call(subscribe, { audience: 'employers', lang: 'de', firstName: 'Jonas', lastName: 'Becker', email: 'jonas@firma.de', company: 'Firma GmbH', role: 'Sales Ops', consent: true });
  assert.equal(r.code, 200);
  assert.equal(calls.length, 2);
  assert.deepEqual(calls[0].body.includeListIds, [4]);
  assert.equal(calls[0].body.templateId, 8);
  assert.equal(calls[0].body.attributes.COMPANY, 'Firma GmbH');
  assert.equal(calls[0].body.attributes.HIRING_ROLE, 'Sales Ops');
  assert.equal(calls[1].url, 'https://api.brevo.com/v3/smtp/email');
  assert.deepEqual(calls[1].body.to, [{ email: 'support@changepath.ai' }]);
});

test('rejects missing consent, bad email, missing company', async () => {
  assert.equal((await call(subscribe, { ...talent, consent: false })).data.error, 'missing_consent');
  assert.equal((await call(subscribe, { ...talent, email: 'nope' })).data.error, 'invalid_email');
  assert.equal((await call(subscribe, { ...talent, audience: 'employers' })).data.error, 'missing_company');
  assert.equal(calls.length, 0);
});

test('honeypot submissions are accepted silently and not sent', async () => {
  const r = await call(subscribe, { ...talent, website: 'spam.biz' });
  assert.equal(r.code, 200);
  assert.equal(calls.length, 0);
});

test('cross-origin and GET requests are refused', async () => {
  assert.equal((await call(subscribe, talent, { origin: 'https://evil.example' })).code, 403);
  assert.equal((await call(subscribe, talent, { method: 'GET' })).code, 405);
});

test('Brevo failure surfaces as a server error without leaking details', async () => {
  replies.push([401, { code: 'unauthorized', message: 'Key not found' }]);
  const r = await call(subscribe, talent);
  assert.equal(r.code, 502);
  assert.equal(r.data.error, 'server_error');
});

test('missing config is a 500 that does not name the setting', async () => {
  delete process.env.BREVO_LIST_ID_TALENT;
  const r = await call(subscribe, talent);
  assert.equal(r.code, 500);
  assert.equal(r.data.error, 'server_error');
});
