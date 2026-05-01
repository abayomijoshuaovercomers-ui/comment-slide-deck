import React from 'react';
import { SlideFrame } from './SlideFrame';

const lines = [
  { t: 'Learn it.' },
  { t: 'Use it.' },
  { t: 'Build with it.' },
  { t: 'Or be replaced by it.', accent: true },
];

export default function Slide20Closing() {
  return (
    <SlideFrame index={20} eyebrow="Closing">
      <div className="flex h-full px-20 py-32 items-center gap-20">
        <div className="flex-1">
          {lines.map((l, i) => (
            <div
              key={l.t}
              className={
                'tracking-tight ' + (l.accent ? 'text-slide-accent' : 'text-white')
              }
              style={{
                fontSize: '128px',
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: i < lines.length - 1 ? '12px' : 0,
              }}
            >
              {l.t}
            </div>
          ))}
        </div>

        <div className="w-[460px] shrink-0 border-l-[6px] border-slide-accent pl-10">
          <span
            className="uppercase tracking-[0.4em] text-slide-accent block mb-6"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            Final Word
          </span>
          <p
            className="text-white"
            style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.2 }}
          >
            You don't need permission to build the future.
          </p>
          <p
            className="text-white/40 mt-12 uppercase tracking-[0.25em]"
            style={{ fontSize: '20px', fontWeight: 500 }}
          >
            — Abayomi Joshua
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}
