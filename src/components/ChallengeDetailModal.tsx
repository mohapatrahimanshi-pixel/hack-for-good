import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, MapPin, Building, ArrowRight, ShieldCheck, Cpu, Target } from 'lucide-react';
import { Challenge } from '../types';
import { RetroStampBadge, BarcodeGraphic, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

interface ChallengeDetailModalProps {
  challenge: Challenge | null;
  onClose: () => void;
  onSelectTrackForRegister: (challengeId: string) => void;
}

export const ChallengeDetailModal: React.FC<ChallengeDetailModalProps> = ({
  challenge,
  onClose,
  onSelectTrackForRegister
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (challenge) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [challenge, onClose]);

  if (!challenge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#120422] border-2 border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Strip with Sunset Gradient */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${challenge.bgGradient} text-black relative`}>
          <TapeStrip className="-top-3 right-16" />

          {/* Close button */}
          <button
            type="button"
            onClick={() => {
              audioEngine.playClick('tap');
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-impact text-4xl sm:text-5xl text-black">
              {challenge.number}
            </span>
            <span className="h-6 w-0.5 bg-black/30" />
            <span className="font-mono-code font-bold text-xs uppercase tracking-widest bg-black/20 px-2.5 py-1 rounded-sm">
              {challenge.category}
            </span>
          </div>

          <h3 className="font-impact text-2xl sm:text-3xl uppercase tracking-tight text-black max-w-xl">
            {challenge.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono-code font-semibold text-black/90">
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4" />
              <span>{challenge.ngoName}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{challenge.ngoLocation}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-zinc-200 font-body max-h-[70vh] overflow-y-auto">
          
          {/* Summary Banner */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h4 className="font-mono-code text-xs uppercase text-[#ffbe3b] font-bold tracking-wider mb-1">
              CHALLENGE MISSION
            </h4>
            <p className="text-base font-medium text-white">{challenge.summary}</p>
          </div>

          {/* Detailed Problem Statement */}
          <div>
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-[#ff1f8f]">■</span> The Operational Problem
            </h4>
            <p className="text-sm leading-relaxed text-zinc-300 bg-[#090114]/60 p-4 rounded-xl border border-white/5">
              {challenge.problemStatement}
            </p>
          </div>

          {/* Target Beneficiaries */}
          <div>
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#ff6e26]" /> Target Beneficiaries
            </h4>
            <p className="text-sm text-zinc-300 font-mono-code bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
              {challenge.targetBeneficiaries}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00f2fe]" /> Expected Deliverables for 24H Sprint
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {challenge.keyDeliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm bg-white/5 p-3 rounded-lg border border-white/10 text-zinc-200"
                >
                  <CheckCircle className="w-4 h-4 text-[#ff1f8f] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Stack */}
          <div>
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#ffbe3b]" /> Suggested Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono-code">
              {challenge.suggestedStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-md text-zinc-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metric & Barcode */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono-code text-zinc-400">PROJECTED IMPACT POTENTIAL</div>
              <div className="font-impact text-xl text-[#00f2fe] tracking-wide">{challenge.impactMetric}</div>
            </div>
            <BarcodeGraphic code={`NGO-TRACK-${challenge.number}`} />
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#0a0214] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <RetroStampBadge
            text={challenge.stickerText}
            subtext="NEXUS SOCIAL LABS"
            variant="gold"
          />

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                audioEngine.playClick('tap');
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-mono-code font-bold uppercase text-zinc-400 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-colors w-full sm:w-auto"
            >
              Close Dossier
            </button>

            <button
              type="button"
              onClick={() => {
                audioEngine.playClick('action');
                onSelectTrackForRegister(challenge.id);
                onClose();
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffb800] text-black font-display font-extrabold text-sm uppercase rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto cursor-pointer"
            >
              <span>SOLVE THIS CHALLENGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
