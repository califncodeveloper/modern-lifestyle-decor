"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PRIMARY_WHATSAPP_NUMBER } from "@/utils/whatsapp";

interface FormattedChatContentProps {
  content: string;
  isUser?: boolean;
}

/**
 * Parses inline formatting:
 * - Markdown bold (**text**)
 * - Markdown links ([label](url))
 * - Internal website routes (/services/..., /contact, /gallery, /about)
 * - Bare HTTP/HTTPS URLs
 * - Direct WhatsApp/phone numbers (+91 9551080470)
 */
function renderInlineContent(text: string, isUser: boolean): React.ReactNode[] {
  // Regex to split on markdown links, bold spans, URLs, internal routes, and WhatsApp numbers
  const tokenRegex =
    /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|https?:\/\/[^\s)]+|\/(?:services(?:\/[a-z0-9-]+)?|contact|gallery|about|products(?:\/[a-z0-9-]+)?)|(?:\+91[\s-]?)?9551080470)/g;

  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // 1. Markdown link: [label](url)
    const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLinkMatch) {
      const [, label, url] = mdLinkMatch;
      const isInternal = url.startsWith("/");
      if (isInternal) {
        return (
          <Link
            key={index}
            href={url}
            className={
              isUser
                ? "font-semibold underline decoration-white/70 hover:decoration-white transition-colors"
                : "font-semibold text-[#004AAD] hover:text-[#003A8C] underline decoration-[#004AAD]/40 hover:decoration-[#003A8C] transition-colors"
            }
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isUser
              ? "font-semibold underline decoration-white/70 hover:decoration-white inline-flex items-center gap-0.5"
              : "font-semibold text-[#004AAD] hover:text-[#003A8C] underline decoration-[#004AAD]/40 hover:decoration-[#003A8C] inline-flex items-center gap-0.5 transition-colors"
          }
        >
          <span>{label}</span>
          <ExternalLink className="h-3 w-3 inline opacity-70" aria-hidden="true" />
        </a>
      );
    }

    // 2. Bold text: **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <strong
          key={index}
          className={isUser ? "font-bold text-white" : "font-semibold text-[#151717]"}
        >
          {inner}
        </strong>
      );
    }

    // 3. Absolute URL
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isUser
              ? "font-semibold underline decoration-white/70 hover:decoration-white inline-flex items-center gap-0.5 break-all"
              : "font-semibold text-[#004AAD] hover:text-[#003A8C] underline decoration-[#004AAD]/40 hover:decoration-[#003A8C] inline-flex items-center gap-0.5 break-all transition-colors"
          }
        >
          <span>{part}</span>
          <ExternalLink className="h-3 w-3 inline opacity-70" aria-hidden="true" />
        </a>
      );
    }

    // 4. Internal site paths: /services/..., /contact, /gallery, etc.
    if (
      part.startsWith("/services") ||
      part.startsWith("/contact") ||
      part.startsWith("/gallery") ||
      part.startsWith("/about") ||
      part.startsWith("/products")
    ) {
      return (
        <Link
          key={index}
          href={part}
          className={
            isUser
              ? "font-semibold underline decoration-white/70 hover:decoration-white transition-colors"
              : "font-semibold text-[#004AAD] hover:text-[#003A8C] underline decoration-[#004AAD]/40 hover:decoration-[#003A8C] transition-colors"
          }
        >
          {part}
        </Link>
      );
    }

    // 5. WhatsApp / Phone number match
    if (part.includes("9551080470")) {
      return (
        <a
          key={index}
          href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isUser
              ? "font-semibold underline decoration-white/70 hover:decoration-white"
              : "font-semibold text-[#004AAD] hover:text-[#003A8C] underline decoration-[#004AAD]/40 hover:decoration-[#003A8C] transition-colors"
          }
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

/**
 * Renders structured assistant messages with support for:
 * - Headings (### or **Title:**)
 * - Bulleted lists (•, -, *, 1.) with brand accents
 * - Clean distinct paragraphs
 * - Interactive internal and external links
 */
export function FormattedChatContent({ content, isUser = false }: FormattedChatContentProps) {
  if (isUser) {
    return <div className="whitespace-pre-wrap">{renderInlineContent(content, true)}</div>;
  }

  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let blockIndex = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${blockIndex++}`} className="my-2 space-y-1.5 pl-0.5">
          {currentList.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-[13px] text-[#151717] leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#004AAD] flex-shrink-0" />
              <span className="flex-1">{renderInlineContent(item, false)}</span>
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    // Check for explicit markdown headings (# Title, ## Title, ### Title)
    if (trimmed.startsWith("#")) {
      flushList();
      const headingText = trimmed.replace(/^#{1,4}\s+/, "").replace(/\*\*$/, "").replace(/^\*\*/, "");
      elements.push(
        <h4
          key={`heading-${blockIndex++}`}
          className="font-bold text-xs sm:text-sm text-[#004AAD] mt-2.5 mb-1 tracking-tight first:mt-0"
        >
          {headingText}
        </h4>
      );
      return;
    }

    // Check for standalone bold heading: **Title:** or **Title**
    if (/^(\*\*[^*]+\*\*:?)$/.test(trimmed)) {
      flushList();
      const headingText = trimmed.replace(/^\*\*/, "").replace(/\*\*:?$/, "");
      elements.push(
        <h4
          key={`bold-heading-${blockIndex++}`}
          className="font-bold text-xs sm:text-sm text-[#004AAD] mt-2.5 mb-1 tracking-tight first:mt-0"
        >
          {headingText}
        </h4>
      );
      return;
    }

    // Check for bullet lists (• Item, - Item, * Item, 1. Item)
    const bulletMatch = trimmed.match(/^(?:[•\-*]|\d+\.)\s+(.+)$/);
    if (bulletMatch) {
      currentList.push(bulletMatch[1]);
      return;
    }

    // Regular paragraph line
    flushList();
    elements.push(
      <p
        key={`p-${blockIndex++}`}
        className="text-xs sm:text-[13px] leading-relaxed text-[#151717] my-1"
      >
        {renderInlineContent(trimmed, false)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-0.5">{elements}</div>;
}
