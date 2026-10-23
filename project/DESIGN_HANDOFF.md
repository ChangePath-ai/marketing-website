# Handoff: ChangePath landing page + email-confirmed page

## Overview
Marketing site for ChangePath's closed beta: a waitlist landing page for **AI-fluent professionals outside tech** (product, design, marketing, sales, legal, finance), plus a secondary **employer** variant, and a post–double-opt-in **email-confirmed** page. Bilingual **EN / DE**.

Target deployment: **Vercel**, domain **get.changepath.ai**.

| Route | Page |
|---|---|
| `/` | Landing page (talent variant by default) |
| `/email-confirmed` | Shown after the user clicks the double-opt-in link in their email. Supports `?lang=de` |

## About the design files
The files in `design/` are **design references built in HTML** — prototypes showing the intended look, copy and behaviour. They are not production code to ship. Recreate them in a proper web stack.

**Recommended stack (no existing codebase):** Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.
- Open the `.dc.html` files directly in a browser to view them (they load `support.js` from the same folder). Keep the folder structure intact.
- All copy lives in a `COPY` object (and `FN`, `STATS`) inside the `<script data-dc-script>` block at the bottom of each `.dc.html` file. Lift it into `locales/en.json` and `locales/de.json` verbatim. **This copy is final — do not rewrite it.**
- Markup uses inline styles; every color, size and spacing value can be read directly from the HTML.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy and interactions. Recreate pixel-accurately.

## Global layout rules
- Content container: `max-width: 1280px`, centred, horizontal padding `clamp(20px, 4vw, 56px)`.
- Section vertical padding: usually `clamp(72px, 9vw, 128px)`; shorter sections use `clamp(56px, 7vw, 96px)` or `clamp(64px, 8vw, 112px)`.
- Responsive grids use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, so they collapse to one column on mobile with no breakpoints. Keep that behaviour, or reproduce it with Tailwind breakpoints.
- Headline sizes use `clamp()`; copy the exact values from the HTML.
- Section labels: Galano Classic 600, 14px, uppercase, `letter-spacing: .1em`, color `#2b00c6` (on dark backgrounds `#ffac73`).
- Buttons: pill (`border-radius: 9999px`), Spline Sans 600. Primary: `#2b00c6` bg, white text, hover `#2200a0`. On dark backgrounds: white bg, `#2b00c6` text, hover `#EDEDFC`.

## Screen 1 — Landing page (`/`)
Sections in order. Background colors alternate so no two neighbouring sections match.

1. **Header** (sticky): white at 92% opacity with `backdrop-filter: blur(14px)`, 1px bottom border `#e8e8ea`. Contents: logo (`assets/logo.png`, 30px tall) · anchor nav (Vision, Functions, How it works, Proof, FAQ) · EN/DE switch · "Join the waitlist" pill linking to `#waitlist`. *There is no talent/employer toggle in the header.*
2. **Hero** (`#top`, bg `#0F0F4C`): two columns.
   - **Left:** small orange eyebrow (`t.heroKicker`), a two-line H1 (line 2 uses the gradient text `linear-gradient(to right,#ffac73,#ff9564 35%,#6c5eff 85%)`), the subline, and one primary CTA only.
   - **Right:** "pile" illustration — four faded, rotated generic CV cards plus one proof-of-work card on top with a gradient border.
   - The DC also contains an alternative "Manifesto" hero (`hero` prop). **The pile hero is the chosen one.**
3. **Why now / stats** (white): label, H2, 4 stat columns (gradient numbers, a short text line, a source line in uppercase grey), then a quote figure.
4. **Comparison** (`#compare`, bg `#f8f8f9`, top border): label "Why apply with a portfolio?", full-width H2, then two cards side by side.
   - **Left card:** "Traditional application", grey, with ✕ items.
   - **Right card:** "With ChangePath", navy `#0F0F4C` with a 2px gradient border `#ffac73→#6c5eff`, with ✓ items in `#ffac73`.
   - A centred primary CTA sits below the cards.
