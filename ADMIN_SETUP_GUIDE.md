# 🔐 IGACMUN Admin Panel - Complete Setup Guide

This guide will walk you through setting up the admin panel with a free database and deploying it to production.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database Setup (MongoDB Atlas - FREE)](#database-setup)
3. [Cloudinary Setup (Image Storage - FREE)](#cloudinary-setup)
4. [Local Development Setup](#local-development)
5. [Create Admin Account](#create-admin-account)
6. [VPS Deployment](#vps-deployment)
7. [Domain Configuration](#domain-configuration)
8. [Security Best Practices](#security)

---

## 1. Prerequisites

- Node.js 18+ installed
- Git installed
- A GitHub account
- Email address for registrations

---

## 2. Database Setup (MongoDB Atlas - FREE)

### Step 1: Create MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Sign up with your email (FREE forever tier available)
3. Choose **FREE** M0 Sandbox (512MB storage)

### Step 2: Create a Cluster

1. After login, click **"Build a Database"**
2. Choose **FREE** shared tier
3. Select a cloud provider and region closest to you
4. Click **"Create Cluster"** (takes 3-5 minutes)

### Step 3: Configure Database Access

1. Go to **Database Access** in left sidebar
2. Click **"Add New Database User"**
3. Create username and password:
   - Username: `igacmun_admin`
   - Password: Click "Autogenerate Secure Password" (SAVE THIS!)
4. Set privileges to **"Atlas admin"**
5. Click **"Add User"**

### Step 4: Configure Network Access

1. Go to **Network Access** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Or add your specific IP for better security
4. Click **"Confirm"**

### Step 5: Get Connection String

1. Go to **Database** in left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://igacmun_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. **SAVE THIS CONNECTION STRING!**

---

## 3. Cloudinary Setup (Image Storage - FREE)

### Step 1: Create Cloudinary Account

1. Go to [https://cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)
2. Sign up (FREE plan: 25GB storage, 25GB bandwidth/month)
3. Verify your email

### Step 2: Get API Credentials

1. After login, go to **Dashboard**
2. You'll see:
   - Cloud Name: `your-cloud-name`
   - API Key: `123456789012345`
   - API Secret: `click to reveal`
3. **SAVE THESE CREDENTIALS!**

---

## 4. Local Development Setup

### Step 1: Install Dependencies

```bash
cd /workspace
npm install
```

### Step 2: Create Environment File

Create `.env.local` in project root:

```bash
# MongoDB Connection
MONGODB_URI=mongodb+srv://igacmun_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/igacmun?retryWrites=true&w=majority

# NextAuth Secret (generate a random string)
NEXTAUTH_SECRET=your-super-secret-key-min-32-characters-long-random-string

# NextAuth URL
NEXTAUTH_URL=http://localhost:3000

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your-api-secret
```

**To generate NEXTAUTH_SECRET:**
```bash
# On Linux/Mac
openssl rand -base64 32

# Or use this online tool
# https://generate-secret.vercel.app/32
```

### Step 3: Start Development Server

```bash
npm run dev
```

Your site will be at: http://localhost:3000

---

## 5. Create Admin Account

### Method 1: Using Seed Script (Recommended)

```bash
npm run db:seed
```

Follow the prompts:
- Enter MongoDB URI (from .env.local)
- Enter admin username: `admin`
- Enter admin email: `your-email@example.com`
- Enter password: `SecurePassword123!` (min 8 characters)

### Method 2: Manual Creation

1. Install MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Connect using your MongoDB URI
3. Create collection: `admins`
4. Insert document:
```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "$2a$12$hashedpasswordhere",
  "role": "superadmin",
  "isActive": true,
  "createdAt": new Date(),
  "updatedAt": new Date()
}
```

**To hash password:**
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('YourPassword', 12));"
```

---

## 6. VPS Deployment

### Option A: DigitalOcean (Recommended - $5/month)

#### Step 1: Create Droplet

1. Sign up at [https://www.digitalocean.com](https://www.digitalocean.com)
2. Create Droplet:
   - Image: **Ubuntu 22.04 LTS**
   - Plan: **Basic $5/month** (1GB RAM)
   - Datacenter: Choose closest to you
   - Authentication: SSH Key or Password

#### Step 2: Connect to Server

```bash
ssh root@your-server-ip
```

#### Step 3: Install Node.js

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify
node -v
npm -v
```

#### Step 4: Install PM2 (Process Manager)

```bash
npm install -g pm2
```

#### Step 5: Clone & Setup Project

```bash
# Install Git
apt install -y git

# Clone your repository
git clone https://github.com/your-username/igacmun.git
cd igacmun

# Install dependencies
npm install

# Create .env.local (use nano or vi)
nano .env.local
```

Paste your environment variables and save (Ctrl+X, Y, Enter).

#### Step 6: Build & Start

```bash
# Build for production
npm run build

# Start with PM2
pm2 start npm --name "igacmun" -- start

# Save PM2 config
pm2 save
pm2 startup
```

#### Step 7: Install Nginx

```bash
# Install Nginx
apt install -y nginx

# Configure Nginx
nano /etc/nginx/sites-available/igacmun
```

Paste this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/igacmun /etc/nginx/sites-enabled/

# Remove default
rm /etc/nginx/sites-enabled/default

# Test configuration
nginx -t

# Restart Nginx
systemctl restart nginx
```

#### Step 8: Install SSL (HTTPS)

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d your-domain.com -d www.your-domain.com

# Follow prompts
# Choose option 2 (Redirect HTTP to HTTPS)
```

SSL will auto-renew. Test renewal:
```bash
certbot renew --dry-run
```

---

### Option B: Vercel (Easiest - FREE)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
# Add environment variables in Vercel dashboard
```

Then add environment variables in Vercel Dashboard:
1. Go to project settings
2. Add all variables from `.env.local`
3. Redeploy

---

## 7. Domain Configuration

### If you have a domain:

1. **Update DNS Records:**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add A Record:
     - Type: `A`
     - Name: `@`
     - Value: `YOUR_SERVER_IP`
   - Add A Record for www:
     - Type: `A`
     - Name: `www`
     - Value: `YOUR_SERVER_IP`

2. **Wait for DNS propagation** (5 minutes - 48 hours)

3. **Update NEXTAUTH_URL:**
   ```bash
   # On server
   nano .env.local
   # Change to: NEXTAUTH_URL=https://your-domain.com
   
   # Restart app
   pm2 restart igacmun
   ```

### If you DON'T have a domain:

**FREE Domain Options:**
- **Freenom:** https://www.freenom.com (Free .tk, .ml, .ga domains)
- **Use server IP:** Access at `http://your-server-ip`

---

## 8. Security Best Practices

### ✅ Essential Security Measures

1. **Strong Passwords:**
   - Admin password: 16+ characters
   - Mix of uppercase, lowercase, numbers, symbols

2. **Environment Variables:**
   - Never commit `.env.local` to git
   - Use different secrets for production

3. **MongoDB Security:**
   - Use strong database password
   - Enable IP whitelist in production
   - Regular backups

4. **Server Security:**
   ```bash
   # Enable firewall
   ufw allow 22    # SSH
   ufw allow 80    # HTTP
   ufw allow 443   # HTTPS
   ufw enable
   
   # Disable root login
   nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   systemctl restart sshd
   ```

5. **Regular Updates:**
   ```bash
   # Update dependencies monthly
   npm update
   
   # Update system
   apt update && apt upgrade -y
   ```

6. **Backup Strategy:**
   - MongoDB Atlas has automatic backups
   - Backup `.env.local` file securely
   - Keep code in GitHub

---

## 🚀 Quick Start Commands

```bash
# Local Development
npm install
npm run dev
npm run db:seed

# Production Build
npm run build
npm start

# PM2 Commands
pm2 start npm --name igacmun -- start
pm2 stop igacmun
pm2 restart igacmun
pm2 logs igacmun
pm2 status
```

---

## 🆘 Troubleshooting

### Can't connect to MongoDB
```bash
# Test connection
node -e "const mongoose = require('mongoose'); mongoose.connect('YOUR_URI').then(() => console.log('Connected!')).catch(err => console.log(err));"
```

### Port 3000 already in use
```bash
# Kill process
npx kill-port 3000
```

### PM2 not starting
```bash
# Check logs
pm2 logs igacmun

# Restart
pm2 restart igacmun
```

### Nginx error
```bash
# Check configuration
nginx -t

# View error logs
tail -f /var/log/nginx/error.log
```

---

## 📞 Support Resources

- **MongoDB Docs:** https://docs.mongodb.com/
- **Next.js Docs:** https://nextjs.org/docs
- **Nginx Docs:** https://nginx.org/en/docs/
- **PM2 Docs:** https://pm2.keymetrics.io/docs/

---

## ✅ Setup Checklist

- [ ] MongoDB Atlas account created
- [ ] Database cluster created
- [ ] Database user created
- [ ] Network access configured
- [ ] Connection string obtained
- [ ] Cloudinary account created
- [ ] Cloudinary credentials obtained
- [ ] `.env.local` file created
- [ ] Dependencies installed
- [ ] Admin account created
- [ ] Local development working
- [ ] Production build successful
- [ ] VPS configured (if using)
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Backups configured

---

🎉 **Congratulations! Your IGACMUN admin panel is now live!**

Access your admin panel at: `https://your-domain.com/admin/login`

---

*Last updated: October 2, 2025*
