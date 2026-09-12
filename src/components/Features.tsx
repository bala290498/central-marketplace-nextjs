"use client";

import React from "react";

export const Features: React.FC = () => {
  const featureItems = [
    {
      title: "PG / Rentals / Buy Property / Rooms",
      desc: "Property owners and people looking for a place in an area.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
        </svg>
      ),
    },
    {
      title: "Home Foods (Breakfast, Lunch, Dinner etc)",
      desc: "Breakfast, lunch, dinner and home-cooked food listed by area.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M4 11 6 5h12l2 6" />
          <path d="M8 15h.01M12 15h.01M16 15h.01" />
        </svg>
      ),
    },
    {
      title: "Local Sellers / Wholesalers / Dealers",
      desc: "Local shops, wholesale and dealer contacts in the neighbourhood.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <path d="M4 10h16v10H4z" />
          <path d="M4 10 6 4h12l2 6" />
          <path d="M10 14h4v6h-4z" />
        </svg>
      ),
    },
    {
      title: "Home Services",
      desc: "Electrician, plumber, cleaning, services, repairs etc.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <path d="M14.7 6.3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L3 12v5h5l8.7-8.7z" />
          <path d="m12 5 3 3" />
          <path d="M3 21h7" />
        </svg>
      ),
    },
    {
      title: "Professionals",
      desc: "Doctors, lawyers, editors etc.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <rect x="6" y="7" width="12" height="14" rx="1" />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3d2c2a] mb-3.5 text-left font-serif-heading">
        Our <em className="not-italic text-[#eb4203]">focus</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 items-stretch">
        {featureItems.map((item, idx) => (
          <article
            key={idx}
            className="bg-[#fffaf6] border border-[#ead9ce] rounded-[18px] p-3.5 shadow-[0_18px_50px_rgba(61,44,42,0.10)] flex gap-3.5 items-center min-h-[96px] h-full text-left"
          >
            <i className="shrink-0 w-13 h-13 rounded-2xl bg-[#f8ece6] text-[#eb4203] grid place-items-center not-italic">
              {item.svg}
            </i>
            <div className="min-w-0 flex-1">
              <strong className="block text-sm font-bold text-[#3d2c2a] mb-1">
                {item.title}
              </strong>
              <p className="text-xs text-[#5c4a46] leading-snug">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
