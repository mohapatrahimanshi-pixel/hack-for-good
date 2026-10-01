import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Calendar, Clock, Check, Sparkles } from 'lucide-react';
import { TIMELINE_NODES } from '../data/hackathonData';
import { RetroStampBadge, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

export const TimelineSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('step-4');

  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-[#0c031a] text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff6838]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#ff6838] mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff6838] rounded-full animate-pulse" />
              <span>THE EXPEDITION SCHEDULE</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#00f2fe]">ROAD TO PRODUCTION</span>
            </div>

            <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffbe3b]">TIMELINE</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <RetroStampBadge text="MIAMI LOCAL TIME" subtext="ALL SESSIONS SYNCED" variant="gold" />
            <span className="hidden sm:inline-block font-hand text-xl text-[#00f2fe] font-bold rotate-[-3deg]">
              Save the dates! ✎
            </span>
          </div>
        </div>

        {/* Horizontal Scrollable Timeline Wrapper */}
        <div className="relative overflow-x-auto pb-8 scrollbar-none">
          <div className="min-w-[950px] flex items-stretch gap-4 relative pt-4">
            
            {/* Connecting Rail Line */}
            <div className="absolute top-14 left-8 right-8 h-1 bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffbe3b] opacity-40 z-0" />

            {TIMELINE_NODES.map((node, idx) => {
              const isSelected = selectedNode === node.id;
              const isLast = idx === TIMELINE_NODES.length - 1;

              return (
                <div key={node.id} className="relative z-10 flex-1 flex flex-col items-center min-w-[130px]">
                  
                  {/* Status Indicator Pip / Sticker */}
                  <button
                    type="button"
                    onClick={() => {
                      audioEngine.playClick('tap');
                      setSelectedNode(node.id);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono-code text-xs font-bold transition-all duration-200 cursor-pointer shadow-lg ${
                      node.status === 'completed'
                        ? 'bg-emerald-500 text-black border-2 border-white'
                        : node.status === 'active'
                        ? 'bg-[#ff1f8f] text-white border-2 border-white scale-125 ring-4 ring-[#ff1f8f]/40 animate-pulse'
                        : 'bg-[#1b082e] text-zinc-400 border-2 border-white/20 hover:border-white/50'
                    }`}
                  >
                    {node.status === 'completed' ? (
                      <Check className="w-5 h-5 stroke-[3]" />
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </button>

                  {/* Stage Label & Date */}
                  <div className="mt-4 text-center">
                    <span className="font-mono-code text-[10px] uppercase font-bold text-[#ffbe3b] block">
                      {node.phase}
                    </span>
                    <h3 className="font-impact text-base uppercase text-white mt-1 leading-tight tracking-wide">
                      {node.title}
                    </h3>
                    <div className="text-[11px] font-mono-code text-zinc-400 mt-1">
                      {node.date}
                    </div>
                  </div>

                  {/* Sticker tag */}
                  <div className="mt-3">
                    <span
                      className={`text-[9px] font-mono-code uppercase font-bold px-2 py-0.5 rounded-xs tracking-wider ${
                        node.status === 'active'
                          ? 'bg-[#ff1f8f] text-black shadow-sm'
                          : 'bg-white/10 text-zinc-300'
                      }`}
                    >
                      {node.tag}
                    </span>
                  </div>

                  {/* Playful Arrow to next milestone */}
                  {!isLast && (
                    <div className="hidden lg:block absolute -right-2 top-4 text-[#ff6838] opacity-60 font-hand text-lg font-bold">
                      →
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* Selected Milestone Detail Banner */}
        {(() => {
          const activeNode = TIMELINE_NODES.find((n) => n.id === selectedNode) || TIMELINE_NODES[3];
          return (
            <div className="mt-10 p-6 sm:p-8 bg-[#150624] border-2 border-white/15 rounded-2xl relative shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <TapeStrip className="-top-3 left-10" />

              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-impact text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f8f] to-[#ff6838] uppercase">
                    {activeNode.title}
                  </span>
                  <span className="font-mono-code text-xs text-[#00f2fe] px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-sm">
                    {activeNode.phase}
                  </span>
                </div>

                <p className="text-zinc-200 font-body text-sm sm:text-base leading-relaxed">
                  {activeNode.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono-code text-zinc-400 pt-2">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Calendar className="w-4 h-4 text-[#ff1f8f]" />
                    <span>{activeNode.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Clock className="w-4 h-4 text-[#ff6838]" />
                    <span>{activeNode.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                <RetroStampBadge
                  text={activeNode.status === 'completed' ? 'CHECKED MILESTONE' : 'UPCOMING STAGE'}
                  subtext="OFFICIAL TIMETABLE"
                  variant="pink"
                />
                <span className="font-hand text-sm text-[#ffbe3b] font-bold">
                  All dates confirmed by NEXUS ★
                </span>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
