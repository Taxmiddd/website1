"use client";

import { Mail, Phone, MapPin, Globe, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-accent-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-primary flex items-center justify-center">
                <span className="font-display text-xl font-bold text-background">
                  IG
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-accent-gold">
                  IGACMUN
                </h3>
                <p className="text-xs text-muted-foreground">Session III</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The biggest Model United Nations conference in South East Asia
              returns with unprecedented scale and diplomatic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Committees", href: "#committees" },
                { label: "Leadership", href: "#leadership" },
                { label: "Registration", href: "#register" },
                { label: "FAQs", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-gold flex-shrink-0" />
                <a
                  href="mailto:igacmun@igac.org"
                  className="text-muted-foreground hover:text-accent-gold transition-colors duration-300 text-sm"
                >
                  igacmun@igac.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-gold flex-shrink-0" />
                <a
                  href="tel:+8801815353082"
                  className="text-muted-foreground hover:text-accent-gold transition-colors duration-300 text-sm"
                >
                  +880 18153-53082
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-gold flex-shrink-0" />
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent-gold transition-colors duration-300 text-sm"
                >
                  Dhaka, Bangladesh
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Stay Updated
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates about IGACMUN Session III and upcoming
              events.
            </p>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-accent-gold" />
              <span className="text-sm text-muted-foreground">
                Follow our social media for announcements
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gold/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} International Global Affairs Council. All rights
                reserved.
              </p>
            </div>

            {/* Credits */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center bg-gradient-to-r from-accent-gold/30 via-accent-gold/20 to-accent-gold/30 border border-accent-gold/50 rounded-full px-6 py-3 backdrop-blur-sm hover:border-accent-gold/70 transition-all duration-300 group shadow-lg shadow-accent-gold/20">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-accent-gold/30 rounded-full group-hover:bg-accent-gold/40 transition-colors duration-300">
                    <Heart className="h-4 w-4 text-accent-gold animate-pulse" />
                  </div>
                  <span className="text-sm text-accent-gold font-semibold">
                    CRAFTED WITH PASSION BY
                  </span>
                  <span className="font-display text-sm font-bold text-accent-gold">
                    OSAYEED JABER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
