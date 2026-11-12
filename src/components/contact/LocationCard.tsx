"use client";

import {
  MapPin,
  Navigation,
  ExternalLink,
  Phone,
  Building2,
  Factory,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import type { BusinessLocationItem } from "@/types/contact";
import { cn } from "@/utils/cn";

export interface LocationCardProps {
  location: BusinessLocationItem;
  className?: string;
}

export function LocationCard({ location, className }: LocationCardProps) {
  const isShowroom = location.type === "showroom";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xs border bg-white p-7 sm:p-9 lg:p-10 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none",
        isShowroom
          ? "border-neutral-200/90 hover:border-[#004AAD]/50"
          : "border-neutral-200/90 hover:border-[#151717]/50",
        className
      )}
    >
      {/* Decorative Accent Header Bar */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-1.5",
          isShowroom
            ? "bg-gradient-to-r from-[#004AAD] via-[#FFC30C] to-[#004AAD]"
            : "bg-gradient-to-r from-[#151717] via-[#004AAD] to-[#151717]"
        )}
      />

      <div>
        {/* Header: Badge & Facility Type Icon */}
        <div className="flex items-center justify-between mb-5">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] shadow-2xs border",
              isShowroom
                ? "border-[#004AAD]/20 bg-[#EEF4FD] text-[#004AAD]"
                : "border-neutral-300 bg-[#F1F4FA] text-[#151717]"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                isShowroom ? "bg-[#FFC30C]" : "bg-[#004AAD]"
              )}
            />
            {location.badge}
          </span>

          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xs border shadow-2xs transition-colors",
              isShowroom
                ? "border-[#004AAD]/20 bg-[#EEF4FD] text-[#004AAD] group-hover:bg-[#004AAD] group-hover:text-white"
                : "border-neutral-200 bg-[#F8F9FC] text-[#151717] group-hover:bg-[#151717] group-hover:text-white"
            )}
          >
            {isShowroom ? (
              <Building2 className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Factory className="h-5 w-5" aria-hidden="true" />
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
          {location.title}
        </h3>

        {/* Purpose / Role Description */}
        <p className="mt-2 text-xs sm:text-sm text-[#525252] font-light leading-relaxed">
          {isShowroom
            ? "Customer experience, product displays, fabric catalogue consultations, and bespoke design selection."
            : "In-house manufacturing, stainless steel mesh assembly, blind fabrication, and wholesale dispatch facility."}
        </p>

        {/* Complete Physical Address */}
        <div className="mt-6 flex items-start gap-3.5 pt-5 border-t border-neutral-100">
          <MapPin
            className={cn(
              "h-5 w-5 shrink-0 mt-0.5",
              isShowroom ? "text-[#004AAD]" : "text-[#151717]"
            )}
            aria-hidden="true"
          />
          <address className="not-italic text-sm sm:text-base leading-relaxed text-[#525252] font-light">
            {location.addressLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        {/* Contact Phone if present */}
        {location.phone && (
          <div className="mt-4 flex items-center gap-2.5 text-xs font-mono text-[#151717]">
            <Phone className="h-3.5 w-3.5 text-[#004AAD]" aria-hidden="true" />
            <span className="text-neutral-500 font-sans">Direct Coordination:</span>
            <a
              href={`tel:${location.phone.replace(/\s+/g, "")}`}
              className="font-semibold text-[#004AAD] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs"
            >
              {location.phone}
            </a>
          </div>
        )}
      </div>

      {/* Card Actions: Get Directions Button */}
      <div className="mt-8 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-4">
        <a
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            variant={isShowroom ? "primary" : "dark"}
            size="md"
            className="w-full sm:w-auto group/btn shadow-xs"
            leftIcon={<Navigation className="h-4 w-4" />}
            rightIcon={
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 motion-reduce:transform-none" />
            }
          >
            Get Directions
          </Button>
        </a>

        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
          Verified Google Maps Link
        </span>
      </div>
    </div>
  );
}
