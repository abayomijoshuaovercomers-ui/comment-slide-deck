import React from 'react';
import { SlideFrame } from './SlideFrame';
import { GraduationCap, BookOpen, MessagesSquare } from 'lucide-react';

const features = [
  { icon: BookOpen, t: 'Understand topics' },
  { icon: GraduationCap, t: 'Summarize notes' },
  { icon: MessagesSquare, t: 'Ask questions' },
];

export default function Slide14LiveProject() {
  return (
    <SlideFrame index={14} eyebrow="Live Build">
      <div className="flex h-full px-20 pt-32 pb-28 items-center gap-16">
        <div className="flex-1">
          <span
            className="uppercase tracking-[0.4em] text-slide-accent mb-6 block"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            Project
          </span>
          <h2
            className="text-white tracking-tight mb-8"
            style={{ fontSize: '120px', fontWeight: 800, lineHeight: 0.92 }}
          >
            AI Student<br />
            <span className="text-slide-accent">Assistant.</span>
          </h2>
          <p className="text-white/65 max-w-[700px]" style={{ fontSize: '30px', fontWeight: 300, lineHeight: 1.4 }}>
            Let me show you how to build something real — not a toy. A tool a student
            can open tonight.
          </p>
        </div>

        <div className="w-[640px] space-y-5">
          {features.map(({ icon: Icon, t }, i) => (
            <div
              key={t}
              className="flex items-center gap-6 border border-white/15 px-8 py-7 bg-white/[0.03]"
            >
              <div className="w-16 h-16 bg-slide-accent flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <span
                className="text-white/40"
                style={{ fontSize: '22px', fontWeight: 600, fontFamily: 'IBM Plex Mono, monospace' }}
              >
                0{i + 1}
              </span>
              <span className="text-white" style={{ fontSize: '34px', fontWeight: 600 }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
