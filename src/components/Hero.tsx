"use client";

import React from "react";

interface HeroProps {
  onOpenGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted }) => {
  return (
    <section className="max-w-[720px] mx-auto text-center pt-8 pb-4 px-4">
      <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#3d2c2a] leading-[1.1] my-2">
        Find the right local player.
      </h1>
      <p className="text-sm sm:text-base text-[#5c4a46] leading-relaxed max-w-xl mx-auto mb-6">
        We connect people, customers and buyers with property owners, service providers and local sellers. The list is being built — start on WhatsApp with the desk.
      </p>

      {onOpenGetStarted && (
        <button
          type="button"
          onClick={onOpenGetStarted}
          className="inline-flex items-center justify-center gap-2 border-0 cursor-pointer rounded-full px-6 py-3.5 font-extrabold text-sm bg-[#eb4203] text-white hover:bg-[#c93802] shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          Get Started with Desk
        </button>
      )}
    </section>
  );
};
