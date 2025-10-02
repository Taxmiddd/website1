"use client";

import { Clock } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      action: "Updated Hero Section",
      time: "2 hours ago",
      user: "Admin",
    },
    {
      action: "Added new team member",
      time: "5 hours ago",
      user: "Admin",
    },
    {
      action: "Changed site colors",
      time: "1 day ago",
      user: "Admin",
    },
    {
      action: "Uploaded new images",
      time: "2 days ago",
      user: "Admin",
    },
  ];

  return (
    <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-background rounded-lg border border-accent-gold/10 hover:border-accent-gold/20 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">
                  by {activity.user}
                </p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
