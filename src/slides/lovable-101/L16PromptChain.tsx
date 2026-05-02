import React, { useState } from 'react';
import { LovableFrame } from './LovableFrame';
import { CopyablePromptBox } from './CopyablePromptBox';
import { Copy, Check } from 'lucide-react';

function CopyChip({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        } catch {}
      }}
      className={`shrink-0 flex items-center gap-1 px-2 py-1 rounded ${
        copied ? 'bg-slide-accent text-white' : 'bg-slide-gray-100 text-slide-gray-600 hover:bg-slide-gray-200'
      }`}
      style={{ fontSize: '11px', fontWeight: 700 }}
      title="Copy this refinement prompt"
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

const FIRST = `Build "GraceNotes" — a sermon archive for my church.
Cream bg, burgundy accent, serif headings.
Pages: Home, Sermons list, Sermon detail, Admin upload.
Cloud DB table 'sermons' with RLS (public read, admin write).
Audio player + downloadable PDF notes on each sermon.`;

const FOLLOWUPS = [
  {
    p: '"The hero feels too plain. Add a featured-sermon card with the audio player INSIDE the hero, and tint the background with a subtle burgundy gradient."',
    r: 'Hero rebuilt. Player embedded. Soft gradient added.',
  },
  {
    p: '"On the sermons list, add filter chips at the top: All · This Year · By Series · By Preacher. Make them sticky when scrolling."',
    r: 'Filter chips added with sticky behaviour.',
  },
  {
    p: '"The dates look like 2026-04-28. Show them as ‘Apr 28, 2026\' instead — across the whole site."',
    r: 'Date format updated globally via a helper.',
  },
  {
    p: '"Admin page: only show the upload form if the logged-in user has the admin role. Otherwise show a kind message."',
    r: 'Role check wired via has_role(). Non-admins see a friendly empty state.',
  },
  {
    p: '"Add a Share button on each sermon — copies the link and shows a toast."',
    r: 'Share button + clipboard copy + toast added.',
  },
  {
    p: '"Looks great. Publish."',
    r: '✓ Live at gracenotes.lovable.app',
  },
];

export default function L16PromptChain() {
  return (
    <LovableFrame index={20} eyebrow="Anatomy of a Real Build">
      <div className="flex flex-col h-full px-16 pt-28 pb-16">
        <h2 className="text-slide-gray-900 mb-2" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          The exact <span className="text-slide-accent">prompt chain.</span>
        </h2>
        <p className="text-slide-gray-600 mb-6" style={{ fontSize: '20px' }}>
          One bold first prompt, then six small refinements. That's the whole secret.
        </p>

        <div className="grid grid-cols-[1fr_1.4fr] gap-6 flex-1 min-h-0">
          {/* First prompt */}
          <div className="bg-[hsl(220_25%_8%)] text-white p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-slide-accent" />
              <span className="text-slide-accent uppercase tracking-[0.25em]" style={{ fontSize: '13px', fontWeight: 700 }}>
                Prompt 01 · The Foundation
              </span>
            </div>
            <pre
              className="whitespace-pre-wrap text-white/90 flex-1"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '15px', lineHeight: 1.5 }}
            >
{FIRST}
            </pre>
            <div className="mt-4 pt-4 border-t border-white/10 text-white/60" style={{ fontSize: '13px', lineHeight: 1.4 }}>
              💡 First prompts are <span className="text-white">long</span> on purpose.
              Name the problem, list the pages, name the colors, name the database.
              Lovable rewards specificity.
            </div>
          </div>

          {/* Refinement chain */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-slide-accent" />
              <span className="text-slide-gray-600 uppercase tracking-[0.25em]" style={{ fontSize: '13px', fontWeight: 700 }}>
                Refinements 02 → 07
              </span>
            </div>
            <div className="flex-1 overflow-hidden space-y-2">
              {FOLLOWUPS.map((f, i) => (
                <div key={i} className="flex gap-3 bg-white border border-slide-gray-200 p-3">
                  <span className="text-slide-accent shrink-0" style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1, minWidth: '34px' }}>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-slide-gray-900 mb-1" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.35 }}>
                      {f.p}
                    </p>
                    <p className="text-slide-accent" style={{ fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                      → {f.r}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LovableFrame>
  );
}
