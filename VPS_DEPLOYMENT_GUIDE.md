# 🚀 Complete VPS Deployment Guide - Linux Server

## 📋 What You'll Need

1. **Linux VPS** ($5/month from DigitalOcean, Linode, or Vultr)
2. **Domain name** (optional but recommended)
3. **MongoDB Atlas** (FREE - already setup)
4. **Cloudinary** (FREE - already setup)
5. **30-60 minutes** of your time

---

## 🎯 Step-by-Step VPS Setup

### Step 1: Get a VPS (Choose One)

#### **Option A: DigitalOcean (Recommended)**
1. Go to https://www.digitalocean.com
2. Sign up (get $200 free credit for 60 days)
3. Click **"Create"** → **"Droplets"**
4. Choose:
   - **Distribution:** Ubuntu 22.04 LTS
   - **Plan:** Basic ($5/month - 1GB RAM)
   - **Datacenter:** Closest to your location
   - **Authentication:** Password or SSH Key
5. Click **"Create Droplet"**
6. Wait 2-3 minutes
7. You'll get an **IP address** (e.g., 123.45.67.89)

#### **Option B: Vultr**
1. Go to https://www.vultr.com
2. Sign up (get $100 free credit)
3. Click **"Deploy New Server"**
4. Choose:
   - **Server Type:** Cloud Compute
   - **Location:** Closest to you
   - **OS:** Ubuntu 22.04 x64
   - **Plan:** $5/month (1GB RAM)
5. Click **"Deploy Now"**
6. Get your **IP address**

#### **Option C: Linode**
1. Go to https://www.linode.com
2. Sign up (get $100 free credit)
3. Click **"Create Linode"**
4. Choose:
   - **Distribution:** Ubuntu 22.04 LTS
   - **Region:** Closest to you
   - **Plan:** Nanode 1GB ($5/month)
5. Click **"Create"**
6. Get your **IP address**

---

### Step 2: Connect to Your VPS

#### **On Windows:**

**Using PuTTY:**
1. Download PuTTY from https://www.putty.org
2. Open PuTTY
3. Enter your VPS IP address
4. Click **"Open"**
5. Login as `root`
6. Enter your password

**Using PowerShell (Windows 10/11):**
```powershell
ssh root@YOUR_VPS_IP
# Example: ssh root@123.45.67.89
```

#### **On Mac/Linux:**

Open Terminal and run:
```bash
ssh root@YOUR_VPS_IP
# Example: ssh root@123.45.67.89
```

Enter password when prompted.

**You're now connected to your VPS!** 🎉

---

### Step 3: Update System & Install Node.js

Copy and paste these commands one by one:

```bash
# Update system packages
apt update && apt upgrade -y

# Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify installation
node -v  # Should show v20.x.x
npm -v   # Should show 10.x.x
```

✅ **Expected output:**
```
v20.11.0
10.2.4
```

---

### Step 4: Install PM2 (Process Manager)

PM2 keeps your app running 24/7, even after server restarts.

```bash
# Install PM2 globally
npm install -g pm2

# Verify
pm2 -v  # Should show version number
```

---

### Step 5: Install Git

```bash
# Install Git
apt install -y git

# Verify
git --version  # Should show git version
```

---

### Step 6: Clone Your Project

#### **Option A: From GitHub (If you pushed your code)**

```bash
# Navigate to home directory
cd ~

# Clone your repository
git clone https://github.com/YOUR_USERNAME/igacmun.git

# Enter project
cd igacmun
```

#### **Option B: Upload Files Directly**

If you haven't pushed to GitHub, upload files using **FileZilla** or **SCP**:

**Using FileZilla (Easy):**
1. Download FileZilla from https://filezilla-project.org
2. Open FileZilla
3. Enter:
   - Host: `sftp://YOUR_VPS_IP`
   - Username: `root`
   - Password: `your_password`
   - Port: `22`
