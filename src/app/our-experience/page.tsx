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

export default function OurExperiencePage() {
  return (
    <article>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
        Architectural Project Experience
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
  );
}
