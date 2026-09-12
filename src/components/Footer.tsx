"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer className="bg-[#eb4203] text-white text-center text-sm py-7 px-4 w-full mt-auto">
      <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-2.5 text-xs sm:text-sm font-extrabold">
        <Link href="/terms" className="underline hover:opacity-90">
          T&amp;C
        </Link>
        <span className="opacity-50">·</span>
        <a
          href="https://wa.me/919677691237?text=Hi%2C%20I%20want%20to%20report%20an%20issue."
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-90"
        >
          Report issue
        </a>
        <span className="opacity-50">·</span>
        <a href="mailto:contact@centralmarketplace.in" className="underline hover:opacity-90">
          contact@centralmarketplace.in
        </a>
        <span className="opacity-50">·</span>
        <a href="mailto:careers@centralmarketplace.in" className="underline hover:opacity-90">
          careers@centralmarketplace.in
        </a>
      </div>
      <p className="opacity-90 text-xs font-medium">
        Central Marketplace · Chennai Desk
      </p>
    </footer>
  );
};
