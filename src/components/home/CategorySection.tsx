"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { serviceCategories } from "@/data/services";
import { categoryIntroContent } from "@/data/homepage";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function CategorySection() {
  const [mosquitoNets, blinds, curtains] = serviceCategories;

  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] py-16 sm:py-20 lg:py-28 border-b border-neutral-200/80">
      <Container>
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 sm:mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow={categoryIntroContent.eyebrow}
              title={categoryIntroContent.heading}
              description={categoryIntroContent.description}
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* Editorial Category Presentations */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* CATEGORY 1: MOSQUITO NETS — Featured Wide Architectural Layout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative overflow-hidden rounded-xs border border-neutral-200/90 bg-white shadow-xs transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Content Side: On mobile, Title (1) -> Image (2) -> Description (3) -> CTA (4) */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 lg:col-span-6 order-1 lg:order-1">
                <div>
                  {/* Category Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl font-light text-[#004AAD]/40 tracking-tight">
                      {mosquitoNets.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                      <Sparkles className="h-3 w-3 text-[#FFC30C]" />
                      {mosquitoNets.tag}
                    </span>
                  </div>

                  {/* Title (Mobile order 1) */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
                    {mosquitoNets.title}
                  </h3>

                  {/* Mobile image insertion container (visible only on mobile) */}
                  <div className="my-5 lg:hidden relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-neutral-100 bg-neutral-100">
                    <Image
                      src={mosquitoNets.image}
                      alt={mosquitoNets.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Description (Mobile order 3) */}
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#525252] font-light">
                    {mosquitoNets.description}
                  </p>

                  {/* Product List Pill Grid */}
                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#737373] mb-3">
                      Available Solutions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mosquitoNets.products.map((prod) => (
                        <span
                          key={prod}
                          className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2.5 py-1 text-xs text-neutral-700 border border-neutral-200/60"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[#004AAD]" />
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA (Mobile order 4) */}
                <div className="mt-8 pt-4">
                  <Link
                    href={mosquitoNets.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#004AAD] group-hover:text-[#003A8C] transition-colors"
                  >
                    <span>{mosquitoNets.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>

              {/* Desktop Image Side (Hidden on mobile because it's rendered inline above) */}
              <div className="hidden lg:block relative lg:col-span-6 min-h-[420px] overflow-hidden bg-neutral-100">
                <Image
                  src={mosquitoNets.image}
                  alt={mosquitoNets.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xs text-[11px] font-semibold uppercase tracking-wider text-[#151717]">
                  Precision Fit
                </div>
              </div>

            </div>
          </motion.div>

          {/* ASYMMETRICAL SPLIT PAIR: CATEGORY 2 (BLINDS) & CATEGORY 3 (CURTAINS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
            
            {/* CATEGORY 2: DESIGNER BLINDS (5 Cols on Desktop) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-white shadow-xs transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-lg lg:col-span-6"
            >
              <div className="p-6 sm:p-8">
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-light text-[#004AAD]/40 tracking-tight">
                    {blinds.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                    {blinds.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-medium tracking-tight text-[#151717]">
                  {blinds.title}
                </h3>

                {/* Image: Order 2 */}
                <div className="my-5 relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-neutral-100 bg-neutral-100">
                  <Image
                    src={blinds.image}
                    alt={blinds.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xs text-[10px] font-semibold uppercase tracking-wider text-[#151717]">
                    Light & Privacy
                  </div>
                </div>

                {/* Description: Order 3 */}
                <p className="text-sm leading-relaxed text-[#525252] font-light">
                  {blinds.description}
                </p>

                {/* Products */}
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {blinds.products.map((prod) => (
                      <span
                        key={prod}
                        className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[11px] text-neutral-700 border border-neutral-200/60"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#004AAD]" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA: Order 4 */}
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <Link
                  href={blinds.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#004AAD] group-hover:text-[#003A8C] transition-colors"
                >
                  <span>{blinds.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>

            {/* CATEGORY 3: CUSTOMISED CURTAINS (6 Cols on Desktop) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-white shadow-xs transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-lg lg:col-span-6"
            >
              <div className="p-6 sm:p-8">
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-light text-[#004AAD]/40 tracking-tight">
                    {curtains.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                    {curtains.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-medium tracking-tight text-[#151717]">
                  {curtains.title}
                </h3>

                {/* Image: Order 2 */}
                <div className="my-5 relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-neutral-100 bg-neutral-100">
                  <Image
                    src={curtains.image}
                    alt={curtains.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xs text-[10px] font-semibold uppercase tracking-wider text-[#151717]">
                    Bespoke Tailoring
                  </div>
                </div>

                {/* Description: Order 3 */}
                <p className="text-sm leading-relaxed text-[#525252] font-light">
                  {curtains.description}
                </p>

                {/* Products */}
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {curtains.products.map((prod) => (
                      <span
                        key={prod}
                        className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[11px] text-neutral-700 border border-neutral-200/60"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#004AAD]" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA: Order 4 */}
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <Link
                  href={curtains.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#004AAD] group-hover:text-[#003A8C] transition-colors"
                >
                  <span>{curtains.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}

