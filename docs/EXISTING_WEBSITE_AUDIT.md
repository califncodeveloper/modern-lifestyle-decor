# Modern LifeStyle Decor — Existing Project & Architecture Audit

**Document:** `docs/EXISTING_WEBSITE_AUDIT.md`  
**Date:** November 2026  
**Auditor:** Antigravity AI  
**Project:** Modern LifeStyle Decor  
**Official Website:** https://www.modernlifestyledecor.in/  
**Repository Working Tree:** `e:\Modern LifeStyle Decor\modern-lifestyle-decor`  
**Client Asset Source:** `C:\Users\shubh\Downloads\New folder`  

---

## 1. Executive Summary & Audit Scope

This audit provides a factual, line-by-line inspection of the existing codebase for **Modern LifeStyle Decor**, verifying implemented functionality, data structures, visual assets, navigation routes, and enquiry workflows prior to migrating the demonstration product catalogue to verified client assets.

All findings are based on direct verification of the repository files rather than assumptions from previous completion reports.

---

## 2. Project Architecture & Technology Stack

### 2.1 Package & Core Dependencies (`package.json`)
- **Framework:** Next.js `16.4.6` (App Router, Turbopack/Webpack)
- **React:** `19.3.0` & React DOM `19.3.0`
- **Styling:** Tailwind CSS `4.3.3` with `@tailwindcss/postcss` and `@tailwindcss/turbopack`
- **Animation:** Framer Motion `14.12.0`
- **Smooth Scrolling:** Lenis `1.3.27`
- **Icons:** Lucide React `1.72.0`
- **AI Integration:** Groq SDK `1.6.0` (server-side only)
- **Validation:** Zod `4.6.7`
- **Utility Libraries:** `clsx` (2.1.1), `tailwind-merge` (3.7.0)
- **TypeScript:** `5.x`

### 2.2 Directory Hierarchy
```text
modern-lifestyle-decor/
├── docs/                        # Project documentation & guidelines
├── public/
│   ├── images/
│   │   ├── accessories/         # Demonstration curtain hardware images
│   │   ├── brand/               # Official logos and favicon (SVG & PNG)
│   │   ├── categories/          # Category hero images
│   │   ├── clients/             # 6 genuine client/partner company images
│   │   ├── cta/                 # Call-to-action background visuals
│   │   ├── hero/                # Homepage and service hero images
│   │   ├── intro/               # Brand intro imagery
│   │   └── products/            # Demonstration product catalogue images
├── src/
│   ├── app/                     # Next.js App Router routes & API endpoints
│   │   ├── about/               # About Us page
│   │   ├── api/chat/            # Groq AI chatbot POST endpoint
│   │   ├── contact/             # Contact page with locations & form
│   │   ├── gallery/             # Filterable gallery & lightbox
│   │   ├── services/            # Services overview
│   │   │   ├── blinds/          # Designer Blinds service page
│   │   │   ├── customised-curtains/ # Customised Curtains service page
│   │   │   └── mosquito-nets/   # Mosquito Nets service page
│   │   ├── globals.css          # Design tokens & Tailwind theme layers
│   │   ├── layout.tsx           # Root layout with Header, Footer, Providers
│   │   └── page.tsx             # Homepage
│   ├── components/              # Modular UI components
│   │   ├── about/               # About page sections
│   │   ├── animations/          # Motion primitives (FadeIn, Reveal, etc.)
│   │   ├── chatbot/             # AI chatbot widget, panel, messages
│   │   ├── clients/             # Verified client logo grid & marquee
│   │   ├── common/              # Buttons, Cards, Headers, Breadcrumbs
│   │   ├── contact/             # Contact form, cards, locations
│   │   ├── gallery/             # Filter pills, masonry grid, lightbox
│   │   ├── home/                # Hero, BrandIntro, Categories, FeaturedProducts
│   │   ├── layout/              # Header, Footer, Container, SmoothScroll
│   │   └── services/            # ProductCard, ProductGrid, Editorial, Enquiry
│   ├── config/                  # Site metadata, business contact info, motion
│   ├── data/                    # Central data modules
│   │   ├── about.ts             # Company story & pillars
│   │   ├── clients.ts           # 6 verified client company profiles
│   │   ├── contact.ts           # Contact persons & physical premises
│   │   ├── gallery.ts           # Gallery items array & categories
│   │   ├── homepage.ts          # Hero, featured products, benefits
│   │   ├── navigation.ts        # Header & footer navigation structure
│   │   ├── products.ts          # Central product definitions
│   │   └── services.ts          # Service category descriptions
│   ├── hooks/                   # useChatbot, useLenisScroll, useMediaQuery
│   ├── lib/                     # Groq client, motion variants, env validations
│   ├── types/                   # TypeScript interfaces (decor, chat, gallery, etc.)
│   └── utils/                   # cn helper, formatters, whatsapp link generators
```

