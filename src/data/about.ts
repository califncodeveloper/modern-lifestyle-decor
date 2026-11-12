import type {
  AboutLocation,
  BusinessModelPillar,
  ExpertiseItem,
  ProcessStep,
  BusinessBenefit,
} from "@/types/decor";
import { siteConfig } from "@/config/site";

export const aboutHeroContent = {
  eyebrow: "ABOUT MODERN LIFESTYLE DECOR",
  heading: "Creating Beautiful Spaces Through Thoughtful Design.",
  description:
    "Discover Modern LifeStyle Decor, a manufacturer and supplier of mosquito nets, designer blinds and customised curtains.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
  ],
  image: "/images/hero/hero-secondary.jpg",
  detailImage: "/images/intro/intro-craftsmanship.jpg",
  brandStatement: "Manufacturer • Wholesale • Retail",
};

export const whoWeAreContent = {
  eyebrow: "WHO WE ARE",
  heading: "Bringing Style, Comfort and Functionality Together.",
  paragraphs: [
    "Modern LifeStyle Decor specialises in mosquito nets, window blinds and customised curtains. Operating as a manufacturer, wholesaler and retailer, the business offers a range of solutions for residential and commercial spaces.",
    "From practical mosquito protection to versatile window blinds and customised curtain collections, the business offers different products, materials and styles to complement a variety of interiors.",
  ],
  cta: {
    text: "Explore Our Services",
    href: "/services",
  },
  image: "/images/intro/intro-craftsmanship.jpg",
  caption: "In-House Manufacturing & Direct Supply",
};

export const businessExpertiseContent = {
  eyebrow: "OUR BUSINESS EXPERTISE",
  heading: "Three Core Categories. Multiple Possibilities.",
  description:
    "Comprehensive window treatments and insect barrier solutions manufactured with precision and tailored for residential and commercial interiors.",
  categories: [
    {
      id: "mosquito-net-solutions",
      number: "01",
      title: "Mosquito Net Solutions",
      categorySlug: "mosquito-nets",
      description:
        "Manufacturing a range of mosquito net solutions for windows, doors and partition applications.",
      image: "/images/categories/category-mosquito-nets.jpg",
      products: [
        "SS Open Window",
        "SS Open Main Door",
        "Pleated Mosquito Net — Fiber / SS Mesh",
        "Pleated Heavy Partition",
        "SS Sliding Mosquito Mesh",
        "Honeycomb Partition",
        "PVC Pleated Partition",
      ],
      badge: "In-House Mesh Engineering",
      href: "/services/mosquito-nets",
    },
    {
      id: "designer-blinds",
      number: "02",
      title: "Designer Blinds",
      categorySlug: "blinds",
      description:
        "Offering a variety of blinds designed to complement different interior styles and window requirements.",
      image: "/images/categories/category-blinds.jpg",
      products: [
        "Roller Blinds",
        "Zebra Blinds",
        "PVC Blinds",
        "Aluminium Blinds",
        "Wooden Blinds",
        "Roman Blinds",
      ],
      badge: "Architectural Light Management",
      href: "/services/blinds",
    },
    {
      id: "customised-curtains",
      number: "03",
      title: "Customised Curtains",
      categorySlug: "customised-curtains",
      description:
        "Customised curtain collections featuring fabrics from branded catalogues and a variety of material options.",
      image: "/images/categories/category-curtains.jpg",
      materials: [
        "Blackout Fabric",
        "Jacquard Fabric",
        "Designer Fabric",
        "Polyester Fabric",
        "Linen Fabric",
        "Cotton Fabric",
        "Sheer Fabric",
      ],
      accessories: [
        "Branded Rods",
        "Tracks",
        "Designer Tracks",
        "Jumbo Tracks",
      ],
      badge: "Bespoke Fabrics & Hardware",
      href: "/services/customised-curtains",
    },
  ] as ExpertiseItem[],
};

export const ourApproachContent = {
  eyebrow: "OUR APPROACH",
  heading: "Designed Around Your Requirements.",
  description:
    "A structured, customer-focused approach ensuring your product selection and material combinations suit your specific living and working spaces.",
  steps: [
    {
      step: "01",
      title: "Understand Requirements",
      description:
        "Understand the customer's preferred style, requirements and space.",
    },
    {
      step: "02",
      title: "Explore Collections",
      description:
        "Explore available mosquito nets, blinds, fabrics and curtain options.",
    },
    {
      step: "03",
      title: "Customisation",
      description:
        "Discuss suitable product and material combinations based on requirements.",
    },
    {
      step: "04",
      title: "Order Coordination",
      description:
        "Coordinate the order and completion process.",
    },
  ] as ProcessStep[],
};