4. Click **"Quickconnect"**
5. Drag your project folder to `/root/igacmun`

**Using SCP (Command line):**
```bash
# On your local computer (not VPS)
cd /workspace
tar -czf igacmun.tar.gz .
scp igacmun.tar.gz root@YOUR_VPS_IP:/root/

# Then on VPS
ssh root@YOUR_VPS_IP
cd /root
mkdir igacmun
tar -xzf igacmun.tar.gz -C igacmun
cd igacmun
```

---

### Step 7: Create Environment File

```bash
# Make sure you're in project directory
cd ~/igacmun

# Create .env.local file
nano .env.local
```

**Paste this (update with YOUR values):**

```bash
# MongoDB Atlas (from mongodb.com)
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/igacmun?retryWrites=true&w=majority

# NextAuth Secret (generate random string)
NEXTAUTH_SECRET=your-super-secret-random-string-min-32-characters-long

# NextAuth URL (use your domain or IP)
NEXTAUTH_URL=http://YOUR_VPS_IP:3000
# Or with domain: NEXTAUTH_URL=https://yourdomain.com

# Cloudinary (from cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**To save in nano:**
1. Press `Ctrl + X`
2. Press `Y` (yes)
3. Press `Enter`

**Generate NEXTAUTH_SECRET:**
```bash
# Run this to generate random secret
openssl rand -base64 32
```
Copy the output and use it for `NEXTAUTH_SECRET`

---

### Step 8: Install Dependencies

```bash
# Install all packages (takes 2-3 minutes)
npm install
```

✅ **Wait for "added XXX packages"**

---

### Step 9: Create Admin Account

```bash
# Run the admin setup script
npm run db:seed
```

**You'll be asked:**
```
Enter your MongoDB URI: [Press Enter if already in .env.local]
Enter admin username: admin
Enter admin email: your@email.com
Enter admin password: YourSecurePassword123
```

✅ **Expected output:**
```
✅ Admin account created successfully!
```

---

### Step 10: Build for Production

```bash
# Build the app
npm run build
```

✅ **Wait 30-60 seconds**  
✅ **Should see:** `✓ Compiled successfully`

---

### Step 11: Start with PM2

```bash
# Start app with PM2
pm2 start npm --name "igacmun" -- start

# Save PM2 config
pm2 save

# Make PM2 start on server reboot
pm2 startup
# Copy and run the command it shows
```

✅ **Check if running:**
```bash
pm2 status
```

Should show:
```
┌────┬─────────────┬─────────┬─────────┐
│ id │ name        │ status  │ restart │
├────┼─────────────┼─────────┼─────────┤
│ 0  │ igacmun     │ online  │ 0       │
└────┴─────────────┴─────────┴─────────┘
```

🎉 **Your website is now running!**

---

### Step 12: Install Nginx (Web Server)

Nginx makes your site accessible on port 80/443 (standard web ports).

```bash
# Install Nginx
apt install -y nginx

