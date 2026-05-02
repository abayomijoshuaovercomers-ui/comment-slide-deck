import React from 'react';
import { cn } from '@/lib/utils';
import { lovableAccentStyle, lovableLightBg, lovableDarkBg } from './lovableTheme';
import lovableLogo from '@/assets/lovable-logo.png';

interface LovableFrameProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  index: number;
  total?: number;
  eyebrow?: string;
  className?: string;
}

export function LovableFrame({
  children,
  variant = 'light',
  index,
  total = 24,
  eyebrow,
  className,
}: LovableFrameProps) {
  const isDark = variant === 'dark';
  return (
    <div
      style={lovableAccentStyle}
      className={cn(
        'w-full h-full relative font-sans slide-content overflow-hidden',
        isDark ? lovableDarkBg : lovableLightBg,
        className
      )}
    >
      {/* Top hairline accent */}
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-slide-accent" />

      {/* Top-left lovable logo */}
      <div className="absolute top-7 left-12 z-10 flex items-center gap-3">
        <img
          src={lovableLogo}
          alt="Lovable"
          width={1024}
          height={512}
          loading="lazy"
          className="h-9 w-auto object-contain"
        />
        <span
          className={cn(
            'pl-3 ml-1 border-l',
            isDark ? 'text-white/55 border-white/20' : 'text-slide-gray-500 border-slide-gray-300'
          )}
          style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '0.2em' }}
        >
          101
        </span>
      </div>

      {/* Top-right eyebrow */}
      {eyebrow && (
        <div className="absolute top-9 right-12 z-10 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-slide-accent" />
          <span
            className={cn(
              'tracking-[0.3em] uppercase',
              isDark ? 'text-white/60' : 'text-slide-gray-600'
            )}
            style={{ fontSize: '20px', fontWeight: 600 }}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {/* Bottom-left page marker */}
      <div className="absolute bottom-8 left-12 z-10 flex items-baseline gap-2">
        <span
          className={cn(isDark ? 'text-white' : 'text-slide-gray-900')}
          style={{ fontSize: '32px', fontWeight: 700 }}
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
        Vibe&nbsp;Coding · Abayomi&nbsp;Joshua
      </div>

      <div className="relative z-0 w-full h-full">{children}</div>
    </div>
  );
}
