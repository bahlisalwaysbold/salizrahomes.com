# Team Credentials Panel

A tap-to-reveal credentials panel for the "Meet the Team" section. Tapping a
team member's card slides in a panel from the right showing their COREN/NSE
registration, qualifications, and a short bio — instead of a flat photo +
name block.

## Design notes

Built to match the site's own palette rather than introduce a new one:
- Warm cream background (`#f4f1ea`), same tone as the homepage
- The tan/clay accent bar (`#b08d57`) that already runs down the left edge
  of your homepage hero reappears as the panel's signature edge
- Sharp corners throughout (no border-radius), matching the grid-lined,
  hairline-rule look already established on the site
- If your actual hex values differ slightly, the three variables at the
  top of `team-credentials.css` (`--tc-cream`, `--tc-ink`, `--tc-clay`)
  control the whole thing — change those three and everything re-tunes.

## Where it goes

`about.html`, replacing or sitting next to the current team photo/name block.

## Setup

1. Link the CSS in `about.html`'s `<head>`:
   ```html
   <link rel="stylesheet" href="css/team-credentials.css">
   ```
2. Paste the contents of `team-credentials.html` where your team section
   currently is.
3. **Fill in the real values** — every `[insert ...]` placeholder in the
   `.tc-card` button needs a real answer:
   - `data-coren` — his actual COREN registration number
   - `data-nse` — NSE membership, if he has one (leave `""` to hide the row)
   - `data-cac` — already filled with RC 1736628
   - `data-qualification` — degree + university
   - `data-experience` — years, focus area
   - `data-bio` — 2-3 sentences on what he does day to day
   - `data-photo` — path to his photo (used twice: card + panel)
   - `data-verify-url` — points to `coren.gov.ng`'s verification page so a
     visitor can actually check the number themselves, not just trust
     an image

4. **To add more team members**, copy the entire `<button class="tc-card">`
   block and give it that person's data. The panel and backdrop at the
   bottom only need to exist once on the page — every card reuses it.

## A privacy note

Don't post scanned copies of the actual COREN certificate or ID as public
images — the registration number as text plus the coren.gov.ng verify link
is more convincing (anyone can check it) and doesn't expose scans that
could be screenshotted or misused. That's why this component shows
credentials as text rows rather than embedding certificate photos.
