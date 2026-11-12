"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  initialDelay?: number;
  viewportMargin?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  initialDelay = 0.08,
  viewportMargin = VIEWPORT_CONFIG.cards.margin,
  once = VIEWPORT_CONFIG.cards.once,
  className,
  ...props
}: StaggerContainerProps) {
  const customVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
