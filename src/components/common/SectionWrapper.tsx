import { forwardRef, type HTMLAttributes, type ElementType } from "react";
import { Container, type ContainerProps } from "@/components/layout/Container";
import { cn } from "@/utils/cn";

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  background?: "white" | "soft" | "alt" | "charcoal" | "transparent";
  containerSize?: ContainerProps["size"];
  noContainer?: boolean;
  spacing?: "none" | "sm" | "default" | "lg";
}

const backgroundStyles = {
  white: "bg-white text-[#151717]",
  soft: "bg-[#F8F9FC] text-[#151717]",
  alt: "bg-[#F1F4FA] text-[#151717]",
  charcoal: "bg-[#151717] text-white",
  transparent: "bg-transparent",
};

const spacingStyles = {
  none: "py-0",
  sm: "py-10 sm:py-14",
  default: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  (
    {
      as: Component = "section",
      background = "white",
      containerSize = "default",
      noContainer = false,
      spacing = "default",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden",
          backgroundStyles[background],
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {noContainer ? (
          children
        ) : (
          <Container size={containerSize}>{children}</Container>
        )}
      </Component>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

