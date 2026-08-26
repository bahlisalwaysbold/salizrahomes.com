# Salizra Homes Limited — Website

A 5-page static website (no build tools, no framework) for **Salizra Homes Limited** (RC 1736628).

## How to open it

1. Unzip/open this folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.

You can also just double-click `index.html` to open it directly in a browser — everything works without a server, except the contact form and the Google Map (see below).

## What's new in this version

- **Real logo** — your uploaded logo artwork has been cropped, cleaned up and dropped in as actual image files (not a redrawn approximation) at `images/logo/`. It's used across the nav, footer, hero, favicon, and as a watermark on every placeholder photo block.
- **Animated loading screen** — a full-screen preloader (see `#preloader` in every page, styled in `css/enhance.css`) built from your real shield icon, with a moving light sweep animated through the shield using a CSS mask — similar idea to Instagram's loader, but built from your own mark and with light moving through it rather than a static spin.
- **About page** — added a "Leadership & Team" section (photo-card grid with hover reveal animations, ready for real staff photos), an "Our Values" grid, a "How We're Organised" section, and removed all the visible `[Placeholder]` bracket text — that guidance now lives in HTML comments (search for `<!-- EDIT:` in the files) so it doesn't show to visitors.
- **Projects page redesign** — was a single repeated slideshow; now has a stats strip, a large "Featured Project" spotlight with an animated progress bar, and a redesigned project grid with hover overlays ("Discuss This Project"), status tags and category tags.
- **Real social icons** — the footer and the new "Follow Us" row on the Contact page now use proper Facebook / Instagram / WhatsApp glyphs (inline SVG) instead of "f / in / wa" text.
- **Real map embed** — the Contact page now has an actual embedded Google Map (no API key needed) instead of a placeholder box.
- **Hover animations** — added throughout: team cards, project cards, service cards, value items, pills, differentiator cards, contact rows, buttons.
- **"Why Salizra Homes" band** — a company-style differentiators section (index + services pages), written only from facts you've already given us (RC number, location, engineer-led process) — no invented statistics.

## Folder structure

```
salizra-homes/
├── index.html          Home page — hero, services, differentiators, founder teaser, current projects
├── about.html          Founder profile, company story, leadership & team grid, values
├── projects.html       Stats strip + featured project spotlight + filterable project grid
├── services.html       Services breakdown + process steps + differentiators
├── contact.html        Contact details, real map embed, social row, message form
├── css/style.css       Base styling (original stylesheet)
├── css/enhance.css     New: preloader, logo sizing, team grid, project redesign, social icons, hover effects
├── js/main.js          Preloader logic, slideshow, project filters, mobile nav, scroll reveal
├── favicon.ico
├── images/
│   ├── logo/            Your real logo — icon (orange/white) + full lockup + favicon set
│   ├── founder/          Put a real photo of Engr. Salisu Sumaila here
│   └── projects/         Put real project site photos here
└── README.md
```

## Things you'll still want to personalise

Search the HTML files for `<!-- EDIT:` comments — each one marks a spot with placeholder content:

- **Founder & team photos** — every `.founder-photo`, `.story-figure` and `.team-photo` is currently your logo watermark on a dark plate. Swap in real photos (see "Adding a photo" below).
- **Team names & roles** — About page currently lists generic roles (Site Engineer, Quantity Surveyor, etc.) without invented names, since we don't have your real staff details. Replace with real names/titles once ready.
- **Project photos & details** — the 6 projects across the Home and Projects pages are realistic placeholders (status, location, description) — swap in real project names, photos and progress percentages as you have them.
- **Social media links** — Facebook and Instagram currently link to `#`. Update the `href` in the footer and on the Contact page once you have the real profile URLs. WhatsApp is already wired to `https://wa.me/2347038101928`.
- **Map address** — the embed currently searches for "Zuma Barracks, Tafa, Niger State." Swap the query in the `iframe src` on `contact.html` for your exact address once you can pin it precisely on Google Maps.
- **Contact form** — still submits via `mailto:`, which opens the visitor's email app. For a "send without leaving the page" form, connect it to a free service like [Formspree](https://formspree.io) (swap the `action` attribute in `contact.html`).

## Adding a real photo to a slide, project card, or team member

Each dark placeholder block currently contains a watermark image, e.g.:

```html
<div class="slide-media">
  <img src="images/logo/salizra-icon-white.png" alt="" class="watermark">
</div>
```

Replace it with a real photo — either swap the whole block for an `<img>`, or keep the div and set a background image in `css/style.css` or inline:

```html
<div class="slide-media" style="background: url('images/projects/project-1.jpg') center/cover;">
```

## Colors (edit in css/style.css, top of file)

| Variable | Use |
|---|---|
| `--white` / `--paper` | Backgrounds |
| `--ink` / `--ink-soft` | Text |
| `--orange` / `--orange-deep` | Brand accent (from the logo) |
| `--black` | Dark sections (hero image plates, footer, CTA band, preloader) |

## Logo

`images/logo/` contains your real logo, processed from the file you sent:

- `salizra-icon.png` / `salizra-icon-white.png` — the shield mark only, transparent background, in orange and white.
- `salizra-logo-full.png` / `salizra-logo-full-white.png` — the full icon + "SALIZRA HOMES LIMITED" wordmark lockup.
- `favicon-*.png` and `favicon.ico` — generated favicon set, already linked in every page's `<head>`.

The animated preloader uses `salizra-icon-white.png` as a CSS mask, so the "moving light" effect will automatically follow the real shape of your logo if you ever replace that file with an updated version.
