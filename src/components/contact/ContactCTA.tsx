"use client";

import { CTASection } from "@/components/common/CTASection";
import { contactCtaContent } from "@/data/contact";

export function ContactCTA() {
  return (
    <CTASection
      eyebrow={contactCtaContent.eyebrow}
      title={contactCtaContent.heading}
      description={contactCtaContent.description}
      primaryCta={contactCtaContent.primaryCta}
      secondaryCta={contactCtaContent.secondaryCta}
      backgroundImage={contactCtaContent.backgroundImage}
      variant="charcoal"
    />
  );
}

