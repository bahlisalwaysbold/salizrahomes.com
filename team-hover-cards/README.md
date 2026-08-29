# Team Hover Cards (Dangote-style)

Hover a team member's photo → it zooms in slightly and WhatsApp/Call icons
fade in over the image. A three-dot button in the corner opens a small
popover with that person's credentials — no big panel, no page navigation.

This replaces the earlier "team-credentials" slide-in panel version — use
this one instead, they serve the same purpose but this matches the
interaction you actually wanted.

## Where it goes

`about.html`, replacing your current team photo/name block.

## Setup

1. Link the CSS in `about.html`'s `<head>`:
   ```html
   <link rel="stylesheet" href="css/team-hover-cards.css">
   ```
2. Paste the contents of `team-hover-cards.html` where your team section
   currently is.
3. Fill in the real values on the `.tm-dots-btn` — every `[insert ...]`
   placeholder needs a real answer (COREN number, NSE membership, degree,
   experience, bio). Leave a value as `""` to have that row skip itself
   automatically.
4. Update the `href` on the WhatsApp and Call icons to that specific
   person's number if different team members have different lines.
5. **To add more team members**, copy the whole block between
   `<!-- ONE TEAM MEMBER -->` and `<!-- END one team member -->`, paste it
   again inside `.tm-grid`, and fill in that person's details. The grid
   automatically lays out however many cards you add.

## Notes

- No certificate images — same reasoning as before: the registration
  number as text plus a working `coren.gov.ng` verify link is more
  trustworthy than a static image, and doesn't expose scanned documents.
- Icons and the three-dot button show automatically on tap for mobile
  (no hover needed there).
- Only one popover is open at a time — opening a new one closes any
  other, and clicking anywhere outside closes it.
