# Oussama Lassoued — Portfolio Website

A premium, cinematic portfolio website showcasing UI/UX design expertise through an immersive digital experience.

![Portfolio Preview](preview.png)

## 🎨 Overview

This portfolio website represents a modern, high-end approach to presenting design work online. Built with a focus on storytelling, motion, and technical excellence, it creates a memorable experience for potential clients, recruiters, and collaborators.

### Key Features

- **Cinematic Design Language**: Five carefully crafted scenes that flow like a visual narrative
- **Premium Motion Design**: Scroll-triggered animations and smooth transitions
- **WebGL Background Effects**: Subtle particle system for atmospheric depth
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Responsive Design**: Optimized for all screen sizes and devices
- **Accessibility First**: Keyboard navigation, reduced motion support, semantic HTML
- **Performance Optimized**: Fast loading with progressive enhancement
- **SEO Ready**: Meta tags, Open Graph, and semantic structure

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Animations + GSAP (ready for enhancement)
- **3D/WebGL**: Canvas 2D (upgradeable to Three.js/React Three Fiber)
- **Fonts**: Google Fonts (Inter, Space Mono)

### Project Structure

```
my-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page orchestrating all sections
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── About.tsx           # About/Profile section
│   ├── Capabilities.tsx    # Skills and expertise showcase
│   ├── Contact.tsx         # Contact CTA section
│   ├── CustomCursor.tsx    # Interactive cursor component
│   ├── Hero.tsx            # Opening hero scene
│   ├── Manifesto.tsx       # Design philosophy section
│   ├── Navigation.tsx      # Fixed navigation with progress dots
│   ├── Preloader.tsx       # Loading animation
│   └── WebGLBackground.tsx # Particle system background
├── lib/
│   └── content.ts          # All website copy and content
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 Design Philosophy

The website follows five core principles:

1. **Art Meets Technology**: Blending aesthetic vision with technical capability
2. **Motion With Intent**: Animation as communication, not decoration
3. **Stories Over Screens**: Visual narratives that connect emotionally
4. **Thoughtful Simplicity**: Disciplined design that serves the user
5. **Design for Impact**: Every detail shapes lasting impressions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/OussamaLaaa/my-web.git
cd my-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📝 Content Customization

All website content is centralized in `lib/content.ts` for easy customization:

```typescript
export const content = {
  hero: {
    name: "Your Name",
    role: "Your Role",
    tagline: "Your Tagline",
    // ...
  },
  // ... other sections
}
```

Update this file to personalize the portfolio with your own information.

## 🎨 Styling Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  background: "#0a0a0a",    // Dark base
  foreground: "#f5f5f5",    // Light text
  accent: "#4dd4d4",        // Accent color
  dim: "rgba(245, 245, 245, 0.35)",
  border: "rgba(245, 245, 245, 0.12)",
}
```

### Typography

Fonts are loaded from Google Fonts in `app/layout.tsx`. Change to your preferred fonts:

```tsx
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet" />
```

Then update the CSS variables in `app/globals.css`.

## ♿ Accessibility Features

- **Keyboard Navigation**: Full site navigation with keyboard
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Screen Reader Friendly**: Descriptive labels and alt text

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting via Next.js
- **Image Optimization**: Next.js Image component (when images are added)
- **Font Loading**: Optimized Google Fonts loading
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Static Generation**: Pages pre-rendered at build time

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully to different screen sizes.

## 🎬 Animation System

### Current Implementation

- CSS-based animations for initial reveals
- Intersection Observer for scroll-triggered effects
- Custom cursor with smooth following
- Particle system background

### Enhancement Opportunities

Ready for GSAP integration:
- ScrollTrigger for advanced scroll animations
- Split text animations for typography reveals
- Timeline-based choreography
- Advanced easing and motion curves

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Docker container

## 🔮 Future Enhancements

### Content
- [ ] Add actual case studies/project portfolio
- [ ] Integrate CMS for easy content updates
- [ ] Add blog section for design thoughts

### Technical
- [ ] Upgrade to Three.js for 3D scenes
- [ ] Implement Lenis for ultra-smooth scroll
- [ ] Add advanced GSAP animations
- [ ] Integrate analytics (privacy-focused)
- [ ] Add contact form with backend

### Design
- [ ] Dark/light mode toggle
- [ ] More interactive elements
- [ ] Custom loading animations per section
- [ ] Sound design (optional, user-controlled)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Oussama Lassoued**
- Email: hello@oussamalassoued.com (update with actual email)
- LinkedIn: [Your LinkedIn]
- Portfolio: [Your Portfolio URL]

---

**Built with intention and attention to detail** ✨

Crafted using Next.js, TypeScript, and Tailwind CSS.
