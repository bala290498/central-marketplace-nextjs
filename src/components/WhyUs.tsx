"use client";

import React from "react";
import { PhoneCall, Smile, MessagesSquare, ShieldCheck } from "lucide-react";

export const WhyUs: React.FC = () => {
  const whyItems = [
    {
      title: "Direct contact details",
      desc: "We pass the number. You speak to the player yourself.",
      icon: PhoneCall,
    },
    {
      title: "Stress-free finding",
      desc: "One desk, one area list. No groups. No wandering.",
      icon: Smile,
    },
    {
      title: "Feedback loop",
      desc: "Every customer and provider has a private channel from day one.",
      icon: MessagesSquare,
    },
    {
      title: "Continuous monitoring",
      desc: "If someone reports a fake or poor listing, the desk removes it.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="my-8 mb-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3d2c2a] mb-4 text-left font-serif-heading">
        Why <em className="not-italic text-[#eb4203]">Central Marketplace</em>?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-stretch">
        {whyItems.map((item, idx) => {
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
