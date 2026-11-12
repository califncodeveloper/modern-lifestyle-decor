"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  isLoading,
  placeholder = "Ask about blinds, nets, curtains or quotes...",
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea to fit content up to max-height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSendMessage(trimmed);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isSendDisabled = isLoading || input.trim().length === 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
      className="flex items-end gap-2 p-3 bg-white border-t border-[#E5E9F2]"
    >
      <div className="relative flex-1">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          maxLength={1000}
          aria-label="Type your message"
          className="w-full resize-none rounded-xl border border-[#CDD5E2] bg-[#F8F9FC] px-3.5 py-2.5 text-base sm:text-sm text-[#151717] placeholder:text-[#737373] focus:border-[#004AAD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004AAD]/20 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed max-h-[120px]"
        />
      </div>

      <button
        type="submit"
        disabled={isSendDisabled}
        aria-label="Send message"
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#004AAD] text-white shadow-xs hover:bg-[#003A8C] hover:shadow-md active:bg-[#002D6E] active:scale-95 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 cursor-pointer motion-reduce:transform-none"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
