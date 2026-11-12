"use client";

import { useEffect } from "react";
import { useChatbot } from "@/hooks/useChatbot";
import { ChatbotLauncher } from "./ChatbotLauncher";
import { ChatbotPanel } from "./ChatbotPanel";

export function ChatbotWidget() {
  const {
    isOpen,
    isMinimized,
    messages,
    isLoading,
    hasInteracted,
    toggleOpen,
    closeChat,
    minimizeChat,
    clearConversation,
    sendMessage,
    retryLastMessage,
  } = useChatbot();

  // Close panel on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeChat();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeChat]);

  return (
    <>
      <ChatbotPanel
        isOpen={isOpen}
        isMinimized={isMinimized}
        messages={messages}
        isLoading={isLoading}
        onClose={closeChat}
        onMinimize={minimizeChat}
        onClear={clearConversation}
        onSendMessage={sendMessage}
        onRetry={retryLastMessage}
      />
      <ChatbotLauncher
        isOpen={isOpen}
        onToggle={toggleOpen}
        hasInteracted={hasInteracted}
      />
    </>
  );
}

