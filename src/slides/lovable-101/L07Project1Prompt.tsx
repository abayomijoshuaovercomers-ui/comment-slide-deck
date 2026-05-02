import React from 'react';
import { LovableFrame } from './LovableFrame';

const PROMPT = `Build a personal portfolio website for Abayomi Joshua,
an AI educator and speaker.

Sections (single page, scroll):
  1. Hero  — full-screen, dark background, 96px headline:
            "I help people unmask AI." Subline + CTA "Book me to speak".
  2. About — two columns, photo left, 3 short paragraphs right.
  3. Talks — 3 cards in a grid with title, venue, year.
  4. Contact — large email link + Twitter, Instagram, LinkedIn.

Style: editorial, premium, warm cream background (#FCFBF8),
deep navy text, single coral accent. Big type. Lots of whitespace.
No stock-photo clichés. Mobile-first.`;

const RESULT = [
  'Full one-page site generated in ~30 seconds',
  'Editable React + Tailwind code, fully owned by you',
  'Responsive on mobile out of the box',
  'Ready to Publish to a live lovable.app URL',
];

export default function L07Project1Prompt() {
  return (
    <LovableFrame index={7} eyebrow="Project 01 · The Prompt">
      <div className="flex h-full px-20 pt-32 pb-24 gap-12">
        <div className="flex-1 flex flex-col">
          <p className="text-slide-gray-600 uppercase tracking-[0.3em] mb-4" style={{ fontSize: '20px', fontWeight: 600 }}>
            What I typed
          </p>
          <div className="flex-1 bg-[hsl(220_25%_8%)] p-10 overflow-hidden">
            <pre
              className="text-white/90 whitespace-pre-wrap"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', lineHeight: 1.5 }}
            >
{PROMPT}
            </pre>
          </div>
        </div>

        <div className="w-[560px] shrink-0 flex flex-col">
          <p className="text-slide-gray-600 uppercase tracking-[0.3em] mb-4" style={{ fontSize: '20px', fontWeight: 600 }}>
            What Lovable produced
          </p>
          <div className="flex-1 bg-white border border-slide-gray-200 p-8 flex flex-col">
            <span className="text-slide-accent" style={{ fontSize: '88px', fontWeight: 800, lineHeight: 1 }}>
              30s
            </span>
            <p className="text-slide-gray-700 mb-8" style={{ fontSize: '22px' }}>
              from blank screen to a working portfolio.
            </p>
            <div className="space-y-4">
              {RESULT.map((r, i) => (
                <div key={r} className="flex items-start gap-4 border-t border-slide-gray-200 pt-4">
                  <span
                    className="text-slide-accent shrink-0"
                    style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', fontWeight: 700 }}
                  >
                    →
                  </span>
                  <p className="text-slide-gray-900" style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.35 }}>
                    {r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LovableFrame>
  );
}
