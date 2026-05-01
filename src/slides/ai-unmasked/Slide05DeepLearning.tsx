import React from 'react';
import { SlideFrame } from './SlideFrame';

const layers = [4, 6, 6, 4];
const uses = ['Voice Assistants', 'Image Recognition', 'Chatbots'];

export default function Slide05DeepLearning() {
  return (
    <SlideFrame index={5} eyebrow="Layer 2">
      <div className="flex h-full px-20 pt-32 pb-28 gap-20 items-center">
        {/* Left: copy */}
        <div className="flex-1">
          <span
            className="uppercase tracking-[0.3em] text-slide-accent mb-6 block"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            Deep Learning
          </span>
          <h2
            className="text-white tracking-tight mb-10"
            style={{ fontSize: '110px', fontWeight: 800, lineHeight: 0.95 }}
          >
            Stack simple<br />
            <span className="text-slide-accent">functions.</span>
          </h2>
          <p className="text-white/70 max-w-[640px]" style={{ fontSize: '28px', fontWeight: 300 }}>
            Neural networks with layers — loosely mimicking the brain — until something
            powerful emerges.
          </p>

          <div className="flex flex-wrap gap-3 mt-12">
            {uses.map((u) => (
              <span
                key={u}
                className="border border-slide-accent text-white px-6 py-3"
                style={{ fontSize: '24px', fontWeight: 600 }}
              >
                {u}
              </span>
            ))}
          </div>
        </div>

        {/* Right: neural net visual */}
        <div className="w-[640px] h-[520px] flex items-center justify-center gap-16">
          {layers.map((count, li) => (
            <div key={li} className="flex flex-col items-center gap-5">
              {Array.from({ length: count }).map((_, ni) => (
                <div
                  key={ni}
                  className={
                    li === 0 || li === layers.length - 1
                      ? 'w-7 h-7 rounded-full bg-slide-accent'
                      : 'w-7 h-7 rounded-full border-2 border-white/40 bg-white/5'
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
