# IGACMUN Session III - Complete Website + Admin Panel

A professional website with full visual admin panel (NO CODING required!) built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 **[START HERE](START_HERE.md)** ← Complete Setup Guide

## 🚀 Features

- ✨ Modern, responsive design with smooth animations
- 🎨 Custom TailwindCSS configuration matching the original site
- 📱 Mobile-first approach with full responsiveness
- ⚡ Optimized performance with Next.js 14 App Router
- 🎭 Custom fonts: Inter, Manrope, and Cinzel
- 🌐 Full SEO optimization with metadata and OpenGraph tags
- ♿ Accessibility-focused components
- 🎯 Dark green/gold theme matching IGACMUN branding

## 📦 Tech Stack

- **Framework:** Next.js 14.2.0
- **Language:** TypeScript 5.3.0
- **Styling:** TailwindCSS 3.4.0
- **Icons:** Lucide React
- **Font Optimization:** Next.js Font Optimization

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd igacmun-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
igacmun-clone/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Features.tsx        # Features/highlights section
│   ├── Leadership.tsx      # Leadership team section
│   └── Footer.tsx          # Footer component
├── public/
│   ├── leadership/         # Leadership team images
│   ├── Joint secretaries/  # Secretariat images
│   └── favicon.ico         # Site favicon
├── tailwind.config.ts      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Color Palette

The project uses a custom dark green and gold color scheme:

- **Background:** `#0a120d`
- **Foreground:** `#dcf2e4`
- **Primary:** `#1f5f46` (Deep green)
- **Secondary:** `#2f6f55` (Medium green)
- **Accent Gold:** `#c6a858`
- **Muted:** `#0e1a12`
- **Card:** `#0f1b14`

## 🌟 Components

### Navbar
- Sticky navigation with scroll effect
- Responsive mobile menu
- Smooth transitions
- Registration CTA button

### Hero
- Animated gradient background
- Statistics grid
- Call-to-action buttons
- Scroll indicator

### About
- Feature cards with icons
- Detailed description
- Hover effects

### Features
- Event highlights grid
- Icon-based information cards
- Registration CTA

### Leadership
- Executive board section
- Secretariat team cards
- Placeholder for images
- Hover animations

### Footer
- Multi-column layout
- Contact information
- Quick links
- Social media integration
- Credits section

## 📝 Customization

### Adding Images

Place images in the `public/` directory:
- Leadership photos: `public/leadership/`
- Secretary photos: `public/Joint secretaries/`
- Logo: `public/logo.png`
- Favicon: `public/favicon.ico`

### Modifying Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  background: "#0a120d",
  accent: "#c6a858",
  // ... other colors
}
```

### Updating Content

- Edit component files in `components/` directory
- Modify metadata in `app/layout.tsx`
- Update team members in `components/Leadership.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## 📄 License

This project is created for educational purposes as a clone of the IGACMUN website.

## 👨‍💻 Credits

**Original Design:** IGACMUN Team  
**Clone Implementation:** Created with Next.js and TailwindCSS  
**Crafted by:** Osayeed Jaber (as noted in original footer)

## 🤝 Contributing

This is a clone project. For the official IGACMUN website, please visit the original site.

## 📧 Contact

For questions about this clone implementation, please open an issue in the repository.

---

**Note:** This is a educational clone project. All rights to the original design and content belong to IGACMUN and the International Global Affairs Council.
