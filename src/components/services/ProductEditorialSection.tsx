"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ProductEnquiryButton } from "./ProductEnquiryButton";
import type { ProductDetailItem } from "@/types/decor";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface ProductEditorialSectionProps {
  product: ProductDetailItem;
  index: number;
  reversed?: boolean;
  className?: string;
}

export function ProductEditorialSection({
  product,
  index,
  reversed = false,
  className,
}: ProductEditorialSectionProps) {
  const itemNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "group relative overflow-hidden rounded-xs border border-neutral-200/90 bg-white transition-all duration-300 hover:border-[#004AAD]/40 hover:shadow-lg",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Content Side: Order 1 on mobile */}
        <div
          className={cn(
            "flex flex-col justify-between p-6 sm:p-8 lg:p-12 lg:col-span-6",
            reversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div>
            {/* Header: Number & Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl sm:text-4xl font-light text-[#004AAD]/30 tracking-tight">
                {itemNumber}
              </span>
              {product.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
                  <Sparkles className="h-3 w-3 text-[#FFC30C]" />
                  {product.badge}
                </span>
              )}
            </div>

            {/* Title (Mobile order 1) */}
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
              {product.name}
            </h3>

            {/* Mobile Image Insertion (Order 2 on mobile, hidden on desktop) */}
            <div className="my-5 lg:hidden relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-neutral-100 bg-neutral-100">
              <Image
                src={product.image}
                alt={`${product.name} - ${product.categoryLabel}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Description (Mobile order 3) */}
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#525252] font-light">
              {product.description}
            </p>

            {/* Highlights List */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-6 pt-5 border-t border-neutral-100">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#737373] mb-3">
                  Key Characteristics:
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xs bg-[#F8F9FC] px-3 py-1 text-xs text-neutral-700 border border-neutral-200/60"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#004AAD]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Enquiry CTA (Mobile order 4) */}
          <div className="mt-8 pt-4">
            <ProductEnquiryButton
              productName={product.name}
              categoryLabel={product.categoryLabel}
              variant="primary"
              size="md"
              text="Enquire for Custom Fit"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Desktop Image Side (Hidden on mobile) */}
        <div
          className={cn(
            "hidden lg:block relative lg:col-span-6 min-h-[380px] overflow-hidden bg-neutral-100",
            reversed ? "lg:order-1" : "lg:order-2"
          )}
        >
          <Image
            src={product.image}
            alt={`${product.name} - ${product.categoryLabel}`}
            fill
            sizes="50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xs text-[11px] font-semibold uppercase tracking-wider text-[#151717]">
            {product.categoryLabel}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

