import React from 'react';

export const PalmSilhouette: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 400 600"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    {/* Realistic curved palm trunk */}
    <path
      d="M185 600 C185 500, 192 380, 188 280 C185 210, 172 150, 168 85 C174 85, 180 150, 196 230 C208 320, 214 450, 216 600 Z"
      opacity="0.95"
    />
    {/* Trunk texture rings */}
    <path d="M186 520 Q198 522 214 521" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none" />
    <path d="M187 450 Q199 452 212 451" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none" />
    <path d="M188 380 Q198 382 208 381" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none" />
    <path d="M186 310 Q194 312 202 311" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none" />
    <path d="M180 240 Q188 242 195 241" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none" />
    
    {/* Left arching palm fronds */}
    <path
      d="M168 85 C130 65, 80 75, 10 135 C35 125, 75 110, 105 105 C70 120, 30 150, 5 190 C35 170, 80 145, 115 130 C75 160, 35 210, 15 260 C45 230, 95 190, 130 160 C95 200, 65 260, 55 315 C85 270, 125 215, 155 175 C160 145, 165 115, 168 85 Z"
    />
    {/* Far left drooping frond */}
    <path
      d="M168 85 C110 50, 40 70, 0 110 C25 98, 65 92, 105 92 C55 105, 20 135, 2 170 C28 145, 72 125, 125 112 Z"
    />
    {/* Top center upward fronds */}
    <path
      d="M168 85 C160 30, 180 0, 210 -20 C205 15, 195 45, 185 75 C205 35, 235 5, 270 -10 C250 25, 225 60, 195 85 Z"
    />
    {/* Right arching palm fronds */}
    <path
      d="M168 85 C220 55, 290 60, 370 110 C335 105, 285 98, 240 102 C290 120, 345 150, 395 195 C350 170, 295 145, 245 135 C295 165, 350 220, 385 280 C340 240, 285 195, 230 170 C275 210, 320 275, 335 340 C300 285, 250 230, 205 185 C185 150, 175 115, 168 85 Z"
    />
    {/* Hanging coconuts / center bunch */}
    <circle cx="165" cy="98" r="8" opacity="0.9" />
    <circle cx="178" cy="95" r="9" opacity="0.9" />
    <circle cx="172" cy="107" r="7" opacity="0.85" />
  </svg>
);

export const CitySkylineSilhouette: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1200 240"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {/* Background silhouettes with lower opacity */}
    <path
      d="M0 240 L0 160 L40 160 L40 130 L70 130 L70 160 L110 160 L110 110 L125 90 L140 110 L140 160 L180 160 L180 140 L210 140 L210 170 L260 170 L260 100 L300 100 L300 170 L350 170 L350 120 L370 80 L390 120 L390 170 L460 170 L460 145 L500 145 L500 170 L560 170 L560 95 L610 95 L610 170 L670 170 L670 130 L710 130 L710 170 L780 170 L780 85 L810 60 L840 85 L840 170 L910 170 L910 120 L960 120 L960 170 L1020 170 L1020 105 L1060 105 L1060 170 L1120 170 L1120 135 L1160 135 L1160 170 L1200 170 L1200 240 Z"
      opacity="0.35"
    />
    {/* Foreground towers with sharp spires */}
    <path
      d="M0 240 L0 180 L25 180 L25 150 L55 150 L55 185 L90 185 L90 125 L105 125 L105 75 L110 50 L115 75 L115 125 L135 125 L135 190 L170 190 L170 160 L205 160 L205 195 L240 195 L240 135 L285 135 L285 195 L330 195 L330 110 L345 80 L360 110 L360 195 L420 195 L420 155 L470 155 L470 195 L520 195 L520 100 L545 100 L545 60 L550 40 L555 60 L555 100 L580 100 L580 195 L640 195 L640 140 L690 140 L690 195 L740 195 L740 115 L770 90 L800 115 L800 195 L870 195 L870 150 L920 150 L920 195 L975 195 L975 105 L1000 80 L1025 105 L1025 195 L1080 195 L1080 160 L1130 160 L1130 195 L1200 195 L1200 240 Z"
      opacity="0.85"
    />
  </svg>
);

