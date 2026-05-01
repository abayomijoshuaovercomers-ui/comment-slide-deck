import React from 'react';
import { SlideFrame } from './SlideFrame';

const parts = [
  {
    n: '01',
    label: 'ROLE',
    desc: 'Tell it WHO it is.',
    example: '"You are a senior product strategist with 15 years experience…"',
  },
  {
    n: '02',
    label: 'CONTEXT',
    desc: 'Give it WHAT it needs to know.',
    example: '"My audience is Gen Z founders in Lagos building edtech apps…"',
  },
  {
    n: '03',
    label: 'TASK',
    desc: 'Tell it EXACTLY what to do.',
    example: '"Generate a 10-slide investor pitch with hook, problem, solution…"',
  },
  {
    n: '04',
    label: 'CONSTRAINTS',
    desc: 'Set the RULES of the output.',
    example: '"Max 40 words per slide. No buzzwords. Use the AIDA framework."',
  },
  {
    n: '05',
    label: 'FORMAT',
    desc: 'Define HOW it should respond.',
    example: '"Output as JSON: { slide, headline, body, speaker_note }."',
  },
  {
    n: '06',
    label: 'EXAMPLE',
    desc: 'Show it ONE perfect answer.',
    example: '"Here\u2019s a sample slide I love: …  match this tone."',
  },
];

export default function Slide21PromptAnatomy() {
  return (
    <SlideFrame index={21} eyebrow="Anatomy of a Prompt">
      <div className="flex flex-col h-full px-20 pt-28 pb-24">
        <div className="mb-8">
          <span
            className="uppercase tracking-[0.4em] text-slide-accent block mb-4"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            How Prompts Build Massive Projects
          </span>
          <h2
            className="text-white tracking-tight"
            style={{ fontSize: '92px', fontWeight: 800, lineHeight: 0.95 }}
          >
            Six layers.<br />
            One <span className="text-slide-accent">unstoppable</span> prompt.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 flex-1">
          {parts.map((p) => (
            <div
              key={p.n}
              className="border border-white/15 bg-white/[0.03] p-7 flex flex-col"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-slide-accent"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '28px',
                    fontWeight: 700,
                  }}
                >
                  {p.n}
                </span>
                <span
                  className="text-white tracking-[0.25em]"
                  style={{ fontSize: '24px', fontWeight: 700 }}
                >
                  {p.label}
                </span>
              </div>
              <p
                className="text-white mb-4"
                style={{ fontSize: '26px', fontWeight: 600, lineHeight: 1.2 }}
              >
                {p.desc}
              </p>
              <p
                className="text-white/55 mt-auto"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '20px',
                  lineHeight: 1.4,
                }}
              >
                {p.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
