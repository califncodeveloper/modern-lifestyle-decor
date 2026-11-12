"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Sliders, Shield } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { serviceCategories } from "@/data/services";
import { curtainAccessories } from "@/data/products";
import { fadeUp } from "@/lib/motion";

export function ServiceCategorySection() {
  const [mosquitoNets, blinds, curtains] = serviceCategories;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="space-y-20 lg:space-y-32">
          
          {/* ==============================================================
              CATEGORY A — MOSQUITO NETS
              Distinctive Layout: Full-Width Editorial Split Banner
             ============================================================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            id="mosquito-nets"
            className="group relative overflow-hidden rounded-xs border border-neutral-200 bg-[#F8F9FC] transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Content Side: Mobile order: 1. Title -> 2. Image -> 3. Description -> 4. CTA */}
              <div className="p-6 sm:p-10 lg:p-14 lg:col-span-6 flex flex-col justify-between order-1 lg:order-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl font-light text-[#004AAD]/40 tracking-tight">
                      {mosquitoNets.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                      <Shield className="h-3 w-3 text-[#FFC30C]" />
                      Category A
                    </span>
                  </div>

                  {/* Title (Mobile order 1) */}
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
                    {mosquitoNets.title}
                  </h2>

                  {/* Mobile image insertion (Order 2 on mobile) */}
                  <div className="my-5 lg:hidden relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-neutral-200 bg-neutral-200">
                    <Image
                      src={mosquitoNets.image}
                      alt={mosquitoNets.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Description (Mobile order 3) */}
                  <p className="mt-4 text-base leading-relaxed text-[#525252] font-light">
                    {mosquitoNets.description}
                  </p>

                  {/* Included Products List */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#151717] mb-3.5">
                      Available Solutions (7 Systems):
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mosquitoNets.products.map((prod) => (
                        <div
                          key={prod}
                          className="flex items-center gap-2 rounded-xs bg-white px-3 py-2 text-xs font-medium text-neutral-800 border border-neutral-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#004AAD] shrink-0" />
                          <span>{prod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA (Mobile order 4) */}
                <div className="mt-10 pt-4">
                  <Link
                    href={mosquitoNets.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xs bg-[#004AAD] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white hover:bg-[#003A8C] transition-all duration-200 shadow-xs group/btn"
                  >
                    <span>{mosquitoNets.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Desktop Image Side (Hidden on mobile) */}
              <div className="hidden lg:block relative lg:col-span-6 min-h-[480px] overflow-hidden bg-neutral-100">
                <Image
                  src={mosquitoNets.image}
                  alt={mosquitoNets.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xs border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                        Fresh Air & Protection
                      </p>
                      <p className="text-sm text-neutral-700 font-light mt-0.5">
                        Windows, Main Doors & Spatial Partitions
                      </p>
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      01 / 03
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>


          {/* ==============================================================
              CATEGORY B — DESIGNER BLINDS
              Distinctive Layout: Inverted Layout with Textured Architectural Gallery
             ============================================================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            id="blinds"
            className="group relative overflow-hidden rounded-xs border border-neutral-200 bg-[#F8F9FC] transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Desktop Image Side (On desktop, placed on LEFT lg:order-1) */}
              <div className="hidden lg:block relative lg:col-span-6 min-h-[480px] overflow-hidden bg-neutral-100 lg:order-1">
                <Image
                  src={blinds.image}
                  alt={blinds.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xs border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                        Architectural Light Modulation
                      </p>
                      <p className="text-sm text-neutral-700 font-light mt-0.5">
                        Roller, Zebra, Wooden, PVC & Aluminium
                      </p>
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      02 / 03
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side (On mobile order 1, desktop order 2) */}
              <div className="p-6 sm:p-10 lg:p-14 lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl font-light text-[#004AAD]/40 tracking-tight">
                      {blinds.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                      <Sliders className="h-3 w-3 text-[#FFC30C]" />
                      Category B
                    </span>
                  </div>

                  {/* Title (Mobile order 1) */}
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
                    {blinds.title}
                  </h2>

                  {/* Mobile image insertion (Order 2 on mobile) */}
                  <div className="my-5 lg:hidden relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-neutral-200 bg-neutral-200">
                    <Image
                      src={blinds.image}
                      alt={blinds.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Description (Mobile order 3) */}
                  <p className="mt-4 text-base leading-relaxed text-[#525252] font-light">
                    {blinds.description}
                  </p>

                  {/* Included Products List */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#151717] mb-3.5">
                      Available Styles (6 Blinds):
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {blinds.products.map((prod) => (
                        <div
                          key={prod}
                          className="flex items-center gap-2 rounded-xs bg-white px-3 py-2 text-xs font-medium text-neutral-800 border border-neutral-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#004AAD] shrink-0" />
                          <span>{prod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA (Mobile order 4) */}
                <div className="mt-10 pt-4">
                  <Link
                    href={blinds.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xs bg-[#004AAD] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white hover:bg-[#003A8C] transition-all duration-200 shadow-xs group/btn"
                  >
                    <span>{blinds.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>


          {/* ==============================================================
              CATEGORY C — CUSTOMISED CURTAINS
              Distinctive Layout: Tiered Editorial Presentation with Fabrics & Hardware
             ============================================================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            id="curtains"
            className="group relative overflow-hidden rounded-xs border border-neutral-200 bg-[#F8F9FC] transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Content Side: Order 1 */}
              <div className="p-6 sm:p-10 lg:p-14 lg:col-span-6 flex flex-col justify-between order-1 lg:order-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl font-light text-[#004AAD]/40 tracking-tight">
                      {curtains.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                      <Layers className="h-3 w-3 text-[#FFC30C]" />
                      Category C
                    </span>
                  </div>

                  {/* Title (Mobile order 1) */}
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
                    {curtains.title}
                  </h2>

                  {/* Mobile image insertion (Order 2 on mobile) */}
                  <div className="my-5 lg:hidden relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-neutral-200 bg-neutral-200">
                    <Image
                      src={curtains.image}
                      alt={curtains.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Description (Mobile order 3) */}
                  <p className="mt-4 text-base leading-relaxed text-[#525252] font-light">
                    {curtains.description}
                  </p>

                  {/* Fabrics & Accessories Breakdown */}
                  <div className="mt-8 pt-6 border-t border-neutral-200 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#151717] mb-2.5">
                        Fabric Collections (7 Weaves):
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {curtains.products.map((fabric) => (
                          <span
                            key={fabric}
                            className="inline-flex items-center gap-1.5 rounded-xs bg-white px-2.5 py-1 text-xs text-neutral-800 border border-neutral-200/80 shadow-2xs"
                          >
                            <Sparkles className="h-3 w-3 text-[#FFC30C]" />
                            {fabric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#151717] mb-2.5">
                        Curtain Accessories:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {curtainAccessories.map((acc) => (
                          <span
                            key={acc.id}
                            className="inline-flex items-center gap-1 rounded-xs bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 border border-neutral-200"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#004AAD]" />
                            {acc.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA (Mobile order 4) */}
                <div className="mt-10 pt-4">
                  <Link
                    href={curtains.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xs bg-[#004AAD] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white hover:bg-[#003A8C] transition-all duration-200 shadow-xs group/btn"
                  >
                    <span>{curtains.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Desktop Image Side (Hidden on mobile) */}
              <div className="hidden lg:block relative lg:col-span-6 min-h-[480px] overflow-hidden bg-neutral-100">
                <Image
                  src={curtains.image}
                  alt={curtains.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xs border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                        Bespoke Drapery Studio
                      </p>
                      <p className="text-sm text-neutral-700 font-light mt-0.5">
                        Curated Catalogues & Designer Hardware
                      </p>
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      03 / 03
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
