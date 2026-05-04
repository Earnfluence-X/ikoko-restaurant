import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '18:30',
    guests: '2',
    eventType: 'dinein',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    const message = `Hello ÌKÖKÖ, I would like to make a reservation:
    Name: ${formData.name}
    Date: ${formData.date}
    Time: ${formData.time}
    Guests: ${formData.guests}
    Type: ${formData.eventType}
    Notes: ${formData.notes}`;

    const whatsappUrl = `https://wa.me/2349154366666?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="reserve" className="relative bg-stone-950 py-24 sm:py-32 overflow-hidden font-sans border-t border-stone-900 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-xs tracking-[0.35em] font-bold text-amber-500 uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-amber-500" /> Confirm Attendance
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-wide text-white mb-6 leading-tight">
            Reserve Your <span className="text-amber-500">Exclusive Table</span>
          </h2>
          <p className="text-stone-400 font-sans font-light tracking-wide text-sm leading-relaxed max-w-xl">
            Secure your spot in our dining room, premium lounge, or private suites. For customized birthday or proposal planning, leave us a note below.
          </p>
        </div>

        <div className="bg-stone-900 rounded p-6 sm:p-10 shadow-2xl border border-stone-800">
          <form onSubmit={handleWhatsApp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Sandra Bakare"
                className="bg-stone-950 border border-stone-800 rounded px-4 py-3.5 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. yourname@domain.com"
                className="bg-stone-950 border border-stone-800 rounded px-4 py-3.5 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Phone Number <span className="text-amber-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="e.g. 0915 436 6666"
                className="bg-stone-950 border border-stone-800 rounded px-4 py-3.5 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            {/* Reservation Date */}
            <div className="flex flex-col">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Preferred Date <span className="text-amber-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3.5 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Time Slot <span className="text-amber-500">*</span>
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-stone-950 border border-stone-800 rounded px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500 transition"
              >
                <option value="12:00">12:00 PM (Lunch)</option>
                <option value="13:30">1:30 PM (Lunch)</option>
                <option value="15:00">3:00 PM (Quick Bite)</option>
                <option value="17:00">5:00 PM (Happy Hour)</option>
                <option value="18:30">6:30 PM (Dinner)</option>
                <option value="20:00">8:00 PM (Romantic Dinner)</option>
                <option value="21:30">9:30 PM (Late Dinner)</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div className="flex flex-col">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Number of Guests <span className="text-amber-500">*</span>
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="bg-stone-950 border border-stone-800 rounded px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500 transition"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons (Date / Romantic)</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
                <option value="6">6 Persons (Group)</option>
                <option value="8">8-10 Persons (Special Event)</option>
                <option value="private">Private Room (10+ Guests)</option>
              </select>
            </div>

            {/* Experience / Event Type */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Inquiry Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'dinein', label: 'Classic Dine-In' },
                  { id: 'proposal', label: 'Surprise Proposal' },
                  { id: 'birthday', label: 'Birthday Celebration' },
                  { id: 'privateroom', label: 'Private Room' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, eventType: cat.id })}
                    className={`px-3 py-3 border text-center font-sans tracking-wide text-xs rounded transition uppercase font-semibold cursor-pointer ${
                      formData.eventType === cat.id
                        ? 'bg-amber-900/50 border-amber-500 text-amber-200'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Occasion Notes */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-[10px] tracking-widest uppercase font-bold font-sans text-stone-500 mb-2">
                Special Notes & Dietary Requirements
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Mention if this is a proposal, birthday, or any special culinary notes here."
                className="bg-stone-950 border border-stone-800 rounded px-4 py-3 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-sans tracking-widest font-extrabold uppercase rounded-sm text-xs transition duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Table Inquiry on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
