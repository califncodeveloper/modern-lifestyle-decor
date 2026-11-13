import type {
  FeaturedProduct,
  BusinessBenefit,
  ProcessStep,
  ProjectSlot,
} from "@/types/decor";

export interface HeroPillar {
  id: string;
  tabLabel: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export const heroPillars: HeroPillar[] = [
  {
    id: "curtains",
    tabLabel: "Custom Curtains",
    categoryTag: "Tailored Drapery & Sheers",
    title: "Window Ensemble Collection",
    subtitle: "Floor-to-ceiling blackout, linen & jacquard drapes",
    image: "/images/products/curtains/customised-curtains-window-ensemble-main.png",
    href: "/services/customised-curtains",
  },
  {
    id: "mosquito-nets",
    tabLabel: "Mosquito Nets",
    categoryTag: "SS 304 Insect Protection",
    title: "Grand Entrance & Window Screens",
    subtitle: "Heavy-duty stainless steel wire mesh & powder-coated frames",
    image: "/images/products/mosquito-nets/ss-open-main-door-grand-main.png",
    href: "/services/mosquito-nets",
  },
  {
    id: "blinds",
    tabLabel: "Designer Blinds",
    categoryTag: "Architectural Light Control",
    title: "Precision Casement & Roller Blinds",
    subtitle: "Roller, zebra, wooden & PVC daylight filtering",
    image: "/images/categories/category-blinds.png",
    href: "/services/blinds",
  },
];

export const heroContent = {
  eyebrow: "MODERN LIFESTYLE DECOR",
  heading: "Transform Your Windows. Elevate Your Lifestyle.",
  description:
    "Discover beautifully crafted mosquito nets, designer blinds and customised curtains designed to bring comfort, privacy and elegance into your spaces.",
  primaryCta: {
    text: "Explore Our Collections",
    href: "/services",
  },
  secondaryCta: {
    text: "Get a Free Quote",
    href: "/contact",
  },
  brandStatement: "Manufacturer | Wholesale | Retail",
  images: {
    primary: "/images/products/curtains/customised-curtains-window-ensemble-main.png",
    secondary: "/images/products/mosquito-nets/ss-open-window-3panel-detail.png",
  },
};

export const brandIntroContent = {
  eyebrow: "ABOUT MODERN LIFESTYLE DECOR",
  heading: "Thoughtfully Designed. Beautifully Crafted.",
  description:
    "Modern LifeStyle Decor specialises in manufacturing and supplying mosquito nets, designer blinds and customised curtains. We bring together practical functionality and elegant designs to help transform residential and commercial spaces.",
  additionalContent:
    "Our collections offer a variety of materials, styles and customised solutions to complement different interiors and preferences.",
  cta: {
    text: "Discover Our Story",
    href: "/about",
  },
  image: "/images/intro/intro-craftsmanship.jpg",
};

export const categoryIntroContent = {
  eyebrow: "WHAT WE OFFER",
  heading: "Designed for Every Window. Crafted for Every Space.",
  description:
    "Explore our range of window furnishing and interior solutions.",
};

export const featuredProducts: FeaturedProduct[] = [
  // Real Client Mosquito Nets
  {
    id: "ss-open-main-door-classic",
    name: "SS Open Main Door — Classic Hinged",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Robust hinged entrance door mosquito net featuring stainless steel wire mesh, heavy-duty powder-coated framing, and mid-rail push bar.",
    image: "/images/products/mosquito-nets/ss-open-main-door-classic-main.png",
    href: "/products/ss-open-main-door-classic",
    badge: "Hinged Entrance Door",
  },
  {
    id: "ss-open-double-door",
    name: "SS Open Double Door / French Door",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Twin-shutter hinged mosquito net system engineered for wide entrances, French doorways, and commercial halls with tower bolt locking.",
    image: "/images/products/mosquito-nets/ss-open-double-door-main.png",
    href: "/products/ss-open-double-door",
    badge: "Twin Shutter System",
  },
  {
    id: "ss-open-window-3panel",
    name: "SS Open Window — 3-Panel Hinged System",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Three-shutter hinged casement window insect screen in copper-bronze finish with curved handles, latches, and stainless steel mesh.",
    image: "/images/products/mosquito-nets/ss-open-window-3panel-main.png",
    href: "/products/ss-open-window-3panel",
    badge: "3-Panel Casement",
  },
  {
    id: "ventilator-exhaust-mosquito-net",
    name: "Ventilator & Exhaust Fan Mosquito Net",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Bespoke dual-compartment mosquito net frame engineered for bathroom and kitchen ventilators with exhaust fan cutout and louver screen.",
    image:
      "/images/products/mosquito-nets/ventilator-exhaust-mosquito-net-main.png",
    href: "/products/ventilator-exhaust-mosquito-net",
    badge: "Exhaust Cutout Solution",
  },
  {
    id: "ss-open-door-ivory",
    name: "SS Open Balcony & Terrace Door (Ivory)",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Hinged mosquito net door in an elegant ivory powder coat finish with pull handle and bottom kick-rail reinforcement for balcony exits.",
    image: "/images/products/mosquito-nets/ss-open-door-ivory-main.png",
    href: "/products/ss-open-door-ivory",
    badge: "Ivory Powder Coat",
  },
  {
    id: "velcro-magnetic-window-net",
    name: "Velcro / Magnetic Detachable Window Screen",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Detachable fastener-bordered window insect screen mounted flush onto UPVC frames, offering tool-free peel-off cleaning.",
    image: "/images/products/mosquito-nets/velcro-magnetic-window-net-main.png",
    href: "/products/velcro-magnetic-window-net",
    badge: "Detachable Screen",
  },

  // Real Client Ensemble & Customised Curtains
  {
    id: "customised-curtains-window-ensemble",
    name: "Customised Curtains & Window Ensemble",
    category: "curtains",
    categoryLabel: "Customised Curtains",
    description:
      "Complete window furnishing installation combining an SS Open Window hinged mosquito net with tailor-made drapery and tieback belt.",
    image:
      "/images/products/curtains/customised-curtains-window-ensemble-main.png",
    href: "/products/customised-curtains-window-ensemble",
    badge: "Real Installation Ensemble",
  },
  {
    id: "ss-open-main-door-teak",
    name: "SS Open Main Door — Teak Entrance",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Heavy-duty residential entrance mosquito screen with twin horizontal reinforcement bars and copper-brown finish paired with teak main door.",
    image: "/images/products/mosquito-nets/ss-open-main-door-teak-main.png",
    href: "/products/ss-open-main-door-teak",
    badge: "Residential Entrance",
  },
  {
    id: "ss-open-door-sidelight",
    name: "SS Open Door with Sidelight Partition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Asymmetric entrance screen combining an active hinged door with a fixed vertical insect mesh sidelight partition.",
    image: "/images/products/mosquito-nets/ss-open-door-sidelight-main.png",
    href: "/products/ss-open-door-sidelight",
    badge: "Asymmetric Partition",
  },
  {
    id: "ss-open-main-door-grand",
    name: "SS Open Main Door — Grand Residence",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "High-spec hinged entrance mosquito screen in copper-gold finish engineered to mount cleanly alongside security grills and wood doors.",
    image: "/images/products/mosquito-nets/ss-open-main-door-grand-main.png",
    href: "/products/ss-open-main-door-grand",
    badge: "Grand Entrance",
  },
  {
    id: "ss-open-window-2panel-casement",
    name: "SS Open Window — 2-Panel Double Casement",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Twin-panel hinged casement window insect screen in brown powder-coated frame with mid-rail, handles, and daylight clarity.",
    image:
      "/images/products/mosquito-nets/ss-open-window-2panel-casement-main.png",
    href: "/products/ss-open-window-2panel-casement",
    badge: "Double Casement",
  },
  {
    id: "ss-open-window-dual-finish",
    name: "SS Open Window — 3-Panel (Bronze & Ivory)",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Three-panel hinged window mosquito screen with openable casement shutters available in dual Bronze and Ivory finish options.",
    image: "/images/products/mosquito-nets/ss-open-window-3panel-bronze.png",
    href: "/products/ss-open-window-dual-finish",
    badge: "Bronze & Ivory Finishes",
  },
  {
    id: "velcro-magnetic-ventilator-net",
    name: "Velcro / Magnetic Ventilator Mosquito Screen",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Custom horizontal ventilator insect screen with reinforced stitched border and corner pull-tab mounted over ventilator grills.",
    image:
      "/images/products/mosquito-nets/velcro-magnetic-ventilator-net-main.png",
    href: "/products/velcro-magnetic-ventilator-net",
    badge: "Ventilator Screen",
  },
];

export const businessBenefits: BusinessBenefit[] = [
  {
    id: "benefit-01",
    number: "01",
    title: "Manufacturer, Wholesale & Retail",
    description:
      "Complete in-house manufacturing capabilities supplying individual homeowners, architectural designers, and wholesale trade partners with direct factory standards.",
    iconName: "Factory",
  },
  {
    id: "benefit-02",
    number: "02",
    title: "Multiple Product Categories",
    description:
      "Comprehensive product spectrum spanning architectural mosquito protection, precision daylight blinds, and bespoke drapery tailored to every window format.",
    iconName: "Layers",
  },
  {
    id: "benefit-03",
    number: "03",
    title: "Customised Curtain Collections",
    description:
      "Bespoke curtain tailoring measured and sewn to exact window dimensions with coordinated header styles, designer pleats, and durable tracks.",
    iconName: "Scissors",
  },
  {
    id: "benefit-04",
    number: "04",
    title: "Variety of Material Options",
    description:
      "Extensive material library encompassing stainless steel mesh, architectural aluminum, natural wood slats, sheer voiles, and triple-weave blackout textiles.",
    iconName: "Palette",
  },
  {
    id: "benefit-05",
    number: "05",
    title: "Solutions for Windows, Doors & Partitions",
    description:
      "Versatile architectural configurations engineered for casement windows, large sliding patio doors, French balconies, and wide room partition dividers.",
    iconName: "DoorOpen",
  },
  {
    id: "benefit-06",
    number: "06",
    title: "Residential & Commercial Applications",
    description:
      "Robust, aesthetic solutions tailored for private residences, luxury apartments, corporate offices, hotels, and boutique commercial environments.",
    iconName: "Building2",
  },
];

export const workingProcessSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Understand the customer's requirements and preferences.",
  },
  {
    step: "02",
    title: "Product Selection",
    description:
      "Explore available products, fabrics, materials and designs.",
  },
  {
    step: "03",
    title: "Measurement & Customisation",
    description:
      "Discuss suitable customised options for the required space.",
  },
  {
    step: "04",
    title: "Order Completion",
    description:
      "Coordinate the order and its completion according to the agreed requirements.",
  },
];

