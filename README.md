# Crescentia Websites Monorepo

Professional monorepo for Crescentia's web presence powered by **Turborepo**, **Next.js 14**, and **TypeScript**.

## 🎯 Projects

- **crescentia.pt** - Institutional homepage (dual split for 2 verticals)
- **funding.crescentia.pt** - Complete site in PT for Portuguese SMEs (European Funds)
- **wealth.crescentia.pt** - Complete site in EN for international tech professionals (IFICI tax optimization)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build**: Turborepo
- **Deploy**: Vercel
- **Package Manager**: pnpm

## 📦 Monorepo Structure

```
crescentia-websites/
├── apps/
│   ├── institutional/     # crescentia.pt
│   ├── funding/           # funding.crescentia.pt
│   └── wealth/            # wealth.crescentia.pt (PRIORITY)
├── packages/
│   ├── ui/                # Shared components
│   ├── config/            # Design tokens & configuration
│   └── typescript-config/ # Shared TS configs
└── public/
    └── logos/             # Brand assets (SVGs)
```

## 🎨 Design System

### Colors
- **Yellow**: `#F5CF00` (brand primary)
- **Dark**: `#12141C` (backgrounds, text)
- **White**: `#FFFFFF`
- Tints: 60% and 20% variations

### Typography
- **Font**: Space Grotesk (Medium, Bold)
- Alternative: Outfit

### Logos
- Full horizontal SVG logos
- Icon variations: main, blackout, whiteout, yellow

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.15.0

### Installation

```bash
# Install dependencies
pnpm install

# Run all apps in development
pnpm dev

# Build all apps
pnpm build

# Lint all apps
pnpm lint

# Type check
pnpm type-check
```

### Development

```bash
# Run specific app
cd apps/wealth
pnpm dev

# Run institutional site
cd apps/institutional
pnpm dev

# Run funding site
cd apps/funding
pnpm dev
```

## 📋 Development Priorities

1. ✅ Monorepo setup with Turborepo
2. ✅ Design system (colors, base components)
3. ✅ Layout components (Header, Footer, Hero, Section)
4. 🚀 **wealth.crescentia.pt** (PRIORITY - new business)
5. funding.crescentia.pt
6. crescentia.pt institutional

## 🎯 Base Components

- Button (primary, secondary, outline variants)
- Input / Form fields
- Card components
- Navigation / Header
- Footer
- Hero sections
- CTA sections
- Pricing tables
- Feature grids

## ✨ Guidelines

- **Mobile-first** responsive design
- **Smooth animations** with Framer Motion
- **Performance optimized** (100 PageSpeed target)
- **SEO ready** (meta tags, structured data)
- **Accessibility** (WCAG AA)
- **TypeScript strict mode**

## 📝 License

Private - Crescentia © 2024

---

Built with ❤️ by Crescentia Team