export const RetroSun: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Outer glow rings */}
    <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-t from-[#ff1f8f]/30 via-[#ff6e26]/20 to-transparent blur-3xl pointer-events-none animate-pulse" />
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-t from-[#ff0077] via-[#ff6838] to-[#ffbe3b] shadow-[0_0_80px_rgba(255,104,56,0.6)] relative overflow-hidden">
      {/* Sun horizon cuts / synthwave retro lines */}
      <div className="absolute inset-0 flex flex-col justify-end gap-1.5 pb-2">
        <div className="w-full h-1 bg-[#0b0217]/80" />
        <div className="w-full h-1.5 bg-[#0b0217]/85" />
        <div className="w-full h-2 bg-[#0b0217]/90" />
        <div className="w-full h-3 bg-[#0b0217]/95" />
        <div className="w-full h-4.5 bg-[#0b0217]" />
        <div className="w-full h-7 bg-[#0b0217]" />
      </div>
    </div>
  </div>
);

export const RetroStampBadge: React.FC<{
  text?: string;
  subtext?: string;
  className?: string;
  variant?: 'pink' | 'orange' | 'gold' | 'cyan';
}> = ({
  text = 'VERIFIED IMPACT',
  subtext = 'NEXUS NGO 2026',
  className = '',
  variant = 'pink'
}) => {
  const borderColors = {
    pink: 'border-[#ff1f8f] text-[#ff1f8f]',
    orange: 'border-[#ff6e26] text-[#ff6e26]',
    gold: 'border-[#ffbe3b] text-[#ffbe3b]',
    cyan: 'border-[#00f2fe] text-[#00f2fe]'
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center border-2 border-dashed px-3 py-1.5 font-display tracking-widest uppercase text-xs rotate-[-3deg] select-none bg-black/40 backdrop-blur-xs ${borderColors[variant]} ${className}`}
    >
      <span className="font-extrabold text-[13px] leading-tight">{text}</span>
      <span className="text-[9px] tracking-widest font-mono-code opacity-90">{subtext}</span>
    </div>
  );
};

export const BarcodeGraphic: React.FC<{ code?: string; className?: string }> = ({
  code = 'NEXUS-HACK-2026-NGO',
  className = ''
}) => (
  <div className={`inline-flex flex-col items-center font-mono-code text-[9px] text-white/60 tracking-wider ${className}`}>
    <div className="flex items-center gap-[2px] h-7 bg-white/10 p-1 rounded-xs">
      <div className="w-[3px] h-full bg-white" />
      <div className="w-[1px] h-full bg-white" />
      <div className="w-[4px] h-full bg-white" />
      <div className="w-[2px] h-full bg-white" />
      <div className="w-[1px] h-full bg-white" />
      <div className="w-[3px] h-full bg-white" />
      <div className="w-[5px] h-full bg-white" />
      <div className="w-[2px] h-full bg-white" />
      <div className="w-[1px] h-full bg-white" />
      <div className="w-[3px] h-full bg-white" />
      <div className="w-[2px] h-full bg-white" />
      <div className="w-[4px] h-full bg-white" />
      <div className="w-[1px] h-full bg-white" />
      <div className="w-[2px] h-full bg-white" />
      <div className="w-[3px] h-full bg-white" />
      <div className="w-[1px] h-full bg-white" />
      <div className="w-[4px] h-full bg-white" />
      <div className="w-[2px] h-full bg-white" />
      <div className="w-[5px] h-full bg-white" />
      <div className="w-[1px] h-full bg-white" />
    </div>
    <span className="mt-1">{code}</span>
  </div>
);

export const TapeStrip: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <div
    className={`h-6 w-24 bg-[#fef3c7]/80 backdrop-blur-xs shadow-xs border-y border-amber-200/50 pointer-events-none ${className}`}
    style={{
      transform: 'rotate(-4deg)',
      clipPath: 'polygon(0% 10%, 5% 0%, 95% 0%, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0% 90%)',
      ...style
    }}
  />
);
