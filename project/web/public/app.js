(() => {
  'use strict';

  const FOUNDER_URL = 'https://www.linkedin.com/in/maritzabonano/';

  const UI = {
    en: {
      errGeneric: 'Something went wrong. Please try again, or email support@changepath.ai.',
      errNetwork: 'We couldn’t reach the server. Check your connection and try again.',
      errEmail: 'Please enter a valid email address.',
      otherPh: 'Which function? e.g. HR, Operations',
      title: { talent: 'ChangePath – Proof of work for AI-fluent talent', employers: 'ChangePath – Hire AI-fluent talent on proof, not CVs' }
    },
    de: {
      errGeneric: 'Da ist etwas schiefgelaufen. Bitte versuch es noch einmal oder schreib an support@changepath.ai.',
      errNetwork: 'Keine Verbindung zum Server. Bitte prüf deine Verbindung und versuch es erneut.',
      errEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      otherPh: 'Welcher Bereich? z. B. HR, Operations',
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
      // First and last name sit side by side; everything after spans the row.
      const label = el('label', i < 2 ? 'field' : 'field field-wide');
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
      b.setAttribute('aria-pressed', String(state.chips.has(i)));
      b.addEventListener('click', () => {
        state.chips.has(i) ? state.chips.delete(i) : state.chips.add(i);
        forms.forEach(f => renderChips(f.form));
        syncOther(i === fnNames().length - 1 ? form : null);
      });
      return b;
    }));
  }

  function renderList(name) {
    const t = copy();
    $$(`[data-list="${name}"]`).forEach(c => c.replaceChildren(...lists[name](t)));
  }

  // "Other" opens a required text field; focus it in the form that was clicked.
  function syncOther(focusForm) {
    const on = state.chips.has(fnNames().length - 1);
    forms.forEach(({ form }) => {
      const input = form.elements.otherFunction;
      input.hidden = !on;
      input.required = on && state.audience === 'talent';
      input.placeholder = UI[state.lang].otherPh;
      if (on && form === focusForm) input.focus();
    });
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
    syncOther(false);
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

  async function submit(form) {
    setError(form, '');
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
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
    setBusy(form, true);
    try {
      await post('/api/subscribe', payload);
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
