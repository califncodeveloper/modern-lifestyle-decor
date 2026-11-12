import type { Variants } from "framer-motion";
import { EASINGS, TRANSITIONS } from "@/config/motion";

/**
 * Modern LifeStyle Decor - Centralized Motion System
 * Architectural, restrained, and accessible Framer Motion variants.
 * All presets degrade gracefully when reduced motion is preferred (via MotionConfig in Providers).
 */

// ---------------------------------------------------------------------------
// 1. Viewport Trigger Configurations
// ---------------------------------------------------------------------------

export const VIEWPORT_CONFIG = {
  default: {
    once: true,
    margin: "-40px",
  },
  hero: {
    once: true,
    margin: "0px",
  },
  cards: {
    once: true,
    margin: "-30px",
  },
  repeatable: {
    once: false,
    margin: "-40px",
  },
} as const;

// ---------------------------------------------------------------------------
// 2. Fading Variants (Directions & Scales)
// ---------------------------------------------------------------------------

/** Simple opacity fade */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: TRANSITIONS.default,
  },
};

/** Upward architectural elevation */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASINGS.luxury,
    },
  },
};

/** Downward gentle reveal */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.default,
  },
};

/** Directional fade from the left */
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASINGS.luxury,
    },
  },
};

/** Directional fade from the right */
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASINGS.luxury,
    },
  },
};

/** Scale In for badges, modals, and spotlight cards */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITIONS.default,
  },
};

// ---------------------------------------------------------------------------
// 3. Stagger Containers & Items
// ---------------------------------------------------------------------------

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.default,
  },
};

// ---------------------------------------------------------------------------
// 4. Image & Editorial Reveals
// ---------------------------------------------------------------------------

/** Architectural scale zoom-out reveal */
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: EASINGS.editorial,
    },
  },
};

/** Curtain clip-path horizontal reveal */
export const imageCurtainReveal: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.85,
      ease: EASINGS.editorial,
    },
  },
};

/** Editorial headline text line reveal */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      ease: EASINGS.editorial,
    },
  },
};

// ---------------------------------------------------------------------------
// 5. Interactive Micro-Interactions (Hover, Tap, Focus)
// ---------------------------------------------------------------------------

export const hoverLift: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
  },
  hover: {
    y: -4,
    boxShadow: "0 12px 28px -6px rgba(0, 74, 173, 0.12)",
    transition: TRANSITIONS.subtleHover,
  },
};

export const hoverScale: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.025,
    transition: TRANSITIONS.subtleHover,
  },
};

export const buttonPress: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

// ---------------------------------------------------------------------------
// 6. Page & Modal Transitions
// ---------------------------------------------------------------------------

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASINGS.luxury,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.3,
      ease: EASINGS.snappy,
    },
  },
};

/** Lightbox / Dialog Modal Transition */
export const modalTransition: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: EASINGS.luxury,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 12,
    transition: {
      duration: 0.2,
      ease: EASINGS.snappy,
    },
  },
};

/** Modal Backdrop Fade */
export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// ---------------------------------------------------------------------------
// 7. Scroll Reveal Preset
// ---------------------------------------------------------------------------

export const scrollReveal: Variants = {
  offscreen: {
    opacity: 0,
    y: 36,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASINGS.luxury,
    },
  },
};
