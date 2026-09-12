"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteractiveDeskCard } from "@/components/InteractiveDeskCard";
import { Features } from "@/components/Features";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";
import { GetStartedModal } from "@/components/GetStartedModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f0ea] text-[#3d2c2a]">
      {/* Navigation Header */}
      <Header onOpenGetStarted={handleOpenModal} />

      {/* Main Container */}
      <main className="w-[min(1100px,calc(100%-32px))] mx-auto flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Embedded Interactive 3-Step Desk Card */}
        <div className="w-[min(720px,100%)] mx-auto my-5 mb-8">
          <InteractiveDeskCard />
        </div>

        {/* Focus Features Grid */}
        <Features />

        {/* Why Central Marketplace Grid */}
        <WhyUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popup Modal Form */}
      <GetStartedModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
