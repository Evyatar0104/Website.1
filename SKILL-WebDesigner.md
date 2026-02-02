---
name: web-designer
description: Expert guidance for designing and building modern, visually stunning websites with premium aesthetics. Use when Claude needs to (1) Design website layouts and UI/UX, (2) Create web applications with React/Next.js/Vite, (3) Implement responsive designs with modern CSS, (4) Build interactive components with smooth animations, (5) Ensure visual excellence and premium user experiences, or (6) Provide feedback on web design quality and aesthetics.
---

# Web Designer Skill

Expert guidance for creating exceptional web experiences that combine visual excellence, modern interaction patterns, and technical proficiency.

## Core Design Philosophy

**Visual Excellence is Non-Negotiable**: Every website must create a stunning first impression. Generic, basic designs are unacceptable. Apply these principles universally:

1. **Premium Aesthetics**: Use sophisticated color palettes, modern typography, smooth gradients, and glassmorphism
2. **Dynamic Interaction**: Implement hover effects, micro-animations, and responsive feedback
3. **Modern Design Patterns**: Leverage contemporary design trends (dark mode, squircles, cards, gradients)
4. **No Placeholders**: Generate actual images using the generate_image tool rather than placeholder text

## Design Aesthetics

### Color Strategy

Avoid generic primary colors (plain red, blue, green). Instead:

