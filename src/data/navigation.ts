import type { NavItem, FooterSection, SocialLink } from "@/types/navigation";

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Mosquito Nets",
        href: "/services/mosquito-nets",
        description: "Pleated, roll-up, and magnetic barrier systems.",
      },
      {
        title: "Designer Blinds",
        href: "/services/blinds",
        description: "Architectural roller, zebra, and motorized blinds.",
      },
      {
        title: "Customised Curtains",
        href: "/services/customised-curtains",
        description: "Bespoke drapery, sheer, and blackout fabrics.",
      },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export const quickLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export const productLinks: NavItem[] = [
  { title: "Mosquito Nets", href: "/services/mosquito-nets" },
  { title: "Designer Blinds", href: "/services/blinds" },
  { title: "Customised Curtains", href: "/services/customised-curtains" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: quickLinks,
  },
  {
    title: "Our Products",
    links: productLinks,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    href: "https://youtube.com/@modernlifestyledecor63?si=9MG4qQKUBBnMEj7H",
    iconName: "YouTube",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919551080470",
    iconName: "WhatsApp",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/modernlifestyledecor",
    iconName: "Instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/modernlifestyledecor",
    iconName: "Facebook",
  },
];
