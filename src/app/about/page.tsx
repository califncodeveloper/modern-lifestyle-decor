import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  AboutHeroSection,
  WhoWeAreSection,
  BusinessExpertiseSection,
  OurApproachSection,
  BusinessModelSection,
  LocationsSection,
  WhyChooseUsAboutSection,
  AboutCTASection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Modern LifeStyle Decor, manufacturer, wholesaler and retailer of mosquito nets, designer blinds and customised curtains.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Learn about Modern LifeStyle Decor, manufacturer, wholesaler and retailer of mosquito nets, designer blinds and customised curtains.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.name}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${siteConfig.name}`,
    description:
      "Learn about Modern LifeStyle Decor, manufacturer, wholesaler and retailer of mosquito nets, designer blinds and customised curtains.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Hero Section */}
      <AboutHeroSection />

      {/* 2. Who We Are Section */}
      <WhoWeAreSection />

      {/* 3. Our Business Expertise Section */}
      <BusinessExpertiseSection />

      {/* 4. Our Approach Section */}
      <OurApproachSection />

      {/* 5. Business Operations: Manufacturer, Wholesale & Retail */}
      <BusinessModelSection />

      {/* 6. Showroom & Manufacturing Locations */}
      <LocationsSection />

      {/* 7. Why Choose Us (Verified Attributes) */}
      <WhyChooseUsAboutSection />

      {/* 8. Contact Call To Action */}
      <AboutCTASection />
    </>
  );
}

