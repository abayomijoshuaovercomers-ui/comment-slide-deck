import React from 'react';
import { SlideFrame } from './SlideFrame';

const points = [
  'Learns from data',
  'Improves with experience',
  'No hard-coded rules',
];
const examples = ['Spam Detection', 'Recommendation Systems'];

export default function Slide04MachineLearning() {
  return (
    <SlideFrame index={4} eyebrow="Layer 1">
      <div className="flex h-full px-20 pt-32 pb-28 gap-20">
        <div className="flex-1 flex flex-col justify-center">
          <span
            className="uppercase tracking-[0.3em] text-slide-accent mb-6"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            Machine Learning
          </span>
          <h2
            className="text-white tracking-tight mb-12"
            style={{ fontSize: '110px', fontWeight: 800, lineHeight: 0.95 }}
          >
            Teach by<br />example.
          </h2>
          <ul className="space-y-5">
            {points.map((p) => (
              <li
                key={p}
                className="text-white/80 flex items-center gap-6"
                style={{ fontSize: '36px', fontWeight: 400 }}
              >
                <span className="h-[2px] w-10 bg-slide-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[520px] flex flex-col justify-center">
          <span
            className="uppercase tracking-[0.3em] text-white/40 mb-6"
            style={{ fontSize: '20px', fontWeight: 500 }}
          >
            In the wild
          </span>
          <div className="space-y-4">
            {examples.map((e, i) => (
              <div
                key={e}
                className="border border-white/15 px-8 py-7 bg-white/[0.03]"
              >
                <span
                  className="text-slide-accent mr-4"
                  style={{ fontSize: '24px', fontWeight: 700 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white" style={{ fontSize: '32px', fontWeight: 600 }}>
                  {e}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
