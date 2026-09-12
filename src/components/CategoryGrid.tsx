"use client";

import React from "react";
import { Home, UtensilsCrossed, Store, Wrench, Briefcase, ChevronRight, Sparkles } from "lucide-react";

interface CategoryGridProps {
  onOpenGetStarted: (category?: string) => void;
}

export const categoriesData = [
  {
    id: "properties",
    title: "Properties & Accommodation",
    description: "Flats for rent, PG accommodations, single rooms, commercial spaces & plots across Chennai.",
    icon: Home,
    badge: "Hot Demand",
    popularAreas: ["Velachery", "OMR", "Anna Nagar", "T. Nagar", "Adyar"],
    actionText: "Find Property / List Vacancy",
  },
  {
    id: "food",
    title: "Home Food & Tiffins",
    description: "Authentic home-cooked meals, daily breakfast/lunch tiffins, regional caterers & snacks.",
    icon: UtensilsCrossed,
    badge: "Fresh Daily",
    popularAreas: ["Mylapore", "Nungambakkam", "Tambaram", "Porur", "Madipakkam"],
    actionText: "Order Meal / Offer Tiffins",
  },
  {
    id: "wholesalers",
    title: "Local Sellers & Wholesalers",
    description: "Direct textile suppliers, provisions, electronics, hardware, and local produce sellers.",
    icon: Store,
    badge: "Direct Rates",
    popularAreas: ["Sowcarpet", "Parrys", "Koyambedu", "Ritche Street"],
    actionText: "Browse Wholesale / List Products",
  },
  {
    id: "services",
    title: "Home Services & Repairs",
    description: "Electricians, plumbers, AC service technicians, deep cleaners, painters, and carpenters.",
    icon: Wrench,
    badge: "On-Call",
    popularAreas: ["Guindy", "Ashok Nagar", "Perungudi", "Chromepet"],
    actionText: "Request Service / Offer Skills",
  },
  {
    id: "professionals",
    title: "Local Professionals",
    description: "Experienced accountants, legal advisors, home tutors, tailors, photographers, and drivers.",
    icon: Briefcase,
    badge: "Verified Experts",
    popularAreas: ["KK Nagar", "Alwarpet", "Egmore", "Thiruvanmiyur"],
    actionText: "Hire Professional / Join List",
  },
];

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onOpenGetStarted }) => {
  return (
    <section id="categories" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#2b1f1d] mb-4">
            Browse Chennai Desk Categories
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a46]">
            Select a category to view listings or submit your details to be introduced directly to interested callers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative bg-white rounded-2xl p-6 border border-[#e8ded6] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fff3ee] text-[#eb4203] flex items-center justify-center group-hover:bg-[#eb4203] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#eb4203] bg-[#fff3ee] px-2.5 py-1 rounded-full border border-[#ffd5c4]">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif-heading text-xl font-bold text-[#2b1f1d] mb-2 group-hover:text-[#eb4203] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c4a46] leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.popularAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-[#8a736c] bg-[#f7f0ea] px-2 py-0.5 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => onOpenGetStarted(cat.id)}
                  className="w-full flex items-center justify-between pt-4 border-t border-[#f2e8e0] text-xs font-bold text-[#eb4203] hover:text-[#cf3800] group/btn"
                >
                  <span>{cat.actionText}</span>
                  <div className="w-7 h-7 rounded-full bg-[#fff3ee] flex items-center justify-center group-hover/btn:bg-[#eb4203] group-hover/btn:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            );
          })}

          {/* Special CTA Card */}
          <div className="bg-gradient-to-br from-[#2b1f1d] to-[#45322e] rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#eb4203]/20 blur-2xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffd5c4] bg-white/10 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#eb4203]" />
                <span>Want to offer a service?</span>
              </div>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold mb-3">
                List Your Business or Property
              </h3>
              <p className="text-xs sm:text-sm text-[#d4c4b8] leading-relaxed mb-6">
                Are you a house owner, home chef, wholesaler, or local professional? Submit your details to get listed on our Chennai desk.
              </p>
            </div>

            <button
              onClick={() => onOpenGetStarted()}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#eb4203] hover:bg-[#cf3800] transition-colors shadow-md text-center"
            >
              Request Listing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
