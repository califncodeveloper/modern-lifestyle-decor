"use client";

import { motion } from "framer-motion";
import type { GalleryCategory, GalleryCategoryFilter } from "@/types/gallery";
import { cn } from "@/utils/cn";

export interface GalleryFiltersProps {
  categories: GalleryCategoryFilter[];
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  className?: string;
}

export function GalleryFilters({
  categories,
  activeCategory,
  onSelectCategory,
  className,
}: GalleryFiltersProps) {
  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Gallery category filters"
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar sm:flex-wrap sm:justify-center"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls="gallery-grid"
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "group relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none",
                isActive
                  ? "bg-[#004AAD] text-white shadow-sm"
                  : "bg-[#F8F9FC] text-[#525252] border border-[#E5E9F2] hover:bg-white hover:text-[#004AAD] hover:border-[#CDD5E2] hover:shadow-xs"
              )}
            >
              <span>{cat.label}</span>

              {/* Count Indicator */}
              <span
                className={cn(
                  "inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full px-1.5 text-[10px] font-semibold transition-colors",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#E5E9F2] text-[#737373] group-hover:bg-[#EEF4FD] group-hover:text-[#004AAD]"
                )}
              >
                {cat.count ?? 0}
              </span>

              {/* Active Indicator Underline Animation */}
              {isActive && (
                <motion.span
                  layoutId="activeFilterIndicator"
                  className="absolute inset-0 rounded-full bg-[#004AAD] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
