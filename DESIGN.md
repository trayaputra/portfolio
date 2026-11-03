# DESIGN SYSTEM SPECIFICATION: DARK LUXURY GLASSMORPHISM

## 1. Palette & Tone
- **Archetype**: Dark Luxury Glassmorphism & High-Precision HUD
- **Canvas Primary**: `#080808`
- **Canvas Secondary**: `#111111`
- **Surface Elevation 1**: `#181818`
- **Glass Surface**: `rgba(255, 255, 255, 0.055)`
- **Glass Border**: `rgba(255, 255, 255, 0.12)`
- **Glass Highlight Glow**: `rgba(255, 255, 255, 0.18)`
- **Text Primary**: `#F5F5F5`
- **Text Secondary**: `#929292`
- **Text Muted**: `#686868`
- **Accent Silver**: `#C4C4C4`
- **Highlight Pure**: `#FFFFFF`

## 2. Typography
- **Primary Font**: `Outfit`, sans-serif (Google Fonts)
- **Hierarchy**:
  * Display 1 / Hero: 64px - 84px (font-extrabold / bold, tracking -0.04em, line-height 1.05)
  * H1 / Section Title: 36px - 48px (font-bold, tracking -0.03em)
  * H2 / Card Heading: 20px - 24px (font-semibold, tracking -0.02em)
  * Body: 15px - 16px (font-normal, line-height 1.65, color #929292)
  * Monospace / Telemetry: 12px - 13px (font-medium, tracking 0.08em, uppercase)

## 3. Glassmorphism & Elevation Tokens
- **Frosted Blur**: `backdrop-blur-md` (12px) to `backdrop-blur-xl` (20px)
- **Card Radius**: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- **Borders**: 1px solid `rgba(255, 255, 255, 0.10)` with hover state `rgba(255, 255, 255, 0.22)`
- **Silver Ambient Glow**: `radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08), transparent 70%)`

## 4. Components & Interactive States
- **Magnetic Buttons**: Solid silver `#F5F5F5` with dark text, or glass button with subtle silver border
- **Micro-interactions**: 200ms cubic-bezier(0.16, 1, 0.3, 1), transform scale(0.98) on active click
- **Iconography**: Lucide React vector icons (zero emojis)
