"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { clientsData } from "@/data/clients";
import { ClientLogoCard } from "./ClientLogoCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface ClientShowcaseProps {
  className?: string;
}

export function ClientShowcase({ className }: ClientShowcaseProps) {
  return (
    <section
      id="clients"
      className={`relative w-full border-b border-neutral-100 bg-[#F9FAFB] py-16 sm:py-20 lg:py-24 ${
        className || ""
      }`}
      aria-labelledby="clients-heading"
    >
      <Container>
        {/* Editorial Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 sm:mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="ASSOCIATED ORGANISATIONS"
              title="Our Clients & Project Companies"
              description="Showcasing the organisations and companies associated with our work."
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* Responsive Balanced Grid:
            - Mobile: 2 logos per row (grid-cols-2)
            - Tablet: 3 logos per row (sm:grid-cols-3)
            - Laptop: 4 logos per row (lg:grid-cols-4)
            - Desktop: 6 logos per row (xl:grid-cols-6)
        */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-6"
        >
          {clientsData.map((client) => (
            <motion.div key={client.id} variants={fadeUp} className="h-full">
              <ClientLogoCard client={client} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

