import React from 'react';
import { LovableFrame } from './LovableFrame';
import lovableLogo from '@/assets/lovable-logo.png';

export default function L01Title() {
  return (
    <LovableFrame index={1} eyebrow="Masterclass" variant="dark">
      <div className="flex flex-col h-full px-20 py-16 justify-center">
        <span
          className="tracking-[0.5em] uppercase text-slide-accent mb-10"
          style={{ fontSize: '24px', fontWeight: 600 }}
        >
          Vibe Coding · Live
        </span>

        <div className="flex items-center gap-8 mb-10">
          <img
            src={lovableLogo}
            alt="Lovable"
            width={1024}
            height={512}
            className="h-28 w-auto object-contain"
          />
          <span
            className="text-white/30"
            style={{ fontSize: '120px', fontWeight: 200, lineHeight: 1 }}
          >
            /
          </span>
          <span
            className="text-white"
            style={{ fontSize: '120px', fontWeight: 800, lineHeight: 1 }}
          >
            101
          </span>
        </div>

        <h1
          className="text-white tracking-tight mb-10"
          style={{ fontSize: '140px', fontWeight: 800, lineHeight: 0.9 }}
        >
          Build apps by<br />
          <span className="text-slide-accent">talking</span> to AI.
        </h1>

        <p
          className="text-white/65 max-w-[1100px]"
          style={{ fontSize: '32px', fontWeight: 300, lineHeight: 1.4 }}
        >
          A live, hands-on walkthrough of <strong className="text-white font-semibold">Lovable</strong> — the
          fastest way to ship real websites and apps without writing a single line of code.
        </p>
      </div>
    </LovableFrame>
  );
}
