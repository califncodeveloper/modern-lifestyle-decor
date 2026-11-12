import type { LenisOptions } from "lenis";

/**
 * Standard Lenis configuration tailored for architectural & interior decor showcase.
 * Provides a gentle, luxurious inertia without interfering with accessibility.
 */
export const defaultLenisOptions: LenisOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  infinite: false,
};

