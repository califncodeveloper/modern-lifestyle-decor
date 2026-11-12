"use client";

import { useLenis } from "lenis/react";

/**
 * Access the active single Lenis instance safely.
 * Use for programmatic scrolling, pausing, or scroll event subscription.
 */
export function useLenisScroll() {
  const lenis = useLenis();

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
      lock?: boolean;
    }
  ) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    }
  };

  const stop = () => lenis?.stop();
  const start = () => lenis?.start();

  return {
    lenis,
    scrollTo,
    stop,
    start,
  };
}

