"use client";

import { useState, useEffect } from "react";
import { Save, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function ThemeEditor() {
  const [theme, setTheme] = useState({
    colors: {
      background: "#0a120d",
      foreground: "#dcf2e4",
      primary: "#1f5f46",
      secondary: "#2f6f55",
      accentGold: "#c6a858",
      muted: "#0e1a12",
      card: "#0f1b14",
    },
    fonts: {
      heading: "Cinzel",
      body: "Inter",
      display: "Manrope",
    },
    spacing: {
      containerWidth: "1280px",
      sectionPadding: "80px",
      elementSpacing: "24px",
    },
    borderRadius: {
      small: "8px",
      medium: "12px",
      large: "24px",
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTheme();
  }, []);

  const fetchTheme = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data.colors) {
        setTheme((prev) => ({ ...prev, colors: data.colors }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ colors: theme.colors }),
      });
      toast.success("Theme saved successfully!");
    } catch (error) {
      toast.error("Failed to save theme");
    }
  };

  const resetToDefault = () => {
    setTheme({
      colors: {
        background: "#0a120d",
        foreground: "#dcf2e4",
        primary: "#1f5f46",
        secondary: "#2f6f55",
        accentGold: "#c6a858",
        muted: "#0e1a12",
        card: "#0f1b14",
      },
      fonts: {
        heading: "Cinzel",
        body: "Inter",
        display: "Manrope",
      },
      spacing: {
        containerWidth: "1280px",
        sectionPadding: "80px",
        elementSpacing: "24px",
      },
      borderRadius: {
        small: "8px",
        medium: "12px",
        large: "24px",
      },
    });
    toast.success("Reset to default theme");
  };

  const fonts = [
    "Inter",
    "Manrope",
    "Cinzel",
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Playfair Display",
    "Poppins",
    "Raleway",
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Theme Editor
          </h1>
          <p className="text-muted-foreground">
            Customize colors, fonts, and visual style
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={resetToDefault}
            className="flex items-center space-x-2 px-4 py-2 bg-background border border-accent-gold/20 rounded-lg hover:border-accent-gold/40 transition-colors"
          >
            <RefreshCw className="h-4 w-4 text-foreground" />
            <span className="text-foreground">Reset</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <Save className="h-5 w-5" />
            <span>Save Theme</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colors */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Colors</h2>

          <div className="bg-card border border-accent-gold/20 rounded-xl p-6 space-y-4">
            {Object.entries(theme.colors).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-foreground mb-2 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) =>
                      setTheme({
                        ...theme,
                        colors: { ...theme.colors, [key]: e.target.value },
                      })
                    }
                    className="w-16 h-10 rounded-lg cursor-pointer border border-border"
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setTheme({
                        ...theme,
                        colors: { ...theme.colors, [key]: e.target.value },
                      })
                    }
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Typography</h2>

          <div className="bg-card border border-accent-gold/20 rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Heading Font
              </label>
              <select
                value={theme.fonts.heading}
                onChange={(e) =>
                  setTheme({
                    ...theme,
                    fonts: { ...theme.fonts, heading: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              >
                {fonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
              <p
                className="mt-2 text-2xl"
                style={{ fontFamily: theme.fonts.heading }}
              >
                The quick brown fox jumps
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Body Font
              </label>
              <select
                value={theme.fonts.body}
                onChange={(e) =>
                  setTheme({
                    ...theme,
                    fonts: { ...theme.fonts, body: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              >
                {fonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
              <p className="mt-2" style={{ fontFamily: theme.fonts.body }}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>

          {/* Border Radius */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-foreground">Border Radius</h3>
            {Object.entries(theme.borderRadius).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-foreground mb-2 capitalize">
                  {key}
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={parseInt(value)}
                    onChange={(e) =>
                      setTheme({
                        ...theme,
                        borderRadius: {
                          ...theme.borderRadius,
                          [key]: `${e.target.value}px`,
                        },
                      })
                    }
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground w-12">
                    {value}
                  </span>
                  <div
                    className="w-12 h-12 bg-accent-gold"
                    style={{ borderRadius: value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Preview
          </h2>
          <div
            className="border rounded-xl p-8"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.accentGold + "33",
            }}
          >
            <h1
              className="text-4xl font-bold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.foreground,
              }}
            >
              Sample Heading
            </h1>
            <p
              className="text-lg mb-6"
              style={{
                fontFamily: theme.fonts.body,
                color: theme.colors.foreground,
              }}
            >
              This is a preview of your theme. See how your content will look
              with the selected colors and fonts.
            </p>
            <button
              className="px-6 py-3 font-semibold"
              style={{
                backgroundColor: theme.colors.accentGold,
                color: theme.colors.background,
                borderRadius: theme.borderRadius.medium,
              }}
            >
              Sample Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
