"use client";

import React from "react";
import { Home, UtensilsCrossed, Store, Wrench, Briefcase } from "lucide-react";

export const Features: React.FC = () => {
  const featureItems = [
    {
      title: "PG / Rentals / Buy Property / Rooms",
      desc: "Property owners and people looking for a place in an area.",
      icon: Home,
    },
    {
      title: "Home Foods (Breakfast, Lunch, Dinner etc)",
      desc: "Breakfast, lunch, dinner and home-cooked food listed by area.",
      icon: UtensilsCrossed,
    },
    {
      title: "Local Sellers / Wholesalers / Dealers",
      desc: "Local shops, wholesale and dealer contacts in the neighbourhood.",
      icon: Store,
    },
    {
      title: "Home Services",
      desc: "Electrician, plumber, cleaning, services, repairs etc.",
      icon: Wrench,
    },
    {
      title: "Professionals",
      desc: "Doctors, lawyers, editors etc.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3d2c2a] mb-4 text-left font-serif-heading">
        Our <em className="not-italic text-[#eb4203]">focus</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 items-stretch">
        {featureItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <article
              key={idx}
              className="group bg-[#fffaf6] border border-[#ead9ce] rounded-[20px] p-4 shadow-[0_8px_30px_rgba(61,44,42,0.06)] hover:shadow-[0_12px_40px_rgba(61,44,42,0.12)] hover:border-[#eb4203]/40 transition-all duration-300 flex gap-4 items-center min-h-[104px] h-full text-left"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#f8ece6] text-[#eb4203] group-hover:bg-[#eb4203] group-hover:text-white transition-colors duration-300 grid place-items-center shadow-xs">
                <Icon className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-sm font-extrabold text-[#3d2c2a] mb-1 group-hover:text-[#eb4203] transition-colors">
                  {item.title}
                </strong>
                <p className="text-xs text-[#5c4a46] leading-relaxed">{item.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
