# ⚡ Quick VPS Commands Reference

## 🚀 Initial Setup (Copy-Paste These)

```bash
# 1. Update system
apt update && apt upgrade -y

# 2. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt install -y nodejs

# 3. Install PM2
npm install -g pm2

# 4. Install Git & Nginx
apt install -y git nginx

# 5. Configure firewall
ufw allow 22 && ufw allow 80 && ufw allow 443 && ufw enable
```

## 📦 Project Setup

```bash
# 6. Clone project (or upload with FileZilla)
cd ~ && git clone YOUR_REPO_URL igacmun && cd igacmun

# 7. Create environment file
nano .env.local
# Paste your environment variables, then Ctrl+X, Y, Enter

# 8. Install dependencies
npm install

# 9. Create admin account
npm run db:seed

# 10. Build for production
npm run build

# 11. Start with PM2
pm2 start npm --name "igacmun" -- start
pm2 save
pm2 startup
```

## 🌐 Nginx Configuration

```bash
# 12. Create Nginx config
nano /etc/nginx/sites-available/igacmun
```

**Paste this:**
```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_IP;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Save (Ctrl+X, Y, Enter), then:**

```bash
# 13. Enable site
ln -s /etc/nginx/sites-available/igacmun /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

## 🔒 Add SSL (If you have domain)

```bash
# 14. Install Certbot
apt install -y certbot python3-certbot-nginx

# 15. Get SSL certificate
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 16. Update .env.local
nano .env.local
# Change NEXTAUTH_URL to https://yourdomain.com
# Ctrl+X, Y, Enter

# 17. Restart app
pm2 restart igacmun
```

## 🔧 Daily Commands

```bash
# View logs
pm2 logs igacmun

# Restart app
pm2 restart igacmun

# Check status
pm2 status

# Update code
cd ~/igacmun && git pull && npm install && npm run build && pm2 restart igacmun

# Check disk space
df -h

# Check memory
free -h
```

## 🆘 Troubleshooting

```bash
# App not working?
pm2 logs igacmun
pm2 restart igacmun

# Nginx error?
nginx -t
systemctl restart nginx

# Port 3000 busy?
lsof -ti:3000 | xargs kill -9
pm2 restart igacmun

# Can't connect to MongoDB?
npm run db:seed
```

---

**Full guide:** [VPS_DEPLOYMENT_GUIDE.md](VPS_DEPLOYMENT_GUIDE.md)
