"use client";

import { Globe, Users, Award, Target } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Globe,
      title: "Global Platform",
      description:
        "Connect with delegates from across South East Asia and beyond, fostering international dialogue and cooperation.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Learn from experienced diplomats, academics, and MUN veterans who will guide you through every step.",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Earn certificates and awards that recognize your diplomatic skills and leadership potential.",
    },
    {
      icon: Target,
      title: "Real Impact",
      description:
        "Debate real-world issues and develop solutions that matter in today's global landscape.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About <span className="text-accent-gold">IGACMUN</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            IGACMUN Session III brings together young leaders, diplomats, and
            change-makers to engage in meaningful dialogue about the world's
            most pressing issues.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 bg-gradient-to-br from-card to-background border border-accent-gold/20 rounded-xl hover:border-accent-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/10 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-gold/20 to-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-accent-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-card/50 to-background/50 border border-accent-gold/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  IGACMUN has established itself as the premier Model United
                  Nations conference in South East Asia, bringing together the
                  brightest young minds to engage in diplomatic discourse and
                  problem-solving.
                </p>
                <p className="leading-relaxed">
                  Session III continues this tradition with the theme "Game of
                  Thorns: Green Dominion," focusing on environmental diplomacy,
                  sustainable development, and the complex interplay between
                  nations in addressing climate change.
                </p>
                <p className="leading-relaxed">
                  Our conference offers a unique opportunity to develop critical
                  skills in public speaking, negotiation, research, and
                  leadership while making lasting connections with peers from
                  around the region.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-accent-gold/20 to-primary/20 rounded-xl flex items-center justify-center border border-accent-gold/30">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent-gold to-primary rounded-full flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-background">
                      IG
                    </span>
                  </div>
                  <p className="font-display text-2xl font-bold text-accent-gold">
                    IGACMUN
                  </p>
                  <p className="text-muted-foreground">Session III • 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
