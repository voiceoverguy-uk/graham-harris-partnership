# Graham Harris Partnership Ltd. — Website

## Overview
Professional brochure website for Graham Harris Partnership Ltd., an architectural services company based in South Leicestershire. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4
- **Email**: Resend (for contact form, sends polished HTML emails)
- **Typography**: Century Gothic (primary), Montserrat (Google Fonts fallback)

## Pages
- `/` — Home (services list + Our Aim)
- `/planning-permission` — Planning Permission services
- `/building-regulations` — Building Regulations services
- `/our-experience` — Experience & project types
- `/gallery` — Featured Projects carousel with lightbox
- `/contact` — Contact form (sends email via Resend)

## SEO
- Unique title + meta description per page
- Canonical URLs using https://www.grahamharrispartnership.co.uk
- Open Graph + Twitter card tags per page
- JSON-LD schema markup (@type "Architect") in layout
- `/robots.txt` — allows all crawlers, references sitemap
- `/sitemap.xml` — lists all 6 pages with priorities

## Project Structure
```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API (Resend, HTML email)
│   ├── building-regulations/
│   ├── contact/
│   ├── gallery/
│   ├── our-experience/
│   ├── planning-permission/
│   ├── globals.css
│   ├── layout.tsx              # Root layout with Header/Nav/Footer + JSON-LD
│   ├── page.tsx                # Home page
│   ├── robots.ts               # /robots.txt
│   └── sitemap.ts              # /sitemap.xml
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GalleryCarousel.tsx
│   ├── Header.tsx
│   ├── LightboxModal.tsx
│   └── Nav.tsx
└── data/
    └── gallery.ts              # Gallery image list (49 images)
public/
└── gallery/                    # Gallery images (GHP-01.jpg to GHP-49.jpg)
```

## Gallery
- Images live in `/public/gallery/` named `GHP-01.jpg` through `GHP-49.jpg`
- Image list is generated in `src/data/gallery.ts`
- To add/remove images: update the count and naming pattern in gallery.ts
- Carousel shows 1 image on mobile, 2 on tablet, 3 on desktop
- Clicking an image opens a full-screen lightbox with keyboard navigation

## Environment Variables
- `RESEND_API_KEY` — Secret, required for contact form email sending
- `CONTACT_FROM_EMAIL` — Sender email (default: noreply@grahamharrispartnership.co.uk)

## Contact Form
- All submissions always go to richard@grahamharrispartnership.co.uk (hardcoded)
- Sender name: "Graham Harris Partnership Website"
- Fields: Name, Email, Message (all required)
- Honeypot spam protection (hidden "company" field)
- Rate limiting: 5 requests per minute per IP
- Sends polished HTML email with plain text fallback via Resend
- Reply-To set to visitor's email address

## Development
```
npm run dev    # Starts on port 5000
npm run build  # Production build
npm start      # Production server on port 5000
```
