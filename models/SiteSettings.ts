import mongoose from "mongoose";

const SiteSettingsSchema = new mongoose.Schema(
  {
    // Site Information
    siteName: {
      type: String,
      default: "IGACMUN Session III",
    },
    siteDescription: {
      type: String,
      default:
        "The biggest Model United Nations conference in South East Asia",
    },
    
    // Hero Section
    hero: {
      title: { type: String, default: "IGACMUN" },
      subtitle: { type: String, default: "Session III" },
      tagline: { type: String, default: "Game of Thorns: Green Dominion" },
      description: { type: String },
      ctaPrimaryText: { type: String, default: "Register Now" },
      ctaPrimaryLink: { type: String, default: "#register" },
      ctaSecondaryText: { type: String, default: "Learn More" },
      ctaSecondaryLink: { type: String, default: "#about" },
    },

    // Statistics
    stats: {
      delegates: { type: String, default: "500+" },
      committees: { type: String, default: "8" },
      countries: { type: String, default: "12+" },
      days: { type: String, default: "3" },
    },

    // Event Details
    event: {
      dates: { type: String, default: "March 14-16, 2025" },
      venue: { type: String, default: "Dhaka, Bangladesh" },
      venueDetails: { type: String, default: "Premium conference facilities in the heart of the city" },
    },

    // Contact Information
    contact: {
      email: { type: String, default: "igacmun@igac.org" },
      phone: { type: String, default: "+880 18153-53082" },
      address: { type: String, default: "Dhaka, Bangladesh" },
    },

    // Colors (Theme)
    colors: {
      background: { type: String, default: "#0a120d" },
      foreground: { type: String, default: "#dcf2e4" },
      primary: { type: String, default: "#1f5f46" },
      secondary: { type: String, default: "#2f6f55" },
      accentGold: { type: String, default: "#c6a858" },
    },

    // SEO
    seo: {
      metaTitle: { type: String },
      metaDescription: { type: String },
      keywords: [{ type: String }],
      ogImage: { type: String },
    },

    // Social Media
    social: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
    },

    // Footer
    footer: {
      copyrightText: { type: String, default: "© 2025 International Global Affairs Council. All rights reserved." },
      creditText: { type: String, default: "CRAFTED WITH PASSION BY OSAYEED JABER" },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SiteSettings ||
  mongoose.model("SiteSettings", SiteSettingsSchema);
