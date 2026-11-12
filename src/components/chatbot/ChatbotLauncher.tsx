"use client";

import { motion } from "framer-motion";
import { MessageSquare, X, Sparkles } from "lucide-react";
import { cn } from "@/utils/cn";
import { EASINGS } from "@/config/motion";

interface ChatbotLauncherProps {
  isOpen: boolean;
  onToggle: () => void;
  hasInteracted?: boolean;
}

export function ChatbotLauncher({ isOpen, onToggle, hasInteracted = false }: ChatbotLauncherProps) {
  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3">
      {/* Subtle floating greeting pill if user hasn't opened yet */}
      {!isOpen && !hasInteracted && (
        <motion.div
          initial={{ opacity: 0, x: 12, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: EASINGS.luxury }}
          onClick={onToggle}
          className="hidden md:flex items-center space-x-2 bg-white text-[#151717] px-3.5 py-2 rounded-full shadow-lg border border-[#E5E9F2] hover:border-[#004AAD]/30 cursor-pointer transition-transform hover:-translate-x-0.5 active:scale-95 motion-reduce:transform-none"
        >
          <Sparkles className="h-4 w-4 text-[#FFC30C]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#004AAD]">Chat with AI Assistant</span>
        </motion.div>
      )}

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={onToggle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: EASINGS.luxury }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close AI Chat Assistant" : "Open AI Chat Assistant"}
        aria-expanded={isOpen}
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#004AAD]/40 transition-colors duration-200 cursor-pointer motion-reduce:transform-none",
          isOpen
            ? "bg-[#151717] hover:bg-[#262626]"
            : "bg-[#004AAD] hover:bg-[#003A8C]"
        )}
      >
        {/* Subtle glowing ring pulse when closed */}
        {!isOpen && (
          <span
            className="absolute -inset-1 rounded-full bg-[#004AAD]/25 animate-ping -z-10 pointer-events-none motion-reduce:hidden"
            style={{ animationDuration: "3.5s" }}
          />
        )}

        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-200" aria-hidden="true" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6 transition-transform duration-200" aria-hidden="true" />
            {/* Status dot */}
            <span className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full bg-[#FFC30C] border-2 border-[#004AAD] flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
