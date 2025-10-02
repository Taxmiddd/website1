"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function TeamManagement() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      toast.error("Failed to fetch team members");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) return;

    try {
      const res = await fetch(`/api/team/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Team member deleted successfully");
        fetchMembers();
      } else {
        toast.error("Failed to delete team member");
      }
    } catch (error) {
      toast.error("An error occurred");
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
            Team Members
          </h1>
          <p className="text-muted-foreground">
            Manage your leadership and secretariat team
          </p>
        </div>
        <Link
          href="/admin/team/new"
          className="flex items-center space-x-2 bg-gradient-to-r from-accent-gold to-primary text-background px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-gold/20 transition-all duration-300"
        >
          <Plus className="h-5 w-5" />
          <span>Add Member</span>
        </Link>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground mb-4">No team members yet</p>
            <Link
              href="/admin/team/new"
              className="inline-flex items-center space-x-2 text-accent-gold hover:text-primary transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add your first team member</span>
            </Link>
          </div>
        ) : (
          members.map((member: any) => (
            <div
              key={member._id}
              className="bg-card border border-accent-gold/20 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent-gold/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-accent-gold/10 to-primary/10 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent-gold">
                      {member.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent-gold mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3 capitalize">
                  {member.category}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/team/${member._id}`}
                    className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-background border border-accent-gold/20 rounded-lg hover:border-accent-gold/40 transition-colors"
                  >
                    <Edit className="h-4 w-4 text-accent-gold" />
                    <span className="text-sm text-foreground">Edit</span>
                  </Link>
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="flex items-center justify-center px-3 py-2 bg-destructive/10 border border-destructive/20 rounded-lg hover:bg-destructive/20 transition-colors"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
