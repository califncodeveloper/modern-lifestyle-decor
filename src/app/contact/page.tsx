import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  BusinessLocations,
  ContactCTA,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Modern LifeStyle Decor",
  description:
    "Contact Modern LifeStyle Decor for mosquito nets, designer blinds, customised curtains, and furnishing solutions. Visit our showroom or connect with our team.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Contact Modern LifeStyle Decor for mosquito nets, designer blinds, customised curtains, and furnishing solutions. Visit our showroom or connect with our team.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-secondary.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Contact & Showroom Locations`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Contact Modern LifeStyle Decor for mosquito nets, designer blinds, customised curtains, and furnishing solutions. Visit our showroom or connect with our team.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Hero with Breadcrumbs & Visual Composition */}
      <ContactHero />

      {/* 2. Two-Column Contact Section: Direct Information on Left, Interactive Form on Right */}
      <section
        id="contact-details-section"
        className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24 border-b border-neutral-200/80"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Contact Information & Team Cards */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Contact & Product Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Business Locations: Showroom 2 & Manufacturing Unit Cards */}
      <BusinessLocations />

      {/* 4. Final Consultation CTA */}
      <ContactCTA />
    </>
  );
}

