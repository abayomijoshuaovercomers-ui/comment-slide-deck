import React from 'react';
import { SlideFrame } from './SlideFrame';

export default function Slide06DeepSecret() {
  return (
    <SlideFrame index={6} eyebrow="The Deep Secret">
      <div className="flex flex-col h-full px-20 py-32 items-center justify-center text-center">
        <span
          className="uppercase tracking-[0.5em] text-slide-accent mb-10"
          style={{ fontSize: '24px', fontWeight: 600 }}
        >
          AI = Function Approximation
        </span>

        <div
          className="text-white tracking-tight"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '240px',
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          <span className="text-slide-accent">f</span>
          <span className="text-white/70">(</span>
          input
          <span className="text-white/70">)</span>{' '}
          <span className="text-white/70">=</span> output
        </div>

        <p
          className="text-white/60 mt-16 max-w-[1100px]"
          style={{ fontSize: '32px', fontWeight: 300, lineHeight: 1.4 }}
        >
          ChatGPT. Image AI. Voice AI. Every model you've ever met is just trying to
          learn this single equation.
        </p>
      </div>
    </SlideFrame>
  );
}
