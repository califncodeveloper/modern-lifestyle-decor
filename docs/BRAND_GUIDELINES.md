# Modern LifeStyle Decor — Brand Guidelines & Design System

Comprehensive brand identity, typography tokens, component specifications, and interaction guidelines for the **Modern LifeStyle Decor** platform.

---

## 1. Brand Overview

- **Brand Name**: Modern LifeStyle Decor
- **Tagline**: Blinds & Mosquito Net
- **Core Business Model**: Manufacturer | Wholesale | Retail
- **Core Product Categories**:
  1. Mosquito Nets (Pleated, Roll-up, Magnetic, Heavy-duty Mesh)
  2. Window Blinds (Roller, Zebra, Venetian, Roman, Motorized)
  3. Customised Curtains (Made-to-measure Drapery, Sheer, Blackout, Motorized Tracks)
- **Positioning**: High-end interior furnishing and window treatment studio combining precision manufacturing quality with architectural elegance.

---

## 2. Official Logo Usage

The official Modern LifeStyle Decor logo combines three key elements:
1. **Emblem**: A Royal Blue crescent moon enclosing a Golden Yellow sunburst / blinds fan with six rays.
2. **Wordmark**: A dynamic, stylized brush-stroke Royal Blue "M" lettermark leading into crisp geometric sans-serif "ODERN" in Charcoal Black.
3. **Pill & Tagline**: A rounded Royal Blue pill housing `LIFESTYLE DECOR` in pure white uppercase lettering, followed by `BLINDS & MOSQUITO NET` in tracked uppercase sans-serif.

### Logo Variants

| Variant | Filename | Background | Intended Context |
| :--- | :--- | :--- | :--- |
| **Primary Full (Light)** | `logo.svg` / `logo.png` | Light surfaces (`#FFFFFF`, `#F8F9FC`) | Editorial displays, document headers, primary branding. |
| **Primary Full (Dark)** | `logo-dark.svg` / `logo-dark.png` | Dark surfaces (`#151717`, `#000000`) | Charcoal sections, modal dialogs, dark hero overlays. |
| **Horizontal (Light)** | `logo-horizontal.svg` / `logo-horizontal.png` | Light surfaces (`#FFFFFF`) | Main desktop sticky navigation, mobile top bar. |
| **Horizontal (Dark)** | `logo-horizontal-dark.svg` / `logo-horizontal-dark.png` | Dark surfaces (`#151717`) | Global dark footer, invoices, certifications. |
| **Emblem Icon** | `logo-icon.svg` / `logo-icon.png` | Any clean surface | Favicons, app icons, social media avatars. |

### Clearspace & Sizing Rules
- **Minimum Clearspace**: The logo must be surrounded by clear margin equal to at least 50% of the emblem diameter.
- **Minimum Digital Height**:
  - Full Vertical Logo: Minimum 80px height.
  - Horizontal Navbar Logo: Minimum 36px height (standard 44px–48px).
  - Emblem Icon: Minimum 24px height.

---

## 3. Brand Colour Palette

Refined directly from the official PDF artwork (`assets/source/Modern LifeStyle Decor.pdf`).

### Primary Palette

