# Client Showcase Asset Inventory — Modern LifeStyle Decor

This inventory documents the six company and organisation brand assets integrated into the Modern LifeStyle Decor website for **Phase 12 — Our Clients & Companies Showcase**.

---

## 1. Executive Summary & Policy Compliance

- **Strict Authenticity**: Only the six supplied original images provided by the client have been integrated. No generated logos, stock images, vector recreations, or external web alternatives were used.
- **Brand Preservation**: All original proportions, colors, typography, artwork, and emblems have been strictly preserved using non-destructive container scaling and `object-contain`.
- **Target Storage Directory**: `public/images/clients/`
- **Component Implementations**:
  - `src/components/clients/ClientShowcase.tsx` (Main showcase section with balanced responsive grid)
  - `src/components/clients/ClientLogoCard.tsx` (Individual logo container component)
  - `src/data/clients.ts` (Data-driven client brand model)

---

## 2. Integrated Brand Asset Table

| # | Exact Company / Organisation Name | Original Source Filename | Integrated Filename | Native Dimensions | Native Aspect Ratio | Asset Type & Preservation Strategy |
| :-: | :--- | :--- | :--- | :-: | :-: | :--- |
| **1** | **URBANDO** | `WhatsApp Image 2026-11-11 at 15.02.04.jpeg` (`media_1794487209560_83dcf816.jpg`) | `urbando.jpeg` | 400 × 400 px | 1.00 (Square) | **Square Vector Wordmark**: Preserves full vertical bar towers, primary uppercase `URBANDO` text, tagline `PASSION TO BUILD THE BEST`, and outer red bounding border intact. |
| **2** | **HAND IN HAND INDIA** | `WhatsApp Image 2026-11-11 at 15.02.03 (2).jpeg` (`media_1794487209561_fdd13ee9.jpg`) | `hand-in-hand-india.jpeg` | 600 × 178 px | 3.37 (Wide Landscape) | **Horizontal NGO Identity**: Preserves royal blue circular clasped-hands symbol and full uppercase `HAND IN HAND INDIA` wordmark on pure white background. |
| **3** | **SEOYON E-HWA AUTOMOTIVE CHENNAI PRIVATE LIMITED** | `WhatsApp Image 2026-11-11 at 15.02.03 (1).jpeg` (`media_1794487209561_7844a1b6.jpg`) | `seoyon-e-hwa.jpeg` | 899 × 240 px | 3.75 (Panoramic Landscape) | **Corporate Industrial Identity**: Preserves dual-color angular emblem (yellow/blue) and two-tier typography (`SEOYON E-HWA` + `AUTOMOTIVE CHENNAI PRIVATE LIMITED`). |
| **4** | **KCG COLLEGE OF TECHNOLOGY** | `WhatsApp Image 2026-11-11 at 15.02.03.jpeg` (`media_1794487209563_45e198c4.jpg`) | `kcg-college-of-technology.jpeg` | 554 × 554 px | 1.00 (Square) | **Institutional Crest & Wordmark**: Handled large surrounding white space using a CSS `scale-[1.32]` transform inside an overflow-contained card. Absolutely zero emblem artwork or tagline text (`Empower Dreams, Engineer Realities`) is clipped. |
| **5** | **MAHINDRA** | `WhatsApp Image 2026-11-11 at 15.02.02 (1).jpeg` (`media_1794487209563_a547b047.jpg`) | `mahindra.jpeg` | 225 × 225 px | 1.00 (Square) | **Automotive Wordmark & Emblem**: Preserves the 3D chrome "Twin Peaks" symbol and lowercase geometric `mahindra` logotype. |
| **6** | **PUNJAB NATIONAL BANK** | `WhatsApp Image 2026-11-11 at 15.02.02.jpeg` | `punjab-national-bank.jpeg` | 498 × 287 px | 1.74 (Architectural Landscape) | **Corporate Architectural Signage**: Utilised the supplied photograph of the bank's exterior facade signage featuring burgundy corporate background, golden yellow PNB circle emblem, and white typography against glass curtain wall. |

---

## 3. Image Quality Observations & Limitations

### 1. URBANDO (`urbando.jpeg`)
- **Format**: JPEG (Baseline sRGB)
- **Quality Analysis**: Crisp 400×400 resolution. Tagline text ("PASSION TO BUILD THE BEST") has slight compression artifacts in the original file, but renders legibly across all screen resolutions without upscaling degradation.
- **Handling**: Rendered with subtle internal padding `p-1` and `object-contain` to protect the red perimeter border from card edges.

