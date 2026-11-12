"use client";

import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "./SmoothScroll";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Root Client Providers.
 * - Integrates Lenis smooth scrolling (singleton).
 * - Configures Framer Motion with automatic respects for user prefers-reduced-motion.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}

