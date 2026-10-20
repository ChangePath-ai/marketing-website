# ChangePath landing page

Production build of `ChangePath Landing.dc.html` from the Claude Design handoff. It is a static page (`public/`) plus two Vercel serverless functions (`api/`) that send sign-ups to Brevo. The Brevo API key only lives on the server.

```
public/            the site (index.html, styles.css, app.js, copy.js, confirmed.html, fonts, assets)
  copy.js          all EN/DE copy for talent + employers, taken verbatim from the design
api/subscribe.js   waitlist / pilot form  → Brevo double opt-in
api/linkedin.js    "Skip the line" step   → saves LinkedIn on the contact + emails the team
lib/brevo.js       shared helpers (validation, Brevo calls, origin check, signup token)
test/              API tests with Brevo mocked: `npm test`
```

## What the forms do

| Form | Brevo call | List |
|---|---|---|
| Talent waitlist | `POST /v3/contacts/doubleOptinConfirmation`: Brevo sends the confirmation email; the contact is added only after the click | `BREVO_LIST_ID_TALENT` |
| Employer pilot request | same, plus a notification email to `NOTIFY_EMAIL` | `BREVO_LIST_ID_EMPLOYERS` |
| LinkedIn "Skip the line" (talent) | `PUT /v3/contacts/{email}` sets `LINKEDIN` (works once they've confirmed), and always emails `NOTIFY_EMAIL` so you can book the 20-minute call | — |

After clicking the confirmation link, people land on `/confirmed` (EN or DE).

Contact attributes written: `FIRSTNAME`, `LASTNAME`, `LANGUAGE` (EN/DE), `AUDIENCE` (talent/employers), `FUNCTIONS` (talent, e.g. `Marketing, Other: HR`), `COMPANY` and `HIRING_ROLE` (employers), `LINKEDIN`.

Repository: https://github.com/ChangePath-ai/marketing-website

## 1. Set up Brevo

Log in at https://app.brevo.com. Menu names below are as of Oct 2026; Brevo occasionally moves them.

1. **Lists:** Contacts → Lists → create two lists, e.g. "Waitlist – Talent" and "Pilot – Employers". Note each list's ID.
2. **Attributes:** Contacts → Settings → Contact attributes. `FIRSTNAME` and `LASTNAME` exist already. Add these as **Text** attributes: `LANGUAGE`, `AUDIENCE`, `FUNCTIONS`, `COMPANY`, `HIRING_ROLE`, `LINKEDIN`.
3. **Double opt-in templates:** Campaigns → Templates → create a template for the confirmation email, one in English and one in German. Its tag must be `optin` and its button link must be `{{ doubleoptin }}`. Note the template IDs.
4. **Sender:** Senders, domains & IPs → add and verify a sender such as `hello@changepath.ai` (also authenticate the changepath.ai domain, so mail doesn't land in spam).
5. **API key:** https://app.brevo.com/settings/keys/api → **Generate a new API key**. Copy it straight into Vercel (step 2.3); Brevo shows it only once.

## 2. Deploy on Vercel

1. Go to https://vercel.com/new and import `ChangePath-ai/marketing-website`. If it isn't listed, click **Adjust GitHub App Permissions** and give Vercel access to that repository in the ChangePath-ai organization. A private repository owned by an organization needs a Vercel Pro team; the Hobby plan can't deploy it.
2. Set **Root Directory** to `project/web`. Framework preset: **Other**. Leave build settings empty (`vercel.json` already sets them).
3. Under **Settings → Environment Variables** add:

| Variable | Required | Example |
|---|---|---|
| `BREVO_API_KEY` | yes | `xkeysib-…` |
| `BREVO_LIST_ID_TALENT` | yes | `3` |
| `BREVO_LIST_ID_EMPLOYERS` | yes | `4` |
| `BREVO_DOI_TEMPLATE_ID_EN` | yes* | `7` |
| `BREVO_DOI_TEMPLATE_ID_DE` | yes* | `8` |
| `BREVO_SENDER_EMAIL` | yes | `hello@changepath.ai` (verified in Brevo) |
| `NOTIFY_EMAIL` | yes | `support@changepath.ai` (comma-separate several) |
| `BREVO_SENDER_NAME` | no | `ChangePath` |
| `SITE_URL` | recommended | `https://changepath.ai` (used for the confirmation redirect and the origin check) |
| `BREVO_DOI_REDIRECT_URL` | no | overrides the default `SITE_URL/confirmed?lang=…` |
| `SIGNUP_TOKEN_SECRET` | no | any long random string; defaults to deriving from the API key |

\* `BREVO_DOI_TEMPLATE_ID` can be set instead as a single template for both languages.

4. Deploy. Vercel gives you a `*.vercel.app` address; test there first: submit the form with your own address, confirm the email, and check the contact appears in the right Brevo list with its attributes.

## 3. Domain

Add the domain under the project's **Settings → Domains** and set the DNS records Vercel shows you, at whoever manages changepath.ai's DNS. Then set `SITE_URL` to that address and redeploy.

The footer links to https://www.changepath.ai/impressum and https://www.changepath.ai/datenschutz, which currently live on the existing site. If this page takes over `www.changepath.ai`, those two pages stop existing unless you move them here first. A German site must keep its Impressum reachable, so either:

- launch this page on a subdomain (e.g. `join.changepath.ai`) and keep the existing site, or
- move the Impressum and Datenschutz pages into `public/` before switching the domain, and update the footer links.

## Links people can share

- `/?lang=de`: German version
- `/?for=employers`: employer version (works with `&lang=de`)

The language choice is remembered in the visitor's browser.

## Before launch

- **Privacy policy (changepath.ai/datenschutz):** name Brevo (Sendinblue GmbH, Berlin) as the processor for the waitlist, mention the LinkedIn profile and the notification emails, and sign Brevo's DPA in your account.
- **No third-party requests:** fonts and icons are self-hosted, so the page makes no external requests and needs no cookie banner as built. If you add analytics later, revisit that.
- Brevo double opt-in records the confirmation (time, IP) as proof of consent.

## Local check

`npm test` runs the API tests (Node 20+, no install needed). To run the full site with real Brevo calls locally, use `npx vercel dev` with the variables above in `.env.local`.
