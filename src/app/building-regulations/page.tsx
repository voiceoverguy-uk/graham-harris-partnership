import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Regulations",
  description:
    "Graham Harris Partnership provides building regulations services including specification of new building works, co-ordination with consultants, and preparation of application documents.",
};

export default function BuildingRegulationsPage() {
  return (
    <article>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
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
  );
}
