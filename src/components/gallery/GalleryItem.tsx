"use client";

import Image from "next/image";
import { Maximize2, Tag } from "lucide-react";
import type { GalleryItemData } from "@/types/gallery";
import { cn } from "@/utils/cn";

export interface GalleryItemProps {
  item: GalleryItemData;
  index: number;
  onClick: () => void;
  priority?: boolean;
}

const aspectRatioClasses = {
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export function GalleryItem({
  item,
  index,
  onClick,
  priority = false,
}: GalleryItemProps) {
  const aspectClass = item.aspectRatio
    ? aspectRatioClasses[item.aspectRatio] || "aspect-[4/3]"
    : "aspect-[4/3]";

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`View ${item.title} preview`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative w-full overflow-hidden rounded-xs border border-[#E5E9F2] bg-neutral-100 shadow-2xs hover:shadow-xl hover:border-[#CDD5E2] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] break-inside-avoid mb-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 select-none motion-reduce:transition-none"
    >
      {/* Image Container with Dynamic Architectural Aspect Ratio */}
      <div className={cn("relative w-full overflow-hidden", aspectClass)}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={priority || index < 4}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transform-none"
        />

        {/* Permanent Subtle Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151717]/90 via-[#151717]/25 to-transparent transition-opacity duration-300 sm:opacity-85 sm:group-hover:opacity-100" />

        {/* Top Badges: Category + Classification */}
        <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#004AAD] shadow-xs backdrop-blur-xs border border-white/60">
            {item.categoryLabel}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-neutral-200 backdrop-blur-xs border border-white/10">
            <Tag className="h-2 w-2" />
            {item.imageType === "catalogue" ? "Catalogue" : "Installation"}
          </span>
        </div>

        {/* Bottom Content Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-5 flex flex-col justify-end text-white pointer-events-none">
          {item.badge && (
            <div className="mb-1 text-[10px] font-medium tracking-widest uppercase text-[#FFC30C]">
              {item.badge}
            </div>
          )}

          <div className="flex items-end justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-heading text-base sm:text-lg font-medium leading-snug tracking-tight text-white transition-colors group-hover:text-[#FFC30C]">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              {item.location && (
                <p className="mt-1 text-[11px] text-neutral-400 font-medium">
                  📍 {item.location}
                </p>
              )}
            </div>

            {/* Hover Expand Icon Indicator */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs border border-white/20 transition-all duration-300 group-hover:bg-[#004AAD] group-hover:border-[#004AAD] group-hover:scale-110 motion-reduce:transform-none">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
