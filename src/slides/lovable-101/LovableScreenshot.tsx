import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import lovableLogo from '@/assets/lovable-logo.png';

/**
 * Realistic mock of the Lovable IDE: left = chat (prompt + AI reply),
 * right = live preview. Pure CSS so it scales with the slide.
 */
interface Props {
  prompt: string;
  aiReply?: string;
  preview: React.ReactNode;
  url?: string;
  caption?: string;
}

export function LovableScreenshot({ prompt, aiReply, preview, url = 'preview.lovable.app', caption }: Props) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className="w-full h-full flex flex-col bg-[hsl(220_25%_8%)] border border-white/10 shadow-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-3 px-5 py-3 bg-[hsl(220_25%_11%)] border-b border-white/10 shrink-0">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f56]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#27c93f]" />
        <div className="ml-4 flex items-center gap-2">
          <img src={lovableLogo} alt="Lovable" className="h-5 w-auto object-contain opacity-90" />
          <span className="text-white/50" style={{ fontSize: '15px', fontFamily: 'IBM Plex Mono, monospace' }}>
            / project
          </span>
        </div>
        <div className="ml-auto px-3 py-1 rounded bg-white/5 text-white/60" style={{ fontSize: '14px', fontFamily: 'IBM Plex Mono, monospace' }}>
          {url}
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Chat panel */}
        <div className="w-[42%] border-r border-white/10 flex flex-col bg-[hsl(220_25%_9%)]">
          <div className="px-5 py-3 border-b border-white/10 text-white/40 uppercase tracking-[0.2em]" style={{ fontSize: '13px', fontWeight: 600 }}>
            Chat
          </div>
          <div className="flex-1 overflow-hidden p-5 space-y-4">
            {/* User prompt bubble — click to copy */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleCopy}
                title="Click to copy this prompt"
                className="max-w-[92%] bg-slide-accent text-white px-5 py-4 rounded-2xl rounded-br-sm text-left relative cursor-pointer"
              >
                <div
                  className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded ${
                    copied ? 'bg-white text-slide-accent' : 'bg-white/15 text-white/90'
                  }`}
                  style={{ fontSize: '11px', fontWeight: 700 }}
                >
                  {copied ? <Check size={11} /> : <Copy size={11} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </div>
                <pre
                  className="whitespace-pre-wrap pr-16"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '17px', lineHeight: 1.4, fontWeight: 500 }}
                >
{prompt}
                </pre>
              </button>
            </div>

            {/* AI reply bubble */}
            {aiReply && (
              <div className="flex justify-start">
                <div className="max-w-[92%] bg-white/5 border border-white/10 text-white/85 px-5 py-4 rounded-2xl rounded-bl-sm">
                  <div className="flex items-center gap-2 mb-2 text-slide-accent" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em' }}>
                    <span className="h-2 w-2 rounded-full bg-slide-accent" />
                    LOVABLE
                  </div>
                  <pre
                    className="whitespace-pre-wrap"
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '16px', lineHeight: 1.45 }}
                  >
{aiReply}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="m-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/35 flex items-center justify-between" style={{ fontSize: '15px' }}>
            <span>Message Lovable…</span>
            <span className="text-slide-accent" style={{ fontSize: '18px' }}>↑</span>
          </div>
        </div>

        {/* Preview panel */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-5 py-2.5 border-b border-black/10 flex items-center gap-2 bg-[hsl(35_30%_97%)]">
            <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
            <span className="text-slide-gray-500" style={{ fontSize: '13px', fontFamily: 'IBM Plex Mono, monospace' }}>
              Live preview
            </span>
          </div>
          <div className="flex-1 overflow-hidden relative">{preview}</div>
        </div>
      </div>

      {caption && (
        <div className="px-5 py-2.5 bg-[hsl(220_25%_11%)] border-t border-white/10 text-white/55" style={{ fontSize: '14px', fontFamily: 'IBM Plex Mono, monospace' }}>
          {caption}
        </div>
      )}
    </div>
  );
}
