"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { heroContent } from "@/data/homepage";
import { fadeUp, staggerContainer, imageReveal } from "@/lib/motion";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle luxury parallax on hero imagery (disabled if reduced motion preferred)
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "10%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FC] via-white to-white pt-8 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28"
    >
      {/* Subtle architectural background grid accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#004AAD 1px, transparent 1px), radial-gradient(#004AAD 1px, #F8F9FC 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient lighting glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#004AAD]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#FFC30C]/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:col-span-7 text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#004AAD]/15 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#004AAD] shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-[#FFC30C] animate-pulse motion-reduce:animate-none" />
                {heroContent.eyebrow}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-3xl font-medium tracking-tight text-[#151717] sm:text-5xl lg:text-[3.5rem] leading-[1.12]"
            >
              Transform Your Windows.{" "}
              <span className="relative inline-block text-[#004AAD]">
                Elevate
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#FFC30C]"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0,5 Q50,0 100,5 L100,8 Q50,3 0,8 Z" />
                </svg>
              </span>{" "}
              Your Lifestyle.
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#525252] font-light"
            >
              {heroContent.description}
            </motion.p>

            {/* Brand Statement Pill */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#004AAD]"
            >
              <span className="flex items-center gap-1.5 text-neutral-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#004AAD]" />
                Manufacturer
              </span>
              <span className="text-[#CDD5E2]">•</span>
              <span className="flex items-center gap-1.5 text-neutral-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#004AAD]" />
                Wholesale
              </span>
              <span className="text-[#CDD5E2]">•</span>
              <span className="flex items-center gap-1.5 text-neutral-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#004AAD]" />
                Retail
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link href={heroContent.primaryCta.href} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto group shadow-md hover:shadow-lg transition-all"
                  rightIcon={
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" />
                  }
                >
                  {heroContent.primaryCta.text}
                </Button>
              </Link>

              <Link href={heroContent.secondaryCta.href} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto hover:bg-[#EEF4FD]"
                >
                  {heroContent.secondaryCta.text}
                </Button>
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-[#737373]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#004AAD]" />
                <span>Custom-Crafted Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#FFC30C]" />
                <span>Architectural Material Library</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Photography Composition with Subtle Parallax */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            {/* Main Architectural Image Frame */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-xs border border-neutral-200/80 bg-neutral-100 shadow-xl lg:max-w-none">
              <motion.div
                style={{ y: imageY }}
                className="absolute -top-[5%] inset-x-0 h-[110%] w-full"
              >
                <Image
                  src={heroContent.images.primary}
                  alt="Modern LifeStyle Decor architectural window interior"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xs bg-white/95 px-4 py-3 backdrop-blur-md border border-white/40 shadow-sm">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#004AAD]">
                    Signature Collection
                  </p>
                  <p className="text-xs text-[#151717] font-medium">
                    Mosquito Nets • Blinds • Curtains
                  </p>
                </div>
                <div className="h-2 w-2 rounded-full bg-[#FFC30C]" />
              </div>
            </div>

            {/* Secondary Floating Image Detail Card (Desktop Only) */}
            <div className="hidden sm:block absolute -bottom-6 sm:left-2 lg:-left-8 w-44 lg:w-48 aspect-square overflow-hidden rounded-xs border-2 border-white bg-white shadow-2xl z-20">
              <Image
                src={heroContent.images.secondary}
                alt="Window furnishing material detail"
                fill
                sizes="200px"
                className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transform-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] uppercase tracking-wider font-semibold text-white">
                Bespoke Fitment
              </div>
            </div>

            {/* Subtle Brand Accent Tag */}
            <div className="hidden sm:flex absolute -top-4 -right-4 h-12 w-12 rounded-full bg-[#004AAD] text-white items-center justify-center shadow-lg border-2 border-white z-20">
              <span className="text-[10px] font-bold tracking-tight">MLD</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
