import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Graham Harris Partnership Ltd. for architectural services. Send us a message about your project.",
};

export default function ContactPage() {
  return (
    <article>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
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
