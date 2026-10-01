import React, { useState, useEffect } from 'react';
import { ArrowDown, Flame, Sparkles, Terminal, Users, Calendar, MapPin } from 'lucide-react';
import { PalmSilhouette, CitySkylineSilhouette, RetroStampBadge, BarcodeGraphic, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Live countdown timer to Hackathon Day (Nov 14, 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 44,
    hours: 12,
    minutes: 38,
    seconds: 19
  });

  // Performant compositor-only parallax scroll state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Only compute parallax while within the hero section height threshold
          if (currentY <= 1400) {
            setScrollY(currentY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offsets for distinct depth layers
  const sunY = scrollY * 0.16;
  const skylineY = scrollY * 0.22;
  const midPalmsY = scrollY * 0.32;
  const forePalmLeftY = scrollY * 0.44;
  const forePalmRightY = scrollY * 0.40;
  const cardY = -scrollY * 0.08;

  useEffect(() => {
    const targetDate = new Date('2026-11-14T10:00:00-05:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-between">
      {/* Background Layer: Rich Miami Sunset Sky Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#130324] via-[#2d084e] via-45% to-[#ff3b82]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-[#0b0217] via-[#ff6838]/30 to-transparent" />

        {/* Glowing Sun Orb with subtle parallax depth */}
        <div
          style={{
            transform: `translate3d(-50%, ${sunY}px, 0)`,
            willChange: 'transform'
          }}
          className="absolute bottom-36 left-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-t from-[#ff0077] via-[#ff6838] to-[#ffbe3b] blur-xl opacity-75 shadow-[0_0_120px_rgba(255,104,56,0.6)]"
        />

        {/* Halftone texture grid */}
        <div className="absolute inset-0 halftone-dots opacity-30" />

        {/* City Skyline Silhouette with mid-layer parallax */}
        <div
          style={{
            transform: `translate3d(0, ${skylineY}px, 0)`,
            willChange: 'transform'
          }}
          className="absolute bottom-0 left-0 right-0 h-48 md:h-64 text-[#0b0217]"
        >
          <CitySkylineSilhouette className="w-full h-full object-cover" />
        </div>

        {/* Secondary distant palms with intermediate depth */}
        <div
          style={{
            transform: `translate3d(0, ${midPalmsY}px, 0)`,
            willChange: 'transform'
          }}
          className="hidden lg:block absolute bottom-12 left-1/4 w-36 text-[#170529]/80 pointer-events-none"
        >
          <PalmSilhouette className="w-full h-auto" />
        </div>
        <div
          style={{
            transform: `translate3d(0, ${midPalmsY}px, 0) scaleX(-1)`,
            willChange: 'transform'
          }}
          className="hidden lg:block absolute bottom-8 right-1/4 w-44 text-[#170529]/80 pointer-events-none"
        >
          <PalmSilhouette className="w-full h-auto" />
        </div>

        {/* Foreground Palm Tree Silhouettes: Left and Right Framing */}
        <div
          style={{
            transform: `translate3d(0, ${forePalmLeftY}px, 0) rotate(-6deg)`,
            willChange: 'transform'
          }}
          className="absolute -bottom-10 -left-12 sm:-left-6 w-48 sm:w-72 md:w-88 text-[#070110] z-10 pointer-events-none"
        >
          <PalmSilhouette className="w-full h-auto drop-shadow-2xl" />
        </div>
        <div
          style={{
            transform: `translate3d(0, ${forePalmRightY}px, 0) rotate(3deg)`,
            willChange: 'transform'
          }}
          className="absolute -bottom-16 -right-14 sm:-right-8 w-56 sm:w-80 md:w-96 text-[#070110] z-10 pointer-events-none"
        >
          <PalmSilhouette className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* Film grain noise */}
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />
      </div>

      {/* Floating Top Decorative Annotations */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase font-mono-code tracking-widest text-[#ffbe3b] border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff0077] animate-ping" />
            <span className="font-extrabold text-white tracking-widest">ORGANIZED BY NEXUS</span>
            <span className="text-white/40">/</span>
            <span className="text-[#ff9e79]">HACK FOR GOOD 2026</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[#ffbe3b]/90">
            <span className="font-marker text-xs text-[#00f2fe] tracking-normal">“BUILD SOMETHING THAT MATTERS.”</span>
            <span className="text-white/30">·</span>
            <span className="text-zinc-300">TECH × COMMUNITY × IMPACT</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-[#ff1f8f]" />
            <span>MIAMI, FL & VIRTUAL</span>
          </div>
        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Organizer Banner & Retro Stamp */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#ff6838]" />
                <span className="font-mono-code font-extrabold text-xs uppercase tracking-[0.2em] text-white">
                  ORGANIZED BY NEXUS
                </span>
              </div>
              <RetroStampBadge
                text="OFFICIAL NGO HACKATHON"
                subtext="24H SOCIAL IMPACT SPRINT"
                variant="pink"
                className="shadow-lg"
              />
              <span className="hidden sm:inline-block font-hand text-xl text-[#ffbe3b] font-bold rotate-2">
                Real code, zero hypotheticals! ✎
              </span>
            </div>

            {/* Central Giant Headline with Animated Glitch */}
            <div className="relative select-none">
              <h1 className="font-impact text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.88] uppercase tracking-tighter text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                <span className="block hover:text-[#ff1f8f] transition-colors glitch-hover">HACK</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffbe3b] glitch-hover">
                  FOR
                </span>
                <span className="block hover:text-[#00f2fe] transition-colors glitch-hover">GOOD</span>
              </h1>
            </div>

            {/* Sub-headline as per brief */}
            <div className="mt-6 flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="h-0.5 w-8 bg-[#ff1f8f]" />
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[#faf5eb] tracking-wide font-extrabold uppercase">
                Real problems. <span className="text-[#ff6e26]">Real people.</span>{' '}
                <span className="text-[#00f2fe]">Real impact.</span>
              </p>
            </div>

            {/* Body Copy as per brief */}
            <p className="mt-4 text-base sm:text-lg text-zinc-200 max-w-2xl font-body leading-relaxed text-balance">
              <strong className="text-white font-semibold">NEXUS</strong> presents a problem-solving hackathon where developers, designers and changemakers build technology for NGOs. Turn pressing field challenges into deployable, open-source solutions.
            </p>

            {/* CTA Action Cluster */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#challenges"
                onClick={() => audioEngine.playClick('action')}
                className="group px-8 py-4 bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffb800] text-black font-display font-extrabold text-lg tracking-wider rounded-xl uppercase shadow-[0_10px_30px_rgba(255,31,143,0.5)] hover:shadow-[0_15px_40px_rgba(255,104,56,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
              >
                <span>EXPLORE CHALLENGES</span>
                <span className="text-xl transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </a>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => {
                  audioEngine.playClick('action');
                  onOpenRegister();
                }}
                className="px-8 py-4 bg-black/60 hover:bg-white/10 text-white font-display font-bold text-lg tracking-wider rounded-xl uppercase border-2 border-white/30 hover:border-white/60 transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
              >
                <Flame className="w-5 h-5 text-[#ff6838]" />
                <span>JOIN THE HACKATHON</span>
              </button>
            </div>

            {/* Micro stats / Trust badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-300 font-mono-code">
              <div>
                <span className="text-[#ff1f8f] font-bold text-sm block">50+ CHALLENGES</span>
                <span className="text-zinc-400">Direct from NGOs</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-[#ff6e26] font-bold text-sm block">$35,000+ GRANTS</span>
                <span className="text-zinc-400">For Production Pilots</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-[#00f2fe] font-bold text-sm block">100% OPEN SOURCE</span>
                <span className="text-zinc-400">Apache 2.0 / MIT</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Collage Card + Live Countdown */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6">
            
            {/* Live Countdown Clock Badge */}
            <div className="w-full max-w-sm bg-[#0e041c]/90 border-2 border-white/20 rounded-2xl p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <TapeStrip className="-top-3 left-6" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff1f8f] animate-ping" />
                  <span className="font-mono-code font-bold text-xs uppercase text-zinc-200 tracking-wider">
                    COUNTDOWN TO KICKOFF
                  </span>
                </div>
                <span className="text-[11px] font-mono-code text-[#ffbe3b] font-bold">24H SPRINT</span>
              </div>

              {/* Countdown numbers */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <div className="font-impact text-3xl sm:text-4xl text-white tabular-nums">{timeLeft.days}</div>
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider">DAYS</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <div className="font-impact text-3xl sm:text-4xl text-[#ff1f8f] tabular-nums">{timeLeft.hours}</div>
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider">HRS</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <div className="font-impact text-3xl sm:text-4xl text-[#ff6838] tabular-nums">{timeLeft.minutes}</div>
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider">MIN</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <div className="font-impact text-3xl sm:text-4xl text-[#ffbe3b] tabular-nums">{timeLeft.seconds}</div>
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider">SEC</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono-code">
                <span>NOV 14 - 15, 2026</span>
                <span className="text-[#00f2fe]">MIAMI BASECAMP</span>
              </div>
            </div>

            {/* Editorial Polaroid Poster Collage with subtle counter-parallax float */}
            <div
              style={{
                transform: `translate3d(0, ${cardY}px, 0)`,
                willChange: 'transform'
              }}
              className="w-full max-w-sm relative"
            >
              <div className="polaroid rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <TapeStrip className="-top-3 right-8" />
                
                {/* Visual Field Preview with Miami Sunset Filter */}
                <div className="relative aspect-[4/3] bg-gradient-to-tr from-[#19042b] via-[#ff1f8f] to-[#ffbe3b] overflow-hidden rounded-xs flex items-center justify-center p-4">
                  {/* Subtle vector silhouette */}
                  <div className="absolute inset-0 halftone-dark opacity-30" />
                  <PalmSilhouette className="absolute -bottom-6 -right-6 w-36 text-black/60 pointer-events-none" />
                  
                  <div className="relative z-10 text-center text-white">
                    <span className="inline-block px-2.5 py-1 bg-black/70 text-[#ffbe3b] text-[10px] font-mono-code font-bold uppercase rounded-xs mb-2">
                      FIELD DOSSIER #06
                    </span>
                    <h2 className="font-impact text-2xl text-white leading-tight uppercase">
                      TECH MEETS FIELD ACTION
                    </h2>
                    <p className="text-xs text-zinc-100 font-body mt-1 max-w-[220px] mx-auto">
                      Real problems submitted directly by 50+ grassroots organizations.
                    </p>
                  </div>
                </div>

                {/* Polaroid caption & handwritten annotation */}
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="font-mono-code font-bold text-xs text-zinc-800">EXPEDITION MIAMI</div>
                    <div className="text-[10px] text-zinc-500 font-mono-code">NEXUS LABS · SOCIAL IMPACT</div>
                  </div>
                  <BarcodeGraphic code="NGO-2026-FL" />
                </div>
              </div>

              {/* Floating Sticker */}
              <div className="absolute -bottom-4 -left-4 z-20">
                <div className="sticker-badge bg-[#00f2fe] text-black font-impact text-sm px-3.5 py-1 rounded-sm uppercase tracking-wider rotate-[-6deg]">
                  ★ ZERO VAPORWARE
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Prompt */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-8 text-center">
        <a
          href="#challenges"
          onClick={() => audioEngine.playClick('tap')}
          className="inline-flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-200 text-xs font-mono-code uppercase tracking-widest group"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#ff1f8f] group-hover:text-[#ff6838]" />
        </a>
      </div>
    </section>
  );
};
