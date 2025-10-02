"use client";

import Link from "next/link";
import { Plus, Upload, Settings, Users } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      name: "Add Team Member",
      href: "/admin/team/new",
      icon: Plus,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Upload Media",
      href: "/admin/media",
      icon: Upload,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Site Settings",
      href: "/admin/settings",
      icon: Settings,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Manage Team",
      href: "/admin/team",
      icon: Users,
      color: "from-accent-gold to-primary",
    },
  ];

  return (
    <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.name}
              href={action.href}
              className="flex flex-col items-center p-4 bg-background rounded-lg border border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {action.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
