const API = 'https://api.brevo.com/v3';

export class HttpError extends Error {
  constructor(status, code) {
    super(code);
    this.status = status;
    this.code = code;
  }
}

export function env(name, { required = true } = {}) {
  const v = (process.env[name] || '').trim();
  if (!v && required) throw new HttpError(500, 'missing_config:' + name);
  return v;
}

export async function brevo(path, { method = 'POST', body } = {}) {
  const res = await fetch(API + path, {
    method,
    headers: { 'api-key': env('BREVO_API_KEY'), 'content-type': 'application/json', accept: 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  return { ok: res.ok, status: res.status, data };
}

// --- Input hygiene ---------------------------------------------------------

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

export function clean(v, max = 120) {
  if (typeof v !== 'string') return '';
  // Drop control characters and collapse whitespace.
  return v.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

export function cleanEmail(v) {
  const e = clean(v, 254).toLowerCase();
  if (!EMAIL_RE.test(e)) throw new HttpError(400, 'invalid_email');
  return e;
}

export const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// --- Request plumbing ------------------------------------------------------

export function siteOrigin(req) {
  const configured = env('SITE_URL', { required: false });
  if (configured) return configured.replace(/\/+$/, '');
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return `${proto}://${req.headers['x-forwarded-host'] || req.headers.host}`;
}

// Reject cross-site posts: browsers always send Origin on a fetch POST.
function checkOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return;
  let host;
  try { host = new URL(origin).host; } catch { throw new HttpError(403, 'forbidden'); }
  const allowed = [req.headers['x-forwarded-host'], req.headers.host];
  const site = env('SITE_URL', { required: false });
  if (site) allowed.push(new URL(site).host);
  if (!allowed.includes(host)) throw new HttpError(403, 'forbidden');
}

export function handler(fn) {
  return async (req, res) => {
    res.setHeader('cache-control', 'no-store');
    if (req.method !== 'POST') {
      res.setHeader('allow', 'POST');
      return res.status(405).json({ error: 'method_not_allowed' });
    }
    try {
      checkOrigin(req);
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const out = await fn(body, req);
      return res.status(200).json({ ok: true, ...out });
    } catch (err) {
      if (err instanceof HttpError) {
        if (err.status >= 500) console.error(err.code);
        // Don't leak which setting is missing to the browser.
        return res.status(err.status).json({ error: err.status >= 500 ? 'server_error' : err.code });
      }
      if (err instanceof SyntaxError) return res.status(400).json({ error: 'bad_json' });
      console.error(err);
      return res.status(500).json({ error: 'server_error' });
    }
  };
}

// --- Team notification -----------------------------------------------------

export async function notifyTeam(subject, rows) {
  const to = env('NOTIFY_EMAIL', { required: false });
  if (!to) return false;
  const html = '<table cellpadding="6" style="font-family:sans-serif;font-size:14px">' +
    rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="color:#5B5B6B">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join('') +
    '</table>';
  const r = await brevo('/smtp/email', {
    body: {
      sender: { email: env('BREVO_SENDER_EMAIL'), name: env('BREVO_SENDER_NAME', { required: false }) || 'ChangePath' },
      to: to.split(',').map(email => ({ email: email.trim() })),
      subject,
      htmlContent: html
    }
  });
  if (!r.ok) {
    console.error('notify failed', r.status, r.data);
    return false;
  }
  return true;
}
