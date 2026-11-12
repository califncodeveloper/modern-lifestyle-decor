"use client";

import { motion } from "framer-motion";
import { Factory, Boxes, Store, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { businessModelContent } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/motion";

const pillarIcons = {
  Factory,
  Boxes,
  Store,
};

export function BusinessModelSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] py-16 sm:py-20 lg:py-28 border-b border-neutral-200/80">
      {/* Background architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#004AAD 1px, transparent 1px), radial-gradient(#004AAD 1px, #F8F9FC 1px)",
          backgroundSize: "44px 44px",
          backgroundPosition: "0 0, 22px 22px",
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
              eyebrow={businessModelContent.eyebrow}
              title={businessModelContent.heading}
              description={businessModelContent.description}
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* 3 Visual Columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {businessModelContent.pillars.map((pillar) => {
            const IconComponent =
              pillarIcons[pillar.iconName as keyof typeof pillarIcons] || Factory;

            return (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-xl"
              >
                {/* Top Header / Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#004AAD]">
                      {pillar.eyebrow}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#004AAD]/5 text-[#004AAD] transition-colors duration-300 group-hover:bg-[#004AAD] group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#525252] font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <div className="space-y-2.5">
                    {pillar.keyPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5 text-xs font-medium text-neutral-800"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-[#004AAD] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    <span>Verified Channel</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

