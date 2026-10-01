import React from 'react';
import { ArrowDown, ArrowRight, Compass, Users, Code, CheckCircle, Award } from 'lucide-react';
import { HOW_IT_WORKS_STAGES } from '../data/hackathonData';
import { RetroStampBadge, TapeStrip } from './SvgArtwork';

export const HowItWorksSection: React.FC = () => {
  const icons = [Compass, Users, Code, CheckCircle, Award];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#0c0318] text-white overflow-hidden">
      {/* Background radial sunset blooms */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-[#ff1f8f]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] bg-[#ff6838]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#ffbe3b] mb-3">
              <span className="w-2.5 h-2.5 bg-[#ffbe3b] rounded-full" />
              <span>THE 24H BLUEPRINT</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#ff1f8f]">5 STAGES TO PRODUCTION</span>
            </div>

            <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffbe3b]">WORKS</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-300 font-body text-base leading-relaxed">
              We ditched generic pitch decks. Every stage is engineered to guarantee your team ships usable, verified software directly into non-profit hands.
            </p>
          </div>
        </div>

        {/* 5 Stages Grid with Oversized Numbers & Playful Directional Arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
          
          {HOW_IT_WORKS_STAGES.map((stage, index) => {
            const IconComponent = icons[index % icons.length];
            const isLast = index === HOW_IT_WORKS_STAGES.length - 1;

            return (
              <div key={stage.number} className="relative flex flex-col">
                {/* Stage Card */}
                <div className="group h-full flex flex-col justify-between bg-[#150624] border-2 border-white/10 hover:border-[#ff1f8f]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,31,143,0.2)] relative overflow-hidden">
                  
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-code text-[10px] font-bold uppercase tracking-wider text-[#ffbe3b] bg-white/5 px-2 py-0.5 rounded-xs">
                      {stage.tag}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#ff6838] opacity-80 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Oversized Number & Stage Title */}
                  <div>
                    <div className="font-impact text-6xl sm:text-7xl text-white/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-[#ff1f8f] group-hover:to-[#ffb800] transition-all duration-300 leading-none mb-1">
                      {stage.number}
                    </div>

                    <h3 className="font-impact text-2xl text-white uppercase tracking-tight leading-tight">
                      {stage.title}
                    </h3>

                    <h4 className="font-display text-sm text-[#00f2fe] uppercase tracking-wide mt-1">
                      {stage.subtitle}
                    </h4>

                    <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-body leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Card bottom bar */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-zinc-500">
                    <span>MIAMI SPRINTS</span>
                    <span className="text-[#ff1f8f]">STAGE {stage.number}</span>
                  </div>
                </div>

                {/* Playful Down/Right Arrow for Flow between stages */}
                {!isLast && (
                  <div className="my-2 md:my-0 md:absolute md:-right-4 md:top-1/2 md:-translate-y-1/2 z-20 flex justify-center items-center pointer-events-none">
                    {/* Vertical arrow on mobile, horizontal arrow on desktop */}
                    <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#ff1f8f] text-black shadow-md border-2 border-[#0c0318]">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div className="flex md:hidden items-center justify-center w-7 h-7 rounded-full bg-[#ff1f8f] text-black shadow-md my-1">
                      <ArrowDown className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Bottom Banner with Mentor Guarantee */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-[#ff1f8f]/20 via-[#ff6838]/15 to-[#ffbe3b]/10 border-2 border-white/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <RetroStampBadge text="LIVE FIELD MENTORS" subtext="24H DEDICATED SESSIONS" variant="pink" />
            <div>
              <h4 className="font-impact text-xl uppercase text-white">NGO DIRECTORS ON STANDBY</h4>
              <p className="text-xs text-zinc-300 font-body">Get immediate feedback from non-profit teams testing your prototypes in real time.</p>
            </div>
          </div>
          <div className="font-hand text-xl text-[#ffbe3b] font-bold rotate-[-2deg] whitespace-nowrap">
            Never build in the dark! ★
          </div>
        </div>

      </div>
    </section>
  );
};