export const businessModelContent = {
  eyebrow: "BUSINESS OPERATIONS",
  heading: "Manufacturer. Wholesale. Retail.",
  description:
    "Modern LifeStyle Decor operates across manufacturing, wholesale and retail for its product categories, delivering direct quality control, adaptable volume supply and dedicated customer service.",
  pillars: [
    {
      id: "manufacturer",
      title: "Manufacturer",
      eyebrow: "DIRECT CRAFTSMANSHIP",
      description:
        "In-house production capabilities for insect protection screens, window blinds assembly, and custom drapery tailored to specific dimensions.",
      keyPoints: [
        "Stainless steel & fiber mesh assembly",
        "Custom track & roller systems",
        "Precise fabric stitching and finishing",
      ],
      iconName: "Factory",
    },
    {
      id: "wholesale",
      title: "Wholesale",
      eyebrow: "TRADE & BULK SUPPLY",
      description:
        "Reliable bulk supply and partner-ready inventories for interior designers, architects, contractors and regional furnishing showrooms.",
      keyPoints: [
        "Standard & custom bulk orders",
        "Extensive fabric & frame catalogue",
        "Direct trade coordination",
      ],
      iconName: "Boxes",
    },
    {
      id: "retail",
      title: "Retail",
      eyebrow: "INDIVIDUAL HOMES & OFFICES",
      description:
        "Dedicated assistance for individual homeowners and commercial offices seeking personalized window and partition solutions.",
      keyPoints: [
        "Personalised product guidance",
        "Wide choice of fabrics & styles",
        "Customized solution coordination",
      ],
      iconName: "Store",
    },
  ] as BusinessModelPillar[],
};

export const locationsContent = {
  eyebrow: "PHYSICAL PRESENCE",
  heading: "Visit Modern LifeStyle Decor.",
  description:
    "Experience our materials and product displays in person or coordinate with our manufacturing operations directly in Tamil Nadu.",
  locations: [
    {
      id: "showroom-2",
      type: "showroom",
      badge: "SHOWROOM 2",
      name: "Modern LifeStyle Decor Showroom",
      addressLines: [
        "No.81/60, Ragavendra Nagar,",
        "Near Jamaai Ice Cream,",
        "(Walajabad - Vandalur Road),",
        "Salamangalam, Tamil Nadu 601 301.",
      ],
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=No.81%2F60%2C+Ragavendra+Nagar%2C+Near+Jamaai+Ice+Cream%2C+Walajabad+-+Vandalur+Road%2C+Salamangalam%2C+Tamil+Nadu+601301",
      phone: siteConfig.contact.phone,
    },
    {
      id: "manufacturing-unit",
      type: "manufacturing",
      badge: "MANUFACTURING UNIT",
      name: "Modern LifeStyle Decor Production Facility",
      addressLines: [
        "No.9/198, Lakshmi Nagar Main Road,",
        "Opposite Makkah Masjid,",
        "Salamangalam, Padappai - 601 301.",
      ],
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=No.9%2F198%2C+Lakshmi+Nagar+Main+Road%2C+Opposite+Makkah+Masjid%2C+Salamangalam%2C+Padappai+-+601301",
      phone: siteConfig.contact.phone,
    },
  ] as AboutLocation[],
};

export const whyChooseUsAboutContent = {
  eyebrow: "VERIFIED CAPABILITIES",
  heading: "Everything You Need for Beautiful Window Spaces.",
  description:
    "Built around authentic manufacturing craftsmanship, versatile product collections, and adaptable spatial configurations.",
  benefits: [
    {
      id: "why-01",
      number: "01",
      title: "Manufacturer, Wholesale & Retail",
      description:
        "Operating across production, bulk distribution, and retail to serve private homeowners, architects, and trade partners with equal dedication.",
      iconName: "Factory",
    },
    {
      id: "why-02",
      number: "02",
      title: "Multiple Mosquito Net Solutions",
      description:
        "Engineered mesh systems ranging from openable SS frames and pleated barriers to heavy partitions and honeycomb screens.",
      iconName: "Shield",
    },
    {
      id: "why-03",
      number: "03",
      title: "Variety of Blinds",
      description:
        "Roller, zebra, aluminium, wooden, PVC, and Roman blinds crafted to match interior aesthetics and light modulation needs.",
      iconName: "Sun",
    },
    {
      id: "why-04",
      number: "04",
      title: "Customised Curtain Collections",
      description:
        "Curated drapery with branded fabric catalogues, matching headers, designer hardware, and high-load architectural tracks.",
      iconName: "Layers",
    },
    {
      id: "why-05",
      number: "05",
      title: "Multiple Fabric Options",
      description:
        "Extensive selection including 100% blackout, rich jacquard, textured linen, pure cotton, sheer voile, and durable polyester.",
      iconName: "Palette",
    },
    {
      id: "why-06",
      number: "06",
      title: "Solutions for Windows, Doors & Partitions",
      description:
        "Versatile configurations designed for standard windows, sliding glass balconies, entrance main doors, and expansive room dividers.",
      iconName: "DoorOpen",
    },
  ] as BusinessBenefit[],
};

export const aboutCtaContent = {
  eyebrow: "GET IN TOUCH",
  heading: "Let's Find the Right Style for Your Space.",
  description:
    "Explore our collections of mosquito nets, blinds and customised curtains.",
  primaryCta: {
    text: "Explore Our Services",
    href: "/services",
  },
  secondaryCta: {
    text: "Contact Our Team",
    href: "/contact",
  },
  image: "/images/cta/cta-interior.jpg",
};

