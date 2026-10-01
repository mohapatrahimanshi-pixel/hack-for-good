import React, { useState } from 'react';
import { Leaf, BookOpen, Heart, Users, Quote, CheckCircle, ArrowUpRight } from 'lucide-react';
import { IMPACT_CATEGORIES } from '../data/hackathonData';
import { RetroStampBadge, BarcodeGraphic, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

export const ImpactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Leaf, BookOpen, Heart, Users];

  return (
    <section id="impact" className="relative py-24 sm:py-32 bg-[#090216] text-white overflow-hidden border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 halftone-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-gradient-to-b from-[#ff1f8f]/10 to-[#00f2fe]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#00f2fe] mb-3">
            <span className="w-2.5 h-2.5 bg-[#00f2fe] rounded-full" />
            <span>MEASURABLE OUTCOMES</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#ff9e79]">HISTORICAL CASE STUDIES</span>
          </div>

          <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-tight">
            CODE CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#00f2fe]">DO MORE.</span>
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-zinc-300 font-body leading-relaxed max-w-2xl text-balance">
            When technology meets the right problem, even a small solution can create meaningful change.
          </p>
        </div>

        {/* 4 Large Visual Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {IMPACT_CATEGORIES.map((item, index) => {
            const IconComp = icons[index % icons.length];
            const gradients = [
              'from-[#00b4d8] to-[#00f0d0]',
              'from-[#ff1f8f] to-[#ff6838]',
              'from-[#ff0077] to-[#ff5252]',
              'from-[#ff6e26] to-[#ffbe3b]'
            ];

            return (
              <div
                key={item.id}
                className="group relative bg-[#130522] border-2 border-white/10 hover:border-white/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                <TapeStrip className="-top-3 right-10" />

                {/* Top header of panel */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-impact text-sm sm:text-base tracking-wider text-black bg-gradient-to-r from-white to-zinc-200 px-3 py-1 rounded-sm uppercase">
                      {item.category}
                    </span>
                    <IconComp className="w-6 h-6 text-[#ffbe3b] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-impact text-3xl sm:text-4xl text-white uppercase tracking-tight mt-3 mb-3 leading-tight">
                    {item.heading}
                  </h3>

                  <p className="text-zinc-300 font-body text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metric Spotlight & Quote */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-5">
                  
                  {/* Real Metric */}
                  <div className="flex items-baseline gap-3">
                    <div className="font-impact text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffbe3b] tabular-nums">
                      {item.metric}
                    </div>
                    <div className="text-xs font-mono-code text-zinc-300 uppercase font-semibold">
                      {item.metricLabel}
                    </div>
                  </div>

                  {/* NGO Testimonial Quote */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 relative">
                    <Quote className="w-5 h-5 text-[#ff1f8f] mb-1 opacity-70" />
                    <p className="text-xs sm:text-sm italic text-zinc-200 font-body leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="mt-2 text-[11px] font-mono-code text-zinc-400 font-medium">
                      — {item.quoteAuthor} · <span className="text-[#00f2fe]">{item.ngoPartner}</span>
                    </div>
                  </div>

                  {/* Bottom Barcode / Identifier */}
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-zinc-500 pt-2 border-t border-white/5">
                    <span>DEPLOYED IN FIELD</span>
                    <BarcodeGraphic code={`IMPACT-${item.id.toUpperCase()}`} className="scale-75 origin-right" />
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
