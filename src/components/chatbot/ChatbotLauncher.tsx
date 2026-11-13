"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/BrandIcons";
import { PRIMARY_WHATSAPP_NUMBER } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";
import { EASINGS } from "@/config/motion";

interface ChatbotLauncherProps {
  isOpen: boolean;
  onToggle: () => void;
  hasInteracted?: boolean;
}

export function ChatbotLauncher({
  isOpen,
  onToggle,
}: ChatbotLauncherProps) {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  // Automatically fade out the welcome message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeClick = () => {
    setShowWelcomeMessage(false);
    onToggle();
  };

  const whatsappMessage =
    "Hello Modern LifeStyle Decor, I would like to enquire about your products.";
  const whatsappUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Floating Contact & AI Support Actions"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* 1. AI Chatbot Action (Always Positioned Above WhatsApp) */}
      <div className="relative flex flex-col items-end pointer-events-auto">
        {/* Floating Welcome Message: "👋 Hi! How can we help you!" (Auto fades after 3s) */}
        <AnimatePresence>
          {showWelcomeMessage && !isOpen && (
            <motion.div
              key="floating-welcome-bubble"
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.94 }}
              transition={{ duration: 0.35, ease: EASINGS.luxury }}
              onClick={handleWelcomeClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleWelcomeClick();
                }
              }}
              aria-label="Open AI chat assistant: 👋 Hi! How can we help you!"
              className="absolute bottom-full right-0 mb-2.5 max-w-[calc(100vw-2rem)] whitespace-nowrap bg-white text-[#151717] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl border border-[#E5E9F2] flex items-center gap-2 cursor-pointer hover:border-[#004AAD]/40 active:scale-95 transition-all duration-150 z-50 select-none group"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#151717] group-hover:text-[#004AAD] transition-colors truncate">
                👋 Hi! How can we help you!
              </span>
              {/* Speech bubble pointer pointing down to chatbot button */}
              <span className="absolute -bottom-1.5 right-5 sm:right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-[#E5E9F2]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Chatbot Trigger Button */}
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
          title={isOpen ? "Close AI Assistant" : "Chat with AI Assistant"}
          className={cn(
            "relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full text-white shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#004AAD]/40 transition-colors duration-200 cursor-pointer motion-reduce:transform-none border border-white/20",
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
              {/* Status indicator */}
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-[#FFC30C] border-2 border-[#004AAD] flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. WhatsApp Floating Action (Always Positioned Below Chatbot) */}
      <div className="pointer-events-auto">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.08, ease: EASINGS.luxury }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with us on WhatsApp (+91 9551080470)"
          title="Chat on WhatsApp"
          className="relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 transition-colors duration-200 cursor-pointer motion-reduce:transform-none border border-white/20"
        >
          <WhatsAppIcon className="h-7 w-7 text-white drop-shadow-xs" aria-hidden="true" />

          {/* Small red notification dot on the button border */}
          <span
            className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600 border-2 border-white shadow-xs" />
          </span>
        </motion.a>
      </div>
    </aside>
  );
}
