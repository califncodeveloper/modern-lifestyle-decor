"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItemData } from "@/types/gallery";
import { GalleryItem } from "./GalleryItem";
import { GalleryLightbox } from "./GalleryLightbox";
import { GalleryEmptyState } from "./GalleryEmptyState";

export interface GalleryGridProps {
  items: GalleryItemData[];
  onResetCategory: () => void;
  className?: string;
}

export function GalleryGrid({
  items,
  onResetCategory,
  className,
}: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  if (items.length === 0) {
    return (
      <div className={className}>
        <GalleryEmptyState onResetCategory={onResetCategory} />
      </div>
    );
  }

  const currentItem = items[currentIndex] || null;

  return (
    <div id="gallery-grid" className={className}>
      {/* Editorial Masonry Grid via CSS Columns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={items.map((i) => i.id).join("-")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
        >
          {items.map((item, index) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={index}
              priority={index < 4}
              onClick={() => handleOpenLightbox(index)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox Dialog */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentItem={currentItem}
        currentIndex={currentIndex}
        totalItems={items.length}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

