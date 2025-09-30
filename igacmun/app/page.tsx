import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/20 via-forest-900/10 to-forest-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(198,168,88,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(31,95,70,0.05),transparent_60%)]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 relative">
              <Image src="/assets/logo-2.png" alt="IGAC Logo" fill className="object-contain" />
            </div>
            <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl" />
          </div>
        </div>
        <h1 className="font-bold text-5xl md:text-6xl text-foreground mb-6">IGACMUN Session III</h1>
        <p className="text-xl md:text-2xl text-accent-gold mb-4">Game of Thorns: Green Dominion</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/session-3/register" className="inline-flex items-center justify-center gap-2 text-sm font-medium relative overflow-hidden group bg-gradient-to-r from-forest-700 to-forest-600 text-forest-50 border border-accent-gold/30 shadow-lg hover:shadow-accent-gold/40 hover:border-accent-gold/50 transition-all duration-300 h-10 rounded-md px-8">
            Register Now
          </a>
          <a href="/session-3" className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-accent-gold text-accent-gold bg-transparent shadow-sm hover:bg-accent-gold hover:text-forest-950 hover:shadow-lg hover:shadow-accent-gold/25 h-10 rounded-md px-8 transition-all">
            Explore Session III
          </a>
        </div>
      </div>
    </div>
  );
}
