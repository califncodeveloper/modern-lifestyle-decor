"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function GalleryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#151717] py-16 sm:py-20 lg:py-24 text-white border-b border-[#262626]">
      {/* Background Architectural Image with Luxury Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta/cta-interior.jpg"
          alt="Modern LifeStyle Decor architectural interior gallery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.08] filter"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151717] via-[#151717]/85 to-[#004AAD]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151717] via-transparent to-[#151717]/60" />
      </div>

      {/* Subtle blueprint pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient brand accent glows */}
      <div
        className="pointer-events-none absolute -top-32 right-10 h-96 w-96 rounded-full bg-[#004AAD]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-12 h-64 w-64 rounded-full bg-[#FFC30C]/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation: Home / Gallery */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-label="Breadcrumb"
          className="mb-8 flex items-center text-xs tracking-wider uppercase font-medium"
        >
          <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-neutral-400">
            <li className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                title="Home"
              >
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight
                className="h-3 w-3 text-neutral-500 shrink-0 mx-1"
                aria-hidden="true"
              />
              <span className="text-[#FFC30C] font-semibold" aria-current="page">
                Gallery
              </span>
            </li>
          </ol>
        </motion.nav>

        {/* Hero Content Block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xs px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#FFC30C] shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              OUR WORK &amp; COLLECTIONS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.14]"
          >
            Designed for Comfort.{" "}
            <span className="text-[#FFC30C] font-normal">Crafted for Living.</span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-300 font-light max-w-2xl"
          >
            Explore our curated showcase of precision stainless steel mosquito nets,
            architectural designer blinds, bespoke customised curtains, and premium
            drapery hardware engineered for discerning residential and commercial spaces.
          </motion.p>

          {/* Quick Pillar Tags */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 rounded-xs border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-xs">
              <Sparkles className="h-3 w-3 text-[#FFC30C]" />
              24 Verified Products &amp; Fabrics
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="rounded-xs border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-xs">
              Custom Architectural Sizing
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="rounded-xs border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-xs">
              Manufacturer &amp; Wholesale
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

