"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { imageReveal, imageCurtainReveal, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface ImageRevealProps extends HTMLMotionProps<"div"> {
  variant?: "scale" | "curtain";
  delay?: number;
  viewportMargin?: string;
  once?: boolean;
}

export function ImageReveal({
  children,
  variant = "scale",
  delay = 0,
  className,
  viewportMargin = VIEWPORT_CONFIG.default.margin,
  once = VIEWPORT_CONFIG.default.once,
  ...props
}: ImageRevealProps) {
  const selectedVariant = variant === "curtain" ? imageCurtainReveal : imageReveal;

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      transition={{ delay }}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