- **Use HSL for precision**: `hsl(217, 91%, 60%)` for vibrant yet controlled colors
- **Create harmonious palettes**: Use color theory (triadic, analogous, complementary)
- **Dark mode by default**: Rich blacks (#000000, #0A0A0A) with elevated surfaces (#1A1A1A, #1F1F1F)
- **Accent colors**: Vibrant but tasteful (Electric Blue #007BFF, Cyber Cyan #00F2FF, Neon Purple #A855F7)
- **Gradients**: Smooth, multi-stop gradients for depth and visual interest

### Typography Excellence

- **Modern font families**: Inter, Outfit, Roboto, Poppins, Manrope, Space Grotesk
- **Font loading**: Use `next/font/google` for Next.js or Google Fonts CDN
- **Hierarchy**: Clear distinction between headings (Bold/Black) and body (Regular/Medium)
- **Line height**: 1.5-1.7 for body text, 1.1-1.3 for headings
- **Letter spacing**: Slight adjustments for visual refinement (-0.02em for headings, 0.01em for body)

### Visual Effects

- **Glassmorphism**: `backdrop-filter: blur(12px)` with semi-transparent backgrounds
- **Smooth corners**: Squircles or generous border-radius (12px-24px) for premium feel
- **Shadows**: Layered shadows for depth (e.g., `0 4px 6px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.15)`)
- **Glow effects**: Subtle outer glows on hover using `box-shadow` with accent colors
- **Animations**: Smooth transitions (200-400ms) with appropriate easing (ease-out, cubic-bezier)

## Technical Implementation

### Technology Stack

**Framework Selection**:
- **Simple sites**: Pure HTML/CSS/JavaScript
- **Complex apps**: Next.js (for SEO, routing, SSR) or Vite (for fast development)
- **Styling**: Tailwind CSS (when requested) or Vanilla CSS (for maximum control)
- **Animation**: Framer Motion, CSS transitions, or GSAP for complex sequences
- **Icons**: Lucide React, Heroicons, or Phosphor Icons

**Project Initialization**:
```bash
# Next.js
npx create-next-app@latest ./ --typescript --tailwind --app

# Vite + React
npx create-vite@latest ./ --template react-ts
```

Always check available options first: `npx create-next-app@latest --help`

### Responsive Design

**Mobile-First Approach**:
1. Design for mobile (320px-480px) first
2. Progressively enhance for tablets (768px-1024px)
3. Optimize for desktop (1280px+)

**Breakpoint Strategy**:
```css
/* Tailwind defaults */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Component Architecture

**Reusable Component Pattern**:
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

**Design System Organization**:
```
src/
├── components/
│   ├── ui/           # Atomic components (Button, Card, Input)
│   ├── sections/     # Page sections (Hero, Features, Footer)
│   └── layouts/      # Layout wrappers (Header, Sidebar)
├── styles/
│   ├── globals.css   # Design tokens, resets
│   └── animations.css # Keyframes, transitions
└── lib/
    └── utils.ts      # Helper functions (cn, formatters)
```

## Animation & Interaction

### Micro-Interactions

Enhance user engagement with subtle feedback:

```typescript
// Framer Motion example
<motion.div
  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 255, 0.5)" }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
>
  {children}
</motion.div>
```

**Animation Guidelines**:
- **Duration**: 200-400ms for most transitions
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Scroll animations**: Trigger on viewport entry (Intersection Observer)
- **Performance**: Use `transform` and `opacity` (GPU-accelerated)

### Scroll-Based Animations

```typescript
// Fade-in on scroll example
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
  variants={fadeInVariants}
>
  {content}
</motion.section>
```

## SEO Best Practices

Implement automatically on every page:

- **Meta tags**: Title (50-60 chars), description (150-160 chars)
- **Open Graph**: og:title, og:description, og:image for social sharing
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **Heading hierarchy**: Single `<h1>` per page, logical `<h2>`-`<h6>` structure
- **Alt text**: Descriptive alt attributes for all images
- **Performance**: Optimize images (WebP), lazy loading, code splitting

## Internationalization (RTL Support)

When building for RTL languages (Hebrew, Arabic):

```tsx
// Next.js layout
<html dir="rtl" lang="he">
  {/* Content flows right-to-left */}
</html>
```

**RTL Design Considerations**:
- Mirror layouts (navigation on right, content flows RTL)
- Reverse directional properties (`margin-left` → `margin-right`)
- Use logical properties: `margin-inline-start`, `padding-block-end`
- Test thoroughly: Arrows, icons, animations must reflect RTL direction

## Quality Standards

### Visual Excellence Checklist

Before considering a design complete, verify:

- [ ] **Color palette**: Sophisticated, harmonious colors (no plain red/blue/green)
- [ ] **Typography**: Modern font family, clear hierarchy
- [ ] **Whitespace**: Generous spacing, content has room to breathe
- [ ] **Contrast**: WCAG AA minimum (4.5:1 for text, 3:1 for UI)
- [ ] **Hover states**: All interactive elements have visible feedback
- [ ] **Animations**: Smooth, purposeful transitions (not excessive)
- [ ] **Responsive**: Looks excellent on mobile, tablet, desktop
- [ ] **Loading states**: Skeleton screens or spinners for async content

### Code Quality Checklist

- [ ] **TypeScript**: Proper types, no `any` unless necessary
- [ ] **Components**: Modular, reusable, single responsibility
- [ ] **Performance**: Optimized images, lazy loading, minimal re-renders
- [ ] **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML
- [ ] **Consistency**: Design system tokens used throughout

## Common Patterns

### Hero Section with Graphic Element

```tsx
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background graphic element */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Your Impactful Headline
        </h1>
        <p className="mt-6 text-xl text-gray-300">
          Supporting statement that reinforces the message
        </p>
      </div>
    </section>
  );
}
```

### Glassmorphism Card

```css
.glass-card {
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Interactive Button with Glow

```css
.premium-button {
  background: linear-gradient(135deg, #007BFF, #00F2FF);
  border-radius: 12px;
  padding: 12px 32px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.premium-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.6),
              0 4px 12px rgba(0, 123, 255, 0.4);
}
```

## Development Workflow

1. **Understand requirements**: Brand identity, target audience, key features
2. **Design system first**: Colors, typography, spacing tokens
3. **Build components**: Atomic design (atoms → molecules → organisms)
4. **Assemble pages**: Compose components into full layouts
5. **Add interactions**: Hover effects, animations, transitions
6. **Optimize**: Performance, accessibility, SEO
7. **Test**: Cross-browser, responsive, user testing

## Critical Reminders

> [!IMPORTANT]
> **AESTHETICS ARE PARAMOUNT**: A simple, basic design is a failure. Every website must demonstrate:
> - Visual sophistication and modern design patterns
> - Thoughtful color palette and typography choices
> - Smooth interactions and micro-animations
> - Premium feel that exceeds user expectations

> [!WARNING]
> **NO PLACEHOLDERS**: Always create real content:
> - Generate images with the generate_image tool
> - Write contextually relevant copy
> - Use real data or realistic mock data
> - Build fully functional demonstrations
