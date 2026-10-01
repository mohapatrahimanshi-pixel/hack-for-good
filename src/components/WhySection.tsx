import React from 'react';
import { RetroStampBadge, TapeStrip, PalmSilhouette } from './SvgArtwork';

export const WhySection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#090214] text-white overflow-hidden border-y border-white/10">
      {/* Background Sunset Glow & Palm Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#ff1f8f]/15 via-[#ff6838]/15 to-[#ffb800]/10 blur-[140px]" />
        <div className="absolute -bottom-10 right-0 w-80 text-black/50 pointer-events-none">
          <PalmSilhouette className="w-full h-auto" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Provocative Statement */}
          <div className="lg:col-span-6 relative">
            <div className="inline-block mb-4">
              <RetroStampBadge
                text="THE ANTI-HYPOTHETICAL MANIFESTO"
                subtext="NEXUS CODE ORDINANCE"
                variant="orange"
              />
            </div>

            <h2 className="font-impact text-6xl sm:text-7xl md:text-8xl lg:text-8xl uppercase tracking-tighter leading-[0.88] text-white">
              <span className="block text-zinc-400">DON&apos;T JUST</span>
              <span className="block text-zinc-400">BUILD</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff0077] via-[#ff6838] to-[#ffb800] glitch-hover">
                ANOTHER APP.
              </span>
            </h2>

            <div className="mt-8 relative max-w-sm hidden sm:block">
              <div className="polaroid transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <TapeStrip className="-top-3 left-4" />
                <div className="h-44 bg-gradient-to-tr from-[#160228] via-[#2d054f] to-[#ff1f8f] rounded-xs flex flex-col justify-end p-4 relative overflow-hidden">
                  <div className="absolute inset-0 halftone-dots opacity-20" />
                  <span className="relative z-10 font-mono-code text-[10px] text-[#ffbe3b] font-bold uppercase tracking-wider">
                    FIELD DISPATCH · MIAMI
                  </span>
                  <p className="relative z-10 font-display text-xl text-white uppercase leading-tight mt-1">
                    REAL COMMUNITY IMPACT &gt; TOY DEMOS
                  </p>
                </div>
                <div className="mt-2 text-right">
                  <span className="font-hand font-bold text-xs text-zinc-700">Code deployed on day 2 ↗</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Solution & Concrete Impact Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            <div>
              <h3 className="font-impact text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.92] text-white mb-6">
                <span className="block text-white">BUILD SOMETHING</span>
                <span className="block text-[#00f2fe]">PEOPLE CAN USE.</span>
              </h3>

              <div className="h-1 w-20 bg-gradient-to-r from-[#ff1f8f] to-[#ff6838] mb-6" />

              <p className="text-lg sm:text-xl text-zinc-200 font-body leading-relaxed max-w-xl text-balance">
                Hack for Good connects student innovators with real NGO challenges. Instead of solving hypothetical problems, participants build practical technology for organizations working directly with communities.
              </p>

              <p className="mt-4 text-sm text-zinc-400 font-body leading-relaxed max-w-xl">
                Every prompt is authored by directors, clinical workers, and environmental stewards who will pilot the winning code in live operations within 60 days of the hackathon.
              </p>
            </div>

            {/* 3 Impact Statistics — Prominent & Editorial */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6">
              
              {/* Stat 1 */}
              <div className="flex flex-col">
                <div className="font-impact text-5xl sm:text-6xl lg:text-7xl text-[#ff1f8f] leading-none tabular-nums tracking-tight">
                  50+
                </div>
                <div className="mt-2 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-zinc-300">
                  NGO Challenges
                </div>
                <div className="text-[11px] text-zinc-500 font-mono-code mt-0.5 hidden sm:block">
                  Verified by directors
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <div className="font-impact text-5xl sm:text-6xl lg:text-7xl text-[#ff6838] leading-none tabular-nums tracking-tight">
                  24H
                </div>
                <div className="mt-2 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-zinc-300">
                  Build & Solve
                </div>
                <div className="text-[11px] text-zinc-500 font-mono-code mt-0.5 hidden sm:block">
                  Intensive sprint
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <div className="font-impact text-5xl sm:text-6xl lg:text-7xl text-[#ffbe3b] leading-none tracking-tight">
                  ∞
                </div>
                <div className="mt-2 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-zinc-300">
                  Possibilities for Impact
                </div>
                <div className="text-[11px] text-zinc-500 font-mono-code mt-0.5 hidden sm:block">
                  Open-source deploy
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
