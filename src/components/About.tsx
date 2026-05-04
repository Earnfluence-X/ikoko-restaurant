import { Coffee, Award, Flame, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden font-sans border-t border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Presentation: High-end display of food & restaurant */}
          <div className="relative group flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-lg lg:max-w-none overflow-hidden rounded-sm border border-stone-200 shadow-xl bg-stone-200">
              <img
                src="/images/jollof.jpg"
                alt="IKOKO Gourmet Cuisine"
                className="w-full h-full object-cover filter brightness-90 transition duration-700 select-none"
              />
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded border border-amber-200 flex items-center gap-3">
                <Flame className="w-5 h-5 text-amber-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest text-stone-500 uppercase font-sans">Crafted with Heart</span>
                  <span className="text-sm tracking-wide text-stone-900 font-serif font-bold">100% Signature Fine Dining</span>
                </div>
              </div>
            </div>
          </div>

          {/* High-end Copy Section */}
          <div className="flex flex-col justify-center">
            <span className="text-xs tracking-[0.35em] font-bold text-amber-700 uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-700" /> Our Culinary Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-wide text-stone-950 mb-6 leading-tight">
              An Intimate & Premium <span className="text-amber-700">Memory-Making Haven</span>
            </h2>
            <p className="text-stone-700 tracking-wide font-light text-base leading-relaxed mb-8 max-w-xl">
              At ÌKÖKÖ, dining goes beyond the ordinary. We believe every visit is a chapter in your memory book. From romantic birthday surprises to life-changing proposal events, our space is curated to provide sophisticated warmth, bespoke attention to detail, and a relaxed luxury vibe.
            </p>
            
            <p className="text-stone-600 tracking-wide font-light text-sm leading-relaxed mb-10 max-w-xl">
              Our culinary narrative is an elegant celebration of traditional Nigerian ingredients intertwined with global concepts and techniques. Upon arrival, enjoy our famous <span className="text-amber-700">complimentary artisanal focaccia</span> and chef-curated signature dip. Experience deep smoky traditional jollof rice reimagined, alongside exquisite pastas, expertly crafted wines, and specialty happy-hour cocktails.
            </p>

            {/* Highlights Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-md border border-amber-200 text-amber-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wide font-semibold text-stone-900 mb-1">Classy & Intimate Vibe</h4>
                  <p className="text-xs text-stone-600 tracking-wide font-light leading-normal">
                    Warm amber lighting, soft ambient tunes, curated to provide premium soft life experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-amber-100 rounded-md border border-amber-200 text-amber-700">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wide font-semibold text-stone-900 mb-1">Modern Nigerian Flair</h4>
                  <p className="text-xs text-stone-600 tracking-wide font-light leading-normal">
                    International & Italian recipes flawlessly reimagined using rich Nigerian flavors and spices.
                  </p>
                </div>
              </div>
            </div>

            {/* Add service & accessibility tags */}
            <div className="border-t border-stone-200 pt-6 mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-xs tracking-wider text-stone-600">Free Valet Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-xs tracking-wider text-stone-600">Wheelchair Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
