import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import {
  ServiceHero,
  ProductGrid,
  ProductEditorialSection,
  ServiceCTA,
} from "@/components/services";
import { designerBlindsProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Designer Blinds | Architectural Window Blinds",
  description:
    "Discover window blinds that combine visual appeal with practical functionality. Explore Roller, Zebra, Wooden, PVC, Aluminium and Roman Blinds.",
  alternates: {
    canonical: "/services/blinds",
  },
  openGraph: {
    title: `Designer Blinds | ${siteConfig.name}`,
    description:
      "Discover window blinds that combine visual appeal with practical functionality. Explore Roller, Zebra, Wooden, PVC, Aluminium and Roman Blinds.",
    url: `${siteConfig.url}/services/blinds`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/categories/category-blinds.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Designer Blinds`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Designer Blinds | ${siteConfig.name}`,
    description:
      "Discover window blinds that combine visual appeal with practical functionality.",
  },
};

export default function BlindsPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Designer Blinds", href: "/services/blinds" },
  ];

  // Highlight Zebra Blinds with an editorial split section
  const featuredBlind = designerBlindsProducts[1]; // Zebra Blinds

  return (
    <>
      {/* 1. Page Hero */}
      <ServiceHero
        eyebrow="ARCHITECTURAL LIGHT CONTROL"
        title="Beautiful Light. Better Living."
        description="Discover window blinds that combine visual appeal with practical functionality."
        breadcrumbs={breadcrumbs}
        categoryTag="Privacy • Light Filtering • Style"
        image="/images/categories/category-blinds.jpg"
      />

      {/* 2. Editorial Showcase */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] block mb-2">
              VERSATILE LIGHT MODULATION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
              Daylight Filtration Meets Modern Architecture
            </h2>
          </div>

          <ProductEditorialSection
            product={featuredBlind}
            index={1}
            reversed={true}
          />
        </Container>
      </section>

      {/* 3. Complete 6-Product Blinds Catalogue */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC]">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              THE BLINDS GALLERY
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
              Our Complete Range of Designer Blinds
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              From moisture-resistant PVC to warm natural timber and precision aluminium, discover blinds crafted for every room and purpose.
            </p>
          </div>

          <ProductGrid products={designerBlindsProducts} columns={3} />
        </Container>
      </section>

      {/* 4. Consultation CTA */}
      <ServiceCTA
        categoryName="Designer Blinds"
        eyebrow="FREE CONSULTATION & SHADE SAMPLES"
        title="Elevate Your Interior Ambiance With Designer Blinds"
        description="Book an on-site consultation to explore physical fabric swatches, timber finishes and motorized automation possibilities."
      />
    </>
  );
}

