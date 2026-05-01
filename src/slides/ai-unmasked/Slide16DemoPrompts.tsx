import React from 'react';
import { SlideFrame } from './SlideFrame';

const prompts = [
  'Explain this topic like I\u2019m 5.',
  'Summarize this lecture.',
  'Create exam questions from these notes.',
];

export default function Slide16DemoPrompts() {
  return (
    <SlideFrame index={16} eyebrow="Live Prompts">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <h2
          className="text-white tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Three lines.<br />
          <span className="text-slide-accent">10x smarter.</span>
        </h2>

        <div className="space-y-6 mt-14">
          {prompts.map((p, i) => (
            <div
              key={p}
              className="border border-white/15 bg-black/40 px-8 py-7 flex items-center gap-8"
            >
              <span
                className="text-slide-accent shrink-0"
                style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '32px', fontWeight: 700 }}
              >
                0{i + 1} &gt;
              </span>
              <span
                className="text-white"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '38px',
                  fontWeight: 500,
                }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
