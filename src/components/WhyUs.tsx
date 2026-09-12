"use client";

import React from "react";

export const WhyUs: React.FC = () => {
  const whyItems = [
    {
      title: "Direct contact details",
      desc: "We pass the number. You speak to the player yourself.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
    },
    {
      title: "Stress-free finding",
      desc: "One desk, one area list. No groups. No wandering.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 3 3 5-6" />
        </svg>
      ),
    },
    {
      title: "Feedback loop",
      desc: "Every customer and provider has a private channel from day one.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      ),
    },
    {
      title: "Continuous monitoring",
      desc: "If someone reports a fake or poor listing, the desk removes it.",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6.5 h-6.5">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="my-8 mb-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3d2c2a] mb-3.5 text-left font-serif-heading">
        Why <em className="not-italic text-[#eb4203]">Central Marketplace</em>?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 items-stretch">
        {whyItems.map((item, idx) => (
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
