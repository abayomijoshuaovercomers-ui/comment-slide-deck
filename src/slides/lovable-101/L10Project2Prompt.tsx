import React from 'react';
import { LovableFrame } from './LovableFrame';

const PROMPT = `Build "TaskFlow", a personal task manager.

Enable Lovable Cloud.

Auth:
  - Email + password sign up / sign in
  - Sign in with Google
  - Auto-confirm new users

Database:
  - Table: tasks (id, user_id, title, done, due_date, created_at)
  - RLS: each user can only see and edit their own tasks
  - Roles in a separate user_roles table (user, admin)

UI (after sign in):
  - Top bar with logo, user avatar, sign out
  - Add-task input at top, big and friendly
  - List of tasks below — checkbox, title, due date, delete
  - Filter tabs: All / Today / Done
  - Empty state with a kind sentence and an emoji

Style: soft pastel, generous spacing, rounded 12px corners,
Inter font. Feel like Linear meets a Moleskine notebook.`;

export default function L10Project2Prompt() {
  return (
    <LovableFrame index={10} eyebrow="Project 02 · The Prompt">
      <div className="flex h-full px-20 pt-32 pb-24 gap-10">
        <div className="flex-[1.3] flex flex-col">
          <p className="text-slide-gray-600 uppercase tracking-[0.3em] mb-4" style={{ fontSize: '20px', fontWeight: 600 }}>
            One prompt. Whole app.
          </p>
          <div className="flex-1 bg-[hsl(220_25%_8%)] p-10 overflow-hidden">
            <pre
              className="text-white/90 whitespace-pre-wrap"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '21px', lineHeight: 1.45 }}
            >
{PROMPT}
            </pre>
          </div>
        </div>

        <div className="w-[480px] shrink-0 flex flex-col gap-5">
          {[
            ['10 min', 'From idea to working SaaS.'],
            ['0 servers', 'Cloud handles DB, Auth, APIs.'],
            ['100% yours', 'Code, data, and domain. You own it all.'],
          ].map(([n, t]) => (
            <div key={n} className="flex-1 bg-white border border-slide-gray-200 p-8 flex flex-col justify-center">
              <span className="text-slide-accent" style={{ fontSize: '76px', fontWeight: 800, lineHeight: 1 }}>
                {n}
              </span>
              <p className="text-slide-gray-700 mt-3" style={{ fontSize: '24px', fontWeight: 500 }}>
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
