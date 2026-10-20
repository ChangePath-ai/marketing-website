# ChangePath AI Fluent Talent

_Started 2026-10-19 10:14 UTC_

---

## User

Design a marketing landing page based on this website's structure: https://www.aifutures.group/

Use the project "ChangePath 4.0 - MVP scope" as the product brief. We do exactly the same, not for technical talent, but for AI Fluent talent outside of tech (product, design, marketing, sales, legal, finance). The LP should speak to 2 audiences - the talent for whom we sell the idea of we help you stand out in a world where every AI-generated CV looks the same. And for employers: we don't drown you in 100's of applications per role. We help you find talent that is AI fluent and applies with proof of work, not a generic CV. Be bold. Be ambitious.

## Assistant



## Assistant

_[tool: read_skill_prompt]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: tool_search_tool_bm25]_

_[tool: list_files]_

_[tool: web_fetch]_

I can't locate the "ChangePath 4.0 - MVP scope" project from here — a few quick questions before I build.

_[tool: ask_user]_

I've put up a short form. I can't find the "ChangePath 4.0 – MVP scope" project from here, so please paste its link or upload the brief. Your answers on the other questions (how the page serves both audiences, the main call to action, which sections to include, and language) will decide how I build it. If you'd rather skip the form, say "go" and I'll make those calls myself.

## User

Answered — brief: Positioning: https://app.notion.com/p/Positioning-3fb13270f5be81a98431c1f8ce8458dc

ICP: https://app.notion.com/p/ChangePath-ICP-3fb13270f5be81f1b31ec4db5b7b57f1; audience_split: Toggle at top (Talent / Employers) swaps the whole page; primary_cta: Waitlist / early access for both; sections: Vision / manifesto, Functions we cover (product, design, marketing, sales, legal, finance), How it works, Proof-of-work showcase, Stats / social proof, FAQ, Contact form; language: EN + DE toggle; variations: 2 hero directions; proof: Not defined yet — invent something credible

## Assistant

_[tool: notion__notion-fetch]_

_[tool: notion__notion-fetch]_

_[tool: tool_search_tool_bm25]_

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: ready_for_verification]_

I've built the landing page as `ChangePath Landing.dc.html`; a background check is still running. Its structure follows AI Futures: hero, vision, functions, how it works, a sample proof page, why now (stats), FAQ and waitlist.

- **Two switches in the nav:** "For talent / For employers" swaps the whole page's copy, including the form and FAQ. EN/DE swaps the language.
- **Two hero directions:** you pick one in Tweaks.
  - **The pile (default):** dark hero with a stack of identical AI-written CVs and one proof-of-work card on top.
  - **The manifesto:** huge gradient headline ("CVs are free now. Proof isn't.") with crossed-out CV clichés leading to a proof page.
- **Proof of work:** since this wasn't defined yet, I made it a shareable proof page with three parts: the task from the posting, how the candidate used AI, and the result with attached work. The employer view adds "Pass" and "Invite to interview" buttons.

**Check before publishing:**
- The pricing answers in the FAQ ("free during pilot", "pilot partners help shape pricing") are my wording, because your brief leaves pricing open.
- The sample people, examples and URL (Lena W., the changepath.ai address) are made up.
- The work-sample thumbnails are striped placeholders.
- The stats come from the sources in your Positioning page; two of them are UK or general figures, not DACH.

The waitlist form shows a confirmation but doesn't send data anywhere yet.

## User

Remove this. It's obvious from the language toggle

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

I removed the "Built in DACH…" line from the talent vision list, in both English and German. That list now has three statements.

The employer version still has "Starting in DACH. For KMUs and scale-ups alike." I left it because it names your target companies rather than repeating the language point. Say if you want it gone too.

## User

Make this section the FOMO builder. Suggestion: Curious to see what a proof of work portfolio looks like? We're in closed beta. Sign up to the list and we'll update you as soon as we're live. Can't wait? DM our founder to see if there's a free spot.

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I turned the proof section into a closed-beta teaser, in both languages and for both talent and employers; a background check is still running.

- **Headline:** "Curious what a proof-of-work portfolio looks like?" Employers see "…looks like for your role?"
- **Locked preview:** the sample proof page is now blurred, with a dark "Closed beta · invite only" card on top.
- **Main button:** "Join the waitlist", which jumps to the sign-up form.
- **Second option:** "Can't wait? DM our founder", as a LinkedIn button.

Two things for you:
- The "DM our founder" button links to linkedin.com for now. Send me the founder's profile URL and I'll put it in.
- The German button reads "Schreib unserer Gründerin" (female founder). Tell me if it should be "Gründer" or "unserem Gründungsteam".

