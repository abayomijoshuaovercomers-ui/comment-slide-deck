import React from 'react';
import { LovableFrame } from './LovableFrame';
import { CopyablePromptBox } from './CopyablePromptBox';
import abayomi from '@/assets/abayomi-joshua.jpg';

// ----- 4 mini previews showing visual progression -----

function V1Plain() {
  // initial build — flat dark hero
  return (
    <div className="w-full h-full bg-[hsl(220_25%_8%)] text-white flex flex-col">
      <div className="flex justify-between items-center px-3 py-2 border-b border-white/10" style={{ fontSize: '8px' }}>
        <span className="font-bold">AJ.</span>
        <span className="text-white/60">About · Talks · Contact</span>
      </div>
      <div className="flex-1 flex items-center justify-between px-4">
        <div className="max-w-[60%]">
          <p className="text-[#FA7268] mb-1" style={{ fontSize: '6px', letterSpacing: '0.2em' }}>AI EDUCATOR</p>
          <h1 style={{ fontSize: '14px', fontWeight: 800, lineHeight: 1.0 }}>I help people<br/>unmask <span className="text-[#FA7268]">AI</span>.</h1>
        </div>
        <img src={abayomi} alt="" className="h-[55%] w-auto object-cover rounded" />
      </div>
    </div>
  );
}

