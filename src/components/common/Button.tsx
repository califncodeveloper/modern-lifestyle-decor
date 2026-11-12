import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "white" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

const variantStyles = {
  primary:
    "bg-[#004AAD] text-white border border-[#004AAD] hover:bg-[#003A8C] hover:border-[#003A8C] hover:shadow-md active:bg-[#002D6E] focus-visible:ring-[#004AAD] shadow-xs",
  secondary:
    "bg-transparent text-[#004AAD] border-2 border-[#004AAD] hover:bg-[#EEF4FD] hover:border-[#003A8C] hover:shadow-xs active:bg-[#E0ECFC] focus-visible:ring-[#004AAD]",
  dark:
    "bg-[#151717] text-white border border-[#151717] hover:bg-[#262626] hover:border-[#262626] hover:shadow-md active:bg-black focus-visible:ring-[#151717] shadow-xs",
  white:
    "bg-white text-[#004AAD] border border-[#E5E9F2] hover:bg-[#F8F9FC] hover:border-[#CDD5E2] hover:shadow-md active:bg-[#EFF2F7] focus-visible:ring-[#004AAD] shadow-xs",
  outline:
    "bg-transparent text-[#151717] border border-[#CDD5E2] hover:border-[#151717] hover:bg-[#F8F9FC] hover:shadow-xs active:bg-[#F1F4FA] focus-visible:ring-[#151717]",
  ghost:
    "bg-transparent text-[#151717] hover:bg-[#F8F9FC] hover:text-[#004AAD] focus-visible:ring-[#004AAD]",
};

const sizeStyles = {
  sm: "h-[var(--btn-height-sm,2.25rem)] px-4 text-xs tracking-wider gap-2",
  md: "h-[var(--btn-height-md,2.75rem)] px-6 text-xs tracking-widest gap-2.5",
  lg: "h-[var(--btn-height-lg,3.25rem)] px-8 text-sm tracking-widest gap-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium uppercase rounded-xs transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer select-none motion-reduce:transform-none motion-reduce:transition-none",
          variant !== "ghost" && "hover:-translate-y-0.5 active:translate-y-0",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 items-center transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
