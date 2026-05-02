import React from 'react';
import { LovableFrame } from './LovableFrame';
import { LovableScreenshot } from './LovableScreenshot';

const PROMPT = `After login, show the task list.
Top: an "Add task" input + button.
Below: list of tasks with checkbox,
title, due date, and a delete icon.
Soft pastel, rounded 12px corners, Inter font.`;

const REPLY = `✓ TaskList page wired to 'tasks' table
✓ Insert / toggle done / delete hooked up
✓ Live updates via Cloud
✓ Empty state added
Tap a task to check it off.`;

const TASKS = [
  { t: 'Finish AI Unmasked deck', d: 'Today', done: true },
  { t: 'Record demo voiceover', d: 'Tomorrow', done: false },
  { t: 'Email Lagos Tech Week organizers', d: 'Fri', done: false },
  { t: 'Buy domain for portfolio', d: 'Next week', done: false },
];

function TasksPreview() {
  return (
    <div className="w-full h-full bg-[hsl(35_40%_97%)] flex flex-col">
      <div className="flex items-center justify-between px-7 py-4 border-b border-black/5 bg-white">
        <span style={{ fontSize: '18px', fontWeight: 800 }}>TaskFlow</span>
        <div className="h-8 w-8 rounded-full bg-[#FA7268] text-white flex items-center justify-center" style={{ fontSize: '13px', fontWeight: 700 }}>
          AJ
        </div>
      </div>
      <div className="px-8 py-6 flex-1 overflow-hidden">
        <div className="flex gap-2 mb-5">
          <input
            className="flex-1 px-4 py-3 rounded-xl border border-slide-gray-300 bg-white"
            placeholder="What's next?"
            style={{ fontSize: '15px' }}
            readOnly
          />
          <button className="px-5 py-3 rounded-xl bg-[#FA7268] text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
            Add
          </button>
        </div>
        <div className="flex gap-4 mb-4 text-slide-gray-500" style={{ fontSize: '13px' }}>
          <span className="text-[#FA7268] font-bold border-b-2 border-[#FA7268] pb-1">All</span>
          <span>Today</span>
          <span>Done</span>
        </div>
        <div className="space-y-2">
          {TASKS.map((task) => (
            <div key={task.t} className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-black/5">
              <div className={`h-5 w-5 rounded-md border-2 ${task.done ? 'bg-[#FA7268] border-[#FA7268]' : 'border-slide-gray-300'} flex items-center justify-center text-white`} style={{ fontSize: '12px' }}>
                {task.done ? '✓' : ''}
              </div>
              <span className={task.done ? 'line-through text-slide-gray-400' : 'text-slide-gray-900'} style={{ fontSize: '15px', fontWeight: 500 }}>
                {task.t}
              </span>
              <span className="ml-auto text-slide-gray-500" style={{ fontSize: '12px' }}>{task.d}</span>
              <span className="text-slide-gray-300">×</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function L10bTaskFlowList() {
  return (
    <LovableFrame index={16} eyebrow="Project 02 · The UI">
      <div className="flex flex-col h-full px-16 pt-28 pb-20">
        <h2 className="text-slide-gray-900 mb-6" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1 }}>
          Describe the screen. <span className="text-slide-accent">Get the screen.</span>
        </h2>
        <div className="flex-1 min-h-0">
          <LovableScreenshot
            prompt={PROMPT}
            aiReply={REPLY}
            preview={<TasksPreview />}
            url="taskflow.lovable.app"
            caption="// The list is real. Each task is saved to YOUR row in the database. RLS keeps it private."
          />
        </div>
      </div>
    </LovableFrame>
  );
}
