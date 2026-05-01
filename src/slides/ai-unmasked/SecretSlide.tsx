import React from 'react';
import { SlideFrame } from './SlideFrame';

interface SecretSlideProps {
  index: number;
  secretNumber: number;
  kicker: string;
  headline: React.ReactNode;
  body?: React.ReactNode;
  caption?: string;
}

/**
 * Shared layout for the three "Secret" slides — oversized number,
 * monumental headline, optional supporting body.
 */
export function SecretSlide({
  index,
  secretNumber,
  kicker,
  headline,
  body,
  caption,
}: SecretSlideProps) {
  return (
    <SlideFrame index={index} eyebrow={`Secret 0${secretNumber}`}>
      <div className="flex h-full px-20 pt-24 pb-28 items-stretch gap-16">
        {/* Giant number */}
        <div className="flex flex-col justify-center shrink-0">
          <span
            className="text-slide-accent leading-none tracking-tighter"
            style={{ fontSize: '640px', fontWeight: 800 }}
          >
            {secretNumber}
          </span>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col justify-center">
          <span
            className="uppercase tracking-[0.4em] text-slide-accent mb-6"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            {kicker}
          </span>
          <div
            className="text-white tracking-tight mb-10"
            style={{ fontSize: '110px', fontWeight: 800, lineHeight: 0.95 }}
          >
            {headline}
          </div>
          {body && (
            <div
              className="text-white/70"
              style={{ fontSize: '32px', fontWeight: 300, lineHeight: 1.4 }}
            >
              {body}
            </div>
          )}
          {caption && (
            <p
              className="text-white/40 mt-12 italic"
              style={{ fontSize: '24px', fontWeight: 300 }}
            >
              {caption}
            </p>
          )}
        </div>
      </div>
    </SlideFrame>
  );
}
