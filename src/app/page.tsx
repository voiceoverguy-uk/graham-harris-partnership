import type { Metadata } from "next";
import { BASE_URL, BUSINESS_ID, sharedOpenGraph, sharedTwitter } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Graham Harris Partnership",
  description:
    "Graham Harris Partnership provides architectural services in South Leicestershire, including planning permission drawings, building regulations, architectural design, and measured surveys.",
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Graham Harris Partnership",
    description:
      "Professional architectural services in South Leicestershire, including planning permission, building regulations, and design consultation.",
    url: `${BASE_URL}/`,
  },
  twitter: {
    ...sharedTwitter,
    title: "Graham Harris Partnership",
    description:
      "Professional architectural services in South Leicestershire, including planning permission, building regulations, and design consultation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: `${BASE_URL}/`,
  name: "Graham Harris Partnership – Architectural Services in South Leicestershire",
  description:
    "Graham Harris Partnership provides architectural services in South Leicestershire, including planning permission drawings, building regulations drawings, architectural design, and measured surveys.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": BUSINESS_ID },
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
