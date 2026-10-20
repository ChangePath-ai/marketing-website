// Copy from the Claude Design handoff (ChangePath Landing.dc.html).
const FN = {
  en: [
    ['Product', 'AI Product Manager', 'Spec an AI feature from PRD to eval plan & LLM cost calculations.'],
    ['Design', 'AI-Augmented Product Designer', 'Prototype an onboarding flow end-to-end and get feedback from a synthetic audience.'],
    ['Marketing', 'AI Marketing Ops Lead', 'Create a content pipeline that builds a brand\'s visibility in LLM responses.'],
    ['Sales', 'Sales Ops Manager, AI processes', 'Create a sales pipeline, enrigh the contacts and automate cold outreach for an ICP.'],
    ['Legal', 'Legal Ops & AI Counsel', 'Create an AI-assisted contract-review tool for sales teams to create client offers.'],
    ['Finance', 'AI Finance & Controlling Lead', 'Create a yearly financial plan with 3 scenarios and ship a month-end variance explainer for leadership.']
  ],
  de: [
    ['Product', 'AI Product Manager', 'Ein KI-Feature aus einer echten Anzeige spezifizieren – PRD, Evaluierung, Rollout.'],
    ['Design', 'KI-gestützte:r Product Designer:in', 'Einen Onboarding-Flow komplett mit generativen Tools prototypen.'],
    ['Marketing', 'AI Marketing Ops Lead', 'Einen Launch-Workflow mit Agenten und menschlicher Prüfung neu bauen.'],
    ['Sales', 'Sales Ops Manager:in, KI-Prozesse', 'Account-Recherche für ein Zielsegment automatisieren.'],
    ['Legal', 'Legal Ops & AI Counsel', 'Ein KI-gestütztes Playbook für die Prüfung von Lieferanten-NDAs entwerfen.'],
    ['Finance', 'AI Finance & Controlling Lead', 'Einen Abweichungs-Erklärer für den Monatsabschluss bauen.']
  ]
};

const STATS = {
  en: {
    a: { num: '288', text: 'job titles with "AI" in the name in Germany in Q1 2026 (up from 72 in 2022).', src: 'Indeed Hiring Lab, 2026' },
    b: { num: '59%', text: 'of those AI-touched roles sit outside of tech.', src: 'Indeed Hiring Lab, 2026' },
    c: { num: '67%', text: 'of hiring managers say AI-generated applications have slowed hiring down.', src: 'Robert Half UK, Jun 2026' },
    d: { num: '85%', text: 'of German firms not yet using AI say they lack the know-how to bring it in.', src: 'Bitkom, Sep 2026' }
  },
  de: {
    a: { num: '288', text: 'Jobtitel mit „KI“ im Namen gab es in Deutschland im Q1 2026 – 2022 waren es 72.', src: 'Indeed Hiring Lab, 2026' },
    b: { num: '59%', text: 'dieser KI-Rollen liegen außerhalb der Tech-Branche.', src: 'Indeed Hiring Lab, 2026' },
    c: { num: '67%', text: 'der Hiring Manager sagen: KI-generierte Bewerbungen verlangsamen die Einstellung.', src: 'Robert Half UK, Jun 2026' },
    d: { num: '85%', text: 'der deutschen Firmen ohne KI nennen fehlendes Know-how als Grund.', src: 'Bitkom, Sep 2026' }
  }
};

