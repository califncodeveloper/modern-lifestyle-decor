"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { UIChatMessage, ChatAction } from "@/types/chat";
import {
  PRIMARY_WHATSAPP_NUMBER,
  createWhatsAppChatbotQuoteUrl,
  createWhatsAppChatbotEnquiryUrl,
} from "@/utils/whatsapp";

export const INITIAL_GREETING =
  "Hi! Welcome to Modern LifeStyle Decor. How can I help you today?";

export const SUGGESTED_QUICK_QUESTIONS = [
  "What mosquito net options do you offer?",
  "What types of blinds are available?",
  "Do you provide customised curtains?",
  "Where is your showroom located?",
  "How can I contact your team?",
] as const;

/**
 * Derives contextual action buttons for a message based on content keywords.
 */
function deriveActionsForContent(content: string, userQuery?: string): ChatAction[] {
  const combined = `${content} ${userQuery || ""}`.toLowerCase();
  const actions: ChatAction[] = [];

  // Mosquito net actions
  if (combined.includes("mosquito") || combined.includes("mesh")) {
    actions.push({
      id: "action-mosquito-service",
      label: "View Mosquito Nets",
      type: "link",
      href: "/services/mosquito-nets",
    });
    actions.push({
      id: "action-mosquito-whatsapp",
      label: "Ask on WhatsApp",
      type: "whatsapp",
      href: createWhatsAppChatbotQuoteUrl("Mosquito Nets", PRIMARY_WHATSAPP_NUMBER),
      isExternal: true,
    });
    return actions;
  }

  // Blinds actions
  if (combined.includes("blind") || combined.includes("zebra") || combined.includes("roller")) {
    actions.push({
      id: "action-blinds-service",
      label: "Explore Designer Blinds",
      type: "link",
      href: "/services/blinds",
    });
    actions.push({
      id: "action-blinds-whatsapp",
      label: "Request a Quote",
      type: "whatsapp",
      href: createWhatsAppChatbotQuoteUrl("Designer Blinds", PRIMARY_WHATSAPP_NUMBER),
      isExternal: true,
    });
    return actions;
  }

  // Curtains actions
  if (combined.includes("curtain") || combined.includes("fabric") || combined.includes("blackout")) {
    actions.push({
      id: "action-curtains-service",
      label: "View Customised Curtains",
      type: "link",
      href: "/services/customised-curtains",
    });
    actions.push({
      id: "action-curtains-whatsapp",
      label: "Request Fabric Consultation",
      type: "whatsapp",
      href: createWhatsAppChatbotQuoteUrl("Customised Curtains", PRIMARY_WHATSAPP_NUMBER),
      isExternal: true,
    });
    return actions;
  }

  // Contact or showroom actions
  if (
    combined.includes("showroom") ||
    combined.includes("contact") ||
    combined.includes("phone") ||
    combined.includes("location") ||
    combined.includes("where")
  ) {
    actions.push({
      id: "action-contact-page",
      label: "Visit Contact Page",
      type: "link",
      href: "/contact",
    });
    actions.push({
      id: "action-contact-whatsapp",
      label: "Chat on WhatsApp (+91 9551080470)",
      type: "whatsapp",
      href: createWhatsAppChatbotEnquiryUrl("Location & Contact", PRIMARY_WHATSAPP_NUMBER),
      isExternal: true,
    });
    return actions;
  }

  // Price / Quote actions
  if (combined.includes("price") || combined.includes("quote") || combined.includes("cost")) {
    actions.push({
      id: "action-quote-whatsapp",
      label: "Request a Free Quote on WhatsApp",
      type: "whatsapp",
      href: createWhatsAppChatbotQuoteUrl("Customized Quote", PRIMARY_WHATSAPP_NUMBER),
      isExternal: true,
    });
    return actions;
  }

  return actions;
}

const DEFAULT_WELCOME_MESSAGE: UIChatMessage = {
  id: "msg-welcome-0",
  role: "assistant",
  content: INITIAL_GREETING,
  createdAt: new Date().toISOString(),
  status: "idle",
  actions: [
    {
      id: "action-initial-whatsapp",
      label: "Talk to Our Team on WhatsApp",
      type: "whatsapp",
      href: createWhatsAppChatbotEnquiryUrl("General Assistance", PRIMARY_WHATSAPP_NUMBER),
      isExternal: true,
    },
  ],
};

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<UIChatMessage[]>([DEFAULT_WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Clean up any ongoing fetch on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasInteracted(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setIsMinimized(false);
    setHasInteracted(true);
  }, []);

  const minimizeChat = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const clearConversation = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsLoading(false);
    setError(null);
    setMessages([
      {
        ...DEFAULT_WELCOME_MESSAGE,
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  const sendMessage = useCallback(
    async (rawContent: string) => {
      const content = rawContent.trim();
      if (!content || isLoading) return;

      setError(null);
      setHasInteracted(true);

      const userMsgId = `msg-user-${Date.now()}`;
      const userMessage: UIChatMessage = {
        id: userMsgId,
        role: "user",
        content,
        createdAt: new Date().toISOString(),
        status: "idle",
      };

      const newHistory = [...messages, userMessage];
      setMessages(newHistory);
      setIsLoading(true);

      // Abort any previous pending request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const payloadMessages = newHistory
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((m) => ({
            role: m.role,
            content: m.content,
          }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: payloadMessages,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(
            errData.message || "Failed to receive response from assistant. Please try again."
          );
        }

        const data = await response.json();
        const assistantReplyContent =
          data.message?.content ||
          "Thank you for contacting Modern LifeStyle Decor. How may I assist you further?";

        const assistantMsgId = `msg-assistant-${Date.now()}`;
        const actions = deriveActionsForContent(assistantReplyContent, content);

        const assistantMessage: UIChatMessage = {
          id: assistantMsgId,
          role: "assistant",
          content: assistantReplyContent,
          createdAt: new Date().toISOString(),
          status: "idle",
          actions: actions.length > 0 ? actions : undefined,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        const fallbackMsg =
          err instanceof Error
            ? err.message
            : "We are currently experiencing connection difficulties. Please connect with our team on WhatsApp for immediate support.";

        setError(fallbackMsg);

        // Add error assistant message with WhatsApp fallback
        const errorMsgId = `msg-error-${Date.now()}`;
        const errorAssistantMessage: UIChatMessage = {
          id: errorMsgId,
          role: "assistant",
          content:
            "I apologize, but I am having trouble connecting right now. Our team is readily available on WhatsApp to answer your questions and provide quotations directly.",
          createdAt: new Date().toISOString(),
          status: "error",
          error: fallbackMsg,
          actions: [
            {
              id: "action-error-whatsapp",
              label: "Chat on WhatsApp (+91 9551080470)",
              type: "whatsapp",
              href: createWhatsAppChatbotEnquiryUrl("Assistant Connection Help", PRIMARY_WHATSAPP_NUMBER),
              isExternal: true,
            },
          ],
        };

        setMessages((prev) => [...prev, errorAssistantMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const retryLastMessage = useCallback(() => {
    // Find the last user message
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser) return;

    // Remove any trailing error message
    setMessages((prev) => {
      const copy = [...prev];
      if (copy[copy.length - 1]?.status === "error") {
        copy.pop();
      }
      return copy;
    });

    sendMessage(lastUser.content);
  }, [messages, sendMessage]);

  return {
    isOpen,
    isMinimized,
    messages,
    isLoading,
    error,
    hasInteracted,
    openChat,
    closeChat,
    toggleOpen,
    minimizeChat,
    clearConversation,
    sendMessage,
    retryLastMessage,
  };
}

