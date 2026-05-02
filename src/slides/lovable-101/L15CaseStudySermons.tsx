import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';

const PROMPT = `Build "GraceNotes" — a sermon archive for my church.

PROBLEM:
Members keep asking on WhatsApp for last Sunday's notes.
Pastors spend Mondays re-sending the same PDF.

SOLUTION:
A clean public site where every sermon is one click away.

PAGES:
- Home: latest 3 sermons, big "Listen now" hero
- Sermons list: search + filter by series/preacher/year
- Sermon page: title, date, preacher, audio player,
  scripture refs, downloadable notes (PDF), share button
- Admin (login required): upload audio + notes

DATABASE (Lovable Cloud):
- sermons (title, preacher, date, series, audio_url, notes_url, scripture)
- RLS: anyone can READ; only admin role can INSERT/UPDATE.

DESIGN:
Warm cream bg #F8F4EC, deep burgundy accent #6D2E46,
serif headings (Playfair-style), generous line-height.
Feel: like a hymn book, modern but reverent.`;

const REPLY = `✓ Cloud enabled · table 'sermons' created
✓ RLS: public read, admin-only write
✓ 4 pages built (Home, List, Detail, Admin)
✓ Audio player + PDF download wired
✓ Search + filter working
Preview live →`;

function SermonsPreview() {
  const sermons = [
    { t: 'The Weight of Mercy', p: 'Pastor Daniel', d: 'Apr 28, 2026', s: 'Romans · Pt. 7' },
    { t: 'When God Feels Silent', p: 'Pastor Grace', d: 'Apr 21, 2026', s: 'Job · Pt. 3' },
    { t: 'Ordinary Faithfulness', p: 'Pastor Daniel', d: 'Apr 14, 2026', s: 'Standalone' },
  ];
  return (
    <div className="w-full h-full bg-[hsl(38_45%_95%)] flex flex-col" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-[#6D2E46]/15">
        <span className="text-[#6D2E46]" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '0.02em' }}>
          GraceNotes
        </span>
        <div className="flex gap-5 text-slide-gray-700" style={{ fontSize: '13px' }}>
          <span>Sermons</span><span>Series</span><span>About</span>
        </div>
      </div>
      {/* Hero featured sermon */}
      <div className="px-8 py-5 border-b border-[#6D2E46]/10">
        <p className="text-[#6D2E46] uppercase tracking-[0.3em] mb-2" style={{ fontSize: '10px', fontWeight: 700, fontFamily: 'sans-serif' }}>This Sunday</p>
        <h1 className="text-slide-gray-900 mb-1" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.05 }}>
          The Weight of Mercy
        </h1>
        <p className="text-slide-gray-600 mb-3" style={{ fontSize: '13px' }}>
          Pastor Daniel · Romans 9:14–24 · 38 min
        </p>
        {/* Player */}
        <div className="flex items-center gap-3 bg-white border border-[#6D2E46]/15 rounded-full px-3 py-2">
          <button className="h-8 w-8 rounded-full bg-[#6D2E46] text-white flex items-center justify-center" style={{ fontSize: '12px' }}>▶</button>
          <div className="flex-1 h-1 rounded-full bg-[#6D2E46]/15 relative">
            <div className="absolute left-0 top-0 h-1 w-[35%] rounded-full bg-[#6D2E46]" />
          </div>
          <span className="text-slide-gray-500" style={{ fontSize: '11px', fontFamily: 'monospace' }}>13:24 / 38:02</span>
          <button className="px-2.5 py-1 border border-[#6D2E46]/30 rounded-full text-[#6D2E46]" style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'sans-serif' }}>↓ Notes (PDF)</button>
        </div>
      </div>
      {/* Recent list */}
      <div className="px-8 py-4 flex-1 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <p className="text-slide-gray-900" style={{ fontSize: '15px', fontWeight: 700 }}>Recent sermons</p>
          <input className="px-3 py-1.5 bg-white border border-[#6D2E46]/20 rounded text-slide-gray-700" placeholder="Search…" style={{ fontSize: '12px', fontFamily: 'sans-serif' }} readOnly />
        </div>
        <div className="space-y-2">
          {sermons.map((s) => (
            <div key={s.t} className="flex items-center gap-3 px-3 py-2.5 bg-white/60 rounded border-l-2 border-[#6D2E46]">
              <span className="text-[#6D2E46]" style={{ fontSize: '11px', fontFamily: 'monospace', minWidth: '70px' }}>{s.d}</span>
              <div className="flex-1">
                <p className="text-slide-gray-900" style={{ fontSize: '14px', fontWeight: 700 }}>{s.t}</p>
                <p className="text-slide-gray-600" style={{ fontSize: '11px', fontFamily: 'sans-serif' }}>{s.p} · {s.s}</p>
              </div>
              <button className="text-[#6D2E46]" style={{ fontSize: '14px' }}>▶</button>
              <button className="text-slide-gray-400" style={{ fontSize: '14px' }}>↓</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function L15CaseStudySermons() {
  return (
    <LovableFrame index={21} eyebrow="Case Study · Community Need">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <div className="flex items-end justify-between mb-5">
          <div className="max-w-[60%]">
            <p className="text-slide-accent uppercase tracking-[0.3em] mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
              Problem → Solution → Build
            </p>
            <h2 className="text-slide-gray-900" style={{ fontSize: '46px', fontWeight: 800, lineHeight: 1 }}>
              "Pastors spend Mondays re-sending last Sunday's notes."
            </h2>
          </div>
          <div className="bg-[#6D2E46] text-white px-5 py-3 rounded-lg max-w-[35%]">
            <p className="uppercase tracking-[0.25em] opacity-70 mb-1" style={{ fontSize: '11px', fontWeight: 700 }}>Solution</p>
            <p style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.3 }}>
              A public sermon archive — listen, read, download, share. One link replaces a hundred WhatsApp asks.
            </p>
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<SermonsPreview />}
            url="gracenotes.lovable.app"
            caption="// One detailed prompt = a full multi-page app with database, auth roles, and a real audio player."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
