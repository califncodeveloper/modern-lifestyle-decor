import { cn } from "@/utils/cn";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  eyebrowColor?: "blue" | "yellow" | "muted" | "white";
  inverted?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  eyebrowColor = "blue",
  inverted = false,
  className,
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const eyebrowColorStyles = {
    blue: inverted ? "text-[#80B5FF]" : "text-[#004AAD]",
    yellow: "text-[#FFC30C]",
    muted: inverted ? "text-neutral-400" : "text-[#737373]",
    white: "text-white",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignStyles[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-xs uppercase tracking-[0.28em] font-semibold mb-3 flex items-center gap-2",
            eyebrowColorStyles[eyebrowColor]
          )}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight font-heading leading-tight",
          inverted ? "text-white" : "text-[#151717]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-light",
            inverted ? "text-neutral-300" : "text-[#525252]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
