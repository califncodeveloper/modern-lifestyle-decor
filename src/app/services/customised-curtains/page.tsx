import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import {
  ServiceHero,
  FabricCollection,
  AccessoryShowcase,
  ProductEditorialSection,
  ServiceCTA,
} from "@/components/services";
import { curtainFabrics, curtainAccessories } from "@/data/products";

export const metadata: Metadata = {
  title: "Customised Curtains | Fabric Collections & Designer Accessories",
  description:
    "Explore customised curtains featuring fabrics from branded catalogues and a variety of material options. Tailor-made drapery for residential and commercial spaces.",
  alternates: {
    canonical: "/services/customised-curtains",
  },
  openGraph: {
    title: `Customised Curtains | ${siteConfig.name}`,
    description:
      "Explore customised curtains featuring fabrics from branded catalogues and a variety of material options. Tailor-made drapery for residential and commercial spaces.",
    url: `${siteConfig.url}/services/customised-curtains`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/categories/category-curtains.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Customised Curtains`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Customised Curtains | ${siteConfig.name}`,
    description:
      "Explore customised curtains featuring fabrics from branded catalogues and a variety of material options.",
  },
};

export default function CustomisedCurtainsPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Customised Curtains", href: "/services/customised-curtains" },
  ];

  // Feature Blackout Fabric as a highlighted editorial intro
  const featuredFabric = curtainFabrics[0]; // Blackout Fabric

  return (
    <>
      {/* 1. Page Hero */}
      <ServiceHero
        eyebrow="BESPOKE DRAPERY STUDIO"
        title="Fabric, Texture and Style — Made for Your Space."
        description="Explore customised curtains featuring fabrics from branded catalogues and a variety of material options."
        breadcrumbs={breadcrumbs}
        categoryTag="Tailor-Made • Branded Catalogues • Hardware"
        image="/images/categories/category-curtains.jpg"
      />

      {/* 2. Editorial Highlight */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] block mb-2">
              FEATURED FABRIC WEAVE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
              Thermal Comfort & Restful Light Blocking
            </h2>
          </div>

          <ProductEditorialSection
            product={featuredFabric}
            index={0}
            reversed={false}
          />
        </Container>
      </section>

      {/* 3. Seven Fabric Collections */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC]">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              TEXTILE COLLECTIONS
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
              Curated Drapery Fabric Collections
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              Choose from high-density blackout weaves, ornate jacquards, relaxed natural linens, sheer voiles and crisp polyesters crafted to your exact window dimensions.
            </p>
          </div>

          <FabricCollection fabrics={curtainFabrics} />
        </Container>
      </section>

      {/* 4. Curtain Accessories: The Finishing Touches */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-neutral-200/80">
        <Container>
          <AccessoryShowcase accessories={curtainAccessories} />
        </Container>
      </section>

      {/* 5. Custom Tailoring Consultation CTA */}
      <ServiceCTA
        categoryName="Customised Curtains"
        eyebrow="BESPOKE MEASUREMENT & SEWING"
        title="Bring Luxurious Drapery Into Your Interiors"
        description="Browse our complete catalogue of fabrics, pleated headers and motorization options with an in-person measurement visit."
      />
    </>
  );
}

