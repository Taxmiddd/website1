"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Session Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-accent-gold/20 to-primary/20 border border-accent-gold/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <span className="text-accent-gold font-semibold text-sm">
              SESSION III • 2025
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            <span className="block mb-2">IGACMUN</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-primary to-secondary">
              Session III
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-display font-medium italic">
            Game of Thorns: Green Dominion
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            The biggest Model United Nations conference in South East Asia
            returns with unprecedented scale and diplomatic excellence. Join us
            for an unforgettable experience of debate, diplomacy, and global
            leadership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-accent-gold to-primary text-background px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent-gold/30 transition-all duration-300 hover:scale-105">
              Register Now
            </button>
            <button className="border-2 border-accent-gold text-accent-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-gold/10 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { label: "Delegates", value: "500+" },
              { label: "Committees", value: "8" },
              { label: "Countries", value: "12+" },
              { label: "Days", value: "3" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-gradient-to-br from-card/50 to-background/50 border border-accent-gold/20 rounded-xl backdrop-blur-sm hover:border-accent-gold/40 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
