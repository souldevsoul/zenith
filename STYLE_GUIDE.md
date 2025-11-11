# Zenith Brand & Style Guide

## Brand Identity

**Brand Name**: Zenith
**Tagline**: Reach New Heights
**Positioning**: Performance-focused MVP development platform for ambitious teams and enterprises

---

## Color Palette

### Primary Colors
```css
Orange 600:  #f97316
Orange 600:  #ea580c
Orange 700:  #c2410c
```

### Accent Colors
```css
Amber 500:   #f59e0b
Yellow 500:  #eab308
Orange 500:  #f97316
```

### Background Gradients
```css
/* Hero Background */
background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);

/* Card Backgrounds */
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(12px);

/* Footer Background */
background: rgb(67, 20, 7); /* orange-950 */
```

### Text Colors
```css
Primary Text:   #111827 (gray-900)
Secondary Text: #374151 (gray-700)
Muted Text:     #6b7280 (gray-500)
On Dark:        #ffffff (white)
```

---

## Typography

### Font Families
```css
Headings: system-ui, -apple-system, sans-serif
Body:     system-ui, -apple-system, sans-serif
Code:     'Geist Mono', monospace
```

### Font Sizes
```css
Hero H1:       text-6xl sm:text-7xl lg:text-8xl (60px-96px)
Section H2:    text-5xl md:text-6xl (48px-60px)
Card Title:    text-2xl font-bold (24px)
Body Large:    text-xl md:text-2xl (20px-24px)
Body:          text-base (16px)
Small:         text-sm font-semibold (14px)
```

### Font Weights
```css
Black:      font-black (900) - Use for impact
Bold:       font-bold (700) - Use for headings
Semibold:   font-semibold (600) - Use for emphasis
Medium:     font-medium (500)
Regular:    font-normal (400)
```

---

## Component Styles

### Buttons

#### Primary CTA
```tsx
<Button className="bg-gradient-to-r from-amber-500 via-orange-600 to-orange-700
  hover:from-amber-600 hover:via-orange-700 hover:to-orange-800
  text-white font-black text-xl px-14 py-8 rounded-xl
  shadow-[0_20px_50px_rgba(249,115,22,0.5)]
  border border-yellow-400/50">
  Get Started Free
</Button>
```

#### Secondary Button
```tsx
<Button className="bg-white/10 backdrop-blur-md hover:bg-white/20
  text-gray-900 font-bold text-xl px-14 py-8 rounded-xl
  border-2 border-white/30 hover:border-white/50">
  VIEW PRICING
</Button>
```

#### Power Button
```tsx
<Button className="bg-gradient-to-r from-orange-600 to-amber-500
  hover:from-orange-700 hover:to-amber-600
  text-white font-black px-8 py-4 rounded-lg
  shadow-lg hover:shadow-xl">
  Launch Now
</Button>
```

### Cards

#### Feature Card
```tsx
<div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl
  border border-white/10 hover:border-yellow-400/50
  hover:bg-white/10 transition-all duration-300">
  {/* Content */}
</div>
```

#### Pricing Card (Recommended)
```tsx
<div className="rounded-2xl border border-orange-600
  shadow-2xl scale-105 bg-white/40 backdrop-blur-md p-8">
  {/* Recommended badge: from-orange-600 to-orange-700 */}
</div>
```

### Icons

#### Icon Container
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600
  rounded-2xl flex items-center justify-center">
  <Icon className="w-8 h-8 text-white" />
</div>
```

#### Logo
```tsx
<div className="w-9 h-9 bg-gradient-to-br from-orange-600 to-orange-700
  rounded-lg flex items-center justify-center">
  <svg className="w-5 h-5 text-white">
    {/* Mountain peak icon */}
  </svg>
</div>
```

---

## Layout Guidelines

### Spacing
```css
Section Padding:    py-24 md:py-32 (96px-128px vertical)
Container Padding:  px-4 (16px horizontal)
Card Padding:       p-8 md:p-12 (32px-48px)
Button Padding:     px-14 py-8 (56px x 32px)
Grid Gap:           gap-8 md:gap-12
```

### Border Radius
```css
Small:   rounded-lg (8px)
Medium:  rounded-xl (12px)
Large:   rounded-2xl (16px)
Hero:    rounded-3xl (24px)
```

### Shadows
```css
Card:    shadow-2xl
Hover:   shadow-[0_20px_60px_rgba(249,115,22,0.7)]
Button:  shadow-[0_20px_50px_rgba(249,115,22,0.5)]
Strong:  shadow-[0_30px_80px_rgba(234,88,12,0.6)]
```

---

## Interactive States

### Hover Effects
```css
Button Hover:      scale-105 -translate-y-1
Card Hover:        border-yellow-400/50 bg-white/10
Icon Hover:        scale-110
Text Hover:        text-orange-700
Power Hover:       scale-110 shadow-2xl
```

### Transitions
```css
Standard:     transition-all duration-300
Fast:         transition duration-200
Power:        transition-all duration-400 ease-out
Energetic:    transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Animations
```css
Shimmer Effect:
.group-hover:translate-x-[100%]
from-orange/0 via-amber/20 to-orange/0

Energy Pulse:
animate-pulse from-orange-500/50 to-yellow-500/50

Rise Up:
hover:-translate-y-3 transition-transform duration-400
```

