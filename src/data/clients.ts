export interface ClientBrand {
  id: string;
  name: string;
  logoSrc: string;
  width: number;
  height: number;
  aspectRatio: number;
  imageClassName?: string;
  isSignagePhoto?: boolean;
}

/**
 * Verified Client & Project Company Brand Data
 * Strictly includes only the six supplied brand images without modification or substitution.
 */
export const clientsData: ClientBrand[] = [
  {
    id: "urbando",
    name: "URBANDO",
    logoSrc: "/images/clients/urbando.jpeg",
    width: 400,
    height: 400,
    aspectRatio: 1.0,
    imageClassName: "p-1",
  },
  {
    id: "hand-in-hand-india",
    name: "HAND IN HAND INDIA",
    logoSrc: "/images/clients/hand-in-hand-india.jpeg",
    width: 600,
    height: 178,
    aspectRatio: 3.37,
    imageClassName: "p-2",
  },
  {
    id: "seoyon-e-hwa",
    name: "SEOYON E-HWA AUTOMOTIVE CHENNAI PRIVATE LIMITED",
    logoSrc: "/images/clients/seoyon-e-hwa.jpeg",
    width: 899,
    height: 240,
    aspectRatio: 3.75,
    imageClassName: "p-2",
  },
  {
    id: "kcg-college-of-technology",
    name: "KCG COLLEGE OF TECHNOLOGY",
    logoSrc: "/images/clients/kcg-college-of-technology.jpeg",
    width: 554,
    height: 554,
    aspectRatio: 1.0,
    // Carefully handle the large surrounding white space while preserving all logo text and emblem intact
    imageClassName: "scale-[1.32] transform-gpu",
  },
  {
    id: "mahindra",
    name: "MAHINDRA",
    logoSrc: "/images/clients/mahindra.jpeg",
    width: 225,
    height: 225,
    aspectRatio: 1.0,
    imageClassName: "p-1.5",
  },
  {
    id: "punjab-national-bank",
    name: "PUNJAB NATIONAL BANK",
    logoSrc: "/images/clients/punjab-national-bank.jpeg",
    width: 498,
    height: 287,
    aspectRatio: 1.74,
    isSignagePhoto: true,
    imageClassName: "rounded-2xs shadow-2xs",
  },
];

