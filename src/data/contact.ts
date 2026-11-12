import type {
  ContactHeroContent,
  ContactPerson,
  BusinessLocationItem,
  InterestedInOption,
} from "@/types/contact";
import { siteConfig } from "@/config/site";

export const contactHeroContent: ContactHeroContent = {
  eyebrow: "GET IN TOUCH",
  heading: "Let's Create Something Beautiful Together.",
  description:
    "Whether you are looking for mosquito nets, designer blinds, customised curtains, or furnishing accessories, our team is here to help you find the right solution.",
  image: "/images/hero/hero-secondary.jpg",
};

export const primaryContact: ContactPerson = {
  name: "MOHAMMAD AL ASATH",
  phone: "+91 9551080470",
  email: "modernlifestyledecor63@gmail.com",
  isPrimary: true,
};

export const additionalContacts: ContactPerson[] = [
  {
    name: "OBAIDULLA KHAN",
    phone: "+91 8667754943",
  },
  {
    name: "SHAKIR",
    phone: "+91 8526764121",
  },
];

export const businessLocations: BusinessLocationItem[] = [
  {
    id: "showroom-2",
    type: "showroom",
    badge: "SHOWROOM 2",
    title: "Showroom 2",
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
    title: "Manufacturing Unit",
    addressLines: [
      "No.9/198, Lakshmi Nagar Main Road,",
      "Opposite Makkah Masjid,",
      "Salamangalam, Padappai - 601 301.",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=No.9%2F198%2C+Lakshmi+Nagar+Main+Road%2C+Opposite+Makkah+Masjid%2C+Salamangalam%2C+Padappai+-+601301",
    phone: siteConfig.contact.phone,
  },
];

export const interestedInOptions: InterestedInOption[] = [
  "Mosquito Nets",
  "Designer Blinds",
  "Customised Curtains",
  "Curtain Accessories",
  "General Enquiry",
];

export const contactCtaContent = {
  eyebrow: "DIRECT CONSULTATION",
  heading: "Need Immediate Assistance or an On-Site Consultation?",
  description:
    "Connect directly with Mohammad Al Asath and our specialist team for custom dimensions, fabric samples, wholesale enquiries, and professional installation quotes.",
  primaryCta: {
    text: "Chat on WhatsApp",
    href: "https://wa.me/919551080470",
    isExternal: true,
  },
  secondaryCta: {
    text: "+91 9551080470",
    href: "tel:+919551080470",
    isExternal: true,
  },
  backgroundImage: "/images/cta/cta-interior.jpg",
};

