"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "./Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

export interface CTAAction {
  text: string;
  href: string;
  isExternal?: boolean;
}

export interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: CTAAction;
  secondaryCta?: CTAAction;
  backgroundImage?: string;
  variant?: "charcoal" | "royal" | "soft";
  className?: string;
}

export function CTASection({
  eyebrow = "Custom Manufacturing & Wholesale Solutions",
  title = "Ready to Transform Your Space with Architectural Precision?",
  description = "Connect with our expert team for on-site window measurement, bespoke fabric curation, or wholesale quotation tailored to your architectural project.",
  primaryCta = {
    text: "Get a Free Quote",
    href: "/contact",
  },
  secondaryCta = {
    text: "+91 9551080470",
    href: "tel:+919551080470",
    isExternal: true,
  },
  backgroundImage,
  variant = "charcoal",
  className,
}: CTASectionProps) {
  const isCharcoal = variant === "charcoal";
  const isRoyal = variant === "royal";
  const isSoft = variant === "soft";

  return (
    <section
      className={cn(
        "relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden",
        isCharcoal && "bg-[#151717] text-white border-y border-[#262626]",
        isRoyal && "bg-[#004AAD] text-white",
        isSoft && "bg-[#F8F9FC] text-[#151717] border-y border-[#E5E9F2]",
        className
      )}
    >
      {/* Optional Background Image with Architectural Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Interior background"
            fill
            className="object-cover opacity-20 filter grayscale"
          />
          <div
            className={cn(
              "absolute inset-0",
              isCharcoal && "bg-gradient-to-r from-[#151717] via-[#151717]/90 to-[#151717]/70",
              isRoyal && "bg-gradient-to-r from-[#004AAD] via-[#004AAD]/95 to-[#003A8C]/80",
              isSoft && "bg-gradient-to-r from-[#F8F9FC] via-[#F8F9FC]/95 to-[#F8F9FC]/80"
            )}
          />
        </div>
      )}

      {/* Subtle brand glow effects */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: isSoft
            ? "radial-gradient(circle, #004AAD 0%, transparent 70%)"
            : "radial-gradient(circle, #FFC30C 0%, #004AAD 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] mb-6 border"
              style={{
                borderColor: isCharcoal
                  ? "rgba(255, 195, 12, 0.3)"
                  : isRoyal
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(0, 74, 173, 0.2)",
                backgroundColor: isCharcoal
                  ? "rgba(255, 195, 12, 0.05)"
                  : isRoyal
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 74, 173, 0.05)",
                color: isCharcoal
                  ? "#FFC30C"
                  : isRoyal
                  ? "#FFFFFF"
                  : "#004AAD",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: isCharcoal
                    ? "#FFC30C"
                    : isRoyal
                    ? "#FFFFFF"
                    : "#004AAD",
                }}
              />
              {eyebrow}
            </motion.div>
          )}

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className={cn(
              "font-heading text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight break-words",
              isCharcoal && "text-white",
              isRoyal && "text-white",
              isSoft && "text-[#151717]"
            )}
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              className={cn(
                "mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed sm:text-lg",
                isCharcoal && "text-neutral-300",
                isRoyal && "text-blue-100",
                isSoft && "text-[#525252]"
              )}
            >
              {description}
            </motion.p>
          )}

          {/* Action CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
            >
              {primaryCta && (
                primaryCta.isExternal ? (
                  <a
                    href={primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant={isRoyal ? "white" : "primary"}
                      size="lg"
                      className="w-full sm:w-auto"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      {primaryCta.text}
                    </Button>
                  </a>
                ) : (
                  <Link href={primaryCta.href} className="w-full sm:w-auto">
                    <Button
                      variant={isRoyal ? "white" : "primary"}
                      size="lg"
                      className="w-full sm:w-auto"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      {primaryCta.text}
                    </Button>
                  </Link>
                )
              )}

              {secondaryCta && (
                secondaryCta.isExternal ? (
                  <a
                    href={secondaryCta.href}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant={isCharcoal || isRoyal ? "white" : "outline"}
                      size="lg"
                      className={cn(
                        "w-full sm:w-auto",
                        isCharcoal && "bg-transparent text-white border-neutral-700 hover:bg-neutral-900 hover:border-neutral-500 hover:text-white"
                      )}
                      leftIcon={<PhoneCall className="h-4 w-4 text-[#FFC30C]" />}
                    >
                      {secondaryCta.text}
                    </Button>
                  </a>
                ) : (
                  <Link href={secondaryCta.href} className="w-full sm:w-auto">
                    <Button
                      variant={isCharcoal || isRoyal ? "white" : "outline"}
                      size="lg"
                      className={cn(
                        "w-full sm:w-auto",
                        isCharcoal && "bg-transparent text-white border-neutral-700 hover:bg-neutral-900 hover:border-neutral-500 hover:text-white"
                      )}
                    >
                      {secondaryCta.text}
                    </Button>
                  </Link>
                )
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