function V2Cinematic() {
  return (
    <div className="w-full h-full bg-[hsl(225_45%_5%)] text-white flex flex-col relative overflow-hidden">
      <div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 h-[80px] w-[80px] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(250,114,104,0.55), transparent)', filter: 'blur(8px)' }}
      />
      <div className="flex justify-between items-center px-3 py-2 border-b border-white/10 relative z-10" style={{ fontSize: '8px' }}>
        <span className="font-bold">AJ.</span>
        <span className="text-white/60">About · Talks · Contact</span>
      </div>
      <div className="flex-1 flex items-center justify-between px-4 relative z-10">
        <div className="max-w-[58%]">
          <p className="text-[#FA7268] mb-1" style={{ fontSize: '6px', letterSpacing: '0.2em' }}>AI EDUCATOR</p>
          <h1 style={{ fontSize: '20px', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            I help people<br/>unmask <span className="text-[#FA7268]">AI</span>.
          </h1>
        </div>
        <img src={abayomi} alt="" className="h-[60%] w-auto object-cover rounded shadow-[0_0_15px_rgba(250,114,104,0.5)]" />
      </div>
    </div>
  );
}

function V3WithTalks() {
  return (
    <div className="w-full h-full bg-[hsl(225_45%_5%)] text-white flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center px-3 py-1.5 border-b border-white/10" style={{ fontSize: '8px' }}>
        <span className="font-bold">AJ.</span>
        <span className="text-white/60">About · Talks · Contact</span>
      </div>
      <div className="flex-1 flex flex-col px-3 py-2">
        <h1 className="mb-2" style={{ fontSize: '14px', fontWeight: 900, lineHeight: 1 }}>
          unmask <span className="text-[#FA7268]">AI</span>.
        </h1>
        <p className="text-[#FA7268] mb-1.5" style={{ fontSize: '6px', letterSpacing: '0.25em', fontWeight: 700 }}>TALKS</p>
        <div className="grid grid-cols-3 gap-1.5 flex-1">
          {[['2025', 'AI Unmasked'], ['2025', 'Prompt Pro'], ['2024', 'TEDx UI']].map(([y, t]) => (
            <div key={t} className="bg-white/5 border border-white/10 p-1.5 flex flex-col">
              <p className="text-[#FA7268]" style={{ fontSize: '5px', fontWeight: 700 }}>{y}</p>
              <p className="text-white" style={{ fontSize: '7px', fontWeight: 700, lineHeight: 1.1 }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function V4WithContact() {
  return (
    <div className="w-full h-full bg-[hsl(225_45%_5%)] text-white flex flex-col">
      <div className="flex justify-between items-center px-3 py-1.5 border-b border-white/10" style={{ fontSize: '8px' }}>
        <span className="font-bold">AJ.</span>
        <span className="text-white/60">About · Talks · <span className="text-[#FA7268]">Contact</span></span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-[#FA7268] mb-1" style={{ fontSize: '6px', letterSpacing: '0.3em', fontWeight: 700 }}>SAY HELLO</p>
        <h2 className="mb-2" style={{ fontSize: '14px', fontWeight: 800, lineHeight: 1 }}>Let's build something.</h2>
        <input className="w-full max-w-[80%] bg-white/5 border border-white/15 rounded px-2 py-1 mb-1 text-white" placeholder="your@email.com" style={{ fontSize: '7px' }} readOnly />
        <textarea className="w-full max-w-[80%] bg-white/5 border border-white/15 rounded px-2 py-1 mb-1.5 text-white" placeholder="What's on your mind?" rows={2} style={{ fontSize: '7px' }} readOnly />
        <button className="bg-[#FA7268] text-white rounded px-3 py-1" style={{ fontSize: '7px', fontWeight: 700 }}>Send</button>
      </div>
    </div>
  );
}

const STAGES = [
  {
    label: 'V1 · First build',
    prompt: 'Build a portfolio for Abayomi Joshua, AI educator. Dark hero, headline "I help people unmask AI." Cream/navy/coral.',
    change: 'Hero generated with photo, headline, and nav.',
    Preview: V1Plain,
  },
  {
    label: 'V2 · Refinement',
    prompt: 'Make the hero feel cinematic. Bigger headline, darker background, soft coral glow behind the photo.',
    change: 'Headline 2× larger. Glow + deeper black added.',
    Preview: V2Cinematic,
  },
  {
    label: 'V3 · Add Talks',
    prompt: 'Add a Talks section: 3 cards in a grid with title, venue, year. Coral accent on the year.',
    change: 'New section appears. Grid is responsive.',
    Preview: V3WithTalks,
  },
  {
    label: 'V4 · Contact + ship',
    prompt: 'Add a Contact section with email + message form. Send via Cloud. Then publish.',
    change: 'Form wired to Cloud function. Site published live.',
    Preview: V4WithContact,
  },
];

export default function L08aPortfolioSequence() {
  return (
    <LovableFrame index={11} eyebrow="Project 01 · See every refinement">
      <div className="flex flex-col h-full px-12 pt-26 pb-16">
        <h2 className="text-slide-gray-900 mb-2" style={{ fontSize: '46px', fontWeight: 800, lineHeight: 1 }}>
          Watch the site <span className="text-slide-accent">grow up.</span>
        </h2>
        <p className="text-slide-gray-600 mb-6" style={{ fontSize: '18px' }}>
          Same project. Four prompts. Each one builds on the last. Click any prompt to copy it.
        </p>

        <div className="grid grid-cols-4 gap-4 flex-1 min-h-0">
          {STAGES.map((s, i) => (
            <div key={s.label} className="flex flex-col gap-2 min-h-0">
              {/* Stage chip */}
              <div className="flex items-center gap-2">
                <span className="bg-slide-accent text-white px-2 py-0.5 rounded" style={{ fontSize: '11px', fontWeight: 800 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-slide-gray-900 uppercase tracking-[0.15em]" style={{ fontSize: '12px', fontWeight: 700 }}>
                  {s.label}
                </span>
              </div>

              {/* Mini browser preview */}
              <div className="border border-slide-gray-300 bg-white shadow-sm overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <div className="h-3 bg-slide-gray-100 border-b border-slide-gray-200 flex items-center gap-1 px-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="w-full h-[calc(100%-12px)]">
                  <s.Preview />
                </div>
              </div>

              {/* Copyable prompt */}
              <CopyablePromptBox prompt={s.prompt} size="sm" />

              {/* Change note */}
              <p className="text-slide-gray-600 italic px-1" style={{ fontSize: '12px', lineHeight: 1.35 }}>
                → {s.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
