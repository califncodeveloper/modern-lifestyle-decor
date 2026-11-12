"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Phone, Building } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { locationsContent } from "@/data/about";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 border-b border-neutral-100">
      <Container>
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
              eyebrow={locationsContent.eyebrow}
              title={locationsContent.heading}
              description={locationsContent.description}
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
          {locationsContent.locations.map((loc) => {
            const isShowroom = loc.type === "showroom";

            return (
              <motion.div
                key={loc.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-[#F8F9FC] p-7 sm:p-10 transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-xl hover:bg-white"
              >
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004AAD] via-[#FFC30C] to-[#004AAD] opacity-80" />

                <div>
                  {/* Top Badge & Facility Type */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#004AAD]/20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#004AAD] shadow-2xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                      {loc.badge}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-white text-[#004AAD] border border-neutral-200/80 shadow-2xs">
                      {isShowroom ? (
                        <Building className="h-5 w-5" />
                      ) : (
                        <MapPin className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  {/* Facility Name */}
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
                    {loc.name}
                  </h3>

                  {/* Physical Address Block */}
                  <div className="mt-6 flex items-start gap-3.5">
                    <MapPin className="h-5 w-5 text-[#004AAD] shrink-0 mt-0.5" />
                    <address className="not-italic text-sm sm:text-base leading-relaxed text-[#525252] font-light">
                      {loc.addressLines.map((line, lIdx) => (
                        <span key={lIdx} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>

                  {/* Direct Contact Phone */}
                  {loc.phone && (
                    <div className="mt-6 pt-5 border-t border-neutral-200/70 flex items-center gap-3 text-xs font-mono text-[#151717]">
                      <Phone className="h-4 w-4 text-[#004AAD]" />
                      <span>Direct Contact:</span>
                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                        className="text-[#004AAD] font-semibold hover:underline"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Card Actions: Get Directions Button */}
                <div className="mt-8 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto group/btn shadow-xs"
                      leftIcon={<Navigation className="h-4 w-4" />}
                      rightIcon={
                        <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      }
                    >
                      Get Directions
                    </Button>
                  </a>

                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Opens Google Maps
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Opening Hours Info Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 rounded-xs border border-neutral-200/80 bg-[#F8F9FC] p-5 sm:p-6 text-center text-xs text-[#525252]"
        >
          <span className="font-semibold uppercase tracking-wider text-[#151717]">
            Operating Hours:
          </span>{" "}
          <span>{siteConfig.contact.hours}</span>
          <span className="mx-3 text-[#CDD5E2] hidden sm:inline">•</span>
          <span className="block sm:inline mt-1 sm:mt-0">
            For on-site appointments and site evaluations, please call{" "}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="text-[#004AAD] font-medium hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

