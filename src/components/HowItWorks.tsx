"use client";

import React from "react";
import { Send, Users, Handshake, CheckCircle2 } from "lucide-react";

interface HowItWorksProps {
  onOpenGetStarted: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGetStarted }) => {
  const steps = [
    {
      step: "01",
      icon: Send,
      title: "Submit Your Request",
      desc: "Click 'Get Started' and share what you're looking for (e.g. 2BHK in Velachery, vegetarian tiffin in Mylapore, AC repair in Adyar).",
    },
    {
      step: "02",
      icon: Users,
      title: "Get Direct Contact Info",
      desc: "Our Chennai desk introduces you directly to verified owners, home chefs, or sellers matching your exact requirement.",
    },
    {
      step: "03",
      icon: Handshake,
      title: "Connect & Finalize Directly",
      desc: "Call or WhatsApp the provider directly. Verify documents/meals yourself and save 100% on middleman broker commissions.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-[#f2e8e0]/60 border-y border-[#e8ded6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#eb4203]">
            Simple &amp; Transparent Process
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#2b1f1d] mt-2 mb-4">
            How Central Marketplace Works
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a46]">
            We operate as a direct introduction desk. No complex signups, no middleman fees, just fast connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8ded6] shadow-sm relative hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fff3ee] text-[#eb4203] flex items-center justify-center font-bold text-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-[#e8ded6] font-serif-heading">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#2b1f1d] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5c4a46] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#eb4203] hover:bg-[#cf3800] shadow-md hover:shadow-lg transition-all"
          >
            <span>Ready to get started?</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
