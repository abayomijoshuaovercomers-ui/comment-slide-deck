import React from 'react';
import { LovableFrame } from './LovableFrame';

const steps = [
  { n: '01', t: 'Type', d: 'Describe what you want in plain English.' },
  { n: '02', t: 'Watch', d: 'Lovable writes the code in real time.' },
  { n: '03', t: 'Tweak', d: 'Click any element. Ask for changes.' },
  { n: '04', t: 'Ship', d: 'Press Publish. You have a live URL.' },
];

export default function L03HowItWorks() {
  return (
    <LovableFrame index={3} eyebrow="The Loop">
      <div className="flex flex-col h-full px-20 pt-32 pb-24">
        <h2
          className="text-slide-gray-900 tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          The whole game in <span className="text-slide-accent">four moves.</span>
        </h2>
        <p className="text-slide-gray-600 mb-14" style={{ fontSize: '26px', fontWeight: 300 }}>
          This is the loop you'll repeat for every project you ever build.
        </p>

        <div className="grid grid-cols-4 gap-6 flex-1">
          {steps.map((s) => (
            <div key={s.n} className="bg-white border border-slide-gray-200 p-8 flex flex-col justify-end">
              <span className="text-slide-accent" style={{ fontSize: '88px', fontWeight: 800, lineHeight: 1 }}>
                {s.n}
              </span>
              <p className="text-slide-gray-900 mt-6" style={{ fontSize: '44px', fontWeight: 700 }}>
                {s.t}
              </p>
              <p className="text-slide-gray-600 mt-3" style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.35 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
