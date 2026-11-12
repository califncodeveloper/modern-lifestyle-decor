"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { designCommitments } from "@/data/homepage";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function TestimonialMarqueeSection() {
  // Duplicate for seamless infinite loop
  const marqueeCards = [...designCommitments, ...designCommitments];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 border-b border-neutral-100">
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
              eyebrow="DESIGN PHILOSOPHY & CRAFTSMANSHIP"
              title="What Makes a Space Feel Complete?"
              description="Guided by architectural harmony, material precision, and a commitment to transforming everyday living environments."
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Subtle Edge Fade Gradients */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex gap-6 sm:gap-8 px-4">
          {marqueeCards.map((item, idx) => (
            <div
              key={`${item.author}-${idx}`}
              className="relative w-[280px] xs:w-[320px] sm:w-[420px] shrink-0 rounded-xs border border-neutral-200/80 bg-[#F8F9FC] p-5 sm:p-8 shadow-2xs transition-all duration-300 hover:border-[#004AAD]/40 hover:bg-white hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004AAD]/10 text-[#004AAD]">
                    <Quote className="h-4 w-4" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#004AAD] border border-neutral-200/60">
                    <Sparkles className="h-2.5 w-2.5 text-[#FFC30C]" />
                    {item.role}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base leading-relaxed text-[#151717] font-light italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Verification Tag */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#151717]">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-[#737373]">
                    Modern LifeStyle Decor
                  </p>
                </div>
                <ShieldCheck className="h-4 w-4 text-[#004AAD]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Transparency Notice */}
      <Container>
        <div className="mt-8 text-center">
          <p className="text-[11px] tracking-wide text-[#737373] uppercase font-mono">
            * Authentic client reviews and completed project testimonials are being compiled for verified portfolio release.
          </p>
        </div>
      </Container>
    </section>
  );
}

