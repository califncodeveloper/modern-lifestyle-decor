export type GalleryCategory =
  | "all"
  | "mosquito-nets"
  | "designer-blinds"
  | "customised-curtains"
  | "curtain-accessories"
  | "installations-projects";

export type GalleryImageType = "catalogue" | "installation";

export interface GalleryItemData {
  id: string;
  title: string;
  category:
    | "mosquito-nets"
    | "designer-blinds"
    | "customised-curtains"
    | "curtain-accessories"
    | "installations-projects";
  categoryLabel: string;
  image: string;
  description: string;
  imageType: GalleryImageType;
  location?: string;
  badge?: string;
  highlights?: string[];
  aspectRatio?: "4/3" | "16/9" | "3/4" | "1/1" | "16/10";
}

export interface GalleryCategoryFilter {
  id: GalleryCategory;
  label: string;
  count?: number;
}

