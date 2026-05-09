---
name: Midnight Collectible Exchange
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#b9cac9'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#839493'
  outline-variant: '#3a4a49'
  surface-tint: '#00dddd'
  primary: '#ffffff'
  on-primary: '#003737'
  primary-container: '#00fbfb'
  on-primary-container: '#007070'
  inverse-primary: '#006a6a'
  secondary: '#ebb2ff'
  on-secondary: '#520072'
  secondary-container: '#b600f8'
  on-secondary-container: '#fff6fc'
  tertiary: '#ffffff'
  on-tertiary: '#2b3137'
  tertiary-container: '#dde3eb'
  on-tertiary-container: '#5f656c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#00fbfb'
  primary-fixed-dim: '#00dddd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is anchored in the concept of "Machined Luxury." It targets high-stakes collectors who value precision, authenticity, and technical excellence. The aesthetic is a fusion of **High-Contrast Minimalism** and **Tactile Futurism**, evoking the feeling of a secure, underground vault for digital and physical assets.

The emotional response should be one of "Cold Confidence"—the UI feels expensive, heavy, and engineered. We lean into the physical metaphors of brushed aluminum, CNC-milled surfaces, and illuminated hardware interfaces. Every element should feel like it was manufactured rather than drawn, utilizing sharp edges and localized light sources to simulate a physical presence in a dark environment.

## Colors

The palette is dominated by **Inky Obsidian**, providing a high-depth canvas that makes the technical accents vibrate. 

- **The Void (Background):** #080809. This is not a flat black; it must be overlaid with a subtle, static-like grain texture (2-3% opacity) to create a sense of material depth.
- **The Vault (Containers):** #1A1D21. Used for structural units. These surfaces should feel like matte charcoal slabs.
- **Electric Cyan:** Used exclusively for high-priority actions and "active" states. It represents the flow of power through the system.
- **Cyber Purple:** Reserved for secondary indicators, rarity tiers, or specialized market data.
- **Reflective Silver:** Used for borders and iconography to simulate etched metal. This color should often be applied as a linear gradient (45 degrees) to mimic light hitting a beveled edge.

## Typography

Typography in this design system is treated as technical instrumentation. 

- **Space Grotesk** is used for major headings, providing a futuristic, geometric structure that remains highly legible. 
- **Geist** serves as the primary workhorse for body copy, offering a clean, developer-centric clarity that aligns with the "machined" aesthetic.
- **JetBrains Mono** is utilized for metadata, pricing, serial numbers, and labels. This emphasizes the "exchange" nature of the product, making every piece of data feel like part of a technical spec sheet.

All caps should be used sparingly for labels to reinforce the authoritative, industrial tone.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy to maintain the feel of a precision-engineered dashboard. The layout is built on a strict 8px base unit.

- **Grid:** A 12-column grid is standard for desktop, with 24px gutters.
- **Rhythm:** Vertical rhythm is extremely tight. Information density should be high but organized, mimicking a cockpit or a high-end trading terminal.
- **Alignment:** Use hard-edge alignment. Elements should feel "locked" into the grid. Avoid fluid or organic placements; every container should feel like it was bolted into the UI.

## Elevation & Depth

Depth is not communicated through soft, environmental shadows, but through **localized luminescence** and **tonal stacking**.

1.  **Surface Tiers:** The background (#080809) is the lowest level. Containers (#1A1D21) sit directly above it. 
2.  **Rim Lighting:** Instead of a drop shadow, elevated containers use a 1px inner stroke or "rim light" on the top and left edges to simulate a 6000K light source hitting a sharp corner.
3.  **Glows:** Primary elements (like active CTAs) emit a localized "Electric Cyan" outer glow (blur: 12px, spread: -2px) to simulate illuminated plastic or neon.
4.  **Reflections:** Use linear gradients on borders to transition from #4A4E57 to #E2E8F0, creating a "chrome" or "brushed metal" effect.

## Shapes

The shape language is dominated by **sharp, technical precision**. 

- **Primary Radius:** 0.25rem (4px). This provides a "softened-sharp" edge, characteristic of machined metal parts. 
- **Large Components:** Product cards and major containers should not exceed 8px (rounded-lg) to maintain the serious, industrial tone.
- **Interactive Elements:** Buttons and inputs follow the 4px standard. 
- **The "Slab" Effect:** Elements should look heavy. Use solid fills rather than thin outlines for containers to emphasize their physical weight.

## Components

### Buttons
Buttons are designed to look like **illuminated hardware switches**. 
- **Primary:** Electric Cyan fill with a subtle "brushed" texture overlay. Text is black (#080809) for maximum contrast. On hover, the cyan glow intensity increases.
- **Secondary:** Dark charcoal fill with a 1px "Silver Chrome" border. Text is silver.
- **State:** Active buttons should have a 1px "inner glow" highlight on the top edge.

### Product Cards (The "Graded Slab")
Cards are the centerpiece of the exchange. They must resemble **professionally graded trading cards**.
- **Border:** A 2px metallic frame using a silver/chrome gradient.
- **Header:** A dedicated "Label" section at the top of the card containing the item's name and serial number in JetBrains Mono, separated by a thin hairline stroke.
- **Body:** A high-gloss image area with a very subtle inner shadow to make the asset look "encased" behind glass.

### Input Fields
Inputs are recessed "slots" in the UI.
- **Fill:** #080809 (darker than the container).
- **Border:** 1px solid charcoal.
- **Focus:** The border transitions to Electric Cyan with a sharp, 2px outer glow.

### Chips & Badges
Chips represent rarity and status. They should use a "Cyber Purple" border and text, with a low-opacity purple fill (10%) to suggest a holographic display.

### Lists
Market lists use thin, sharp horizontal dividers (#1A1D21). Rows should have a subtle silver "rim light" on the left edge when hovered to indicate selection.