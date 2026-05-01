import React from 'react';
import { SlideFrame } from './SlideFrame';

export default function Slide03WhatAIIs() {
  return (
    <SlideFrame index={3} eyebrow="Definition">
      <div className="flex flex-col h-full px-20 pt-32 pb-28 justify-center">
        <span
          className="uppercase tracking-[0.4em] text-slide-accent mb-8"
          style={{ fontSize: '22px', fontWeight: 600 }}
        >
          What AI Really Is
        </span>
        <h2
          className="text-white tracking-tight mb-16"
          style={{ fontSize: '140px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Pattern<br />
          <span className="text-slide-accent">Prediction</span><br />
          at&nbsp;Scale.
        </h2>

        <div className="flex items-center gap-10 mt-4">
          <div className="border border-white/20 px-8 py-6">
            <span
              className="uppercase tracking-[0.25em] text-white/50 block mb-2"
              style={{ fontSize: '18px', fontWeight: 500 }}
            >
              Step 1
            </span>
            <span className="text-white" style={{ fontSize: '34px', fontWeight: 600 }}>
              Given data → find patterns
            </span>
          </div>
          <div className="text-slide-accent" style={{ fontSize: '60px', fontWeight: 700 }}>
            →
          </div>
          <div className="border border-white/20 px-8 py-6">
            <span
              className="uppercase tracking-[0.25em] text-white/50 block mb-2"
              style={{ fontSize: '18px', fontWeight: 500 }}
            >
              Step 2
            </span>
            <span className="text-white" style={{ fontSize: '34px', fontWeight: 600 }}>
              Use patterns → predict outputs
            </span>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
