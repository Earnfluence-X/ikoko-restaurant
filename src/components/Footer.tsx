import { MapPin, Phone, Clock, Accessibility, Star, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer id="contact" className="relative bg-white pt-24 pb-12 border-t border-stone-100 select-none font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-100 pb-16">
          {/* Logo & Vision */}
          <div className="flex flex-col md:col-span-1">
            <button
              onClick={() => onNavClick('home')}
              className="flex flex-col items-start cursor-pointer group mb-6"
            >
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider font-serif text-stone-950 group-hover:opacity-85 transition">
                ÌKÖKÖ
              </span>
              <span className="text-[10px] tracking-[0.35em] text-stone-500 font-sans uppercase">
                Restaurant & Bar
              </span>
            </button>
            <p className="text-stone-600 font-light tracking-wide text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              An award-winning sanctuary where authentic Nigerian recipes intertwine gracefully with luxury culinary art. Welcome to true hospitality.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col">
            <h4 className="text-xs tracking-[0.35em] font-sans font-bold text-amber-700 uppercase mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3.5">
              {['home', 'about', 'menu', 'events', 'reviews', 'reserve'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => onNavClick(section)}
                    className="text-xs tracking-widest text-stone-600 hover:text-amber-700 transition uppercase font-sans cursor-pointer text-left"
                  >
                    {section === 'home'
                      ? 'Home'
                      : section === 'about'
                      ? 'About Ìkökö'
                      : section === 'menu'
                      ? 'Culinary & Bar'
                      : section === 'events'
                      ? 'Private Events'
                      : section === 'reviews'
                      ? 'Testimonials'
                      : 'Make a Reservation'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Location */}
          <div className="flex flex-col">
            <h4 className="text-xs tracking-[0.35em] font-sans font-bold text-amber-700 uppercase mb-5">
              Restaurant Details
            </h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                <span className="text-xs font-sans tracking-wide text-stone-600 font-light leading-relaxed">
                  23b Isaac John St, Ikeja GRA, Ikeja 000000, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-xs font-sans tracking-widest text-stone-600 font-light">
                  0915 436 6666
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-xs font-sans tracking-wide text-stone-600 font-light">
                  Open Daily: 12:00 PM – 12:00 AM (Midnight)
                </span>
              </div>
            </div>
          </div>

          {/* Premium Experiences / Extras */}
          <div className="flex flex-col">
            <h4 className="text-xs tracking-[0.35em] font-sans font-bold text-amber-700 uppercase mb-5">
              Accessible Features
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-amber-600" />
                <span className="text-xs text-stone-600 tracking-wider">Wheelchair-Accessible Entrances</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-600" />
                <span className="text-xs text-stone-600 tracking-wider">Free Valet Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span className="text-xs text-stone-600 tracking-wider">Happy Hour Cocktails</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 select-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-sans">
            © 2026 ÌKÖKÖ Restaurant & Bar. Designed with class. All Rights Reserved.
          </span>
          <span className="text-[10px] tracking-[0.2em] font-sans text-stone-500">
            Payment accepted via Cards, Bank Transfer, & NFC Payments.
          </span>
        </div>
      </div>
    </footer>
  );
}