5. **Recruiter quote**: **employer variant only**. White, centred blockquote with a caption.
6. **Functions** (`#functions`, bg `#EDEDFC`):
   - **Header:** label "How is ChangePath different?", H2, subline.
   - **Carousel:** shows 3 cards at a time (Product/Design/Marketing, then Sales/Legal/Finance).
   - **Auto-advance:** every **6s**, with a fade plus 12px translateY over **450ms ease**. It pauses on hover. Arrows and dots switch immediately and reset the timer. There is no counter text.
   - **Note** beside the dots: "Can't find your department? More departments will be added soon."
   - **Cards:** white, radius 24px, 1px `#e8e8ea` border. On hover: border `#6c5eff`, shadow, lift 4px. Each card has the function name, role (in `#4728ff`), a dashed divider, an orange label ("HERE'S HOW YOU CAN SHOW OFF YOUR SKILLS") and a brief.
7. **How it works** (`#how`, white): label, full-width H2, 4 steps (large gradient numbers `01`–`04`, title, body; 2px `#e8e8ea` top border on each step), then a centred primary CTA.
8. **Waitlist** (`#waitlist`, bg `#0F0F4C`, decorative `assets/shapes.png` at 18% opacity):
   - **Left:** label, H2, two paragraphs (both Spline 400, `clamp(17px,1.5vw,20px)`, `#d4d4f5`).
   - **Right:** white form card, radius 28px. See *Form* below.
9. **Vision** (`#vision`, white): left has the label, H2 and intro; right has 3 rows, each with an orange number, a Galano headline and a grey subline.
10. **FAQ** (`#faq`, bg `#f8f8f9`): accordion with **10 items** (talent). One item open at a time; the first is open by default. The toggle is a 40px circle that is `#EDEDFC` with a + icon when closed and `#2b00c6` with a − icon when open.
11. **Closed-beta sign-up** (`#proof`, bg `#EDEDFC`):
    - **Left:** label, H2 "Stop applying for jobs like everyone else", subline.
    - **Right:** a white form card the same size as the waitlist card, containing a gradient "CLOSED BETA · INVITE ONLY" badge, the headline "Secure your spot on the waiting list.", the same form, the button "Join the waitlist for free" and the fine print "Free & no obligation · Early access at launch".
    - Behind the card: a blurred mock proof page (blur 14px, saturate .4, opacity .35, faded with a mask). It is decorative and `aria-hidden`.
12. **Footer** (bg `#0F0F4C`):
    - "ChangePath ©2026"
    - Audience switch link: "For employers" ↔ "For talent". It swaps the page variant and scrolls to the top.
    - LinkedIn → https://www.linkedin.com/in/maritzabonano/
    - Imprint → https://www.changepath.ai/impressum
    - Privacy → https://www.changepath.ai/datenschutz

### Form (used twice: `#waitlist` and `#proof`)
- **First name and last name** sit side by side (grid `minmax(min(100%,200px),1fr)`) and stack on mobile. **Email** is full width.
- **Employer variant** adds: Company, Role you're hiring for.
- **Talent only:** "Your function" chips (Product, Design, Marketing, Sales, Legal, Finance, Other), multi-select. Selected chip: bg `#2b00c6`, white text. Unselected: white, border `#C5C5D8`. Choosing **Other** reveals a required text input that receives focus automatically.
- **Required GDPR consent checkbox.** Its text includes a privacy-policy link and says consent can be withdrawn by emailing support@changepath.ai.
- **Inputs:** radius 14px, 1px border `#C5C5D8`, padding 15×16px, 16px text. On focus: border `#2b00c6` plus a 3px `#EDEDFC` ring.
- **On submit:** the form is replaced by a confirmation with a green check circle (`#3ac0a0`), the title "Almost there." / "Fast geschafft." and the body "Confirm your email so we can message you when we're live. There's a little surprise when you do :)". Both forms share one submitted state.

### Audience variants
Talent (default) and Employers share the same layout with different copy (`COPY[lang].talent` / `.employers`). On the employer variant, the waitlist CTA text is "Request pilot access" and the recruiter quote section is shown. Suggested approach: put the employer variant on its own route (e.g. `/employers`) rather than switching client-side, for SEO and ads.

## Screen 2 — Email confirmed (`/email-confirmed`)
- **Background:** full-height `#0F0F4C` with two decorative copies of `shapes.png`. Same header style (logo + EN/DE) and footer.
- **Left column:** a green check circle, the label "Email confirmed", a two-line H1 (line 2 in gradient text), the body copy, and "What happens next" with 3 numbered rows.
- **Right column:** a white card containing:
  - the badge "SKIP THE LINE" and the title "Want in before everyone else?" with a short body
  - a primary button **"Book a 15-minute call and get access"** linking to https://calendar.app.google/neaAVKg3YcJDFA3i9 (new tab)
  - at the bottom, "Back to the homepage" (`/`) and "Follow us" (LinkedIn)
