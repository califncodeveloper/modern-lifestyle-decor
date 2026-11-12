import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  ServiceHero,
  ServiceCategorySection,
  ServiceCTA,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Our Services | Mosquito Nets, Designer Blinds & Customised Curtains",
  description:
    "Explore our collection of mosquito nets, designer blinds and customised curtains, bringing together functionality, style and comfort.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Explore our collection of mosquito nets, designer blinds and customised curtains, bringing together functionality, style and comfort.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Services Overview`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Explore our collection of mosquito nets, designer blinds and customised curtains, bringing together functionality, style and comfort.",
  },
};

export default function ServicesPage() {
  const breadcrumbs = [{ label: "Services", href: "/services" }];

  return (
    <>
      {/* 1. Services Overview Hero */}
      <ServiceHero
        eyebrow="OUR SERVICES"
        title="Thoughtful Solutions for Every Window and Space."
        description="Explore our collection of mosquito nets, designer blinds and customised curtains, bringing together functionality, style and comfort."
        breadcrumbs={breadcrumbs}
        categoryTag="Manufacturer | Wholesale | Retail"
        image="/images/hero/hero-secondary.jpg"
      />

      {/* 2. Three Editorial Category Presentations */}
      <ServiceCategorySection />

      {/* 3. Global Service Consultation & Enquiry CTA */}
      <ServiceCTA
        eyebrow="TAILORED ARCHITECTURAL SOLUTIONS"
        title="Transform Your Spaces With Expert Craftsmanship"
        description="Connect with Modern LifeStyle Decor for prompt consultations, material viewings, exact measurements and wholesale supply."
      />
    </>
  );
}