## User

Save as standalone HTML: `ChangePath Landing.dc.html`

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: present_fs_item_for_download]_

Your standalone file, `ChangePath Landing.html` (4 MB), is ready to download above. Fonts, images and icons are built in, so it works offline. The top of the page opened without errors.

## User

Change to Name and last name as different fields

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I split the name field into "First name" and "Last name" ("Vorname" / "Nachname" in German) on both the talent and employer forms. Both fields are required, and the two fields stack one above the other like the rest of the form. The standalone download still has the old single name field; say if you want a fresh export.

## User

Change the LD profile for the confirmation page. Offer to gain early beta access + a 20m call when they submit their Linkedin profile

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I moved the LinkedIn field from the talent sign-up form to the confirmation screen, in both English and German; a background check is still running.

- **Sign-up form:** now just first name, last name, email and function.
- **Confirmation screen:** after joining, talent sees a "Skip the line" card. They enter their LinkedIn profile to get early beta access plus a 20-minute call with the founder.
- **After they send it:** the card changes to "You're in the beta queue". It says you'll email them a link to book the call.

The employer form is unchanged; it never had a LinkedIn field. The German text again says "Gründerin" (female founder), so change it if that's wrong.

## User

Make the background image less distracting and the section less tall

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I made the blurred preview behind the closed-beta card much quieter and the section shorter; a background check is still running.

- **Background:** more blur, less color and about half the opacity, fading out toward the bottom.
- **Height:** the preview area is capped at about 460px, with less padding and smaller gaps around it.

## User

Found issues — fixing…

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I fixed the closed-beta card getting cut off at the top and bottom on phone-width screens; a background check is still running. The section now grows with the card instead of having a fixed maximum height. On desktop it should stay as short as before.

## User

This section looks weird. Either the headline breaks and the CTA card is next to it, or the headline goes across and the card stays below

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I went with your first option: the headline and intro text sit on the left, with the closed-beta card next to them on the right. A background check is still running. I also made the headline slightly smaller so it breaks cleanly over a few lines in the narrower column. On narrow screens the card drops below the text.

## User

What's the fastest way to build this page on Wix?

## Assistant

There are three ways to do it. I'd go with the second.

**1. Embed it as-is (about an hour, but a stopgap)**
- Host the standalone `ChangePath Landing.html` somewhere like Netlify Drop, then add it to an empty Wix page with Embed Code → Embed a site.
- Downsides:
  - **Search engines:** Google won't really see the content, because it sits inside an embedded frame.
  - **Forms:** sign-ups won't go into Wix.
  - **Layout:** the embed area needs a fixed height, which is awkward on mobile.
- Fine for a demo link. Not for a launch.

**2. Rebuild natively in Wix Studio (about 1–2 days, recommended)**
- **Fonts:** upload Galano Classic and Spline Sans as custom fonts, and set the brand colors as site colors.
- **Talent / Employers:** make two pages, `/talent` and `/employers`, with the nav buttons linking between them. This is easier on Wix than one page that swaps its content, and better for ads and search.
- **EN/DE:** use Wix Multilingual. It gives you the language switcher and separate German URLs.
- **Forms:** use Wix Forms for the waitlist. Send people to a thank-you page with the LinkedIn "Skip the line" form, and set up an automation that emails the booking link for the 20-minute call.
- **Sections:** build each one as a Studio section. They're mostly text, grids and buttons, so they map cleanly.
- **Hard parts:** the blurred closed-beta preview and the hero card stack. Export those as images and place them as backgrounds.
- **FAQ:** use Wix's built-in accordion.

**3. Hybrid**
Build everything natively as in option 2, but keep only the hero visual as a small embed.

I can prepare a build sheet for whoever builds it in Wix. It would list each section with its copy in EN and DE, colors, font sizes and spacing, plus the image files for the hard parts.

## User

"DM our founder on Linkedin" should link to https://www.linkedin.com/in/maritzabonano/

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

I'll split answers on a `[[…]]` marker so the phrase renders as a real link, and point the beta card button there too.

_[tool: run_script]_

_[tool: ready_for_verification]_

"DM our founder on Linkedin" in the English "What does it cost?" answer is now a link to your LinkedIn profile, opening in a new tab. A background check is still running.

I pointed the "DM our founder" button on the closed-beta card to your profile as well.

The German answer to that question doesn't mention DMing the founder yet. If you send me the German wording, I'll add it with the same link.

## User

Add a headline element between the vision and body text

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I added a headline between "Our vision" and the body text in the vision section:

