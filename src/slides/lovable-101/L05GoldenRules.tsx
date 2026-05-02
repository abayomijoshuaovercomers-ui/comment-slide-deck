import React from 'react';
import { LovableFrame } from './LovableFrame';

const rules = [
  ['Be specific, not polite', '"Make the hero red, full-width, with a 72px headline" beats "make it nicer".'],
  ['One change at a time', 'Don\'t ask for 5 things. Ask, see, then ask again.'],
  ['Show, don\'t describe', 'Paste a screenshot, link, or color hex. Pictures > paragraphs.'],
  ['Name the feeling', '"Premium", "playful", "brutalist" — vibes guide design choices.'],
  ['Constrain the output', 'Tell it what NOT to do. "No gradients. No emojis."'],
  ['Iterate, don\'t restart', 'Refine the same chat — Lovable remembers your project.'],
];

export default function L05GoldenRules() {
  return (
    <LovableFrame index={5} eyebrow="Golden Rules">
      <div className="flex flex-col h-full px-20 pt-32 pb-24">
        <h2
          className="text-slide-gray-900 tracking-tight mb-12"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          How to <span className="text-slide-accent">talk</span> to Lovable.
        </h2>

        <div className="grid grid-cols-2 gap-6 flex-1">
          {rules.map(([h, s], i) => (
            <div key={h} className="border-l-4 border-slide-accent bg-white px-8 py-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span
                  className="text-slide-accent"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', fontWeight: 700 }}
                >
                  R{i + 1}
                </span>
                <p className="text-slide-gray-900" style={{ fontSize: '30px', fontWeight: 700 }}>{h}</p>
              </div>
              <p className="text-slide-gray-600" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.4 }}>
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
