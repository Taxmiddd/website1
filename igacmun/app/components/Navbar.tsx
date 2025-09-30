"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/session-3", label: "Session III" },
    { href: "/session-3/committees", label: "Committees" },
    { href: "/session-3/schedule", label: "Schedule" },
    { href: "/session-3/venue", label: "Venue" },
    { href: "/session-3/register", label: "Registration" },
    { href: "/secretariats", label: "Secretariats" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div tabIndex={0}>
            <Link className="group" href="/">
              <div className="relative">
                <div className="flex items-center space-x-3 group-hover:text-accent-gold transition-all duration-300">
                  <div className="relative rounded-full overflow-hidden bg-accent-gold/10 p-1 w-16 h-16">
                    <Image
                      alt="IGACMUN Logo"
                      src="/assets/Untitled-design-19.png"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-foreground">IGACMUN</span>
                    <span className="text-xs text-muted-foreground -mt-1">Session III</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-lg group-hover:bg-accent-gold/40 transition-all duration-500 group-hover:scale-125" />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} tabIndex={0}>
                <Link
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden text-foreground hover:text-accent-gold"
                  href={item.href}
                >
                  <span className="relative z-10 group-hover:drop-shadow-sm transition-all duration-300">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium relative overflow-hidden group bg-gradient-to-r from-forest-700 to-forest-600 text-forest-50 border border-accent-gold/30 shadow-lg hover:shadow-accent-gold/40 hover:border-accent-gold/50 transition-all duration-300 h-8 rounded-md px-3 text-xs"
              href="/session-3/register"
            >
              Register Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 w-9 text-foreground hover:text-accent-gold"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border">
          <div className="px-4 py-4 grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm text-foreground hover:text-accent-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
    </nav>
  );
}

export default Navbar;
