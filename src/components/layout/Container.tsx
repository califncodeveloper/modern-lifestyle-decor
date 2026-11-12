import { cn } from "@/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "narrow" | "default" | "wide" | "full";
}

const sizeStyles = {
  narrow: "max-w-5xl",
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
  full: "max-w-full",
};

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
