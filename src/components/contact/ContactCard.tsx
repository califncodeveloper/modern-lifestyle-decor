"use client";

import { Phone, Mail, MessageCircle, User } from "lucide-react";
import type { ContactPerson } from "@/types/contact";
import { createWhatsAppGeneralEnquiryUrl } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

export interface ContactCardProps {
  person: ContactPerson;
  className?: string;
}

export function ContactCard({ person, className }: ContactCardProps) {
  const cleanPhone = person.phone.replace(/[^\d]/g, "");
  const whatsappUrl = createWhatsAppGeneralEnquiryUrl(undefined, cleanPhone);

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xs border bg-white p-6 sm:p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none",
        person.isPrimary
          ? "border-[#004AAD]/30 bg-gradient-to-b from-white to-[#F8F9FC] hover:border-[#004AAD]/70"
          : "border-neutral-200/90 hover:border-[#004AAD]/40 hover:bg-white",
        className
      )}
    >
      {/* Decorative Top Accent Bar for Primary Contact */}
      {person.isPrimary && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004AAD] via-[#FFC30C] to-[#004AAD]" />
      )}

      <div>
        {/* Top Header & Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.18em]",
              person.isPrimary
                ? "border border-[#004AAD]/20 bg-[#EEF4FD] text-[#004AAD]"
                : "border border-neutral-200 bg-neutral-100 text-neutral-600"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                person.isPrimary ? "bg-[#FFC30C]" : "bg-neutral-400"
              )}
            />
            {person.isPrimary ? "Primary Contact" : "Contact"}
          </span>

          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xs border text-neutral-600 transition-colors group-hover:text-[#004AAD]",
              person.isPrimary
                ? "border-[#004AAD]/20 bg-white text-[#004AAD]"
                : "border-neutral-200 bg-[#F8F9FC]"
            )}
          >
            <User className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        {/* Contact Name */}
        <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
          {person.name}
        </h3>

        {/* Direct Phone Number */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF4FD] text-[#004AAD]">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </div>
          <a
            href={`tel:${person.phone.replace(/\s+/g, "")}`}
            aria-label={`Call ${person.name} at ${person.phone}`}
            className="text-sm sm:text-base font-mono font-medium text-[#151717] hover:text-[#004AAD] hover:underline transition-colors min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs"
          >
            {person.phone}
          </a>
        </div>

        {/* Email Address (if present) */}
        {person.email && (
          <div className="mt-2 flex items-center gap-3 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF4FD] text-[#004AAD]">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </div>
            <a
              href={`mailto:${person.email}`}
              aria-label={`Send email to ${person.name} at ${person.email}`}
              className="text-xs sm:text-sm font-medium text-[#525252] hover:text-[#004AAD] hover:underline transition-colors min-w-0 truncate break-all min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs"
            >
              {person.email}
            </a>
          </div>
        )}
      </div>

      {/* Action Buttons: Call & WhatsApp */}
      <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center gap-2.5">
        <a
          href={`tel:${person.phone.replace(/\s+/g, "")}`}
          aria-label={`Call ${person.name}`}
          className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xs border border-neutral-300 bg-white text-xs font-semibold uppercase tracking-wider text-[#151717] hover:bg-[#F8F9FC] hover:border-[#004AAD] hover:text-[#004AAD] active:scale-95 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
        >
          <Phone className="h-3.5 w-3.5 text-[#004AAD]" aria-hidden="true" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message ${person.name} on WhatsApp`}
          className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xs border border-emerald-600/30 bg-emerald-50 text-xs font-semibold uppercase tracking-wider text-emerald-800 hover:bg-emerald-100 hover:border-emerald-600 hover:shadow-xs active:scale-95 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          <MessageCircle className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
