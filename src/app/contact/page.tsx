import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Graham Harris Partnership – Architects in South Leicestershire. Send us a message about your building project, extension, or planning enquiry.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Graham Harris Partnership Ltd.",
    description:
      "Get in touch with Graham Harris Partnership – Architects in South Leicestershire. Tell us about your building project or planning enquiry.",
    url: `${BASE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Graham Harris Partnership Ltd.",
    description:
      "Get in touch with Graham Harris Partnership – Architects in South Leicestershire. Tell us about your building project or planning enquiry.",
  },
};

export default function ContactPage() {
  return (
    <article>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
        Contact Us:
      </h1>
      <p className="text-gray-700 mb-8">
        Please send an email with your details and a brief description
        <br />
        of your potential project and we will get back to you.
      </p>
      <ContactForm />
    </article>
  );
}
