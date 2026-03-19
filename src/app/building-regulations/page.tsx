import type { Metadata } from "next";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Building Regulations Services",
  description:
    "Building regulations drawings and submissions by Graham Harris Partnership in South Leicestershire. Specification, co-ordination with consultants, and Local Authority approval.",
  alternates: {
    canonical: `${BASE_URL}/building-regulations`,
  },
  openGraph: {
    title: "Building Regulations Services | Graham Harris Partnership Ltd.",
    description:
      "Building regulations drawings and submissions in South Leicestershire. Specification, consultant co-ordination, and Local Authority approval.",
    url: `${BASE_URL}/building-regulations`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Regulations Services | Graham Harris Partnership Ltd.",
    description:
      "Building regulations drawings and submissions in South Leicestershire. Specification, consultant co-ordination, and Local Authority approval.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/building-regulations#service`,
  name: "Building Regulations Drawings",
  url: `${BASE_URL}/building-regulations`,
  description:
    "Graham Harris Partnership prepares building regulations drawings and submissions for Local Authority and Approved Inspector approval across South Leicestershire, including specification of works and co-ordination with specialist consultants.",
  provider: {
    "@type": "ProfessionalService",
    name: "Graham Harris Partnership",
    url: BASE_URL,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Leicestershire, United Kingdom",
    },
  },
  serviceType: "Building Regulations",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "South Leicestershire, United Kingdom",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building Regulations Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Specification of new building works to meet Building Regulations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Co-ordination with specialist consultants and suppliers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preparation of application drawings for Local Authority / Approved Inspector" } },
    ],
  },
};

export default function BuildingRegulationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
          Building Regulations
        </h1>

        <h2 className="font-bold text-gray-700 mb-4">Our service includes:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Specification of new building works to meet the requirements of
            current Building Regulations.
          </li>
          <li>
            Co-ordination with specialist consultants and suppliers to achieve a
            complete building design.
          </li>
          <li>
            Preparation of application drawings and documents for submission to
            Local Authority/ Approved Inspector.
          </li>
        </ul>
      </article>
    </>
  );
}
