"use client";

import { MessageCircle } from "lucide-react";
import { createWhatsAppProductEnquiryUrl } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

export interface ProductEnquiryButtonProps {
  productName: string;
  categoryLabel?: string;
  phone?: string;
  variant?: "primary" | "secondary" | "dark" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
  showIcon?: boolean;
}

const variantStyles = {
  primary:
    "bg-[#004AAD] text-white border border-[#004AAD] hover:bg-[#003A8C] hover:border-[#003A8C] hover:shadow-md active:bg-[#002D6E] shadow-xs",
  secondary:
    "bg-transparent text-[#004AAD] border-2 border-[#004AAD] hover:bg-[#EEF4FD] hover:border-[#003A8C] hover:shadow-xs active:bg-[#E0ECFC]",
  dark:
    "bg-[#151717] text-white border border-[#151717] hover:bg-[#262626] hover:border-[#262626] hover:shadow-md active:bg-black shadow-xs",
  white:
    "bg-white text-[#004AAD] border border-[#E5E9F2] hover:bg-[#F8F9FC] hover:border-[#CDD5E2] hover:shadow-md active:bg-[#EFF2F7] shadow-xs",
  outline:
    "bg-transparent text-[#151717] border border-[#CDD5E2] hover:border-[#004AAD] hover:text-[#004AAD] hover:bg-[#F8F9FC] hover:shadow-xs active:bg-[#F1F4FA]",
};

const sizeStyles = {
  sm: "h-9 px-4 text-xs tracking-wider gap-2",
  md: "h-11 px-5 text-xs tracking-widest gap-2.5",
  lg: "h-13 px-7 text-sm tracking-widest gap-3",
};

export function ProductEnquiryButton({
  productName,
  categoryLabel,
  phone,
  variant = "primary",
  size = "md",
  text = "Enquire Now",
  className,
  showIcon = true,
}: ProductEnquiryButtonProps) {
  const whatsappUrl = createWhatsAppProductEnquiryUrl(productName, categoryLabel, phone);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire about ${productName} on WhatsApp`}
      className={cn(
        "group inline-flex items-center justify-center font-medium uppercase rounded-xs transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {showIcon && (
        <MessageCircle
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 motion-reduce:transform-none"
          aria-hidden="true"
        />
      )}
      <span>{text}</span>
    </a>
  );
}
