import type { Metadata } from "next";

export const BASE_URL = "https://www.grahamharrispartnership.co.uk";
export const BUSINESS_ID = `${BASE_URL}/#business`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

// Confirmed by the business for public use. Share these values with the
// contact page so structured data and visitor-facing information stay aligned.
export const businessContact = {
  telephone: "+441162752275",
  telephoneDisplay: "0116 275 2275",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Ridgeway",
    addressLocality: "Littlethorpe",
    addressRegion: "Leicestershire",
    postalCode: "LE19 2JJ",
    addressCountry: "GB",
  },
};

// Page metadata replaces nested metadata objects, so pages must explicitly
// include these defaults rather than relying on the root layout's images.
export const sharedOpenGraph = {
  type: "website",
  locale: "en_GB",
  siteName: "Graham Harris Partnership Ltd.",
  images: [
    {
      url: `${BASE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "Graham Harris Partnership Ltd. – Architectural Services",
    },
  ],
} satisfies NonNullable<Metadata["openGraph"]>;

export const sharedTwitter = {
  card: "summary_large_image",
  images: [`${BASE_URL}/og-image.png`],
} satisfies NonNullable<Metadata["twitter"]>;

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Graham Harris Partnership",
      legalName: "Graham Harris Partnership Ltd.",
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/icon.png`,
      image: `${BASE_URL}/og-image.png`,
      email: "info@grahamharrispartnership.co.uk",
      telephone: businessContact.telephone,
      description:
        "Graham Harris Partnership provides architectural services in South Leicestershire, including planning permission drawings, building regulations drawings, architectural design, and measured surveys.",
      address: businessContact.address,
      // Omit sameAs until genuine business profiles are supplied and approved.
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "South Leicestershire, United Kingdom",
        },
        ...["Market Harborough", "Lutterworth", "Oadby", "Wigston", "Blaby", "Hinckley"].map(
          (name) => ({ "@type": "Place", name }),
        ),
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@grahamharrispartnership.co.uk",
        telephone: businessContact.telephone,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Architectural Services",
        itemListElement: [
          "Advice and consultation on project requirements",
          "Building design advice",
          "Measured surveys",
          "Architectural drawings for alterations, extensions and new houses",
          "Planning Permission Drawings",
          "Building Regulations Drawings",
          "Architectural Design",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Graham Harris Partnership",
      alternateName: "Graham Harris Partnership Ltd.",
      url: `${BASE_URL}/`,
      inLanguage: "en-GB",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};
