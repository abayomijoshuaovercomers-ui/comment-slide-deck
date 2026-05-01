import React from 'react';
import { SlideFrame } from './SlideFrame';

const tasks: { task: string; tool: string }[] = [
  { task: 'Write a research paper', tool: 'ChatGPT + Perplexity' },
  { task: 'Summarize a 2-hour lecture', tool: 'Otter.ai' },
  { task: 'Generate a logo', tool: 'Midjourney' },
  { task: 'Build a website (no code)', tool: 'Overra AI' },
  { task: 'Edit & cut a video', tool: 'CapCut + Descript' },
  { task: 'Remove video background', tool: 'Runway' },
  { task: 'Clone your voice', tool: 'ElevenLabs' },
  { task: 'Translate any language', tool: 'DeepL' },
  { task: 'Transcribe audio to text', tool: 'Whisper' },
  { task: 'Write code from English', tool: 'GitHub Copilot' },
  { task: 'Debug code instantly', tool: 'Cursor' },
  { task: 'Build a chatbot', tool: 'Voiceflow' },
  { task: 'Create AI presentations', tool: 'Gamma' },
  { task: 'Generate spreadsheets', tool: 'Rows AI' },
  { task: 'Make pitch decks', tool: 'Beautiful.ai' },
  { task: 'Write marketing copy', tool: 'Jasper' },
  { task: 'Draft cold emails', tool: 'Lavender' },
  { task: 'Auto-reply to messages', tool: 'Superhuman AI' },
  { task: 'Create social media posts', tool: 'Buffer AI' },
  { task: 'Generate Reels & shorts', tool: 'Opus Clip' },
  { task: 'Make AI music', tool: 'Suno' },
  { task: 'Generate sound effects', tool: 'ElevenLabs SFX' },
  { task: 'Animate a still image', tool: 'Runway Gen-3' },
  { task: 'Create AI avatars', tool: 'HeyGen' },
  { task: 'Make 3D models', tool: 'Luma AI' },
  { task: 'Search the web smartly', tool: 'Perplexity' },
  { task: 'Take meeting notes', tool: 'Fireflies' },
  { task: 'Plan your week', tool: 'Motion' },
  { task: 'Study & quiz yourself', tool: 'NotebookLM' },
  { task: 'Replace yourself entirely', tool: 'You + all of the above' },
];

export default function Slide22ThirtyTasks() {
  return (
    <SlideFrame index={22} eyebrow="The Power Index">
      <div className="flex flex-col h-full px-16 pt-24 pb-20">
        <div className="flex items-end justify-between mb-6">
          <h2
            className="text-white tracking-tight"
            style={{ fontSize: '76px', fontWeight: 800, lineHeight: 0.95 }}
          >
            30 tasks. 30 <span className="text-slide-accent">AI weapons.</span>
          </h2>
          <span
            className="text-white/45"
            style={{ fontSize: '24px', fontWeight: 400 }}
          >
            Pick three. Master them. Replace a department.
          </span>
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-2 flex-1">
          {tasks.map((t, i) => (
            <div
              key={t.task}
              className="flex items-center gap-4 border-b border-white/10 py-2"
            >
              <span
                className="text-slide-accent shrink-0 w-12"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '22px',
                  fontWeight: 700,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-white truncate"
                  style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.2 }}
                >
                  {t.task}
                </p>
                <p
                  className="text-white/55 truncate"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '18px',
                    lineHeight: 1.2,
                  }}
                >
                  → {t.tool}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
