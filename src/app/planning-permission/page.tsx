import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning Permission",
  description:
    "Graham Harris Partnership provides planning permission services including pre-application consultations, co-ordination with consultants, and preparation of application drawings.",
};

export default function PlanningPermissionPage() {
  return (
    <article>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
        Planning Permission
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
        <li>Conservation Area Consent</li>
        <li>Retrospective Planning Applications</li>
        <li>Planning Appeals</li>
      </ul>
    </article>
  );
}
