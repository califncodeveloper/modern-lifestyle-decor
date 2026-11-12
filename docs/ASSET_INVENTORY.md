# Asset Inventory — Modern LifeStyle Decor

This inventory documents all visual, brand, and media assets for the Modern LifeStyle Decor web platform.

---

## 1. Official Brand Identity Assets

### Source Location
- **Original Source PDF**: `assets/source/Modern LifeStyle Decor.pdf`
  - **Origin**: Official brand artwork authored in Canva (`DAGMBGFiu5E`).
  - **Vector Elements**:
    - Dual crescent sunburst / blinds fan emblem (Golden Yellow `#FFC30C` & Royal Blue `#004AAD`).
    - Stylized brush calligraphy "M" lettermark (Royal Blue `#004AAD`).
    - Geometric bold sans-serif "ODERN" wordmark (Charcoal Black `#151717`).
    - Rounded badge pill (Royal Blue `#004AAD`) with white uppercase tracked text: `LIFESTYLE DECOR`.
    - High-precision raster tagline: `BLINDS & MOSQUITO NET`.

### Generated Working Brand Assets
All extracted and optimized brand assets are saved in `public/images/brand/`:

| Asset File | Format | Dimensions | Background | Recommended Usage |
| :--- | :--- | :--- | :--- | :--- |
| `logo.svg` | SVG (Vector) | 1150 × 900 (viewBox) | Transparent | Primary brand logo for light backgrounds, hero sections, documentation. |
| `logo.png` | PNG (Raster) | 1200 × 939 | Transparent | High-DPI fallbacks, OpenGraph metadata, email templates, print previews. |
| `logo-dark.svg` | SVG (Vector) | 1150 × 900 (viewBox) | Transparent | Inverted logo for dark surfaces (charcoal footer, dark modals, hero overlays). |
| `logo-dark.png` | PNG (Raster) | 1200 × 939 | Transparent | High-DPI dark fallback image. |
| `logo-horizontal.svg` | SVG (Vector) | 1600 × 340 (viewBox) | Transparent | Primary navigation bar, header lockup, mobile sticky bar. |
| `logo-horizontal.png` | PNG (Raster) | 1200 × 255 | Transparent | High-DPI raster fallback for horizontal navigation bars. |
| `logo-horizontal-dark.svg` | SVG (Vector) | 1600 × 340 (viewBox) | Transparent | Horizontal navigation and dark footer branding. |
| `logo-horizontal-dark.png` | PNG (Raster) | 1200 × 255 | Transparent | High-DPI dark horizontal raster asset. |
| `logo-icon.svg` | SVG (Vector) | 500 × 500 (viewBox) | Transparent | Standalone crescent-sunburst icon, app icon, compact avatar. |
| `logo-icon.png` | PNG (Raster) | 512 × 512 | Transparent | App touch icon, PWA manifests, social avatar. |
| `favicon.png` | PNG (Raster) | 64 × 64 | Transparent | Browser tab favicon icon. |

---

## 2. Project Photographs (Portfolio Imagery)

### Specified Location
- **Source Directory**: `assets/source/project-images/`
- **Target Working Directory**: `public/images/projects/`

### Audit & Inspection Status
> [!IMPORTANT]
> **Source Asset Status**: MISSING FROM SOURCE DIRECTORY (`assets/source/project-images/`).
>
> In accordance with strict development rules:
> 1. We searched the entire workspace, parent directories, and user asset folders.
> 2. The source folder `assets/source/project-images/` was not provided or uploaded by the user prior to this phase.
> 3. Rather than inventing dummy filenames, generating synthetic AI images, or substituting unrelated images from other projects, this status is accurately reported.
> 4. The working directory `public/images/projects/` has been created and is prepared with architectural aspect ratio presets to receive the seven photographs when provided.

### Pending Project Photographs Checklist (To be populated upon receipt)

| Slot | Planned Filename | Aspect Ratio | Dimensions | Subject Matter | Status |
| :---: | :--- | :---: | :---: | :--- | :---: |
| 1 | `project-01-mosquito-net.webp` | 4:3 / 16:9 | TBD | Custom Pleated / Roller Mosquito Net Installation | Pending User Upload |
| 2 | `project-02-window-blinds.webp` | 4:3 / 16:9 | TBD | Architectural Venetian / Roller Blinds | Pending User Upload |
| 3 | `project-03-curtains.webp` | 3:4 / 4:3 | TBD | Customised Living Room Drapery & Curtains | Pending User Upload |
| 4 | `project-04-residential.webp` | 16:9 | TBD | Full Residential Window Treatment Showcase | Pending User Upload |
| 5 | `project-05-commercial.webp` | 16:9 | TBD | Corporate Office Blinds Installation | Pending User Upload |
| 6 | `project-06-precision-fit.webp` | 4:3 | TBD | Detail Craftsmanship / Hardware & Netting Mesh | Pending User Upload |
| 7 | `project-07-factory-craft.webp` | 16:9 | TBD | Manufacturing / Wholesale Workshop & Assembly | Pending User Upload |

---

## 3. Image Optimization Standards for Future Additions

When the project photographs are supplied, all assets must be formatted according to:

1. **Formats**: Modern WebP or AVIF with fallback JPEG/PNG.
2. **Color Profile**: sRGB standard for web rendering.
3. **Aspect Ratios**:
   - Architectural / Hero: `16:9` (`--aspect-architectural`)
   - Editorial / Showcase: `4:3` (`--aspect-editorial`)
   - Vertical Detail / Portals: `3:4` (`--aspect-portrait`)
   - Thumbnails / Features: `1:1` (`--aspect-square`)
4. **Resolution Standards**:
   - Large / Hero Displays: 1920 × 1080 (max 2560px)
   - Cards / Editorial: 1200 × 900
   - Thumbnails: 600 × 600
5. **Compression Target**: `< 250 KB` per WebP image to ensure instantaneous first-contentful paint with Next.js image optimization.

