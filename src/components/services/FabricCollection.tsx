"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";
import { ProductEnquiryButton } from "./ProductEnquiryButton";
import type { ProductDetailItem } from "@/types/decor";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface FabricCollectionProps {
  fabrics: ProductDetailItem[];
  className?: string;
}

export function FabricCollection({
  fabrics,
  className,
}: FabricCollectionProps) {
  return (
    <div className={cn("space-y-10", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
      >
        {fabrics.map((fabric) => {
          const productUrl = `/products/${fabric.slug || fabric.id}`;
          return (
            <motion.div
              key={fabric.id}
              variants={fadeUp}
              className="group flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#004AAD]/50 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="p-5 sm:p-6 flex flex-col">
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#004AAD]">
                    {fabric.isClientProduct ? "Verified Installation" : "Fabric Collection"}
                  </span>
                  {fabric.badge && (
                    <span className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[10px] font-medium text-neutral-600 border border-neutral-200/60">
                      <Sparkles className="h-2.5 w-2.5 text-[#FFC30C]" />
                      {fabric.badge}
                    </span>
                  )}
                </div>

                {/* Title (Mobile order 1) */}
                <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors order-1 lg:order-2">
                  <Link href={productUrl} className="hover:underline">
                    {fabric.name}
                  </Link>
                </h3>

                {/* Fabric Image (Mobile order 2, Desktop order 1) */}
                <Link
                  href={productUrl}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-xs bg-neutral-100 my-4 lg:my-3 order-2 lg:order-1 cursor-pointer"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={fabric.image}
                    alt={fabric.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </Link>

                {/* Description (Mobile order 3) */}
                <p className="text-xs sm:text-sm font-light leading-relaxed text-[#525252] order-3">
                  {fabric.description}
                </p>

                {/* Highlights */}
                {fabric.highlights && fabric.highlights.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-neutral-100 order-4">
                    <div className="flex flex-wrap gap-1.5">
                      {fabric.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[10px] text-neutral-600 border border-neutral-200/60"
                        >
                          <Check className="h-2.5 w-2.5 text-[#004AAD]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA (Mobile order 4) */}
              <div className="p-5 sm:p-6 pt-0 mt-auto flex flex-col gap-2">
                <Link
                  href={productUrl}
                  className="inline-flex items-center justify-between w-full rounded-xs bg-[#F8F9FC] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#004AAD] hover:bg-[#EEF4FD] hover:text-[#003A8C] border border-neutral-200/80 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <ProductEnquiryButton
                  productName={fabric.name}
                  categoryLabel="Curtains"
                  variant="primary"
                  size="sm"
                  className="w-full"
                  text="Enquire Fabric"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
