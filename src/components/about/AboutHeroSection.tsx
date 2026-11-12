"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { aboutHeroContent } from "@/data/about";
import { fadeUp, staggerContainer, imageReveal } from "@/lib/motion";

export function AboutHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax effect on hero imagery (disabled if reduced motion preferred)
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "12%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FC] via-[#F8F9FC]/60 to-white pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-24 border-b border-neutral-200/70"
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
          <Breadcrumbs items={[{ label: "About Us" }]} />
        </div>

        {/* Hero Grid: Editorial Typography + Asymmetrical Architectural Photography */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Eyebrow & Description */}
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
                {aboutHeroContent.eyebrow}
              </span>
            </motion.div>

            {/* Heading text reveal */}
            <motion.div variants={fadeUp}>
              <h1 className="font-heading text-3xl font-medium tracking-tight text-[#151717] sm:text-4xl lg:text-[3.25rem] leading-[1.14]">
                Creating Beautiful Spaces Through{" "}
                <span className="relative inline-block text-[#004AAD]">
                  Thoughtful Design.
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
              {aboutHeroContent.description}
            </motion.p>

            {/* Brand Capabilities Pill */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#004AAD]"
            >
              <span className="rounded-xs bg-white px-3 py-1.5 border border-[#E5E9F2] text-[#151717] shadow-2xs">
                Manufacturer
              </span>
              <span className="text-[#CDD5E2]">•</span>
              <span className="rounded-xs bg-white px-3 py-1.5 border border-[#E5E9F2] text-[#151717] shadow-2xs">
                Wholesale
              </span>
              <span className="text-[#CDD5E2]">•</span>
              <span className="rounded-xs bg-white px-3 py-1.5 border border-[#E5E9F2] text-[#151717] shadow-2xs">
                Retail
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Architectural Image with Subtle Parallax */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-xs border border-neutral-200/80 bg-neutral-100 shadow-xl lg:max-w-none">
              <motion.div style={{ y: imageY }} className="absolute -top-[6%] inset-x-0 h-[112%] w-full">
                <Image
                  src={aboutHeroContent.image}
                  alt="Modern LifeStyle Decor architectural window interior"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xs bg-white/95 px-4 py-3 backdrop-blur-md border border-white/40 shadow-sm">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004AAD]">
                    Modern LifeStyle Decor
                  </p>
                  <p className="text-xs text-[#151717] font-medium mt-0.5">
                    Mosquito Nets • Blinds • Curtains
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#FFC30C]" />
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
