(() => {
  'use strict';

  const FOUNDER_URL = 'https://www.linkedin.com/in/maritzabonano/';

  const UI = {
    en: {
      errGeneric: 'Something went wrong. Please try again, or email support@changepath.ai.',
      errNetwork: 'We couldn’t reach the server. Check your connection and try again.',
      errEmail: 'Please enter a valid email address.',
      errFunction: 'Please choose your function.',
      title: { talent: 'ChangePath – Proof of work for AI-fluent talent', employers: 'ChangePath – Hire AI-fluent talent on proof, not CVs' }
    },
    de: {
      errGeneric: 'Da ist etwas schiefgelaufen. Bitte versuch es noch einmal oder schreib an support@changepath.ai.',
      errNetwork: 'Keine Verbindung zum Server. Bitte prüf deine Verbindung und versuch es erneut.',
      errEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      errFunction: 'Bitte wähle deinen Bereich.',
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
    fn: -1, // chosen function chip (single choice, as in the Brevo form)
    submitted: false, // shared by both sign-up forms
    fnPage: 0
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

  // Both sign-up forms (#waitlist and #proof) are built from one template.
  const forms = $$('[data-form]').map(host => {
    host.append($('#signup-tpl').content.cloneNode(true));
    return { host, form: $('form', host) };
  });

  // Talent sign-ups post straight to the Brevo form "Waitlist" (simple HTML embed).
  // JOB_FIELD option values follow the order of the chips: Product = 1 … Other = 7.
  const BREVO_FORM_URL = 'https://d438b4f3.sibforms.com/serve/MUIFANsCVGaD0BWq0rCTzz8mhUZtQbJVftCeP6mlFxDiNiezbUxX7Aeaxsuq0GLGbrh7VWZ8unLzagGbfun3bHpLjLwd9QlyAgBzgwpA0gRsTI8DmqyjIwXNjTapwTkJSGLjQBg3p8o0p5xMzF3pMI4yGu5TkhI0k6qsadTTeKH5dN6M8HZqQnJVabJznjcaDfbtUyNqXw4Zo2d6yQ==';
  const UTM_KEYS = ['utm_campaign', 'utm_medium', 'utm_source', 'utm_content'];

  const FN_PER_PAGE = 3;
  const fnPages = () => Math.ceil(FN[state.lang].length / FN_PER_PAGE);

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
    functions: t => FN[state.lang].map((f, i) => [f, i]).slice(state.fnPage * FN_PER_PAGE, (state.fnPage + 1) * FN_PER_PAGE).map(([[name, role, brief], i]) => {
      const card = el('div', 'fn-card');
      const top = el('div', 'fn-top');
      top.append(el('div', 'fn-name', name), el('div', 'fn-n', pad(i)));
      const b = el('div', 'fn-brief');
      b.append(el('div', 'fn-brief-label', t.fnBriefLabel), el('div', 'fn-brief-text', brief));
      card.append(top, el('div', 'fn-role', role), b);
      return card;
    }),
    fnDots: () => Array.from({ length: fnPages() }, (_, p) => {
      const b = el('button', 'car-dot');
      b.type = 'button';
      b.setAttribute('aria-label', 'Page ' + (p + 1));
      b.setAttribute('aria-current', String(p === state.fnPage));
      b.addEventListener('click', () => carousel.go(p));
      return b;
    }),
    cmpOld: t => t.cmpOld.map(text => cmpItem('ph-x', text)),
    cmpNew: t => t.cmpNew.map(text => cmpItem('ph-check', text)),
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
  };

  function cmpItem(iconName, text) {
    const d = el('div', 'cmp-item');
    d.append(icon(iconName), el('span', null, text));
    return d;
  }

  function renderFields(form, t) {
    const box = $('[data-fields]', form);
    const prev = Object.fromEntries($$('input', box).map(i => [i.name, i.value]));
    box.replaceChildren(...t.fields.map((f, i) => {
      // First and last name sit side by side; everything else spans the row.
      const pair = t.fields.some(x => x.name === 'lastName') && (f.name === 'firstName' || f.name === 'lastName');
      const label = el('label', pair ? 'field' : 'field field-wide');
      const input = el('input', 'input');
      input.type = f.type; input.name = f.name; input.placeholder = f.ph;
      input.required = !!f.req; input.maxLength = f.type === 'email' ? 254 : 120;
      input.autocomplete = { firstName: 'given-name', lastName: 'family-name', email: 'email', company: 'organization' }[f.name] || 'off';
      if (prev[f.name]) input.value = prev[f.name];
      label.append(el('span', 'field-label', f.label), input);
      return label;
    }));
  }

  function renderChips(form) {
    $('[data-chips]', form).replaceChildren(...fnNames().map((name, i) => {
      const b = el('button', 'chip', name);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(state.fn === i));
      b.addEventListener('click', () => {
        state.fn = state.fn === i ? -1 : i;
        forms.forEach(f => { renderChips(f.form); setError(f.form, ''); });
      });
      return b;
    }));
  }

  function renderList(name) {
    const t = copy();
    $$(`[data-list="${name}"]`).forEach(c => c.replaceChildren(...lists[name](t)));
  }

  function render() {
    const t = copy();
    document.documentElement.lang = state.lang;
    document.title = UI[state.lang].title[state.audience];
    $$('[data-t]').forEach(n => { n.textContent = t[n.dataset.t] ?? ''; });
    Object.keys(lists).forEach(renderList);
    forms.forEach(({ host, form }) => {
      $('[data-cta]', form).textContent = t[host.dataset.cta] ?? '';
      $('[data-fine]', form).textContent = t[host.dataset.fine] ?? '';
      renderFields(form, t);
      renderChips(form);
    });
    $$('[data-show]').forEach(n => { n.hidden = n.dataset.show !== state.audience; });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
    $('#switch-audience').textContent = state.audience === 'employers' ? t.forTalent : t.forEmployers;
  }

  function showDone(done) {
    state.submitted = done;
    forms.forEach(({ host }) => { host.hidden = done; });
    $$('[data-done]').forEach(n => { n.hidden = !done; });
  }

  function setAudience(audience) {
    state.audience = audience;
    state.openFaq = 0;
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
    } catch { /* non-JSON error body */ }
    throw new Error(msg);
  }

  // Brevo's form endpoint answers without CORS headers, so the response can't be
  // read: a request that reaches it counts as sent, a network failure as an error.
  async function postToBrevoForm(data) {
    const body = new URLSearchParams({
      VORNAME: data.firstName,
      EMAIL: data.email,
      JOB_FIELD: String(state.fn + 1),
      email_address_check: data.cp_extra || '',
      locale: state.lang,
      html_type: 'simple'
    });
    UTM_KEYS.forEach(k => body.set(k.toUpperCase(), params.get(k) || ''));
    try {
      await fetch(BREVO_FORM_URL, { method: 'POST', mode: 'no-cors', body });
    } catch {
      throw new Error(UI[state.lang].errNetwork);
    }
  }

  async function submit(form) {
    setError(form, '');
    if (!form.reportValidity()) return;
    const talent = state.audience === 'talent';
    if (talent && state.fn < 0) {
      setError(form, UI[state.lang].errFunction);
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    setBusy(form, true);
    try {
      if (talent) {
        await postToBrevoForm(data);
      } else {
        await post('/api/subscribe', {
          audience: 'employers', lang: state.lang,
          firstName: data.firstName, lastName: data.lastName, email: data.email,
          company: data.company, role: data.role,
          consent: data.consent === 'on',
          website: data.cp_extra
        });
      }
      showDone(true);
      $('[data-done]', form.closest('section')).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } catch (err) {
      setError(form, err.message);
    } finally {
      setBusy(form, false);
    }
  }

  forms.forEach(({ form }) => form.addEventListener('submit', e => { e.preventDefault(); submit(form); }));

  // --- Functions carousel ----------------------------------------------------
  // Advances every 6s, pauses on hover; dots and arrows switch at once and reset the timer.

  const carousel = (() => {
    const root = $('.carousel');
    const grid = $('[data-list="functions"]', root);
    const still = matchMedia('(prefers-reduced-motion: reduce)');
    let timer = null, fading = false, hovered = false;

    function go(p, auto) {
      if (p === state.fnPage || fading) return;
      if (!auto) restart();
      fading = true;
      grid.classList.add('fading');
      setTimeout(() => {
        state.fnPage = p;
        renderList('functions');
        renderList('fnDots');
        grid.classList.remove('fading');
        fading = false;
      }, still.matches ? 0 : 450);
    }
    const next = auto => go((state.fnPage + 1) % fnPages(), auto);
    function restart() {
      clearInterval(timer);
      if (!still.matches) timer = setInterval(() => { if (!hovered) next(true); }, 6000);
    }

    root.addEventListener('mouseenter', () => { hovered = true; });
    root.addEventListener('mouseleave', () => { hovered = false; });
    $('.car-prev', root).addEventListener('click', () => go((state.fnPage + fnPages() - 1) % fnPages()));
    $('.car-next', root).addEventListener('click', () => next(false));
    restart();
    return { go };
  })();

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