- **Talent:** "Talent over titles." / "Talent statt Titel."
- **Employers:** "Signal over noise." / "Signal statt Rauschen."

You can click any of them to edit the wording directly.

## User

Make all three of these elements into a headline + Sub headline format

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

All three vision statements now have a large headline with a smaller grey line underneath. I did this for talent and employers, in English and German. I mostly split your existing wording, but some lines are new or reworded. For example, talent's first point now reads "The CV is dead." with "Proof of work is the new signal. Show what you can do, not what you claim." underneath. Please check the new lines; you can edit any of them by clicking the text.

## User

Fix this section. The headline and body text look weird side by side. Think where the headline need to break

## Assistant

_[tool: grep]_

The headline will break at the sentence ("Your field." / "Now AI-augmented."), sit on its own row, and the body text will run beneath it.

_[tool: run_script]_

_[tool: ready_for_verification]_

The functions section header is now stacked instead of side by side:

- **Headline:** breaks after the first sentence, so it reads "Your field." on one line and "Now AI-augmented." on the next.
- **Body text:** sits underneath, slightly larger, at a comfortable width.

The same applies to the employer and German versions. The check flagged a slight overlap between the two headline lines; this is likely just the tight line spacing, but I haven't checked it on screen.

## User

Update the headlines of the 4 steps to match de body copy description

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Script aborted (grep output was truncated, so the comma line didn't match). Retrying without that edit.

_[tool: run_script]_

_[tool: ready_for_verification]_

_[tool: grep]_

I renamed the four talent steps to match what each description says:

- **English:** Get matched → Get your brief → Build your proof → Apply & reach out
- **German:** Matches finden → Brief erhalten → Proof bauen → Bewerben & vernetzen

I left the employer steps as they were ("Share a role", "We brief", "They prove", "You review"), since they already match their descriptions.

## User

Headlines are too big. The header becomes too long. Fix it.

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I made the hero shorter, with smaller headlines in both hero directions:

- **The pile (default):** the largest headline size went from 92px to 64px. I also reduced the space above and below it, and shortened the card stack from 540px to 480px.
- **The manifesto:** the largest headline size went from 156px to 104px.

The page check flagged a slight overlap between the two headline lines in both the hero and the functions section. This is likely just the tight line spacing on the large type, but I haven't checked it on screen.

## User

Remove the access to the employer portal from the header. Link it from the footer. Remove the toggle in general

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I removed the Talent / Employers toggle from the header, so it now shows only the nav links, EN/DE and "Join the waitlist".

The employer page is now reached from the footer. A "For employers" link there switches the whole page to the employer version and jumps to the top. On the employer version the same link reads "For talent", so people can get back.

The page check again flagged the two headline lines touching in the hero and the functions section. This is likely just the tight line spacing on the large type, but I haven't checked it on screen.

## User

Link to imprint: https://www.changepath.ai/impressum

## User

Link to data privacy: https://www.changepath.ai/datenschutz

## User

Link to data privacy: https://www.changepath.ai/datenschutz

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The Privacy link in the footer now goes to https://www.changepath.ai/datenschutz and opens in a new tab.

## User

Link to https://www.linkedin.com/in/maritzabonano/

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The LinkedIn link in the footer now goes to https://www.linkedin.com/in/maritzabonano/ and opens in a new tab.

## User

Make this form GDPR compliant

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I added a required consent checkbox above the submit button on the talent and employer forms, in English and German. Nobody can submit without ticking it.

The consent text says what ChangePath uses the data for. It also says consent can be withdrawn at any time and links to your privacy policy (changepath.ai/datenschutz). The LinkedIn "Skip the line" card now has a short line on how the profile is used, also linked to the privacy policy.

**To check:**
- **Email address:** the consent text says people can withdraw by emailing hello@changepath.ai. I made that address up; send me the real one.
- **Double opt-in:** in Germany, email sign-ups usually need a confirmation email with a link the person clicks before they count as subscribed. Set that up in your form or email tool when it goes live.
- **Your privacy policy:** it should mention the waitlist, the LinkedIn profile and whichever tool processes the sign-ups.

This is a standard setup, not legal advice, so have someone qualified review it before launch.

## User

Update email to support@changepath.ai

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

The consent text now gives support@changepath.ai as the address for withdrawing consent, on the talent and employer forms in both English and German.

## User

Other opens up text field to capture answer

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Selecting "Other" ("Andere" in German) in the talent form's function chips now opens a text field below them, ready to type in. It asks which function, with "HR, Operations" as an example. The field is required while "Other" is selected and disappears when you deselect it.

