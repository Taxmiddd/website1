"use client";

import { signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import { Session } from "next-auth";

export default function AdminHeader({ session }: { session: Session }) {
  return (
    <div className="h-16 bg-card border-b border-accent-gold/20 flex items-center justify-between px-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Welcome back, {session.user.username}!
        </h2>
        <p className="text-sm text-muted-foreground">
          Manage your IGACMUN website
        </p>
      </div>

      <div className="flex items-center space-x-4">
        {/* User Info */}
        <div className="flex items-center space-x-3 px-4 py-2 bg-background rounded-lg border border-accent-gold/20">
          <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
            <User className="h-4 w-4 text-accent-gold" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {session.user.username}
            </p>
            <p className="text-xs text-muted-foreground capitalize">
              {session.user.role}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center space-x-2 px-4 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