---

## 3. Brand & Design System Audit

### 3.1 Color Palette Tokens (Implemented in `src/app/globals.css` & component styles)
- **Primary Royal Blue:** `#004AAD` — Used for primary CTAs, active states, badges, category links.
- **Royal Blue Hover:** `#003A8C` — Used for active interaction and button hover states.
- **Royal Blue Light:** `#EEF4FD` — Used for subtle card backgrounds and hover accents.
- **Golden Yellow Accent:** `#FFC30C` — Used for highlights, decorative dots, star badges, accent icons.
- **Charcoal Neutral:** `#151717` — Primary heading and dark surface color.
- **Soft Neutral Background:** `#F8F9FC` — Alternate section background.
- **Clean White:** `#FFFFFF` — Primary surface and content background.

### 3.2 Typography
- **Headings:** Montserrat font family (`font-heading`, `font-medium`, `font-semibold`, uppercase tracking accents).
- **Body:** Inter font family with light leading for clarity (`font-light`, `leading-relaxed`).

### 3.3 Visual Identity Assets (`public/images/brand/`)
- `logo.svg` & `logo.png` (Default header logo)
- `logo-dark.svg` & `logo-dark.png` (Dark theme / reverse logo)
- `logo-horizontal.svg` & `logo-horizontal.png` (Wide aspect logo)
- `logo-icon.svg` & `logo-icon.png` (Emblem icon)
- `favicon.png` & `favicon.ico`

---

## 4. Website Route & Page Implementation Audit

| Route | Page File | Status | Description |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Implemented | Homepage with Hero, Brand Intro, Category Showcase, Featured Products, Client Showcase, Benefits, Process, Project Gallery slots, Testimonials, Final CTA. |
| `/about` | `src/app/about/page.tsx` | Implemented | About Us page with brand history, business model, manufacturing pillars, expertise, locations. |
| `/services` | `src/app/services/page.tsx` | Implemented | Services overview showcasing Mosquito Nets, Designer Blinds, and Customised Curtains. |
| `/services/mosquito-nets` | `src/app/services/mosquito-nets/page.tsx` | Implemented | Mosquito Nets service page with hero, editorial highlight, 7 demo products, CTA. |
| `/services/blinds` | `src/app/services/blinds/page.tsx` | Implemented | Designer Blinds service page with hero, editorial highlight, 6 demo products, CTA. |
| `/services/customised-curtains` | `src/app/services/customised-curtains/page.tsx` | Implemented | Customised Curtains service page with hero, 7 fabrics, 4 accessories showcase, CTA. |
| `/gallery` | `src/app/gallery/page.tsx` | Implemented | Interactive portfolio gallery with category filters (Mosquito Nets, Blinds, Curtains, Accessories), modal lightbox, image navigation, WhatsApp CTA. |
| `/contact` | `src/app/contact/page.tsx` | Implemented | Contact page with verified proprietor details, two physical addresses (Showroom 2 and Manufacturing Unit), and WhatsApp-direct contact form. |
| `/api/chat` | `src/app/api/chat/route.ts` | Implemented | Server-side Groq AI chat endpoint with Zod validation and safe fallback. |

### Note on Product Detail Pages
- **Current Status:** Individual product detail pages (`/products/[slug]`) do **not** exist in the current codebase. Product items currently link to service category URLs (`/services/mosquito-nets`, `/services/blinds`, `/services/customised-curtains`) or trigger direct WhatsApp product enquiry links.
- **Requirement:** Introduce a scalable App Router dynamic product detail architecture (`/products/[slug]`) that displays verified product details, multiple gallery images, features, variants, breadcrumbs, related products, and WhatsApp CTAs without breaking existing service routes.

---

## 5. Existing Product Data Architecture Audit

