import type {
  GalleryCategory,
  GalleryCategoryFilter,
  GalleryItemData,
} from "@/types/gallery";

export const galleryCategories: GalleryCategoryFilter[] = [
  { id: "all", label: "All Client Projects", count: 14 },
  { id: "mosquito-nets", label: "Mosquito Nets", count: 13 },
  { id: "customised-curtains", label: "Customised Curtains", count: 1 },
];

export const galleryItems: GalleryItemData[] = [
  // 1. Verified Real Client Installations (Mosquito Nets & Ensemble)
  {
    id: "ss-open-main-door-classic",
    title: "SS Open Main Door — Classic Hinged",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-main-door-classic-main.png",
    description:
      "Robust hinged entrance door mosquito net featuring high-grade stainless steel wire mesh in a heavy-duty powder-coated aluminum frame with central push bar and secure latches.",
    imageType: "installation",
    badge: "Hinged Entrance Door",
    highlights: ["Stainless Steel Wire Mesh", "Heavy-Duty Powder Coated Frame", "Mid-Rail Push Bar", "Exterior Safety Latches"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-double-door",
    title: "SS Open Double Door / French Door Mosquito Net",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-double-door-main.png",
    description:
      "Architectural twin-shutter hinged mosquito net system engineered for wide entrances, French doorways, and commercial halls with central tower bolt locking.",
    imageType: "installation",
    badge: "Twin Shutter System",
    highlights: ["Double Leaf Openable", "Central Tower Bolt", "High Tensile SS Mesh", "Wide Entrance Spans"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-main-door-teak",
    title: "SS Open Main Door — Teak Entrance Edition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-main-door-teak-main.png",
    description:
      "Heavy-duty hinged residential door mosquito screen with twin horizontal reinforcement bars and copper-brown finish designed to pair with traditional carved teak main doors.",
    imageType: "installation",
    badge: "Residential Entrance",
    highlights: ["Twin Horizontal Mid-Rails", "Copper-Brown Finish", "Sturdy Aluminum Section", "High Insect Defense"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-door-ivory",
    title: "SS Open Balcony & Terrace Door (Ivory Edition)",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-door-ivory-main.png",
    description:
      "Hinged mosquito net door in an elegant ivory powder-coated finish with ergonomic pull handle and bottom kick-rail reinforcement for terrace and balcony access.",
    imageType: "installation",
    badge: "Ivory Powder Coat",
    highlights: ["Terrace & Balcony Fit", "Ergonomic Pull Handle", "Reinforced Bottom Rail", "Smooth Hinged Action"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-door-sidelight",
    title: "SS Open Door with Fixed Sidelight Partition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-door-sidelight-main.png",
    description:
      "Custom asymmetric entrance screen system combining an active hinged mosquito door with a fixed vertical insect mesh sidelight partition for wide architectural door frames.",
    imageType: "installation",
    badge: "Asymmetric Partition",
    highlights: ["Active Door + Fixed Screen", "Dark Bronze Frame", "Architectural Sidelight Fit", "Seamless Barrier"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-main-door-grand",
    title: "SS Open Main Door — Grand Residence Edition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-main-door-grand-main.png",
    description:
      "High-spec hinged entrance mosquito screen in copper-gold finish engineered to mount cleanly alongside security grill gates and ornate solid wood doors.",
    imageType: "installation",
    badge: "Grand Entrance",
    highlights: ["Copper-Gold Powder Coat", "Pairs with Carved Wooden Doors", "Heavy Hinge Assembly", "Unobstructed Airflow"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-window-3panel",
    title: "SS Open Window — 3-Panel Hinged System",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-window-3panel-main.png",
    description:
      "Three-shutter hinged window insect screen in copper-bronze powder-coated aluminum framing, featuring stainless steel wire mesh, curved ergonomic handles, and swivel latches.",
    imageType: "installation",
    badge: "3-Panel Casement",
    highlights: ["Curved Ergonomic Handles", "Swivel Latching System", "Stainless Steel Wire Mesh", "Flush Sill Sealing"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-window-2panel-casement",
    title: "SS Open Window — 2-Panel Double Casement",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-window-2panel-casement-main.png",
    description:
      "Twin-panel hinged casement window insect screen in brown powder-coated frame with mid-rail and curved handles, allowing fresh air while stopping pests.",
    imageType: "installation",
    badge: "Double Casement",
    highlights: ["Daylight Ventilation", "Center Handle Latch", "Mid-Bar Reinforcement", "Weatherproof Coating"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-window-2panel-living",
    title: "SS Open Window — 2-Panel Interior Casement",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-window-2panel-living-main.png",
    description:
      "Two-panel hinged casement window screen in bronze powder-coated aluminum framing, mounted inside living areas over window safety grills.",
    imageType: "installation",
    badge: "Interior Window Fit",
    highlights: ["Bronze Finish Framing", "Fits Over Window Grills", "Effortless Shutter Swing", "Fresh Air Circulation"],
    aspectRatio: "3/4",
  },
  {
    id: "ventilator-exhaust-mosquito-net",
    title: "Custom Ventilator & Exhaust Fan Mosquito Net",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ventilator-exhaust-mosquito-net-main.png",
    description:
      "Bespoke dual-compartment mosquito net frame engineered specifically for bathroom and kitchen ventilators, featuring an open cutout for exhaust fans and insect-proof louvers.",
    imageType: "installation",
    badge: "Exhaust Cutout Solution",
    highlights: ["Bespoke Exhaust Fan Cutout", "Louver Airflow Screen", "Swivel Turn-Buckle Latches", "Kitchen & Bathroom Fit"],
    aspectRatio: "3/4",
  },
  {
    id: "ss-open-window-dual-finish",
    title: "SS Open Window — 3-Panel Casement (Dual Finish)",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/ss-open-window-3panel-bronze.png",
    description:
      "Three-panel hinged window mosquito screen with openable casement shutters, manufactured in both rich Bronze powder coat and clean Ivory/White powder coat finishes.",
    imageType: "installation",
    badge: "Bronze & Ivory Finishes",
    highlights: ["Dual Powder Coat Options", "Multi-Panel Hinged Screen", "Curtain Rod Compatible", "UPVC & Wood Window Fit"],
    aspectRatio: "3/4",
  },
  {
    id: "velcro-magnetic-window-net",
    title: "Velcro / Magnetic Detachable Window Mosquito Screen",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/velcro-magnetic-window-net-main.png",
    description:
      "Flexible, detachable insect screen with heavy-duty bordered fastener strip mounted flush onto window frames, offering easy peel-off cleaning and washability.",
    imageType: "installation",
    badge: "Detachable Screen",
    highlights: ["Perimeter Fastener Border", "Tool-Free Removal", "Easy Washable Mesh", "Flush UPVC Fitment"],
    aspectRatio: "3/4",
  },
  {
    id: "velcro-magnetic-ventilator-net",
    title: "Velcro / Magnetic Ventilator Mosquito Screen",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    image: "/images/products/mosquito-nets/velcro-magnetic-ventilator-net-main.png",
    description:
      "Custom horizontal ventilator insect screen with reinforced stitched border and corner pull-tab, mounted securely over ventilator grills on tiled walls.",
    imageType: "installation",
    badge: "Ventilator Screen",
    highlights: ["Corner Pull Tab", "Reinforced Border Strip", "Tiled Wall Installation", "Direct Latch Access"],
    aspectRatio: "3/4",
  },
  {
    id: "customised-curtains-window-ensemble",
    title: "Customised Curtains & Window Ensemble",
    category: "customised-curtains",
    categoryLabel: "Customised Curtains",
    image: "/images/products/curtains/customised-curtains-window-ensemble-main.png",
    description:
      "Complete window furnishing installation combining an SS Open Window hinged mosquito net with bespoke tailored jacquard/textured curtains, tieback belts, and architectural hardware.",
    imageType: "installation",
    badge: "Real Installation Ensemble",
    highlights: ["Bespoke Jacquard/Textured Fabric", "Tailored Tieback Belt", "Architectural Rod Mount", "Integrated Window Solution"],
    aspectRatio: "3/4",
  },
];

/**
 * Filter gallery items by category identifier.
 * 'all' returns all items.
 */
export function getGalleryItemsByCategory(
  category: GalleryCategory
): GalleryItemData[] {
  if (category === "all" || category === "installations-projects") {
    return galleryItems;
  }
  return galleryItems.filter((item) => item.category === category);
}
