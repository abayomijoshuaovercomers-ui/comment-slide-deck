import React from 'react';
import { SlideFrame } from './SlideFrame';

const truths = [
  { t: 'AI will grow fast.', d: 'Faster than any tool we\u2019ve had.' },
  { t: 'Skills will become obsolete faster.', d: 'What worked last year may not work next quarter.' },
  { t: 'Adaptability = survival.', d: 'Not strength. Not intelligence. Adaptation.' },
];

export default function Slide18FutureTruth() {
  return (
    <SlideFrame index={18} eyebrow="The Hidden Truth">
      <div className="flex flex-col h-full px-20 pt-32 pb-28 justify-center">
        <h2
          className="text-white tracking-tight mb-16"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          The future belongs to<br />
          <span className="text-slide-accent">fast learners.</span>
        </h2>

        <div className="space-y-7">
          {truths.map((tr, i) => (
            <div
              key={tr.t}
              className="flex items-baseline gap-8 border-t border-white/10 pt-7"
            >
              <span
                className="text-slide-accent shrink-0"
                style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'IBM Plex Mono, monospace' }}
              >
                0{i + 1}
              </span>
              <div className="flex-1">
                <div
                  className="text-white"
                  style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.1 }}
                >
                  {tr.t}
                </div>
                <div
                  className="text-white/55 mt-2"
                  style={{ fontSize: '24px', fontWeight: 300 }}
                >
                  {tr.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
