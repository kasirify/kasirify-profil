---
name: Vibrant Grunge Logic
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4d4632'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7f775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd600'
  on-primary-container: '#705d00'
  inverse-primary: '#e9c400'
  secondary: '#0b00e7'
  on-secondary: '#ffffff'
  secondary-container: '#3338fe'
  on-secondary-container: '#d0d1ff'
  tertiary: '#ae3200'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffcec0'
  on-tertiary-container: '#ae3200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe170'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bfc2ff'
  on-secondary-fixed: '#02006d'
  on-secondary-fixed-variant: '#0e05ec'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#852400'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 84px
    fontWeight: '800'
    lineHeight: 90%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 110%
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 110%
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 100%
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-overlap: -12px
---

## Brand & Style

This design system breaks away from sterile SaaS conventions to embrace an energetic, **Neo-Brutalist** aesthetic with a **Retro-Grunge** twist. It targets a creative, forward-thinking audience that values personality over corporate perfection. 

The visual narrative is built on high-impact contrasts, overlapping layers, and tactile imperfections. Instead of polished photography, the system utilizes halftone patterns, grainy textures, and stylized graphic abstractions to create a "zine-like" digital experience. The emotional response is intended to be bold, urgent, and undeniably human.

## Colors

The palette is dominated by a **Saturated Chrome Yellow** that acts as the high-energy foundation for all surfaces. 

- **Primary:** A loud, unapologetic yellow used for backgrounds and hero elements.
- **Secondary:** An "Electric Blue" used for interactive accents and high-contrast overlaps, nodding to the 90s indie aesthetic.
- **Tertiary:** A "Safety Orange" for critical alerts or secondary call-to-actions.
- **Neutral:** A deep "Off-Black" for typography and heavy borders, ensuring maximum legibility against the vibrant background.

Surfaces should occasionally use halftone dither patterns (opacity 10-15%) of the secondary color to add "grunge" depth.

## Typography

The typography strategy prioritizes character and "visual noise." 

**Bricolage Grotesque** provides a quirky, expressive feel for headlines, often used with tight tracking and leading to create dense blocks of text. **Hanken Grotesk** maintains high legibility for body copy, balancing the eccentricity of the display type. **Space Grotesk** is reserved for technical data and labels, adding a slight futuristic/industrial edge to the "grunge" layout.

Text elements should frequently break the grid, utilizing slight rotations (1-2 degrees) or overlapping background elements to reinforce the non-rigid aesthetic.

## Layout & Spacing

The layout philosophy follows a **Deconstructed Grid**. While a 12-column foundation exists for alignment, elements are encouraged to "bleed" across gutters or overlap neighboring containers.

- **Fluid Overlaps:** Use negative margins (stack-overlap) to allow cards and images to layer over one another.
- **Dynamic Padding:** Containers use generous internal padding to create "breathing room" within the chaotic style.
- **Responsive Reflow:** On mobile, overlaps are reduced to vertical stacks to maintain usability, but the "tilted" rotation of elements remains to keep the brand spirit alive.

## Elevation & Depth

This system rejects soft shadows and ambient light. Depth is achieved through **Hard Layering** and **Color Blocking**:

- **Hard Shadows:** Use 100% opacity offsets (e.g., 4px 4px #000) instead of blurs. This creates a "cut-out" or "sticker" feel.
- **Halftone Blurs:** Instead of standard backdrop-blurs, use a halftone pattern overlay on lower layers to suggest they are out of focus.
- **Heavy Borders:** Every container must have a visible 2px or 3px solid black border. This contains the vibrant colors and provides the "Brutalist" structure.

## Shapes

The shape language is "Dynamic Rounded." While the system uses an 8px (0.5rem) base radius, specific components should feel irregular.

- **Card Contours:** Standard containers use `rounded-md`.
- **Accent Elements:** Interactive "blobs" or background shapes should use high-variance border-radii (e.g., `60% 40% 30% 70%`) to avoid geometric rigidity.
- **Halftone Graphics:** Icons and illustrations should be masked within circular or organic shapes that feature "rough" or "ink-bleed" edges.

## Components

### Buttons
Buttons are treated as "Stickers." They feature a 2px black border and a hard 4px black shadow that "depresses" (shadow goes to 0) on click. Use `label-bold` for text and `rounded-xl` for the shape.

### Cards
Cards are the primary storytelling vehicle. They should always feature a primary color background or a white background with a secondary-colored halftone dither. Cards should be slightly tilted (-1 to 1 degree) at random to create an organic, non-linear feel.

### Input Fields
Fields use a white background with a heavy 3px border. On focus, the border shifts to the Secondary Blue, and a hard shadow appears behind the input.

### Icons & Graphics
Discard all photography. Use high-contrast, two-tone illustrations with "noise" and "halftone" filters applied. Graphics should look like they were photocopied and then digitally colored.

### Chips/Badges
Small, pill-shaped elements with inverted colors (Black background, Yellow text) to act as high-contrast anchors within the layout.