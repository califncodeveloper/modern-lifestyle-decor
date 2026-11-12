"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import { siteConfig } from "@/config/site";
import { createWhatsAppGeneralEnquiryUrl } from "@/utils/whatsapp";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function GalleryCTA() {
  const whatsappUrl = createWhatsAppGeneralEnquiryUrl(
    "Gallery Collections & Custom Architectural Furnishing"
  );

  return (
    <section className="relative w-full border-t border-[#E5E9F2] bg-[#F8F9FC] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle blueprint pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#004AAD 1px, transparent 1px), linear-gradient(90deg, #004AAD 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient brand accent glows */}
      <div
        className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#004AAD]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#FFC30C]/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004AAD]/15 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#004AAD] shadow-2xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
            CUSTOM INTERIOR CONSULTATION
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium tracking-tight text-[#151717] sm:text-4xl lg:text-5xl leading-tight"
          >
            Looking for the Perfect Solution for Your Space?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg font-light leading-relaxed text-[#525252] max-w-2xl mx-auto"
          >
            Explore our collections and connect with our team to discuss your requirements,
            schedule on-site measurement, or request wholesale catalogue pricing.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Our Services
              </Button>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<WhatsAppIcon className="h-4 w-4 fill-current" />}
              >
                Enquire on WhatsApp
              </Button>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<PhoneCall className="h-4 w-4 text-[#004AAD]" />}
              >
                Call Us Direct
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