# Check status
systemctl status nginx
```

Press `Q` to exit status view.

---

### Step 13: Configure Nginx

```bash
# Create Nginx configuration
nano /etc/nginx/sites-available/igacmun
```

**Paste this configuration:**

```nginx
server {
    listen 80;
    server_name YOUR_VPS_IP;  # Change to your domain if you have one

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

**Replace `YOUR_VPS_IP`** with:
- Your IP: `123.45.67.89`
- Or your domain: `yourdomain.com www.yourdomain.com`

**Save:** `Ctrl + X`, `Y`, `Enter`

**Enable the site:**
```bash
# Enable configuration
ln -s /etc/nginx/sites-available/igacmun /etc/nginx/sites-enabled/

# Remove default site
rm /etc/nginx/sites-enabled/default

# Test configuration
nginx -t

# Should show: "syntax is ok" and "test is successful"

# Restart Nginx
systemctl restart nginx
```

---

### Step 14: Configure Firewall

```bash
# Enable firewall
ufw allow 22     # SSH
ufw allow 80     # HTTP
ufw allow 443    # HTTPS
ufw enable

# Check status
ufw status
```

---

### Step 15: Test Your Website!

Open your browser and visit:

**Without domain:**
```
http://YOUR_VPS_IP
```

**With domain:**
```
http://yourdomain.com
```

**Admin panel:**
```
http://YOUR_VPS_IP/admin/login
```

✅ **You should see your IGACMUN website!** 🎉

---

## 🔒 Add SSL Certificate (HTTPS) - FREE

### Step 16: Install Certbot (Let's Encrypt)

**IMPORTANT:** You need a domain name for SSL!

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

**You'll be asked:**
1. Enter email address: `your@email.com`
2. Agree to terms: `Y`
3. Share email: `N` (optional)
4. Redirect HTTP to HTTPS: `2` (recommended)

✅ **SSL installed! Your site is now HTTPS!** 🔒

**Update .env.local:**
```bash
nano .env.local

# Change:
NEXTAUTH_URL=https://yourdomain.com

# Save: Ctrl+X, Y, Enter

# Restart app
pm2 restart igacmun
```

**Auto-renewal test:**
```bash
certbot renew --dry-run
```

SSL will auto-renew every 90 days! ✅

---

## 🎯 Domain Setup (Optional)

If you have a domain from GoDaddy, Namecheap, etc:

### Step 1: Add DNS Records

Go to your domain registrar and add these DNS records:

**A Record:**
```
Type: A
Name: @
Value: YOUR_VPS_IP
TTL: 3600
```

**A Record (www):**
```
Type: A
Name: www
Value: YOUR_VPS_IP
TTL: 3600
```

### Step 2: Wait for DNS Propagation

Wait 5 minutes to 24 hours (usually 10-30 minutes).

**Check if ready:**
```bash
ping yourdomain.com
# Should show your VPS IP
```

### Step 3: Update Nginx Config

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

### Step 4: Get SSL (repeat Step 16)

---

## 🔧 Useful PM2 Commands

```bash
# View app logs
pm2 logs igacmun

# Stop app
pm2 stop igacmun

# Restart app
pm2 restart igacmun

# Delete app
pm2 delete igacmun

# View app info
pm2 info igacmun

# Monitor in real-time
pm2 monit

# List all apps
pm2 list
```

---

## 🔄 Update Your Website

When you make changes to your code:

```bash
# Connect to VPS
ssh root@YOUR_VPS_IP

# Go to project
cd ~/igacmun

# Pull latest changes (if using Git)
git pull origin main

# Or upload new files with FileZilla

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart app
pm2 restart igacmun
```

---

## 🆘 Troubleshooting

### **Website not loading?**

**Check if app is running:**
```bash
pm2 status
pm2 logs igacmun
```

**Check Nginx:**
```bash
systemctl status nginx
nginx -t
```

**Check if port 3000 is listening:**
```bash
netstat -tlnp | grep 3000
```

---

### **Can't connect to MongoDB?**

**Test connection:**
```bash
cd ~/igacmun
npm run db:seed
```

**Check .env.local:**
```bash
cat .env.local
# Verify MONGODB_URI is correct
```

---

### **502 Bad Gateway error?**

**App crashed. Check logs:**
```bash
pm2 logs igacmun
```

**Restart app:**
```bash
pm2 restart igacmun
```

---

### **Permission denied errors?**

```bash
# Fix permissions
cd ~/igacmun
chown -R root:root .
chmod -R 755 .
```

---

### **Port 3000 already in use?**

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Restart app
pm2 restart igacmun
```

---

## 📊 Monitor Your VPS

### Check server resources:

```bash
# CPU and Memory usage
htop
# Press Q to exit

# Disk space
df -h

# Memory
free -h
```

---

## 🔐 Security Best Practices

### 1. Create Non-Root User (Recommended)

```bash
# Create new user
adduser igacadmin

# Add to sudo group
usermod -aG sudo igacadmin

# Switch to new user
su - igacadmin

# Use this user instead of root
```

### 2. Disable Root Login

```bash
# Edit SSH config
nano /etc/ssh/sshd_config

# Find and change:
PermitRootLogin no

# Save and restart SSH
systemctl restart sshd
```

### 3. Change SSH Port (Optional)

```bash
nano /etc/ssh/sshd_config

# Find:
#Port 22

# Change to:
Port 2222

# Save and restart
systemctl restart sshd

# Update firewall
ufw allow 2222
ufw delete allow 22

# Connect with:
ssh root@YOUR_VPS_IP -p 2222
```

### 4. Install Fail2Ban (Block brute force attacks)

```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

### 5. Enable Automatic Updates

```bash
apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades
# Select "Yes"
```

---

## 💾 Backup Your VPS

### Automatic Backups (Recommended)

**DigitalOcean:**
- Enable backups in Droplet settings ($1/month)

**Vultr/Linode:**
- Enable automatic snapshots

### Manual Backup

```bash
# Backup database (MongoDB Atlas auto-backs up)
# Backup .env.local
cp ~/igacmun/.env.local ~/igacmun-env-backup.txt

# Backup entire project
cd ~
tar -czf igacmun-backup-$(date +%Y%m%d).tar.gz igacmun/

# Download to your computer
# Use FileZilla or SCP
```

---

## 📈 Optimize Performance

### Enable GZIP Compression

```bash
nano /etc/nginx/nginx.conf

# Add inside http block:
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;

# Save and restart
systemctl restart nginx
```

### Add Caching Headers

```bash
nano /etc/nginx/sites-available/igacmun

# Add inside location / block:
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 30d;
    add_header Cache-Control "public, no-transform";
}

# Save and restart
nginx -t
systemctl restart nginx
```

---

## ✅ Final Checklist

- [ ] VPS created and connected
- [ ] Node.js and PM2 installed
- [ ] Project cloned/uploaded
- [ ] .env.local created with correct values
- [ ] Dependencies installed
- [ ] Admin account created
- [ ] Production build successful
- [ ] PM2 running app
- [ ] Nginx installed and configured
- [ ] Firewall enabled
- [ ] Website accessible
- [ ] Domain configured (optional)
- [ ] SSL certificate installed (optional)
- [ ] Backups enabled

---

## 🎊 You're Live!

**Your website is now:**
- ✅ Running 24/7
- ✅ Accessible to everyone
- ✅ Auto-restarts if it crashes
- ✅ Survives server reboots
- ✅ Secure with firewall
- ✅ Fast with Nginx
- ✅ HTTPS encrypted (if SSL added)

**Access your sites:**
- **Public website:** `http://yourdomain.com` or `http://YOUR_VPS_IP`
- **Admin panel:** `http://yourdomain.com/admin/login`

---

## 💰 Monthly Costs

- **VPS:** $5/month (DigitalOcean/Vultr/Linode)
- **MongoDB Atlas:** $0 (FREE)
- **Cloudinary:** $0 (FREE)
- **SSL Certificate:** $0 (FREE with Let's Encrypt)
- **Domain:** ~$10-15/year (optional)

**Total: $5/month** 🎉

---

## 📞 Support

**Common issues:**
- Check PM2 logs: `pm2 logs igacmun`
- Check Nginx: `nginx -t`
- Restart app: `pm2 restart igacmun`
- Restart Nginx: `systemctl restart nginx`

**Need help?**
- DigitalOcean Docs: https://docs.digitalocean.com
- PM2 Docs: https://pm2.keymetrics.io
- Nginx Docs: https://nginx.org/en/docs/

---

*Last updated: October 2, 2025*  
*Tested on: Ubuntu 22.04 LTS*  
*Status: ✅ Production-Ready*
