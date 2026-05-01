import React from 'react';
import { SecretSlide } from './SecretSlide';

export default function Slide10Secret3Replace() {
  return (
    <SecretSlide
      index={10}
      secretNumber={3}
      kicker="The Prophecy"
      headline={
        <>
          AI will <span className="text-slide-accent">not</span><br />
          take your job.
        </>
      }
      body={
        <>
          But people using AI <span className="text-slide-accent font-bold">will</span> replace you.
        </>
      }
      caption="This is not a warning. It is a prophecy."
    />
  );
}
