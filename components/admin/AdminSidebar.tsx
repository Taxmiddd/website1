"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Image,
  BarChart3,
  Globe,
  Palette,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Pages", href: "/admin/pages", icon: FileText },
  { name: "Navbar", href: "/admin/navbar", icon: Globe },
  { name: "Theme", href: "/admin/theme", icon: Palette },
  { name: "Site Settings", href: "/admin/settings", icon: Settings },
  { name: "Team Members", href: "/admin/team", icon: Users },
  { name: "Blog Posts", href: "/admin/posts", icon: FileText },
  { name: "Widgets", href: "/admin/widgets", icon: Image },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-card border-r border-accent-gold/20">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-accent-gold/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold to-primary flex items-center justify-center">
            <span className="font-display text-lg font-bold text-background">
              IG
            </span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-accent-gold">
              Admin Panel
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-accent-gold/20 text-accent-gold border border-accent-gold/30"
                  : "text-muted-foreground hover:bg-accent-gold/10 hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-accent-gold/20">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            IGACMUN Admin v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
