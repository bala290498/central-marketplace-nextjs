"use client";

import React, { useEffect } from "react";
import { X, FileText, ShieldCheck } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#e8ded6] flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#2b1f1d] text-white p-6 relative flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eb4203] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading text-xl font-bold">
                Terms &amp; Conditions
              </h3>
              <p className="text-xs text-[#d4c4b8]">
                Central Marketplace · Chennai Desk
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-[#5c4a46] leading-relaxed space-y-4 font-sans">
          <p className="text-xs text-[#8a736c] italic">
            Last updated: 10 September 2026. Applies to the Chennai Desk of Central Marketplace (the “Desk”, “we”, “us”). By using the website, WhatsApp desk, or any listing we share, you agree to these terms.
          </p>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              1. What we are
            </h4>
            <p>
              Central Marketplace is a listing and introduction desk. We may share names, areas, and contact details of property owners, home-food providers, local sellers, wholesalers, home-service players, and professionals. You contact them directly.
            </p>
            <p className="mt-1">
              We are not a broker of record, marketplace seller, payment company, courier, insurer, employer, or guarantor of any person we list.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              2. What we are not responsible for
            </h4>
            <p>We do not take part in, and we accept no responsibility or liability for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Money, deposits, advances, rents, fees, cash, UPI, bank transfer, or any other payment between you and another party.</li>
              <li>Scams, impersonation, fake listings, fake documents, or dishonest dealing by any listed person or any customer.</li>
              <li>Damage to property, injury, loss, theft, or any other harm arising from a visit, stay, meal, service, or deal.</li>
              <li>Delivery time, delay, non-delivery, or partial delivery of food, goods, or services.</li>
              <li>Quantity, weight, portion, stock, or availability.</li>
              <li>Quality, fitness, hygiene, skill, licence, safety, or result of any property, food, product, or service.</li>
              <li>Whether a room, flat, plot, or PG is vacant, legal, or as described.</li>
              <li>Whether a professional is qualified, registered, or permitted to practise.</li>
            </ul>
            <p className="mt-1">
              No listing, message, or recommendation from the Desk is a promise that a service will work, that a person is genuine, or that a deal will complete.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              3. No warranties
            </h4>
            <p>
              Listings and contacts are shared “as is” and “as available”. We do not warrant that information is complete, current, or accurate. We may add, change, or remove a listing at any time without notice.
            </p>
            <p className="mt-1">
              Any view we share is only a connection aid. It is not advice, not a certificate, and not a guarantee.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              4. Your duty
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Check the person, place, documents, price, and work yourself before you pay or visit.</li>
              <li>Do not send money to an unknown party on the strength of a listing alone.</li>
              <li>Keep your own records of what you agree with the other party.</li>
              <li>Use contacts only for the request you made. Do not spam listed people.</li>
              <li>Tell the Desk in a private chat if a listing looks fake or harmful.</li>
            </ul>
            <p className="mt-1">
              Any contract, visit, payment, delivery, or work is solely between you and the other party. We are not a party to that arrangement.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              5. Providers
            </h4>
            <p>
              If you ask to be listed, you confirm that your details are true and that you have the right to offer what you describe. We may refuse or remove a listing without giving a reason. Removal after a complaint does not make us responsible for what already happened.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              6. WhatsApp and data
            </h4>
            <p>
              The site may open a private WhatsApp chat with the office. WhatsApp’s own terms apply to that chat. We may keep area, name, number, category, and message text so we can reply and run the list. Do not send us data you do not want stored.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              7. Limitation of liability
            </h4>
            <p>
              To the fullest extent allowed by law, Central Marketplace and the Chennai Desk are not liable for any direct, indirect, special, or consequential loss, including loss of money, property, time, data, or reputation, arising from use of the site, a listing, a contact, or a deal you make with someone else.
            </p>
            <p className="mt-1">
              If a court still finds us liable, that liability is limited to the amount you paid us for a paid promotion in the thirty days before the claim — or zero if you paid us nothing.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              8. Indemnity
            </h4>
            <p>
              You will indemnify and hold us harmless against claims, costs, and losses arising from your use of a listing, your messages, your payments, or your breach of these terms.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              9. Changes
            </h4>
            <p>
              We may update these terms by posting a new version on this page. Continued use after that date means you accept the new terms.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              10. Law
            </h4>
            <p>
              These terms are governed by the laws of India. Courts in Chennai have exclusive jurisdiction, without affecting any non-waivable consumer right you may have.
            </p>
          </div>

          <div className="bg-[#f9f5f0] p-4 rounded-xl border border-[#e8ded6]">
            <h4 className="font-serif-heading font-bold text-base text-[#2b1f1d] mb-1">
              11. Contact
            </h4>
            <p>Desk WhatsApp: +91 96776 91237</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@centralmarketplace.in"
                className="text-[#eb4203] font-bold hover:underline"
              >
                contact@centralmarketplace.in
              </a>
            </p>
            <p>Website: centralmarketplace.in</p>
            <p className="mt-2 text-xs italic text-[#8a736c]">
              This page is a platform disclaimer. It is not legal advice.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f7f0ea] p-4 border-t border-[#e8ded6] shrink-0 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs font-bold bg-[#2b1f1d] text-white hover:bg-[#eb4203] transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
