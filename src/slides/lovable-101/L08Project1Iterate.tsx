import React from 'react';
import { LovableFrame } from './LovableFrame';

const refinements = [
  {
    p: '"Make the hero feel more cinematic — bigger headline, darker background, and add a subtle red glow behind the photo."',
    r: 'Hero re-rendered. Headline jumped to 140px. Glow added.',
  },
  {
    p: '"In the Talks section, replace the cards with a clean numbered list. Use a thin red divider between each."',
    r: 'Layout swapped instantly. Same content, new design.',
  },
  {
    p: '"Add a sticky top nav with Home, Talks, Contact. Hide it on mobile and show a hamburger instead."',
    r: 'Nav appears, behaves correctly on every screen size.',
  },
];

export default function L08Project1Iterate() {
  return (
    <LovableFrame index={11} eyebrow="Project 01 · Iterate">
      <div className="flex flex-col h-full px-20 pt-32 pb-24">
        <h2
          className="text-slide-gray-900 tracking-tight mb-10"
          style={{ fontSize: '88px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Then I just <span className="text-slide-accent">talked</span> to it.
        </h2>

        <div className="space-y-5 flex-1">
          {refinements.map((r, i) => (
            <div key={i} className="grid grid-cols-[80px_1fr_1fr] gap-8 items-stretch bg-white border border-slide-gray-200">
              <div className="bg-slide-accent flex items-center justify-center text-white" style={{ fontSize: '40px', fontWeight: 800 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="p-7 border-r border-slide-gray-200">
                <p className="text-slide-gray-500 uppercase tracking-[0.25em] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Said
                </p>
                <p className="text-slide-gray-900" style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.35 }}>
                  {r.p}
                </p>
              </div>
              <div className="p-7">
                <p className="text-slide-accent uppercase tracking-[0.25em] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Got
                </p>
                <p className="text-slide-gray-700" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.35 }}>
                  {r.r}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
