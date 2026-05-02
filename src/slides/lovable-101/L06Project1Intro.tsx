import React from 'react';
import { LovableFrame } from './LovableFrame';

export default function L06Project1Intro() {
  return (
    <LovableFrame index={6} eyebrow="Project 01" variant="dark">
      <div className="flex h-full px-20 py-32 items-center gap-20">
        <div className="flex-1">
          <span className="text-slide-accent uppercase tracking-[0.4em]" style={{ fontSize: '22px', fontWeight: 600 }}>
            Live Build · 5 minutes
          </span>
          <h2
            className="text-white tracking-tight mt-8 mb-10"
            style={{ fontSize: '160px', fontWeight: 800, lineHeight: 0.9 }}
          >
            A personal<br />
            <span className="text-slide-accent">portfolio</span> site.
          </h2>
          <p className="text-white/70 max-w-[820px]" style={{ fontSize: '30px', fontWeight: 300, lineHeight: 1.4 }}>
            One page. Hero, About, Projects, Contact. We'll go from blank screen
            to live URL using nothing but English.
          </p>
        </div>

        <div className="w-[460px] shrink-0 border border-white/15 bg-white/[0.04] p-10">
          <p className="text-white/40 uppercase tracking-[0.25em] mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>
            What you'll learn
          </p>
          {['Initial prompt structure', 'Iterative refinement', 'Adding images', 'Publishing live'].map((t, i) => (
            <div key={t} className="flex items-center gap-4 py-3 border-t border-white/10 first:border-t-0">
              <span className="text-slide-accent" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', fontWeight: 700 }}>
                0{i + 1}
              </span>
              <span className="text-white" style={{ fontSize: '24px', fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
