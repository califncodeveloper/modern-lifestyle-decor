import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/utils/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

export function Breadcrumbs({
  items,
  className,
  showHomeIcon = true,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs tracking-wider uppercase font-medium", className)}
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-neutral-500">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-neutral-500 hover:text-[#004AAD] transition-colors"
            title="Home"
          >
            {showHomeIcon ? (
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <span>Home</span>
            )}
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <ChevronRight
                className="h-3 w-3 text-neutral-400 shrink-0 mx-1"
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-[#004AAD] transition-colors max-w-[140px] sm:max-w-xs md:max-w-none truncate inline-block align-bottom"
                  title={item.label}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-[#004AAD] font-semibold max-w-[150px] sm:max-w-xs md:max-w-none truncate inline-block align-bottom"
                  aria-current={isLast ? "page" : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

