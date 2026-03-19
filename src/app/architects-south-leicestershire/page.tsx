import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Architects in South Leicestershire",
  description:
    "Graham Harris Partnership – architects in South Leicestershire. Family-run practice offering planning permission drawings, building regulations drawings, architectural design, and measured surveys.",
  alternates: {
    canonical: `${BASE_URL}/architects-south-leicestershire`,
  },
  openGraph: {
    title: "Architects in South Leicestershire | Graham Harris Partnership Ltd.",
    description:
      "Family-run architects in South Leicestershire providing planning permission drawings, building regulations drawings, architectural design, and measured surveys.",
    url: `${BASE_URL}/architects-south-leicestershire`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Architects in South Leicestershire | Graham Harris Partnership Ltd.",
    description:
      "Family-run architects in South Leicestershire providing planning permission drawings, building regulations drawings, architectural design, and measured surveys.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/architects-south-leicestershire#webpage`,
  url: `${BASE_URL}/architects-south-leicestershire`,
  name: "Architects in South Leicestershire – Graham Harris Partnership",
  description:
    "Graham Harris Partnership is a family-run architectural practice serving South Leicestershire including Market Harborough, Lutterworth, Oadby, Wigston, Blaby, and Hinckley.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: {
    "@type": "ProfessionalService",
    name: "Graham Harris Partnership",
    url: BASE_URL,
    email: "info@grahamharrispartnership.co.uk",
    description:
      "Family-run architectural practice in South Leicestershire providing planning permission drawings, building regulations drawings, architectural design and measured surveys.",
    areaServed: [
      { "@type": "City", name: "Market Harborough" },
      { "@type": "City", name: "Lutterworth" },
      { "@type": "City", name: "Oadby" },
      { "@type": "City", name: "Wigston" },
      { "@type": "City", name: "Blaby" },
      { "@type": "City", name: "Hinckley" },
      { "@type": "AdministrativeArea", name: "South Leicestershire, United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Services in South Leicestershire",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planning Permission Drawings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building Regulations Drawings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Measured Surveys" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Homes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barn Conversions" } },
      ],
    },
  },
};

export default function ArchitectsSouthLeicestershirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
          Architects in South Leicestershire
        </h1>

        <p className="text-gray-700 mb-6">
          Graham Harris Partnership is a family-run architectural practice based
          in South Leicestershire, offering a comprehensive range of professional
          services for residential and small-scale commercial projects. With
          decades of experience working across the region, we understand the local
          planning landscape and building requirements that are unique to this
          part of the East Midlands.
        </p>

        <p className="text-gray-700 mb-8">
          As established architects in South Leicestershire, we take pride in
          delivering practical, creative design solutions tailored to the
          individual needs of each client. Whether you are planning a simple
          house alteration or a complete new build, our team provides the
          professional guidance and detailed drawings needed to bring your
          project to life.
        </p>

        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Architectural Services We Offer
        </h2>
        <p className="text-gray-700 mb-4">
          Our practice covers the full scope of architectural services required
          for domestic and small commercial projects:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>
            <Link href="/planning-permission" className="underline hover:text-gray-900">
              Planning permission drawings
            </Link>{" "}
            and application submissions to Local Authorities
          </li>
          <li>
            <Link href="/building-regulations" className="underline hover:text-gray-900">
              Building regulations drawings
            </Link>{" "}
            and specification of works to meet current standards
          </li>
          <li>Architectural design advice and consultation</li>
          <li>Measured surveys of existing buildings and sites</li>
          <li>
            Co-ordination of specialist consultants including structural
            engineers, ecologists, and arboricultural consultants
          </li>
        </ul>

        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Areas We Cover in South Leicestershire
        </h2>
        <p className="text-gray-700 mb-4">
          We provide architectural services across South Leicestershire and the
          surrounding areas, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Market Harborough</li>
          <li>Lutterworth</li>
          <li>Oadby</li>
          <li>Wigston</li>
          <li>Blaby</li>
          <li>Hinckley</li>
        </ul>
        <p className="text-gray-700 mb-8">
          We also work with clients in the wider Leicestershire area and across
          local authority boundaries where projects require it.
        </p>

        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Typical Residential Projects
        </h2>
        <p className="text-gray-700 mb-4">
          As architects in South Leicestershire, we regularly work on a wide
          variety of residential projects, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>House extensions and full building remodelling</li>
          <li>Loft conversions</li>
          <li>New homes and replacement dwellings</li>
          <li>Barn conversions and change of use developments</li>
          <li>Garden rooms and conservatories</li>
          <li>Work on listed buildings and within conservation areas</li>
          <li>Garage and outbuilding conversions</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-4">
          If you are considering a building project in South Leicestershire,
          we would be happy to discuss your requirements. Please{" "}
          <Link href="/contact" className="underline hover:text-gray-900">
            contact Graham Harris Partnership
          </Link>{" "}
          to arrange an initial consultation with Graham or Richard Harris.
        </p>
      </article>
    </>
  );
}
