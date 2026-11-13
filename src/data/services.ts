import type { ServiceItem, ServiceCategory } from "@/types/decor";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mosquito-nets",
    number: "01",
    title: "Mosquito Nets",
    slug: "mosquito-nets",
    href: "/services/mosquito-nets",
    description:
      "Explore mosquito net solutions designed for windows, doors and partitions.",
    ctaText: "Explore Mosquito Nets",
    image: "/images/categories/category-mosquito-nets.png",
    aspectRatio: "16/9",
    products: [
      "SS Open Main Door — Classic & Teak Editions",
      "SS Open Double Door / French Door Systems",
      "SS Open Casement Windows (3-Panel & 2-Panel)",
      "SS Open Balcony & Terrace Doors",
      "Custom Ventilator & Exhaust Fan Cutout Screens",
      "Velcro / Magnetic Detachable Screens",
    ],
    tag: "Insect Protection & Fresh Air",
  },
  {
    id: "blinds",
    number: "02",
    title: "Designer Blinds",
    slug: "blinds",
    href: "/services/blinds",
    description:
      "Discover custom-fabricated window blinds to complement your architectural and lighting preferences.",
    ctaText: "Explore Designer Blinds",
    image: "/images/categories/category-blinds.png",
    aspectRatio: "4/3",
    products: [
      "Roller Blinds (Daylight & Blackout)",
      "Zebra Blinds (Dual Band Control)",
      "Natural Wooden Blinds",
      "Moisture-Proof PVC Blinds",
      "Architectural Aluminium Blinds",
      "Soft Fold Roman Blinds",
    ],
    tag: "Architectural Light Management",
  },
  {
    id: "customised-curtains",
    number: "03",
    title: "Customised Curtains",
    slug: "customised-curtains",
    href: "/services/customised-curtains",
    description:
      "Discover bespoke tailored curtains, integrated window ensembles, and architectural hardware for your interiors.",
    ctaText: "Explore Customised Curtains",
    image: "/images/categories/category-curtains.png",
    aspectRatio: "3/4",
    products: [
      "Customised Curtains & Window Ensembles",
      "100% Thermal Blackout Drapery",
      "Artisan Jacquards & Textured Brocades",
      "Breathable Natural Linen & Voile Sheers",
      "Designer Wave & Ripple-Fold Tracks",
      "Heavy-Duty Concealed Channel Systems",
    ],
    tag: "Bespoke Architectural Drapery",
  },
];


export const initialServicesData: ServiceItem[] = [
  {
    id: "mosquito-nets",
    title: "Mosquito Net Systems",
    slug: "mosquito-nets",
    description:
      "Custom-engineered insect protection barriers crafted with stainless steel and high-tensile pleated meshes.",
    iconName: "Shield",
    features: [
      "SS Open Windows & Main Doors",
      "Pleated & Magnetic Barrier Systems",
      "Heavy Pleated & Honeycomb Partitions",
      "Durable Weatherproof Powder-Coated Frames",
    ],
  },
  {
    id: "blinds",
    title: "Designer Window Blinds",
    slug: "blinds",
    description:
      "Contemporary light modulation systems engineered for residential tranquility and commercial precision.",
    iconName: "Sun",
    features: [
      "Precision Roller & Dual Zebra Blinds",
      "Natural Wood & Faux Wood Blinds",
      "Slimline Architectural Aluminium Blinds",
      "Smooth Corded & Motorized Controls",
    ],
  },
  {
    id: "customised-curtains",
    title: "Customised Curtain Collections",
    slug: "customised-curtains",
    description:
      "Tailor-made drapery ensembles featuring curated European and domestic fabrics with designer hardware.",
    iconName: "Layers",
    features: [
      "100% Thermal Blackout & Dimout Weaves",
      "Artisan Jacquard & Textured Damasks",
      "Airy Linen & Sheer Day Curtains",
      "Heavy-Duty Concealed Tracks & Decorative Rods",
    ],
  },
];
