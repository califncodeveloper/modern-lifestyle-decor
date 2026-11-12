import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  GalleryHero,
  GalleryShowcase,
  GalleryCTA,
} from "@/components/gallery";

export const metadata: Metadata = {
  title: "Gallery | Modern LifeStyle Decor",
  description:
    "Explore mosquito nets, designer blinds, customised curtains, and interior furnishing collections from Modern LifeStyle Decor.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description:
      "Explore mosquito nets, designer blinds, customised curtains, and interior furnishing collections from Modern LifeStyle Decor.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Gallery & Collections Showcase`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Gallery | ${siteConfig.name}`,
    description:
      "Explore mosquito nets, designer blinds, customised curtains, and interior furnishing collections from Modern LifeStyle Decor.",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* 1. Elegant Editorial Hero Section with Breadcrumbs */}
      <GalleryHero />

      {/* 2. Interactive Category Filter Navigation + Masonry Grid + Lightbox */}
      <GalleryShowcase />

      {/* 3. Global Consultation & WhatsApp CTA */}
      <GalleryCTA />
    </>
  );
}

