"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Button";
import { contactHeroContent, primaryContact } from "@/data/contact";
import { fadeUp, staggerContainer, imageReveal } from "@/lib/motion";
import { PRIMARY_WHATSAPP_NUMBER } from "@/utils/whatsapp";

export function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "10%"]
  );

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FC] via-[#F8F9FC]/60 to-white pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-22 border-b border-neutral-200/70"
    >
      {/* Subtle architectural background grid accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#004AAD 1px, transparent 1px), linear-gradient(90deg, #004AAD 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient lighting glow */}
      <div
        className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#004AAD]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#FFC30C]/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Heading, Description, Quick CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#004AAD]/15 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                {contactHeroContent.eyebrow}
              </span>
            </motion.div>

            {/* Heading text */}
            <motion.div variants={fadeUp}>
              <h1 className="font-heading text-3xl font-medium tracking-tight text-[#151717] sm:text-4xl lg:text-[3.25rem] leading-[1.14]">
                Let&apos;s Create Something{" "}
                <span className="relative inline-block text-[#004AAD]">
                  Beautiful Together.
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full text-[#FFC30C]"
                    height="6"
                    viewBox="0 0 100 6"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M0,3 Q50,0 100,3 L100,5 Q50,2 0,5 Z" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg leading-relaxed text-[#525252] font-light max-w-2xl"
            >
              {contactHeroContent.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                variant="primary"
                size="md"
                onClick={scrollToEnquiry}
                leftIcon={<MessageSquare className="h-4 w-4" />}
              >
                Send Enquiry
              </Button>

              <a
                href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="md"
                  leftIcon={<PhoneCall className="h-4 w-4" />}
                >
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>

            {/* Quick Status / Capabilities Pill */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#004AAD]"
            >
              <span className="rounded-xs bg-white px-3 py-1.5 border border-[#E5E9F2] text-[#151717] shadow-2xs">
                Direct In-House Consultation
              </span>
              <span className="text-[#CDD5E2] hidden sm:inline">•</span>
              <span className="rounded-xs bg-white px-3 py-1.5 border border-[#E5E9F2] text-[#151717] shadow-2xs">
                Showroom &amp; Factory Visits
              </span>
              <span className="text-[#CDD5E2] hidden sm:inline">•</span>
              <span className="rounded-xs bg-white px-3 py-1.5 border border-[#E5E9F2] text-[#151717] shadow-2xs">
                Custom On-Site Estimates
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual composition with subtle parallax */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-xs border border-neutral-200/80 bg-neutral-100 shadow-xl lg:max-w-none">
              <motion.div
                style={{ y: imageY }}
                className="absolute -top-[5%] inset-x-0 h-[110%] w-full"
              >
                <Image
                  src={contactHeroContent.image || "/images/hero/hero-secondary.jpg"}
                  alt="Modern LifeStyle Decor Customer Consultation & Window Treatments"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Information Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xs bg-white/95 px-4 py-3 backdrop-blur-md border border-white/40 shadow-sm">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004AAD]">
                    Primary Contact
                  </p>
                  <p className="text-xs font-semibold text-[#151717] mt-0.5">
                    {primaryContact.name}
                  </p>
                  <a
                    href={`tel:${primaryContact.phone.replace(/\s+/g, "")}`}
                    className="text-xs text-[#004AAD] hover:underline font-mono"
                  >
                    {primaryContact.phone}
                  </a>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
                    Available
                  </span>
                </div>
              </div>

              {/* Brand Accent Corner */}
              <div className="absolute top-0 right-0 h-14 w-14 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 h-2.5 w-14 bg-[#004AAD]" />
                <div className="absolute top-0 right-0 w-2.5 h-14 bg-[#FFC30C]" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
