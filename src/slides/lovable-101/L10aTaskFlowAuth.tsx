import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';

const PROMPT = `Build TaskFlow — a task manager.
Enable Lovable Cloud.
Auth: email + Google sign-in.
Table: tasks (user_id, title, done, due_date)
with RLS so each user sees only their tasks.`;

const REPLY = `✓ Lovable Cloud enabled
✓ Auth wired (email + Google)
✓ Table 'tasks' created with RLS
✓ Sign-in screen scaffolded
Ready →`;

function AuthPreview() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex items-center justify-center">
      <div className="bg-white border border-black/10 rounded-2xl p-8 w-[340px] shadow-lg">
        <h3 className="text-center text-[hsl(220_60%_15%)] mb-1" style={{ fontSize: '24px', fontWeight: 800 }}>
          Welcome to TaskFlow
        </h3>
        <p className="text-center text-slide-gray-500 mb-6" style={{ fontSize: '13px' }}>
          Get your day in order.
        </p>
        <button className="w-full py-2.5 mb-3 border border-slide-gray-300 rounded-lg flex items-center justify-center gap-2" style={{ fontSize: '14px', fontWeight: 600 }}>
          <span className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-red-500" />
          Continue with Google
        </button>
        <div className="my-3 text-center text-slide-gray-400" style={{ fontSize: '12px' }}>or</div>
        <input className="w-full px-3 py-2 mb-2 border border-slide-gray-300 rounded-lg" placeholder="you@email.com" style={{ fontSize: '13px' }} readOnly />
        <input className="w-full px-3 py-2 mb-3 border border-slide-gray-300 rounded-lg" placeholder="••••••••" style={{ fontSize: '13px' }} readOnly />
        <button className="w-full py-2.5 bg-[#FA7268] text-white rounded-lg" style={{ fontSize: '14px', fontWeight: 600 }}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default function L10aTaskFlowAuth() {
  return (
    <LovableFrame index={15} eyebrow="Project 02 · Auth in one prompt">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-6" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          Database + login. <span className="text-slide-accent">In one shot.</span>
        </h2>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<AuthPreview />}
            url="taskflow.lovable.app/auth"
            caption="// Cloud sets up the DB, auth, RLS, and the sign-in screen. You just describe it."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
