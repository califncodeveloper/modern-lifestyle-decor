import type {
  FeaturedProduct,
  BusinessBenefit,
  ProcessStep,
  ProjectSlot,
} from "@/types/decor";

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
    primary: "/images/hero/hero-main.jpg",
    secondary: "/images/hero/hero-secondary.jpg",
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
  // Mosquito Nets
  {
    id: "ss-open-window",
    name: "SS Open Window",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Durable stainless steel wire mesh in precision-hinged aluminum frames for seamless ventilation.",
    image: "/images/products/product-ss-open-window.jpg",
    href: "/services/mosquito-nets",
    badge: "Stainless Steel Mesh",
  },
  {
    id: "pleated-mosquito-net",
    name: "Pleated Mosquito Net",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Accordion-folding mesh sliding quietly along low-profile tracks for compact window spaces.",
    image: "/images/products/product-pleated-net.jpg",
    href: "/services/mosquito-nets",
    badge: "Accordion Retraction",
  },
  {
    id: "ss-sliding-mesh",
    name: "SS Sliding Mosquito Mesh",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Heavy-duty sliding panels engineered for large glass sliders, balconies and french windows.",
    image: "/images/products/product-ss-sliding-mesh.jpg",
    href: "/services/mosquito-nets",
    badge: "Smooth Glide Rollers",
  },
  {
    id: "honeycomb-partition",
    name: "Honeycomb Partition",
    category: "mosquito-nets",
    categoryLabel: "Mosquito Nets",
    description:
      "Cellular barrier screens delivering dual insulation, acoustic comfort and insect defense.",
    image: "/images/products/product-honeycomb-partition.jpg",
    href: "/services/mosquito-nets",
    badge: "Thermal Insulation",
  },

  // Blinds
  {
    id: "roller-blinds",
    name: "Roller Blinds",
    category: "blinds",
    categoryLabel: "Designer Blinds",
    description:
      "Sleek architectural fabric rolls with precise manual or motorized daylight filtering controls.",
    image: "/images/products/product-roller-blinds.jpg",
    href: "/services/blinds",
    badge: "Modern Minimalist",
  },
  {
    id: "zebra-blinds",
    name: "Zebra Blinds",
    category: "blinds",
    categoryLabel: "Designer Blinds",
    description:
      "Dual sheer and solid striped layers alternating to allow bespoke light and privacy balance.",
    image: "/images/products/product-zebra-blinds.jpg",
    href: "/services/blinds",
    badge: "Dual Band Control",
  },
  {
    id: "wooden-blinds",
    name: "Wooden Blinds",
    category: "blinds",
    categoryLabel: "Designer Blinds",
    description:
      "Warm natural timber slats coated with protective finishes for timeless architectural character.",
    image: "/images/products/product-wooden-blinds.jpg",
    href: "/services/blinds",
    badge: "Natural Hardwood",
  },
  {
    id: "roman-blinds",
    name: "Roman Blinds",
    category: "blinds",
    categoryLabel: "Designer Blinds",
    description:
      "Soft horizontal textile folds stacking evenly to bring classical elegance to contemporary spaces.",
    image: "/images/products/product-roman-blinds.jpg",
    href: "/services/blinds",
    badge: "Tailored Folds",
  },

  // Curtains
  {
    id: "blackout-curtains",
    name: "Blackout Curtains",
    category: "curtains",
    categoryLabel: "Customised Curtains",
    description:
      "High-density triple-weave fabrics providing 100% light blockage, privacy and thermal balance.",
    image: "/images/products/product-blackout-curtains.jpg",
    href: "/services/customised-curtains",
    badge: "Complete Darkening",
  },
  {
    id: "jacquard-curtains",
    name: "Jacquard Curtains",
    category: "curtains",
    categoryLabel: "Customised Curtains",
    description:
      "Intricately woven brocade textures delivering tactile richness and opulent interior depth.",
    image: "/images/products/product-jacquard-curtains.jpg",
    href: "/services/customised-curtains",
    badge: "Intricate Weave",
  },
  {
    id: "sheer-curtains",
    name: "Sheer Curtains",
    category: "curtains",
    categoryLabel: "Customised Curtains",
    description:
      "Gently diffused daylight filtering through lightweight airy voile and ethereal linen weaves.",
    image: "/images/products/product-sheer-curtains.jpg",
    href: "/services/customised-curtains",
    badge: "Soft Diffused Light",
  },
  {
    id: "designer-curtains",
    name: "Designer Curtains",
    category: "curtains",
    categoryLabel: "Customised Curtains",
    description:
      "Custom-tailored drapery coordinated with bespoke hardware, eyelets and architectural tracks.",
    image: "/images/products/product-designer-curtains.jpg",
    href: "/services/customised-curtains",
    badge: "Custom Tailored",
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

