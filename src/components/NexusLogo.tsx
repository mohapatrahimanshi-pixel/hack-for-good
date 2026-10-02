import React from 'react';

interface NexusLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const NexusLogo: React.FC<NexusLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md'
}) => {
  // Refined height presets (reduced for sleeker proportion)
  const heightClass = {
    sm: 'h-6.5 sm:h-7',
    md: 'h-7.5 sm:h-8.5',
    lg: 'h-9 sm:h-10.5'
  }[size];

  return (
    <div className={`inline-flex flex-col items-start select-none group/logo ${className}`}>
      <svg
        viewBox="0 0 250 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto max-w-full drop-shadow-md`}
        aria-label="NEXUS"
      >
        <defs>
          {/* Miami Sunset Gradient tailored to the user's requested palette:
              Vibrant Sunset Coral -> Hot Pink -> Sunset Gold */}
          <linearGradient id="nexusSunsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a18" />
            <stop offset="45%" stopColor="#ff5252" />
            <stop offset="100%" stopColor="#ff1f8f" />
          </linearGradient>

          {/* Ambient radial halo behind the signature stylized X */}
          <radialGradient id="nexusXHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6838" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#ff1f8f" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff1f8f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient warm glow halo behind the X */}
        <circle cx="120" cy="27" r="28" fill="url(#nexusXHalo)" />

        {/* --- N --- */}
        <path
          d="M 12 43.5 L 12 10.5 L 21 10.5 L 36.5 33 L 36.5 10.5 L 45.5 10.5 L 45.5 43.5 L 36.5 43.5 L 21 21 L 21 43.5 Z"
          fill="#FAF5EB"
          className="transition-colors duration-200 group-hover/logo:fill-white"
        />

        {/* --- E --- */}
        <path
          d="M 57 43.5 L 57 10.5 L 87 10.5 L 87 18 L 66 18 L 66 23.5 L 84 23.5 L 84 30.5 L 66 30.5 L 66 36 L 87.5 36 L 87.5 43.5 Z"
          fill="#FAF5EB"
          className="transition-colors duration-200 group-hover/logo:fill-white"
        />

        {/* --- THE SIGNATURE OUTLINED GEOMETRIC "X" FROM OFFICIAL LOGO --- */}
        <path
          d="M 96 7 L 110 7 L 120 22 L 130 7 L 144 7 L 131 27 L 144 47 L 130 47 L 120 32 L 110 47 L 96 47 L 109 27 Z"
          fill="none"
          stroke="url(#nexusSunsetGradient)"
          strokeWidth="4.2"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          className="transition-all duration-300 group-hover/logo:stroke-[#ffbe3b]"
        />

        {/* Inner subtle core accent at the geometric center */}
        <circle cx="120" cy="27" r="1.5" fill="#FAF5EB" opacity="0.75" />

        {/* --- U --- */}
        <path
          d="M 153 10.5 L 162 10.5 L 162 33 C 162 36.5 165 37.5 170.5 37.5 C 176 37.5 179 36.5 179 33 L 179 10.5 L 188 10.5 L 188 33.5 C 188 41.5 181 44.5 170.5 44.5 C 160 44.5 153 41.5 153 33.5 Z"
          fill="#FAF5EB"
          className="transition-colors duration-200 group-hover/logo:fill-white"
        />

        {/* --- S --- */}
        <path
          d="M 197 38 L 204.5 37 C 205.5 40 209 41.5 214 41.5 C 219.5 41.5 222.5 39.5 222.5 36.5 C 222.5 33 218 31.5 211 29.5 C 202 27 197.5 24 197.5 17.5 C 197.5 12.5 203 9.5 212.5 9.5 C 221 9.5 226.5 13 227.5 18.5 L 220 19.5 C 219.2 16.5 216 15 212.2 15 C 208 15 205.5 16.5 205.5 18.8 C 205.5 21.5 208.5 22.8 216 25 C 224 27.5 229.5 30.5 229.5 36.5 C 229.5 42.5 223.5 45 213.5 45 C 204 45 198 42.5 197 38 Z"
          fill="#FAF5EB"
          className="transition-colors duration-200 group-hover/logo:fill-white"
        />
      </svg>

      {/* Official Subtitle Rule: "A CNX INITIATIVE" with flanking lines */}
      {showSubtitle && (
        <div className="w-full flex items-center justify-center gap-1.5 px-0.5 -mt-1">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/60" />
          <span className="text-[6.5px] sm:text-[7px] font-mono-code font-bold tracking-[0.22em] text-white/85 uppercase whitespace-nowrap">
            A <span className="text-[#ff6e26] font-extrabold">CNX</span> INITIATIVE
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/60" />
        </div>
      )}
    </div>
  );
};