| Swatch | Color Name | Hex Code | RGB | Role & Usage |
| :---: | :--- | :--- | :--- | :--- |
| ![#004AAD](https://placehold.co/24x24/004AAD/004AAD.png) | **Royal Blue** | `#004AAD` | `rgb(0, 74, 173)` | **Primary Brand Color**: Navigation highlights, primary buttons, links, brand accents, icon crescent. |
| ![#FFC30C](https://placehold.co/24x24/FFC30C/FFC30C.png) | **Golden Yellow** | `#FFC30C` | `rgb(255, 195, 12)` | **Secondary Brand Accent**: Sunburst fan rays, active indicators, small eyebrow tags, subtle focus cues. |
| ![#151717](https://placehold.co/24x24/151717/151717.png) | **Charcoal Black** | `#151717` | `rgb(21, 23, 23)` | **Neutral Dark**: Display titles, headings, body text, global footer background. |
| ![#FFFFFF](https://placehold.co/24x24/FFFFFF/FFFFFF.png) | **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | **Canvas & High Contrast**: Main surface background, pill text, card surfaces. |
| ![#F8F9FC](https://placehold.co/24x24/F8F9FC/F8F9FC.png) | **Soft Architectural Background** | `#F8F9FC` | `rgb(248, 249, 252)` | **Soft Neutral**: Alternate card backgrounds, subtle section transitions, hover states. |
| ![#737373](https://placehold.co/24x24/737373/737373.png) | **Muted Grey** | `#737373` | `rgb(115, 115, 115)` | **Secondary Text**: Meta descriptions, captions, inactive links, subtle borders. |

### Color Roles & Restraint
> [!IMPORTANT]
> - **Never** make entire backgrounds vibrant blue or bright yellow. The site must evoke a serene architectural interior.
> - **Never** use the legacy warm brass (`#b4975a`) as the primary brand accent.
> - White and soft neutral surfaces (`#FFFFFF` and `#F8F9FC`) must comprise 80%+ of the visible screen area.

---

## 4. Typography System

The typography marries structural precision with effortless readability.

### Typefaces
- **Headings & Display**: `Montserrat`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`
  - Clean geometric sans-serif that echoes the exact geometry of the "ODERN" wordmark.
- **Body & Captions**: `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
  - High-legibility system sans stack with zero runtime blocking.
- **Monospace (Data / Specs)**: `ui-monospace`, `Consolas`, `monospace`

### Responsive Typography Scale (`clamp()`)

| Token | CSS Variable | Scale (`clamp`) | Desktop Approx | Mobile Approx | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `--text-display` | `clamp(2.5rem, 5.5vw + 1rem, 4.75rem)` | 76px | 40px | 1.08 |
| **H1** | `--text-h1` | `clamp(2rem, 3.5vw + 0.5rem, 3.5rem)` | 56px | 32px | 1.15 |
| **H2** | `--text-h2` | `clamp(1.625rem, 2.5vw + 0.5rem, 2.75rem)` | 44px | 26px | 1.20 |
| **H3** | `--text-h3` | `clamp(1.25rem, 1.8vw + 0.25rem, 1.875rem)` | 30px | 20px | 1.30 |
| **H4** | `--text-h4` | `clamp(1.125rem, 1.2vw + 0.2rem, 1.375rem)` | 22px | 18px | 1.40 |
| **Body Large**| `--text-body-lg`| `clamp(1.125rem, 0.4vw + 1rem, 1.25rem)` | 20px | 18px | 1.60 |
| **Body Base** | `--text-body` | `1rem` | 16px | 16px | 1.65 |
| **Body Small**| `--text-body-sm`| `0.875rem` | 14px | 14px | 1.55 |
| **Caption** | `--text-caption`| `0.75rem` | 12px | 12px | 1.40 |
| **Navigation**| `--text-nav` | `0.8125rem` | 13px | 13px | 1.00 |

---

## 5. Spacing, Layout & Grids

- **Maximum Container Width**: `80rem` (1280px) via `<Container size="default">`
- **Side Padding**: `px-4 sm:px-6 lg:px-8`
- **Vertical Section Spacing**:
  - Major Sections: `--section-spacing-y: clamp(4rem, 8vw, 7.5rem)` (64px to 120px)
  - Minor Sections: `--section-spacing-y-sm: clamp(2.5rem, 5vw, 4rem)` (40px to 64px)
- **Grid Gaps**: `--grid-gap: clamp(1.25rem, 2.5vw, 2.5rem)` (20px to 40px)
- **Navbar Height**:
  - Desktop: `5rem` (80px)
  - Mobile: `4.25rem` (68px)

---

## 6. Component Design Standards

### Button Standards (`src/components/common/Button.tsx`)
Buttons must be crisp, architectural, and uppercase with wide tracking (`tracking-wider` / `tracking-widest`).

| Variant | Purpose | Visual Styling |
| :--- | :--- | :--- |
| `primary` | Key CTAs, Inquiries, Orders | Solid Royal Blue (`bg-[#004AAD]`), white text, hover `#003A8C`. |
| `secondary` | Secondary actions, downloads | Outlined Royal Blue (`border-2 border-[#004AAD]`), transparent bg, hover `#EEF4FD`. |
| `dark` | High-contrast actions on light bg | Solid Charcoal (`bg-[#151717]`), white text, hover `#262626`. |
| `white` | Hero overlay CTAs, dark surfaces | Solid White (`bg-white`), Royal Blue text, subtle border `#E5E9F2`. |
| `outline` | Neutral actions, secondary filters | Subtle border `#CDD5E2`, Charcoal text, hover `#151717`. |
| `ghost` | Text-only action links | Transparent bg, Charcoal text, hover Royal Blue. |

### Card Standards (`src/components/common/Card.tsx`)
- **Borders**: Subtle `#E5E9F2` border by default, hovering to `#CDD5E2`.
- **Shadows**: Restrained architectural shadows (`--shadow-card`).
- **Aspect Ratios**: Handled via `CardImage` component with fixed ratios:
  - `architectural` (`16:9`)
  - `editorial` (`4:3`)
  - `portrait` (`3:4`)
  - `square` (`1:1`)

### Section Header Standards (`src/components/common/SectionHeader.tsx`)
- **Eyebrow**: Uppercase `text-xs tracking-[0.28em] font-semibold` with small indicator dot.
- **Title**: Responsive fluid heading in Charcoal Black.
- **Description**: High readability, max width `2xl`, lead-relaxed text `#525252`.

---

## 7. Global Animation Foundation

Animations must be lightweight, hardware-accelerated, and strictly adhere to `prefers-reduced-motion`.

- **Engine**: Framer Motion 14 + Lenis (singleton scroll engine).
- **Core Easing**: `EASINGS.luxury` (`[0.22, 1, 0.36, 1]`) — gentle luxury deceleration.
- **Reusable Presets**:
  - `fadeIn` / `fadeUp` / `fadeDown`
  - `staggerContainer` / `staggerItem`
  - `imageReveal` / `imageCurtainReveal`
  - `textReveal`
  - `hoverLift` / `hoverScale` / `buttonPress`
  - `pageTransition`
  - `scrollReveal`

---

## 8. Do's and Don'ts

### Do's:
1. **Do** prioritize large, expansive architectural imagery of mosquito netting, blinds, and curtains.
2. **Do** use generous whitespace around typography and cards.
3. **Do** use Royal Blue `#004AAD` for primary actions and Golden Yellow `#FFC30C` for small accents/indicators.
4. **Do** keep cards rectangular with subtle borders (`border-[#E5E9F2]`).
5. **Do** use the official horizontal logo lockup in the header and footer.

### Don'ts:
1. **Don't** use generic warm brass `#b4975a` as the primary brand color.
2. **Don't** overuse Golden Yellow on large blocks or backgrounds.
3. **Don't** apply heavy drop-shadows or 3D glassmorphism.
4. **Don't** initialize a second Lenis smooth scroll instance.
5. **Don't** use low-resolution or generic furniture photos that do not match the brand's core offerings (Mosquito Nets, Blinds, Curtains).

