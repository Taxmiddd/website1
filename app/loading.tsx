export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-gold to-primary flex items-center justify-center animate-pulse">
          <span className="font-display text-3xl font-bold text-background">
            IG
          </span>
        </div>
        <p className="text-muted-foreground text-lg">Loading...</p>
      </div>
    </div>
  );
}
