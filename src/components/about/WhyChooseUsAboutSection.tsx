"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Shield,
  Sun,
  Layers,
  Palette,
  DoorOpen,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { whyChooseUsAboutContent } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/motion";

const iconMap = {
  Factory,
  Shield,
  Sun,
  Layers,
  Palette,
  DoorOpen,
};

export function WhyChooseUsAboutSection() {
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
          className="mb-12 sm:mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow={whyChooseUsAboutContent.eyebrow}
              title={whyChooseUsAboutContent.heading}
              description={whyChooseUsAboutContent.description}
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* 6 Verified Attributes Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8"
        >
          {whyChooseUsAboutContent.benefits.map((benefit) => {
            const IconComponent =
              iconMap[benefit.iconName as keyof typeof iconMap] || Layers;

            return (
              <motion.div
                key={benefit.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/80 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-lg"
              >
                {/* Top Number & Brand Accent */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-light text-[#004AAD]/40 tracking-tight">
                    {benefit.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#004AAD]/5 text-[#004AAD] transition-colors duration-300 group-hover:bg-[#004AAD] group-hover:text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#525252] font-light">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom subtle accent bar */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  <span>Verified Capability</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