- **Language:** read `?lang=de|en` from the URL, so the double-opt-in email can link to the right language.

## State management
- `lang`: `'en' | 'de'`. Use Next.js i18n routing or a cookie. The EN/DE switch is in the header.
- `audience`: `'talent' | 'employers'`. Recommended: a separate route.
- Functions carousel: `page` (0|1), `fading` (bool), `hovered` (bool), and an interval timer.
- FAQ: `openIndex` (0 by default, −1 when all are closed).
- Form: field values, `selectedFunctions[]`, `otherText`, `consent`, and `status` (`idle | submitting | submitted | error`).

## Backend / integration (not designed; to implement)
- **Waitlist submit:** POST to an email provider that supports **double opt-in** (e.g. Brevo, MailerLite, Loops, Resend Audiences). Store first name, last name, email, functions (+ "Other" text), language, audience, consent timestamp and consent text version.
- **Double-opt-in email:** the confirmation link redirects to `https://get.changepath.ai/email-confirmed?lang={lang}`.
- **Error state:** show inline errors for invalid email and a generic retry message on network failure (follow the input styling; the error color is up to you — suggest `#d64545`).
- **Analytics:** recommended — Vercel Analytics, with events for CTA clicks and form submits.

## Design tokens
**Colors**
- Navy (dark backgrounds, headings): `#0F0F4C`
- Primary blue: `#2b00c6` · hover `#2200a0` · link hover `#3620cc`
- Blue mid (role text): `#4728ff` · Violet: `#6c5eff`
- Orange: `#ff9564` · Warm orange: `#ffac73`
- Green (success): `#3ac0a0`
- Lavender background: `#EDEDFC` · Off-white background: `#f8f8f9` · Muted: `#f3f3f4`
- Border: `#e8e8ea` · Input border: `#C5C5D8`
- Body grey: `#5B5B6B` · Placeholder: `#8a8a9a` · Body text on dark: `#d4d4f5`

**Gradients**
- Signature: `linear-gradient(to right, #ff9564, #6c5eff)` (badges, chips)
- Hero text: `linear-gradient(to right, #ffac73, #ff9564 35%, #6c5eff 85%)`
- Card border: `linear-gradient(135deg, #ffac73, #6c5eff)`

**Typography**
- Display: **Galano Classic** SemiBold 600 (`fonts/GalanoClassic-SemiBold.woff2`). Used for all headings, labels and big numbers.
- Body: **Spline Sans** 300/400/500/600 (`fonts/SplineSans-*.woff2`)
- Body copy: 16–20px, line-height 1.55. Fine print: 12–13px. Badges: 10–11px, 600, uppercase, tracking .06–.12em.

**Radius:** cards 24–28px · inputs 14px · thumbnails 10–14px · pills and buttons 9999px

**Shadows**
- Form card: `0 40px 100px rgba(0,0,0,0.35)` (on navy)
- Card hover: `0 20px 50px rgba(43,0,198,0.12)`

**Icons:** Phosphor Icons, Bold weight (`@phosphor-icons/react`).

## Assets
- `design/assets/logo.png`: ChangePath logo
- `design/assets/shapes.png`: decorative brand shape pattern
- `design/fonts/`: Galano Classic and Spline Sans (woff2). Check font licences before production use.
- The striped placeholder thumbnails in the blurred proof mock are stand-ins.

## Files
- `design/ChangePath Landing.dc.html`: landing page (all copy is in `COPY`, `FN` and `STATS` at the bottom)
- `design/Email Confirmed.dc.html`: email-confirmed page
- `design/support.js`: runtime needed to open the `.dc.html` files in a browser (reference only)

## Deploying on Vercel (get.changepath.ai)
1. Push the Next.js app to GitHub, then import the repo in Vercel.
2. In Vercel → Project → Settings → Domains, add `get.changepath.ai`.
3. At your DNS provider, add `CNAME get → cname.vercel-dns.com`.
4. Make sure `/email-confirmed` exists as a route (`app/email-confirmed/page.tsx`).
5. Set the provider's double-opt-in redirect URL to `https://get.changepath.ai/email-confirmed?lang=en` (and `=de` for German sign-ups).
