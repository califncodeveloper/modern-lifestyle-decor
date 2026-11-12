"use client";

import Image from "next/image";
import { Camera, Maximize2, Sparkles } from "lucide-react";
import type { ProjectSlot } from "@/types/decor";
import { cn } from "@/utils/cn";

interface ProjectSlotCardProps {
  slot: ProjectSlot;
  onPreview?: (slot: ProjectSlot) => void;
  className?: string;
}

export function ProjectSlotCard({ slot, onPreview, className }: ProjectSlotCardProps) {
  const isImageAvailable = Boolean(slot.imagePath && slot.status === "available");

  return (
    <div
      onClick={() => onPreview?.(slot)}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/90 bg-white transition-all duration-300 hover:border-[#004AAD]/50 hover:shadow-lg cursor-pointer",
        className
      )}
    >
      {/* Aspect Ratio Container */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 flex items-center justify-center",
          slot.aspectRatio === "16/9" && "aspect-[16/9]",
          slot.aspectRatio === "4/3" && "aspect-[4/3]",
          slot.aspectRatio === "3/4" && "aspect-[3/4]",
          slot.aspectRatio === "1/1" && "aspect-square"
        )}
      >
        {isImageAvailable && slot.imagePath ? (
          <>
            <Image
              src={slot.imagePath}
              alt={slot.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#004AAD] shadow-md">
                <Maximize2 className="h-5 w-5" />
              </span>
            </div>
          </>
        ) : (
          /* Architectural Blueprint Slot Placeholder */
          <div className="relative inset-0 w-full h-full p-6 flex flex-col items-center justify-center text-center select-none">
            {/* Subtle architectural millimeter grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #004AAD 1px, transparent 1px), linear-gradient(to bottom, #004AAD 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />

            {/* Corner guide markers */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-neutral-400">┌</div>
            <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400">┐</div>
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-neutral-400">└</div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-neutral-400">┘</div>

            {/* Central Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-neutral-200 text-[#004AAD] shadow-2xs group-hover:border-[#004AAD] group-hover:scale-110 transition-transform duration-300">
              <Camera className="h-5 w-5" />
            </div>

            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#151717]">
              Slot {slot.slotNumber}
            </p>
            <p className="mt-1 text-[11px] text-[#737373] max-w-[200px]">
              {slot.category}
            </p>

            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-mono text-neutral-500 border border-neutral-200">
              {slot.aspectRatio} • {slot.dimensions}
            </span>
          </div>
        )}

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className="rounded-xs bg-[#151717]/85 backdrop-blur-xs px-2 py-0.5 text-[10px] font-medium text-white tracking-wide">
            Slot {slot.slotNumber}
          </span>
          <span className="rounded-xs bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-[#004AAD] uppercase tracking-wider shadow-2xs">
            {slot.category}
          </span>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-4 sm:p-5 flex items-center justify-between border-t border-neutral-100 bg-white">
        <div>
          <h4 className="font-heading text-sm font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
            {slot.title}
          </h4>
          <p className="text-[11px] text-[#737373] mt-0.5 flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 text-[#FFC30C]" />
            Architectural Project Slot
          </p>
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#004AAD] group-hover:underline">
          View
        </div>
      </div>
    </div>
  );
}

