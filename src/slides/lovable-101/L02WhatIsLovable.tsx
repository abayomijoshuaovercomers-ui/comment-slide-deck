import React from 'react';
import { LovableFrame } from './LovableFrame';

export default function L02WhatIsLovable() {
  return (
    <LovableFrame index={2} eyebrow="What is Lovable?">
      <div className="flex h-full px-20 pt-32 pb-24 gap-16">
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="text-slide-gray-900 tracking-tight mb-10"
            style={{ fontSize: '120px', fontWeight: 800, lineHeight: 0.92 }}
          >
            You <span className="text-slide-accent">describe</span> it.<br />
            Lovable <span className="text-slide-accent">builds</span> it.
          </h2>
          <p className="text-slide-gray-700 max-w-[820px]" style={{ fontSize: '30px', fontWeight: 300, lineHeight: 1.4 }}>
            Lovable is an AI software engineer that turns plain English into real,
            deployable web apps — frontend, backend, database and all.
          </p>
        </div>

        <div className="w-[640px] grid grid-cols-1 gap-5">
          {[
            ['No setup', 'Open browser. Start typing. Done.'],
            ['No code required', 'But every line is yours to edit.'],
            ['Real stack', 'React + Tailwind + Cloud (DB, Auth, Functions).'],
            ['Ship instantly', 'Click Publish — your app is live.'],
          ].map(([h, s]) => (
            <div key={h} className="border-l-4 border-slide-accent bg-white px-8 py-6 shadow-sm">
              <p className="text-slide-gray-900" style={{ fontSize: '32px', fontWeight: 700 }}>{h}</p>
              <p className="text-slide-gray-600 mt-1" style={{ fontSize: '22px', fontWeight: 400 }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
