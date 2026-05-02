import React from 'react';
import { LovableFrame } from './LovableFrame';

const dos = [
  'Start broad, then refine',
  'Paste screenshots for visuals',
  'Use Cloud for any data',
  'Hit Publish often',
  'Version with Remix',
];
const donts = [
  'Ask for 10 features at once',
  'Copy a giant codebase in one shot',
  'Edit code by hand before testing',
  'Skip describing the *feeling*',
  'Forget to read what AI did',
];

export default function L11DosDonts() {
  return (
    <LovableFrame index={23} eyebrow="Pro Moves">
      <div className="flex flex-col h-full px-20 pt-32 pb-24">
        <h2
          className="text-slide-gray-900 tracking-tight mb-12"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Vibe-coding <span className="text-slide-accent">do's & don'ts.</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="bg-white border-t-4 border-slide-accent p-10">
            <p className="text-slide-accent uppercase tracking-[0.3em] mb-6" style={{ fontSize: '22px', fontWeight: 700 }}>
              Do
            </p>
            <div className="space-y-4">
              {dos.map((d, i) => (
                <div key={d} className="flex items-baseline gap-5 border-t border-slide-gray-200 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-slide-accent" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', fontWeight: 700 }}>
                    +{i + 1}
                  </span>
                  <p className="text-slide-gray-900" style={{ fontSize: '26px', fontWeight: 600 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(220_25%_8%)] border-t-4 border-white/30 p-10">
            <p className="text-white/60 uppercase tracking-[0.3em] mb-6" style={{ fontSize: '22px', fontWeight: 700 }}>
              Don't
            </p>
            <div className="space-y-4">
              {donts.map((d, i) => (
                <div key={d} className="flex items-baseline gap-5 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-white/50" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', fontWeight: 700 }}>
                    −{i + 1}
                  </span>
                  <p className="text-white" style={{ fontSize: '26px', fontWeight: 600 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LovableFrame>
  );
}
