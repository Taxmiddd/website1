# ✅ VPS Setup Guide - READY!

## 🎉 I Already Created Complete VPS Guides For You!

---

## 📚 Your VPS Documentation

### 1. **[VPS_DEPLOYMENT_GUIDE.md](VPS_DEPLOYMENT_GUIDE.md)** ⭐ START HERE
**Complete step-by-step guide with:**
- ✅ VPS provider selection (DigitalOcean, Vultr, Linode)
- ✅ Ubuntu 22.04 installation
- ✅ Node.js & PM2 setup
- ✅ Project deployment
- ✅ Nginx configuration
- ✅ SSL certificate (FREE HTTPS)
- ✅ Domain setup
- ✅ Firewall configuration
- ✅ Security best practices
- ✅ Troubleshooting guide
- ✅ Backup strategies
- ✅ Performance optimization

**📖 Length:** Complete guide with every detail

---

### 2. **[QUICK_VPS_COMMANDS.md](QUICK_VPS_COMMANDS.md)** ⚡ QUICK REFERENCE
**Copy-paste commands for:**
- ✅ Initial server setup
- ✅ Project deployment
- ✅ Nginx configuration
- ✅ SSL installation
- ✅ Daily maintenance
- ✅ Troubleshooting

**⚡ Length:** Quick command reference

---

## 🚀 Quick Start for VPS

### Step 1: Get VPS ($5/month)
**Choose one:**
- **DigitalOcean:** https://www.digitalocean.com (Recommended)
- **Vultr:** https://vultr.com
- **Linode:** https://linode.com

**Select:**
- OS: Ubuntu 22.04 LTS
- Plan: $5/month (1GB RAM)

---

### Step 2: Connect to VPS

**Windows (PowerShell):**
```powershell
ssh root@YOUR_VPS_IP
```

**Mac/Linux (Terminal):**
```bash
ssh root@YOUR_VPS_IP
```

---

### Step 3: Run Setup Commands

**Copy-paste these one by one:**

```bash
# 1. Update system
apt update && apt upgrade -y

# 2. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 3. Install PM2 (keeps app running 24/7)
npm install -g pm2

# 4. Install Git & Nginx
apt install -y git nginx

# 5. Setup firewall
ufw allow 22 && ufw allow 80 && ufw allow 443
ufw enable
```

---

### Step 4: Upload Your Project

**Option A: Using FileZilla (Easy)**
1. Download FileZilla: https://filezilla-project.org
2. Connect:
   - Host: `sftp://YOUR_VPS_IP`
   - Username: `root`
   - Password: `your_password`
   - Port: `22`
3. Upload entire `igacmun` folder to `/root/`

**Option B: Using Git**
```bash
cd ~
git clone YOUR_GITHUB_REPO igacmun
cd igacmun
```

---

### Step 5: Configure Environment

```bash
cd ~/igacmun
nano .env.local
```

**Paste this (update YOUR values):**
```bash
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/igacmun
NEXTAUTH_SECRET=paste-random-secret-from-openssl-rand-base64-32
NEXTAUTH_URL=http://YOUR_VPS_IP:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Save:** Press `Ctrl+X`, then `Y`, then `Enter`

---

### Step 6: Deploy App

```bash
# Install dependencies
npm install

# Create admin account
npm run db:seed
# Follow prompts to create your admin login

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "igacmun" -- start

# Save PM2 config
pm2 save

