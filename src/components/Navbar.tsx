import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'menu', label: 'Cuisine & Cocktails' },
    { id: 'events', label: 'Private Events' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Location & Hours' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-serif ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => onNavClick('home')}
              className="flex flex-col items-start cursor-pointer group"
            >
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-stone-900 group-hover:opacity-85 transition">
                ÌKÖKÖ
              </span>
              <span className="text-[10px] tracking-[0.35em] text-stone-500 font-sans uppercase">
                Restaurant & Bar
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 font-sans">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className={`relative px-4 py-2 text-sm tracking-widest uppercase transition-all hover:text-amber-600 duration-300 cursor-pointer ${
                    activeSection === link.id ? 'text-amber-600 font-semibold' : 'text-stone-600'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Booking CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => onNavClick('reserve')}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-sans tracking-widest font-bold uppercase rounded-sm flex items-center gap-2 transition duration-300 shadow-sm cursor-pointer group"
              >
              <span>Book a Table</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-300 hover:text-amber-300 focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden font-sans border-t border-zinc-800/40 bg-zinc-950/95 backdrop-blur-xl ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavClick(link.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm tracking-widest uppercase transition-colors rounded duration-200 cursor-pointer ${
                activeSection === link.id
                  ? 'text-amber-300 bg-amber-500/10 font-bold border-l-2 border-amber-400 pl-3'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavClick('reserve');
              setIsOpen(false);
            }}
            className="mt-4 w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-zinc-950 font-bold uppercase text-xs tracking-widest text-center flex items-center justify-center gap-2 rounded-sm transition duration-300 cursor-pointer shadow-lg shadow-amber-500/10"
          >
            <span>Book a Table</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
