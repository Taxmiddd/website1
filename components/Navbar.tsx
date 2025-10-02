"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#committees", label: "Committees" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-accent-gold/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold to-primary flex items-center justify-center">
              <span className="font-display text-lg font-bold text-background">
                IG
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-accent-gold leading-tight">
                IGACMUN
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                Session III
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent-gold transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-gold/20 transition-all duration-300">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent-gold transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-card/95 backdrop-blur-md border-t border-accent-gold/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground hover:text-accent-gold transition-colors duration-300 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-gold/20 transition-all duration-300">
              Register Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
