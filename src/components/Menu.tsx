import { useState } from 'react';
import { Sparkles, Flame, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: string;
  category: 'starters' | 'mains' | 'pastas' | 'drinks' | 'desserts';
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isComplimentary?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    category: 'starters',
    name: 'Artisanal Focaccia & Dip',
    description: 'Freshly baked warm sourdough focaccia served with chef’s roasted pepper and caramelized garlic oil.',
    price: 'Complimentary',
    isComplimentary: true,
  },
  {
    id: 's2',
    category: 'starters',
    name: 'Calamari & Peppered Escargot',
    description: 'Crisp calamari rings accompanied by peppered Nigerian snails tossed in fresh herbs.',
    price: '₦14,500',
    isPopular: true,
  },
  {
    id: 's3',
    category: 'starters',
    name: 'Ìkökö Snails Croquettes',
    description: 'Crushed pan-seared snails and mashed potato coated with golden crumbs, chili dip.',
    price: '₦12,000',
  },
  {
    id: 's4',
    category: 'starters',
    name: 'Suya-Spiced Wings',
    description: 'Tender chicken wings glazed in traditional peanut suya spice, red onions, cabbage slaw.',
    price: '₦11,500',
  },
  // Mains
  {
    id: 'm1',
    category: 'mains',
    name: 'Smoky Gourmet Jollof Rice',
    description: 'Authentic firewood-infused Nigerian jollof rice cooked in a signature traditional pot. Served with flame-grilled beef or plantains.',
    price: '₦22,500',
    isPopular: true,
  },
  {
    id: 'm2',
    category: 'mains',
    name: 'The Ìkökö Lamb Chop Special',
    description: 'Herb-crusted premium lamb cutlets, yam purée, rich native dark jus, braised greens.',
    price: '₦32,000',
    isPopular: true,
  },
  {
    id: 'm3',
    category: 'mains',
    name: 'Pan-Seared Sea Bass',
    description: 'Sea bass filet, plantain purée, roasted heritage root vegetables, ginger-lime emulsion.',
    price: '₦28,500',
  },
  // Pastas
  {
    id: 'p1',
    category: 'pastas',
    name: 'Seafood Calamari & Shrimp Pasta',
    description: 'Linguine ribbons bathed in an artisanal parmesan cream sauce, with juicy shrimp, calamari, fresh parsley.',
    price: '₦24,000',
    isPopular: true,
  },
  {
    id: 'p2',
    category: 'pastas',
    name: 'Spicy Native Pesto Pasta',
    description: 'Penne pasta gently folded in a house-made scent leaf & basil pesto, local chili flakes, smoked turkey chunks.',
    price: '₦19,500',
  },
  // Desserts
  {
    id: 'd1',
    category: 'desserts',
    name: 'Warm Decadent Lava Cake',
    description: 'Rich dark chocolate lava molten core cake, served with organic vanilla bean ice cream.',
    price: '₦9,500',
  },
  {
    id: 'd2',
    category: 'desserts',
    name: 'Mango & Hibiscus Parfait',
    description: 'Locally sourced mango slices layered with wild berry zobo gelée, oat crumble.',
    price: '₦8,000',
  },
  // Drinks / Cocktails
  {
    id: 'dr1',
    category: 'drinks',
    name: 'Ìkökö Signature Sangria',
    description: 'Lagos-inspired luxury. Aged red wine, local spirits, hibiscus syrup, orange rinds.',
    price: '₦9,000',
    isPopular: true,
  },
  {
    id: 'dr2',
    category: 'drinks',
    name: 'The Ikeja GRA Mule',
    description: 'Premium vodka, fresh ginger brew, muddled lime juice, organic honey, cucumber zest.',
    price: '₦8,500',
  },
  {
    id: 'dr3',
    category: 'drinks',
    name: 'Vintages & Champagnes',
    description: 'Selection of vintage dry reds, sweet whites, and bubbly champagnes from curated vineyards.',
    price: 'From ₦45,000',
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'pastas' | 'drinks' | 'desserts'>('starters');

  const categories = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'pastas', label: 'Pasta Dishes' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Wines & Mixology' },
  ] as const;

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div id="menu" className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden font-sans border-t border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <span className="text-xs tracking-[0.35em] font-bold text-amber-700 uppercase mb-4 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-amber-700" /> Culinary Art
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-wide text-stone-950 mb-4 leading-tight text-center">
          The Signature <span className="text-amber-700">ÌKÖKÖ Selection</span>
        </h2>
        <p className="text-stone-600 font-light text-base leading-relaxed tracking-wide text-center max-w-xl mb-12">
          Masterpieces crafted by our master chef using premium cuts, local Nigerian flavors, and international panache. Every visit begins with our <span className="text-amber-700 font-semibold">complimentary bread service</span>.
        </p>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16 border-b border-stone-200 pb-1 w-full max-w-4xl px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-3.5 text-xs sm:text-sm tracking-widest font-sans font-medium uppercase transition duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-amber-700 border-b-2 border-amber-600 font-bold bg-amber-100/50'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between bg-white rounded border border-stone-100 p-6 sm:p-8 hover:border-stone-200 hover:shadow-lg transition-all duration-300 h-full flex-1"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex items-start gap-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-950 tracking-wide transition-colors duration-300 flex items-center gap-2">
                      {item.name}
                      {item.isPopular && (
                        <span className="flex items-center gap-1 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-sm text-[10px] text-amber-800 font-sans tracking-widest uppercase">
                          <Flame className="w-2.5 h-2.5" /> Popular
                        </span>
                      )}
                      {item.isComplimentary && (
                        <span className="flex items-center gap-1 bg-amber-600 border border-amber-600 px-2 py-0.5 rounded-sm text-[10px] text-white font-sans tracking-widest uppercase animate-pulse">
                          <Sparkles className="w-2.5 h-2.5" /> Free
                        </span>
                      )}
                    </h3>
                  </div>
                  <span className="text-sm font-serif font-bold text-amber-700 tracking-wider flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-600 font-light text-xs sm:text-sm tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small Call To Action */}
        <div className="mt-16 text-center">
          <p className="text-xs text-stone-500 font-sans tracking-wide mb-6">
            Prices are subject to 7.5% VAT, 5% LST, and 5% service charge.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://glovoapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-stone-200 hover:border-stone-300 text-stone-800 text-xs tracking-widest uppercase font-bold rounded-sm flex items-center gap-2 transition hover:bg-stone-100 cursor-pointer"
            >
              <span>Order on Glovo</span>
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
