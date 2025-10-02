"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";

export default function PostsManager() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data || []);
    } catch (error) {
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Blog Posts
          </h1>
          <p className="text-muted-foreground">
            Manage your blog content and news articles
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center space-x-2 bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          <Plus className="h-5 w-5" />
          <span>New Post</span>
        </Link>
      </div>

      {/* Posts List */}
      <div className="bg-card border border-accent-gold/20 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background border-b border-accent-gold/20">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Views
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent-gold/10">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <p className="text-muted-foreground mb-4">No posts yet</p>
                    <Link
                      href="/admin/posts/new"
                      className="text-accent-gold hover:text-primary transition-colors"
                    >
                      Create your first post
                    </Link>
                  </td>
                </tr>
              ) : (
                posts.map((post: any) => (
                  <tr key={post._id} className="hover:bg-background/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {post.featuredImage && (
                          <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium text-foreground">
                            {post.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            /{post.slug}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {post.category}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          post.status === "published"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {post.views || 0}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/admin/posts/${post._id}`}
                          className="p-2 hover:bg-background rounded-lg transition-colors"
                        >
                          <Edit className="h-4 w-4 text-accent-gold" />
                        </Link>
                        <a
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-2 hover:bg-background rounded-lg transition-colors"
                        >
                          <Eye className="h-4 w-4 text-foreground" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