### 5.1 Data Sources
The demonstration product data is defined across several files:
1. `src/data/products.ts`:
   - `mosquitoNetProducts`: 7 demonstration products (SS Open Window, SS Open Main Door, Pleated Net, Pleated Heavy Partition, SS Sliding Mesh, Honeycomb Partition, PVC Pleated Partition).
   - `designerBlindsProducts`: 6 demonstration products (Roller, Zebra, PVC, Aluminium, Wooden, Roman).
   - `curtainFabrics`: 7 demonstration fabrics (Blackout, Jacquard, Designer, Polyester, Linen, Cotton, Sheer).
   - `curtainAccessories`: 4 demonstration accessories (Branded Rods, Tracks, Designer Tracks, Jumbo Tracks).
2. `src/data/homepage.ts`:
   - `featuredProducts`: A separate array of 12 demonstration products (4 Mosquito Nets, 4 Blinds, 4 Curtains).
3. `src/data/gallery.ts`:
   - `galleryItems`: 24 demonstration gallery items mirroring the products above.

### 5.2 Observations & Improvements Needed
- **Multiple Disconnected Arrays:** Demonstrations are declared in `src/data/products.ts`, re-declared with slight property variations in `src/data/homepage.ts`, and re-declared again in `src/data/gallery.ts`.
- **Single Source of Truth Opportunity:** Consolidating product records into an extensible central schema in `src/data/products.ts` will eliminate duplication and ensure consistent naming, images, features, and enquiry CTAs across the homepage, service pages, gallery, and new product detail pages.

---

## 6. Existing Enquiry & Integration Workflows

### 6.1 WhatsApp Enquiry Architecture (`src/utils/whatsapp.ts`)
- **Primary Business Number:** `+91 9551080470` (Proprietor Mohammad Al Asath).
- **Secondary Contact Numbers:** Obaidulla Khan (`+91 8667754943`), Shakir (`+91 8526764121`).
- **Product Enquiry Helper:** `createWhatsAppProductEnquiryUrl(productName, categoryLabel, phone)` encodes a pre-formatted message:
  ```text
  Hello Modern LifeStyle Decor,
  I am interested in your [ProductName] [category].
  Please share more information about this product.
  Thank you.
  ```
- **Integrity:** Highly robust, mobile-friendly, direct wa.me link generation without intermediate third-party redirects.

### 6.2 AI Chatbot Architecture (`src/app/api/chat/route.ts` & `src/lib/groq.ts`)
- Powered by server-side Groq SDK calling Llama-3.3-70b-versatile.
- Has a strict system prompt forbidding price inventions, fake discounts, or fabricated turnaround times.
- Guides customers to WhatsApp (+91 9551080470) for exact quotes.
- Safe client fallback when API key is unconfigured.

### 6.3 Verified Client Showcase (`src/data/clients.ts`)
- Implements 6 verified client/partner brand images:
  1. URBANDO (`/images/clients/urbando.jpeg`)
  2. HAND IN HAND INDIA (`/images/clients/hand-in-hand-india.jpeg`)
  3. SEOYON E-HWA AUTOMOTIVE CHENNAI PRIVATE LIMITED (`/images/clients/seoyon-e-hwa.jpeg`)
  4. KCG COLLEGE OF TECHNOLOGY (`/images/clients/kcg-college-of-technology.jpeg`)
  5. MAHINDRA (`/images/clients/mahindra.jpeg`)
  6. PUNJAB NATIONAL BANK (`/images/clients/punjab-national-bank.jpeg`)
- **Status:** Completely implemented and verified. Must remain isolated from the product catalogue migration.

---

## 7. Migration Roadmap & Code Modifications

1. **Part B:** Finalise client product image inventory (`docs/CLIENT_PRODUCT_INVENTORY.md`).
2. **Part D:** Transfer and optimise client product assets into `public/images/products/` with clean semantic naming.
3. **Part E:** Upgrade `src/types/decor.ts` and `src/data/products.ts` into a unified central product data store containing all real client products.
4. **Part E (Detail Pages):** Implement `/products/[slug]` dynamic route with server metadata, image galleries, verified specifications, and WhatsApp enquiry integration.
5. **Part E (Components):** Update `FeaturedProductsSection.tsx`, `ProductCard.tsx`, Service catalogue grids, and `gallery.ts` to source from the central client product repository.
6. **Part H:** Run complete verification (`tsc`, `lint`, `build`) and create `docs/CLIENT_PRODUCT_INTEGRATION_REPORT.md`.

