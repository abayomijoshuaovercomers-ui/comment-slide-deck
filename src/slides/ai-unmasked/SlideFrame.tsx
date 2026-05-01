import React from 'react';
import { cn } from '@/lib/utils';
import { deckAccentStyle, deckBgClass, deckLightBgClass } from './deckTheme';

interface SlideFrameProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  index: number;
  total?: number;
  eyebrow?: string;
  className?: string;
}

/**
 * Shared frame for the AI Unmasked deck.
 * - Sets the deck's red accent via CSS custom property override
 * - Applies the bg/text base
 * - Adds a thin top accent bar + corner numbering (01 / 20)
 */
export function SlideFrame({
  children,
  variant = 'dark',
  index,
  total = 23,
  eyebrow,
  className,
}: SlideFrameProps) {
  const isDark = variant === 'dark';
  return (
    <div
      style={deckAccentStyle}
      className={cn(
        'w-full h-full relative font-sans slide-content overflow-hidden',
        isDark ? deckBgClass : deckLightBgClass,
        className
      )}
    >
      {/* Top hairline accent */}
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-slide-accent" />

      {/* Top-right eyebrow / brand */}
      <div className="absolute top-8 right-12 z-10 flex items-center gap-3">
        {eyebrow && (
          <span
            className={cn(
              'tracking-[0.3em] uppercase',
              isDark ? 'text-white/50' : 'text-slide-gray-500'
            )}
            style={{ fontSize: '20px', fontWeight: 500 }}
          >
            {eyebrow}
          </span>
        )}
        <span className="h-2 w-2 rounded-full bg-slide-accent" />
        <span
          className={cn(
            'tracking-[0.25em]',
            isDark ? 'text-white/70' : 'text-slide-gray-700'
          )}
          style={{ fontSize: '20px', fontWeight: 600 }}
        >
          AI&nbsp;UNMASKED
        </span>
      </div>

      {/* Bottom-left page marker */}
      <div className="absolute bottom-8 left-12 z-10 flex items-baseline gap-2">
        <span
          className={cn(isDark ? 'text-white' : 'text-slide-gray-900')}
          style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.02em' }}
        >
          {String(index).padStart(2, '0')}
        </span>
        <span
          className={cn(isDark ? 'text-white/40' : 'text-slide-gray-400')}
          style={{ fontSize: '20px', fontWeight: 500 }}
        >
          / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Bottom-right speaker tag */}
      <div
        className={cn(
          'absolute bottom-8 right-12 z-10 tracking-[0.2em] uppercase',
          isDark ? 'text-white/40' : 'text-slide-gray-400'
        )}
        style={{ fontSize: '18px', fontWeight: 500 }}
      >
        Abayomi&nbsp;Joshua
      </div>

      {/* Content */}
      <div className="relative z-0 w-full h-full">{children}</div>
    </div>
  );
}