---

## Navigation

### Navbar
```tsx
<nav className="py-5 border-b border-white border-opacity-10">
  {/* Logo: orange-600 to orange-700 gradient */}
  {/* Links: text-white hover:text-orange-300 */}
  {/* Mobile menu: bg-white/10 backdrop-blur */}
</nav>
```

### Footer
```tsx
<footer className="bg-orange-950 border-t border-white border-opacity-10">
  {/* Logo: orange-600 to orange-700 gradient */}
  {/* Text: text-white/70 hover:text-white */}
  {/* Links: hover:text-amber-400 */}
</footer>
```

---

## Content Guidelines

### Tone of Voice
- **Ambitious**: Bold, confident language
- **Powerful**: Strong action verbs
- **Achievement-focused**: Results and outcomes
- **Professional**: Enterprise-appropriate

### Key Messages
- Reach new heights in development
- Peak performance, every time
- Ambitious teams choose Zenith
- Built for scale, ready today
- Enterprise power, startup agility

### Example Copy
```
Hero: "Reach New Heights In Your Development Journey"
CTA: "Start Climbing" / "Reach the Summit"
Features: "Everything you need to scale to the peak"
Stats: "Enterprise-Grade Performance"
```

---

## Iconography

### Preferred Icons
- **Achievement**: TrendingUp, Award, Target
- **Power**: Zap, Rocket, Bolt
- **Scale**: BarChart, TrendingUp, ArrowUp
- **Summit**: Mountain, Flag, Star

### Icon Style
- Lucide React icons
- Stroke width: 2 (bold)
- Size: w-8 h-8 (emphasis on presence)
- Color: Orange/amber gradients
- Strong, clear lines

---

## Imagery Guidelines

### Photography
- Ambitious scenes (mountains, peaks, summits)
- Professional teams
- Modern offices, high-tech
- Success imagery
- Upward momentum visuals

### Illustrations
- Angular, geometric (strength)
- Orange/amber color scheme
- Upward directional elements
- Mountain/peak motifs
- Achievement symbols

---

## Responsive Breakpoints

```css
Mobile:     < 640px (sm)
Tablet:     640px - 1024px (md-lg)
Desktop:    > 1024px (lg)
Wide:       > 1280px (xl)
```

### Mobile Considerations
- Maintain power and presence
- Bold typography scales well
- Clear hierarchy
- Strong CTAs visible

---

## Accessibility

### Color Contrast
- White on orange: ✅ AAA compliant
- Gray-900 on white: ✅ AAA compliant
- Orange-600 on white: ✅ AA compliant
- Yellow accents: ✅ AA compliant

### Interactive Elements
- Strong focus indicators (ring-orange-500)
- Clear hover states
- Keyboard navigation optimized
- Screen reader friendly

---

## Code Examples

### Page Header (Power)
```tsx
<h1 className="font-heading tracking-tighter text-6xl sm:text-7xl lg:text-8xl
  font-black mb-8 leading-tight">
  <span className="block text-gray-900">Reach</span>
  <span className="block bg-gradient-to-r from-orange-600 via-orange-700
    to-orange-800 bg-clip-text text-transparent">
    New Heights
  </span>
</h1>
```

### Power Section
```tsx
<section className="relative py-32">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-md
      rounded-3xl p-12 border-2 border-orange-600/20">
      {/* Content */}
    </div>
  </div>
</section>
```

### Achievement CTA
```tsx
<Link href="/login">
  <Button className="group bg-gradient-to-r from-amber-500 via-orange-600
    to-orange-700 text-white font-black px-16 py-10 rounded-xl
    shadow-[0_30px_60px_rgba(249,115,22,0.6)]
    hover:scale-105 hover:-translate-y-2">
    <TrendingUp className="inline-block mr-2" />
    Start Climbing
  </Button>
</Link>
```

---

## Brand Voice Examples

### Do's ✅
- "Reach the peak of performance"
- "Built for ambitious teams"
- "Scale to new heights"
- "Enterprise-ready, startup-fast"
- "Your summit awaits"

### Don'ts ❌
- "Creative solutions" (that's Aurora)
- "Ship fast" (that's Velocity)
- Timid or uncertain language
- Overly casual tone
- "Good enough" messaging

---

## Performance Standards

### Speed Metrics
- Build time: < 5 seconds
- Page load: < 1 second
- API response: < 200ms
- Time to interactive: < 2 seconds

### Scalability
- Handle 10,000+ users
- 99.9% uptime target
- Edge deployment ready
- Database connection pooling

---

## Git Commit Standards

### Commit Messages
```
feat: Add enterprise dashboard analytics

- Implemented real-time metrics
- Added performance graphs
- Integrated with analytics API
- Optimized for scale
```

### Branch Naming
```
feature/add-analytics
fix/improve-performance
refactor/optimize-queries
docs/update-style-guide
```

---

**Version**: 1.0.0
**Last Updated**: November 11, 2025
**Status**: ✅ Active - Production Ready
**Theme**: Achievement, Power, Peak Performance
