"use client";

import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { InteractiveDeskCard } from "./InteractiveDeskCard";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container Box */}
      <div className="relative w-full max-w-lg bg-[#fffaf6] rounded-[28px] shadow-2xl border border-[#ead9ce] max-h-[90vh] flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#3d2c2a] to-[#2b1f1d] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#eb4203] text-white flex items-center justify-center font-bold text-xs">
              CMP
            </div>
            <div>
              <h3 className="font-serif-heading text-lg font-bold">
                Central Marketplace Desk
              </h3>
              <p className="text-[11px] text-[#d4c4b8]">Chennai Regional Desk</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <InteractiveDeskCard isModalMode={true} onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};
