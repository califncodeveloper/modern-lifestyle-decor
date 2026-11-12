"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Info, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { projectSlots } from "@/data/homepage";
import { ProjectSlotCard } from "./ProjectSlotCard";
import type { ProjectSlot } from "@/types/decor";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ProjectGallerySection() {
  const [selectedSlot, setSelectedSlot] = useState<ProjectSlot | null>(null);

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
              eyebrow="PORTFOLIO & WORK"
              title="Beautiful Spaces. Thoughtful Details."
              description="Explore selected work featuring mosquito nets, blinds and customised curtains."
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>
        </motion.div>

        {/* Informative Architectural Notice regarding Verified Project Photography */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8 rounded-xs border border-[#004AAD]/15 bg-[#F8F9FC] p-4 sm:p-5 flex items-start gap-3 text-xs text-[#525252]"
        >
          <Info className="h-5 w-5 text-[#004AAD] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#151717] uppercase tracking-wider text-[11px]">
              Verified Portfolio Asset Framework
            </p>
            <p className="mt-1 leading-relaxed text-[#737373]">
              In accordance with our strict verified business standards, stock photography is never labeled as actual customer installations. The 7 architectural project slots below are primed to display authentic site photography once provided.
            </p>
          </div>
        </motion.div>

        {/* Editorial Masonry Grid of the 7 Project Slots */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12"
        >
          {/* Slot 01: 7 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <ProjectSlotCard
              slot={projectSlots[0]}
              onPreview={setSelectedSlot}
            />
          </motion.div>

          {/* Slot 02: 5 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <ProjectSlotCard
              slot={projectSlots[1]}
              onPreview={setSelectedSlot}
            />
          </motion.div>

          {/* Slot 03: 4 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <ProjectSlotCard
              slot={projectSlots[2]}
              onPreview={setSelectedSlot}
            />
          </motion.div>

          {/* Slot 04: 4 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <ProjectSlotCard
              slot={projectSlots[3]}
              onPreview={setSelectedSlot}
            />
          </motion.div>

          {/* Slot 05: 4 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <ProjectSlotCard
              slot={projectSlots[4]}
              onPreview={setSelectedSlot}
            />
          </motion.div>

          {/* Slot 06: 6 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-6">
            <ProjectSlotCard
              slot={projectSlots[5]}
              onPreview={setSelectedSlot}
            />
          </motion.div>

          {/* Slot 07: 6 Cols */}
          <motion.div variants={fadeUp} className="lg:col-span-6">
            <ProjectSlotCard
              slot={projectSlots[6]}
              onPreview={setSelectedSlot}
            />
          </motion.div>
        </motion.div>

        {/* Gallery CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 text-center"
        >
          <Link href="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="group border-[#004AAD] text-[#004AAD] hover:bg-[#EEF4FD]"
              rightIcon={
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              }
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedSlot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={() => setSelectedSlot(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-xl w-full rounded-xs bg-white p-6 shadow-2xl border border-neutral-200"
              >
                <button
                  onClick={() => setSelectedSlot(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black transition-colors"
                  aria-label="Close preview"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-xs bg-[#004AAD] px-2.5 py-0.5 text-xs font-semibold text-white uppercase tracking-wider">
                    Slot {selectedSlot.slotNumber}
                  </span>
                  <span className="text-xs text-[#737373] uppercase tracking-wider font-semibold">
                    {selectedSlot.category}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-[#151717]">
                  {selectedSlot.title}
                </h3>

                <div className="mt-4 p-4 rounded-xs bg-[#F8F9FC] border border-neutral-200/60 text-xs text-[#525252] space-y-2.5">
                  <p className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-neutral-500">Aspect Ratio:</span>
                    <span className="font-mono font-medium">{selectedSlot.aspectRatio}</span>
                  </p>
                  <p className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-neutral-500">Target Resolution:</span>
                    <span className="font-mono font-medium">{selectedSlot.dimensions}</span>
                  </p>
                  <p className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-neutral-500">Target File Path:</span>
                    <span className="font-mono font-medium break-all">public/images/projects/project-{selectedSlot.slotNumber}.webp</span>
                  </p>
                  <p className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-neutral-500">Status:</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
                      <Sparkles className="h-3 w-3 text-[#FFC30C]" />
                      Awaiting Actual Business Photograph
                    </span>
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedSlot(null)}
                  >
                    Close Preview
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