### 2. HAND IN HAND INDIA (`hand-in-hand-india.jpeg`)
- **Format**: JPEG (sRGB)
- **Quality Analysis**: Clean 600×178 horizontal asset with consistent white background `#FFFFFF`. Blue line work in the hands emblem is fully preserved.
- **Handling**: Rendered with horizontal flex alignment and `p-2` padding to balance with taller square logos.

### 3. SEOYON E-HWA AUTOMOTIVE CHENNAI PRIVATE LIMITED (`seoyon-e-hwa.jpeg`)
- **Format**: JPEG (sRGB)
- **Quality Analysis**: Wide aspect ratio (3.75:1). Dark blue typography against crisp white background. Minimal JPEG compression around character edges.
- **Handling**: Positioned with `object-contain` and `p-2` padding to preserve full horizontal length without letter clipping.

### 4. KCG COLLEGE OF TECHNOLOGY (`kcg-college-of-technology.jpeg`)
- **Format**: JPEG (sRGB)
- **Quality Analysis**: Original file contains generous surrounding white margins (logo artwork occupies x: 108–432, y: 185–343 within a 554×554 square).
- **Handling**: To ensure visual parity with adjacent logos while strictly adhering to the directive ("Do not crop any logo text or emblem"), non-destructive CSS scaling (`scale-[1.32]`) is applied within an overflow-contained container. The white margins seamlessly merge with the card background, giving the institution's circular crest and motto full visual prominence.

### 5. MAHINDRA (`mahindra.jpeg`)
- **Format**: JPEG (sRGB)
- **Quality Analysis**: Low native resolution (225×225 px, 4.8 KB). Some JPEG block artifacts around the gradient facets of the twin peaks symbol.
- **Handling**: Displayed in cards with constrained height (`h-24 sm:h-28`) and `object-contain`, preventing over-magnification and ensuring clean pixel rendering on high-DPI displays.

### 6. PUNJAB NATIONAL BANK (`punjab-national-bank.jpeg`)
- **Format**: JPEG (sRGB)
- **Quality Analysis**: 498×287 px photograph of real-world outdoor building signage. The lighting reflects outdoor ambient daylight with slight atmospheric glass reflection on the building facade.
- **Handling**: Framed as an architectural company showcase image with a subtle rounded border (`rounded-2xs shadow-2xs`), celebrating the actual installed corporate presence.

---

## 4. Responsive Grid Validation Matrix

| Target Viewport | Screen Width | Columns | Layout Characteristics | Verification Status |
| :--- | :---: | :---: | :--- | :---: |
| **Mobile Compact** | 360 px | 2 cols | 3 rows × 2 cards. Card min-height 160px. Touch-safe gutters. | **Pass** |
| **Mobile Standard** | 390 px | 2 cols | 3 rows × 2 cards. Elegant spacing, typography remains legible. | **Pass** |
| **Tablet Portrait** | 768 px | 3 cols | 2 rows × 3 cards. Balanced symmetry with 3 cards per row. | **Pass** |
| **Laptop / Desktop** | 1024 px | 4 cols | 4 cards row 1, 2 cards row 2 (centered). Spacious card pads. | **Pass** |
| **Full Desktop** | 1440 px | 6 cols | Single unified row of 6 brands. Panoramic editorial look. | **Pass** |
| **Ultra-Wide** | 1920 px | 6 cols | Single row within 1280px max-width container, preventing over-stretch. | **Pass** |

---

## 5. Architectural & Accessibility Notes

1. **Semantic HTML**:
   - The showcase is wrapped in a `<section id="clients" aria-labelledby="clients-heading">`.
   - Each logo card is an `<article aria-label="{client.name}">`.
2. **Next.js `<Image>` Optimization**:
   - Responsive `sizes` attribute configured for every breakpoint:
     `sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 22vw, 15vw"`
   - WebP / AVIF automatic format negotiation enabled via Next.js image pipeline.
   - Zero cumulative layout shift (CLS) through fixed container aspect ratios.
3. **Data-Driven Architecture**:
   - Centralised in `src/data/clients.ts`. New client organisations can be added simply by appending to the array without touching UI components.

