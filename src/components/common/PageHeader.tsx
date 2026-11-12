import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { cn } from "@/utils/cn";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  align = "left",
  className,
}: PageHeaderProps) {
  const isCentered = align === "center";

  return (
    <section
      className={cn(
        "relative w-full border-b border-[#E5E9F2] bg-[#F8F9FC] py-12 sm:py-16 lg:py-20 overflow-hidden",
        className
      )}
    >
      {/* Subtle architectural background grid line decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#151717 1px, transparent 1px), linear-gradient(90deg, #151717 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={cn("mb-6", isCentered && "flex justify-center")}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div
          className={cn(
            "flex flex-col",
            isCentered ? "items-center text-center mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {eyebrow && (
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#004AAD]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
              {eyebrow}
            </div>
          )}

          <h1 className="font-heading text-3xl font-medium tracking-tight text-[#151717] sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-4 text-base font-light leading-relaxed text-[#525252] sm:text-lg max-w-2xl">
              {description}
            </p>
          )}

          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}

