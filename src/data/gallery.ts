import type {
  GalleryCategory,
  GalleryCategoryFilter,
  GalleryItemData,
} from "@/types/gallery";

export const galleryCategories: GalleryCategoryFilter[] = [
  { id: "all", label: "All", count: 24 },
  { id: "mosquito-nets", label: "Mosquito Nets", count: 7 },
  { id: "designer-blinds", label: "Designer Blinds", count: 6 },
  { id: "customised-curtains", label: "Customised Curtains", count: 7 },
  { id: "curtain-accessories", label: "Curtain Accessories", count: 4 },
  { id: "installations-projects", label: "Installations & Projects", count: 0 },
];

export const galleryItems: GalleryItemData[] = [
  // 1. Mosquito Nets (7 Items)
  {
    id: "ss-open-window",
    title: "SS Open Window",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-ss-open-window.jpg",
    description:
      "Hinged window frame featuring high-grade stainless steel wire mesh, allowing fresh air circulation while keeping insects out.",
    imageType: "catalogue",
    badge: "Hinged Frame",
    highlights: ["Stainless Steel Mesh", "Fresh Air Ventilation", "Durable Framing"],
    aspectRatio: "4/3",
  },
  {
    id: "ss-open-main-door",
    title: "SS Open Main Door",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-ss-open-door.jpg",
    description:
      "Robust hinged entrance door mosquito net with reinforced frame and stainless steel mesh for primary door protection.",
    imageType: "catalogue",
    badge: "Main Entrance",
    highlights: ["Heavy-Duty Mesh", "Secure Latches", "Solid Hinged Construction"],
    aspectRatio: "3/4",
  },
  {
    id: "pleated-mosquito-net",
    title: "Pleated Mosquito Net",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-pleated-net.jpg",
    description:
      "Smooth accordion-folding pleated mesh system that slides neatly along side channels for compact windows and doors.",
    imageType: "catalogue",
    badge: "Fiber & SS Mesh",
    highlights: ["Accordion Retraction", "Low Profile Track", "Space Saving"],
    aspectRatio: "4/3",
  },
  {
    id: "pleated-heavy-partition",
    title: "Pleated Heavy Partition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-pleated-heavy-partition.jpg",
    description:
      "Heavy-duty pleated barrier screen designed for large openings, French doors, balconies and wide spatial partitions.",
    imageType: "catalogue",
    badge: "Wide Openings",
    highlights: ["Reinforced Section", "Balcony & French Doors", "Smooth Glide"],
    aspectRatio: "16/10",
  },
  {
    id: "ss-sliding-mosquito-mesh",
    title: "SS Sliding Mosquito Mesh",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-ss-sliding-mesh.jpg",
    description:
      "Smooth-gliding sliding frame fitted with stainless steel wire mesh, designed to integrate with sliding aluminium and UPVC windows.",
    imageType: "catalogue",
    badge: "Sliding Systems",
    highlights: ["Smooth Rollers", "UPVC & Aluminium Fit", "Clear Visibility"],
    aspectRatio: "4/3",
  },
  {
    id: "honeycomb-partition",
    title: "Honeycomb Partition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-honeycomb-partition.jpg",
    description:
      "Cellular pleated folding partition offering acoustic dampening, light moderation and insect protection for open interiors.",
    imageType: "catalogue",
    badge: "Cellular Structure",
    highlights: ["Acoustic Dampening", "Light Moderation", "Room Division"],
    aspectRatio: "3/4",
  },
  {
    id: "pvc-pleated-partition",
    title: "PVC Pleated Partition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/product-pvc-pleated-partition.jpg",
    description:
      "Versatile folding accordion partition made with durable PVC material to demarcate indoor spaces and control airflow.",
    imageType: "catalogue",
    badge: "Flexible Division",
    highlights: ["Durable PVC Material", "Easy Operation", "Flexible Demarcation"],
    aspectRatio: "16/10",
  },

  // 2. Designer Blinds (6 Items)
  {
    id: "roller-blinds",
    title: "Roller Blinds",
    category: "designer-blinds",
    categoryLabel: "Designer Blinds",
    image: "/images/products/product-roller-blinds.jpg",
    description:
      "Clean, streamlined fabric blinds that roll smoothly up or down to provide effective daylight filtering and privacy.",
    imageType: "catalogue",
    badge: "Clean Minimalist",
    highlights: ["Smooth Roll Mechanism", "Daylight Filtering", "Compact Header"],
    aspectRatio: "4/3",
  },
  {
    id: "zebra-blinds",
    title: "Zebra Blinds",
    category: "designer-blinds",
    categoryLabel: "Designer Blinds",
    image: "/images/products/product-zebra-blinds.jpg",
    description:
      "Dual-layer fabric with alternating sheer and solid stripes, allowing easy adjustment between filtered sunlight and complete privacy.",
    imageType: "catalogue",
    badge: "Dual Light Control",
    highlights: ["Alternating Stripes", "Sheer & Solid Balance", "Modern Aesthetic"],
    aspectRatio: "3/4",
  },
  {
    id: "pvc-blinds",
    title: "PVC Blinds",
    category: "designer-blinds",
    categoryLabel: "Designer Blinds",
    image: "/images/products/product-pvc-blinds.jpg",
    description:
      "Moisture-resistant slatted window blinds suitable for high-humidity areas, utility spaces, kitchens and modern bathrooms.",
    imageType: "catalogue",
    badge: "Moisture Resistant",
    highlights: ["Water Resistant", "Kitchen & Bath Friendly", "Easy Wipe Cleaning"],
    aspectRatio: "4/3",
  },
  {
    id: "aluminium-blinds",
    title: "Aluminium Blinds",
    category: "designer-blinds",
    categoryLabel: "Designer Blinds",
    image: "/images/products/product-aluminium-blinds.jpg",
    description:
      "Lightweight and durable horizontal aluminium slat blinds offering precise angle rotation for fine-tuned directional light control.",
    imageType: "catalogue",
    badge: "Precision Slats",
    highlights: ["Angle Rotation", "Durable Metal Slats", "Architectural Profile"],
    aspectRatio: "16/10",
  },
  {
    id: "wooden-blinds",
    title: "Wooden Blinds",
    category: "designer-blinds",
    categoryLabel: "Designer Blinds",
    image: "/images/products/product-wooden-blinds.jpg",
    description:
      "Natural timber horizontal blinds that bring warm architectural textures, organic grain patterns and timeless interior charm.",
    imageType: "catalogue",
    badge: "Natural Timber",
    highlights: ["Rich Wood Grain", "Warm Texture", "Timeless Appeal"],
    aspectRatio: "3/4",
  },
  {
    id: "roman-blinds",
    title: "Roman Blinds",
    category: "designer-blinds",
    categoryLabel: "Designer Blinds",
    image: "/images/products/product-roman-blinds.jpg",
    description:
      "Soft drapery-style window coverings that fold into horizontal pleats when raised, blending textile elegance with blind functionality.",
    imageType: "catalogue",
    badge: "Tailored Folds",
    highlights: ["Soft Fabric Pleats", "Elegant Drape", "Bespoke Styling"],
    aspectRatio: "4/3",
  },

  // 3. Customised Curtains (7 Items)
  {
    id: "blackout-fabric",
    title: "Blackout Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-blackout-curtains.jpg",
    description:
      "Dense multi-weave drapery fabric designed to block external daylight, reduce ambient heat and create restful darkened rooms.",
    imageType: "catalogue",
    badge: "Complete Darkening",
    highlights: ["100% Light Control", "Thermal Moderation", "Denser Weave"],
    aspectRatio: "3/4",
  },
  {
    id: "jacquard-fabric",
    title: "Jacquard Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-jacquard-curtains.jpg",
    description:
      "Textured woven drapery featuring raised structural patterns, classical motifs and substantial drape for formal living spaces.",
    imageType: "catalogue",
    badge: "Woven Motifs",
    highlights: ["Intricate Weave", "Substantial Drape", "Rich Texture"],
    aspectRatio: "4/3",
  },
  {
    id: "designer-fabric",
    title: "Designer Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-designer-curtains.jpg",
    description:
      "Curated collection of contemporary patterns, artistic motifs and expressive colour palettes from premium fabric catalogues.",
    imageType: "catalogue",
    badge: "Curated Catalogues",
    highlights: ["Expressive Patterns", "Modern Palettes", "Custom Tailoring"],
    aspectRatio: "16/10",
  },
  {
    id: "polyester-fabric",
    title: "Polyester Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-polyester-fabric.jpg",
    description:
      "Durable, easy-to-maintain curtain fabric offering crisp drape, wrinkle resistance and long-lasting colour retention.",
    imageType: "catalogue",
    badge: "Durable & Crisp",
    highlights: ["Wrinkle Resistant", "Easy Maintenance", "Vibrant Retention"],
    aspectRatio: "4/3",
  },
  {
    id: "linen-fabric",
    title: "Linen Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-linen-fabric.jpg",
    description:
      "Natural, breathable textured fabric that filters sunlight softly, lending an airy, organic and relaxed architectural aesthetic.",
    imageType: "catalogue",
    badge: "Natural Linen",
    highlights: ["Organic Breathability", "Airy Texture", "Soft Diffusion"],
    aspectRatio: "3/4",
  },
  {
    id: "cotton-fabric",
    title: "Cotton Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-cotton-fabric.jpg",
    description:
      "Pure natural cotton weave offering a soft hand-feel, gentle drape and classic look suited for bedrooms and lounges.",
    imageType: "catalogue",
    badge: "Soft Cotton",
    highlights: ["Pure Natural Fiber", "Soft Hand Feel", "Gentle Fold"],
    aspectRatio: "4/3",
  },
  {
    id: "sheer-fabric",
    title: "Sheer Fabric Curtains",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/product-sheer-curtains.jpg",
    description:
      "Lightweight translucent voiles and delicate weaves that soften incoming sunlight while preserving an open, daytime outdoor view.",
    imageType: "catalogue",
    badge: "Diffused Sunlight",
    highlights: ["Translucent Voile", "Daytime Privacy", "Airy Ambiance"],
    aspectRatio: "3/4",
  },

  // 4. Curtain Accessories (4 Items)
  {
    id: "branded-rods",
    title: "Branded Curtain Rods",
    category: "curtain-accessories",
    categoryLabel: "Curtain Accessories",
    image: "/images/accessories/accessory-branded-rods.jpg",
    description:
      "Premium metallic and matte-finish curtain rods accompanied by decorative finials, sturdy brackets and ring attachments.",
    imageType: "catalogue",
    badge: "Finials & Mounts",
    highlights: ["Architectural Finishes", "Decorative Finials", "Heavy Support"],
    aspectRatio: "4/3",
  },
  {
    id: "tracks",
    title: "Curtain Tracks",
    category: "curtain-accessories",
    categoryLabel: "Curtain Accessories",
    image: "/images/accessories/accessory-tracks.jpg",
    description:
      "Smooth-gliding channel tracks designed for discreet ceiling or wall mount installations, supporting effortless curtain draw.",
    imageType: "catalogue",
    badge: "Concealed Mount",
    highlights: ["Smooth Channel", "Wall & Ceiling Options", "Effortless Glide"],
    aspectRatio: "16/10",
  },
  {
    id: "designer-tracks",
    title: "Designer Curtain Tracks",
    category: "curtain-accessories",
    categoryLabel: "Curtain Accessories",
    image: "/images/accessories/accessory-designer-tracks.jpg",
    description:
      "Architectural decorative tracks with visible clean-line aesthetics and smooth roller carriers for wave and ripple-fold headings.",
    imageType: "catalogue",
    badge: "Wave & Ripplefold",
    highlights: ["Aesthetic Profile", "Wave Pleat Rollers", "Contemporary Form"],
    aspectRatio: "3/4",
  },
  {
    id: "jumbo-tracks",
    title: "Jumbo Heavy-Duty Tracks",
    category: "curtain-accessories",
    categoryLabel: "Curtain Accessories",
    image: "/images/accessories/accessory-jumbo-tracks.jpg",
    description:
      "Heavy-duty reinforced track profiles engineered to carry tall, multi-layered or weighty theatrical and banquet drapery spans.",
    imageType: "catalogue",
    badge: "Heavy Duty Spans",
    highlights: ["Reinforced Core", "High Load Capacity", "Wide Span Support"],
    aspectRatio: "4/3",
  },
];

/**
 * Filter gallery items by category identifier.
 * 'all' returns all items.
 */
export function getGalleryItemsByCategory(
  category: GalleryCategory
): GalleryItemData[] {
  if (category === "all") {
    return galleryItems;
  }
  return galleryItems.filter((item) => item.category === category);
}

