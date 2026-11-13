import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import {
  ServiceHero,
  ProductGrid,
  ProductEditorialSection,
  ServiceCTA,
} from "@/components/services";
import { mosquitoNetProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Mosquito Nets | Windows, Doors & Partitions",
  description:
    "Explore our range of mosquito net solutions for windows, doors and partitions. Precision-engineered insect barriers crafted for ventilation and peace of mind.",
  alternates: {
    canonical: "/services/mosquito-nets",
  },
  openGraph: {
    title: `Mosquito Nets | ${siteConfig.name}`,
    description:
      "Explore our range of mosquito net solutions for windows, doors and partitions. Precision-engineered insect barriers crafted for ventilation and peace of mind.",
    url: `${siteConfig.url}/services/mosquito-nets`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/categories/category-mosquito-nets.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Mosquito Nets`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Mosquito Nets | ${siteConfig.name}`,
    description:
      "Explore our range of mosquito net solutions for windows, doors and partitions.",
  },
};

export default function MosquitoNetsPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Mosquito Nets", href: "/services/mosquito-nets" },
  ];

  // Feature the flagship SS Open Main Door as an editorial hero highlight, and display all verified models in the catalogue
  const featuredSystem = mosquitoNetProducts[0]; // SS Open Main Door — Classic Hinged

  return (
    <>
      {/* 1. Page Hero */}
      <ServiceHero
        eyebrow="INSECT PROTECTION & FRESH AIR"
        title="Comfortable Spaces. Thoughtful Protection."
        description="Explore our range of mosquito net solutions for windows, doors and partitions."
        breadcrumbs={breadcrumbs}
        categoryTag="Windows • Doors • Partitions"
        image="/images/categories/category-mosquito-nets.png"
      />

      {/* 2. Editorial Highlight Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] block mb-2">
              FEATURED BARRIER SYSTEM
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
              Engineered for Compact Everyday Convenience
            </h2>
          </div>

          <ProductEditorialSection
            product={featuredSystem}
            index={0}
            reversed={false}
          />
        </Container>
      </section>

      {/* 3. Complete Product Catalogue Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC]">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              FULL COLLECTION
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
              Complete Mosquito Net Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              Explore our verified custom-tailored insect barrier systems for residential and commercial openings.
            </p>
          </div>

          <ProductGrid products={mosquitoNetProducts} columns={3} />
        </Container>
      </section>

      {/* 4. Consultation CTA */}
      <ServiceCTA
        categoryName="Mosquito Nets"
        eyebrow="GET CUSTOM MEASUREMENTS"
        title="Protect Your Home with Custom Mosquito Nets"
        description="Schedule a measurement consultation with our technical team. We supply and install custom-fit frames across Chennai and Tamil Nadu."
      />
    </>
  );
}

