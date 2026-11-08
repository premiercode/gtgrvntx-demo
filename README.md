# GTG RV Repair & Rentals: homepage design preview

Design preview prepared by Premier Code Inc.

- **Preview:** https://gtgrvntx.premiercodeinc.com/
- Static HTML, CSS and JS with no build step. Open any `option-*/index.html` directly or serve the folder.
- Hidden from search engines on purpose (`noindex, nofollow` on every page and `Disallow: /` in `robots.txt`).
- Nothing is functional. Prices, units and the form are samples, labeled on the page.

## The three options

Switch between them with the Option A / B / C control at the bottom-left of every page.

| Option | Link | Concept |
|---|---|---|
| Option A | https://gtgrvntx.premiercodeinc.com/option-a/ | Shop-floor confidence: the look the client liked in the first demo, refined. A work-order tag stamped "Good To Go", dark hero, brand red. |
| Option B | https://gtgrvntx.premiercodeinc.com/option-b/ | Outdoorsy camping field guide: light and calm, pine greens with the logo's red, leads with rentals and the lake. |
| Option C | https://gtgrvntx.premiercodeinc.com/option-c/ | Retro Texas road-trip magazine: sunset palette, postcards, "mile marker" chapters and a trip route for renting. |

The root page (`/`) redirects to Option A.

## Confirm with the client (every `<!-- PLACEHOLDER -->` in the pages)

1. Business name as shown: "GTG RV Repair & Rentals" (the owner first wrote "Repair & Rental").
2. "Approved Forest River warranty provider": the client's own claim, not independently confirmed. No logo is used.
3. "Started renting in 2019 with the owners' own Super C motorhome" (from an archived 2023 About page and Outdoorsy).
4. Rental mileage: 150 miles per day included, $0.45 per mile after (from the rental agreement PDF).
5. The lakeside campground photo (Class A and Jeep): confirm the client took it.
6. reCAPTCHA v3: script and token field go in the form at launch (a honeypot field is already in place).

Also confirm before launch (not shown on the preview, needed for the full site):
- Sample units, nightly rates, sale prices and the Outdoorsy 4.9 / 150+ reviews rating are as of Nov 8, 2026 and change.
- Permission to reuse every photo; all images come from the client's own site and Outdoorsy listings.
- Shop hours, one cancellation policy (three versions exist today), delivery and setup offer, public email.
- Mobile RV repair is left off the preview on purpose (owner decision). Confirm with the client before adding it back.

## Remove at launch

- The option switcher: the block between `<!-- REMOVE AT LAUNCH: option switcher -->` and `<!-- /REMOVE AT LAUNCH -->` before `</body>`, plus the `pv-flow` `display:contents` wrapper marked with the same comment.
- The two options not chosen (`option-*/` folders) and the root redirect to Option A.
- The "Design preview" bar and the "Sample" labels, once real data is wired in.
- `<meta name="robots" content="noindex, nofollow">` on every page.
- The `Disallow: /` block in `robots.txt`.
