"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function PagesManager() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await fetch("/api/pages");
      const data = await res.json();
      setPages(data);
    } catch (error) {
      toast.error("Failed to fetch pages");
    } finally {
      setLoading(false);
    }
  };

  const togglePublish = async (id: string, isPublished: boolean) => {
    try {
      await fetch(`/api/pages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !isPublished }),
      });
      toast.success(isPublished ? "Page unpublished" : "Page published");
      fetchPages();
    } catch (error) {
      toast.error("Failed to update page");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Pages
          </h1>
          <p className="text-muted-foreground">
            Create and manage your website pages with visual builder
          </p>
        </div>
        <Link
          href="/admin/pages/builder?new=true"
          className="flex items-center space-x-2 bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          <Plus className="h-5 w-5" />
          <span>New Page</span>
        </Link>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page: any) => (
          <div
            key={page._id}
            className="bg-card border border-accent-gold/20 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {page.title}
                </h3>
                <p className="text-xs text-muted-foreground">/{page.slug}</p>
              </div>
              <button
                onClick={() => togglePublish(page._id, page.isPublished)}
                className={`p-2 rounded-lg ${
                  page.isPublished
                    ? "bg-green-500/10 text-green-500"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {page.isPublished ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            {page.description && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {page.description}
              </p>
            )}

            <div className="flex items-center gap-2">
              <Link
                href={`/admin/pages/builder?id=${page._id}`}
                className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-background border border-accent-gold/20 rounded-lg hover:border-accent-gold/40 transition-colors"
              >
                <Edit className="h-4 w-4 text-accent-gold" />
                <span className="text-sm text-foreground">Edit</span>
              </Link>
              <a
                href={`/${page.slug}`}
                target="_blank"
                className="px-3 py-2 bg-background border border-accent-gold/20 rounded-lg hover:border-accent-gold/40 transition-colors"
              >
                <Eye className="h-4 w-4 text-foreground" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
