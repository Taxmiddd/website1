import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-forest-950 border-t border-accent-gold/20">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-6 flex items-center space-x-3">
                <div className="relative rounded-full overflow-hidden bg-accent-gold/10 p-1 w-10 h-10">
                  <Image
                    alt="IGACMUN Logo"
                    src="/assets/Untitled-design-19.png"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent-gold mb-1">IGACMUN</h3>
                  <p className="text-sm text-muted-foreground">Session III</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                International Global Affairs Council
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-6">
                Empowering youth through diplomatic education and fostering global understanding through Model United Nations excellence.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link className="text-muted-foreground hover:text-accent-gold" href="/about">About IGAC</Link></li>
                <li><Link className="text-muted-foreground hover:text-accent-gold" href="/session-3">Session III</Link></li>
                <li><Link className="text-muted-foreground hover:text-accent-gold" href="/session-3/committees">Committees</Link></li>
                <li><Link className="text-muted-foreground hover:text-accent-gold" href="/session-3/register">Registration</Link></li>
                <li><Link className="text-muted-foreground hover:text-accent-gold" href="/session-3/venue">Venue</Link></li>
                <li><Link className="text-muted-foreground hover:text-accent-gold" href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:intlglobalaffairscouncil@gmail.com" className="hover:text-accent-gold">intlglobalaffairscouncil@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+8801815353082" className="hover:text-accent-gold">+880 18153-53082</a>
                </li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">Get the latest updates about IGACMUN Session III and upcoming events.</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/igac.official_" target="_blank" rel="noopener noreferrer" className="p-2 bg-forest-800/50 rounded-full border border-accent-gold/20 text-muted-foreground hover:text-pink-400 hover:border-accent-gold/40 hover:bg-forest-700/50 transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095775481124" target="_blank" rel="noopener noreferrer" className="p-2 bg-forest-800/50 rounded-full border border-accent-gold/20 text-muted-foreground hover:text-blue-400 hover:border-accent-gold/40 hover:bg-forest-700/50 transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-accent-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">© 2025 International Global Affairs Council. All rights reserved.</p>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-flex items-center bg-gradient-to-r from-accent-gold/30 via-accent-gold/20 to-accent-gold/30 border border-accent-gold/50 rounded-full px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-accent-gold font-semibold">CRAFTED WITH PASSION BY</span>
                    <span className="text-sm font-bold text-accent-gold">OSAYEED JABER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

