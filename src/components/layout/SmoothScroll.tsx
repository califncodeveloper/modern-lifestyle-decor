"use client";

import { ReactLenis } from "lenis/react";
import { defaultLenisOptions } from "@/lib/lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Root SmoothScroll Provider.
 * Wraps children with ReactLenis ensuring exactly ONE singleton Lenis instance
 * across the application lifecycle without duplicate requestAnimationFrame loops.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={defaultLenisOptions}>
      {children}
    </ReactLenis>
  );
}

