import React from 'react';
import { SlideFrame } from './SlideFrame';

const steps = [
  { n: '01', t: 'A problem', d: 'Find a real one.' },
  { n: '02', t: 'A clear solution idea', d: 'Sketch it without code.' },
  { n: '03', t: 'Then apply AI', d: 'Use it as the amplifier.' },
];

export default function Slide13PowerMove() {
  return (
    <SlideFrame index={13} eyebrow="Power Move">
      <div className="flex flex-col h-full px-20 pt-32 pb-28 justify-center">
        <h2
          className="text-white tracking-tight mb-6"
          style={{ fontSize: '110px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Don't start<br />
          with <span className="text-slide-accent">AI.</span>
        </h2>
        <p
          className="text-white/60 mb-16 max-w-[900px]"
          style={{ fontSize: '30px', fontWeight: 300 }}
        >
          AI is not the solution. It is the amplifier.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-l-[6px] border-slide-accent pl-8 py-2">
              <span
                className="text-slide-accent block mb-2"
                style={{ fontSize: '28px', fontWeight: 700 }}
              >
                {s.n}
              </span>
              <span
                className="text-white block mb-3"
                style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1 }}
              >
                {s.t}
              </span>
              <span
                className="text-white/60 block"
                style={{ fontSize: '22px', fontWeight: 300 }}
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
