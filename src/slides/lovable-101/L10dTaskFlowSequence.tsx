import React from 'react';
import { LovableFrame } from './LovableFrame';
import { CopyablePromptBox } from './CopyablePromptBox';

// ----- 4 mini previews of TaskFlow's evolution -----

function V1Auth() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex items-center justify-center px-2">
      <div className="bg-white border border-black/10 rounded-lg p-2 w-full max-w-[80%] shadow">
        <p className="text-center mb-1" style={{ fontSize: '9px', fontWeight: 800 }}>Welcome to TaskFlow</p>
        <button className="w-full py-1 mb-1 border border-slide-gray-300 rounded flex items-center justify-center gap-1" style={{ fontSize: '7px', fontWeight: 600 }}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Continue with Google
        </button>
        <input className="w-full px-1.5 py-1 mb-1 border border-slide-gray-300 rounded" placeholder="email" style={{ fontSize: '7px' }} readOnly />
        <input className="w-full px-1.5 py-1 mb-1 border border-slide-gray-300 rounded" placeholder="password" style={{ fontSize: '7px' }} readOnly />
        <button className="w-full py-1 bg-[#FA7268] text-white rounded" style={{ fontSize: '7px', fontWeight: 700 }}>Sign in</button>
      </div>
    </div>
  );
}

function V2EmptyList() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex flex-col">
      <div className="flex items-center justify-between px-2 py-1 border-b border-black/5 bg-white">
        <span style={{ fontSize: '8px', fontWeight: 800 }}>TaskFlow</span>
        <div className="h-3 w-3 rounded-full bg-[#FA7268] text-white flex items-center justify-center" style={{ fontSize: '5px', fontWeight: 700 }}>AJ</div>
      </div>
      <div className="px-3 py-2 flex-1 flex flex-col">
        <div className="flex gap-1 mb-2">
          <input className="flex-1 px-2 py-1 rounded border border-slide-gray-300 bg-white" placeholder="What's next?" style={{ fontSize: '7px' }} readOnly />
          <button className="px-2 py-1 rounded bg-[#FA7268] text-white" style={{ fontSize: '7px', fontWeight: 700 }}>Add</button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="text-2xl mb-1">🌱</div>
          <p className="text-slide-gray-600" style={{ fontSize: '8px' }}>A quiet day. Add your first task.</p>
        </div>
      </div>
    </div>
  );
}

