import React from 'react';
import { SlideFrame } from './SlideFrame';

const left = ['It understands', 'It thinks', 'It is intelligent'];
const right = ['It predicts', 'It calculates', 'It optimizes'];

export default function Slide02Illusion() {
  return (
    <SlideFrame index={2} eyebrow="Chapter One">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <h2
          className="text-white mb-4"
          style={{ fontSize: '88px', fontWeight: 800, lineHeight: 1 }}
        >
          The Illusion of AI
        </h2>
        <p
          className="text-white/60 mb-20 max-w-[900px]"
          style={{ fontSize: '28px', fontWeight: 300 }}
        >
          Strip away the marketing. What you believe versus what is actually happening.
        </p>

        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Belief column */}
          <div className="border border-white/15 p-12 flex flex-col">
            <span
              className="uppercase tracking-[0.3em] text-white/40 mb-10"
              style={{ fontSize: '20px', fontWeight: 500 }}
            >
              What you think AI is
            </span>
            <ul className="space-y-6">
              {left.map((t) => (
                <li
                  key={t}
                  className="text-white/80 flex items-baseline gap-5"
                  style={{ fontSize: '44px', fontWeight: 400 }}
                >
                  <span className="text-white/30" style={{ fontSize: '24px' }}>
                    ✕
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Reality column */}
          <div className="bg-slide-accent/10 border-l-[6px] border-slide-accent p-12 flex flex-col">
            <span
              className="uppercase tracking-[0.3em] text-slide-accent mb-10"
              style={{ fontSize: '20px', fontWeight: 600 }}
            >
              Reality
            </span>
            <ul className="space-y-6">
              {right.map((t) => (
                <li
                  key={t}
                  className="text-white flex items-baseline gap-5"
                  style={{ fontSize: '52px', fontWeight: 700 }}
                >
                  <span className="text-slide-accent" style={{ fontSize: '28px' }}>
                    ●
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
