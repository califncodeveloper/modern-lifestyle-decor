"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { primaryContact, additionalContacts } from "@/data/contact";
import { ContactCard } from "./ContactCard";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PRIMARY_WHATSAPP_NUMBER } from "@/utils/whatsapp";

export function ContactInfo() {
  return (
    <div className="flex flex-col h-full justify-between space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="mb-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#004AAD]/15 bg-[#EEF4FD] px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#004AAD]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
            Direct Communication
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
          Connect Directly With Our Specialists
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#525252] font-light leading-relaxed">
          Whether you need advice on pleated mosquito mesh durability, motorisation for blinds, or custom drapery fabrics, our team is directly reachable.
        </p>
      </div>

      {/* Cards List */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-4"
      >
        {/* Primary Contact Card */}
        <motion.div variants={fadeUp}>
          <ContactCard person={primaryContact} />
        </motion.div>

        {/* Additional Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {additionalContacts.map((person) => (
            <motion.div key={person.name} variants={fadeUp}>
              <ContactCard person={person} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Reference Highlight Box */}
      <div className="rounded-xs border border-neutral-200/80 bg-[#F8F9FC] p-5 sm:p-6 space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#004AAD]">
          <ShieldCheck className="h-4 w-4 text-[#004AAD]" aria-hidden="true" />
          <span>Prompt Assistance Promise</span>
        </div>
        <p className="text-xs text-[#525252] leading-relaxed">
          For fastest responses, on-site measurement requests, and digital fabric catalog sharing, WhatsApp is actively monitored during business hours.
        </p>
        <div className="pt-2 border-t border-neutral-200/70 flex flex-wrap items-center gap-4 text-xs font-mono text-[#151717]">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-[#004AAD]" aria-hidden="true" />
            <a
              href={`mailto:${primaryContact.email}`}
              className="hover:text-[#004AAD] hover:underline"
            >
              {primaryContact.email}
            </a>
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <span className="flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <a
              href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-semibold hover:underline"
            >
              WhatsApp Support
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
