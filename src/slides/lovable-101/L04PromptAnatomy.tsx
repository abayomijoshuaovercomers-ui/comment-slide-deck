import React from 'react';
import { LovableFrame } from './LovableFrame';

const layers = [
  { k: 'Role', v: 'You are a senior product designer.' },
  { k: 'Context', v: 'I am building a portfolio for a Nigerian fashion brand.' },
  { k: 'Task', v: 'Create a landing page with hero, gallery, and contact form.' },
  { k: 'Style', v: 'Editorial, warm earth tones, large serif headlines.' },
  { k: 'Constraints', v: 'Mobile-first. No stock-photo clichés.' },
  { k: 'Outcome', v: 'A page that makes a stranger want to buy.' },
];

export default function L04PromptAnatomy() {
  return (
    <LovableFrame index={4} eyebrow="Prompt Anatomy">
      <div className="flex flex-col h-full px-20 pt-32 pb-24">
        <h2
          className="text-slide-gray-900 tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          The 6 layers of a <span className="text-slide-accent">winning prompt.</span>
        </h2>
        <p className="text-slide-gray-600 mb-12" style={{ fontSize: '26px', fontWeight: 300 }}>
          Stack these every time. Watch your output 10× in quality.
        </p>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5 flex-1">
          {layers.map((l, i) => (
            <div key={l.k} className="flex items-start gap-6 bg-white border border-slide-gray-200 px-8 py-6">
              <span
                className="text-slide-accent shrink-0 w-14"
                style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '26px', fontWeight: 700 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-slide-gray-900" style={{ fontSize: '30px', fontWeight: 700 }}>
                  {l.k}
                </p>
                <p className="text-slide-gray-600 mt-1" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.35 }}>
                  {l.v}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
