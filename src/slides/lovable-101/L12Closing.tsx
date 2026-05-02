import React from 'react';
import { LovableFrame } from './LovableFrame';
import lovableLogo from '@/assets/lovable-logo.png';

export default function L12Closing() {
  return (
    <LovableFrame index={24} eyebrow="Your Move" variant="dark">
      <div className="flex flex-col h-full px-20 py-28 justify-center">
        <img
          src={lovableLogo}
          alt="Lovable"
          width={1024}
          height={512}
          className="h-20 w-auto object-contain mb-12"
        />

        <h2
          className="text-white tracking-tight mb-10"
          style={{ fontSize: '160px', fontWeight: 800, lineHeight: 0.9 }}
        >
          Tonight, you<br />
          <span className="text-slide-accent">build something.</span>
        </h2>

        <p
          className="text-white/70 max-w-[1100px] mb-14"
          style={{ fontSize: '32px', fontWeight: 300, lineHeight: 1.4 }}
        >
          You've seen the prompt. You've seen the result. The only thing left
          is the keyboard — and your idea.
        </p>

        <div className="flex items-center gap-10">
          <div className="bg-slide-accent text-white px-10 py-6" style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.05em' }}>
            lovable.dev
          </div>
          <p className="text-white/50 uppercase tracking-[0.3em]" style={{ fontSize: '20px', fontWeight: 600 }}>
            Open it. Type one sentence. Watch.
          </p>
        </div>
      </div>
    </LovableFrame>
  );
}
