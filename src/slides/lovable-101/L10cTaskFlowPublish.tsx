import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';

const PROMPT = `Add a "Today" filter that shows only
tasks with due_date = today.
Also add a small confetti burst when
the user marks the last task as done.
Then publish.`;

const REPLY = `✓ Filter logic added (today's date)
✓ Confetti animation on last completion
✓ Published to taskflow.lovable.app
Live now 🎉`;

function PublishedPreview() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex flex-col items-center justify-center text-center px-10 relative overflow-hidden">
      {/* Confetti */}
      {[...Array(18)].map((_, i) => {
        const colors = ['#FA7268', '#4E93FF', '#F5C518', '#27c93f'];
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 31) % 100}%`,
              width: 8,
              height: 14,
              background: colors[i % 4],
              transform: `rotate(${i * 23}deg)`,
              opacity: 0.85,
            }}
          />
        );
      })}
      <div className="relative z-10">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-[hsl(220_60%_15%)] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
          All done for today.
        </h3>
        <p className="text-slide-gray-600 mb-5" style={{ fontSize: '15px' }}>
          You shipped your day. And your app.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10" style={{ fontSize: '13px', fontFamily: 'IBM Plex Mono, monospace' }}>
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
          taskflow.lovable.app · LIVE
        </div>
      </div>
    </div>
  );
}

export default function L10cTaskFlowPublish() {
  return (
    <LovableFrame index={17} eyebrow="Project 02 · Ship it">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-6" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          One more prompt. <span className="text-slide-accent">Then publish.</span>
        </h2>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<PublishedPreview />}
            url="taskflow.lovable.app"
            caption="// Click Publish. You get a real URL you can share with anyone — phones, laptops, the world."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
