import React from 'react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { PalmSilhouette, CitySkylineSilhouette, RetroStampBadge, BarcodeGraphic, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';
import { NexusLogo } from './NexusLogo';

interface CtaSectionProps {
  onOpenRegister: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-gradient-to-b from-[#0b0217] via-[#2d074d] to-[#ff2a85] text-white">
      {/* Background Layer: Sunset Gradients & Silhouettes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing Sunset Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-t from-[#ff0077] via-[#ff6838] to-[#ffbe3b] rounded-full blur-[120px] opacity-60" />

        {/* Halftone texture */}
        <div className="absolute inset-0 halftone-dots opacity-25" />

        {/* Skyline Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-44 text-[#070110]">
          <CitySkylineSilhouette className="w-full h-full object-cover" />
        </div>

        {/* Palms */}
        <div className="absolute -bottom-10 -left-10 w-64 md:w-80 text-[#070110] z-10 pointer-events-none transform -rotate-6">
          <PalmSilhouette className="w-full h-auto" />
        </div>
        <div className="absolute -bottom-10 -right-10 w-72 md:w-88 text-[#070110] z-10 pointer-events-none transform rotate-6">
          <PalmSilhouette className="w-full h-auto" />
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Retro Badge */}
        <div className="mb-6">
          <RetroStampBadge
            text="24 HOURS CAN CHANGE EVERYTHING"
            subtext="JOIN THE COMMUNITY"
            variant="gold"
          />
        </div>

        {/* Huge Typography as per prompt */}
        <h2 className="font-impact text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.88] text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
          <span className="block hover:text-[#ffbe3b] transition-colors glitch-hover">READY TO</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffbe3b] via-[#ff6838] to-white glitch-hover">
            HACK FOR GOOD?
          </span>
        </h2>

        {/* Small text as per prompt */}
        <p className="mt-6 text-xl sm:text-2xl text-zinc-100 font-display uppercase tracking-wide font-bold max-w-xl text-balance drop-shadow">
          Your next project could solve someone&apos;s real problem.
        </p>

        {/* Buttons as per prompt */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => {
              audioEngine.playClick('action');
              onOpenRegister();
            }}
            className="group px-9 py-4 bg-white hover:bg-[#ffbe3b] text-black font-display font-extrabold text-xl tracking-wider rounded-xl uppercase shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 whitespace-nowrap w-full sm:w-auto cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1.5">→</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#challenges"
            onClick={() => audioEngine.playClick('tap')}
            className="px-8 py-4 bg-black/50 hover:bg-black/80 text-white font-display font-bold text-xl tracking-wider rounded-xl uppercase border-2 border-white/40 hover:border-white transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto cursor-pointer shadow-lg"
          >
            <span>VIEW CHALLENGES</span>
            <span>→</span>
          </a>
        </div>

        {/* Official NEXUS Logo below CTA */}
        <div className="mt-16 flex flex-col items-center gap-3 select-none">
          <NexusLogo size="lg" showSubtitle={true} />
          <span className="text-[11px] font-mono-code uppercase tracking-widest text-[#ffbe3b]">
            TECH × COMMUNITY × SOCIAL IMPACT
          </span>
          <BarcodeGraphic code="NEXUS-2026-CALL-TO-ACTION" className="mt-1 scale-75 opacity-70" />
        </div>

      </div>
    </section>
  );
};