export const projectSlots: ProjectSlot[] = [
  {
    id: "slot-01",
    slotNumber: "01",
    title: "Custom Pleated Mosquito Net Installation",
    category: "Mosquito Nets",
    aspectRatio: "16/9",
    dimensions: "1920 × 1080",
    status: "pending",
  },
  {
    id: "slot-02",
    slotNumber: "02",
    title: "Architectural Window Blinds Fitment",
    category: "Designer Blinds",
    aspectRatio: "4/3",
    dimensions: "1200 × 900",
    status: "pending",
  },
  {
    id: "slot-03",
    slotNumber: "03",
    title: "Bespoke Living Room Drapery Showcase",
    category: "Customised Curtains",
    aspectRatio: "3/4",
    dimensions: "900 × 1200",
    status: "pending",
  },
  {
    id: "slot-04",
    slotNumber: "04",
    title: "Full Residential Window Furnishing",
    category: "Residential Architecture",
    aspectRatio: "16/9",
    dimensions: "1920 × 1080",
    status: "pending",
  },
  {
    id: "slot-05",
    slotNumber: "05",
    title: "Commercial Office Blinds Installation",
    category: "Commercial Fit-Out",
    aspectRatio: "16/9",
    dimensions: "1920 × 1080",
    status: "pending",
  },
  {
    id: "slot-06",
    slotNumber: "06",
    title: "Precision Mesh & Stainless Hardware Fit",
    category: "Hardware & Craftsmanship",
    aspectRatio: "4/3",
    dimensions: "1200 × 900",
    status: "pending",
  },
  {
    id: "slot-07",
    slotNumber: "07",
    title: "Workshop & Assembly Manufacturing",
    category: "Manufacturing & Wholesale",
    aspectRatio: "16/9",
    dimensions: "1920 × 1080",
    status: "pending",
  },
];

export const designCommitments = [
  {
    quote:
      "Windows define the soul of architectural spaces. By harmonising light, air, and privacy, we transform living environments into sanctuaries of comfort.",
    author: "Modern LifeStyle Decor",
    role: "Manufacturing Principle",
  },
  {
    quote:
      "From precision stainless steel mesh to hand-tailored blackout drapery, every detail is engineered to endure and elevate everyday living.",
    author: "Craftsmanship Standard",
    role: "Material Integrity",
  },
  {
    quote:
      "Combining direct wholesale manufacturing with personalized customer service ensures every residential and commercial space receives bespoke precision.",
    author: "Service Philosophy",
    role: "Wholesale & Retail Commitment",
  },
  {
    quote:
      "Thoughtfully designed partitions, versatile blinds, and elegant curtains curated to complement modern architectural lifestyles.",
    author: "Design Excellence",
    role: "Spatial Harmony",
  },
];

