import type { Metadata } from "next";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Our Experience",
  description:
    "Graham Harris Partnership – experienced architects in South Leicestershire. Extensions, new houses, barn conversions, listed buildings, loft conversions, and commercial projects.",
  alternates: {
    canonical: `${BASE_URL}/our-experience`,
  },
  openGraph: {
    title: "Our Experience | Graham Harris Partnership Ltd.",
    description:
      "Experienced architects in South Leicestershire. Extensions, new houses, barn conversions, listed buildings, loft conversions, and commercial projects.",
    url: `${BASE_URL}/our-experience`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Experience | Graham Harris Partnership Ltd.",
    description:
      "Experienced architects in South Leicestershire. Extensions, new houses, barn conversions, listed buildings, loft conversions, and commercial projects.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE_URL}/our-experience#webpage`,
  url: `${BASE_URL}/our-experience`,
  name: "Our Experience – Graham Harris Partnership",
  description:
    "Graham Harris Partnership has extensive experience as architects in South Leicestershire, covering house extensions, new homes, barn conversions, listed buildings, loft conversions, and a wide range of domestic and commercial projects.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: {
    "@type": "ProfessionalService",
    name: "Graham Harris Partnership",
    url: BASE_URL,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Leicestershire, United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Project Types",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House extensions and building remodelling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "New houses" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barn conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Listed building works and conservation areas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic garage and outbuilding conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Porches and conservatories" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Change of use for buildings and land" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Disabled Facility Grant adaptations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refurbishment and conversion of commercial premises" } },
      ],
    },
  },
};

export default function OurExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
          Our Experience Includes:
        </h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Creative house extension designs and full building re-modelling.</li>
          <li>New houses.</li>
          <li>Family Kitchens and modern living space layouts.</li>
          <li>Porches and Conservatories.</li>
          <li>Garden Room extensions.</li>
          <li>Loft conversions.</li>
          <li>
            Work on listed buildings and within conservation areas where sensitive
            development and attention to detail are required.
          </li>
          <li>Domestic garage and outbuilding conversions.</li>
          <li>Barn conversions.</li>
          <li>Alterations to religious buildings.</li>
          <li>
            Disabled Facility Grant adaptation and alterations to dwellings to
            meet the specific needs of individuals.
          </li>
          <li>Change of use for existing buildings and land.</li>
          <li>Domestic swimming pools and leisure buildings.</li>
          <li>
            Refurbishment, adaptation and conversion of existing buildings and
            commercial premises.
          </li>
          <li>
            Producing Land Registry title plans for conveyancing purposes.
          </li>
          <li>Alterations to licensed premises.</li>
          <li>
            We have co-ordinated specialist consultants on projects including:
            Structural Engineers, Ecologists for Protected Species Surveys,
            Arboricultural Consultants, Quantity Surveyors and Contract
            Administrators, Highways Engineers, Acoustic Consultants,
            Archaeologists, Fire Risk Assessors, CDM Co-ordinators, Party Wall
            Surveyors and we work closely with local Contractors and
            Sub-Contractors to complete a successful development.
          </li>
          <li>
            Our service aims to bring together all the people needed to achieve
            the right solution for our Clients.
          </li>
        </ul>
        <p className="text-gray-700">
          Please contact Graham Harris or Richard Harris to discuss your project.
        </p>
      </article>
    </>
  );
}
