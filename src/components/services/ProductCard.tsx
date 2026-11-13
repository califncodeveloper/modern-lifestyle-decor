"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { ProductEnquiryButton } from "./ProductEnquiryButton";
import type { ProductDetailItem } from "@/types/decor";
import { cn } from "@/utils/cn";

export interface ProductCardProps {
  product: ProductDetailItem;
  className?: string;
  imageAspect?: "4/3" | "16/10" | "1/1";
  priority?: boolean;
}

export function ProductCard({
  product,
  className,
  imageAspect = "4/3",
  priority = false,
}: ProductCardProps) {
  const aspectClass =
    imageAspect === "16/10"
      ? "aspect-[16/10]"
      : imageAspect === "1/1"
      ? "aspect-square"
      : "aspect-[4/3]";

  const productUrl = `/products/${product.slug || product.id}`;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#004AAD]/50 hover:shadow-lg focus-within:border-[#004AAD] focus-within:ring-2 focus-within:ring-[#004AAD]/20 motion-reduce:transform-none motion-reduce:transition-none",
        className
      )}
    >
      {/* Top Details & Visual Content */}
      <div className="flex flex-col p-5 sm:p-6">
        {/* Category Tag & Badge Header */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#004AAD]">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="inline-flex items-center rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-600 border border-neutral-200/70">
              {product.badge}
            </span>
          )}
        </div>

        {/* Title: Order 1 on mobile, Order 2 on desktop */}
        <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors duration-200 order-1 lg:order-2">
          <Link href={productUrl} className="hover:underline focus:outline-none">
            {product.name}
          </Link>
        </h3>

        {/* Image: Order 2 on mobile, Order 1 on desktop */}
        <Link
          href={productUrl}
          className={cn(
            "relative block w-full overflow-hidden rounded-xs bg-neutral-100 my-4 lg:mb-4 lg:mt-3 order-2 lg:order-1 cursor-pointer",
            aspectClass
          )}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={product.image}
            alt={`${product.name} - ${product.categoryLabel}`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transform-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>

        {/* Description: Order 3 on mobile */}
        <p className="text-xs sm:text-sm font-light leading-relaxed text-[#525252] order-3 lg:order-3">
          {product.description}
        </p>

        {/* Highlights / Features */}
        {product.highlights && product.highlights.length > 0 && (
          <div className="mt-4 pt-3.5 border-t border-neutral-100 order-3 lg:order-4">
            <ul className="flex flex-wrap gap-1.5">
              {product.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="inline-flex items-center gap-1 rounded-xs bg-[#F8F9FC] px-2 py-0.5 text-[11px] text-neutral-600 border border-neutral-200/60"
                >
                  <Check className="h-2.5 w-2.5 text-[#004AAD]" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action CTA at bottom */}
      <div className="p-5 sm:p-6 pt-0 mt-auto flex flex-col gap-2.5">
        <Link
          href={productUrl}
          className="inline-flex items-center justify-between w-full rounded-xs bg-[#F8F9FC] px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#004AAD] hover:bg-[#EEF4FD] hover:text-[#003A8C] border border-neutral-200/80 transition-colors"
        >
          <span>View Details & Specs</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <ProductEnquiryButton
          productName={product.name}
          categoryLabel={product.categoryLabel}
          variant="primary"
          size="sm"
          className="w-full"
        />
      </div>
    </div>
  );
}
