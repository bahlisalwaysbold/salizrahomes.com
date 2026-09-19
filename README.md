# Salizra Homes Limited — Website

This static website has been refreshed around the current Salizra asset pack.

## Main pages
- `index.html` — homepage / hero / capabilities / selected work
- `about.html` — company story, 9-person team structure and clickable certification viewer
- `company-profile.html` — public profile page and downloadable company profile PDF
- `projects.html` — responsive visual project archive with filters and full-size image viewer
- `services.html` — the four core capability areas and delivery process
- `contact.html` — phone, email, WhatsApp and project brief form

## Easy edits
`js/site-data.js` is the single source for the public year, registration number, office address, phone numbers, email, WhatsApp number and team list.

When individual team contact details are received, add `phone` and/or `email` values to the corresponding team object and turn the disabled contact buttons into live links in `about.html`.

## Certificates
The About page currently contains the supplied CAC, COREN, PenCom, NSITF, Group Life Assurance, FIRS, BPP and SCUML documents. The viewer opens the original supplied image. Current validity should be rechecked against the issuing body before describing a document as current.

## Photography
The site uses optimized WebP copies for page loading while keeping the supplied original photographs inside `images/team/` and `images/projects/` for future editing.
