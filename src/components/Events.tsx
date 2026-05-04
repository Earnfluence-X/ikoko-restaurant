import { Calendar, Sparkles, Star, ChevronRight } from 'lucide-react';

interface EventsProps {
  onNavClick: (sectionId: string) => void;
}

export default function Events({ onNavClick }: EventsProps) {
  const customEvents = [
    {
      id: 'proposal',
      title: 'Luxury Proposals',
      description: 'Create unforgettable moments in an elegant ambiance. Our team arranges premium tables, floral settings, and perfect romance for your surprise.',
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      tag: 'Romance at its best',
    },
    {
      id: 'birthday',
      title: 'Bespoke Birthdays',
      description: 'Host private birthdays with personalized cocktails, customized menus, and a staff-led birthday serenade that elevates every moment.',
      icon: <Star className="w-5 h-5 text-amber-600" />,
      tag: 'Exquisite Birthdays',
    },
    {
      id: 'dining',
      title: 'Private Dining Rooms',
      description: 'Enjoy high-end solo dining or cozy gatherings in our exclusive luxury private rooms with curated table services.',
      icon: <Calendar className="w-5 h-5 text-amber-600" />,
      tag: 'Private Spaces',
    },
  ];

  return (
    <div id="events" className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden font-sans border-t border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <span className="text-xs tracking-[0.35em] font-bold text-amber-700 uppercase mb-4 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-amber-700" /> Bespoke Magic
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-wide text-stone-950 mb-6 leading-tight text-center max-w-4xl">
          Host Your Next <span className="text-amber-700">Precious Moment</span> with Us
        </h2>
        <p className="text-stone-600 font-light text-base leading-relaxed tracking-wide text-center max-w-2xl mb-16">
          Whether you’re crafting the perfect marriage proposal or marking another birthday milestone, the team at ÌKÖKÖ is ready to orchestrate a seamless experience.
        </p>

        {/* Private Event Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
          {customEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between bg-white border border-stone-100 rounded p-6 sm:p-8 hover:border-stone-200 hover:shadow-xl transition duration-500 hover:-translate-y-1 h-full select-none"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-shrink-0 p-3 bg-amber-100 rounded-md border border-amber-200">
                    {event.icon}
                  </div>
                  <span className="text-[10px] tracking-widest font-sans font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-sm uppercase border border-amber-200">
                    {event.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-stone-950 transition duration-300 mb-3">
                  {event.title}
                </h3>
                <p className="text-stone-600 font-light text-xs sm:text-sm tracking-wide leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-4 w-full mt-auto">
                <button
                  onClick={() => onNavClick('reserve')}
                  className="w-full py-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 text-stone-800 font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-sm transition cursor-pointer"
                >
                  <span>Request Booking</span>
                  <ChevronRight className="w-4 h-4 text-amber-600 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
