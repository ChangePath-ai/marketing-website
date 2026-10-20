---
name: apply-design
description: Apply a new Claude Design export of the ChangePath landing page to the live site in project/web, then push it to a preview branch. Use when the user hands off or exports from Claude Design, or says "apply the design changes", "update the site from the design", or similar.
---

# Apply a Claude Design export to the site

The live site in `project/web/` is a hand-built version of `project/ChangePath Landing.dc.html` with a Brevo backend. A new export is **applied** to it as a set of changes, never copied over it.

## 1. Find what changed

- A Claude Design handoff usually overwrites `README.md`, `chats/` and `project/` (the `.dc.html`, `assets/`, `fonts/`, `support.js`) in the working tree. Run `git status` and `git diff --stat`, then `git diff -- "project/ChangePath Landing.dc.html"`, to see exactly what changed against the last applied design.
- If the export landed somewhere else (another folder, an attachment, a pasted path), compare it with `git show HEAD:"project/ChangePath Landing.dc.html"` instead.
- Read the newest turns in `chats/` (`git diff -- chats/`) for the user's intent: what they asked for and any caveats from the design assistant.
- If the user said what they changed, check it against the diff. If nothing changed in the design file, say so and stop.
- If anything is ambiguous, ask before editing.

## 2. Map each change to the site

| Change in the `.dc.html` | Where it goes in `project/web/` |
|---|---|
| `COPY`, `FN`, `STATS` objects (text, EN/DE, talent/employers) | `public/copy.js` |
| Template markup (`<x-dc>` … `</x-dc>`): sections, order, elements | `public/index.html` (text nodes use `data-t="key"`; repeated items are built in `public/app.js` under `lists`) |
| Inline styles, `style-hover`, `style-focus` | the matching class in `public/styles.css` (hover/focus become `:hover`/`:focus`) |
| `renderVals()` / component logic | `public/app.js` |
| New Phosphor icon (`ph-…`) | add its rule to `public/icons.css` from `@phosphor-icons/web@2.1.1` `src/bold/style.css` (install the package with npm and copy the rule) |
| New or changed image or font | copy into `public/assets/` or `public/fonts/`; resize large images for the web (the logo is shown at 30px tall) |

Template syntax: `{{ t.key }}` = copy key; `<sc-if value="{{ isTalent }}">` = `data-show="talent"`; `<sc-for list="{{ t.x }}">` = a list renderer in `app.js`.

## 3. Keep what only exists on the site

The design file doesn't contain these, so a straight copy would break them. Keep them unless the user explicitly says otherwise:

- **Form field `name` keys** in `copy.js` (`{ name: 'firstName', label: … }`). The API depends on `firstName`, `lastName`, `email`, `company`, `role`. New fields need a `name` and handling in `api/subscribe.js`.
- **Double opt-in copy:** `doneBody` in all four EN/DE × talent/employers blocks tells people to confirm via email. If the design changes `doneBody`, keep the confirm-your-email message in it.
- **Form behaviour:** honeypot field, consent checkbox, error messages, the LinkedIn step posting to `/api/linkedin`, `UI` strings in `app.js`.
- **Self-hosted fonts and icons.** No CDN links (`unpkg`, Google Fonts, etc.): loading third-party assets is a GDPR risk for a German site.
- **Hero:** the site only uses the "pile" hero. Ignore manifesto-hero changes unless the user asks to switch.
- `public/confirmed.html`, `api/`, `lib/`, `vercel.json`.

If a design change conflicts with any of these, tell the user and ask.

## 4. Check

- `cd project/web && npm test` (API tests must pass).
- `node --check public/app.js && node -e "$(cat public/copy.js); for (const l of ['en','de']) for (const a of ['talent','employers']) if (!COPY[l][a].fields.every(f => f.name)) throw new Error(l+'/'+a+' field without name')"`.
- If a browser is available, serve `public/` and load the page in EN and DE, talent and employers (`?lang=de&for=employers`). Check there are no console errors and no horizontal scroll at 390px.

## 5. Ship to a preview

- Create a branch `design-update-YYYY-MM-DD` and commit the site changes **and** the new design files under `project/` and `chats/`, so the next export is compared against this one. Don't commit stray downloads such as zips.
- Push the branch. Vercel builds a preview for it; tell the user to open it from the Vercel project's **Deployments** tab (or the GitHub branch's deployment link).
- Summarise in plain language what changed on the site, anything you skipped and why, and anything that needs checking.
- Merge into `main` (which deploys to production) **only** when the user approves the preview.
