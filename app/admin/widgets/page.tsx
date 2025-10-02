"use client";

import { useState } from "react";
import { Plus, Settings, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function WidgetsManager() {
  const [widgets] = useState([
    {
      id: "1",
      name: "Contact Form",
      type: "contact-form",
      description: "Let visitors contact you",
      icon: "✉️",
    },
    {
      id: "2",
      name: "Newsletter Signup",
      type: "newsletter",
      description: "Collect email subscribers",
      icon: "📧",
    },
    {
      id: "3",
      name: "Social Media Links",
      type: "social-media",
      description: "Display social media buttons",
      icon: "📱",
    },
    {
      id: "4",
      name: "Recent Posts",
      type: "recent-posts",
      description: "Show latest blog posts",
      icon: "📝",
    },
    {
      id: "5",
      name: "Gallery",
      type: "gallery",
      description: "Image gallery slider",
      icon: "🖼️",
    },
    {
      id: "6",
      name: "Testimonials",
      type: "testimonials",
      description: "Customer reviews carousel",
      icon: "💬",
    },
    {
      id: "7",
      name: "Countdown Timer",
      type: "countdown",
      description: "Event countdown",
      icon: "⏱️",
    },
    {
      id: "8",
      name: "Statistics",
      type: "stats",
      description: "Display numbers and metrics",
      icon: "📊",
    },
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Widgets
        </h1>
        <p className="text-muted-foreground">
          Add powerful features to your website with drag-and-drop widgets
        </p>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {widgets.map((widget) => (
          <div
            key={widget.id}
            className="bg-card border border-accent-gold/20 rounded-xl p-6 hover:shadow-lg hover:border-accent-gold/40 transition-all cursor-pointer group"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{widget.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">
                {widget.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {widget.description}
              </p>
              <button
                onClick={() => toast.info(`${widget.name} will be added to page builder`)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm">Add Widget</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-2">
          How Widgets Work
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Click on any widget to see configuration options</li>
          <li>• Drag widgets to your page builder to add them</li>
          <li>• Customize settings without any coding</li>
          <li>• Each widget comes with visual controls</li>
          <li>• Changes are saved automatically</li>
        </ul>
      </div>
    </div>
  );
}
