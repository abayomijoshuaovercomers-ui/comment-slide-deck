import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';

const PROMPT = `Build "TutorLink" — a local tutor booking site for Lagos.

PROBLEM I'm solving:
Parents waste hours on WhatsApp finding a maths tutor.

USER FLOW:
1. Parent lands on home → sees a search ("subject + area")
2. Sees a list of tutors with photo, subject, rate, rating
3. Clicks one → sees full profile + "Book a free 15-min call"
4. Picks a time → gets a confirmation

DESIGN:
Soft white background, deep green accent (#1E5631),
warm photos, rounded 16px cards, generous spacing.
Feel: trustworthy, like a private school brochure.`;

const REPLY = `✓ Home with hero + search bar
✓ Tutor list (8 sample tutors with photos)
✓ Profile page + booking calendar
✓ Confirmation toast
Preview live →`;

function TutorListPreview() {
  const tutors = [
    { n: 'Mrs. Ada O.', s: 'Mathematics · JSS–SSS', r: 4.9, p: '₦8,000/hr', a: 'Lekki' },
    { n: 'Mr. Tunde A.', s: 'Physics · SSS', r: 4.8, p: '₦10,000/hr', a: 'Yaba' },
    { n: 'Ms. Chiamaka E.', s: 'English · Primary', r: 5.0, p: '₦6,500/hr', a: 'Surulere' },
    { n: 'Dr. Femi K.', s: 'Chemistry · WAEC', r: 4.9, p: '₦12,000/hr', a: 'Ikeja' },
  ];
  return (
    <div className="w-full h-full bg-[hsl(40_30%_98%)] flex flex-col">
      {/* Nav */}
      <div className="flex items-center justify-between px-7 py-4 border-b border-black/5 bg-white">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-[#1E5631] text-white flex items-center justify-center" style={{ fontSize: '12px', fontWeight: 800 }}>T</span>
          <span style={{ fontSize: '16px', fontWeight: 800 }}>TutorLink</span>
        </div>
        <div className="flex gap-5 text-slide-gray-600" style={{ fontSize: '13px' }}>
          <span>Find a tutor</span><span>Become a tutor</span><span>Sign in</span>
        </div>
      </div>
      {/* Hero search */}
      <div className="px-8 py-5 bg-[#1E5631] text-white">
        <h1 style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.1 }}>Find a trusted tutor near you.</h1>
        <p className="opacity-80 mb-3" style={{ fontSize: '12px' }}>500+ verified tutors across Lagos.</p>
        <div className="flex gap-2 bg-white p-1.5 rounded-lg">
          <input className="flex-1 px-3 py-1.5 text-slide-gray-900" placeholder="Subject (e.g. Maths)" style={{ fontSize: '12px' }} readOnly />
          <input className="flex-1 px-3 py-1.5 text-slide-gray-900 border-l border-slide-gray-200" placeholder="Area (e.g. Lekki)" style={{ fontSize: '12px' }} readOnly />
          <button className="px-4 py-1.5 bg-[#1E5631] text-white rounded" style={{ fontSize: '12px', fontWeight: 600 }}>Search</button>
        </div>
      </div>
      {/* List */}
      <div className="flex-1 overflow-hidden px-7 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slide-gray-700" style={{ fontSize: '13px', fontWeight: 700 }}>4 tutors found</span>
          <span className="text-slide-gray-500" style={{ fontSize: '11px' }}>Sort: Top rated ▾</span>
        </div>
        <div className="space-y-2">
          {tutors.map((t, i) => (
            <div key={t.n} className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-black/5">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1E5631] to-[#84B59F] flex items-center justify-center text-white" style={{ fontSize: '14px', fontWeight: 700 }}>
                {t.n.split(' ')[1]?.[0] || t.n[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-slide-gray-900" style={{ fontSize: '14px', fontWeight: 700 }}>{t.n}</span>
                  <span className="text-[#1E5631] bg-[#1E5631]/10 px-1.5 py-0.5 rounded" style={{ fontSize: '10px', fontWeight: 700 }}>★ {t.r}</span>
                </div>
                <p className="text-slide-gray-600" style={{ fontSize: '12px' }}>{t.s} · {t.a}</p>
              </div>
              <div className="text-right">
                <p className="text-slide-gray-900" style={{ fontSize: '13px', fontWeight: 700 }}>{t.p}</p>
                <button className="mt-1 px-3 py-1 bg-[#1E5631] text-white rounded-md" style={{ fontSize: '11px', fontWeight: 600 }}>Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function L14CaseStudyTutor() {
  return (
    <LovableFrame index={20} eyebrow="Case Study · Local Problem">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <div className="flex items-end justify-between mb-5">
          <div className="max-w-[60%]">
            <p className="text-slide-accent uppercase tracking-[0.3em] mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
              Problem → Solution → Build
            </p>
            <h2 className="text-slide-gray-900" style={{ fontSize: '46px', fontWeight: 800, lineHeight: 1 }}>
              "Parents waste hours finding a tutor on WhatsApp."
            </h2>
          </div>
          <div className="bg-[#1E5631] text-white px-5 py-3 rounded-lg max-w-[35%]">
            <p className="uppercase tracking-[0.25em] opacity-70 mb-1" style={{ fontSize: '11px', fontWeight: 700 }}>Solution</p>
            <p style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.3 }}>
              A search-based marketplace that lists verified Lagos tutors and lets parents book in two taps.
            </p>
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<TutorListPreview />}
            url="tutorlink.lovable.app"
            caption="// Notice the prompt names the problem first. That tells Lovable WHO this is for and WHY it matters."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
