import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';
import abayomi from '@/assets/abayomi-joshua.jpg';

const PROMPT = `Build a personal portfolio for Abayomi Joshua,
AI educator. One page, dark hero with a 96px headline:
"I help people unmask AI." Add About, Talks (3 cards),
and Contact sections. Cream bg, navy text, coral accent.`;

const REPLY = `✓ Created Hero, About, Talks, Contact
✓ Tailwind setup with cream + coral palette
✓ Mobile responsive
Preview is live →`;

function PortfolioPreview() {
  return (
    <div className="w-full h-full bg-[hsl(220_25%_8%)] text-white flex flex-col">
      <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span style={{ fontSize: '18px', fontWeight: 700 }}>AJ.</span>
        <div className="flex gap-6 text-white/70" style={{ fontSize: '14px' }}>
          <span>About</span><span>Talks</span><span>Contact</span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-between px-10">
        <div className="max-w-[55%]">
          <p className="text-[#FA7268] mb-3" style={{ fontSize: '13px', letterSpacing: '0.3em' }}>AI EDUCATOR · SPEAKER</p>
          <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.0 }}>
            I help people<br/>unmask <span className="text-[#FA7268]">AI</span>.
          </h1>
          <button className="mt-6 px-5 py-2.5 bg-[#FA7268] text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
            Book me to speak
          </button>
        </div>
        <img src={abayomi} alt="" className="h-[260px] w-[200px] object-cover rounded shadow-2xl" />
      </div>
    </div>
  );
}

export default function L07aPortfolioShot() {
  return (
    <LovableFrame index={8} eyebrow="Project 01 · The Screenshot">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-6" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          One prompt → <span className="text-slide-accent">a real site.</span>
        </h2>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<PortfolioPreview />}
            url="abayomi.lovable.app"
            caption="// You see your prompt on the left. The site builds itself on the right. ~30 seconds."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
