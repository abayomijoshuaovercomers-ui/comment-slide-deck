import React from 'react';
import { SlideFrame } from './SlideFrame';

const tokens = [
  { word: 'predicts', p: 0.71, hi: true },
  { word: 'guesses', p: 0.14 },
  { word: 'computes', p: 0.09 },
  { word: 'knows', p: 0.04 },
  { word: 'feels', p: 0.02 },
];

export default function Slide07ChatGPT() {
  return (
    <SlideFrame index={7} eyebrow="Under the Hood">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <span
          className="uppercase tracking-[0.3em] text-slide-accent mb-6"
          style={{ fontSize: '22px', fontWeight: 600 }}
        >
          How ChatGPT Actually Works
        </span>
        <h2
          className="text-white tracking-tight mb-16"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          It doesn't know.<br />
          It <span className="text-slide-accent">predicts.</span>
        </h2>

        <div className="flex-1 flex flex-col justify-center">
          <div
            className="text-white/70 mb-6"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '30px' }}
          >
            &gt; "The smartest AI you know is just very good at..."
          </div>

          <div className="space-y-3">
            {tokens.map((t) => (
              <div key={t.word} className="flex items-center gap-6">
                <div
                  className={
                    'h-12 ' + (t.hi ? 'bg-slide-accent' : 'bg-white/15')
                  }
                  style={{ width: `${t.p * 900}px`, minWidth: '40px' }}
                />
                <span
                  className={t.hi ? 'text-white' : 'text-white/60'}
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: t.hi ? '36px' : '28px',
                    fontWeight: t.hi ? 700 : 400,
                  }}
                >
                  {t.word}
                </span>
                <span
                  className="text-white/40"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px' }}
                >
                  p = {t.p.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
