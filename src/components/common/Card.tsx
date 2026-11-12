import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  variant?: "default" | "soft" | "alt" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles = {
  default: "bg-white",
  soft: "bg-[#F8F9FC]",
  alt: "bg-[#F1F4FA]",
  elevated: "bg-white shadow-[var(--shadow-card)]",
};

const paddingStyles = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      bordered = true,
      variant = "default",
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          variantStyles[variant],
          paddingStyles[padding],
          bordered &&
            "border border-[#E5E9F2] hover:border-[#CDD5E2] hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "architectural" | "editorial" | "portrait" | "square" | "video";
}

const aspectStyles = {
  architectural: "aspect-[16/9]",
  editorial: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  video: "aspect-video",
};

export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, aspectRatio = "editorial", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-[#F1F4FA]",
          aspectStyles[aspectRatio],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardImage.displayName = "CardImage";
