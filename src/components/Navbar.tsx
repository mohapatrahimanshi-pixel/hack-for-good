import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { audioEngine } from '../utils/audioSynth';
import { NexusLogo } from './NexusLogo';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVibePlaying, setIsVibePlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleVibe = () => {
    const state = audioEngine.toggleAmbient();
    setIsVibePlaying(state);
    if (!state) {
      audioEngine.playClick('tap');
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0217]/85 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-[#0b0217]/60 backdrop-blur-md border-white/10'
        }`}
      >
        {/* Zone 1: Official NEXUS Brand Logo with signature X in Miami Sunset Palette */}
        <a
          href="#home"
          onClick={() => audioEngine.playClick('tap')}
          className="flex items-center select-none transition-transform duration-200 hover:scale-105 py-0.5"
          aria-label="NEXUS Home"
        >
          <NexusLogo size="sm" showSubtitle={true} />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-zinc-300">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => audioEngine.playClick('tap')}
              className="relative py-1 hover:text-white transition-colors duration-200 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff1f8f] to-[#ff6838] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Ambient sound vibe toggle */}
          <button
            type="button"
            onClick={handleToggleVibe}
            title={isVibePlaying ? 'Mute Miami sunset synth' : 'Play Miami sunset synth vibe'}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code font-semibold rounded-lg border transition-all ${
              isVibePlaying
                ? 'bg-[#ff1f8f]/20 border-[#ff1f8f] text-[#ff1f8f] shadow-[0_0_12px_rgba(255,31,143,0.4)]'
                : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
            }`}
          >
            {isVibePlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#ff1f8f]" />
                <span className="hidden md:inline">VIBE ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden md:inline">VIBE</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={() => {
              audioEngine.playClick('action');
              onOpenRegister();
            }}
            className="group relative px-5 py-2 font-display text-sm tracking-wider text-black font-extrabold uppercase rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,31,143,0.4)] whitespace-nowrap cursor-pointer"
          >
            {/* Sunset gradient fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffb800] transition-transform duration-300 group-hover:brightness-110" />
            <div className="relative flex items-center gap-1.5 text-black">
              <span>REGISTER</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 p-5 bg-[#0b0217]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 font-medium text-base text-zinc-200">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  audioEngine.playClick('tap');
                  setIsMobileMenuOpen(false);
                }}
                className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-zinc-500 font-mono-code text-xs">↗</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                handleToggleVibe();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono-code rounded-lg border border-white/10 bg-white/5 text-zinc-300"
            >
              {isVibePlaying ? <Volume2 className="w-4 h-4 text-[#ff1f8f]" /> : <VolumeX className="w-4 h-4" />}
              <span>{isVibePlaying ? 'SYNTH VIBE ACTIVE (CLICK TO MUTE)' : 'PLAY RETRO SUNSET VIBE'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                audioEngine.playClick('action');
                setIsMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-lg font-display text-base tracking-wider text-black font-extrabold uppercase bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffb800] shadow-[0_0_20px_rgba(255,31,143,0.4)]"
            >
              REGISTER FOR HACKATHON →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
