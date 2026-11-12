import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: "primary" | "secondary" | "dark" | "white" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const variantStyles = {
  primary:
    "bg-[#004AAD] text-white border border-[#004AAD] hover:bg-[#003A8C] hover:border-[#003A8C] hover:shadow-md active:bg-[#002D6E] focus-visible:ring-[#004AAD]",
  secondary:
    "bg-transparent text-[#004AAD] border-2 border-[#004AAD] hover:bg-[#EEF4FD] hover:border-[#003A8C] active:bg-[#E0ECFC] focus-visible:ring-[#004AAD]",
  dark:
    "bg-[#151717] text-white border border-[#151717] hover:bg-[#262626] hover:border-[#262626] hover:shadow-md active:bg-black focus-visible:ring-[#FFC30C]",
  white:
    "bg-white text-[#151717] border border-[#E5E9F2] hover:bg-[#F8F9FC] hover:border-[#CDD5E2] hover:text-[#004AAD] hover:shadow-md active:bg-[#EFF2F7] focus-visible:ring-[#004AAD]",
  outline:
    "bg-transparent text-[#151717] border border-[#CDD5E2] hover:border-[#151717] hover:bg-[#F8F9FC] active:bg-[#F1F4FA] focus-visible:ring-[#151717]",
  ghost:
    "bg-transparent text-[#151717] hover:bg-[#F8F9FC] hover:text-[#004AAD] active:bg-[#F1F4FA] focus-visible:ring-[#004AAD]",
};

const sizeStyles = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "ghost",
      size = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none motion-reduce:transform-none motion-reduce:transition-none",
          variant !== "ghost" && "hover:-translate-y-0.5 active:translate-y-0",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
