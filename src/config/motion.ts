import type { Transition } from "framer-motion";

/**
 * Modern luxury easing curves and transitions for Modern LifeStyle Decor.
 * Tailored for architectural furnishings: restrained, smooth, and high-precision.
 */
export const EASINGS = {
  // Gentle, luxury deceleration curve
  luxury: [0.22, 1, 0.36, 1] as const,
  // High-impact architectural reveal
  editorial: [0.16, 1, 0.3, 1] as const,
  // Crisp interactive feedback
  snappy: [0.25, 0.1, 0.25, 1] as const,
  // Linear for marquee / infinite loops
  linear: [0, 0, 1, 1] as const,
};

export const TRANSITIONS = {
  default: {
    duration: 0.65,
    ease: EASINGS.luxury,
  } satisfies Transition,
  slow: {
    duration: 0.95,
    ease: EASINGS.luxury,
  } satisfies Transition,
  quick: {
    duration: 0.25,
    ease: EASINGS.snappy,
  } satisfies Transition,
  reveal: {
    duration: 0.85,
    ease: EASINGS.editorial,
  } satisfies Transition,
  spring: {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  } satisfies Transition,
  subtleHover: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  } satisfies Transition,
};
