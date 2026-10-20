(() => {
  'use strict';

  const FOUNDER_URL = 'https://www.linkedin.com/in/maritzabonano/';

  const UI = {
    en: {
      errGeneric: 'Something went wrong. Please try again, or email support@changepath.ai.',
      errNetwork: 'We couldn’t reach the server. Check your connection and try again.',
      errEmail: 'Please enter a valid email address.',
      errLinkedin: 'Please enter a LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-name',
      otherPh: 'Which function? e.g. HR, Operations',
      sending: 'Sending…',
      title: { talent: 'ChangePath – Proof of work for AI-fluent talent', employers: 'ChangePath – Hire AI-fluent talent on proof, not CVs' }
    },
    de: {
      errGeneric: 'Da ist etwas schiefgelaufen. Bitte versuch es noch einmal oder schreib an support@changepath.ai.',
      errNetwork: 'Keine Verbindung zum Server. Bitte prüf deine Verbindung und versuch es erneut.',
      errEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      errLinkedin: 'Bitte gib eine LinkedIn-Profil-URL ein, z. B. https://www.linkedin.com/in/dein-name',
      otherPh: 'Welcher Bereich? z. B. HR, Operations',
      sending: 'Wird gesendet…',
      title: { talent: 'ChangePath – Proof of Work für KI-affine Talente', employers: 'ChangePath – KI-versierte Talente auf Basis von Arbeitsproben einstellen' }
    }
  };

  const params = new URLSearchParams(location.search);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
  };
  const pickLang = () => {
    const q = params.get('lang');
    if (q === 'en' || q === 'de') return q;
    const saved = store.get('cp-lang');
    if (saved === 'en' || saved === 'de') return saved;
    return /^de\b/i.test(navigator.language || '') ? 'de' : 'en';
  };

  const state = {
    lang: pickLang(),
    audience: /^employ/i.test(params.get('for') || '') ? 'employers' : 'talent',
    openFaq: 0,
    chips: new Set(),
    signup: null // { email, firstName, lastName, token } once the main form went through
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const icon = name => el('i', 'ph-bold ' + name);
  const pad = i => '0' + (i + 1);

  const signupForm = $('#signup');
  const liForm = $('#linkedin');
  const otherInput = $('input[name="otherFunction"]', signupForm);

  function copy() {
    const L = COPY[state.lang];
    const A = L[state.audience];
    const t = { ...L.shared, ...A };
    const parts = (t.fnTitle || '').match(/^(.+?[.!?])\s+(.+)$/);
    t.fnTitle1 = parts ? parts[1] : t.fnTitle;
    t.fnTitle2 = parts ? parts[2] : '';
    return t;
  }

  const fnNames = () => [...FN[state.lang].map(f => f[0]), state.lang === 'de' ? 'Andere' : 'Other'];

  const lists = {
    vision: t => t.vision.map(([title, sub], i) => {
      const row = el('div', 'vision-row');
      const body = el('div');
      body.append(el('div', 'vision-t', title), el('div', 'vision-s', sub));
      row.append(el('div', 'num', pad(i)), body);
      return row;
    }),
    functions: t => FN[state.lang].map(([name, role, brief], i) => {
      const card = el('div', 'fn-card');
      const top = el('div', 'fn-top');
      top.append(el('div', 'fn-name', name), el('div', 'fn-n', pad(i)));
      const b = el('div', 'fn-brief');
      b.append(el('div', 'fn-brief-label', t.fnBriefLabel), el('div', 'fn-brief-text', brief));
      card.append(top, el('div', 'fn-role', role), b);
      return card;
    }),
    steps: t => t.steps.map(([title, body], i) => {
      const s = el('div', 'step');
      s.append(el('div', 'step-n', pad(i)), el('div', 'step-t', title), el('p', 'step-b', body));
      return s;
    }),
    mockBlocks: t => t.mockBlocks.map(b => {
      const d = el('div');
      d.append(el('div', 'mock-block-l', b.label), el('div', 'mock-block-t', b.text));
      return d;
    }),
    mockArtifacts: t => t.mockArtifacts.map(a => {
      const d = el('div', 'artifact');
      const img = el('div', 'artifact-img');
      img.append(icon(a.icon));
      d.append(img, el('div', 'artifact-l', a.label));
      return d;
    }),
    miniProofs: t => t.miniProofs.map(m => {
      const d = el('div', 'mini');
      const chips = el('div', 'chips');
      chips.append(el('span', 'pill pill-soft', m.fn));
      d.append(chips, el('div', 'mini-t', m.title), el('div', 'mini-w', m.who), el('div', 'mini-img'));
      return d;
    }),
    stats: t => t.statKeys.map(k => {
      const s = STATS[state.lang][k];
      const d = el('div', 'stat');
      d.append(el('div', 'stat-num', s.num), el('div', 'stat-t', s.text), el('div', 'stat-src', s.src));
      return d;
    }),
    faq: t => t.faq.map(([q, a], i) => {
      const open = i === state.openFaq;
      const item = el('div', 'faq-item');
      const btn = el('button', 'faq-q');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-controls', 'faq-a-' + i);
      const ic = el('span', 'faq-icon');
      ic.append(icon(open ? 'ph-minus' : 'ph-plus'));
      btn.append(el('span', null, q), ic);
      btn.addEventListener('click', () => { state.openFaq = open ? -1 : i; renderList('faq'); });
      const p = el('p', 'faq-a');
      p.id = 'faq-a-' + i;
      p.hidden = !open;
      // "[[text]]" in an answer marks a link to the founder's LinkedIn.
      const m = a.match(/^(.*?)\[\[(.+?)\]\](.*)$/s);
      if (m) {
        const link = el('a', null, m[2]);
        link.href = FOUNDER_URL; link.target = '_blank'; link.rel = 'noopener';
        p.append(m[1], link, m[3]);
      } else {
        p.textContent = a;
      }
      item.append(btn, p);
      return item;
    }),
    fields: t => {
      const prev = Object.fromEntries($$('.form-fields input', signupForm).map(i => [i.name, i.value]));
      return t.fields.map(f => {
        const label = el('label', 'field');
        const input = el('input', 'input');
        input.type = f.type; input.name = f.name; input.placeholder = f.ph;
        input.required = !!f.req; input.maxLength = f.type === 'email' ? 254 : 120;
        input.autocomplete = { firstName: 'given-name', lastName: 'family-name', email: 'email', company: 'organization' }[f.name] || 'off';
        if (prev[f.name]) input.value = prev[f.name];
        label.append(el('span', 'field-label', f.label), input);
        return label;
      });
    },
    chips: () => fnNames().map((name, i) => {
      const b = el('button', 'chip', name);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(state.chips.has(i)));
      b.addEventListener('click', () => {
        state.chips.has(i) ? state.chips.delete(i) : state.chips.add(i);
        renderList('chips');
        syncOther(i === fnNames().length - 1);
      });
      return b;
    })
  };

  function renderList(name) {
    const t = copy();
    $$(`[data-list="${name}"]`).forEach(c => c.replaceChildren(...lists[name](t)));
  }

  function syncOther(focus) {
    const on = state.chips.has(fnNames().length - 1);
    otherInput.hidden = !on;
    otherInput.required = on && state.audience === 'talent';
    otherInput.placeholder = UI[state.lang].otherPh;
    if (on && focus) otherInput.focus();
  }

  function render() {
    const t = copy();
    document.documentElement.lang = state.lang;
    document.title = UI[state.lang].title[state.audience];
    $$('[data-t]').forEach(n => { n.textContent = t[n.dataset.t] ?? ''; });
    Object.keys(lists).forEach(renderList);
    $$('[data-show]').forEach(n => { n.hidden = n.dataset.show !== state.audience; });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
    $('#switch-audience').textContent = state.audience === 'employers' ? t.forTalent : t.forEmployers;
    syncOther(false);
  }

  function showDone(done) {
    signupForm.hidden = done;
    $('#done').hidden = !done;
  }

  function setAudience(audience) {
    state.audience = audience;
    state.openFaq = 0;
    state.signup = null;
    showDone(false);
    const url = new URL(location.href);
    audience === 'employers' ? url.searchParams.set('for', 'employers') : url.searchParams.delete('for');
    history.replaceState(null, '', url);
    render();
  }

  // --- Submissions ---------------------------------------------------------

  function setError(form, msg) {
    const box = $('.form-error', form);
    box.textContent = msg || '';
    box.hidden = !msg;
  }

  function setBusy(form, busy) {
    const btn = $('button[type="submit"]', form);
    btn.disabled = busy;
    btn.setAttribute('aria-busy', String(busy));
  }

  async function post(path, payload) {
    let res;
    try {
      res = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } catch {
      throw new Error(UI[state.lang].errNetwork);
    }
    if (res.ok) return res.json().catch(() => ({}));
    let msg = UI[state.lang].errGeneric;
    try {
      const body = await res.json();
      if (body && body.error === 'invalid_email') msg = UI[state.lang].errEmail;
      if (body && body.error === 'invalid_linkedin') msg = UI[state.lang].errLinkedin;
    } catch { /* non-JSON error body */ }
    throw new Error(msg);
  }

  signupForm.addEventListener('submit', async e => {
    e.preventDefault();
    setError(signupForm, '');
    if (!signupForm.reportValidity()) return;
    const data = Object.fromEntries(new FormData(signupForm));
    const names = fnNames();
    const payload = {
      audience: state.audience,
      lang: state.lang,
      firstName: data.firstName, lastName: data.lastName, email: data.email,
      company: data.company, role: data.role,
      functions: state.audience === 'talent' ? [...state.chips].sort().map(i => i === names.length - 1 ? 'Other' : FN.en[i][0]) : [],
      otherFunction: state.chips.has(names.length - 1) ? data.otherFunction : '',
      consent: data.consent === 'on',
      website: data.website
    };
    setBusy(signupForm, true);
    try {
      const { token } = await post('/api/subscribe', payload);
      state.signup = { email: payload.email, firstName: payload.firstName, lastName: payload.lastName, token };
      liForm.hidden = false;
      $('#li-done').hidden = true;
      showDone(true);
      $('#done').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } catch (err) {
      setError(signupForm, err.message);
    } finally {
      setBusy(signupForm, false);
    }
  });

  liForm.addEventListener('submit', async e => {
    e.preventDefault();
    setError(liForm, '');
    const input = liForm.elements.linkedin;
    if (!liForm.reportValidity()) return;
    if (!/^https?:\/\/([a-z0-9-]+\.)*linkedin\.com\//i.test(input.value.trim())) {
      setError(liForm, UI[state.lang].errLinkedin);
      input.focus();
      return;
    }
    setBusy(liForm, true);
    try {
      await post('/api/linkedin', { ...state.signup, linkedin: input.value.trim(), lang: state.lang });
      liForm.hidden = true;
      $('#li-done').hidden = false;
    } catch (err) {
      setError(liForm, err.message);
    } finally {
      setBusy(liForm, false);
    }
  });

  $('#again').addEventListener('click', () => {
    signupForm.reset();
    liForm.reset();
    state.chips.clear();
    state.signup = null;
    showDone(false);
    render();
  });

  // --- Wiring --------------------------------------------------------------

  $$('[data-lang]').forEach(b => b.addEventListener('click', () => {
    state.lang = b.dataset.lang;
    store.set('cp-lang', state.lang);
    const url = new URL(location.href);
    url.searchParams.set('lang', state.lang);
    history.replaceState(null, '', url);
    render();
  }));

  $('#switch-audience').addEventListener('click', e => {
    e.preventDefault();
    setAudience(state.audience === 'employers' ? 'talent' : 'employers');
    window.scrollTo({ top: 0 });
  });

  render();
})();
