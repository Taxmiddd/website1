"use client";

import { Calendar, MapPin, Users2, Briefcase } from "lucide-react";

export default function Features() {
  const details = [
    {
      icon: Calendar,
      title: "Event Dates",
      subtitle: "March 14-16, 2025",
      description: "Three days of intensive debate and diplomatic engagement",
    },
    {
      icon: MapPin,
      title: "Venue",
      subtitle: "Dhaka, Bangladesh",
      description: "Premium conference facilities in the heart of the city",
    },
    {
      icon: Users2,
      title: "Delegates",
      subtitle: "500+ Participants",
      description: "Join delegates from across South East Asia and beyond",
    },
    {
      icon: Briefcase,
      title: "Committees",
      subtitle: "8 Unique Councils",
      description: "From UNSC to specialized environmental committees",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Event <span className="text-accent-gold">Highlights</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about IGACMUN Session III
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className="group relative bg-gradient-to-br from-card to-background border border-accent-gold/20 rounded-xl p-6 hover:border-accent-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/10 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl group-hover:bg-accent-gold/10 transition-all duration-300"></div>
                
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-gold/20 to-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-accent-gold" />
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {detail.title}
                  </h3>
                  
                  <p className="text-accent-gold font-semibold mb-3">
                    {detail.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-card to-background border border-accent-gold/30 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make Your Mark?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of the biggest MUN
              conference in South East Asia. Register now and secure your spot!
            </p>
            <button className="bg-gradient-to-r from-accent-gold to-primary text-background px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent-gold/30 transition-all duration-300 hover:scale-105">
              Register for IGACMUN Session III
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
