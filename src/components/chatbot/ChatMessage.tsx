"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, ExternalLink, RotateCcw, ShieldCheck } from "lucide-react";
import type { UIChatMessage } from "@/types/chat";
import { FormattedChatContent } from "./FormattedChatContent";
import { cn } from "@/utils/cn";
import { EASINGS } from "@/config/motion";

interface ChatMessageProps {
  message: UIChatMessage;
  onRetry?: () => void;
}

function formatTimestamp(isoString?: string | Date): string {
  if (!isoString) return "";
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}

export function ChatMessage({ message, onRetry }: ChatMessageProps) {
  const isUser = message.role === "user";
  const timestamp = formatTimestamp(message.createdAt);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: EASINGS.luxury }}
      className={cn(
        "flex w-full mb-3.5",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn("flex max-w-[85%] sm:max-w-[80%]", isUser ? "flex-row-reverse" : "flex-row")}>
        {/* Assistant Avatar */}
        {!isUser && (
          <div className="flex-shrink-0 mr-2 mt-1">
            <div className="h-7 w-7 rounded-full bg-[#004AAD] text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="h-4 w-4 text-[#FFC30C]" aria-hidden="true" />
            </div>
          </div>
        )}

        <div className="flex flex-col">
          {/* Bubble */}
          <div
            className={cn(
              "px-3.5 py-2.5 text-sm leading-relaxed transition-colors",
              isUser
                ? "bg-[#004AAD] text-white rounded-2xl rounded-tr-xs shadow-xs"
                : "bg-[#F8F9FC] text-[#151717] border border-[#E5E9F2] rounded-2xl rounded-tl-xs shadow-xs"
            )}
          >
            {/* Formatted Text Content */}
            <div className="space-y-1">
              <FormattedChatContent content={message.content} isUser={isUser} />
            </div>

            {/* Error Message and Retry Action */}
            {message.status === "error" && onRetry && (
              <div className="mt-2.5 pt-2 border-t border-red-200 flex items-center justify-between gap-2">
                <span className="text-xs text-red-600 font-medium">Message could not be processed</span>
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#004AAD] hover:text-[#003A8C] bg-white border border-[#004AAD]/30 px-2 py-1 rounded-md active:scale-95 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
                >
                  <RotateCcw className="h-3 w-3" aria-hidden="true" />
                  <span>Retry</span>
                </button>
              </div>
            )}
          </div>

          {/* Timestamp */}
          {timestamp && (
            <div
              className={cn(
                "text-[10px] text-[#737373] mt-1 px-1",
                isUser ? "text-right" : "text-left"
              )}
            >
              {timestamp}
            </div>
          )}

          {/* Contextual Action Buttons */}
          {message.actions && message.actions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {message.actions.map((act) => {
                if (act.type === "whatsapp") {
                  return (
                    <a
                      key={act.id}
                      href={act.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366]/20 border border-[#25D366]/30 px-3 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" aria-hidden="true" />
                      <span>{act.label}</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" aria-hidden="true" />
                    </a>
                  );
                }

                if (act.type === "link" && act.href) {
                  return (
                    <Link
                      key={act.id}
                      href={act.href}
                      className="inline-flex items-center space-x-1 text-xs font-medium bg-white hover:bg-[#EEF4FD] text-[#004AAD] border border-[#E5E9F2] hover:border-[#004AAD]/40 px-3 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
                    >
                      <span>{act.label}</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" aria-hidden="true" />
                    </Link>
                  );
                }

                return null;
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
