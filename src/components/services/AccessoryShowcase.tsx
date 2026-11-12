"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ProductEnquiryButton } from "./ProductEnquiryButton";
import type { CurtainAccessoryItem } from "@/types/decor";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface AccessoryShowcaseProps {
  accessories: CurtainAccessoryItem[];
  className?: string;
}

export function AccessoryShowcase({
  accessories,
  className,
}: AccessoryShowcaseProps) {
  return (
    <section className={cn("relative py-12 sm:py-16", className)}>
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#004AAD] mb-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
          ARCHITECTURAL HARDWARE
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717]">
          The Finishing Touches.
        </h2>
        <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
          Precision-engineered rods, channel tracks and heavy-duty profiles curated to ensure seamless curtain operation and refined aesthetics.
        </p>
      </div>

      {/* Grid of 4 Accessories */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {accessories.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            className="group flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-300 bg-[#F8F9FC] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#151717] hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div className="p-5 sm:p-6 flex flex-col">
              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#151717]/70">
                  {item.category}
                </span>
                {item.badge && (
                  <span className="rounded-xs bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#151717] border border-neutral-200">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Title (Mobile order 1) */}
              <h3 className="font-heading text-lg font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors order-1 lg:order-2">
                {item.name}
              </h3>

              {/* Image (Mobile order 2, Desktop order 1) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-neutral-200 my-4 lg:my-3 order-2 lg:order-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Description (Mobile order 3) */}
              <p className="text-xs sm:text-sm font-light leading-relaxed text-[#525252] order-3">
                {item.description}
              </p>

              {/* Highlights (Mobile order 4) */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-4 pt-3.5 border-t border-neutral-200/80 order-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-xs bg-white px-2 py-0.5 text-[10px] text-neutral-700 border border-neutral-200"
                      >
                        <Check className="h-2.5 w-2.5 text-[#151717]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="p-5 sm:p-6 pt-0 mt-auto">
              <ProductEnquiryButton
                productName={item.name}
                categoryLabel="Curtain Accessories"
                variant="dark"
                size="sm"
                className="w-full"
                text="Enquire Hardware"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
