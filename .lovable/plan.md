## AI Unmasked — 20-Slide Presentation

A bold, high-impact deck for Abayomi Joshua's talk *AI Unmasked: The Hidden Mechanics, Power Moves, and Future You Can Control*. Built as a new slide set in the SlideForge editor with the speaker's portrait featured on the title slide.

### Design Direction

- **Mood**: TEDx / Apple keynote — dark, bold, confident, cinematic.
- **Palette**: Deep near-black background (`slide-primary`) with a strong red/crimson accent (matches the 🟥 markers in the script) and crisp white text. Selective light-background slides for contrast (the "sandwich" pattern).
- **Typography**: Massive headline-driven slides. Single-word or short-phrase emphasis using `type-display` / `type-h1`. Quiet supporting `type-body` text. No paragraphs.
- **Motif**: A thin red accent bar + numbered slide markers (e.g. `01 / 20`) for a documentary feel. "Secret #1/#2/#3" slides use an oversized number treatment.
- **No animations** — static, immediate, high-contrast (per design system rules).

### Speaker Portrait

- Copy uploaded photo to `src/assets/abayomi-joshua.jpg` and import as ES module.
- On Slide 1, show the portrait as a circular/rounded framed image alongside the title and speaker name. Treated with a subtle red ring to match the deck accent.

### Slide List (20 + bonus opener)

1. **Title** — "AI UNMASKED" + subtitle + speaker portrait + name "Abayomi Joshua (Overcomer)".
2. **The Illusion of AI** — Two-column: "What you think" vs "Reality".
3. **What AI Really Is** — Big phrase: *Pattern Prediction at Scale* + two-step flow.
4. **Machine Learning** — Bullet stack + example chips (Spam, Recommendations).
5. **Deep Learning** — Layered neural-net visual (pure CSS dots/lines) + use cases.
6. **The Deep Secret** — Hero formula `f(input) = output` centered, monumental.
7. **How ChatGPT Works** — Token-prediction visual (word chips with probabilities).
8. **Secret #1** — Oversized "01" + "Better DATA wins".
9. **Secret #2** — Oversized "02" + "Prompting = Programming".
10. **Secret #3** — Oversized "03" + "AI won't take your job. People using AI will."
11. **Real Skills That Matter** — 5 numbered skill cards.
12. **The AI Tool Stack** — 3 columns: Thinking / Creation / Builder tools.
13. **Real Power Move** — Numbered 1-2-3 sequence: Problem → Solution → AI.
14. **Live Project (Hook)** — "AI Student Assistant" feature card.
15. **Project Steps** — 3-step process row.
16. **Demo Prompts** — Three quoted prompts in terminal-style cards.
17. **Career Paths in AI** — 3-column grid: Builders / Thinkers / Creators.
18. **Hidden Truth About the Future** — 3 stark statements stacked.
19. **Final Impact** — Two giant lines: "AI is not here to replace you / It is here to expose you."
20. **Closing** — Four-verb stack: Learn it. Use it. Build with it. Or be replaced.

Speaker `🎤 Say:` lines are stored as **presenter notes** for each slide (visible only in Presenter View / Notes Panel) — they don't clutter the slide visuals.

### Files to Create

```
src/assets/abayomi-joshua.jpg                      (copied from upload)
src/slides/ai-unmasked/index.ts                    (slides array)
src/slides/ai-unmasked/Slide01Title.tsx
src/slides/ai-unmasked/Slide02Illusion.tsx
src/slides/ai-unmasked/Slide03WhatAIIs.tsx
src/slides/ai-unmasked/Slide04MachineLearning.tsx
src/slides/ai-unmasked/Slide05DeepLearning.tsx
src/slides/ai-unmasked/Slide06DeepSecret.tsx
src/slides/ai-unmasked/Slide07ChatGPT.tsx
src/slides/ai-unmasked/Slide08Secret1Data.tsx
src/slides/ai-unmasked/Slide09Secret2Prompting.tsx
src/slides/ai-unmasked/Slide10Secret3Replace.tsx
src/slides/ai-unmasked/Slide11RealSkills.tsx
src/slides/ai-unmasked/Slide12ToolStack.tsx
src/slides/ai-unmasked/Slide13PowerMove.tsx
src/slides/ai-unmasked/Slide14LiveProject.tsx
src/slides/ai-unmasked/Slide15ProjectSteps.tsx
src/slides/ai-unmasked/Slide16DemoPrompts.tsx
src/slides/ai-unmasked/Slide17CareerPaths.tsx
src/slides/ai-unmasked/Slide18FutureTruth.tsx
src/slides/ai-unmasked/Slide19FinalImpact.tsx
src/slides/ai-unmasked/Slide20Closing.tsx
```

### Files to Modify

- `src/pages/Index.tsx` — swap `showcaseSlides` import for the new `aiUnmaskedSlides`.

### Technical Notes

- Each slide uses the existing `slide-content` scope and 1920×1080 layout with `px-20 py-16` padding.
- Use design tokens only (`text-white`, `bg-slide-primary`, custom red via inline style isn't allowed — extend if needed via existing `slide-accent`, or use a Tailwind red token already in `index.css`). Plan: re-tone the deck by setting `--slide-accent` to a crimson red in a wrapper or override at the slide-set level using existing utilities (`bg-red-600`/`text-red-500` are acceptable Tailwind tokens).
- Presenter notes seeded by manually entering them via the Notes panel after the deck loads (the notes table is keyed by slide id `slide-{name}`); alternatively, a one-time seed migration could insert them — I'll skip DB seeding and let you type or paste them in the Notes panel per slide. (If you want them auto-seeded, say so and I'll add a migration.)
- Bonus opening hook becomes presenter-note text on Slide 1 (it's spoken, not shown).

### Out of Scope

- Removing the existing `showcase` slides (kept in repo, just not loaded).
- Auto-seeding presenter notes into the database (can add on request).
- Custom fonts beyond what the project already loads.
