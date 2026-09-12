"use client";

import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="max-w-[720px] mx-auto text-center pt-3 pb-2 px-4">
      <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#3d2c2a] leading-[1.1] my-2">
        Find the right local player.
      </h1>
      <p className="text-sm sm:text-base text-[#5c4a46] leading-relaxed max-w-xl mx-auto">
        We connect people, customers and buyers with property owners, service providers and local sellers. The list is being built — start on WhatsApp with the desk.
      </p>
    </section>
  );
};
