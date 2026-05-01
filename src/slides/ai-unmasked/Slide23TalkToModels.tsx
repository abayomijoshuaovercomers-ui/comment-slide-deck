import React from 'react';
import { SlideFrame } from './SlideFrame';

const rules = [
  {
    n: '01',
    rule: 'Speak to it like a smart intern, not a search bar.',
    why: 'It needs context, not keywords.',
  },
  {
    n: '02',
    rule: 'Give it a role before you give it a task.',
    why: '"You are a…" unlocks expert-mode.',
  },
  {
    n: '03',
    rule: 'Show, don\u2019t just tell — give one example.',
    why: 'One sample > 1,000 words of instruction.',
  },
  {
    n: '04',
    rule: 'Iterate. Never accept the first answer.',
    why: '"Make it sharper. Cut 50%. Try again."',
  },
  {
    n: '05',
    rule: 'Ask it to think step-by-step before answering.',
    why: 'Reasoning beats reflex.',
  },
  {
    n: '06',
    rule: 'Tell it what NOT to do.',
    why: 'Constraints create quality.',
  },
];

const before = '"Write me a business plan."';
const after =
  '"You are a YC partner. Write a 1-page business plan for an edtech startup in Nigeria targeting JAMB students. Use the lean canvas format. Max 250 words. No fluff. Output as markdown."';

export default function Slide23TalkToModels() {
  return (
    <SlideFrame index={23} eyebrow="The Real Skill">
      <div className="flex flex-col h-full px-20 pt-24 pb-20">
        <div className="mb-6">
          <span
            className="uppercase tracking-[0.4em] text-slide-accent block mb-3"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            How to communicate with the model
          </span>
          <h2
            className="text-white tracking-tight"
            style={{ fontSize: '84px', fontWeight: 800, lineHeight: 0.95 }}
          >
            Stop chatting.<br />
            Start <span className="text-slide-accent">commanding.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 flex-1">
          {/* Six rules */}
          <div className="col-span-7 grid grid-cols-2 gap-3">
            {rules.map((r) => (
              <div
                key={r.n}
                className="border border-white/15 bg-white/[0.03] p-5 flex flex-col"
              >
                <span
                  className="text-slide-accent mb-2"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                >
                  {r.n}
                </span>
                <p
                  className="text-white mb-2"
                  style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25 }}
                >
                  {r.rule}
                </p>
                <p
                  className="text-white/50 mt-auto"
                  style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.3 }}
                >
                  {r.why}
                </p>
              </div>
            ))}
          </div>

          {/* Before / After */}
          <div className="col-span-5 flex flex-col gap-4">
            <div className="border border-white/15 bg-black/40 p-6 flex-1">
              <span
                className="uppercase tracking-[0.3em] text-white/40 block mb-3"
                style={{ fontSize: '18px', fontWeight: 600 }}
              >
                Bad prompt
              </span>
              <p
                className="text-white/70"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '24px',
                  lineHeight: 1.4,
                }}
              >
                {before}
              </p>
            </div>
            <div className="border-2 border-slide-accent bg-slide-accent/10 p-6 flex-[2]">
              <span
                className="uppercase tracking-[0.3em] text-slide-accent block mb-3"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                Power prompt
              </span>
              <p
                className="text-white"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '22px',
                  lineHeight: 1.5,
                }}
              >
                {after}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