const COPY = {
  en: {
    shared: {
      navVision: 'Vision', navFunctions: 'Functions', navHow: 'How it works', navProof: 'Proof', navFaq: 'FAQ',
      forTalent: 'For talent', forEmployers: 'For employers', navCta: 'Join the waitlist',
      badgeProof: 'PROOF OF WORK', fnBriefLabel: 'SAMPLE PROOF BRIEF', howLabel: 'How it works', proofLabel: 'Sign up to be the first to know', betaBadge: 'CLOSED BETA · INVITE ONLY', betaCantWait: 'Can’t wait?', betaDm: 'DM our founder', statsLabel: 'Why TRUST CHANGEPATH',
      mockFrom: 'Senior Marketing Manager', mockTo: 'AI Marketing Ops Lead', mockMatch: '87% MATCH',
      mockFor: 'Built for: AI Marketing Ops Lead at a Berlin scale-up. Brief derived from the live posting.',
      mockBlocks: [
        { label: 'The task', text: 'Cut the time from product launch to a localised campaign kit in DE, EN and FR.' },
        { label: 'How I used AI', text: 'A Claude + Make workflow that drafts the brief, localises copy and flags brand-voice risks for human review.' },
        { label: 'Result', text: 'Launch kit in 3 hours instead of 4 days. Workflow, prompt library and walkthrough attached.' }
      ],
      mockArtifacts: [{ icon: 'ph-play-circle', label: 'Walkthrough · 3:40' }, { icon: 'ph-flow-arrow', label: 'Workflow map' }, { icon: 'ph-files', label: 'Prompt library' }],
      mockRead: '4 MIN REVIEW', mockOpened: 'OPENED BY HIRING MANAGER', mockPass: 'Pass', mockInvite: 'Invite to interview',
      miniProofs: [
        { fn: 'LEGAL', title: 'Clause-risk triage for supplier contracts', who: 'In-house counsel → Legal Ops & AI' },
        { fn: 'FINANCE', title: 'Month-end variance explainer for the leadership pack', who: 'Senior controller → AI Finance Lead' }
      ],
      pitchLine: 'The certificate shows you can use AI. The ChangePath project shows you can do the job with it.',
      faqTitle: 'Questions, answered.', imprint: 'Imprint', privacy: 'Privacy',
      doneAgain: 'Submit another', cliche: 'Results-driven professional with a passion for leveraging AI to drive innovation and deliver impact across cross-functional teams.'
    },
    talent: {
      eyebrow: 'AI-FLUENT TALENT · OUTSIDE TECH · DACH',
      heroA1: 'Every AI-written CV looks the same.', heroA2: 'Your work doesn’t.',
      heroB1: 'CVs are free now.', heroB2: 'Proof isn’t.',
      heroSub: 'ChangePath turns real job postings into short proof-of-work projects you can build, so hiring managers see your experience come to life.',
      ctaPrimary: 'Join the waitlist', ctaSecondary: 'See a proof page',
      pileTag: 'YOU + 311 OTHER APPLICANTS', pileFn: 'FINANCE',
      pileTitle: 'AI-assisted pricing review, built from the posting itself', pileWho: 'Controller → AI Finance & Controlling Lead', pileMeta: 'OPENED BY HIRING MANAGER · 2 MIN',
      cliches: ['Results-driven', 'Passionate about AI', 'Proven track record', 'Cross-functional team player', 'Leveraging cutting-edge tools'],
      proofChip: 'A proof page they actually open',
      visionLabel: 'Our vision', visionTitle: 'Talent over titles.', visionIntro: 'We believe that showing your talent speaks volumes, in a way that a generic CV simply doesn\'t. And your years of hard earned expertise are what makes AI valuable. ',
      vision: [['The CV is dead.', 'Proof of work is the new signal. Show what you can do, not what you claim.'], ['Your expertise is your edge.', 'AI makes years of domain knowledge sharper, not obsolete.'], ['Fewer applications. Stronger signal.', 'Every proof page is reviewed by a human, not filtered by a keyword bot.']],
      fnTitle: 'Your field. Now AI-augmented.', fnSub: 'We don’t push you into tech. We help you take your expertise and supercharge it with AI.',
      howTitle: 'From job posting to proof in minutes, not months.',
      steps: [
        ['Get matched', 'Upload your CV. We map your transferable skills to AI-augmented roles that are hiring right now.'],
        ['Get your brief', 'Find a job you want? We create a project brief specifically for you, based on the job description and your strengths. '],
        ['Build your proof', 'Build it with AI. Show employers you can do the job and stand out. Get a shareable proof page a hiring manager can review.'],
        ['Apply & reach out', 'Apply to jobs using your shareable portfolio. We help you find the hiring manager and recruiter so you can reach out and link it in your application. Fewer applications, more replies.']
      ],
      proofTitle: 'Curious what a proof-of-work portfolio looks like?', proofSub: '', betaBody: 'Sign up and be the first to know. Early sign-ups get the first spots.',
      statsTitle: 'The roles exist. Your CV just doesn\'t show how you fit them.', statKeys: ['a', 'b', 'c', 'd'],
      quote: 'How can I get a human to look at my application in the first place?', quoteBy: 'the question we get in every single user interview',
      faq: [
        ['Is this a course or a bootcamp?', 'No. No cohorts, no six-month curriculum. ChangePath is dynamic and on demand. We create a proof project for every role you actually want to apply for. This way you can show employers what your skills are, rather than applying with a generic CV. '],
        ['I’m not a developer. Is this for me?', 'You\'re exactly who we build ChangePath for.  We are purpose built for Product Managers, Designers, Marketing Managers, Sales, Legal and Finance professionals who want to level up their AI knowledge in their field.  We want to help you become the top 1% of your field. '],
        ['How long does a proof project take?', 'Most briefs are designed to be finished in a few focused blocks. Think about 2-3 Pomodoro sessions.  You can start at your own pace. Pause and come back when you\'d like.  That said, we’re calibrating the right size with our first users. If you have feedback, we\'d love to hear it! Reach out to our founder to share your thoughts: https://www.linkedin.com/in/maritzabonano/'],
        ['Do I need to speak German?', 'No. We’re proudly DACH-native and English-friendly, and we match you to roles that fit your language proficiency. '],
        ['What does it cost?', 'Early access is free during our pilot. Waitlist members will get our discounted founding member\'s pricing. Sign up to the waitlist to be the first to know. And if you want to be part of the free early access - [[DM our founder on Linkedin]]. She might be able to squeeze you in ;) ']
      ],
      formLabel: 'Early access', formTitle: 'Stop sending CVs into the void', formSub: 'Join the waitlist and get early access before everyone else',
      fields: [
        { name: 'firstName', label: 'First name', ph: 'Lena', type: 'text', req: true },
        { name: 'lastName', label: 'Last name', ph: 'Weber', type: 'text', req: true },
        { name: 'email', label: 'Email', ph: 'lena@email.com', type: 'email', req: true }
      ],
      consentPre: 'I agree that ChangePath may store and use my data to contact me about early access. I can withdraw my consent at any time by emailing support@changepath.ai. Details in our ', consentLink: 'privacy policy', consentPost: '.', chipLabel: 'Your function', formCta: 'Join the waitlist', formFine: 'No spam. We’ll only email you about early access.',
      doneTitle: 'You’re on the list.', doneBody: 'One last step: we’ve sent you an email. Click the link inside to confirm your spot.', upBadge: 'SKIP THE LINE', upTitle: 'Want in before everyone else?', upBody: 'Share your LinkedIn profile and get early beta access, plus a 20-minute call with our founder to map your first proof project.', upLabel: 'LinkedIn profile', upCta: 'Get early access + 20-min call', upFine: 'We only use your profile to assess beta fit and schedule your call.', upDoneTitle: 'You’re in the beta queue.', upDoneBody: 'We’ll review your profile and email you a link to book your 20-minute call.'
    },
    employers: {
      eyebrow: 'FOR HIRING TEAMS · KMU & SCALE-UPS · DACH',
      heroA1: '300 applications per role. They all look the same.', heroA2: 'Meet the three that matter.',
      heroB1: 'Stop reading CVs.', heroB2: 'Start reviewing proof.',
      heroSub: 'We don\'t believe in volume, but quality. We bring you AI-fluent domain experts who apply with proof of work, not a generic CV.',
      ctaPrimary: 'Request pilot access', ctaSecondary: 'See a proof page',
      pileTag: '312 APPLICATIONS · 1 ROLE', pileFn: 'SHORTLIST · 3 OF 312',
      pileTitle: 'Already did a piece of the job — with AI', pileWho: 'Role-specific work sample · ready before interview #1', pileMeta: 'REVIEW IN 2 MIN · NOT 2 WEEKS',
      cliches: ['Results-driven', 'Passionate about AI', 'Proven track record', 'Cross-functional team player', 'Leveraging cutting-edge tools'],
      proofChip: 'Evidence, before the first call',
      visionLabel: 'Our vision', visionTitle: 'Signal over noise.', visionIntro: 'AI made applications free to produce. We make the signal scarce again.',
      vision: [['No more 300 identical CVs.', 'Hiring should start with evidence, not a pile of AI-polished applications.'], ['Reduce risk of hiring wrong talent. ', 'AI fluency is proven by doing, not by badges, certificates or keyword stuffing on a CV.'], ['Talent that delivers the AI transformation.', 'We focus on AI talents outside of Engineering. People who bring AI into every business function, with a strong track record in their area of expertise.']],
      fnTitle: 'AI fluency, in every function.', fnSub: 'Talent that already applies AI in problems that your business is urgently trying to solve. ',
      howTitle: 'Screening that starts from evidence.',
      steps: [
        ['Share a role', 'Share your job post link. No new ATS, no setup, no lengthy intake.'],
        ['We brief', 'We turn it into a role-specific work sample — the take-home task your hiring manager doesn\'t have time to design.'],
        ['They show prove', 'Experienced, AI-fluent domain experts complete it and publish a proof page.'],
        ['You review', 'A short list of proof pages where candidates show their work. Share with the hiring loop and reduce the time per hire.']
      ],
      proofTitle: 'Curious what a proof page looks like for candidates?', proofSub: 'We’re in closed beta with a handpicked group of talent acquisition teams in Germany. Pilot spots are limited.', betaBody: 'Sign up to the list and we’ll update you as soon as we’re live. Early sign-ups get first access to pilot spots.',
      statsTitle: 'The flood is real. So is the skills gap.', statKeys: ['c', 'd', 'a', 'b'],
      quote: 'Job-specific methods like work samples predict performance better than general measures.', quoteBy: 'Sackett et al., 2022 — Journal of Applied Psychology',
      faq: [
        ['Is ChangePath a recruiting agency?', 'Not a classic one. We don’t filter and forward you CVs. We introduce AI fluent candidates who can demonstrate that they can do the job.'],
        ['Do we have to design the task?', 'No, but you approve it before it goes live. We create a suggested brief from your job posting. You can review and adjust it before it goes out.'],
        ['Who are the candidates?', 'Experienced professionals with strong track records in functions like: product, design, marketing, sales, legal and finance. They are the top 1%-ers who not only bring the subject matter expertise, but the AI knowledge into your organization.'],
        ['What does a pilot cost?', 'We’re running 5 pilots with a handpicked group of German companies this quarter. Pilot partners will help shape pricing. If you\'d like to be a part of the pilot program, reach out to our founder on Linkedin. She might be able to open up a spot for you if we see you\'re the right fit. '],
        ['Can I hire for German-speaking and English-speaking roles?', 'Yes. When you share your job description, you\'ll confirm the main requirements for the job, including language. We match you accordingly.']
      ],
      formLabel: 'Pilot partners', formTitle: 'Hire on proof, not on promises.', formSub: 'Share one open role. Get a shortlist of proof pages from AI-fluent domain experts — in weeks, not months.',
      fields: [
        { name: 'firstName', label: 'First name', ph: 'Jonas', type: 'text', req: true },
        { name: 'lastName', label: 'Last name', ph: 'Becker', type: 'text', req: true },
        { name: 'email', label: 'Work email', ph: 'jonas@company.de', type: 'email', req: true },
        { name: 'company', label: 'Company', ph: 'Company GmbH', type: 'text', req: true },
        { name: 'role', label: 'Role you’re hiring for', ph: 'e.g. Sales Ops Manager, AI processes', type: 'text', req: false }
      ],
      consentPre: 'I agree that ChangePath may store and use my data to contact me about a pilot. I can withdraw my consent at any time by emailing support@changepath.ai. Details in our ', consentLink: 'privacy policy', consentPost: '.', formCta: 'Request pilot access', formFine: 'We’ll reply within two business days.',
      doneTitle: 'Thanks — we’ll be in touch.', doneBody: 'Please confirm your email address via the link we’ve just sent you. Expect a short note from our founder within two business days to scope your first role.'
    }
  },
  de: {
    shared: {
      navVision: 'Vision', navFunctions: 'Bereiche', navHow: 'So funktioniert’s', navProof: 'Proof', navFaq: 'FAQ',
      forTalent: 'Für Talente', forEmployers: 'Für Unternehmen', navCta: 'Zur Warteliste',
      badgeProof: 'PROOF OF WORK', fnBriefLabel: 'BEISPIEL-PROOF-BRIEF', howLabel: 'So funktioniert’s', proofLabel: 'Closed Beta', betaBadge: 'CLOSED BETA · NUR AUF EINLADUNG', betaCantWait: 'Keine Geduld?', betaDm: 'Schreib unserer Gründerin', statsLabel: 'Warum jetzt',
      mockFrom: 'Senior Marketing Manager', mockTo: 'AI Marketing Ops Lead', mockMatch: '87% MATCH',
      mockFor: 'Erstellt für: AI Marketing Ops Lead bei einem Berliner Scale-up. Brief abgeleitet aus der echten Anzeige.',
      mockBlocks: [
        { label: 'Die Aufgabe', text: 'Die Zeit vom Produktlaunch bis zum lokalisierten Kampagnen-Kit (DE, EN, FR) verkürzen.' },
        { label: 'So habe ich KI eingesetzt', text: 'Ein Claude + Make-Workflow, der das Briefing entwirft, Texte lokalisiert und Brand-Voice-Risiken zur menschlichen Prüfung markiert.' },
        { label: 'Ergebnis', text: 'Launch-Kit in 3 Stunden statt 4 Tagen. Workflow, Prompt-Bibliothek und Walkthrough im Anhang.' }
      ],
      mockArtifacts: [{ icon: 'ph-play-circle', label: 'Walkthrough · 3:40' }, { icon: 'ph-flow-arrow', label: 'Workflow-Map' }, { icon: 'ph-files', label: 'Prompt-Bibliothek' }],
      mockRead: '4 MIN PRÜFZEIT', mockOpened: 'VOM HIRING MANAGER GEÖFFNET', mockPass: 'Absagen', mockInvite: 'Zum Interview einladen',
      miniProofs: [
        { fn: 'LEGAL', title: 'Klausel-Risiko-Triage für Lieferantenverträge', who: 'Syndikusanwältin → Legal Ops & AI' },
        { fn: 'FINANCE', title: 'Abweichungs-Erklärer für den Monatsabschluss', who: 'Senior Controller → AI Finance Lead' }
      ],
      pitchLine: 'Das Zertifikat zeigt, dass du KI nutzen kannst. Das ChangePath-Projekt zeigt, dass du den Job damit machen kannst.',
      faqTitle: 'Fragen & Antworten.', imprint: 'Impressum', privacy: 'Datenschutz',
      doneAgain: 'Weitere Anfrage senden', cliche: 'Ergebnisorientierte Fachkraft mit Leidenschaft dafür, KI für Innovation und messbaren Impact in cross-funktionalen Teams einzusetzen.'
    },
    talent: {
      eyebrow: 'KI-AFFINE TALENTE · AUSSERHALB DER TECH · DACH',
      heroA1: 'Jeder KI-Lebenslauf sieht gleich aus.', heroA2: 'Deine Arbeit nicht.',
      heroB1: 'Lebensläufe sind gratis.', heroB2: 'Beweise nicht.',
      heroSub: 'ChangePath macht aus echten Stellenanzeigen kurze Proof-of-Work-Projekte. So sehen Hiring Manager, was du in deinem Fach mit KI kannst – in Product, Design, Marketing, Sales, Legal oder Finance.',
      ctaPrimary: 'Zur Warteliste', ctaSecondary: 'Proof-Seite ansehen',
      pileTag: 'DU + 311 WEITERE BEWERBUNGEN', pileFn: 'FINANCE',
      pileTitle: 'KI-gestützte Preisanalyse, direkt aus der Anzeige gebaut', pileWho: 'Controller → AI Finance & Controlling Lead', pileMeta: 'VOM HIRING MANAGER GEÖFFNET · 2 MIN',
      cliches: ['Ergebnisorientiert', 'Leidenschaft für KI', 'Nachweisliche Erfolge', 'Teamplayer', 'Innovative Tools'],
      proofChip: 'Eine Proof-Seite, die wirklich geöffnet wird',
      visionLabel: 'Unsere Vision', visionTitle: 'Talent statt Titel.', visionIntro: 'Du hast zehn Jahre Expertise. KI hat sie nur schwerer sichtbar gemacht. Wir machen sie unübersehbar.',
      vision: [['Der Lebenslauf hat ausgedient.', 'Proof of Work ist das neue Signal. Zeig, was du kannst – nicht, was du behauptest.'], ['Deine Expertise ist dein Vorsprung.', 'KI macht jahrelanges Fachwissen schärfer, nicht überflüssig.'], ['Weniger Bewerbungen. Stärkeres Signal.', 'Jede Proof-Seite wird von einem Menschen geprüft, nicht von einem Keyword-Filter.']],
      fnTitle: 'Dein Fach. Jetzt mit KI.', fnSub: 'Wir drängen dich nicht in die Tech. Wir helfen dir, KI in die Arbeit zu bringen, die du schon kennst – und es bei Rollen zu beweisen, die jetzt besetzt werden.',
      howTitle: 'Von der Anzeige zum Beweis – in Tagen, nicht Monaten.',
      steps: [
        ['Matches finden', 'Lade deinen Lebenslauf hoch. Wir übersetzen deine Skills in KI-gestützte Rollen in deinem Fach, die gerade ausgeschrieben sind.'],
        ['Brief erhalten', 'Für jede Rolle ein Proof-Brief: ein kleines Projekt aus der echten Anzeige und deinen Skill-Lücken. Wir nehmen dich an die Hand.'],
        ['Proof bauen', 'Bau es in wenigen Tagen mit KI. Du bekommst eine Proof-Seite, die ein Hiring Manager in zwei Minuten prüft.'],
        ['Bewerben & vernetzen', 'Verlinke sie in deiner Bewerbung oder LinkedIn-Nachricht. Weniger Bewerbungen, mehr Antworten.']
      ],
      proofTitle: 'Neugierig, wie ein Proof-of-Work-Portfolio aussieht?', proofSub: 'Damit bist du nicht allein. Wir sind in der Closed Beta – erst eine Handvoll Fachleute hat schon eins.', betaBody: 'Trag dich in die Liste ein und wir melden uns, sobald wir live sind. Wer früh dabei ist, bekommt die ersten Plätze.',
      statsTitle: 'Die Rollen gibt es. Ein Lebenslauf zeigt nur nicht, dass du passt.', statKeys: ['a', 'b', 'c', 'd'],
      quote: 'Wie bringe ich überhaupt einen Menschen dazu, sich meine Bewerbung anzusehen?', quoteBy: 'Gefragt in jedem unserer Nutzerinterviews',
      faq: [
        ['Ist das ein Kurs oder Bootcamp?', 'Nein. Keine Kohorten, kein Sechs-Monats-Curriculum. Ein Proof-Projekt pro Wunschrolle – in Tagen, nicht Monaten.'],
        ['Ich komme nicht aus der Tech. Passt das?', 'Genau dafür ist es gemacht: für Fachleute aus Product, Design, Marketing, Sales, Legal und Finance, die KI in ihr eigenes Fach bringen wollen.'],
        ['Wie lange dauert ein Proof-Projekt?', 'Die meisten Briefs sind auf wenige fokussierte Tage mit KI ausgelegt. Die ideale Größe kalibrieren wir mit unseren ersten Nutzer:innen.'],
        ['Muss ich Deutsch sprechen?', 'Nein. Wir sind in DACH zu Hause und englischfreundlich – wir matchen dich mit Rollen, die zu deinen Sprachen passen.'],
        ['Was kostet das?', 'Early Access ist während unseres Piloten kostenlos. Wer auf der Warteliste steht, erfährt Preise zuerst.']
      ],
      formLabel: 'Early Access', formTitle: 'Schluss mit Bewerbungen ins Leere.', formSub: 'Komm auf die Warteliste. Wir nehmen in diesem Quartal die erste Kohorte KI-affiner Fachleute in DACH auf.',
      fields: [
        { name: 'firstName', label: 'Vorname', ph: 'Lena', type: 'text', req: true },
        { name: 'lastName', label: 'Nachname', ph: 'Weber', type: 'text', req: true },
        { name: 'email', label: 'E-Mail', ph: 'lena@email.de', type: 'email', req: true }
      ],
      consentPre: 'Ich willige ein, dass ChangePath meine Daten speichert und nutzt, um mich zum Early Access zu kontaktieren. Ich kann meine Einwilligung jederzeit per E-Mail an support@changepath.ai widerrufen. Mehr in der ', consentLink: 'Datenschutzerklärung', consentPost: '.', chipLabel: 'Dein Bereich', formCta: 'Zur Warteliste', formFine: 'Kein Spam. Wir schreiben dir nur zum Early Access.',
      doneTitle: 'Du bist auf der Liste.', doneBody: 'Ein letzter Schritt: Wir haben dir eine E-Mail geschickt. Klick auf den Link darin, um deinen Platz zu bestätigen.', upBadge: 'ÜBERSPRING DIE WARTELISTE', upTitle: 'Willst du früher rein?', upBody: 'Teil dein LinkedIn-Profil und erhalte frühen Beta-Zugang plus ein 20-minütiges Gespräch mit unserer Gründerin, um dein erstes Proof-Projekt zu planen.', upLabel: 'LinkedIn-Profil', upCta: 'Beta-Zugang + 20-Min-Call sichern', upFine: 'Wir nutzen dein Profil nur, um die Beta-Eignung zu prüfen und deinen Call zu planen.', upDoneTitle: 'Du bist in der Beta-Warteschlange.', upDoneBody: 'Wir schauen uns dein Profil an und schicken dir per E-Mail einen Link für dein 20-Minuten-Gespräch.'
    },
    employers: {
      eyebrow: 'FÜR HIRING TEAMS · KMU & SCALE-UPS · DACH',
      heroA1: '300 Bewerbungen. Alle gleich.', heroA2: 'Lernen Sie die drei kennen, die geliefert haben.',
      heroB1: 'Schluss mit Lebensläufen.', heroB2: 'Prüfen Sie Beweise.',
      heroSub: 'Wir überfluten Sie nicht mit Hunderten Bewerbungen pro Stelle. Wir bringen Ihnen KI-versierte Fachexpert:innen, die sich mit einer Arbeitsprobe bewerben – nicht mit einem generischen Lebenslauf.',
      ctaPrimary: 'Pilotzugang anfragen', ctaSecondary: 'Proof-Seite ansehen',
      pileTag: '312 BEWERBUNGEN · 1 STELLE', pileFn: 'SHORTLIST · 3 VON 312',
      pileTitle: 'Hat schon ein Stück des Jobs erledigt – mit KI', pileWho: 'Rollenspezifische Arbeitsprobe · vor dem ersten Interview', pileMeta: 'PRÜFEN IN 2 MIN · NICHT 2 WOCHEN',
      cliches: ['Ergebnisorientiert', 'Leidenschaft für KI', 'Nachweisliche Erfolge', 'Teamplayer', 'Innovative Tools'],
      proofChip: 'Belege vor dem ersten Gespräch',
      visionLabel: 'Unsere Vision', visionTitle: 'Signal statt Rauschen.', visionIntro: 'KI hat Bewerbungen kostenlos gemacht. Wir machen das Signal wieder knapp.',
      vision: [['Schluss mit 300 identischen Lebensläufen.', 'Recruiting sollte mit Belegen beginnen, nicht mit einem Stapel KI-polierter Bewerbungen.'], ['KI-Kompetenz zeigt sich im Tun.', 'Nicht in Badges, Zertifikaten oder Keywords im Lebenslauf.'], ['Fachexpert:innen statt Entwickler.', 'Menschen, die KI in Ihren Bereich bringen – ohne Übersetzungsaufwand.']],
      fnTitle: 'KI-Kompetenz in jedem Bereich.', fnSub: 'Talente, die KI schon dort einsetzen, wo Ihr Geschäft wirklich läuft – nicht in einem separaten Lab.',
      howTitle: 'Screening, das mit Belegen beginnt.',
      steps: [
        ['Stelle teilen', 'Schicken Sie uns eine Anzeige. Kein neues ATS, kein Setup, kein langes Intake.'],
        ['Wir briefen', 'Wir machen daraus eine rollenspezifische Arbeitsprobe – die Aufgabe, für die Ihr Team nie Zeit hat.'],
        ['Sie liefern', 'Erfahrene, KI-versierte Fachexpert:innen lösen sie und veröffentlichen eine Proof-Seite.'],
        ['Sie prüfen', 'Eine kurze Liste von Proof-Seiten statt eines CV-Stapels. Zwei Minuten pro Person.']
      ],
      proofTitle: 'Neugierig, wie eine Proof-Seite für Ihre Rolle aussieht?', proofSub: 'Wir sind in der Closed Beta mit einer kleinen Gruppe von Hiring Teams in DACH. Pilotplätze sind begrenzt.', betaBody: 'Tragen Sie sich ein und wir melden uns, sobald wir live sind. Frühe Anmeldungen erhalten zuerst Zugang zu Pilotplätzen.',
      statsTitle: 'Die Bewerbungsflut ist real. Die Kompetenzlücke auch.', statKeys: ['c', 'd', 'a', 'b'],
      quote: 'Jobspezifische Methoden wie Arbeitsproben sagen Leistung besser vorher als allgemeine Verfahren.', quoteBy: 'Sackett et al., 2022 — Journal of Applied Psychology',
      faq: [
        ['Ist ChangePath eine Personalberatung?', 'Keine klassische. Wir leiten keine Lebensläufe weiter. Wir stellen Ihnen Menschen vor, die schon ein Stück des Jobs erledigt haben – mit KI.'],
        ['Müssen wir die Aufgabe selbst entwickeln?', 'Nein. Wir leiten den Proof-Brief aus Ihrer Anzeige ab. Sie können ihn vorab prüfen und anpassen.'],
        ['Wer sind die Kandidat:innen?', 'Erfahrene Fachleute mit starker Bilanz in ihrem Bereich – Product, Design, Marketing, Sales, Legal, Finance –, die dort heute KI einsetzen.'],
        ['Was kostet ein Pilot?', 'Wir führen dieses Quartal Piloten mit einer kleinen Gruppe von DACH-Unternehmen durch. Pilotpartner gestalten das Pricing mit.'],
        ['Deutsch oder Englisch?', 'Beides. Nennen Sie uns die Arbeitssprache der Rolle, wir matchen entsprechend.']
      ],
      formLabel: 'Pilotpartner', formTitle: 'Einstellen auf Basis von Beweisen.', formSub: 'Teilen Sie eine offene Stelle. Erhalten Sie eine Shortlist von Proof-Seiten KI-versierter Fachexpert:innen – in Wochen, nicht Monaten.',
      fields: [
        { name: 'firstName', label: 'Vorname', ph: 'Jonas', type: 'text', req: true },
        { name: 'lastName', label: 'Nachname', ph: 'Becker', type: 'text', req: true },
        { name: 'email', label: 'Geschäftliche E-Mail', ph: 'jonas@firma.de', type: 'email', req: true },
        { name: 'company', label: 'Unternehmen', ph: 'Firma GmbH', type: 'text', req: true },
        { name: 'role', label: 'Zu besetzende Rolle', ph: 'z. B. Sales Ops Manager:in, KI-Prozesse', type: 'text', req: false }
      ],
      consentPre: 'Ich willige ein, dass ChangePath meine Daten speichert und nutzt, um mich zu einem Pilotprojekt zu kontaktieren. Ich kann meine Einwilligung jederzeit per E-Mail an support@changepath.ai widerrufen. Mehr in der ', consentLink: 'Datenschutzerklärung', consentPost: '.', formCta: 'Pilotzugang anfragen', formFine: 'Wir antworten innerhalb von zwei Werktagen.',
      doneTitle: 'Danke – wir melden uns.', doneBody: 'Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link, den wir Ihnen gerade geschickt haben. Sie hören innerhalb von zwei Werktagen von unserer Gründerin, um Ihre erste Rolle zu besprechen.'
    }
  }
};

