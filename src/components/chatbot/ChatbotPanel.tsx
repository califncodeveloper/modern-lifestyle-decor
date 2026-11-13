"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Minus,
  MessageCircle,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { UIChatMessage } from "@/types/chat";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatbotWelcome } from "./ChatbotWelcome";
import { TypingIndicator } from "./TypingIndicator";
import { PRIMARY_WHATSAPP_NUMBER } from "@/utils/whatsapp";
import { EASINGS } from "@/config/motion";
import { cn } from "@/utils/cn";

interface ChatbotPanelProps {
  isOpen: boolean;
  isMinimized: boolean;
  messages: UIChatMessage[];
  isLoading: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onClear: () => void;
  onSendMessage: (content: string) => void;
  onRetry: () => void;
}

export function ChatbotPanel({
  isOpen,
  isMinimized,
  messages,
  isLoading,
  onClose,
  onMinimize,
  onClear,
  onSendMessage,
  onRetry,
}: ChatbotPanelProps) {
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages change or loading state toggles
  useEffect(() => {
    if (scrollViewportRef.current) {
      scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const showWelcome = messages.length <= 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="chatbot-window"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.28, ease: EASINGS.luxury }}
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl border border-[#E5E9F2] rounded-2xl",
            isMinimized
              ? "inset-x-3 bottom-[calc(9.25rem+env(safe-area-inset-bottom,0px))] sm:inset-auto sm:right-6 sm:bottom-[10rem] sm:w-[380px] h-auto top-auto"
              : "inset-x-3 bottom-[calc(9.25rem+env(safe-area-inset-bottom,0px))] top-14 sm:inset-auto sm:right-6 sm:bottom-[10rem] sm:w-[420px] sm:h-[600px] sm:max-h-[75dvh]"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Modern LifeStyle Decor AI Chatbot"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#004AAD] text-white shadow-xs">
            <div className="flex items-center space-x-2.5">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Sparkles className="h-4 w-4 text-[#FFC30C]" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h2 className="text-sm font-bold tracking-tight text-white">
                    Modern LifeStyle Decor
                  </h2>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] text-[#EEF4FD]/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI Assistant • Online</span>
                </div>
              </div>
            </div>

            {/* Action Buttons in Header */}
            <div className="flex items-center space-x-1">
              {/* Direct WhatsApp Shortcut */}
              <a
                href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp (+91 9551080470)"
                aria-label="Chat on WhatsApp"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
              </a>

              {/* Clear Chat History */}
              <button
                type="button"
                onClick={onClear}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>

              {/* Minimize */}
              <button
                type="button"
                onClick={onMinimize}
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label={isMinimized ? "Expand" : "Minimize"}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                title="Close chat"
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Panel Content (Hidden if Minimized) */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                key="panel-body"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100%" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: EASINGS.luxury }}
                className="flex flex-col flex-1 overflow-hidden"
              >
                {/* Scrollable Message List */}
                <div
                  ref={scrollViewportRef}
                  data-lenis-prevent="true"
                  className="flex-1 overflow-y-auto p-4 space-y-1 bg-[#FFFFFF] overscroll-contain"
                >
                  {/* Welcome Card if at beginning */}
                  {showWelcome && (
                    <ChatbotWelcome
                      onSelectQuestion={onSendMessage}
                      isLoading={isLoading}
                    />
                  )}

                  {/* Messages */}
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} onRetry={onRetry} />
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="flex justify-start mb-3">
                      <TypingIndicator />
                    </div>
                  )}
                </div>

                {/* Panel Footer: Input & Disclaimer */}
                <div className="bg-[#F8F9FC] border-t border-[#E5E9F2]">
                  <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
                  <div className="px-3 py-1.5 bg-[#F1F4FA] text-center text-[10px] text-[#737373] flex items-center justify-center space-x-1">
                    <span>AI responses are indicative. For quotes:</span>
                    <a
                      href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#004AAD] hover:underline inline-flex items-center space-x-0.5"
                    >
                      <span>WhatsApp +91 9551080470</span>
                      <ExternalLink className="h-2 w-2" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
