# Stratus Cleaning Company - Theme Documentation

## Color Palette

### Primary Colors

- **Stratus Blue**: `#00AEEF` - Clean, modern, trustworthy

  - CSS Variable: `--stratus-blue`
  - Tailwind Class: `bg-stratus-blue`, `text-stratus-blue`, `border-stratus-blue`

- **Slate Gray**: `#2E3A46` - Professional, urban, high-rise sophistication

  - CSS Variable: `--slate-gray`
  - Tailwind Class: `bg-slate-gray`, `text-slate-gray`, `border-slate-gray`

- **Pure White**: `#FFFFFF` - Clean, fresh, minimalist
  - CSS Variable: `--pure-white`
  - Tailwind Class: `bg-pure-white`, `text-pure-white`

### Accent Colors

- **Emerald Green**: `#2ECC71` - Eco-friendly, fresh, sustainable

  - CSS Variable: `--emerald-green`
  - Tailwind Class: `bg-emerald-green`, `text-emerald-green`, `border-emerald-green`

- **Silver Gray**: `#BDC3C7` - Polished, refined, high-rise feel

  - CSS Variable: `--silver-gray`
  - Tailwind Class: `bg-silver-gray`, `text-silver-gray`, `border-silver-gray`

- **Text Black**: `#111111` - Clean text color
  - CSS Variable: `--text-black`
  - Tailwind Class: `text-black`

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

### Primary Use Cases

- **Stratus Blue**: Website headers, buttons, highlights, primary CTAs
- **Slate Gray**: Backgrounds, secondary text, footer, navigation when scrolled
- **Pure White**: Main background for clarity and space
- **Emerald Green**: Sustainability highlights, eco-friendly messaging, trust indicators
- **Silver Gray**: Dividers, icons, subtle accents, muted text

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
