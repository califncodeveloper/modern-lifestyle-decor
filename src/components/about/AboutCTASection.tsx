"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { aboutCtaContent } from "@/data/about";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#151717] py-20 sm:py-28 lg:py-32 text-white">
      {/* Background Architectural Photography with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutCtaContent.image}
          alt="Modern LifeStyle Decor architectural interior"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 filter brightness-75 contrast-125"
        />
        {/* Architectural Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151717] via-[#151717]/90 to-[#151717]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151717] via-transparent to-[#151717]" />
      </div>

      {/* Decorative Brand Accent Ambient Light */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#004AAD]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-[#FFC30C]/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#FFC30C] backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-[#FFC30C]" />
              {aboutCtaContent.eyebrow}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
          >
            {aboutCtaContent.heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-neutral-300"
          >
            {aboutCtaContent.description}
          </motion.p>

          {/* Buttons: Explore Our Services → /services | Contact Our Team → /contact */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link href={aboutCtaContent.primaryCta.href} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl group"
                rightIcon={
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                }
              >
                {aboutCtaContent.primaryCta.text}
              </Button>
            </Link>

            <Link href={aboutCtaContent.secondaryCta.href} className="w-full sm:w-auto">
              <Button
                variant="white"
                size="lg"
                className="w-full sm:w-auto hover:bg-[#F8F9FC] border-white/40"
                leftIcon={<PhoneCall className="h-4 w-4 text-[#004AAD]" />}
              >
                {aboutCtaContent.secondaryCta.text}
              </Button>
            </Link>
          </motion.div>

          {/* Direct Line & Hours */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-neutral-400 font-mono uppercase tracking-wider"
          >
            <div>Showroom & Factory: Tamil Nadu</div>
            <div className="hidden sm:inline text-neutral-600">•</div>
            <div>Direct Line: {siteConfig.contact.phone}</div>
            <div className="hidden sm:inline text-neutral-600">•</div>
            <div>Hours: {siteConfig.contact.hours}</div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

