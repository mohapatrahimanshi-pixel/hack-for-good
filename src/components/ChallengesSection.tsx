import React, { useState, useMemo } from 'react';
import { ArrowRight, Search, Sparkles, Filter, CheckCircle2, Bookmark } from 'lucide-react';
import { CHALLENGES } from '../data/hackathonData';
import { Challenge } from '../types';
import { RetroStampBadge, BarcodeGraphic, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

interface ChallengesSectionProps {
  onOpenChallengeDetail: (challenge: Challenge) => void;
}

export const ChallengesSection: React.FC<ChallengesSectionProps> = ({ onOpenChallengeDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'EDUCATION', 'HEALTHCARE', 'FUNDRAISING', 'VOLUNTEER MANAGEMENT', 'WOMEN & CHILD SAFETY', 'ENVIRONMENT'];

  const filteredChallenges = useMemo(() => {
    return CHALLENGES.filter((c) => {
      const matchesCategory = selectedCategory === 'ALL' || c.category === selectedCategory;
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.ngoName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="challenges" className="relative py-24 sm:py-32 bg-[#0c0319] overflow-hidden">
      {/* Background Ambience & Halftone Matrix */}
      <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#ff1f8f]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 rounded-full bg-[#ff6838]/20 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-mono-code uppercase tracking-widest text-[#ff1f8f] mb-3">
            <span className="w-2.5 h-2.5 bg-[#ff1f8f] rounded-full" />
            <span>COMMUNITY × NGO FIELD TRACKS</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#ffbe3b]">06 ACTIVE CHALLENGES</span>
          </div>

          <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[0.92]">
            THE PROBLEMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffbe3b]">ARE REAL.</span>
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-zinc-300 font-body leading-relaxed max-w-2xl text-balance">
            NGOs work on complex problems every day. Your job is to turn those problems into scalable technology.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
          {/* Category Filter Pills (Functional Interactive Segmented Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  audioEngine.playClick('tap');
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono-code font-bold uppercase rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#ff1f8f] to-[#ff6e26] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] px-2">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search challenges or NGOs..."
              className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/15 rounded-xl text-xs font-mono-code text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1f8f] transition-colors"
            />
          </div>
        </div>

        {/* Challenge Cards Grid — Editorial Poster Compositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`group relative flex flex-col justify-between bg-[#150624] border-2 border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(255,31,143,0.25)] ${challenge.rotation}`}
            >
              {/* Masking tape decorative element */}
              <TapeStrip className="-top-3 right-8" />

              {/* Card Poster Top Banner with Vibrant Gradient & Oversized Number */}
              <div className={`relative p-6 bg-gradient-to-br ${challenge.bgGradient} text-black overflow-hidden`}>
                <div className="flex items-start justify-between relative z-10">
                  <div className="font-impact text-6xl sm:text-7xl leading-none text-black/90 tracking-tighter">
                    {challenge.number}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest bg-black text-[#ffbe3b] px-2 py-0.5 rounded-xs">
                      {challenge.category}
                    </span>
                    <span className="font-mono-code text-[9px] text-black/70 mt-1 uppercase">
                      {challenge.ngoName}
                    </span>
                  </div>
                </div>

                <div className="mt-4 relative z-10">
                  <h3 className="font-impact text-2xl uppercase tracking-tight text-black leading-tight line-clamp-2">
                    {challenge.title}
                  </h3>
                </div>

                {/* Subtle decorative dot pattern */}
                <div className="absolute inset-0 halftone-dark opacity-15 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#150624] relative">
                <div>
                  {/* Summary as specified in brief */}
                  <p className="text-zinc-300 text-sm font-body leading-relaxed mb-6">
                    {challenge.summary}
                  </p>

                  {/* Impact Metric & NGO Location */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[#00f2fe] font-bold">{challenge.impactMetric}</span>
                    <span className="text-zinc-500">{challenge.ngoLocation}</span>
                  </div>
                </div>

                {/* Action CTA: SOLVE THIS → */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <RetroStampBadge
                    text={challenge.stickerText}
                    subtext="NGO VALIDATED"
                    variant="pink"
                    className="text-[10px] scale-90 -ml-2"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      audioEngine.playClick('action');
                      onOpenChallengeDetail(challenge);
                    }}
                    className="group/btn relative px-5 py-2.5 bg-white text-black font-display font-extrabold text-sm uppercase rounded-lg hover:bg-gradient-to-r hover:from-[#ff1f8f] hover:to-[#ff6e26] hover:text-white transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
                  >
                    <span>SOLVE THIS</span>
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* Bottom decorative barcode strip */}
              <div className="px-6 py-2 bg-black/60 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono-code text-zinc-500 uppercase">
                  NEXUS IMPACT ENGINE · MISSION #{challenge.number}
                </span>
                <BarcodeGraphic code={`TRACK-${challenge.number}`} className="scale-75 origin-right" />
              </div>
            </div>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="font-display text-2xl text-zinc-400">NO CHALLENGES FOUND MATCHING SEARCH</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#ff1f8f] text-black font-mono-code text-xs uppercase font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
