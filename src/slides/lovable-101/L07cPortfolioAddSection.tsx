import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';

const PROMPT = `Add a Talks section: 3 cards in a grid.
Each card: title, venue, year.
Use the same coral accent on the year.`;

const REPLY = `✓ Talks section inserted after About
✓ 3-col grid (stacks on mobile)
✓ Coral accent on year labels
Done.`;

const TALKS = [
  { t: 'AI Unmasked', v: 'Lagos Tech Week', y: '2025' },
  { t: 'Prompt Like a Pro', v: 'Ibadan AI Summit', y: '2025' },
  { t: 'The Future is Built', v: 'TEDx UI', y: '2024' },
];

function TalksPreview() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex flex-col px-10 py-8">
      <p className="text-[#FA7268] mb-2" style={{ fontSize: '12px', letterSpacing: '0.3em', fontWeight: 700 }}>
        TALKS
      </p>
      <h3 className="text-[hsl(220_60%_15%)] mb-6" style={{ fontSize: '36px', fontWeight: 800 }}>
        Where I've spoken.
      </h3>
      <div className="grid grid-cols-3 gap-5 flex-1">
        {TALKS.map((talk) => (
          <div key={talk.t} className="bg-white border border-black/5 p-5 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-[#FA7268]" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em' }}>
                {talk.y}
              </p>
              <h4 className="text-[hsl(220_60%_15%)] mt-2" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.15 }}>
                {talk.t}
              </h4>
            </div>
            <p className="text-slide-gray-600 mt-4" style={{ fontSize: '13px' }}>{talk.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function L07cPortfolioAddSection() {
  return (
    <LovableFrame index={10} eyebrow="Project 01 · Adding sections">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-6" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          Add anything. <span className="text-slide-accent">Anytime.</span>
        </h2>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<TalksPreview />}
            url="abayomi.lovable.app/#talks"
            caption="// New section. New layout. Zero broken styling. The rest of the site stays untouched."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
