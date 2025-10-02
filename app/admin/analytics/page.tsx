"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Users, Eye, Globe } from "lucide-react";

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalViews: 0,
    uniqueVisitors: 0,
    avgDuration: "0:00",
    bounceRate: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/analytics?days=30");
      const data = await res.json();
      
      // Calculate totals
      const totalViews = data.reduce((sum: number, day: any) => sum + day.pageViews, 0);
      const uniqueVisitors = data.reduce((sum: number, day: any) => sum + day.uniqueVisitors, 0);
      
      setStats({
        totalViews,
        uniqueVisitors,
        avgDuration: "2:34",
        bounceRate: 32,
      });
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    }
  };

  const statCards = [
    {
      name: "Total Page Views",
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      change: "+12.5%",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Unique Visitors",
      value: stats.uniqueVisitors.toLocaleString(),
      icon: Users,
      change: "+8.2%",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Avg. Duration",
      value: stats.avgDuration,
      icon: Globe,
      change: "+5.1%",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Bounce Rate",
      value: `${stats.bounceRate}%`,
      icon: TrendingUp,
      change: "-2.4%",
      color: "from-accent-gold to-primary",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Analytics
        </h1>
        <p className="text-muted-foreground">
          Track your website performance and visitor statistics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-card border border-accent-gold/20 rounded-xl p-6 hover:shadow-lg transition-all"
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

      {/* Info */}
      <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-2">Analytics Info</h3>
        <p className="text-sm text-muted-foreground">
          Analytics data is collected automatically. View detailed statistics for the last 30 days.
          Track page views, unique visitors, and user behavior patterns.
        </p>
      </div>
    </div>
  );
}
