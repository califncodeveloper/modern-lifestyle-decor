export const siteConfig = {
  name: "Modern LifeStyle Decor",
  tagline: "Blinds & Mosquito Net",
  businessType: "Manufacturer | Wholesale | Retail",
  proprietor: "MOHAMMAD AL ASATH",
  description:
    "Premier manufacturer, wholesaler, and retailer of architectural window blinds, precision mosquito nets, and bespoke customised curtains.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://www.modernlifestyledecor.in",
  ogImage: "/images/brand/logo.png",
  categories: [
    "Mosquito Nets",
    "Window Blinds",
    "Customised Curtains",
  ],
  contact: {
    proprietor: "MOHAMMAD AL ASATH",
    phone: "+91 9551080470",
    email: "modernlifestyledecor63@gmail.com",
    address: "Modern LifeStyle Decor Showroom & Factory",
    hours: "Monday – Saturday: 9:30 AM – 8:00 PM",
    team: [
      { name: "MOHAMMAD AL ASATH", role: "Proprietor", phone: "+91 9551080470" },
      { name: "OBAIDULLA KHAN", role: "Sales & Technical", phone: "+91 8667754943" },
      { name: "SHAKIR", role: "Customer Support & Operations", phone: "+91 8526764121" },
    ],
  },
  links: {
    youtube: "https://youtube.com/@modernlifestyledecor63?si=9MG4qQKUBBnMEj7H",
    whatsapp: "https://wa.me/919551080470",
    instagram: "https://instagram.com/modernlifestyledecor",
    facebook: "https://facebook.com/modernlifestyledecor",
  },
};

export type SiteConfig = typeof siteConfig;
