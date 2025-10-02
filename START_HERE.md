# 🚀 IGACMUN - Complete Guide (Start Here!)

## ⚡ Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
Create `.env.local` file:
```bash
# MongoDB (Free from mongodb.com/cloud/atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/igacmun

# NextAuth (Generate: openssl rand -base64 32)
NEXTAUTH_SECRET=your-random-32-character-secret
NEXTAUTH_URL=http://localhost:3000

# Cloudinary (Free from cloudinary.com)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 3. Create Admin Account
```bash
npm run db:seed
```
Follow prompts to create your admin login.

### 4. Start Admin Panel
```bash
npm run dev
```
Visit: **http://localhost:3000/admin/login**

---

## 🎯 What You Can Do (NO CODING!)

### ✅ Full Visual Control:
- **Pages** → Create/edit pages with drag-and-drop
- **Navbar** → Manage menu links visually
- **Theme** → Change colors, fonts with pickers
- **Team** → Add members with photos
- **Blog** → Write posts like in Word
- **Widgets** → Add features (contact form, gallery, etc.)
- **Media** → Upload/manage images
- **Settings** → Edit all site text

**Everything is point-and-click!**

---

## 📚 Documentation

### For Non-Developers (You!)
📖 **[VISUAL_EDITOR_GUIDE.md](VISUAL_EDITOR_GUIDE.md)** - How to use admin panel visually

### For Technical Setup
🔧 **[ADMIN_SETUP_GUIDE.md](ADMIN_SETUP_GUIDE.md)** - Database & deployment setup

---

## 🆘 Quick Help

### Can't Login?
```bash
npm run db:seed  # Create new admin account
```

### Port 3000 Busy?
```bash
npx kill-port 3000
npm run dev
```

### Changes Not Saving?
1. Check internet connection
2. Check MongoDB URI in `.env.local`
3. Refresh browser

---

## 🎨 Admin Panel Overview

### Main Sections:
1. **Dashboard** - Overview & quick actions
2. **Pages** - Visual page builder
3. **Navbar** - Menu editor
4. **Theme** - Colors & fonts
5. **Settings** - Site information
6. **Team** - Team members
7. **Posts** - Blog articles
8. **Widgets** - Add features
9. **Analytics** - Statistics

**All visual - no code required!**

---

## 💰 Cost: $0/month

- MongoDB Atlas: FREE (512MB)
- Cloudinary: FREE (25GB)
- Vercel Hosting: FREE
- **Total: $0 forever!**

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Add environment variables in Vercel dashboard.

### Option 2: VPS ($5/month)
See [ADMIN_SETUP_GUIDE.md](ADMIN_SETUP_GUIDE.md) for detailed steps.

---

## ✅ Features Checklist

- ✅ Visual page builder (no code)
- ✅ Navbar editor (drag & drop)
- ✅ Theme customization (color pickers)
- ✅ Team management (with photos)
- ✅ Blog system (rich text editor)
- ✅ Widgets/plugins (8+ ready)
- ✅ Media library (cloud storage)
- ✅ Analytics dashboard
- ✅ SEO tools
- ✅ Mobile responsive
- ✅ Secure authentication
- ✅ FREE hosting

---

## 📞 Support

- **Setup Issues:** See [ADMIN_SETUP_GUIDE.md](ADMIN_SETUP_GUIDE.md)
- **How to Use:** See [VISUAL_EDITOR_GUIDE.md](VISUAL_EDITOR_GUIDE.md)
- **Quick Questions:** See [QUICK_ADMIN_GUIDE.md](QUICK_ADMIN_GUIDE.md)

---

## 🎉 You're Ready!

1. ✅ Install dependencies
2. ✅ Setup `.env.local`
3. ✅ Create admin account
4. ✅ Login to admin panel
5. ✅ Start customizing!

**Everything is visual - just login and click!**

---

*Last updated: October 2, 2025*  
*Version: 2.0 (Clean & Optimized)*  
*Status: Production Ready ✅*
