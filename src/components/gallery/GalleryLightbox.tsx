"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import type { GalleryItemData } from "@/types/gallery";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import { createWhatsAppProductEnquiryUrl } from "@/utils/whatsapp";
import { modalTransition, modalBackdrop } from "@/lib/motion";
import { useLenisScroll } from "@/hooks/useLenisScroll";

export interface GalleryLightboxProps {
  isOpen: boolean;
  currentItem: GalleryItemData | null;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  isOpen,
  currentItem,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const { stop, start } = useLenisScroll();
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Lock body scroll, pause Lenis, and register keyboard listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      start();
    };
  }, [isOpen, onClose, onPrev, onNext, stop, start]);

  // Touch swipe gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Safe backdrop click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const whatsappUrl = currentItem
    ? createWhatsAppProductEnquiryUrl(currentItem.title, currentItem.categoryLabel)
    : "";

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${currentItem.title} Lightbox Preview`}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 lg:p-8 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Top Control Bar: Counter + Close Button */}
          <div className="fixed top-2.5 sm:top-5 inset-x-3 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-none">
            <div className="pointer-events-auto rounded-full bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs tracking-wider uppercase text-neutral-300 font-medium shadow-sm">
              <span className="text-[#FFC30C] font-semibold">
                {currentIndex + 1}
              </span>{" "}
              / <span>{totalItems}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close lightbox"
              className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white hover:text-[#151717] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C] cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Previous Button (Left) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="fixed left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white hover:text-[#151717] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>

          {/* Next Button (Right) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="fixed right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white hover:text-[#151717] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>

          {/* Main Lightbox Content Card with Touch Swipe */}
          <motion.div
            key={currentItem.id}
            variants={modalTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 mx-auto my-auto flex max-h-[92dvh] sm:max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto sm:overflow-hidden rounded-xs bg-[#151717] border border-neutral-700/80 shadow-2xl"
          >
            {/* Main Large Image Container */}
            <div className="relative flex items-center justify-center w-full bg-black/50 h-[46vh] sm:h-[60vh] max-h-[640px] shrink-0">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
                className="object-contain p-2 sm:p-4 select-none"
              />
            </div>

            {/* Editorial Caption Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#1B1D1D] p-4 sm:p-6 border-t border-neutral-800">
              <div className="flex-1">
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFC30C]">
                    {currentItem.categoryLabel}
                  </span>

                  <span className="text-neutral-600">•</span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-300 border border-white/10">
                    <Tag className="h-2.5 w-2.5" />
                    {currentItem.imageType === "catalogue"
                      ? "Product Catalogue"
                      : "Installation Project"}
                  </span>

                  {currentItem.badge && (
                    <span className="rounded-full bg-[#004AAD]/30 px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-blue-200 border border-[#004AAD]/40">
                      {currentItem.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {currentItem.title}
                </h2>

                {/* Short Description */}
                <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
                  {currentItem.description}
                </p>

                {/* Highlights */}
                {currentItem.highlights && currentItem.highlights.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {currentItem.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="rounded-xs bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-300 border border-white/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto min-h-[44px] items-center justify-center gap-2 rounded-xs bg-[#004AAD] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white shadow-xs transition-all hover:bg-[#003A8C] hover:shadow-md active:bg-[#002D6E] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