function V3WithTasks() {
  const tasks = [
    { t: 'Finish AI Unmasked deck', d: 'Today', done: true },
    { t: 'Record demo voiceover', d: 'Tomorrow', done: false },
    { t: 'Email Lagos Tech Week', d: 'Fri', done: false },
  ];
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex flex-col">
      <div className="flex items-center justify-between px-2 py-1 border-b border-black/5 bg-white">
        <span style={{ fontSize: '8px', fontWeight: 800 }}>TaskFlow</span>
        <div className="h-3 w-3 rounded-full bg-[#FA7268] text-white flex items-center justify-center" style={{ fontSize: '5px', fontWeight: 700 }}>AJ</div>
      </div>
      <div className="px-2 py-1.5 flex-1 overflow-hidden">
        <div className="flex gap-1 mb-1">
          <input className="flex-1 px-1.5 py-0.5 rounded border border-slide-gray-300 bg-white" placeholder="What's next?" style={{ fontSize: '7px' }} readOnly />
          <button className="px-2 py-0.5 rounded bg-[#FA7268] text-white" style={{ fontSize: '7px', fontWeight: 700 }}>Add</button>
        </div>
        <div className="flex gap-2 mb-1 text-slide-gray-500" style={{ fontSize: '6px' }}>
          <span className="text-[#FA7268] font-bold border-b border-[#FA7268]">All</span>
          <span>Today</span>
          <span>Done</span>
        </div>
        <div className="space-y-1">
          {tasks.map((task) => (
            <div key={task.t} className="flex items-center gap-1 px-1.5 py-1 bg-white rounded border border-black/5">
              <div className={`h-2 w-2 rounded border ${task.done ? 'bg-[#FA7268] border-[#FA7268]' : 'border-slide-gray-300'} flex items-center justify-center text-white`} style={{ fontSize: '5px' }}>
                {task.done ? '✓' : ''}
              </div>
              <span className={task.done ? 'line-through text-slide-gray-400' : 'text-slide-gray-900'} style={{ fontSize: '7px', fontWeight: 500 }}>
                {task.t}
              </span>
              <span className="ml-auto text-slide-gray-500" style={{ fontSize: '6px' }}>{task.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function V4Published() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
      {[...Array(10)].map((_, i) => {
        const colors = ['#FA7268', '#4E93FF', '#F5C518', '#27c93f'];
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 31) % 100}%`,
              width: 4,
              height: 7,
              background: colors[i % 4],
              transform: `rotate(${i * 23}deg)`,
              opacity: 0.85,
            }}
          />
        );
      })}
      <div className="relative z-10">
        <div className="text-xl mb-1">🎉</div>
        <p className="mb-1" style={{ fontSize: '10px', fontWeight: 800 }}>All done.</p>
        <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white border border-black/10" style={{ fontSize: '6px', fontFamily: 'IBM Plex Mono, monospace' }}>
          <span className="h-1 w-1 rounded-full bg-[#27c93f]" />
          taskflow.lovable.app · LIVE
        </div>
      </div>
    </div>
  );
}

const STAGES = [
  {
    label: 'V1 · Auth + DB',
    prompt: 'Build "TaskFlow" — a personal task manager. Enable Lovable Cloud. Add email + Google sign-in. Create a tasks table (user_id, title, done, due_date) with RLS so each user sees only their own.',
    change: 'Cloud + auth + DB scaffolded. Sign-in screen ready.',
    Preview: V1Auth,
  },
  {
    label: 'V2 · Empty list UI',
    prompt: 'After login, show a top bar (logo + avatar), an "Add task" input + button, and a friendly empty-state message with an emoji.',
    change: 'Layout built. Empty state appears when no tasks.',
    Preview: V2EmptyList,
  },
  {
    label: 'V3 · Real tasks',
    prompt: 'Wire the input to insert into the tasks table. Show all my tasks below as a list with checkbox, title, due date. Add filter tabs: All / Today / Done.',
    change: 'Insert + toggle + filter all working live.',
    Preview: V3WithTasks,
  },
  {
    label: 'V4 · Confetti + ship',
    prompt: 'Add a small confetti burst when I check off the last task of the day. Then publish.',
    change: 'Animation triggers. App live at taskflow.lovable.app.',
    Preview: V4Published,
  },
];

export default function L10dTaskFlowSequence() {
  return (
    <LovableFrame index={16} eyebrow="Project 02 · See every refinement">
      <div className="flex flex-col h-full px-12 pt-26 pb-16">
        <h2 className="text-slide-gray-900 mb-2" style={{ fontSize: '46px', fontWeight: 800, lineHeight: 1 }}>
          From login screen to <span className="text-slide-accent">live SaaS.</span>
        </h2>
        <p className="text-slide-gray-600 mb-6" style={{ fontSize: '18px' }}>
          Four prompts, four screenshots. Copy any prompt and paste it into Lovable to follow along.
        </p>

        <div className="grid grid-cols-4 gap-4 flex-1 min-h-0">
          {STAGES.map((s, i) => (
            <div key={s.label} className="flex flex-col gap-2 min-h-0">
              <div className="flex items-center gap-2">
                <span className="bg-slide-accent text-white px-2 py-0.5 rounded" style={{ fontSize: '11px', fontWeight: 800 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-slide-gray-900 uppercase tracking-[0.15em]" style={{ fontSize: '12px', fontWeight: 700 }}>
                  {s.label}
                </span>
              </div>

              <div className="border border-slide-gray-300 bg-white shadow-sm overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <div className="h-3 bg-slide-gray-100 border-b border-slide-gray-200 flex items-center gap-1 px-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="w-full h-[calc(100%-12px)]">
                  <s.Preview />
                </div>
              </div>

              <CopyablePromptBox prompt={s.prompt} size="sm" />

              <p className="text-slide-gray-600 italic px-1" style={{ fontSize: '12px', lineHeight: 1.35 }}>
                → {s.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </LovableFrame>
  );
}
