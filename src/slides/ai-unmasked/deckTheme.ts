import React from 'react';

/**
 * AI Unmasked deck theme: deep near-black background + crimson red accent.
 * Override --slide-accent at the slide root so all token utilities (slide-accent)
 * automatically retone for this deck — no hardcoded colors elsewhere.
 */
export const deckAccentStyle: React.CSSProperties = {
  // crimson red
  ['--slide-accent' as any]: '0 84% 55%',
  ['--slide-accent-light' as any]: '0 84% 70%',
  ['--slide-accent-muted' as any]: '0 60% 18%',
};

export const deckBgClass = 'bg-[hsl(220_25%_6%)] text-white';
export const deckLightBgClass = 'bg-[hsl(40_30%_97%)] text-slide-gray-900';
