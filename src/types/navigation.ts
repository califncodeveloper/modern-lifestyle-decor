export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  name: string;
  href: string;
  iconName: "Instagram" | "Facebook" | "WhatsApp" | "YouTube" | string;
}
