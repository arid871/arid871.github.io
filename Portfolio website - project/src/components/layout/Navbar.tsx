import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['moments', 'about', 'milestones'];

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight text-neutral-900">
          Arid
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="text-[11px] tracking-[0.15em] uppercase text-neutral-900 border-b border-neutral-900 pb-px hover:opacity-60 transition-opacity"
          >
            Resume
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-900 w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white border-b border-neutral-100">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-xs tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenResume();
            }}
            className="block py-3 text-xs tracking-[0.15em] uppercase text-neutral-900 underline underline-offset-2"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
