"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ArrowUp,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Container } from "./Container";
import { quickLinks, productLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { YouTubeIcon } from "@/components/common/BrandIcons";

export function Footer() {
  const currentYear = 2026;
  const { scrollTo } = useLenisScroll();

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.2 });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="w-full border-t border-[#262626] bg-[#151717] text-neutral-300"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        {/* Main 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 — Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
              aria-label="Modern LifeStyle Decor - Home"
            >
              <div className="relative h-11 w-52 sm:h-12 sm:w-56">
                <Image
                  src="/images/brand/logo-horizontal-dark.svg"
                  alt="Modern LifeStyle Decor"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Business model badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC30C]/30 bg-[#FFC30C]/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-[#FFC30C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              {siteConfig.businessType}
            </div>

            <p className="max-w-sm text-sm font-light leading-relaxed text-neutral-400">
              Premier manufacturer, wholesaler, and retailer of architectural window blinds,
              precision pleated mosquito nets, and bespoke customised drapery.
            </p>

            {/* YouTube Channel Highlight */}
            <div className="pt-2">
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md border border-[#2E2E32] bg-[#1E2020] px-3.5 py-2 text-xs font-medium text-neutral-300 transition-all hover:border-[#FFC30C]/40 hover:bg-[#252828] hover:text-[#FFC30C]"
                title="Watch our installations on YouTube"
              >
                <YouTubeIcon className="h-4 w-4 text-[#FF0000] group-hover:scale-110 transition-transform" />
                <span>Official YouTube Channel</span>
                <ExternalLink className="h-3 w-3 text-neutral-500 group-hover:text-[#FFC30C]" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-[#004AAD]" />
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-neutral-400 transition-colors hover:text-white hover:translate-x-0.5 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Products (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Our Products
            </h3>
            <div className="mt-2 h-0.5 w-8 bg-[#FFC30C]" />
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-light text-neutral-400 transition-colors hover:text-white"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#004AAD] group-hover:text-[#FFC30C] transition-colors" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-[#262626]">
              <p className="text-[0.6875rem] uppercase tracking-wider text-neutral-500">
                Services Offered
              </p>
              <p className="mt-1 text-xs text-neutral-400 font-light">
                On-site Measurement &bull; Bespoke Manufacturing &bull; Architectural Installation
              </p>
            </div>
          </div>

          {/* Column 4 — Contact Information (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Contact Information
              </h3>
              <div className="mt-2 h-0.5 w-8 bg-[#004AAD]" />
            </div>

            {/* Proprietor Information */}
            <div className="rounded-md border border-[#2E2E32] bg-[#1A1C1C] p-3.5">
              <span className="text-[0.6875rem] uppercase tracking-wider text-[#FFC30C] font-semibold">
                Proprietor
              </span>
              <p className="text-sm font-medium text-white mt-0.5">
                {siteConfig.contact.proprietor}
              </p>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="mt-2 flex items-center gap-2 text-xs text-neutral-300 hover:text-[#FFC30C] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#004AAD]" />
                <span className="font-mono">{siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Email Contact */}
            <div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-xs text-neutral-400 hover:text-white transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 text-[#004AAD] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Additional Contacts */}
            <div className="pt-2 border-t border-[#262626] space-y-1.5">
              <span className="text-[0.6875rem] uppercase tracking-wider text-neutral-500 font-semibold block">
                Additional Support & Operations
              </span>
              {siteConfig.contact.team
                .filter((member) => member.name !== siteConfig.contact.proprietor)
                .map((member) => (
                  <div key={member.name} className="flex flex-wrap items-center justify-between gap-1 text-xs py-0.5">
                    <span className="text-neutral-400 font-light">{member.name}:</span>
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="font-mono text-neutral-300 hover:text-[#FFC30C] transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#262626] pt-8 sm:flex-row">
          <p className="text-xs font-light text-neutral-500 text-center sm:text-left">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Precision architectural window treatments.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-xs text-neutral-400 transition-colors hover:text-white"
            >
              Factory & Showroom
            </Link>

            {/* Back to top link in footer */}
            <button
              type="button"
              onClick={handleScrollToTop}
              className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-400 transition-colors hover:text-[#FFC30C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30C]"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
