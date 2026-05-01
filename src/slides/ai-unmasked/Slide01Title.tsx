import React from 'react';
import { SlideFrame } from './SlideFrame';
import portrait from '@/assets/abayomi-joshua.jpg';

export default function Slide01Title() {
  return (
    <SlideFrame index={1} eyebrow="Keynote">
      <div className="flex h-full px-20 py-16 items-center gap-20">
        {/* Left: Title block */}
        <div className="flex-1 flex flex-col justify-center">
          <span
            className="tracking-[0.4em] uppercase text-slide-accent mb-8"
            style={{ fontSize: '24px', fontWeight: 600 }}
          >
            A Keynote
          </span>
          <h1
            className="text-white leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: '180px', fontWeight: 800 }}
          >
            AI<br />
            <span className="text-slide-accent">UN</span>MASKED
          </h1>
          <p
            className="text-white/70 max-w-[820px] mb-16"
            style={{ fontSize: '32px', fontWeight: 300, lineHeight: 1.35 }}
          >
            The Hidden Mechanics, Power Moves, and the Future You Can Control.
          </p>

          <div className="flex items-center gap-6">
            <div className="h-[2px] w-20 bg-slide-accent" />
            <div>
              <p
                className="text-white/50 uppercase tracking-[0.25em]"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                Presented by
              </p>
              <p
                className="text-white"
                style={{ fontSize: '34px', fontWeight: 600 }}
              >
                Abayomi Joshua{' '}
                <span className="text-white/50" style={{ fontWeight: 400 }}>
                  (Overcomer)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-full bg-slide-accent/60 blur-2xl" />
          <div className="relative w-[560px] h-[560px] rounded-full overflow-hidden ring-[6px] ring-slide-accent ring-offset-[10px] ring-offset-[hsl(220_25%_6%)]">
            <img
              src={portrait}
              alt="Abayomi Joshua"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-2 -left-2 bg-slide-accent text-white px-6 py-3"
            style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.15em' }}
          >
            SPEAKER
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
