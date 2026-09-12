"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Search, Store } from "lucide-react";

const ChennaiMap = dynamic(() => import("./ChennaiMap"), {
  ssr: false,
  loading: () => (
    <div className="h-48 w-full rounded-xl border border-[#ead9ce] bg-[#f7f0ea] animate-pulse flex items-center justify-center text-xs text-[#8a736c]">
      Loading Chennai map...
    </div>
  ),
});

interface InteractiveDeskCardProps {
  onSuccess?: () => void;
  isModalMode?: boolean;
}

export const InteractiveDeskCard: React.FC<InteractiveDeskCardProps> = ({
  isModalMode = false,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [role, setRole] = useState<"customer" | "provider">("customer");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const DESK_NUMBER = "919677691237";

  const handleSelectRole = (selectedRole: "customer" | "provider") => {
    setRole(selectedRole);
    setStep(2);
  };

  const pinText = () => {
    return lat && lng ? `https://maps.google.com/?q=${lat},${lng}` : "Not pinned";
  };

  const buildMessage = () => {
    if (role === "customer") {
      return `Hi, I am looking for a contact in Chennai.\nCategory: ${category}\nArea: ${area}\nName: ${name}\nWhatsApp/Mobile: ${mobile}`;
    }
    return `Hi, I want to be listed.\nCategory: ${category}\nArea: ${area}\nName: ${name}\nWhatsApp/Mobile: ${mobile}\nLocation: ${pinText()}`;
  };

  const handleGoToStep3 = () => {
    const cleanMobile = mobile.replace(/\D/g, "").slice(-10);

    if (!category || !area.trim() || !name.trim() || cleanMobile.length !== 10) {
      alert("Please choose a category and fill area, name and a valid 10-digit mobile number.");
      return;
    }

    setMobile(cleanMobile);
    setStep(3);
  };

  const handleSendWhatsApp = () => {
    const message = buildMessage();
    const url = `https://wa.me/${DESK_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const stepTitles = {
    1: "Welcome",
    2: "Your details",
    3: "WhatsApp",
  };

  return (
    <section
      id="desk"
      className={`bg-[#fffaf6] border border-[#ead9ce] rounded-[28px] p-5 sm:p-7 shadow-[0_18px_50px_rgba(61,44,42,0.10)] transition-all ${
        isModalMode ? "border-none shadow-none p-2 sm:p-4" : ""
      }`}
    >
      {/* Step Indicator Header */}
      <div className="text-left mb-4">
        <div className="text-[11px] font-extrabold tracking-widest uppercase text-[#eb4203]">
          Step {step} of 3
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3d2c2a] mt-1">
          {stepTitles[step]}
        </h3>
      </div>

      {/* Screen 1: Role Selection */}
      {step === 1 && (
        <div className="space-y-4 text-left">
          <div className="bg-[#f7f0ea] rounded-2xl rounded-bl-sm p-4 text-left border border-[#ead9ce]">
            <strong className="block text-xs font-extrabold text-[#eb4203] uppercase tracking-wider mb-1">
              Desk
            </strong>
            <p className="text-sm font-semibold text-[#3d2c2a]">
              What brings you here today?
            </p>
          </div>

          <div className="grid gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleSelectRole("customer")}
              className="w-full text-left p-4 rounded-2xl bg-[#f8ece6] text-[#3d2c2a] border border-[#edd5cb] font-extrabold hover:border-[#eb4203] hover:bg-[#fff5f0] transition-all cursor-pointer group flex items-start gap-3.5"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white text-[#eb4203] grid place-items-center shadow-xs group-hover:bg-[#eb4203] group-hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-sm sm:text-base group-hover:text-[#eb4203] transition-colors">
                  I am looking for a contact
                </span>
                <small className="block font-semibold text-xs text-[#8a736c] mt-0.5">
                  Find property, services, providers nearby
                </small>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleSelectRole("provider")}
              className="w-full text-left p-4 rounded-2xl bg-[#f8ece6] text-[#3d2c2a] border border-[#edd5cb] font-extrabold hover:border-[#eb4203] hover:bg-[#fff5f0] transition-all cursor-pointer group flex items-start gap-3.5"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white text-[#eb4203] grid place-items-center shadow-xs group-hover:bg-[#eb4203] group-hover:text-white transition-colors">
                <Store className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-sm sm:text-base group-hover:text-[#eb4203] transition-colors">
                  I want to be listed
                </span>
                <small className="block font-semibold text-xs text-[#8a736c] mt-0.5">
                  Get your property, service, or business found
                </small>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Screen 2: Form Inputs & Location */}
      {step === 2 && (
        <div className="space-y-4 text-left">
          <span className="inline-block bg-[#f3ddd4] text-[#c93802] text-xs font-extrabold px-3 py-1 rounded-full mb-2">
            {role === "customer" ? "Customer" : "Provider"}
          </span>

          <div>
            <p className="text-lg font-extrabold text-[#3d2c2a] tracking-tight">Which category?</p>
            <p className="text-xs text-[#8a736c] mt-0.5">
              {role === "customer" ? "What are you looking for?" : "What do you want listed?"}
            </p>
            <label className="block text-xs font-extrabold text-[#8a736c] uppercase tracking-wider mt-3 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-[#ead9ce] rounded-xl p-3 bg-white text-[#3d2c2a] text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#eb4203]"
            >
              <option value="">Select a category</option>
              <option value="PG / Rentals / Buy Property / Rooms">
                PG / Rentals / Buy Property / Rooms
              </option>
              <option value="Home Foods (Breakfast, Lunch, Dinner etc)">
                Home Foods (Breakfast, Lunch, Dinner etc)
              </option>
              <option value="Local Sellers / Wholesalers / Dealers">
                Local Sellers / Wholesalers / Dealers
              </option>
              <option value="Home Services (Electrician, Plumber, Cleaning, Services, Repairs etc)">
                Home Services (Electrician, Plumber, Cleaning, Services, Repairs etc)
              </option>
              <option value="Professionals (Doctors, Lawyers, Editors etc)">
                Professionals (Doctors, Lawyers, Editors etc)
              </option>
            </select>
          </div>

          <div>
            <p className="text-lg font-extrabold text-[#3d2c2a] tracking-tight">Which area in Chennai?</p>
            <p className="text-xs text-[#8a736c] mt-0.5">So we can match you with what's genuinely nearby.</p>
            <label className="block text-xs font-extrabold text-[#8a736c] uppercase tracking-wider mt-3 mb-1">
              Area
            </label>
            <input
              type="text"
              placeholder="Velachery, OMR, Tambaram…"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full border border-[#ead9ce] rounded-xl p-3 bg-white text-[#3d2c2a] text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#eb4203]"
            />
          </div>

          <div>
            <p className="text-lg font-extrabold text-[#3d2c2a] tracking-tight">What's your name?</p>
            <p className="text-xs text-[#8a736c] mt-0.5">So our office knows who's messaging.</p>
            <label className="block text-xs font-extrabold text-[#8a736c] uppercase tracking-wider mt-3 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#ead9ce] rounded-xl p-3 bg-white text-[#3d2c2a] text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#eb4203]"
            />
          </div>

          <div>
            <p className="text-lg font-extrabold text-[#3d2c2a] tracking-tight">Your WhatsApp / mobile</p>
            <p className="text-xs text-[#8a736c] mt-0.5">We'll open a pre-filled WhatsApp message — you just hit send.</p>
            <label className="block text-xs font-extrabold text-[#8a736c] uppercase tracking-wider mt-3 mb-1">
              WhatsApp / Mobile number
            </label>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="10-digit number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-[#ead9ce] rounded-xl p-3 bg-white text-[#3d2c2a] text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#eb4203]"
            />
          </div>

          {/* Location Pining Map for Providers */}
          {role === "provider" && (
            <ChennaiMap
              lat={lat}
              lng={lng}
              onPinChange={(newLat, newLng) => {
                setLat(newLat);
                setLng(newLng);
              }}
              onClearPin={() => {
                setLat("");
                setLng("");
              }}
            />
          )}

          {/* Row Navigation */}
          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-5 text-xs font-extrabold rounded-full border border-[#ead9ce] bg-transparent text-[#3d2c2a] hover:bg-[#f7f0ea] transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleGoToStep3}
              className="flex-1 py-3 px-5 text-xs font-extrabold rounded-full bg-[#eb4203] text-white hover:bg-[#c93802] transition-colors cursor-pointer text-center"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Screen 3: Message Preview & Send */}
      {step === 3 && (
        <div className="space-y-4 text-left">
          <span className="inline-block bg-[#f3ddd4] text-[#c93802] text-xs font-extrabold px-3 py-1 rounded-full mb-2">
            {role === "customer" ? "Customer" : "Provider"}
          </span>

          <p className="text-xl font-extrabold text-[#3d2c2a] tracking-tight">Check before you send</p>
          <p className="text-xs text-[#8a736c]">This is exactly what goes to our Team.</p>

          <div className="whitespace-pre-wrap text-left bg-[#fbf3ee] border border-dashed border-[#e4c4b6] rounded-2xl p-4 text-xs sm:text-sm text-[#3d2c2a] font-mono leading-relaxed">
            {buildMessage()}
          </div>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full py-4 px-5 text-sm font-extrabold rounded-full bg-[#eb4203] text-white hover:bg-[#c93802] transition-all shadow-md cursor-pointer text-center"
          >
            Send to WhatsApp desk
          </button>

          <div className="flex justify-center pt-1">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="py-2.5 px-6 text-xs font-extrabold rounded-full border border-[#ead9ce] bg-transparent text-[#3d2c2a] hover:bg-[#f7f0ea] transition-colors cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
