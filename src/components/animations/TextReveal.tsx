"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { textReveal, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface TextRevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  viewportMargin?: string;
  once?: boolean;
}

export function TextReveal({
  children,
  delay = 0,
  className,
  viewportMargin = VIEWPORT_CONFIG.cards.margin,
  once = VIEWPORT_CONFIG.cards.once,
  ...props
}: TextRevealProps) {
  return (
    <div className={cn("overflow-hidden inline-block", className)}>
      <motion.div
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        transition={{ delay }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
