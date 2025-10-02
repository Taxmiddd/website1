"use client";

import Image from "next/image";

export default function Leadership() {
  const executiveBoard = [
    {
      name: "President",
      role: "President",
      image: "/leadership/president.jpg",
      description: "Leading the conference with vision and excellence",
    },
    {
      name: "Chairman",
      role: "Chairman",
      image: "/leadership/chairman.jpg",
      description: "Guiding strategic direction and oversight",
    },
  ];

  const secretariat = [
    {
      name: "Abid Fahad Khan",
      role: "General Secretary",
      image: "/Joint secretaries/GENERAL SECRETARY _ ABID FAHAD KHAN.jpg",
      description: "Coordinating all conference operations",
    },
    {
      name: "Farhat Lamisha",
      role: "Joint Secretary",
      image: "/Joint secretaries/joint secretar Farhat lamisha.jpg",
      description: "Supporting secretariat functions",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-accent-gold">Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team behind IGACMUN Session III, committed to
            delivering an exceptional conference experience.
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Executive Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {executiveBoard.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-gradient-to-br from-card to-background border border-accent-gold/20 rounded-2xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-gold/20"
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-accent-gold/10 to-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-accent-gold to-primary flex items-center justify-center">
                      <span className="font-display text-4xl md:text-5xl font-bold text-background">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-accent-gold font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secretariat */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Secretariat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secretariat.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-gradient-to-br from-card to-background border border-accent-gold/20 rounded-2xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/10 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-accent-gold/10 to-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-gold/30 to-primary/30 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-accent-gold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-accent-gold font-semibold mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional Team Members Placeholder */}
            <div className="group relative bg-gradient-to-br from-card/50 to-background/50 border-2 border-dashed border-accent-gold/30 rounded-2xl overflow-hidden hover:border-accent-gold/50 transition-all duration-300 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-gold/20 to-primary/20 flex items-center justify-center">
                  <span className="text-3xl">👥</span>
                </div>
                <p className="font-display text-lg font-bold text-foreground mb-2">
                  More Team Members
                </p>
                <p className="text-muted-foreground text-sm">
                  And many more dedicated individuals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-card to-background border border-accent-gold/30 rounded-2xl p-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for passionate individuals to help make
              IGACMUN even better. Get in touch with us!
            </p>
            <button className="border-2 border-accent-gold text-accent-gold px-6 py-3 rounded-full font-bold hover:bg-accent-gold/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
