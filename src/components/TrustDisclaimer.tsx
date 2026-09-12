"use client";

import React from "react";
import { ShieldAlert, CheckCircle, Info, FileText } from "lucide-react";

interface TrustDisclaimerProps {
  onOpenTerms: () => void;
}

export const TrustDisclaimer: React.FC<TrustDisclaimerProps> = ({ onOpenTerms }) => {
  return (
    <section id="about" className="py-14 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white border border-[#e8ded6] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff3ee] text-[#eb4203] text-xs font-bold mb-3 border border-[#ffd5c4]">
              <Info className="w-3.5 h-3.5" />
              <span>Desk Guidelines &amp; Platform Notice</span>
            </div>

            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#2b1f1d] mb-3">
              Direct Introductions. Zero Brokerage.
            </h3>

            <p className="text-xs sm:text-sm text-[#5c4a46] leading-relaxed mb-4">
              Central Marketplace is an independent listing and introduction desk for the Chennai region. We share details of property owners, food providers, wholesalers, and professionals so you can contact them directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#3d2c2a]">
              <div className="flex items-center gap-2 bg-[#f9f5f0] p-2.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-[#eb4203] shrink-0" />
                <span>No broker fees or hidden commissions</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f9f5f0] p-2.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-[#eb4203] shrink-0" />
                <span>Direct WhatsApp &amp; Phone Introductions</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f9f5f0] p-2.5 rounded-lg">
                <ShieldAlert className="w-4 h-4 text-[#eb4203] shrink-0" />
                <span>Always inspect place/goods before paying</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f9f5f0] p-2.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-[#eb4203] shrink-0" />
                <span>Privacy-focused WhatsApp interaction</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 self-center md:self-start">
            <button
              onClick={onOpenTerms}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#d4c4b8] text-xs font-bold text-[#2b1f1d] bg-[#f7f0ea] hover:bg-[#eb4203] hover:text-white transition-all text-center"
            >
              <FileText className="w-4 h-4" />
              <span>Read Full Terms &amp; Conditions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
