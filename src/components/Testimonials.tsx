import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      author: 'Simisola A.',
      role: 'Private Proposal',
      quote: 'Ikoko is more than just a restaurant, it’s a memory-making haven. My boyfriend planned the most beautiful surprise proposal here. Every moment was curated with care andintentionality. The entire experience was nothing short of magical!',
    },
    {
      id: 2,
      author: 'Adeoluwa F.',
      role: 'Fine Dining Enthusiast',
      quote: 'My whole experience at Ikoko was 10/10 minus nothing! The food was great, and I especially loved the complimentary focaccia and the yummy dip. Mr Joseph, the waiter, was super helpful with premium wine recommendations.',
    },
    {
      id: 3,
      author: 'Chika N.',
      role: 'Dinner Outing',
      quote: 'Traditional feel with a touch of classy elegance. The service inside was great, and food was amazing. If you’re looking for a place that understands experience, culture, and class, Ikoko is it!',
    },
  ];

  return (
    <div id="reviews" className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden font-sans border-t border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs tracking-[0.35em] font-bold text-amber-700 uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-amber-700" /> True Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-wide text-stone-950 mb-6 leading-tight">
            Loved by Our <span className="text-amber-700">Precious Guests</span>
          </h2>
          <p className="text-stone-600 font-sans tracking-wide font-light text-sm sm:text-base leading-relaxed max-w-xl">
            Read first-hand experiences from guests who have joined us at ÌKÖKÖ for unforgettable meals and milestone celebrations.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between bg-white rounded border border-stone-100 p-6 sm:p-8 hover:border-stone-200 transition duration-300 relative group h-full select-none"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-200 group-hover:text-amber-300 transition-colors" />

              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-stone-700 font-sans tracking-wide font-light text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-stone-100 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-stone-200 border border-stone-300 flex items-center justify-center font-bold text-stone-700 tracking-wider text-sm select-none">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-stone-950 tracking-wide">
                    {review.author}
                  </h4>
                  <span className="text-[10px] tracking-widest text-stone-500 uppercase font-sans">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
