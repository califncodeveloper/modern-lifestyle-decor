import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  ShieldCheck,
  Ruler,
  PhoneCall,
  ArrowLeft,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductEnquiryButton } from "@/components/services/ProductEnquiryButton";
import { ProductCard } from "@/components/services/ProductCard";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { siteConfig } from "@/config/site";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.name} | ${product.categoryLabel} | ${siteConfig.name}`;
  const description =
    product.description ||
    `${product.name} manufactured by ${siteConfig.name}. Custom measurements and wholesale/retail supply.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/products/${product.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} - ${siteConfig.name}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryHref =
    product.category === "mosquito-nets"
      ? "/services/mosquito-nets"
      : product.category === "blinds"
      ? "/services/blinds"
      : "/services/customised-curtains";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: product.categoryLabel, href: categoryHref },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  const relatedProducts = getRelatedProducts(product.slug, product.category, 3);

  return (
    <article className="min-h-screen bg-white">
      {/* 1. Breadcrumbs & Category Bar */}
      <div className="border-b border-neutral-100 bg-[#F8F9FC] py-3.5 sm:py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Breadcrumbs items={breadcrumbs} />
            <Link
              href={categoryHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#004AAD] hover:text-[#003A8C] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to {product.categoryLabel}</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* 2. Primary Product Showcase */}
      <section className="py-10 sm:py-14 lg:py-18">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Visual Image Showcase (Left Column) */}
            <div className="lg:col-span-6">
              <ProductImageGallery
                productName={product.name}
                categoryLabel={product.categoryLabel}
                primaryImage={product.image}
                galleryImages={product.galleryImages}
                badge={product.badge}
                isClientProduct={product.isClientProduct}
              />
            </div>

            {/* Product Meta & Details (Right Column) */}
            <div className="flex flex-col lg:col-span-6">
              {/* Category Tag & Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004AAD]">
                  {product.categoryLabel}
                </span>
                {product.badge && (
                  <span className="rounded-full bg-[#004AAD]/5 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[#004AAD] border border-[#004AAD]/15">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Heading */}
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#151717] leading-tight">
                {product.name}
              </h1>

              {/* Full Description */}
              <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-[#525252]">
                {product.description}
              </p>

              {/* Key Features & Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-[#151717] mb-3">
                    Key Highlights & Features
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="inline-flex items-center gap-2 rounded-xs bg-[#F8F9FC] px-3 py-2 text-xs text-[#151717] border border-neutral-200/70"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#004AAD]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Material & Variants (where available) */}
              {(product.material || (product.variants && product.variants.length > 0)) && (
                <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.material && (
                    <div className="rounded-xs bg-[#F8F9FC] p-3.5 border border-neutral-200/60">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737373] block mb-1">
                        Material & Construction
                      </span>
                      <span className="text-xs font-medium text-[#151717]">
                        {product.material}
                      </span>
                    </div>
                  )}
                  {product.variants && product.variants.length > 0 && (
                    <div className="rounded-xs bg-[#F8F9FC] p-3.5 border border-neutral-200/60">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737373] block mb-1">
                        Available Variants
                      </span>
                      <span className="text-xs font-medium text-[#151717]">
                        {product.variants.join(" • ")}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Ideal Applications (where supported) */}
              {product.applications && product.applications.length > 0 && (
                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-[#151717] mb-2.5">
                    Recommended Applications
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white px-3 py-1 text-xs font-normal text-[#525252] border border-neutral-200 shadow-2xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Primary Call to Actions */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <ProductEnquiryButton
                  productName={product.name}
                  categoryLabel={product.categoryLabel}
                  variant="primary"
                  size="md"
                  text="Enquire on WhatsApp"
                  className="w-full sm:w-auto sm:flex-1"
                />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xs border border-neutral-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151717] hover:bg-[#F8F9FC] hover:border-[#151717] transition-all"
                >
                  <PhoneCall className="h-4 w-4 text-[#004AAD]" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
              </div>

              {/* Measurement Notice */}
              <div className="mt-4 flex items-center gap-2 text-[11px] text-[#737373]">
                <Ruler className="h-3.5 w-3.5 text-[#004AAD]" />
                <span>Custom measurements and on-site fitment available.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Verified Technical Specifications Table (Only if available) */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#F8F9FC] border-y border-neutral-200/80">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#004AAD] mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                VERIFIED SPECIFICATIONS
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
                Technical Details & Fitment
              </h2>
              <p className="mt-2 text-sm text-[#525252] font-light">
                Specifications verified from physical fabrication and installation standards.
              </p>

              <div className="mt-6 overflow-hidden rounded-xs border border-neutral-200 bg-white shadow-2xs">
                <dl className="divide-y divide-neutral-100">
                  {product.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-3 px-5 py-3.5 text-xs sm:text-sm hover:bg-[#F8F9FC]/80 transition-colors"
                    >
                      <dt className="font-medium text-[#151717]">{spec.label}</dt>
                      <dd className="sm:col-span-2 text-[#525252] font-light mt-0.5 sm:mt-0">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4. Manufacturing Quality Promise */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xs border border-neutral-200/80 bg-[#F8F9FC]">
              <ShieldCheck className="h-6 w-6 text-[#004AAD] mb-3" />
              <h3 className="font-heading text-base font-medium text-[#151717]">
                Direct Manufacturer Quality
              </h3>
              <p className="mt-1.5 text-xs text-[#525252] leading-relaxed font-light">
                Fabricated at our Padappai manufacturing facility using premium aluminium sections and stainless steel mesh.
              </p>
            </div>
            <div className="p-6 rounded-xs border border-neutral-200/80 bg-[#F8F9FC]">
              <Ruler className="h-6 w-6 text-[#004AAD] mb-3" />
              <h3 className="font-heading text-base font-medium text-[#151717]">
                Precision Custom Fit
              </h3>
              <p className="mt-1.5 text-xs text-[#525252] leading-relaxed font-light">
                Every frame and drapery panel is individually measured to match your window and door dimensions exactly.
              </p>
            </div>
            <div className="p-6 rounded-xs border border-neutral-200/80 bg-[#F8F9FC]">
              <MapPin className="h-6 w-6 text-[#004AAD] mb-3" />
              <h3 className="font-heading text-base font-medium text-[#151717]">
                Wholesale & Retail Supply
              </h3>
              <p className="mt-1.5 text-xs text-[#525252] leading-relaxed font-light">
                Serving homeowners, interior designers, architects, and trade contractors across Chennai and Tamil Nadu.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-18 bg-[#F8F9FC]">
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004AAD] block mb-1">
                  EXPLORE MORE
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#151717]">
                  Related {product.categoryLabel}
                </h2>
              </div>
              <Link
                href={categoryHref}
                className="text-xs font-semibold uppercase tracking-wider text-[#004AAD] hover:text-[#003A8C] transition-colors"
              >
                View Full Category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Consultation & Measurement CTA */}
      <ServiceCTA
        categoryName={product.name}
        eyebrow="BESPOKE CONSULTATION"
        title={`Custom Measurements for ${product.name}`}
        description="Connect with our technical specialists for prompt material inspection, on-site measurements, and custom wholesale/retail quotes."
      />
    </article>
  );
}
