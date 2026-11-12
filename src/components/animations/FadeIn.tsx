"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  VIEWPORT_CONFIG,
} from "@/lib/motion";
import { cn } from "@/utils/cn";

export type AnimationVariant = "up" | "fade" | "down" | "left" | "right" | "scale";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  viewportMargin?: string;
  once?: boolean;
}

const variantMap = {
  up: fadeUp,
  fade: fadeIn,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

export function FadeIn({
  children,
  variant = "up",
  delay = 0,
  duration,
  className,
  viewportMargin = VIEWPORT_CONFIG.default.margin,
  once = VIEWPORT_CONFIG.default.once,
  ...props
}: FadeInProps) {
  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      transition={{ delay, duration }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
