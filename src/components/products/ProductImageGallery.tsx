"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/utils/cn";

export interface ProductImageGalleryProps {
  productName: string;
  categoryLabel: string;
  primaryImage: string;
  galleryImages?: string[];
  badge?: string;
  isClientProduct?: boolean;
}

export function ProductImageGallery({
  productName,
  categoryLabel,
  primaryImage,
  galleryImages = [],
  badge,
  isClientProduct = false,
}: ProductImageGalleryProps) {
  const allImages = [primaryImage, ...galleryImages];
  const [selectedImage, setSelectedImage] = useState(primaryImage);

  return (
    <div className="flex flex-col gap-4">
      {/* Primary Display Frame */}
      <div className="group relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] w-full overflow-hidden rounded-xs border border-neutral-200/90 bg-neutral-100 shadow-xs">
        <Image
          src={selectedImage}
          alt={`${productName} — ${categoryLabel}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain sm:object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#004AAD] shadow-xs backdrop-blur-xs border border-neutral-200/60">
            {categoryLabel}
          </span>
          {isClientProduct && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#151717]/85 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-xs">
              <Sparkles className="h-2.5 w-2.5 text-[#FFC30C]" />
              Verified Installation
            </span>
          )}
        </div>

        {badge && (
          <div className="absolute bottom-3 left-3 z-10 rounded-xs bg-[#151717]/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium text-white">
            {badge}
          </div>
        )}
      </div>

      {/* Multiple Gallery Image Thumbnails (if available) */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
          {allImages.map((img, idx) => {
            const isSelected = selectedImage === img;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                aria-label={`View ${productName} image ${idx + 1}`}
                className={cn(
                  "relative h-18 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-xs border-2 transition-all cursor-pointer bg-neutral-100",
                  isSelected
                    ? "border-[#004AAD] shadow-sm ring-2 ring-[#004AAD]/20"
                    : "border-neutral-200 opacity-70 hover:opacity-100 hover:border-neutral-300"
                )}
              >
                <Image
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
