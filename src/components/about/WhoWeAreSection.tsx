"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { whoWeAreContent } from "@/data/about";
import { fadeUp, staggerContainer, imageReveal } from "@/lib/motion";

export function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 border-b border-neutral-100">
      <Container>
        {/* Responsive Grid:
            Mobile: 1. Title, 2. Image, 3. Description, 4. CTA
            Desktop (lg): Editorial 2-column split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Mobile Order 1 / Desktop Left: Title & Eyebrow */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col lg:col-span-6 order-1"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-3">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#004AAD]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFC30C]" />
                {whoWeAreContent.eyebrow}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-2xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#151717] leading-tight"
            >
              {whoWeAreContent.heading}
            </motion.h2>

            {/* Desktop Description, Highlights & CTA (Hidden on mobile < lg) */}
            <div className="hidden lg:flex lg:flex-col lg:mt-6">
              {whoWeAreContent.paragraphs.map((p, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className={`text-base sm:text-lg leading-relaxed ${
                    index === 0 ? "text-[#525252] font-light" : "mt-4 text-[#737373] font-light"
                  }`}
                >
                  {p}
                </motion.p>
              ))}

              {/* Verified Feature Bullet Points */}
              <motion.div
                variants={fadeUp}
                className="mt-8 grid grid-cols-2 gap-3 text-xs font-medium text-neutral-800"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004AAD]/10 text-[#004AAD]">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span>Manufacturer, Wholesale & Retail</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFC30C]/20 text-[#004AAD]">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span>Window & Door Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004AAD]/10 text-[#004AAD]">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span>Residential & Commercial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFC30C]/20 text-[#004AAD]">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span>Customised Tailoring</span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} className="mt-8">
                <Link href={whoWeAreContent.cta.href}>
                  <Button
                    variant="primary"
                    size="md"
                    className="group"
                    rightIcon={
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    }
                  >
                    {whoWeAreContent.cta.text}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Order 2 / Desktop Right: Architectural Photography & Brand Accents */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 order-2"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xs border border-neutral-200/90 bg-neutral-100 shadow-md">
              <Image
                src={whoWeAreContent.image}
                alt="Modern LifeStyle Decor craftsmanship and materials"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Decorative Brand Accent Corner Bar */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 h-3 w-16 bg-[#004AAD]" />
                <div className="absolute top-0 right-0 w-3 h-16 bg-[#FFC30C]" />
              </div>

              {/* Overlay architectural tag */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-xs bg-white/90 px-3.5 py-1.5 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#151717] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-[#004AAD]" />
                {whoWeAreContent.caption}
              </div>
            </div>
          </motion.div>

          {/* Mobile Order 3 & 4 (Visible ONLY on mobile < lg) */}
          <div className="flex flex-col lg:hidden order-3">
            {whoWeAreContent.paragraphs.map((p, index) => (
              <p
                key={index}
                className={`text-sm sm:text-base leading-relaxed ${
                  index === 0 ? "text-[#525252] font-light" : "mt-3 text-[#737373] font-light"
                }`}
              >
                {p}
              </p>
            ))}

            {/* Mobile Feature Bullet Points */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-neutral-800">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004AAD]/10 text-[#004AAD]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span>Manufacturer, Wholesale & Retail</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFC30C]/20 text-[#004AAD]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span>Window & Door Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004AAD]/10 text-[#004AAD]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span>Residential & Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFC30C]/20 text-[#004AAD]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span>Customised Tailoring</span>
              </div>
            </div>

            <div className="mt-6 order-4">
              <Link href={whoWeAreContent.cta.href}>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto group"
                  rightIcon={
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  }
                >
                  {whoWeAreContent.cta.text}
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

