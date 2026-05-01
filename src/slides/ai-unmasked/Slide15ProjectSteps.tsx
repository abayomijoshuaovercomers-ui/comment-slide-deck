import React from 'react';
import { SlideFrame } from './SlideFrame';

const steps = [
  { n: '01', t: 'Define the problem' },
  { n: '02', t: 'Use AI to solve it' },
  { n: '03', t: 'Build it with Overra AI' },
];

export default function Slide15ProjectSteps() {
  return (
    <SlideFrame index={15} eyebrow="From Idea to Ship">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <h2
          className="text-white tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Three <span className="text-slide-accent">moves.</span>
        </h2>
        <p
          className="text-white/60 mb-16"
          style={{ fontSize: '28px', fontWeight: 300 }}
        >
          We're not just learning AI. We're building with it.
        </p>

        <div className="flex items-stretch gap-6 flex-1">
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div className="flex-1 bg-white/[0.04] border border-white/15 p-10 flex flex-col justify-end">
                <span
                  className="text-slide-accent mb-6"
                  style={{ fontSize: '88px', fontWeight: 800, lineHeight: 1 }}
                >
                  {s.n}
                </span>
                <span
                  className="text-white"
                  style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05 }}
                >
                  {s.t}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center text-slide-accent" style={{ fontSize: '60px' }}>
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
