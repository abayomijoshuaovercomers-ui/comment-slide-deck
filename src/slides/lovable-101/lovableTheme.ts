import React from 'react';

/**
 * Lovable 101 deck theme: warm cream + Lovable coral/pink accent.
 * Override --slide-accent to Lovable's brand coral so all token utilities retone.
 */
export const lovableAccentStyle: React.CSSProperties = {
  ['--slide-accent' as any]: '6 93% 71%', // Lovable coral #FA7268-ish
  ['--slide-accent-light' as any]: '6 93% 82%',
  ['--slide-accent-muted' as any]: '6 60% 95%',
};

export const lovableLightBg = 'bg-[hsl(35_40%_97%)] text-slide-gray-900';
export const lovableDarkBg = 'bg-[hsl(220_25%_8%)] text-white';
