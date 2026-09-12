"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  onOpenGetStarted: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGetStarted }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f7f0ea]/92 backdrop-blur-md border-b border-[#ead9ce] py-3.5">
      <div className="w-[min(1100px,calc(100%-32px))] mx-auto flex items-center justify-between gap-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 font-extrabold group">
          <span className="w-11 h-9.5 rounded-[11px] bg-[#eb4203] text-white flex items-center justify-center text-[10px] font-extrabold tracking-wider uppercase shadow-xs group-hover:scale-105 transition-transform">
            CMP
          </span>
          <div className="flex flex-col text-left">
            <span className="font-serif-heading text-lg font-bold tracking-tight text-[#3d2c2a] leading-tight">
              Central Marketplace
            </span>
            <small className="text-[11px] font-bold tracking-wider uppercase text-[#8a736c] leading-none mt-0.5">
              Chennai desk
            </small>
          </div>
        </Link>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="border-0 cursor-pointer rounded-full px-4 py-2.5 font-extrabold text-xs bg-[#eb4203] text-white hover:bg-[#c93802] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};
