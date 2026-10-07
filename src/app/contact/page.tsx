import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BASE_URL, BUSINESS_ID, businessContact, sharedOpenGraph, sharedTwitter } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Graham Harris Partnership about architectural services in South Leicestershire. Discuss your building project, extension, or planning enquiry.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Contact Us | Graham Harris Partnership Ltd.",
    description:
      "Get in touch with Graham Harris Partnership about architectural services in South Leicestershire. Tell us about your building project or planning enquiry.",
    url: `${BASE_URL}/contact`,
  },
  twitter: {
    ...sharedTwitter,
    title: "Contact Us | Graham Harris Partnership Ltd.",
    description:
      "Get in touch with Graham Harris Partnership about architectural services in South Leicestershire. Tell us about your building project or planning enquiry.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#webpage`,
  url: `${BASE_URL}/contact`,
  name: "Contact Graham Harris Partnership",
  description:
    "Contact Graham Harris Partnership about architectural services in South Leicestershire, building projects, extensions, planning permission, or building regulations.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": BUSINESS_ID },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
          Contact Us:
        </h1>
        <p className="text-gray-700 mb-8">
          Please send an email with your details and a brief description
          <br />
          of your potential project and we will get back to you.
        </p>
        <div className="text-gray-700 mb-8">
          <p className="mb-3">
            Telephone:{" "}
            <a
              href={`tel:${businessContact.telephone}`}
              className="underline hover:text-gray-900"
            >
              {businessContact.telephoneDisplay}
            </a>
          </p>
          <address className="not-italic">
            {businessContact.address.streetAddress}
            <br />
            {businessContact.address.addressLocality}
            <br />
            {businessContact.address.addressRegion}
            <br />
            {businessContact.address.postalCode}
            <br />
            United Kingdom
          </address>
        </div>
        <ContactForm />
      </article>
    </>
  );
}
