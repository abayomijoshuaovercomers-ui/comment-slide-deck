import React from 'react';
import { SecretSlide } from './SecretSlide';

export default function Slide09Secret2Prompting() {
  return (
    <SecretSlide
      index={9}
      secretNumber={2}
      kicker="Reframe Your Keyboard"
      headline={
        <>
          Prompting<br />
          <span className="text-slide-accent">=</span>&nbsp;Programming.
        </>
      }
      body={
        <>
          You are not chatting. You are <span className="text-white">instructing</span>.
          Bad prompt → bad output. Good prompt → powerful system.
        </>
      }
      caption="The keyboard is now your coding environment."
    />
  );
}
