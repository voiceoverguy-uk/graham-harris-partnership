import type { Metadata } from "next";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Graham Harris Partnership",
  description:
    "Graham Harris Partnership – Architects in South Leicestershire. Planning permission, building regulations, architectural drawings, and design consultation for residential and commercial projects.",
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    title: "Graham Harris Partnership",
    description:
      "Professional architectural services in South Leicestershire including planning permission, building regulations, and design consultation.",
    url: `${BASE_URL}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Graham Harris Partnership",
    description:
      "Professional architectural services in South Leicestershire including planning permission, building regulations, and design consultation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: `${BASE_URL}/`,
  name: "Graham Harris Partnership – Architects in South Leicestershire",
  description:
    "Family-run architectural practice in South Leicestershire providing planning permission drawings, building regulations drawings, architectural design, and measured surveys.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: {
    "@type": "ProfessionalService",
    name: "Graham Harris Partnership",
    url: BASE_URL,
    email: "info@grahamharrispartnership.co.uk",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Leicestershire, United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advice and consultation on project requirements" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building design advice" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Measured surveys" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural drawings for alterations, extensions and new houses" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planning Permission applications" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building Regulations approval" } },
      ],
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
          Architectural Services including:
        </h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Advice and consultation on project requirements.</li>
          <li>Building design advice.</li>
          <li>Measured surveys.</li>
          <li>
            Architectural drawings for all projects from simple house alterations
            and extensions to new houses and small scale non-residential projects.
          </li>
          <li>
            Specification and detailing of new building works to meet statutory
            authority requirements.
          </li>
          <li>
            Preparation and submission of applications for Planning Permission and
            Building Regulations Approval.
          </li>
          <li>
            Co-ordination of all parties in the planning and design process.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Please contact Graham Harris Partnership,{" "}
          <strong>Graham</strong> or <strong>Richard Harris</strong> to discuss
          your proposal.
        </p>

        <h2 className="text-lg text-gray-600 mb-4">Our Aim</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            To provide a professional service to meet the individual needs of our
            Clients.
          </li>
          <li>
            To provide practical and creative design solutions to new buildings.
          </li>
          <li>
            To resolve issues in order to bring about good development.
          </li>
        </ul>
      </article>
    </>
  );
}
