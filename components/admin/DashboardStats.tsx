"use client";

import { Users, Eye, FileText, TrendingUp } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      name: "Total Page Views",
      value: "12,543",
      change: "+12.5%",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Team Members",
      value: "8",
      change: "+2 this month",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Content Items",
      value: "24",
      change: "+4 this week",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Site Performance",
      value: "98%",
      change: "+3% uptime",
      icon: TrendingUp,
      color: "from-accent-gold to-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="bg-card border border-accent-gold/20 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-gold/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-green-500 font-medium">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-muted-foreground">{stat.name}</p>
          </div>
        );
      })}
    </div>
  );
}
