"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import type { ProductDetailItem } from "@/types/decor";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface ProductGridProps {
  products: ProductDetailItem[];
  columns?: 2 | 3 | 4;
  className?: string;
  imageAspect?: "4/3" | "16/10" | "1/1";
}

export function ProductGrid({
  products,
  columns = 3,
  className,
  imageAspect = "4/3",
}: ProductGridProps) {
  const colClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn("grid gap-6 sm:gap-8", colClass, className)}
    >
      {products.map((product, index) => (
        <motion.div key={product.id} variants={fadeUp} className="h-full">
          <ProductCard
            product={product}
            imageAspect={imageAspect}
            priority={index < 2}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

