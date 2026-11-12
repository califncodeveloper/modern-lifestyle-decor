"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, BreadcrumbItem } from "@/components/common/Breadcrumbs";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface ServiceHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  categoryTag?: string;
  image?: string;
  className?: string;
}

export function ServiceHero({
  eyebrow = "OUR SERVICES",
  title,
  description,
  breadcrumbs,
  categoryTag,
  image,
  className,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "8%"]
  );

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full border-b border-[#E5E9F2] bg-[#F8F9FC] py-12 sm:py-16 lg:py-20 overflow-hidden",
        className
      )}
    >
      {/* Architectural subtle blueprint background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#004AAD 1px, transparent 1px), linear-gradient(90deg, #004AAD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient accent */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#004AAD]/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={cn(
              "flex flex-col",
              image ? "lg:col-span-7" : "lg:col-span-10 max-w-3xl"
            )}
          >
            {/* Eyebrow and Tag */}
            <motion.div
              variants={fadeUp}
              className="mb-4 flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#004AAD]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                {eyebrow}
              </div>

              {categoryTag && (
                <span className="rounded-full bg-white px-3 py-0.5 text-[11px] font-medium tracking-wide uppercase text-neutral-600 border border-[#E5E9F2]">
                  {categoryTag}
                </span>
              )}
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-3xl font-medium tracking-tight text-[#151717] sm:text-4xl lg:text-5xl leading-[1.12]"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-5 text-base sm:text-lg font-light leading-relaxed text-[#525252] max-w-2xl"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Optional Right Architectural Showcase Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xs overflow-hidden border border-[#E5E9F2] shadow-md bg-white"
            >
              <motion.div
                style={{ y: imageY }}
                className="absolute -top-[4%] inset-x-0 h-[108%] w-full"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
