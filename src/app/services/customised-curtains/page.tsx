import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import {
  ServiceHero,
  FabricCollection,
  ProductEditorialSection,
  ServiceCTA,
} from "@/components/services";
import { curtainFabrics } from "@/data/products";
import { ProductEnquiryButton } from "@/components/services/ProductEnquiryButton";
import { Scissors, Palette, Layers, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Customised Curtains | Fabric Collections & Bespoke Drapery",
  description:
    "Explore customised curtains featuring tailor-made drapery and integrated window solutions. Bespoke curtains for residential and commercial spaces across Chennai.",
  alternates: {
    canonical: "/services/customised-curtains",
  },
  openGraph: {
    title: `Customised Curtains | ${siteConfig.name}`,
    description:
      "Explore customised curtains featuring tailor-made drapery and integrated window solutions. Bespoke curtains for residential and commercial spaces across Chennai.",
    url: `${siteConfig.url}/services/customised-curtains`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/categories/category-curtains.png",
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
      "Explore customised curtains featuring tailor-made drapery and integrated window solutions.",
  },
};

const draperyCapabilities = [
  {
    title: "Blackout & Dimout Weaves",
    description:
      "High-density triple-weave fabrics providing 100% light blockage, privacy, and ambient thermal control for restful bedrooms.",
    icon: Layers,
  },
  {
    title: "Artisan Jacquards & Damasks",
    description:
      "Textured woven textiles with raised motifs and heavy drape, tailored for formal living rooms and banquet spaces.",
    icon: Palette,
  },
  {
    title: "Airy Linen & Sheer Voiles",
    description:
      "Natural breathable weaves that gently soften harsh exterior glare while keeping daytime outdoor views open.",
    icon: Scissors,
  },
];

export default function CustomisedCurtainsPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Customised Curtains", href: "/services/customised-curtains" },
  ];

  // Feature the verified client installation ensemble as the editorial hero highlight
  const featuredInstallation = curtainFabrics[0]; // Customised Curtains & Window Ensemble

  return (
    <>
      {/* 1. Page Hero */}
      <ServiceHero
        eyebrow="BESPOKE DRAPERY STUDIO"
        title="Fabric, Texture and Style — Made for Your Space."
        description="Explore customised curtains tailored to your exact window dimensions, featuring branded textile catalogues and architectural hardware."
        breadcrumbs={breadcrumbs}
        categoryTag="Tailor-Made • Branded Catalogues • Hardware"
        image="/images/categories/category-curtains.png"
      />

      {/* 2. Editorial Highlight (Verified Client Installation) */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] block mb-2">
              VERIFIED CLIENT INSTALLATION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
              Integrated Drapery & Window Protection Ensemble
            </h2>
          </div>

          <ProductEditorialSection
            product={featuredInstallation}
            index={0}
            reversed={false}
          />
        </Container>
      </section>

      {/* 3. Verified Client Curtain Catalogue */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC]">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              VERIFIED CATALOGUE
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
              Our Customised Curtain Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              Explore our real completed client window furnishing installations crafted to bespoke architectural measurements.
            </p>
          </div>

          <FabricCollection fabrics={curtainFabrics} />
        </Container>
      </section>

      {/* 4. Fabric Catalogue Consultation & Hardware Fitting Guide */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-neutral-200/80">
        <Container>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              BESPOKE TEXTILE CATALOGUES
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
              Full Fabric Swatches on Measurement Visits
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              Choose from physical swatch books of European and domestic drapery fabrics, ripple-fold tracks, and heavy-duty motorization during our on-site consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {draperyCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xs border border-neutral-200/90 bg-[#F8F9FC] p-6 sm:p-7 shadow-2xs"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#EEF4FD] text-[#004AAD] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium tracking-tight text-[#151717]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-light leading-relaxed text-[#525252]">
                    {cap.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-neutral-200/70">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#004AAD] font-medium">
                      <Check className="h-3.5 w-3.5" />
                      Swatches Available On-Site
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <ProductEnquiryButton
              productName="Custom Drapery & Fabric Swatch Consultation"
              categoryLabel="Customised Curtains"
              variant="primary"
              size="md"
              text="Book In-Person Fabric Consultation on WhatsApp"
            />
          </div>
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
