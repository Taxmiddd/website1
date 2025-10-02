# Deployment Guide for IGACMUN Clone

## Quick Deploy to Vercel

This project is optimized for Vercel deployment. Follow these steps:

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Method 2: Vercel Dashboard

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Deploy to Other Platforms

### AWS Amplify

1. Push code to GitHub
2. Connect repository in AWS Amplify
3. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

### Digital Ocean App Platform

1. Create new app from GitHub
2. Configure:
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

### Railway

1. Create new project from GitHub
2. Railway auto-detects Next.js
3. Deploy automatically

## Environment Variables

If you need environment variables:

1. Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

2. Add to deployment platform dashboard

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration

## Performance Optimization

The build includes:
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Font optimization
- ✅ Image optimization (when images added)
- ✅ CSS minification
- ✅ Tree shaking

## Build Output

Current production build stats:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    4.84 kB        92.1 kB
└ ○ /_not-found                          138 B          87.4 kB
```

All pages are static (○), providing optimal performance.

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Check all animations
- [ ] Test registration button (add actual link)
- [ ] Verify SEO metadata
- [ ] Test OpenGraph images
- [ ] Add actual team photos
- [ ] Configure analytics (if needed)
- [ ] Set up contact form (if needed)
- [ ] Add actual logo and favicon

## Monitoring

Recommended tools:
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User behavior tracking
- **Sentry** - Error tracking
- **Lighthouse** - Performance audits

## Troubleshooting

### Build Fails

1. Clear cache:
```bash
rm -rf .next node_modules
npm install
npm run build
```

2. Check Node.js version (requires 18+)

### Images Not Loading

- Ensure images are in `public/` directory
- Use correct paths (no leading `/public`)
- Add to `next.config.js` if external

### Styling Issues

- Verify Tailwind classes are correct
- Check `globals.css` is imported
- Ensure custom fonts are loaded

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Ready to deploy!** 🚀
