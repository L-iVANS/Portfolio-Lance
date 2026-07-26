# Design System Inspired by Bryl Lim

## 1. Visual Theme & Atmosphere

The Bryl Lim design system embodies a minimalist, tech-forward aesthetic that prioritizes clarity and accessibility. The palette is stripped down to essential grayscale tones, creating a clean, distraction-free environment where content and personal brand presence shine. The design philosophy centers on subtlety and precision, with generous whitespace, restrained typography, and deliberate use of light shadows to create depth without visual noise. This approach reflects the engineer-focused audience and the site's role as a professional portfolio showcasing AI and software engineering expertise. The overall mood is contemporary, approachable, and highly legible—balancing professionalism with a warm, human-centered aesthetic.

**Key Characteristics**
- Monochromatic color palette with strategic neutrals
- Generous whitespace and negative space usage
- Precise, purposeful typography hierarchy
- Minimal visual embellishment; substance over decoration
- Soft shadow treatments for subtle depth
- Clear information hierarchy and content structure
- Technical typography choices (Geist Mono for accents)
- High readability and accessibility prioritized

## 2. Color Palette & Roles

### Primary
- **Near Black** (`#0A0A0A`): Primary text color for headings, body copy, and primary interactive states; the dominant text color throughout the design

### Accent Colors
- **Transparent Black** (`#000000` with alpha variants): Used sparingly for dark accents and overlay states; represents full opacity when needed

### Interactive
- **Light Gray Interactive** (`#A3A3A3`): Navigation links, secondary button text, and interactive affordances in their default state
- **Medium Gray Interactive** (`#737373`): Tertiary interactive elements and muted text; hover states for lighter text
- **Dark Gray Interactive** (`#525252`): Emphasized secondary interactive states and medium-weight text

### Neutral Scale
- **Charcoal** (`#404040`): Dark neutral for subtle text and secondary labels
- **Medium Gray** (`#737373`): General-purpose gray for comments, metadata, and tertiary text
- **Light Gray** (`#A3A3A3`): Placeholder text, disabled states, and muted content
- **Very Light Gray** (`#E9E9E9`): Borders, dividers, and subtle background tints; the most frequently used neutral

### Surface & Borders
- **White** (`#FFFFFF`): Primary surface for cards, containers, and main content areas
- **Off-White** (`#F5F5F5`): Secondary surfaces, subtle backgrounds, and elevated container states
- **Light Border** (`#E9E9E9`): Default border color for cards, dividers, form inputs, and container edges

## 3. Typography Rules

