import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import {
  ServiceHero,
  ServiceCTA,
} from "@/components/services";
import { ProductEnquiryButton } from "@/components/services/ProductEnquiryButton";
import {
  Sun,
  Shield,
  Palette,
  Sliders,
  TreePine,
  Layers,
  Ruler,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Designer Blinds | Architectural Window Blinds",
  description:
    "Discover window blinds that combine visual appeal with practical functionality. Explore custom-crafted Roller, Zebra, Wooden, PVC, Aluminium and Roman Blinds.",
  alternates: {
    canonical: "/services/blinds",
  },
  openGraph: {
    title: `Designer Blinds | ${siteConfig.name}`,
    description:
      "Discover window blinds that combine visual appeal with practical functionality. Explore custom-crafted Roller, Zebra, Wooden, PVC, Aluminium and Roman Blinds.",
    url: `${siteConfig.url}/services/blinds`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/categories/category-blinds.png",
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

const blindSolutions = [
  {
    title: "Roller Blinds",
    icon: Sliders,
    badge: "Clean Minimalist",
    description:
      "Streamlined fabric rolls with manual chain or motorized control, providing clean daylight filtration and modern privacy.",
    highlights: ["Smooth Roll Mechanism", "Daylight & Blackout Options", "Compact Header Box"],
  },
  {
    title: "Zebra Blinds",
    icon: Layers,
    badge: "Dual Light Control",
    description:
      "Alternating sheer and solid fabric bands that slide past each other to offer precision balance between soft daylight and full privacy.",
    highlights: ["Dual Band Control", "Contemporary Aesthetic", "Custom Stripe Widths"],
  },
  {
    title: "Wooden Blinds",
    icon: TreePine,
    badge: "Natural Timber",
    description:
      "Warm natural timber slats coated with protective UV finishes, bringing organic grain patterns and architectural sophistication.",
    highlights: ["Natural Hardwood Slats", "Rich Wood Grain", "Timeless Character"],
  },
  {
    title: "PVC Blinds",
    icon: Shield,
    badge: "100% Moisture Proof",
    description:
      "Heavy-duty water-resistant slatted blinds designed specifically for high-humidity areas, utility spaces, kitchens, and modern bathrooms.",
    highlights: ["Water & Steam Resistant", "Easy Wipe Cleaning", "Durable Slat Core"],
  },
  {
    title: "Aluminium Blinds",
    icon: Sun,
    badge: "Precision Slats",
    description:
      "Lightweight, durable architectural metal slats offering 180° angle rotation for fine-tuned directional glare and daylight control.",
    highlights: ["Slimline Metal Profile", "180° Angle Tilt", "Commercial & Home Fit"],
  },
  {
    title: "Roman Blinds",
    icon: Palette,
    badge: "Tailored Folds",
    description:
      "Soft drapery-style fabric window coverings that fold into clean horizontal pleats when raised, blending textile elegance with blind function.",
    highlights: ["Soft Fabric Pleats", "Bespoke Fabric Selection", "Elegant Stacking"],
  },
];

export default function BlindsPage() {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Designer Blinds", href: "/services/blinds" },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <ServiceHero
        eyebrow="ARCHITECTURAL LIGHT CONTROL"
        title="Beautiful Light. Better Living."
        description="Discover custom-fabricated window blinds that combine visual appeal with practical daylight functionality."
        breadcrumbs={breadcrumbs}
        categoryTag="Privacy • Light Filtering • Style"
        image="/images/categories/category-blinds.png"
      />

      {/* 2. Custom Blind Solutions Guide */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC]">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              CUSTOM FABRICATED TO ORDER
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
              Our Range of Designer Window Blinds
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              Every window blind is custom manufactured to your exact window dimensions. Explore our core blind systems crafted for residential comfort and commercial precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blindSolutions.map((blind, idx) => {
              const Icon = blind.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xs border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-2xs hover:border-[#004AAD]/50 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#EEF4FD] text-[#004AAD]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-600 border border-neutral-200/70">
                        {blind.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-medium tracking-tight text-[#151717]">
                      {blind.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm font-light leading-relaxed text-[#525252]">
                      {blind.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-neutral-100">
                      <ul className="flex flex-wrap gap-1.5">
                        {blind.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[11px] text-neutral-600 border border-neutral-200/60"
                          >
                            <Check className="h-2.5 w-2.5 text-[#004AAD]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <ProductEnquiryButton
                      productName={blind.title}
                      categoryLabel="Designer Blinds"
                      variant="primary"
                      size="sm"
                      className="w-full"
                      text="Enquire for Sizing"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. On-Site Measurement & Swatch Viewing Banner */}
      <section className="py-14 sm:py-18 bg-white border-y border-neutral-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004AAD]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD] mb-4">
              <Ruler className="h-3.5 w-3.5" />
              PHYSICAL SWATCHES & ON-SITE MEASUREMENTS
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
              View Material Samples at Your Home or Office
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
              Our technical specialists carry physical blind swatch cards, timber slat samples, and motorized automation options directly to your premises for precision measuring and daylight consultation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ProductEnquiryButton
                productName="Designer Window Blinds Consultation"
                categoryLabel="Designer Blinds"
                variant="primary"
                size="md"
                text="Book a Measurement Visit on WhatsApp"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Consultation CTA */}
      <ServiceCTA
        categoryName="Designer Blinds"
        eyebrow="DIRECT MANUFACTURER SUPPLY"
        title="Elevate Your Interior Ambiance With Designer Blinds"
        description="Book an on-site consultation to explore physical fabric swatches, timber finishes and motorized automation possibilities."
      />
    </>
  );
}
