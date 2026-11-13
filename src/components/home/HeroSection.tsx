"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { heroContent, heroPillars } from "@/data/homepage";
import { fadeUp, staggerContainer, imageReveal } from "@/lib/motion";
import { cn } from "@/utils/cn";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const activePillar = heroPillars[activePillarIndex] || heroPillars[0];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle luxury parallax on hero imagery (disabled if reduced motion preferred)
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "8%"]
  );

  // Auto-cycle through the 3 signature pillars every 6 seconds if user is idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % heroPillars.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

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

          {/* Right Column: Architectural Photography Composition */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5"
          >
            {/* Interactive Category Tabs Header */}
            <div className="mb-3.5 flex items-center justify-center sm:justify-start gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {heroPillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarIndex(idx)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer border whitespace-nowrap",
                    activePillarIndex === idx
                      ? "bg-[#004AAD] text-white border-[#004AAD] shadow-sm shadow-[#004AAD]/25 scale-102"
                      : "bg-white/95 hover:bg-white text-neutral-600 border-neutral-200/90 hover:border-[#004AAD]/40 hover:text-[#004AAD]"
                  )}
                >
                  {pillar.tabLabel}
                </button>
              ))}
            </div>

            {/* Main Showcase Card Frame */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100 shadow-2xl lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ y: imageY }}
                  className="absolute -top-[5%] inset-x-0 h-[110%] w-full"
                >
                  <Image
                    src={activePillar.image}
                    alt={`${activePillar.title} - Modern LifeStyle Decor`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient Scrim for crystal clear text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom In-Image Glassmorphic Badge (Unobstructed, full width) */}
              <Link
                href={activePillar.href}
                className="group absolute bottom-4 left-4 right-4 z-10 block rounded-xl bg-white/95 p-3.5 sm:p-4 backdrop-blur-md border border-white/60 shadow-lg hover:bg-white transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="h-2 w-2 rounded-full bg-[#FFC30C] animate-pulse" />
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#004AAD] truncate">
                        {activePillar.categoryTag}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#151717] font-bold truncate">
                      {activePillar.title}
                    </p>
                    <p className="text-[11px] text-neutral-600 line-clamp-1 mt-0.5 font-normal">
                      {activePillar.subtitle}
                    </p>
                  </div>

                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EEF4FD] text-[#004AAD] group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Secondary Floating Detail Card (Positioned Top-Left with Zero Collision) */}
            <div className="hidden sm:block absolute top-14 -left-4 lg:-left-7 w-36 lg:w-40 aspect-square overflow-hidden rounded-2xl border-2 border-white bg-white shadow-xl z-20">
              <Image
                src={heroContent.images.secondary}
                alt="SS 304 Precision Mesh window hardware detail"
                fill
                sizes="160px"
                className="object-cover transition-transform duration-500 hover:scale-108 motion-reduce:transform-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-white block">
                  Precision Hardware
                </span>
                <span className="text-[8px] text-[#FFC30C] font-medium block">
                  SS 304 Mesh
                </span>
              </div>
            </div>

            {/* Official Brand Authority Badge (Positioned Top-Right) */}
            <div className="hidden sm:flex absolute -top-3 -right-3 lg:-right-6 items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-xl border border-white/70 z-20">
              <div className="h-7 w-7 rounded-xl bg-[#004AAD] p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/icon.svg"
                  alt="Modern LifeStyle Decor Official Icon"
                  width={20}
                  height={20}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#151717] tracking-tight leading-tight">
                  Direct Manufacturer
                </p>
                <p className="text-[10px] text-[#004AAD] font-semibold leading-tight">
                  Wholesale & Retail
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
