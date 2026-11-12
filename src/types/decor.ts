export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  href: string;
  description: string;
  ctaText: string;
  image: string;
  aspectRatio: string;
  products: string[];
  tag: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: "mosquito-nets" | "blinds" | "curtains";
  categoryLabel: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

export interface BusinessBenefit {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectSlot {
  id: string;
  slotNumber: string;
  title: string;
  category: string;
  aspectRatio: "16/9" | "4/3" | "3/4" | "1/1";
  dimensions: string;
  imagePath?: string;
  status: "available" | "pending";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "residential" | "commercial" | "hospitality" | "architectural";
  imageUrl: string;
  location: string;
  year: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  projectType: string;
  quote: string;
  avatarUrl?: string;
}

export interface AboutLocation {
  id: string;
  type: "showroom" | "manufacturing";
  badge: string;
  name: string;
  addressLines: string[];
  googleMapsUrl: string;
  phone?: string;
}

export interface BusinessModelPillar {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  keyPoints: string[];
  iconName: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  categorySlug: string;
  description: string;
  image: string;
  products?: string[];
  materials?: string[];
  accessories?: string[];
  badge: string;
  href: string;
}

export interface ProductDetailItem {
  id: string;
  name: string;
  category: "mosquito-nets" | "blinds" | "curtains";
  categoryLabel: string;
  description: string;
  image: string;
  badge?: string;
  highlights?: string[];
}

export interface CurtainAccessoryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  highlights?: string[];
}


