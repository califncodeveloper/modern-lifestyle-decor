"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import {
  galleryCategories,
  getGalleryItemsByCategory,
} from "@/data/gallery";
import type { GalleryCategory } from "@/types/gallery";
import { GalleryFilters } from "./GalleryFilters";
import { GalleryGrid } from "./GalleryGrid";

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const filteredItems = getGalleryItemsByCategory(activeCategory);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        {/* Category Filter Navigation */}
        <div className="mb-10 sm:mb-14">
          <GalleryFilters
            categories={galleryCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Gallery Masonry Grid */}
        <GalleryGrid
          items={filteredItems}
          onResetCategory={() => setActiveCategory("all")}
        />
      </Container>
    </section>
  );
}

