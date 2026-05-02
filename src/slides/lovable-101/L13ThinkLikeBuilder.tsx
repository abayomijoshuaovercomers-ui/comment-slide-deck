import React from 'react';
import { LovableFrame } from './LovableFrame';

const STEPS = [
  {
    n: '01',
    title: 'Notice a Problem',
    body: 'Look at your day. Where do people waste time, repeat themselves, or get frustrated? That friction is your idea.',
    example: '"My church members keep asking for last Sunday\'s sermon notes on WhatsApp."',
  },
  {
    n: '02',
    title: 'Declare the Solution',
    body: 'In ONE sentence, say what the app does and for whom. If you can\'t say it in a sentence, the idea is still fuzzy.',
    example: '"A simple site where my church can read & download every sermon."',
  },
  {
    n: '03',
    title: 'List the Screens',
    body: 'Close your eyes. What 2–4 screens does the user see? Home, list, detail, admin. That\'s your blueprint.',
    example: 'Home · Sermon list · Single sermon page · Admin upload',
  },
  {
    n: '04',
    title: 'Prompt → Refine → Ship',
    body: 'One bold first prompt. Then talk to Lovable like a designer until it\'s right. Then click Publish.',
    example: '"Build it." → "Make it warmer." → "Add search." → Publish.',
  },
];

export default function L13ThinkLikeBuilder() {
  return (
    <LovableFrame index={17} eyebrow="The Builder's Mindset">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-3" style={{ fontSize: '60px', fontWeight: 800, lineHeight: 1 }}>
          Think like a <span className="text-slide-accent">builder</span>.
        </h2>
        <p className="text-slide-gray-600 mb-8" style={{ fontSize: '22px' }}>
          Before you ever open Lovable — do these four things in your head.
        </p>

        <div className="grid grid-cols-2 gap-5 flex-1">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-white border border-slide-gray-200 p-7 flex flex-col">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-slide-accent" style={{ fontSize: '44px', fontWeight: 800, lineHeight: 1 }}>
                  {s.n}
                </span>
                <h3 className="text-slide-gray-900" style={{ fontSize: '26px', fontWeight: 700 }}>
                  {s.title}
                </h3>
              </div>
              <p className="text-slide-gray-700 mb-4" style={{ fontSize: '18px', lineHeight: 1.45 }}>
                {s.body}
              </p>
              <div className="mt-auto pt-3 border-t border-slide-gray-200">
                <p className="text-slide-gray-500 uppercase tracking-[0.2em] mb-1" style={{ fontSize: '12px', fontWeight: 700 }}>
                  Example
                </p>
                <p className="text-slide-gray-900 italic" style={{ fontSize: '17px', lineHeight: 1.4 }}>
                  {s.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
