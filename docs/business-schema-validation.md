# Business structured-data verification

Checked on 7 October 2026.

## Approved scope

The business owner confirmed the address and telephone shown in the researched
directory listing and explicitly approved displaying them on the contact page,
as well as including them in structured data. No official profile URLs were
supplied, so `sameAs` remains omitted. Other visible text and styling remain
unchanged.

Public source:
https://littlethorpe-leicestershire.cylex-uk.co.uk/company/graham-harris-partnership-14384612.html

The registered office on Companies House differs from the approved business
location. It was not substituted for the business address:
https://find-and-update.company-information.service.gov.uk/company/05021399

## Google guidance checked

- https://developers.google.com/search/docs/appearance/structured-data/local-business
  (page last updated 8 September 2026)
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
  (page last updated 10 July 2026)

Google lists `name` and a physical `PostalAddress` as required LocalBusiness
properties and recommends a telephone with country and area codes. The rendered
`ProfessionalService` entity has the approved full address and an international
telephone number. Its contact point uses the same number. The contact page
visibly displays these details and provides a matching `tel:` link.

The business remains described as providing architectural services, not as
architects. Business and website identifiers remain connected, as does the
contact page's `about` reference. Unapproved social profiles, opening hours,
coordinates and ratings have not been added.

## Checks performed

- `npm run build` passed.
- `npx tsc --noEmit` passed.
- All seven public page responses returned HTTP 200. Their rendered JSON-LD
  parsed successfully and contained the same approved address and telephone.
- Checked business/website/contact-page references and absence of `sameAs`.
- Checked contact-page HTML for visible address, telephone, matching call link,
  and preservation of the existing introduction.
- Logo, schema image and sitemap returned HTTP 200 in the development preview.
- No page-level `noindex` was found; robots.txt did not block the site.
- Desktop and mobile screenshots showed readable contact information and an
  intact form. The capture browser reported a development hot-reload WebSocket
  warning caused by its localhost origin; page rendering and HTTP checks passed.

## Limitations and publication checks

This was a check of rendered development markup against Google's documentation,
not a Google Rich Results Test or a Search Console URL Inspection result.
Schema validity does not establish rich-result eligibility or guarantee a search
appearance. Google's quality guidance also requires markup to represent visible
page content; the approved contact details are now visible on the contact page.
The business graph remains site-wide, so this check does not certify every
property's visibility on every page.

After publication, use Google's Rich Results Test on the updated public URL and
Search Console URL Inspection to check the version Google actually receives,
including access to the image URLs. Review any reported issues without inventing
missing business details. Deployment and Google account actions were not
performed as part of this change.
