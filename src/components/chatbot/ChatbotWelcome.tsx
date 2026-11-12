"use client";

import { ShieldCheck, MessageCircle } from "lucide-react";
import { QuickQuestions } from "./QuickQuestions";

interface ChatbotWelcomeProps {
  onSelectQuestion: (question: string) => void;
  isLoading?: boolean;
}

export function ChatbotWelcome({ onSelectQuestion, isLoading }: ChatbotWelcomeProps) {
  return (
    <div className="p-4 bg-gradient-to-b from-[#EEF4FD]/50 to-white rounded-2xl border border-[#004AAD]/10 mb-4 space-y-3.5">
      <div className="flex items-start space-x-3">
        <div className="h-10 w-10 rounded-xl bg-[#004AAD] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
          <ShieldCheck className="h-6 w-6 text-[#FFC30C]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#151717]">
            Modern LifeStyle Decor Assistant
          </h3>
          <p className="text-xs text-[#737373] mt-0.5">
            Manufacturer & Retailer of Mosquito Nets, Window Blinds & Curtains
          </p>
          <div className="flex items-center space-x-1.5 mt-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-700">Online & Ready to Help</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#151717] leading-relaxed">
        Ask me anything about our product ranges, materials, showroom locations, or tap a suggestion below to get started:
      </p>

      <QuickQuestions onSelectQuestion={onSelectQuestion} disabled={isLoading} />

      <div className="pt-2 border-t border-[#E5E9F2] flex items-center justify-between text-[11px] text-[#737373]">
        <span className="flex items-center space-x-1">
          <MessageCircle className="h-3 w-3 text-[#004AAD]" aria-hidden="true" />
          <span>Need custom measurements or pricing?</span>
        </span>
        <a
          href="https://wa.me/919551080470"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#004AAD] hover:underline"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

