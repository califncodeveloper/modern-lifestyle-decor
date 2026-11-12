export interface ContactPerson {
  name: string;
  phone: string;
  email?: string;
  role?: string;
  isPrimary?: boolean;
}

export interface BusinessLocationItem {
  id: string;
  type: "showroom" | "manufacturing";
  badge: string;
  title: string;
  addressLines: string[];
  googleMapsUrl: string;
  phone?: string;
}

export interface ContactHeroContent {
  eyebrow: string;
  heading: string;
  description: string;
  image?: string;
}

export type InterestedInOption =
  | "Mosquito Nets"
  | "Designer Blinds"
  | "Customised Curtains"
  | "Curtain Accessories"
  | "General Enquiry";
