import React from 'react';
import { SlideFrame } from './SlideFrame';

const skills = [
  { n: '01', t: 'Problem Decomposition', d: 'Break the impossible into pieces.' },
  { n: '02', t: 'Critical Thinking', d: 'Question the answer before you trust it.' },
  { n: '03', t: 'Prompt Engineering', d: 'Speak the model into precision.' },
  { n: '04', t: 'System Thinking', d: 'See loops, not just steps.' },
  { n: '05', t: 'Tool Integration', d: 'Stitch many tools into one weapon.' },
];

export default function Slide11RealSkills() {
  return (
    <SlideFrame index={11} eyebrow="What Actually Matters">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <h2
          className="text-white tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          The real <span className="text-slide-accent">skills.</span>
        </h2>
        <p
          className="text-white/60 mb-14 max-w-[1100px]"
          style={{ fontSize: '28px', fontWeight: 300 }}
        >
          Tools don't make you powerful. How you think does.
        </p>

        <div className="grid grid-cols-5 gap-4 flex-1">
          {skills.map((s) => (
            <div
              key={s.n}
              className="border border-white/15 p-7 flex flex-col bg-white/[0.02]"
            >
              <span
                className="text-slide-accent mb-6"
                style={{ fontSize: '40px', fontWeight: 800 }}
              >
                {s.n}
              </span>
              <span
                className="text-white mb-4"
                style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1.1 }}
              >
                {s.t}
              </span>
              <span
                className="text-white/55 mt-auto"
                style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.35 }}
              >
                {s.d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
