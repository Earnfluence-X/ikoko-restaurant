import { ArrowRight, Sparkles, MoveRight } from 'lucide-react';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden select-none bg-stone-50 font-sans">
      {/* Immersive background image with gradients */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/images/hero.jpg"
          alt="IKOKO Premium Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.5] contrast-[1.05] transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Soft luxury tag */}
        <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-amber-200/50 mb-8">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span className="text-xs tracking-[0.3em] font-medium text-amber-800 uppercase">
            Elevated Nigerian Cuisine & Classy Ambience
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-wide text-stone-950 leading-[1.1] mb-6 max-w-4xl">
          Where <span className="text-amber-700">Fine Dining</span> Meets Lagos Vibes
        </h1>

        <p className="text-sm sm:text-base md:text-xl font-light text-stone-700 leading-relaxed font-sans mb-10 max-w-2xl tracking-wide">
          Step into a curated sanctuary where Nigerian flavors are masterfully elevated with international flair, wrapped in classy elegance, soft acoustics, and impeccable service.
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <button
            onClick={() => onNavClick('reserve')}
            className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-3 rounded-sm transition duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Book a Table</span>
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://glovoapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-3 rounded-sm transition duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Order via Glovo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
