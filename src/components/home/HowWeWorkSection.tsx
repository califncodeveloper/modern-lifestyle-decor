"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Compass, Ruler, PackageCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { workingProcessSteps } from "@/data/homepage";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stepIcons = [
  MessageSquareText,
  Compass,
  Ruler,
  PackageCheck,
];

export function HowWeWorkSection() {
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
              eyebrow="OUR WORK PROCESS"
              title="From Selection to the Perfect Finish."
              description="A clear, collaborative four-stage process ensuring your window treatments and interior partitions match your exact spatial requirements."
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Horizontal Line */}
          <div
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-neutral-200 z-0"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-[#004AAD] via-[#FFC30C] to-[#004AAD] opacity-40" />
          </div>

          {/* Mobile Connecting Vertical Line */}
          <div
            className="lg:hidden absolute top-8 bottom-8 left-6 w-0.5 bg-neutral-200 z-0"
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10"
          >
            {workingProcessSteps.map((step, index) => {
              const IconComponent = stepIcons[index] || MessageSquareText;

              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="relative flex lg:flex-col items-start gap-5 lg:gap-0 lg:text-center group"
                >
                  {/* Step Node Icon / Number */}
                  <div className="relative shrink-0 lg:mx-auto">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white border-2 border-neutral-300 text-[#004AAD] shadow-md transition-all duration-300 group-hover:border-[#004AAD] group-hover:scale-110">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    {/* Small number badge */}
                    <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFC30C] text-[10px] font-bold text-[#151717] shadow-xs">
                      {step.step}
                    </div>
                  </div>

                  {/* Step Information */}
                  <div className="flex-1 lg:mt-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004AAD]">
                      Phase {step.step}
                    </span>
                    <h3 className="mt-1 font-heading text-lg sm:text-xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#525252] font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

