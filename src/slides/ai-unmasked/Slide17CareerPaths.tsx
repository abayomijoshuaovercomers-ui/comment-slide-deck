import React from 'react';
import { SlideFrame } from './SlideFrame';

const groups = [
  {
    label: 'Builders',
    roles: ['AI Engineer', 'ML Engineer'],
  },
  {
    label: 'Thinkers',
    roles: ['AI Product Manager', 'Prompt Engineer'],
  },
  {
    label: 'Creators',
    roles: ['AI Content Creator', 'AI Designer'],
  },
];

export default function Slide17CareerPaths() {
  return (
    <SlideFrame index={17} eyebrow="Where You Fit">
      <div className="flex flex-col h-full px-20 pt-32 pb-28">
        <h2
          className="text-white tracking-tight mb-4"
          style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.95 }}
        >
          Career paths in <span className="text-slide-accent">AI.</span>
        </h2>
        <p
          className="text-white/60 mb-16"
          style={{ fontSize: '28px', fontWeight: 300 }}
        >
          There is space for everyone — if you position yourself.
        </p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="border-t-[6px] border-slide-accent bg-white/[0.03] p-10 flex flex-col"
            >
              <span
                className="text-white/30 mb-6"
                style={{ fontSize: '26px', fontWeight: 700, fontFamily: 'IBM Plex Mono, monospace' }}
              >
                0{i + 1}
              </span>
              <span
                className="text-white mb-10"
                style={{ fontSize: '64px', fontWeight: 800, lineHeight: 1 }}
              >
                {g.label}
              </span>
              <div className="space-y-4 mt-auto">
                {g.roles.map((r) => (
                  <div
                    key={r}
                    className="text-white/80 flex items-center gap-4"
                    style={{ fontSize: '30px', fontWeight: 500 }}
                  >
                    <span className="h-[2px] w-8 bg-slide-accent" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
