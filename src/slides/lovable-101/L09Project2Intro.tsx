import React from 'react';
import { LovableFrame } from './LovableFrame';

export default function L09Project2Intro() {
  return (
    <LovableFrame index={9} eyebrow="Project 02" variant="dark">
      <div className="flex h-full px-20 py-32 items-center gap-20">
        <div className="flex-1">
          <span className="text-slide-accent uppercase tracking-[0.4em]" style={{ fontSize: '22px', fontWeight: 600 }}>
            Live Build · 10 minutes
          </span>
          <h2
            className="text-white tracking-tight mt-8 mb-10"
            style={{ fontSize: '150px', fontWeight: 800, lineHeight: 0.9 }}
          >
            A real<br />
            <span className="text-slide-accent">SaaS app.</span>
          </h2>
          <p className="text-white/70 max-w-[820px]" style={{ fontSize: '30px', fontWeight: 300, lineHeight: 1.4 }}>
            "TaskFlow" — a task manager with login, a database, and per-user
            data. The kind of thing that used to take a team a week.
          </p>
        </div>

        <div className="w-[460px] shrink-0 border border-white/15 bg-white/[0.04] p-10">
          <p className="text-white/40 uppercase tracking-[0.25em] mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>
            Stack we'll touch
          </p>
          {[
            ['Frontend', 'React + Tailwind'],
            ['Backend', 'Lovable Cloud'],
            ['Database', 'Postgres + RLS'],
            ['Auth', 'Email + Google'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-4 border-t border-white/10 first:border-t-0">
              <span className="text-white/55 uppercase tracking-[0.2em]" style={{ fontSize: '16px', fontWeight: 600 }}>
                {k}
              </span>
              <span className="text-white" style={{ fontSize: '24px', fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
