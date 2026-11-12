import Image from "next/image";
import { cn } from "@/utils/cn";
import type { ClientBrand } from "@/data/clients";

interface ClientLogoCardProps {
  client: ClientBrand;
  className?: string;
}

export function ClientLogoCard({ client, className }: ClientLogoCardProps) {
  const altText = client.isSignagePhoto
    ? `${client.name} company signage`
    : `${client.name} logo`;

  return (
    <article
      className={cn(
        "group relative flex flex-col items-center justify-between rounded-xs border border-neutral-200/80 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 hover:bg-[#FAFAFA] hover:shadow-2xs",
        className
      )}
      aria-label={client.name}
    >
      {/* Visual Logo Container with individual scaling and containment */}
      <div className="relative flex h-24 sm:h-28 w-full items-center justify-center overflow-hidden">
        <Image
          src={client.logoSrc}
          alt={altText}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 22vw, 15vw"
          className={cn(
            "object-contain transition-transform duration-300 group-hover:scale-[1.03]",
            client.imageClassName
          )}
          priority={false}
        />
      </div>

      {/* Subtle Editorial Label */}
      <div className="mt-4 flex w-full flex-1 items-end justify-center border-t border-neutral-100/90 pt-3 text-center">
        <p className="text-[11px] sm:text-xs font-medium tracking-wide uppercase text-neutral-600 line-clamp-2 leading-relaxed">
          {client.name}
        </p>
      </div>
    </article>
  );
}

