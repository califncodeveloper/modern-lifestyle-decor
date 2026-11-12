"use client";

import Link from "next/link";
import { Camera, ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/common/Button";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import { createWhatsAppGeneralEnquiryUrl } from "@/utils/whatsapp";

export interface GalleryEmptyStateProps {
  onResetCategory: () => void;
  className?: string;
}

export function GalleryEmptyState({
  onResetCategory,
  className,
}: GalleryEmptyStateProps) {
  const whatsappUrl = createWhatsAppGeneralEnquiryUrl(
    "On-Site Installations & Completed Projects Portfolio"
  );

  return (
    <div
      className={`mx-auto max-w-3xl rounded-xs border border-[#E5E9F2] bg-[#F8F9FC] p-8 sm:p-12 text-center shadow-xs ${
        className || ""
      }`}
    >
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white border border-[#E5E9F2] shadow-2xs text-[#004AAD]">
        <Camera className="h-7 w-7" aria-hidden="true" />
      </div>

      {/* Eyebrow */}
      <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#004AAD]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
        AUTHENTIC PROJECT DOCUMENTATION
      </div>

      {/* Heading */}
      <h3 className="font-heading text-2xl font-medium tracking-tight text-[#151717] sm:text-3xl">
        Genuine Installation Photographs Under Compilation
      </h3>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#525252] font-light">
        In strict adherence to our brand verification policy, we showcase only
        verified on-site photographs of completed projects. Photographs of our recent
        residential and commercial installations across Chennai and Tamil Nadu are
        currently being documented by our technical team and will be published here shortly.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
        <Button
          variant="primary"
          onClick={onResetCategory}
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          View All Product Catalogues
        </Button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            variant="secondary"
            className="w-full sm:w-auto"
            leftIcon={<WhatsAppIcon className="h-4 w-4 fill-current" />}
          >
            Enquire About Recent Sites
          </Button>
        </a>

        <Link href="/about" className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            leftIcon={<Store className="h-4 w-4" />}
          >
            Showroom Details
          </Button>
        </Link>
      </div>

      {/* Note on Verification */}
      <p className="mt-8 text-xs text-[#737373] tracking-wide">
        Modern LifeStyle Decor does not substitute generic catalogue photos as completed customer projects.
      </p>
    </div>
  );
}

