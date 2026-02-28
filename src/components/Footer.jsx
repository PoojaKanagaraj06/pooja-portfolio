import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Terminal className="text-black w-5 h-5" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight">
              Pooja<span className="text-emerald-500">.dev</span>
            </span>
          </div>

          <p className="text-zinc-500 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" /> using React & Tailwind
          </p>

          <div className="text-zinc-500 text-sm font-mono">
            &copy; {currentYear} Pooja K. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
