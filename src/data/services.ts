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
    image: "/images/categories/category-mosquito-nets.jpg",
    aspectRatio: "16/9",
    products: [
      "SS Open Window",
      "SS Open Main Door",
      "Pleated Mosquito Net — Fiber / SS Mesh",
      "Pleated Heavy Partition",
      "SS Sliding Mosquito Mesh",
      "Honeycomb Partition",
      "PVC Pleated Partition",
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
      "Discover different styles of window blinds to complement your interior preferences.",
    ctaText: "Explore Designer Blinds",
    image: "/images/categories/category-blinds.jpg",
    aspectRatio: "4/3",
    products: [
      "Roller Blinds",
      "Zebra Blinds",
      "PVC Blinds",
      "Aluminium Blinds",
      "Wooden Blinds",
      "Roman Blinds",
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
      "Discover customised curtain fabrics, textures and accessories for your interiors.",
    ctaText: "Explore Customised Curtains",
    image: "/images/categories/category-curtains.jpg",
    aspectRatio: "3/4",
    products: [
      "Blackout Fabric",
      "Jacquard Fabric",
      "Designer Fabric",
      "Polyester Fabric",
      "Linen Fabric",
      "Cotton Fabric",
      "Sheer Fabric",
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
