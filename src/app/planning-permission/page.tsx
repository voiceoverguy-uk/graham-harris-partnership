import type { Metadata } from "next";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Planning Permission Services",
  description:
    "Planning permission support from Graham Harris Partnership in South Leicestershire. Pre-application consultations, drawings, and submissions to Local Authorities.",
  alternates: {
    canonical: `${BASE_URL}/planning-permission`,
  },
  openGraph: {
    title: "Planning Permission Services | Graham Harris Partnership Ltd.",
    description:
      "Planning permission support in South Leicestershire. Consultations, application drawings, and submissions to Local Authorities.",
    url: `${BASE_URL}/planning-permission`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Planning Permission Services | Graham Harris Partnership Ltd.",
    description:
      "Planning permission support in South Leicestershire. Consultations, application drawings, and submissions to Local Authorities.",
  },
};

export default function PlanningPermissionPage() {
  return (
    <article>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
        Planning Permission Drawings in South Leicestershire
      </h1>

      <h2 className="font-bold text-gray-700 mb-4">Our service includes:</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          Pre-application consultations with Local Authorities and statutory
          consultees.
        </li>
        <li>
          Co-ordination of specialist consultants to meet local Planning
          Authority requirements.
        </li>
        <li>
          Preparation of application drawings and documents for submission to
          Local Authority.
        </li>
      </ul>

      <h2 className="font-bold text-gray-700 mb-4">
        Various applications including:
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Full Planning Permission</li>
        <li>Householder applications</li>
        <li>Change of use development for buildings and land</li>
        <li>Listed Building Consent</li>
        <li>Retrospective Planning Applications</li>
        <li>Planning Appeals</li>
      </ul>
    </article>
  );
}
