"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { featuredProducts } from "@/data/homepage";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

type CategoryFilter = "all" | "mosquito-nets" | "curtains";

const filterTabs = [
  { id: "all" as CategoryFilter, label: "All Collections" },
  { id: "mosquito-nets" as CategoryFilter, label: "Mosquito Nets" },
  { id: "curtains" as CategoryFilter, label: "Customised Curtains" },
];

export function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredProducts =
    activeTab === "all"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeTab);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 border-b border-neutral-100">
      <Container>
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 sm:mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="CURATED WINDOW TREATMENTS"
              title="Explore Our Collections."
              description="Discover precision-crafted mosquito nets, architectural window blinds, and bespoke drapery tailored to your spaces."
              align="center"
              eyebrowColor="blue"
            />
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none",
                    isActive
                      ? "bg-[#004AAD] text-white shadow-xs"
                      : "bg-[#F8F9FC] text-[#525252] hover:bg-[#EEF4FD] hover:text-[#004AAD] hover:border-[#CDD5E2] border border-neutral-200/80"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between overflow-hidden rounded-xs border border-neutral-200/80 bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#004AAD]/40 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                    {/* Category Label Pill */}
                    <div className="absolute top-3 left-3 z-10 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#004AAD]">
                      {product.categoryLabel}
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-xs bg-[#151717]/80 backdrop-blur-xs px-2 py-0.5 text-[10px] font-medium text-white">
                        <Sparkles className="h-2.5 w-2.5 text-[#FFC30C]" />
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-5">
                    <h4 className="font-heading text-lg font-medium tracking-tight text-[#151717] group-hover:text-[#004AAD] transition-colors">
                      {product.name}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#737373] line-clamp-2 font-light">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Explore Action Button */}
                <div className="p-5 pt-0 mt-auto">
                  <Link
                    href={product.href}
                    className="inline-flex w-full min-h-[44px] items-center justify-between border-t border-neutral-100 pt-2 text-xs font-semibold uppercase tracking-wider text-[#004AAD] group-hover:text-[#003A8C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-xs"
                  >
                    <span>Explore Product</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
