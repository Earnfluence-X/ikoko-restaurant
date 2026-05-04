import { useState } from 'react';
import { Eye, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { id: 1, src: '/images/hero.jpg', title: 'Immersive Restaurant Ambience', desc: 'Warm ambient glow' },
    { id: 2, src: '/images/jollof.jpg', title: 'Smoky Gourmet Jollof Rice', desc: 'Traditional elevated art' },
    { id: 3, src: '/images/pasta.jpg', title: 'Artisanal Shrimp Pasta', desc: 'Savoury cream & parmesan' },
    { id: 4, src: '/images/cocktail.jpg', title: 'The Ìkökö Classic Cocktail', desc: 'Artfully hand-shaken' },
  ];

  return (
    <div id="gallery" className="relative bg-stone-50 py-24 overflow-hidden font-sans border-t border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs tracking-[0.35em] font-bold text-amber-700 uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-amber-700" /> Visual Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-wide text-stone-950 mb-6 leading-tight">
            The Ambiance <span className="text-amber-700">& Culinary Art</span>
          </h2>
          <p className="text-stone-600 font-sans tracking-wide font-light text-sm sm:text-base leading-relaxed max-w-xl">
            A feast for the eyes and the palate. Each detail thoughtfully designed by Sara Jaafar to curate true aesthetic excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImg(img.src)}
              className="group relative cursor-pointer overflow-hidden rounded border border-stone-200 bg-white aspect-[4/5] sm:aspect-[3/4] flex justify-center items-center shadow-md select-none"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 select-none"
              />
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-widest text-amber-800 uppercase mb-1 flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5" /> View Experience
                </span>
                <h4 className="text-sm sm:text-base font-serif font-bold text-stone-950 tracking-wide mb-1 leading-tight">
                  {img.title}
                </h4>
                <p className="text-stone-600 font-light text-xs tracking-wide">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md p-4 sm:p-8 flex flex-col justify-center items-center">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-3 bg-white hover:bg-stone-100 text-stone-600 rounded-full border border-stone-200 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded border border-stone-200 shadow-2xl flex justify-center items-center select-none bg-white">
              <img
                src={selectedImg}
                alt="IKOKO Gallery Large"
                className="max-w-full max-h-[85vh] object-contain select-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}