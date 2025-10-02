import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
      <div className="text-center px-4">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-accent-gold mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-accent-gold to-primary text-background px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-accent-gold/20 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
