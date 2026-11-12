"use client";

import Link from "next/link";
import { MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { PRIMARY_WHATSAPP_NUMBER } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

export interface ServiceCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  categoryName?: string;
  className?: string;
}

export function ServiceCTA({
  eyebrow = "SCHEDULE A CONSULTATION",
  title = "Ready to Transform Your Windows & Spaces?",
  description = "Connect directly with our manufacturing and design specialists for tailored measurements, material recommendations, and wholesale or retail quotes.",
  categoryName,
  className,
}: ServiceCTAProps) {
  const enquirySubject = categoryName ? ` regarding ${categoryName}` : "";
  const whatsappMessage = `Hello Modern LifeStyle Decor,\n\nI would like to consult with your team${enquirySubject}.\n\nPlease share details and connect with me.\n\nThank you.`;
  const whatsappUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#151717] py-16 sm:py-20 lg:py-24 text-white",
        className
      )}
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Radial Accent */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#004AAD]/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFC30C] mb-5">
            <Sparkles className="h-3 w-3" />
            <span>{eyebrow}</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg font-light leading-relaxed text-neutral-300 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xs bg-[#004AAD] px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-white hover:bg-[#003A8C] transition-all duration-200 shadow-md cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Instant WhatsApp Enquiry</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xs bg-white/10 border border-white/20 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-white hover:bg-white/20 transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {siteConfig.contact.phone}</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xs bg-transparent border border-neutral-600 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white hover:border-white transition-all duration-200"
            >
              <MapPin className="h-4 w-4" />
              <span>Visit Showroom</span>
            </Link>
          </div>

          {/* Business Model Footnote */}
          <p className="mt-8 text-xs text-neutral-400 tracking-wider uppercase font-mono">
            {siteConfig.businessType} • Direct Factory Precision • Customised Fit
          </p>
        </div>
      </Container>
    </section>
  );
}

