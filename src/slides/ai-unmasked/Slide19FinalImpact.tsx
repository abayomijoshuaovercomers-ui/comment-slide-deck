import React from 'react';
import { SlideFrame } from './SlideFrame';

export default function Slide19FinalImpact() {
  return (
    <SlideFrame index={19} eyebrow="Final Impact">
      <div className="flex flex-col h-full px-20 py-32 justify-center">
        <h2
          className="text-white tracking-tight"
          style={{ fontSize: '140px', fontWeight: 800, lineHeight: 0.92 }}
        >
          AI is not here<br />
          to <span className="line-through decoration-slide-accent decoration-[10px] decoration-from-font">replace</span> you.
        </h2>

        <div className="my-12 flex items-center gap-8">
          <div className="h-[2px] flex-1 bg-slide-accent" />
          <span
            className="text-slide-accent uppercase tracking-[0.5em]"
            style={{ fontSize: '24px', fontWeight: 600 }}
          >
            It is here to
          </span>
          <div className="h-[2px] flex-1 bg-slide-accent" />
        </div>

        <h2
          className="text-slide-accent tracking-tight"
          style={{ fontSize: '200px', fontWeight: 800, lineHeight: 0.9 }}
        >
          EXPOSE&nbsp;you.
        </h2>

        <p
          className="text-white/55 mt-14 italic"
          style={{ fontSize: '28px', fontWeight: 300 }}
        >
          If you don't think — it won't think for you.
        </p>
      </div>
    </SlideFrame>
  );
}
