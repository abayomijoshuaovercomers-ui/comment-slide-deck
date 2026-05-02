import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';
import abayomi from '@/assets/abayomi-joshua.jpg';

const PROMPT = `Make the hero feel cinematic.
Bigger headline, darker background,
add a soft coral glow behind the photo.`;

const REPLY = `✓ Headline: 96px → 140px
✓ Background tinted #0A0E1A
✓ Glow blur added (radial coral)
Updated.`;

function CinematicHero() {
  return (
    <div className="w-full h-full bg-[hsl(225_45%_5%)] text-white flex items-center justify-between px-10 relative overflow-hidden">
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(250,114,104,0.55), transparent)', filter: 'blur(20px)' }}
      />
      <div className="relative z-10 max-w-[55%]">
        <p className="text-[#FA7268] mb-3" style={{ fontSize: '13px', letterSpacing: '0.3em' }}>AI EDUCATOR · SPEAKER</p>
        <h1 style={{ fontSize: '76px', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
          I help people<br/>unmask <span className="text-[#FA7268]">AI</span>.
        </h1>
      </div>
      <img src={abayomi} alt="" className="relative z-10 h-[300px] w-[230px] object-cover rounded shadow-[0_0_60px_rgba(250,114,104,0.4)]" />
    </div>
  );
}

export default function L07bPortfolioRefine() {
  return (
    <LovableFrame index={9} eyebrow="Project 01 · Refining">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-6" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          Don't like it? <span className="text-slide-accent">Just say so.</span>
        </h2>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<CinematicHero />}
            url="abayomi.lovable.app"
            caption="// Talk to it like a designer. No code. No CSS files. Just instructions."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
