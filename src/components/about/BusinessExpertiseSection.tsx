"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sun, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { businessExpertiseContent } from "@/data/about";
import { fadeUp, staggerContainer, imageReveal } from "@/lib/motion";

const categoryIcons = [ShieldCheck, Sun, Layers];

export function BusinessExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] py-16 sm:py-20 lg:py-28 border-b border-neutral-200/80">
      {/* Background architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #004AAD 1px, transparent 1px), linear-gradient(to bottom, #004AAD 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 sm:mb-20"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow={businessExpertiseContent.eyebrow}
              title={businessExpertiseContent.heading}
              description={businessExpertiseContent.description}
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* Three Core Category Showcases */}
        <div className="space-y-16 sm:space-y-24">
          {businessExpertiseContent.categories.map((cat, idx) => {
            const isReversed = idx % 2 === 1;
            const IconComponent = categoryIcons[idx] || ShieldCheck;

            return (
              <motion.div
                key={cat.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
              >
                {/* Text Content Column */}
                <motion.div
                  variants={fadeUp}
                  className={`flex flex-col lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Category Number & Eyebrow */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-[#004AAD] uppercase tracking-widest bg-white border border-[#004AAD]/20 px-2.5 py-1 rounded-xs">
                      Category {cat.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#737373]">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717] mt-1">
                    {cat.title}
                  </h3>

                  {/* Category Description */}
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#525252] font-light">
                    {cat.description}
                  </p>

                  {/* Products / Offerings Listing */}
                  {cat.products && (
                    <div className="mt-6">
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#151717] mb-3 flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-[#004AAD]" />
                        Manufactured Products
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.products.map((prod) => (
                          <span
                            key={prod}
                            className="inline-flex items-center gap-1.5 rounded-xs bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 border border-neutral-200/90 shadow-2xs transition-colors hover:border-[#004AAD] hover:text-[#004AAD]"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#004AAD] shrink-0" />
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Materials & Accessories (for Curtains) */}
                  {cat.materials && (
                    <div className="mt-6">
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#151717] mb-3 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-[#004AAD]" />
                        Branded Fabrics & Materials
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.materials.map((mat) => (
                          <span
                            key={mat}
                            className="inline-flex items-center gap-1.5 rounded-xs bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 border border-neutral-200/90 shadow-2xs transition-colors hover:border-[#004AAD] hover:text-[#004AAD]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cat.accessories && (
                    <div className="mt-5">
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#151717] mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#004AAD]" />
                        Tracks & Accessories
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.accessories.map((acc) => (
                          <span
                            key={acc}
                            className="inline-flex items-center gap-1.5 rounded-xs bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 border border-neutral-200/90 shadow-2xs"
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learn More Link */}
                  <div className="mt-8 pt-4 border-t border-neutral-200/70">
                    <Link
                      href={cat.href}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#004AAD] hover:text-[#003A8C] transition-colors"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>

                {/* Photography Column */}
                <motion.div
                  variants={imageReveal}
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xs border border-neutral-200/90 bg-neutral-100 shadow-lg">
                    <Image
                      src={cat.image}
                      alt={`Modern LifeStyle Decor ${cat.title} collection`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom In-Image Badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xs bg-white/95 px-4 py-3 backdrop-blur-md border border-white/40 shadow-sm">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004AAD]">
                          Modern LifeStyle Decor
                        </span>
                        <p className="text-xs font-medium text-[#151717] mt-0.5">
                          {cat.title}
                        </p>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-[#FFC30C]" />
                    </div>

                    {/* Accent Corner Bar */}
                    <div className="absolute top-0 right-0 h-14 w-14 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 right-0 h-2.5 w-14 bg-[#004AAD]" />
                      <div className="absolute top-0 right-0 w-2.5 h-14 bg-[#FFC30C]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