### Font Family
- **Primary Display & Headers**: Geist Pixel (https://fonts.googleapis.com/) — Fallback: monospace, sans-serif
- **Body & UI Text**: Geist (https://fonts.googleapis.com/) — Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Code & Technical Labels**: Geist Mono (https://fonts.googleapis.com/) — Fallback: 'Courier New', monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|---|---|
| Display Large | Geist Pixel | 54px | 400 | 57px | 0px | Primary page headings and hero text |
| Display Medium | Geist Pixel | 42px | 400 | 42px | 0px | Secondary headings and section titles |
| Heading 1 | Geist Pixel | 42px | 400 | 42px | 0px | Large section headings |
| Heading 2 | Geist Pixel | 42px | 400 | 42px | 0px | Medium section headings |
| Heading 3 | Geist | 15px | 500 | 22px | 0px | Card titles and subsection headings |
| Heading 4 | Geist | 13px | 500 | 18px | 0px | Secondary card titles and labels |
| Body Large | Geist | 16px | 400 | 24px | 0px | Main body copy and descriptive text |
| Body Default | Geist | 12px | 400 | 18px | 0px | Standard body copy and UI text |
| Body Small | Geist Mono | 10px | 400 | 15px | 0px | Small metadata and caption text |
| Label | Geist Mono | 9px | 400 | 14px | 0px | Form labels and technical annotations |
| Link | Geist Pixel | 15px | 400 | 15px | 0px | Primary link text |
| Code | Geist Mono | 12px | 400 | 18px | 0px | Inline code and technical snippets |

### Principles
- Geometric sans-serif and monospace fonts create a technical, engineer-focused personality
- Hierarchy is established through font-family shifts (Pixel for emphasis) rather than excessive weight changes
- Line heights provide generous breathing room for readability
- Font weights remain conservative (400–500) to maintain clarity and prevent visual heaviness
- Monospace typography is reserved for technical labels, code, and metadata to signal information density
- Letter spacing remains at 0px to preserve horizontal compactness while line heights ensure vertical breathing

## 4. Component Stylings

### Buttons

#### Button – Primary Link
- Background: `transparent` (`rgba(0, 0, 0, 0)`)
- Text Color: `#0A0A0A`
- Font Family: Geist Pixel
- Font Size: `15px`
- Font Weight: `400`
- Line Height: `15px`
- Padding: `0px`
- Border: `0px solid transparent`
- Border Radius: `0px`
- Box Shadow: `none`
- Hover State: Text Color transitions to `#737373`
- Notes: Underline or color change on hover for affordance

#### Button – Secondary Navigation
- Background: `transparent` (`rgba(0, 0, 0, 0)`)
- Text Color: `#A3A3A3`
- Font Family: Geist
- Font Size: `12px`
- Font Weight: `400`
- Line Height: `18px`
- Padding: `0px`
- Border: `0px solid transparent`
- Border Radius: `0px`
- Box Shadow: `none`
- Hover State: Text Color transitions to `#737373`
- Notes: Minimal affordance; relies on context for discoverability

#### Button – Icon (Rounded)
- Background: `#F5F5F5`
- Text Color: `#0A0A0A`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Padding: `0px`
- Width: `22px`
- Height: `22px`
- Border: `0px solid transparent`
- Border Radius: `9999px`
- Box Shadow: `none`
- Hover State: Background transitions to `#E9E9E9`; Text Color remains `#0A0A0A`
- Notes: Circular button for social links or action icons

#### Button – Icon Ghost
- Background: `transparent` (`rgba(0, 0, 0, 0)`)
- Text Color: `#A3A3A3`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Padding: `0px`
- Width: `22px`
- Height: `22px`
- Border: `0px solid transparent`
- Border Radius: `9999px`
- Box Shadow: `none`
- Hover State: Text Color transitions to `#0A0A0A`
- Notes: No background fill; icon-only affordance

### Cards & Containers

#### Card – Default
- Background: `#FFFFFF`
- Text Color: `#0A0A0A`
- Border: `1px solid #E9E9E9`
- Border Radius: `16px`
- Padding: `20px`
- Box Shadow: `rgba(10, 10, 10, 0.3) 0px 26px 55px -22px`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Hover State: Box Shadow increases to `rgba(10, 10, 10, 0.35) 0px 32px 64px -20px`
- Notes: Standard container for content blocks and project showcases

#### Card – Elevated
- Background: `#FFFFFF`
- Text Color: `#0A0A0A`
- Border: `1px solid #E9E9E9`
- Border Radius: `16px`
- Padding: `20px`
- Box Shadow: `rgba(10, 10, 10, 0.25) 0px 16px 32px -18px`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Notes: Subtle elevation for secondary card surfaces

#### Card – Flat
- Background: `#F5F5F5`
- Text Color: `#0A0A0A`
- Border: `1px solid #E9E9E9`
- Border Radius: `16px`
- Padding: `20px`
- Box Shadow: `none`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Notes: Used for stat blocks and statistics display; minimal elevation

### Inputs & Forms

#### Input – Text
- Background: `#FFFFFF`
- Text Color: `#0A0A0A`
- Border: `0px none transparent`
- Border Radius: `0px`
- Padding: `4px 0px`
- Font Family: Geist Mono
- Font Size: `15px`
- Font Weight: `400`
- Line Height: `22px`
- Placeholder Color: `#A3A3A3`
- Focus State: Border Bottom `2px solid #0A0A0A`; Box Shadow: `0px 2px 0px #0A0A0A`
- Disabled State: Background `#F5F5F5`; Text Color `#A3A3A3`
- Notes: Minimal underline-only style; no visible border until focus

#### Input – Inline (Hidden)
- Background: `transparent` (`rgba(0, 0, 0, 0)`)
- Text Color: `#0A0A0A`
- Border: `0px none transparent`
- Border Radius: `0px`
- Padding: `0px`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Width: `1px` (auto-expand)
- Height: `1px` (auto-expand)
- Notes: Used for invisible form fields and command input

### Navigation

#### Navigation – Sidebar
- Background: `#FFFFFF`
- Text Color: `#0A0A0A`
- Border: `0px solid transparent`
- Border Radius: `0px`
- Padding: `32px 28px`
- Font Family: Geist
- Font Size: `16px`
- Font Weight: `400`
- Line Height: `24px`
- Box Shadow: `none`
- Width: `224px`
- Notes: Vertical navigation sidebar with links and section groupings; left-aligned layout

#### Navigation Link – Active
- Text Color: `#0A0A0A`
- Font Weight: `500`
- Padding: `12px 0px`
- Border Bottom: `1px solid #E9E9E9`
- Notes: Visual indication of current section

#### Navigation Link – Inactive
- Text Color: `#A3A3A3`
- Font Weight: `400`
- Padding: `12px 0px`
- Border Bottom: `none`
- Hover State: Text Color transitions to `#737373`

### Images & Media

#### Image – Avatar
- Border Radius: `50%`
- Box Shadow: `rgba(10, 10, 10, 0.2) 0px 8px 20px -4px`
- Notes: Profile images rendered as perfect circles

#### Image – Card Featured
- Border Radius: `12px`
- Box Shadow: `none`
- Notes: Images displayed within card containers

#### Image – Inline
- Border Radius: `6px`
- Box Shadow: `none`
- Notes: Small inline images and icons

## 5. Layout Principles

### Spacing System

Base unit: `4px`

Scale progression:
- `4px` — Micro padding within tight components
- `8px` — Small gap between adjacent elements
- `12px` — Default gap between UI sections
- `16px` — Standard gap between content blocks
- `20px` — Card padding and medium spacing
- `24px` — Section margins and spacing
- `28px` — Navigation padding and larger margins
- `32px` — Large section padding and layout spacing
- `36px` — Extra-large margins between major sections
- `40px` — Gap between primary content zones
- `56px` — Large vertical spacing between sections
- `64px` — Maximum padding for hero or full-width sections

**Context Usage**:
- Padding on cards and containers: `20px`
- Gaps between list items: `12px`–`16px`
- Section margins: `24px`–`36px`
- Navigation padding: `28px`–`32px`

### Grid & Container

- **Max Width**: No strict container max-width; layout respects content width naturally
- **Column Strategy**: Single-column primary content with left sidebar navigation (224px); main content area expands fluidly
- **Section Patterns**:
  - Hero section spans full width with centered content
  - Blog and project grids use responsive 1–2 column layouts
  - Cards displayed in horizontal scrollable rows or stacked layouts
  - Experience and skill sections use left-aligned timeline or table layouts

### Whitespace Philosophy

Whitespace is treated as a primary design element. The design employs:
- Generous vertical spacing between sections to create breathing room
- Minimal horizontal padding on text to maximize legibility
- Empty space around focal points (profile image, headings) to draw attention
- Quiet backgrounds (`#FFFFFF`, `#F5F5F5`) that recede visually
- Liberal margins between cards and content blocks to reduce cognitive load

### Border Radius Scale

- `0px` — Buttons, inputs, and text links; sharp geometric forms
- `6px` — Small inline images and tight component corners
- `8px` — Medium image containers and secondary surfaces
- `12px` — Featured card images and medium containers
- `16px` — Primary cards and container components
- `9999px` — Icon buttons and circular badges; full roundness

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow; `box-shadow: none` | Form inputs, text content, flat backgrounds |
| Shallow (1) | `rgba(10, 10, 10, 0.3) 0px 26px 55px -22px` | Default cards, primary containers |
| Medium (2) | `rgba(10, 10, 10, 0.25) 0px 16px 32px -18px` | Elevated cards, secondary containers |
| Deep (3) | `rgba(10, 10, 10, 0.25) 0px 8px 22px -14px` | Modals and overlays (custom xl) |
| Subtle Border (4) | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | Hairline dividers and minimal elevation |

**Shadow Philosophy**: Shadows are deliberately soft and diffused, using low opacity to maintain the minimalist aesthetic. The offset and blur are calibrated to suggest subtle layering without creating visual drama. Only cards and elevated containers receive shadow treatment; interactive elements like buttons rely on color and positioning to establish hierarchy. Shadows use the dark neutral (`#0A0A0A`) rather than pure black to remain cohesive with the palette.

## 7. Do's and Don'ts

### Do

- **Use the monochromatic palette intentionally** — Let the neutral scale guide hierarchy; reserve darker tones (`#0A0A0A`) for primary text and lighter tones (`#E9E9E9`) for subtle dividers
- **Maintain generous whitespace** — Leave ample breathing room between sections (minimum `24px`–`32px` margins) to reduce cognitive load
- **Employ Geist Pixel for emphasis** — Use the Pixel font family for headings and primary CTAs to signal importance and create visual rhythm
- **Respect the minimal shadow palette** — Apply shadows only to cards and elevated surfaces; avoid excessive layering
- **Stick to the specified border radii** — Use `0px` for sharp geometric forms (buttons, inputs) and `16px` for rounded containers (cards)
- **Maintain minimum touch targets** — Ensure interactive elements are at least `22px × 22px` for circular buttons and `44px` tall for link targets
- **Use Geist Mono for technical labels** — Apply the monospace font consistently for form labels, metadata, and code snippets
- **Follow the spacing scale** — Adhere to the `4px`-based scale; avoid arbitrary spacing values

### Don't

- **Don't mix multiple display fonts** — Limit display typography to Geist Pixel; avoid adding additional decorative fonts
- **Don't use heavy font weights** — Stay within `400`–`500` range; don't apply weights `600` or higher
- **Don't add hard shadows or glows** — Avoid high-opacity shadows or blur effects; maintain the soft, diffused aesthetic
- **Don't overcrowd the color palette** — Resist adding accent colors beyond the neutral scale unless semantically justified
- **Don't apply rounded corners to text buttons or inputs** — Reserve border-radius for containers and icon buttons; keep text interactive elements sharp
- **Don't neglect contrast ratios** — Ensure text color combinations meet WCAG AA standards (minimum 4.5:1 for body text)
- **Don't create visual inconsistency with spacing** — Avoid ad-hoc padding or margin values; always reference the spacing scale
- **Don't use all-caps for body text** — Reserve capitalization for labels and technical metadata only
- **Don't add gradients or patterns** — Keep backgrounds and surfaces solid and flat

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single-column layout; sidebar collapses to hamburger menu; padding reduces to `16px` |
| Tablet | 768px–1024px | Sidebar remains visible; card grids shift to 2 columns; section margins adjust to `20px`–`24px` |
| Desktop | 1025px+ | Full sidebar visible (224px fixed); main content flows naturally; all spacing values applied as specified |
| Large | 1440px+ | Maximum width enforced on content sections; generous margins added around primary layout |

### Touch Targets

- **Minimum interactive height**: `44px` (for link text and button groups)
- **Minimum interactive width**: `44px` (for icon buttons)
- **Circular button diameter**: `22px` minimum (icon buttons); `40px` preferred for standalone actions
- **Link padding**: `8px`–`12px` vertical, `4px` horizontal for clickable area expansion
- **Form input height**: `44px` minimum (effective height including padding)
- **Spacing between touch targets**: Minimum `8px` to prevent accidental taps

### Collapsing Strategy

**Mobile (320px–767px)**:
- Left sidebar collapses to hamburger menu or hidden navigation drawer
- Main content padding reduces to `16px`
- Card padding reduces to `16px`
- Two-column layouts collapse to single column
- Hero sections stack vertically with centered text
- Navigation link font size remains `12px`; line height compresses to `16px`
- Card width adapts to container width with `16px` margins on sides

**Tablet (768px–1024px)**:
- Sidebar remains visible but width may compress to `180px`
- Two-column card grids introduced for project and blog sections
- Section margins adjust to `24px`
- Typography remains consistent; no size adjustments
- Navigation links maintain `12px` font size

**Desktop (1025px+)**:
- Full sidebar layout with fixed `224px` width
- Multi-column grids enabled (up to 3 columns for cards)
- All spacing values applied as specified; no compression
- Max width on main content area optional (~1200px)
- Hero sections expand to full available width

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary Text**: Near Black (`#0A0A0A`) — Use for headings, body copy, and primary interactive states
- **Interactive Default**: Light Gray (`#A3A3A3`) — Navigation links, secondary buttons, and muted UI elements
- **Interactive Hover**: Medium Gray (`#737373`) — Hover state for lighter text; secondary emphasis
- **Borders & Dividers**: Very Light Gray (`#E9E9E9`) — Card borders, form dividers, and subtle backgrounds
- **Card Background**: White (`#FFFFFF`) — Primary surface for containers and elevated content
- **Secondary Background**: Off-White (`#F5F5F5`) — Stat blocks and secondary surfaces
- **Dark Accent**: Charcoal (`#404040`) — Deep shadows, secondary labels, and muted metadata

### Iteration Guide

1. **Color Application**: Map all text to `#0A0A0A` (primary) or `#A3A3A3` (secondary interactive); borders default to `#E9E9E9`; never use colors outside the specified palette

2. **Typography Foundation**: Apply Geist Pixel for all headings (`42px`–`54px`), Geist for body and UI (`12px`–`16px`), and Geist Mono for labels and code (`9px`–`12px`)

3. **Spacing Adherence**: All padding, margins, and gaps must align with the `4px`-based scale (`4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `56px`, `64px`)

4. **Shadow Strategy**: Apply `rgba(10, 10, 10, 0.3) 0px 26px 55px -22px` for primary cards, `rgba(10, 10, 10, 0.25) 0px 16px 32px -18px` for elevated surfaces, and `none` for flat elements

5. **Border Radius Consistency**: Use `0px` for buttons and inputs, `6px`–`12px` for images, `16px` for cards, and `9999px` for icon buttons

6. **Component Specificity**: Buttons are transparent with no border unless explicitly styled as icon buttons (`22px`, `9999px` radius, `#F5F5F5` background)

7. **Responsive Adaptation**: At mobile breakpoints (`< 768px`), reduce sidebar visibility, compress padding to `16px`, and collapse multi-column grids to single column

8. **Accessibility Priority**: Maintain minimum contrast ratio of 4.5:1 on all text; ensure touch targets are at least `44px × 44px`; verify link underlines or color changes on hover

9. **Minimalist Discipline**: Resist adding decorative elements, gradients, or non-essential colors; let whitespace and typography carry the design; shadows remain soft and diffused