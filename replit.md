# Graham Harris Partnership Ltd. — Website

## Overview
Professional brochure website for Graham Harris Partnership Ltd., an architectural services company. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4
- **Email**: Resend (for contact form)
- **Typography**: Century Gothic (primary), Montserrat (Google Fonts fallback)

## Pages
- `/` — Home (services list + Our Aim)
- `/planning-permission` — Planning Permission services
- `/building-regulations` — Building Regulations services
- `/our-experience` — Experience & project types
- `/gallery` — Featured Projects carousel with lightbox
- `/contact` — Contact form (sends email via Resend)

## Project Structure
```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API (Resend)
│   ├── building-regulations/
│   ├── contact/
│   ├── gallery/
│   ├── our-experience/
│   ├── planning-permission/
│   ├── globals.css
│   ├── layout.tsx              # Root layout with Header/Nav/Footer
│   └── page.tsx                # Home page
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
- `CONTACT_TO_EMAIL` — Recipient email (default: info@grahamharrispartnership.co.uk)
- `CONTACT_FROM_EMAIL` — Sender email (default: noreply@grahamharrispartnership.co.uk)

## Contact Form
- Fields: Name, Email, Message (all required)
- Honeypot spam protection (hidden "company" field)
- Rate limiting: 5 requests per minute per IP
- Sends via Resend API route at `/api/contact`

## Development
```
npm run dev    # Starts on port 5000
npm run build  # Production build
npm start      # Production server on port 5000
```
