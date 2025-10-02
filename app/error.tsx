"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
      <div className="text-center px-4">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center">
          <span className="text-4xl">⚠️</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Something went wrong!
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-gradient-to-r from-accent-gold to-primary text-background px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-accent-gold/20 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
