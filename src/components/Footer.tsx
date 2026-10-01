import React from 'react';
import { RetroStampBadge, BarcodeGraphic } from './SvgArtwork';
import { audioEngine } from '../utils/audioSynth';
import { NexusLogo } from './NexusLogo';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const links = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Contact', href: 'mailto:hackforgood@nexus-collective.org' },
    { label: 'Privacy', href: '#' },
    { label: 'Code of Conduct', href: '#' }
  ];

  return (
    <footer className="relative bg-[#070110] text-zinc-300 pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 halftone-dark opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand zone */}
          <div>
            <div className="flex items-center gap-4 flex-wrap">
              <NexusLogo size="md" showSubtitle={true} />
              <span className="text-white/30 text-3xl hidden sm:inline">/</span>
              <span className="font-impact text-3xl sm:text-4xl text-white">HACK FOR GOOD</span>
            </div>

            {/* Tagline as specified in user prompt */}
            <p className="font-impact text-lg text-[#ffbe3b] tracking-wider uppercase mt-3">
              BUILD TECH. CREATE IMPACT.
            </p>

            <p className="text-xs text-zinc-400 font-body max-w-md mt-2">
              An open-source non-profit engineering sprint connecting student builders with front-line NGO challenges.
            </p>
          </div>

          {/* Social and Navigation Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono-code">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => audioEngine.playClick('tap')}
                className="hover:text-[#ff1f8f] transition-colors relative group py-1"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff1f8f] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Legal & Recognition Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500">
          <div>
            © {currentYear} NEXUS Initiative. Organized for global non-profit technology advancement.
          </div>

          <div className="flex items-center gap-4">
            <span>MIAMI FL · HYBRID</span>
            <span>·</span>
            <span className="text-[#00f2fe]">APACHE 2.0 / MIT OPEN SOURCE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
