"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { Container } from "./Container";
import { Button } from "@/components/common/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/utils/cn";
import { EASINGS } from "@/config/motion";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Monitor scroll position with a clean, responsive threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E9F2] shadow-xs"
            : "bg-white/90 backdrop-blur-xs border-b border-transparent"
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm"
            aria-label="Modern LifeStyle Decor - Home"
          >
            <div
              className={cn(
                "relative transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isScrolled
                  ? "h-8.5 w-36 xs:h-9 xs:w-40 sm:h-10 sm:w-48 max-w-[calc(100vw-5rem)]"
                  : "h-9 w-38 xs:h-9.5 xs:w-44 sm:h-12 sm:w-56 max-w-[calc(100vw-5rem)]"
              )}
            >
              <Image
                src="/images/brand/logo-horizontal.svg"
                alt="Modern LifeStyle Decor"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-7 lg:space-x-9"
          >
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const hasChildren = Boolean(item.children && item.children.length > 0);

              if (hasChildren) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group inline-flex items-center gap-1.5 py-1 text-[0.8125rem] font-medium tracking-wider uppercase transition-colors relative rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2",
                        isActive
                          ? "text-[#004AAD] font-semibold"
                          : "text-[#525252] hover:text-[#004AAD]"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          servicesDropdownOpen && "rotate-180"
                        )}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#004AAD]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: EASINGS.luxury }}
                          className="absolute top-full left-0 mt-2 w-72 rounded-lg border border-[#E5E9F2] bg-white p-3 shadow-xl z-50 origin-top"
                        >
                          <div className="space-y-1">
                            {item.children?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block rounded-md p-2.5 transition-colors hover:bg-[#F8F9FC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] group"
                              >
                                <div className="text-xs font-semibold uppercase tracking-wider text-[#151717] group-hover:text-[#004AAD] transition-colors">
                                  {subItem.title}
                                </div>
                                {subItem.description && (
                                  <p className="mt-0.5 text-[0.75rem] text-neutral-500 font-light line-clamp-1">
                                    {subItem.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-[#E5E9F2]">
                            <Link
                              href="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-center justify-between px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#004AAD] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-[0.8125rem] font-medium tracking-wider uppercase transition-colors rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2",
                    isActive
                      ? "text-[#004AAD] font-semibold"
                      : "text-[#525252] hover:text-[#004AAD]"
                  )}
                >
                  {item.title}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#004AAD]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" tabIndex={-1}>
              <Button
                variant="primary"
                size="sm"
                className="shadow-xs hover:shadow-md transition-shadow"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-[#151717] hover:bg-[#F8F9FC] hover:text-[#004AAD] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {/* Responsive Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
