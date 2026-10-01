import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/hackathonData';
import { RetroStampBadge, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    audioEngine.playClick('tap');
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#080212] text-white overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 halftone-dark opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#00f2fe] mb-3">
              <span className="w-2.5 h-2.5 bg-[#00f2fe] rounded-full" />
              <span>COMMUNITY GUIDELINES</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#ffbe3b]">FREQUENTLY ASKED</span>
            </div>

            <h2 className="font-impact text-5xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              QUESTIONS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] to-[#ff6838]">ANSWERS</span>
            </h2>
          </div>

          <RetroStampBadge text="HACKATHON PROTOCOL" subtext="RULES & LOGISTICS" variant="gold" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#120420] border-2 border-white/10 hover:border-white/20 rounded-2xl transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-impact text-xl sm:text-2xl text-white uppercase tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#ff1f8f] text-black border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-300 font-body text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discord / Support Strip */}
        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#ff1f8f]" />
            <span className="text-sm font-body text-zinc-300">
              Have a custom inquiry or special NGO proposal?
            </span>
          </div>
          <a
            href="mailto:hackforgood@nexus-collective.org"
            onClick={() => audioEngine.playClick('tap')}
            className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#00f2fe] hover:underline"
          >
            TALK TO ORGANIZERS →
          </a>
        </div>

      </div>
    </section>
  );
};