# Auto-start on server reboot
pm2 startup
# Copy and run the command it shows
```

---

### Step 7: Configure Nginx

```bash
nano /etc/nginx/sites-available/igacmun
```

**Paste this:**
```nginx
server {
    listen 80;
    server_name YOUR_VPS_IP;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

**Save and enable:**
```bash
ln -s /etc/nginx/sites-available/igacmun /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

---

### Step 8: Visit Your Website! 🎉

**Open browser:**
```
http://YOUR_VPS_IP
```

**Admin login:**
```
http://YOUR_VPS_IP/admin/login
```

---

## 🔒 Add HTTPS (Optional - Requires Domain)

### Step 1: Point Domain to VPS

In your domain registrar (GoDaddy, Namecheap, etc), add:

**A Record:**
```
Type: A
Name: @
Value: YOUR_VPS_IP
```

**A Record (www):**
```
Type: A  
Name: www
Value: YOUR_VPS_IP
```

Wait 10-30 minutes for DNS propagation.

---

### Step 2: Update Nginx

```bash
nano /etc/nginx/sites-available/igacmun

# Change:
server_name YOUR_VPS_IP;

# To:
server_name yourdomain.com www.yourdomain.com;

# Save and restart
nginx -t
systemctl restart nginx
```

---

### Step 3: Install FREE SSL

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate (FREE from Let's Encrypt)
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow prompts:
# - Enter email
# - Agree to terms (Y)
# - Redirect HTTP to HTTPS (2)
```

---

### Step 4: Update Environment

```bash
nano .env.local

# Change:
NEXTAUTH_URL=https://yourdomain.com

# Save and restart
pm2 restart igacmun
```

**Your site is now HTTPS! 🔒**

---

## 🔧 Useful Commands

### Check App Status
```bash
pm2 status
pm2 logs igacmun
```

### Restart App
```bash
pm2 restart igacmun
```

### Update Code
```bash
cd ~/igacmun
git pull  # or upload new files
npm install
npm run build
pm2 restart igacmun
```

### Check Nginx
```bash
nginx -t
systemctl restart nginx
```

### View Logs
```bash
pm2 logs igacmun --lines 50
```

---

## 🆘 Troubleshooting

### Website Not Loading?
```bash
# Check if app is running
pm2 status

# Check logs
pm2 logs igacmun

# Restart app
pm2 restart igacmun

# Check Nginx
systemctl status nginx
nginx -t
```

### 502 Bad Gateway?
```bash
# App crashed, check logs
pm2 logs igacmun

# Restart
pm2 restart igacmun
```

### Can't Login?
```bash
# Recreate admin
cd ~/igacmun
npm run db:seed
```

---

## 💰 Cost

- **VPS:** $5/month
- **MongoDB Atlas:** FREE
- **Cloudinary:** FREE  
- **SSL Certificate:** FREE
- **Domain:** ~$12/year (optional)

**Total: $5/month** 🎉

---

## 📚 Complete Guides Available

1. **[VPS_DEPLOYMENT_GUIDE.md](VPS_DEPLOYMENT_GUIDE.md)** - Full detailed guide
2. **[QUICK_VPS_COMMANDS.md](QUICK_VPS_COMMANDS.md)** - Quick command reference
3. **[START_HERE.md](START_HERE.md)** - Main setup guide
4. **[VERIFICATION_REPORT.md](VERIFICATION_REPORT.md)** - Everything verified

---

## ✅ What You Get

After following this guide:
- ✅ Website running 24/7
- ✅ Auto-restarts if crashes
- ✅ Survives server reboots
- ✅ Accessible worldwide
- ✅ Fast with Nginx
- ✅ Secure with firewall
- ✅ HTTPS encrypted (if domain added)
- ✅ FREE SSL certificate
- ✅ Production-ready

---

## 🎊 Ready to Deploy!

**Choose your guide:**
- **Want full details?** → [VPS_DEPLOYMENT_GUIDE.md](VPS_DEPLOYMENT_GUIDE.md)
- **Want quick commands?** → [QUICK_VPS_COMMANDS.md](QUICK_VPS_COMMANDS.md)
- **Need help?** → Both guides have troubleshooting sections

**Deployment time: 30-45 minutes** ⏱️

---

*Last updated: October 2, 2025*  
*Tested on: Ubuntu 22.04 LTS*  
*Status: ✅ Ready to Use*
