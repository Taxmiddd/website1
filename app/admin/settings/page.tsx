"use client";

import { useState, useEffect } from "react";
import { Save, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<any>({});

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setSettings(data);
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        toast.success("Settings saved successfully!");
      } else {
        toast.error("Failed to save settings");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-accent-gold" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Site Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your website's general settings
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center space-x-2 bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-gold/20 transition-all duration-300 disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Save className="h-5 w-5" />
          )}
          <span>{saving ? "Saving..." : "Save Changes"}</span>
        </button>
      </div>

      {/* Settings Form */}
      <div className="space-y-6">
        {/* Site Information */}
        <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Site Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName || ""}
                onChange={(e) =>
                  setSettings({ ...settings, siteName: e.target.value })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Site Description
              </label>
              <input
                type="text"
                value={settings.siteDescription || ""}
                onChange={(e) =>
                  setSettings({ ...settings, siteDescription: e.target.value })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Event Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Event Dates
              </label>
              <input
                type="text"
                value={settings.event?.dates || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    event: { ...settings.event, dates: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Venue
              </label>
              <input
                type="text"
                value={settings.event?.venue || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    event: { ...settings.event, venue: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Venue Details
              </label>
              <input
                type="text"
                value={settings.event?.venueDetails || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    event: { ...settings.event, venueDetails: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={settings.contact?.email || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, email: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone
              </label>
              <input
                type="text"
                value={settings.contact?.phone || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, phone: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Address
              </label>
              <input
                type="text"
                value={settings.contact?.address || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, address: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-card border border-accent-gold/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Delegates
              </label>
              <input
                type="text"
                value={settings.stats?.delegates || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    stats: { ...settings.stats, delegates: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Committees
              </label>
              <input
                type="text"
                value={settings.stats?.committees || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    stats: { ...settings.stats, committees: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Countries
              </label>
              <input
                type="text"
                value={settings.stats?.countries || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    stats: { ...settings.stats, countries: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Days
              </label>
              <input
                type="text"
                value={settings.stats?.days || ""}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    stats: { ...settings.stats, days: e.target.value },
                  })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
