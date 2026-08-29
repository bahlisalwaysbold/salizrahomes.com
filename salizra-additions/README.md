# Salizra Homes — Website Add-Ons

Three self-contained pieces you can drop into the existing site without touching or
redesigning anything already there. Nothing here replaces your current pages —
you're just inserting extra blocks into them.

## What's in here

```
salizra-additions/
├── whatsapp-button/
│   ├── whatsapp-button.html   → paste before </body> on every page
│   └── whatsapp-button.css    → link in <head> of every page
├── quote-form/
│   ├── quote-form.html        → paste into contact.html
│   └── quote-form.css         → link in <head> of contact.html
└── faq-section/
    ├── faq-section.html       → paste into contact.html or services.html
    └── faq-section.css        → link in <head> of that page
```

## How to add each one (same pattern every time)

1. Copy the `.css` file into wherever your site keeps its stylesheets
   (probably a `css/` folder next to your `images/` folder).
2. Add one line in the `<head>` of the relevant page(s):
   ```html
   <link rel="stylesheet" href="css/whatsapp-button.css">
   ```
3. Open the `.html` file here, copy everything inside it, and paste it into
   the target page at the spot noted in the comment at the top of that file.
4. Save, refresh, done. Nothing else on the page changes.

## Priority order (do these in this order for fastest impact)

1. **WhatsApp button** — takes 5 minutes, goes on every page, immediately
   gives visitors a one-tap way to reach you instead of hunting for the
   footer.
2. **Quote form** — needs a one-time Formspree signup (free, 5 minutes,
   instructions are in `quote-form.html`) so submissions land in your email.
   Without this step the form has nowhere to send its data.
3. **FAQ section** — go through the placeholder answers marked
   `[Replace with a real answer]` and put in real numbers/timelines. This
   also helps the page show up in Google searches like "cost of building a
   duplex in Niger State."

## Still worth doing later (not code — needs your input)

- Real photos of completed projects (the "Boundary Fence & Site Works —
  Completed" project currently has none).
- 2-3 short client testimonials.
- A couple of blog-style posts targeting local search terms — happy to
  draft outlines whenever you're ready for that.
