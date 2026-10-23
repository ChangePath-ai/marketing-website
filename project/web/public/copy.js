// Copy from the Claude Design handoff (ChangePath Landing.dc.html).
const FN = {
  en: [
    ['Product', 'AI Product Manager', 'Spec an AI feature from PRD to eval plan & LLM cost calculations.'],
    ['Design', 'AI-Augmented Product Designer', 'Prototype an onboarding flow end-to-end and get feedback from a synthetic audience.'],
    ['Marketing', 'AI Marketing Ops Lead', 'Create a content pipeline that builds a brand\'s visibility in LLM responses.'],
    ['Sales', 'Sales Ops Manager, AI processes', 'Create a sales pipeline, enrich the contacts and automate cold outreach for an ICP.'],
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
      formSub2: 'Secure your place on the waiting list now and be among the first to test ChangePath for free.',
      cmpLabel: 'Why apply with CHANGEPATH?',
      fnLabel: 'How is ChangePath different?',
      betaFine: 'Free & no obligation · Early access at launch',
      betaCta: 'Join the waitlist for free',
      betaTitle: 'Secure your spot on the early access list',
      recQuote: '"We get 500–600 applications per role. I’ve never experienced this amount of volume before."', recBy: 'Tech recruiter, 15 years of experience, Berlin',
      navVision: 'Vision', navFunctions: 'Functions', navHow: 'How it works', navProof: 'Proof', navFaq: 'FAQ',
      forTalent: 'For talent', forEmployers: 'For employers', navCta: 'Join the waitlist',
      badgeProof: 'PROOF OF WORK', fnBriefLabel: 'HERE’S HOW YOU CAN SHOW OFF YOUR SKILLS', fnMore: 'Can’t find your department? More roles will be added soon.', howLabel: 'How it works', proofLabel: 'Sign up now for early access', betaBadge: 'CLOSED BETA · INVITE ONLY', betaCantWait: 'Can’t wait?', betaDm: 'DM our founder', statsLabel: 'are there jobs out there?',
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
      faqTitle: 'Your Questions, answered', imprint: 'Imprint', privacy: 'Privacy',
      doneAgain: 'Submit another', cliche: 'Results-driven professional with a passion for leveraging AI to drive innovation and deliver impact across cross-functional teams.'
    },
    talent: {
      eyebrow: 'AI-FLUENT TALENT · OUTSIDE TECH · DACH', cmpTitle: 'The top 1% of applicants show what they can do with AI', cmpOldTitle: 'Traditional application', cmpNewTitle: 'With ChangePath', cmpOld: ['AI-generated CV & cover letter', 'Skills are just a bullet point list', 'Looks similar to hundreds of other applications'], cmpNew: ['Real work samples based on actual job requirements', 'Shows how you combine your past experience with AI ', 'Gives employers confidence you can do the job'], heroKicker: 'The future of job applications',
      heroA1: 'To be visible, you need more than an', heroA2: 'AI generated CV',
      heroB1: 'CVs are free now.', heroB2: 'Proof isn’t.',
      heroSub: 'With ChangePath, you\'ll stand out from generic AI-generated applications to land the jobs AI is creating.',
      ctaPrimary: 'Join the waitlist', ctaSecondary: 'See example portfolio',
      pileTag: 'YOU + 311 OTHER APPLICANTS', pileFn: 'FINANCE',
      pileTitle: 'AI-assisted pricing review, built from the posting itself', pileWho: 'Controller → AI Finance & Controlling Lead', pileMeta: 'OPENED BY HIRING MANAGER · 2 MIN',
      cliches: ['Results-driven', 'Passionate about AI', 'Proven track record', 'Cross-functional team player', 'Leveraging cutting-edge tools'],
      proofChip: 'A proof page they actually open',
      visionLabel: 'Our vision', visionTitle: 'The future of hiring is proof of work', visionIntro: 'AI can write a resume in seconds. The problem? Hundreds of applications that all look the same. This makes showing how you combine AI with your area of expertise more important than ever.',
      vision: [['A CV alone doesn\'t do the job', 'When everyone can use AI to customise a job application, everyone sounds similar. Employers need more than well-written CVs to identify great skills.'], ['Your expertise is your greatest asset', 'You bring valuable expertise to the table. When you apply it with AI, you can join the top 10% of your field and apply for the roles AI is creating.'], ['Fewer applications, stronger signal', 'Sending out 100\'s of applications per week is a waste of time. Choose the roles you really want to land. Show what you can build. Get the interview.  ']],
      fnTitle: 'Leverage your experience to land future-proof roles', fnSub: 'You don\'t need to know how to code or completely restart to benefit from AI. Discover what new job opportunities are available in your field and how you can impress employers with your skills.',
      howTitle: '4 Steps to a job application that gets noticed',
      steps: [
        ['Job Matches', 'Upload your CV and discover real job openings where you can combine your professional experience with AI skills.'],
        ['Custom Brief', 'You\'ll receive a short project based on a real job posting. That way, you\'ll know exactly what skills are required for the job.'],
        ['Build your proof', 'Build it with AI. Create a work sample that makes your expertise shine.'],
        ['Send a unique application', 'Apply to jobs using your shareable portfolio. Fewer and more focused applications means more replies.']
      ],
      proofTitle: 'Stop applying for jobs like everyone else', proofSub: 'There are plenty of AI-generated resumes out there. With ChangePath, you can show employers what you’re really capable of and stand out from other applicants with real work samples.', betaBody: 'Sign up now for free and be one of the first to find out when you\'ll get access to the new application platform.',
      statsTitle: 'The jobs are open, but your CV looks like everyone else\'s', statKeys: ['a', 'b', 'c', 'd'],
      quote: 'How can I get a human to look at my application in the first place?', quoteBy: 'the question we get every single user interview',
      faq: [
        ["What is ChangePath, and how does it help with my job search?","ChangePath offers a new way to apply for jobs. Instead of relying on your CV and cover letter alone, you demonstrate your actual capabilities through concrete work samples. This helps you stand out from other applicants and gives employers a clearer insight into your skills."],
        ["How is ChangePath different from other AI-powered job application tools?","Many AI tools help you create or optimize resumes and cover letters. ChangePath goes a step further: you show employers how you apply your professional experience and AI skills by completing practical, real-world projects. This shifts the focus from what you say about yourself to what you can actually do."],
        ["Who is ChangePath for?","ChangePath is designed for professionals who want to leverage their existing experience to qualify for new, AI-enabled roles and make more compelling job applications. For example in fields like: marketing, sales, product, design, legal, or finance. You do not need to have a background in IT, or know how to code."],
        ["Do I need existing AI skills?","You don’t need to know how to code, nor do you need a technical background. What matters is your professional experience and your willingness to apply AI within your specific field."],
        ["How does the application process work with ChangePath?","You discover relevant job openings and receive a practical project based on the requirements of a real job posting. You then use AI to help you create a work sample, which you can include in your job application or share on LinkedIn."],
        ["How long does it take to create a work sample?","The tasks are designed to be completed within 2–3 pomodoros (focused 45-minute sessions), rather than requiring a months-long course. The exact time commitment depends on the specific task and your existing experience."],
        ["Is ChangePath a course or a bootcamp?","No. ChangePath is not a training program with set instructional sessions. Instead, the platform helps you showcase your existing skills through practical, real-world tasks, so you can build a portfolio that impresses companies in your next job application."],
        ["Can I use ChangePath in English?","Yes! ChangePath is fully bilingual. While we primarily focus on the DACH market (Germany, Austria, and Switzerland), we also include English-language job opportunities."],
        ["How much does ChangePath cost?","Signing up for the waitlist is free and carries no obligation. Early access is also free during our pilot phase. We will provide information regarding pricing after the pilot phase."],
        ["What happens when I join the waitlist?","You will be among the first to know when ChangePath launches and how you can gain access to the platform. Signing up is free and carries no obligation."]
      ],
      formLabel: 'JOIN NOW FOR EARLY ACCESS ', formTitle: 'Stop sending CVs into the void', formSub: 'Show employers why YOU are the right choice instead of being lost with the next AI-generated application.',
      fields: [
        { name: 'firstName', label: 'First name', ph: 'Lena', type: 'text', req: true },
        { name: 'lastName', label: 'Last name', ph: 'Weber', type: 'text', req: true },
        { name: 'email', label: 'Email', ph: 'lena@email.com', type: 'email', req: true }
      ],
      consentPre: 'I agree that ChangePath may store and use my data to contact me about early access. I can withdraw my consent at any time by emailing support@changepath.ai. Details in our ', consentLink: 'privacy policy', consentPost: '.', chipLabel: 'Your function', formCta: 'Join the waitlist', formFine: 'No spam. We’ll only email you about early access.',
      doneTitle: 'Almost there.', doneBody: 'Confirm your email so we can message you when we’re live. There’s a little surprise when you do :)', upBadge: 'SKIP THE LINE', upTitle: 'Want in before everyone else?', upBody: 'Share your LinkedIn profile and get early beta access, plus a 20-minute call with our founder to map your first proof project.', upLabel: 'LinkedIn profile', upCta: 'Get early access + 20-min call', upFine: 'We only use your profile to assess beta fit and schedule your call.', upDoneTitle: 'You’re in the beta queue.', upDoneBody: 'We’ll review your profile and email you a link to book your 20-minute call.'
    },
    employers: {
      eyebrow: 'FOR HIRING TEAMS · KMU & SCALE-UPS · DACH', cmpTitle: 'The best candidates show you what they can do', cmpOldTitle: 'Traditional application', cmpNewTitle: 'With ChangePath', cmpOld: ['AI-generated CV & cover letter', 'Hundreds of near-identical applications per role', 'Skills are claimed, not demonstrated'], cmpNew: ['Real work samples based on your job requirements', 'Proven domain skills and AI capabilities', 'Something concrete to evaluate before the first call'],
      heroA1: '300 applications per role. They all look the same.', heroA2: 'Meet the three that matter.',
      heroB1: 'Stop reading CVs.', heroB2: 'Start reviewing proof.',
      heroSub: 'We don\'t believe in volume, but quality. We bring you AI-fluent domain experts who apply with proof of work, not a generic CV.',
      ctaPrimary: 'Request pilot access', ctaSecondary: 'See example portfolio',
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
        ['They show proof', 'Experienced, AI-fluent domain experts complete it and publish a proof page.'],
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
      formSub2: 'Sichere dir jetzt deinen Platz auf der Warteliste und gehöre zu den Ersten, die ChangePath kostenlos testen können.\n',
      cmpLabel: 'Warum mit einem Portfolio bewerben?',
      fnLabel: 'Was macht ChangePath anders?',
      betaFine: 'Kostenlos & unverbindlich · Early Access zum Launch',
      betaCta: 'Kostenlos auf die Warteliste',
      betaTitle: 'Sichere dir deinen Platz auf der Warteliste. ',
      recQuote: 'Wir bekommen 500–600 Bewerbungen pro Stelle. Ein solches Volumen habe ich noch nie erlebt.', recBy: 'Tech-Recruiterin, 15 Jahre Erfahrung, Berlin',
      navVision: 'Vision', navFunctions: 'Bereiche', navHow: 'So funktioniert’s', navProof: 'Proof', navFaq: 'FAQ',
      forTalent: 'Für Talente', forEmployers: 'Für Unternehmen', navCta: 'Zur Warteliste',
      badgeProof: 'PROOF OF WORK', fnBriefLabel: 'SO KÖNNTEST DU DEIN KÖNNEN ZEIGEN', fnMore: 'Dein Fachbereich ist nicht dabei? Weitere Bereiche folgen.', howLabel: 'So funktioniert’s', proofLabel: 'Closed Beta', betaBadge: 'CLOSED BETA · NUR AUF EINLADUNG', betaCantWait: 'Keine Geduld?', betaDm: 'Schreib unserer Gründerin', statsLabel: 'Warum jetzt',
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
      eyebrow: 'KI-AFFINE TALENTE · AUSSERHALB DER TECH · DACH', cmpTitle: 'Die besten 1 % der Bewerbungen zeigen, was du drauf hast', cmpOldTitle: 'Klassische Bewerbung', cmpNewTitle: 'Mit ChangePath', cmpOld: ['KI-generierter Lebenslauf & Anschreiben', 'Sieht aus wie Hunderte andere Bewerbungen', 'Skills werden aufgezählt, nicht gezeigt'], cmpNew: ['Echte Arbeitsproben auf Basis realer Stellenanforderungen', 'Zeigt Skills und KI-Kompetenz', 'Gibt Arbeitgebern etwas Konkretes zum Bewerten'], heroKicker: 'Die neue Art, dich zu bewerben',
      heroA1: 'Dein nächster Job braucht mehr als einen ', heroA2: 'KI-generierten Lebenslauf',
      heroB1: 'Lebensläufe sind gratis.', heroB2: 'Beweise nicht.',
      heroSub: 'Mit ChangePath hebst du dich von austauschbaren KI-Bewerbungen ab und positionierst dich für die Jobs der Zukunft.',
      ctaPrimary: 'Jetzt kostenlos auf die Warteliste', ctaSecondary: 'Beispiel-Portfolio ansehen',
      pileTag: 'DU + 311 WEITERE BEWERBUNGEN', pileFn: 'FINANCE',
      pileTitle: 'KI-gestützte Preisanalyse, direkt aus der Anzeige gebaut', pileWho: 'Controller → AI Finance & Controlling Lead', pileMeta: 'VOM HIRING MANAGER GEÖFFNET · 2 MIN',
      cliches: ['Ergebnisorientiert', 'Leidenschaft für KI', 'Nachweisliche Erfolge', 'Teamplayer', 'Innovative Tools'],
      proofChip: 'Eine Proof-Seite, die wirklich geöffnet wird',
      visionLabel: 'Unsere Vision', visionTitle: 'Die Bewerbung der Zukunft zeigt, was du kannst', visionIntro: 'KI kann heute in Sekunden einen Lebenslauf schreiben. Das Problem? Hunderte Bewerbungen sehen plötzlich gleich aus, was bedeutet, dass deine Fähigkeiten und Arbeitserfahrungen wichtiger denn je sind, um dich von den anderen Bewerbungen abzuheben.',
      vision: [['Ein Lebenslauf allein reicht nicht mehr', 'Proof of Work ist das neue Signal. Zeig, was du kannst – nicht, was du behauptest.'], ['Deine Erfahrung ist dein größter Vorteil', 'KI macht jahrelanges Fachwissen schärfer, nicht überflüssig.'], ['Zeig, warum DU den Job bekommen solltest', 'Statt nur zu behaupten, dass du für eine Stelle geeignet bist, zeigst du es mit konkreten Arbeitsproben. So gibst du Arbeitgebern einen überzeugenden Grund, dich näher kennenzulernen.']],
      fnTitle: 'Nutze deine Erfahrung für die Jobs der Zukunft', fnSub: 'Du musst nicht programmieren können oder deine Karriere komplett neu starten, um von KI zu profitieren. Entdecke, welche neuen Jobmöglichkeiten es in deinem Fachbereich gibt und wie du Arbeitgeber mit deinen Fähigkeiten überzeugen kannst.',
      howTitle: 'In 4 Schritten zu einer Bewerbung, die überzeugt',
      steps: [
        ['Passende Jobs entdecken', 'Lade deinen Lebenslauf hoch und entdecke passende Stellen, bei denen du deine Berufserfahrung mit KI-Kompetenzen verbinden kannst.'],
        ['Brief erhalten\n\n', 'Erhalte eine kurze Aufgabe auf Basis einer echten Stellenanzeige. So weißt du genau, welche Fähigkeiten für den Job gefragt sind.'],
        ['Dein Können unter Beweis stellen', 'Bearbeite die Aufgabe mit Unterstützung von KI und erstelle eine Arbeitsprobe, die zeigt, was du wirklich kannst.'],
        ['Mit deiner Bewerbung überzeugen', 'Teile dein persönliches Portfolio direkt mit Arbeitgeber, zum Beispiel in deiner Bewerbung oder auf LinkedIn. So zeigst du mehr als nur deinen Lebenslauf.']
      ],
      proofTitle: 'Hör auf, dich wie alle anderen zu bewerben', proofSub: 'KI-generierte Lebensläufe gibt es genug. Mit ChangePath zeigst du Arbeitgebern, was du wirklich kannst, und hebst dich mit echten Arbeitsproben von anderen Bewerbungen ab', betaBody: 'Trag dich in die Liste ein und wir melden uns, sobald wir live sind. Wer früh dabei ist, bekommt die ersten Plätze.',
      statsTitle: 'Die Rollen gibt es, aber dein Lebenslauf sieht genauso aus wie der aller anderen', statKeys: ['a', 'b', 'c', 'd'],
      quote: 'Wie bringe ich überhaupt einen Menschen dazu, sich meine Bewerbung anzusehen?', quoteBy: 'Eine Frage, die uns in Nutzerinterviews immer wieder begegnet.',
      faq: [
        ["Was genau ist ChangePath und wie hilft es mir bei der Jobsuche?","ChangePath bietet dir eine neue Möglichkeit, dich bei Arbeitgebern zu bewerben. Statt dich nur auf deinen Lebenslauf und dein Anschreiben zu verlassen, zeigst du mit konkreten Arbeitsproben, was du wirklich kannst. So hebst du dich von anderen Bewerbungen ab und gibst Arbeitgebern einen besseren Einblick in deine Fähigkeiten."],
        ["Was unterscheidet ChangePath von anderen KI-Bewerbungstools?","Viele KI-Tools helfen dir dabei, Lebensläufe und Anschreiben zu erstellen oder zu optimieren. ChangePath geht einen Schritt weiter: Du zeigst Arbeitgebern anhand konkreter Praxisaufgaben, wie du deine Berufserfahrung und KI-Kompetenzen einsetzt. So steht nicht nur das, was du über dich schreibst, im Mittelpunkt, sondern das, was du tatsächlich kannst."],
        ["Für wen ist ChangePath geeignet?","ChangePath richtet sich an Berufstätige, die ihre Erfahrung nutzen möchten, um sich für neue, KI-gestützte Rollen zu qualifizieren und überzeugender zu bewerben. Zum Beispiel in Marketing, Sales, Product, Design, Legal oder Finance. Du musst dafür nicht aus der IT kommen."],
        ["Brauche ich bereits KI-Kenntnisse?","Du musst weder programmieren können noch einen technischen Hintergrund haben. Entscheidend ist deine bisherige Berufserfahrung und deine Bereitschaft, KI in deinem Fachbereich einzusetzen. Wie viel KI-Vorwissen für einzelne Aufgaben erforderlich ist, hängt von der jeweiligen Rolle ab."],
        ["Wie funktioniert die Bewerbung mit ChangePath?","Du entdeckst passende Stellen und erhältst eine Praxisaufgabe, die sich an den Anforderungen einer echten Stellenausschreibung orientiert. Anschließend erstellst du mit Unterstützung von KI eine Arbeitsprobe, die du als Teil deiner Bewerbung oder auf LinkedIn teilen kannst."],
        ["Wie lange dauert es, eine Arbeitsprobe zu erstellen?","Die Aufgaben sind so konzipiert, dass du sie innerhalb weniger Tage bearbeiten kannst, nicht erst nach einem monatelangen Kurs. Der genaue Zeitaufwand hängt von der Aufgabe und deiner bisherigen Erfahrung ab."],
        ["Ist ChangePath ein Kurs oder Bootcamp?","Nein. ChangePath ist keine klassische Weiterbildung mit festen Unterrichtseinheiten. Die Plattform hilft dir dabei, deine vorhandenen Fähigkeiten anhand praxisnaher Aufgaben sichtbar zu machen und für deine nächste Bewerbung einzusetzen."],
        ["Kann ich ChangePath auch auf Englisch nutzen?","ChangePath richtet sich zunächst an den DACH-Markt, berücksichtigt aber auch englischsprachige Stellen."],
        ["Was kostet ChangePath?","Die Anmeldung zur Warteliste ist kostenlos und unverbindlich. Auch der Early Access ist während unserer Pilotphase kostenlos. Über die Preise nach der Pilotphase informieren wir dich rechtzeitig."],
        ["Was passiert, wenn ich mich auf die Warteliste setze?","Du erfährst als eine der Ersten, wann ChangePath startet und wie du Zugang zur Plattform bekommst. Die Anmeldung ist kostenlos und unverbindlich."]
      ],
      formLabel: 'KOSTENLOSER EARLY ACCESS · COMING SOON', formTitle: 'Schluss mit Bewerbungen ins Leere.', formSub: 'Zeig Arbeitgebern, warum DU die richtige Wahl bist, statt mit der nächsten KI-generierten Bewerbung unterzugehen.',
      fields: [
        { name: 'firstName', label: 'Vorname', ph: 'Lena', type: 'text', req: true },
        { name: 'lastName', label: 'Nachname', ph: 'Weber', type: 'text', req: true },
        { name: 'email', label: 'E-Mail', ph: 'lena@email.de', type: 'email', req: true }
      ],
      consentPre: 'Ich willige ein, dass ChangePath meine Daten speichert und nutzt, um mich zum Early Access zu kontaktieren. Ich kann meine Einwilligung jederzeit per E-Mail an support@changepath.ai widerrufen. Mehr in der ', consentLink: 'Datenschutzerklärung', consentPost: '.', chipLabel: 'Dein Bereich', formCta: 'Jetzt kostenlosen Early Access sichern', formFine: 'Kostenlos & unverbindlich. Kein Spam. ',
      doneTitle: 'Fast geschafft.', doneBody: 'Bestätige deine E-Mail-Adresse, damit wir dir Bescheid geben können, sobald wir live sind. Dafür wartet eine kleine Überraschung auf dich :)', upBadge: 'ÜBERSPRING DIE WARTELISTE', upTitle: 'Willst du früher rein?', upBody: 'Teil dein LinkedIn-Profil und erhalte frühen Beta-Zugang plus ein 20-minütiges Gespräch mit unserer Gründerin, um dein erstes Proof-Projekt zu planen.', upLabel: 'LinkedIn-Profil', upCta: 'Beta-Zugang + 20-Min-Call sichern', upFine: 'Wir nutzen dein Profil nur, um die Beta-Eignung zu prüfen und deinen Call zu planen.', upDoneTitle: 'Du bist in der Beta-Warteschlange.', upDoneBody: 'Wir schauen uns dein Profil an und schicken dir per E-Mail einen Link für dein 20-Minuten-Gespräch.'
    },
    employers: {
      eyebrow: 'FÜR HIRING TEAMS · KMU & SCALE-UPS · DACH', cmpTitle: 'Die besten Kandidat:innen zeigen, was sie können', cmpOldTitle: 'Klassische Bewerbung', cmpNewTitle: 'Mit ChangePath', cmpOld: ['KI-generierter Lebenslauf & Anschreiben', 'Hunderte fast identische Bewerbungen pro Stelle', 'Skills werden behauptet, nicht gezeigt'], cmpNew: ['Echte Arbeitsproben auf Basis Ihrer Anforderungen', 'Nachgewiesene Fach- und KI-Kompetenz', 'Etwas Konkretes zum Bewerten vor dem ersten Gespräch'],
      heroA1: '300 Bewerbungen. Alle gleich.', heroA2: 'Lernen Sie die drei kennen, die geliefert haben.',
      heroB1: 'Schluss mit Lebensläufen.', heroB2: 'Prüfen Sie Beweise.',
      heroSub: 'Wir überfluten Sie nicht mit Hunderten Bewerbungen pro Stelle. Wir bringen Ihnen KI-versierte Fachexpert:innen, die sich mit einer Arbeitsprobe bewerben – nicht mit einem generischen Lebenslauf.',
      ctaPrimary: 'Pilotzugang anfragen', ctaSecondary: 'Beispiel-Portfolio ansehen',
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

