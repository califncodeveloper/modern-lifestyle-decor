import {
  HeroSection,
  BrandIntroSection,
  CategorySection,
  FeaturedProductsSection,
  WhyChooseUsSection,
  ProjectGallerySection,
  HowWeWorkSection,
  TestimonialMarqueeSection,
  FinalCTASection,
} from "@/components/home";
import { ClientShowcase } from "@/components/clients";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Brand Introduction Section */}
      <BrandIntroSection />

      {/* 3. Our Services / Product Categories */}
      <CategorySection />

      {/* 4. Featured Product Showcase */}
      <FeaturedProductsSection />

      {/* 5. Why Choose Modern LifeStyle Decor */}
      <WhyChooseUsSection />

      {/* 6. Our Work / Project Showcase */}
      <ProjectGallerySection />

      {/* 7. How We Work */}
      <HowWeWorkSection />

      {/* 8. Testimonial Marquee */}
      <TestimonialMarqueeSection />

      {/* 9. Our Clients & Project Companies Showcase */}
      <ClientShowcase />

      {/* 10. Final Call to Action */}
      <FinalCTASection />
    </>
  );
}
