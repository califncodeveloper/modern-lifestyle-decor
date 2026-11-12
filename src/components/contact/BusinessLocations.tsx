"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { businessLocations } from "@/data/contact";
import { LocationCard } from "./LocationCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function BusinessLocations() {
  return (
    <section
      id="locations-section"
      className="relative overflow-hidden bg-[#F8F9FC] py-16 sm:py-20 lg:py-28 border-b border-neutral-200/80"
    >
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#004AAD]/5 blur-3xl"
        aria-hidden="true"
      />

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
              eyebrow="PHYSICAL PRESENCE"
              title="Our Showroom & Manufacturing Unit"
              description="Visit our experience showroom in Salamangalam for material consultations, or coordinate commercial fabrication and architectural supplies directly with our manufacturing unit."
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* Two Location Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
        >
          {businessLocations.map((loc) => (
            <motion.div key={loc.id} variants={fadeUp}>
              <LocationCard location={loc} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

