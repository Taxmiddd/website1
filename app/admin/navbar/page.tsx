"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, GripVertical, ExternalLink, Save } from "lucide-react";
import { toast } from "sonner";

export default function NavbarEditor() {
  const [navigation, setNavigation] = useState<any>({
    items: [],
    settings: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNavigation();
  }, []);

  const fetchNavigation = async () => {
    try {
      const res = await fetch("/api/navigation");
      const data = await res.json();
      setNavigation(data || { items: [], settings: {} });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addMenuItem = () => {
    setNavigation({
      ...navigation,
      items: [
        ...navigation.items,
        {
          id: Date.now().toString(),
          label: "New Link",
          url: "/",
          order: navigation.items.length,
        },
      ],
    });
  };

  const updateMenuItem = (id: string, field: string, value: any) => {
    setNavigation({
      ...navigation,
      items: navigation.items.map((item: any) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const deleteMenuItem = (id: string) => {
    setNavigation({
      ...navigation,
      items: navigation.items.filter((item: any) => item.id !== id),
    });
  };

  const handleSave = async () => {
    try {
      await fetch("/api/navigation", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(navigation),
      });
      toast.success("Navigation saved successfully!");
    } catch (error) {
      toast.error("Failed to save navigation");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Navbar Editor
          </h1>
          <p className="text-muted-foreground">
            Manage your navigation menu links and settings
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          <Save className="h-5 w-5" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Menu Items</h2>
            <button
              onClick={addMenuItem}
              className="flex items-center space-x-2 px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-lg hover:bg-accent-gold/30 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Link</span>
            </button>
          </div>

          <div className="space-y-3">
            {navigation.items.map((item: any) => (
              <div
                key={item.id}
                className="bg-card border border-accent-gold/20 rounded-xl p-4"
              >
                <div className="grid grid-cols-12 gap-3 items-start">
                  <div className="col-span-12 md:col-span-5">
                    <label className="block text-xs text-muted-foreground mb-1">
                      Label
                    </label>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        updateMenuItem(item.id, "label", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground text-sm"
                      placeholder="Home"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-5">
                    <label className="block text-xs text-muted-foreground mb-1">
                      URL
                    </label>
                    <input
                      type="text"
                      value={item.url}
                      onChange={(e) =>
                        updateMenuItem(item.id, "url", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground text-sm"
                      placeholder="/"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-2 flex items-end space-x-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.openInNewTab}
                        onChange={(e) =>
                          updateMenuItem(item.id, "openInNewTab", e.target.checked)
                        }
                        className="rounded border-border text-accent-gold focus:ring-accent-gold"
                      />
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </label>
                    <button
                      onClick={() => deleteMenuItem(item.id)}
                      className="p-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {navigation.items.length === 0 && (
              <div className="text-center py-12 bg-card border border-accent-gold/20 rounded-xl">
                <p className="text-muted-foreground mb-4">No menu items yet</p>
                <button
                  onClick={addMenuItem}
                  className="text-accent-gold hover:text-primary transition-colors"
                >
                  Add your first link
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Settings</h2>

          <div className="bg-card border border-accent-gold/20 rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Sticky Navbar
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={navigation.settings?.sticky}
                  onChange={(e) =>
                    setNavigation({
                      ...navigation,
                      settings: {
                        ...navigation.settings,
                        sticky: e.target.checked,
                      },
                    })
                  }
                  className="rounded border-border text-accent-gold focus:ring-accent-gold"
                />
                <span className="text-sm text-muted-foreground">
                  Keep navbar visible on scroll
                </span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Show Logo
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={navigation.settings?.showLogo}
                  onChange={(e) =>
                    setNavigation({
                      ...navigation,
                      settings: {
                        ...navigation.settings,
                        showLogo: e.target.checked,
                      },
                    })
                  }
                  className="rounded border-border text-accent-gold focus:ring-accent-gold"
                />
                <span className="text-sm text-muted-foreground">
                  Display logo in navbar
                </span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Background Color
              </label>
              <input
                type="color"
                value={navigation.settings?.backgroundColor || "#0f1b14"}
                onChange={(e) =>
                  setNavigation({
                    ...navigation,
                    settings: {
                      ...navigation.settings,
                      backgroundColor: e.target.value,
                    },
                  })
                }
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Text Color
              </label>
              <input
                type="color"
                value={navigation.settings?.textColor || "#dcf2e4"}
                onChange={(e) =>
                  setNavigation({
                    ...navigation,
                    settings: {
                      ...navigation.settings,
                      textColor: e.target.value,
                    },
                  })
                }
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
