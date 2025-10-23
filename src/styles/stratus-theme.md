# Stratus Cleaning Company - Theme Documentation

## Color Palette

### Primary Colors (Blue & Green Theme)

- **Stratus Blue**: `#3c91e6` - PRIMARY - Vibrant, trustworthy, professional
  - CSS Variable: `--stratus-blue`
  - Tailwind Class: `bg-stratus-blue`, `text-stratus-blue`, `border-stratus-blue`
  - Usage: Primary brand color, CTAs, footer gradient, headers, links, focus states

- **Lime Green**: `#A2D729` - PRIMARY - Fresh, energetic, eco-friendly
  - CSS Variable: `--emerald-green`
  - Tailwind Class: `bg-emerald-green`, `text-emerald-green`, `border-emerald-green`
  - Usage: Secondary CTAs, hover states, success indicators, trust badges, value cards

### Supporting Colors

- **Pure White**: `#FAFFFD` - Clean, fresh, minimalist off-white
  - CSS Variable: `--pure-white`
  - Tailwind Class: `bg-pure-white`, `text-pure-white`
  - Usage: Main backgrounds, card surfaces, navigation background, clean space

- **Slate Gray**: `#342E37` - Professional text and accents
  - CSS Variable: `--slate-gray`
  - Tailwind Class: `bg-slate-gray`, `text-slate-gray`, `border-slate-gray`
  - Usage: Body text, navigation text, secondary headings

- **Silver Gray**: `#BDC3C7` - Subtle accents
  - CSS Variable: `--silver-gray`
  - Tailwind Class: `bg-silver-gray`, `text-silver-gray`, `border-silver-gray`
  - Usage: Borders, dividers, muted text, subtle backgrounds

- **Coral Orange**: `#FA824C` - Warm accent (limited use)
  - CSS Variable: `--coral-orange`
  - Tailwind Class: `bg-coral-orange`, `text-coral-orange`, `border-coral-orange`
  - Usage: Optional highlights when needed

- **Text Black**: `#111111` - Clean text color
  - CSS Variable: `--text-black`
  - Tailwind Class: `text-black`
  - Usage: Primary body text on light backgrounds

## Typography

### Font Families

- **Headings (H1, H2, H3)**: Montserrat (Bold, modern, clean lines)
  - CSS Variable: `--font-heading`
  - Utility Class: `.stratus-heading`

- **Body Text**: Open Sans (Regular, professional, highly readable)
  - CSS Variable: `--font-body`
  - Utility Class: `.stratus-body`

- **Tagline/Accents**: Poppins (Semi-Bold, modern accent font)
  - CSS Variable: `--font-accent`
  - Utility Class: `.stratus-tagline`

## Theme Usage Guidelines

### Primary Use Cases - Blue & Green Focus

- **Stratus Blue (#3c91e6)**: PRIMARY COLOR
  - Main CTAs (buttons)
  - Footer gradient background
  - Key headings and highlights
  - Focus indicators
  - Trust and professionalism markers
- **Lime Green (#A2D729)**: SECONDARY PRIMARY COLOR
  - CTA hover states
  - Success indicators
  - Trust badges and checkmarks
  - Value card badges
  - Eco-friendly messaging
  - Link hover states

- **Pure White (#FAFFFD)**: LIGHT FOUNDATION
  - Navigation background (with transparency)
  - Main page background
  - Card backgrounds
  - Clean spacing and breathing room

- **Slate Gray (#342E37)**: TEXT & ACCENTS
  - Body text
  - Navigation links
  - Secondary headings
  - Professional content

- **Silver Gray (#BDC3C7)**: SUBTLE ELEMENTS
  - Borders
  - Dividers
  - Muted text
  - Input borders

### Color Psychology & Application

- **Blue (#3c91e6)**: PRIMARY - Trust, professionalism, reliability. Perfect for main CTAs and brand elements.
- **Green (#A2D729)**: PRIMARY - Growth, freshness, eco-friendly. Ideal for hover states and success indicators.
- **White (#FAFFFD)**: Creates light, airy feel. Eliminates darkness from header/footer.
- **Gray tones**: Support readability without overwhelming the blue/green theme.

### Typography Usage

- **Headings**: Use `.stratus-heading` for primary headings (Stratus Blue or Slate Gray)
- **Secondary Headings**: Use `.stratus-heading-secondary` for secondary headings (Slate Gray)
- **Body Text**: Use `.stratus-body` for all body text (Slate Gray)
- **Taglines**: Use `.stratus-tagline` for taglines and accent text (Stratus Blue)

### Component Examples

#### Call to Action Buttons

```html
<button class="stratus-cta">Get Free Estimate</button>
```

#### Primary Heading

```html
<h1 class="stratus-heading text-4xl">Professional Cleaning Services</h1>
```

#### Body Text

```html
<p class="stratus-body text-lg">We provide exceptional cleaning services...</p>
```

#### Tagline

```html
<div class="stratus-tagline text-2xl">Who We Are</div>
```

## Reusability

This theme system is designed to be:

1. **Modular**: Each color and typography style is defined as a CSS variable and utility class
2. **Consistent**: All components use the same base variables
3. **Scalable**: Easy to add new components while maintaining brand consistency
4. **Maintainable**: Changes to brand colors only require updating the CSS variables

### Adding New Components

When creating new components, always use:

- The defined CSS variables (`var(--stratus-blue)`, etc.)
- The utility classes (`.stratus-heading`, `.stratus-body`, etc.)
- The brand color Tailwind classes (`bg-stratus-blue`, `text-slate-gray`, etc.)

This ensures all components automatically inherit the brand theme and remain consistent across the application.
