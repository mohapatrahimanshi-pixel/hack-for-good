import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChallengesSection } from './components/ChallengesSection';
import { WhySection } from './components/WhySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ImpactSection } from './components/ImpactSection';
import { TimelineSection } from './components/TimelineSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ChallengeDetailModal } from './components/ChallengeDetailModal';
import { RegisterModal } from './components/RegisterModal';
import { Challenge } from './types';

export default function App() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [preselectedTrackId, setPreselectedTrackId] = useState<string>('education');

  const handleOpenRegister = (trackId?: string) => {
    if (trackId) {
      setPreselectedTrackId(trackId);
    }
    setIsRegisterOpen(true);
  };

  const handleOpenChallengeDetail = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleSelectTrackForRegister = (trackId: string) => {
    setPreselectedTrackId(trackId);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0217] text-[#faf5eb] font-body relative overflow-x-hidden selection:bg-[#ff1f8f] selection:text-black">
      {/* Global subtle film grain texture overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-40 opacity-35" />

      {/* Floating Translucent Navbar */}
      <Navbar onOpenRegister={() => handleOpenRegister()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenRegister={() => handleOpenRegister()} />

        {/* 2. Challenge Section — The Problems Are Real */}
        <ChallengesSection onOpenChallengeDetail={handleOpenChallengeDetail} />

        {/* 3. Why Hack For Good? Section — Split Screen Editorial */}
        <WhySection />

        {/* 4. How It Works — 5 Numbered Stages */}
        <HowItWorksSection />

        {/* 5. Impact Section — Code Can Do More */}
        <ImpactSection />

        {/* 6. Timeline — The Expedition Schedule */}
        <TimelineSection />

        {/* 7. FAQ Section — Rules & Community Guidelines */}
        <FaqSection />

        {/* 8. Final CTA — Dramatic Sunset Horizon */}
        <CtaSection onOpenRegister={() => handleOpenRegister()} />
      </main>

      {/* Footer — Dark Purple Brand Base */}
      <Footer />

      {/* Modals */}
      <ChallengeDetailModal
        challenge={selectedChallenge}
        onClose={() => setSelectedChallenge(null)}
        onSelectTrackForRegister={handleSelectTrackForRegister}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        preselectedTrackId={preselectedTrackId}
      />
    </div>
  );
}
