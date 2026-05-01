import React from 'react';
import { SecretSlide } from './SecretSlide';

export default function Slide08Secret1Data() {
  return (
    <SecretSlide
      index={8}
      secretNumber={1}
      kicker="Mind-Blowing Truth"
      headline={
        <>
          The best model<br />
          does <span className="text-slide-accent">not</span> win.<br />
          The best <span className="text-slide-accent">DATA</span> does.
        </>
      }
      body={<>Better data &gt; better algorithm. Context is everything.</>}
      caption="Give me better data than Google — and you can beat Google."
    />
  );
}
