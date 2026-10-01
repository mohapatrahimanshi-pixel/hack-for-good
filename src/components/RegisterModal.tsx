import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Ticket, ArrowRight, Sparkles, AlertCircle, Share2, Copy } from 'lucide-react';
import { CHALLENGES } from '../data/hackathonData';
import { RegistrationFormData } from '../types';
import { RetroStampBadge, BarcodeGraphic, TapeStrip } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrackId?: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  preselectedTrackId
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    role: 'Frontend Engineer',
    experienceLevel: 'Undergraduate / Student',
    teamStatus: 'need_team',
    teamName: '',
    preferredChallengeId: preselectedTrackId || 'education',
    githubUrl: '',
    portfolioUrl: '',
    motivation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedTrackId) {
      setFormData((prev) => ({ ...prev, preferredChallengeId: preselectedTrackId }));
    }
  }, [preselectedTrackId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (formData.teamStatus === 'have_team' && !formData.teamName?.trim()) {
      newErrors.teamName = 'Team name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      audioEngine.playClick('action');
      return;
    }

    audioEngine.playClick('success');
    const randomTicket = `NX-${Math.floor(1000 + Math.random() * 9000)}-${formData.preferredChallengeId.toUpperCase().slice(0, 3)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(`I'm registered for NEXUS: HACK FOR GOOD 2026! Ticket ID: ${ticketId}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedChallenge = CHALLENGES.find((c) => c.id === formData.preferredChallengeId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#120422] border-2 border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffb800] text-black relative">
          <TapeStrip className="-top-3 right-12" />

          <button
            type="button"
            onClick={() => {
              audioEngine.playClick('tap');
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono-code uppercase font-bold tracking-widest bg-black text-[#ffbe3b] px-2.5 py-1 rounded-sm w-fit mb-2">
            <span>OFFICIAL REGISTRATION</span>
          </div>

          <h3 className="font-impact text-3xl sm:text-4xl uppercase text-black leading-tight">
            JOIN HACK FOR GOOD 2026
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-black/80 font-mono-code mt-1">
            NEXUS SOCIAL IMPACT SPRINT · MIAMI BASECAMP & GLOBAL VIRTUAL
          </p>
        </div>

        {/* Form or Ticket Confirmation */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1f8f] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#ff5252] mt-1 font-mono-code">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@university.edu"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1f8f] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#ff5252] mt-1 font-mono-code">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Role & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1.5">
                    Primary Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#1b082e] border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff1f8f] transition-colors"
                  >
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                    <option value="UI/UX Product Designer">UI/UX Product Designer</option>
                    <option value="Data / AI Specialist">Data / AI Specialist</option>
                    <option value="NGO / Social Impact Advocate">NGO / Social Impact Advocate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#1b082e] border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff1f8f] transition-colors"
                  >
                    <option value="Beginner / First Hackathon">Beginner / First Hackathon</option>
                    <option value="Undergraduate / Student">Undergraduate / Student</option>
                    <option value="Bootcamp / Self-Taught">Bootcamp / Self-Taught</option>
                    <option value="Early Career Professional">Early Career Professional</option>
                  </select>
                </div>
              </div>

              {/* Preferred NGO Track */}
              <div>
                <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1.5">
                  Preferred NGO Track
                </label>
                <select
                  value={formData.preferredChallengeId}
                  onChange={(e) => setFormData({ ...formData, preferredChallengeId: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#1b082e] border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff1f8f] transition-colors"
                >
                  {CHALLENGES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.number} — {c.category}: {c.ngoName}
                    </option>
                  ))}
                </select>
                {selectedChallenge && (
                  <p className="text-xs text-[#ffbe3b] font-mono-code mt-1.5">
                    Selected: {selectedChallenge.title}
                  </p>
                )}
              </div>

              {/* Team Status Segmented Selector */}
              <div>
                <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-2">
                  Team Formation Status
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'need_team', label: 'Looking for a Team' },
                    { id: 'solo', label: 'Hacking Solo' },
                    { id: 'have_team', label: 'I Have a Team' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, teamStatus: item.id as any })}
                      className={`p-2.5 text-xs font-mono-code uppercase font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                        formData.teamStatus === item.id
                          ? 'bg-[#ff1f8f]/20 border-[#ff1f8f] text-white shadow-sm'
                          : 'bg-black/30 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {formData.teamStatus === 'have_team' && (
                  <div className="mt-3">
                    <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="e.g. Sunset Code Raiders"
                      className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1f8f]"
                    />
                    {errors.teamName && (
                      <p className="text-xs text-[#ff5252] mt-1 font-mono-code">{errors.teamName}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-xs font-mono-code uppercase text-zinc-300 font-bold mb-1.5">
                  Why do you want to build for NGOs? (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Tell us what social causes inspire you..."
                  className="w-full px-4 py-2.5 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1f8f] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#ff1f8f] via-[#ff6838] to-[#ffb800] text-black font-display font-extrabold text-lg uppercase rounded-xl shadow-[0_10px_25px_rgba(255,31,143,0.4)] hover:shadow-[0_15px_35px_rgba(255,104,56,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>COMPLETE REGISTRATION</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-[11px] font-mono-code text-zinc-400 mt-2">
                  Free entry · 100% Open Source · All experience levels welcome
                </p>
              </div>

            </form>
          ) : (
            /* Ticket Confirmation Boarding Pass */
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-impact text-3xl uppercase text-white">
                  YOU&apos;RE IN THE SPRINT!
                </h4>
                <p className="text-sm text-zinc-300 font-body mt-1">
                  Registration confirmed. Your hacker boarding pass has been generated.
                </p>
              </div>

              {/* Retro Boarding Pass Card */}
              <div className="bg-[#18072c] border-2 border-white/20 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
                <TapeStrip className="-top-3 left-8" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono-code text-[10px] text-[#ffbe3b] uppercase font-bold tracking-wider">
                      HACKATHON ADMISSION PASS
                    </span>
                    <h5 className="font-impact text-2xl text-white uppercase">{formData.fullName}</h5>
                    <div className="text-xs font-mono-code text-zinc-400">{formData.email}</div>
                  </div>
                  <RetroStampBadge text="CONFIRMED ENTRY" subtext="2026 EDITION" variant="pink" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-b border-white/10 text-xs font-mono-code">
                  <div>
                    <span className="text-zinc-500 uppercase block">ROLE</span>
                    <span className="text-white font-bold">{formData.role}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase block">TEAM STATUS</span>
                    <span className="text-[#00f2fe] font-bold">
                      {formData.teamStatus === 'have_team'
                        ? formData.teamName || 'Team'
                        : formData.teamStatus === 'solo'
                        ? 'Solo'
                        : 'Matching Channel'}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase block">DATES</span>
                    <span className="text-[#ff9e79] font-bold">NOV 14 - 15, 2026</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-zinc-500 text-[10px] font-mono-code uppercase block">ASSIGNED TRACK</span>
                    <span className="font-impact text-lg text-[#ffbe3b] uppercase">
                      {selectedChallenge?.category || 'TRACK 01'}
                    </span>
                  </div>
                  <BarcodeGraphic code={ticketId} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCopyTicket}
                  className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-mono-code text-xs font-bold uppercase rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'TICKET COPIED!' : 'COPY CONFIRMATION'}</span>
                </button>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gradient-to-r from-[#ff1f8f] to-[#ff6838] text-black font-display font-extrabold text-sm uppercase rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>JOIN HACKATHON DISCORD</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-mono-code text-zinc-400 hover:text-white uppercase underline"
                >
                  Return to Website
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
