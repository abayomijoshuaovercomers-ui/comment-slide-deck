import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  prompt: string;
  /** Visual size: 'lg' for full-slide standalone, 'md' inside LovableScreenshot, 'sm' for sequence cards */
  size?: 'sm' | 'md' | 'lg';
  /** Optional label above the box */
  label?: string;
  className?: string;
}

const SIZES = {
  sm: { font: '13px', line: 1.4, pad: 'p-3', btn: 12 },
  md: { font: '17px', line: 1.4, pad: 'p-5', btn: 14 },
  lg: { font: '22px', line: 1.5, pad: 'p-10', btn: 18 },
} as const;

/**
 * Copy-to-clipboard prompt box. Click anywhere or the button to copy.
 * Renders as a dark "code block" so it reads as paste-ready prompt text.
 */
export function CopyablePromptBox({ prompt, size = 'md', label, className }: Props) {
  const [copied, setCopied] = useState(false);
  const s = SIZES[size];

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard may be blocked in iframe; silent
    }
  };

  return (
    <div className={`flex flex-col ${className ?? ''}`}>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-slide-gray-600 uppercase tracking-[0.25em]"
            style={{ fontSize: '13px', fontWeight: 700 }}
          >
            {label}
          </span>
          <span
            className="text-slide-accent uppercase tracking-[0.2em]"
            style={{ fontSize: '11px', fontWeight: 700 }}
          >
            click to copy
          </span>
        </div>
      )}
      <button
        type="button"
        onClick={handleCopy}
        className={`relative group text-left bg-[hsl(220_25%_8%)] border border-white/10 ${s.pad} cursor-pointer overflow-hidden flex-1`}
        title="Click to copy this prompt"
      >
        {/* Copy button (always visible) */}
        <div
          className={`absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded ${
            copied ? 'bg-slide-accent text-white' : 'bg-white/10 text-white/70'
          }`}
          style={{ fontSize: '12px', fontWeight: 600 }}
        >
          {copied ? <Check size={s.btn} /> : <Copy size={s.btn} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </div>

        <pre
          className="text-white/90 whitespace-pre-wrap pr-20"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: s.font,
            lineHeight: s.line,
          }}
        >
{prompt}
        </pre>
      </button>
    </div>
  );
}
