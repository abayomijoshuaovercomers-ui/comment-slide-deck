import React from 'react';
import { SlideFrame } from './SlideFrame';

const stack = [
  {
    label: 'Thinking',
    desc: 'Reason. Plan. Decide.',
    tools: ['ChatGPT', 'Claude'],
  },
  {
    label: 'Creation',
    desc: 'Image. Motion. Sound.',
    tools: ['Midjourney', 'Runway'],
  },
  {
    label: 'Builder',
    desc: 'Ship product. Fast.',
    tools: ['Overra AI', 'GitHub Copilot'],
  },
];

export default function Slide12ToolStack() {
  return (
    <SlideFrame index={12} eyebrow="The Stack">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <h2
          className="text-white tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          The AI <span className="text-slide-accent">tool stack.</span>
        </h2>
        <p
          className="text-white/60 mb-14"
          style={{ fontSize: '28px', fontWeight: 300 }}
        >
          Don't just use tools. Combine them.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {stack.map((s, i) => (
            <div
              key={s.label}
              className="border border-white/15 p-10 flex flex-col bg-white/[0.02] relative"
            >
              <span
                className="absolute top-6 right-6 text-white/25"
                style={{ fontSize: '24px', fontWeight: 600 }}
              >
                0{i + 1}
              </span>
              <span
                className="uppercase tracking-[0.3em] text-slide-accent mb-4"
                style={{ fontSize: '20px', fontWeight: 600 }}
              >
                {s.label}
              </span>
              <span
                className="text-white mb-10"
                style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}
              >
                {s.desc}
              </span>
              <div className="mt-auto space-y-2">
                {s.tools.map((t) => (
                  <div
                    key={t}
                    className="text-white/85 flex items-center gap-4"
                    style={{ fontSize: '30px', fontWeight: 500 }}
                  >
                    <span className="h-3 w-3 bg-slide-accent" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
