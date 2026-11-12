"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Phone, Mail, ArrowRight } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/common/Button";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { EASINGS } from "@/config/motion";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.35,
      ease: EASINGS.luxury,
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.45,
      ease: EASINGS.luxury,
    },
  },
};

const linkContainerVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
};

const linkItemVariants = {
  closed: { opacity: 0, x: -16 },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: EASINGS.luxury,
    },
  },
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const { stop, start } = useLenisScroll();

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      stop();
    } else {
      document.body.style.overflow = "";
      start();
    }

    return () => {
      document.body.style.overflow = "";
      start();
    };
  }, [isOpen, stop, start]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-[#151717]/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-white shadow-2xl border-b border-[#E5E9F2] flex flex-col pt-[env(safe-area-inset-top,0px)]"
          >
            {/* Top Bar inside Menu */}
            <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 border-b border-[#E5E9F2]">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs"
                aria-label="Modern LifeStyle Decor - Home"
              >
                <div className="relative h-9 w-40 sm:h-10 sm:w-48">
                  <Image
                    src="/images/brand/logo-horizontal.svg"
                    alt="Modern LifeStyle Decor"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-md text-[#151717] hover:bg-[#F8F9FC] hover:text-[#004AAD] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Menu Links Content */}
            <div className="px-5 pt-6 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] sm:px-8 space-y-6 flex-1 overflow-y-auto">
              <motion.nav
                variants={linkContainerVariants}
                initial="closed"
                animate="open"
                className="space-y-1.5"
                aria-label="Mobile Navigation"
              >
                {mainNavItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <motion.div key={item.href} variants={linkItemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between py-3 px-3.5 rounded-lg text-base font-medium tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] ${
                          isActive
                            ? "bg-[#EEF4FD] text-[#004AAD] font-semibold"
                            : "text-[#151717] hover:bg-[#F8F9FC] hover:text-[#004AAD]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                          )}
                          {item.title}
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                            isActive ? "text-[#004AAD]" : "text-neutral-400"
                          }`}
                        />
                      </Link>

                      {/* Sub-services if item has children */}
                      {item.children && (
                        <div className="ml-5 mt-1 mb-2 pl-3 border-l-2 border-[#E5E9F2] space-y-1">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={onClose}
                                className={`block py-1.5 px-3 rounded text-xs tracking-wider uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] ${
                                  isSubActive
                                    ? "text-[#004AAD] font-semibold"
                                    : "text-neutral-500 hover:text-[#004AAD]"
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link href="/contact" onClick={onClose} className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </div>

              {/* Direct Quick Contact Info in Menu */}
              <div className="pt-4 border-t border-[#E5E9F2] space-y-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-[#004AAD]">
                  Direct Contact & Support
                </p>
                <div className="space-y-2 text-xs text-neutral-600">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-neutral-700 hover:text-[#004AAD] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs py-0.5"
                  >
                    <Phone className="h-4 w-4 text-[#FFC30C]" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2.5 text-neutral-700 hover:text-[#004AAD] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs py-0.5"
                  >
                    <Mail className="h-4 w-4 text-[#004AAD]" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
                <p className="text-[0.6875rem] tracking-wider uppercase text-neutral-400 font-medium">
                  {siteConfig.businessType}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
