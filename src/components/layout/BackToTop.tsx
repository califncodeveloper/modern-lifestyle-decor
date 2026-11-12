"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { cn } from "@/utils/cn";

export interface BackToTopProps {
  threshold?: number;
  className?: string;
}

export function BackToTop({ threshold = 350, className }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.2 });
    // Fallback if Lenis is not active
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top of page"
          title="Back to top"
          className={cn(
            "fixed bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-28 sm:right-7 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#151717] text-white shadow-lg border border-neutral-700/80 hover:border-[#FFC30C] hover:text-[#FFC30C] hover:bg-[#262626] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C] focus-visible:ring-offset-2 transition-colors duration-200 cursor-pointer motion-reduce:transform-none",
            className
          )}
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-200" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
