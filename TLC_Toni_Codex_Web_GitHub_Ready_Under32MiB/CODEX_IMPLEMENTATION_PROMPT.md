# CODEx PROMPT: Match the user-supplied reference editing language for Toni

You are a senior editorial motion designer and Remotion/React/TypeScript engineer. The previous static TLC infographic-card style was rejected. This package contains an updated **reference-inspired v2 draft** in `src/components/ReferenceStyle.tsx` and `src/data/referenceBeats.ts`. Build on it; do not revert to the previous `SceneGraphics.tsx` infographic style.

## Source assets

- `public/assets/toni.mp4` — optimized full vertical 1080x1908, 30fps; includes Toni's original speech audio; original source approximately 61.37 sec, optimized cut ~59.85 sec.
- `public/assets/1112.srt` — authoritative 21 subtitle cue timings and original dialogue, last cue ends 59.90 sec.
- `public/assets/logo.webp` — authentic transparent TLC Boutique Wellness logo, gold sunburst and gold text; **preserve the artwork**, no recoloring. Put it on charcoal for contrast.
- Reference movie from user: approx 29.63 sec, 720x1280, 30fps, featuring a speaker in scrubs. It is a STYLE REFERENCE only, never extract/reuse its identifiable content, audio, exact wording, or brand.

## Target style (non-negotiable)

- Alternating light backgrounds and visible video.
- Oversized tightly kerned **bold sans-serif** words, 1–4 words at a time, reveal by zoom/blur/clip then cut; not serif titles, not a giant floating infographic card at every moment.
- Single-person footage in full bleed at select moments; 70–85% frame-height *rounded rectangular video* on warm ivory canvas, with soft shadows.
- Quick switch between video, editorial title card, image-matte layouts, triptych repeated speaker footage, a small illustrated smartphone-style toggle, and dark contrast statement cards.
- Mostly bold charcoal on ivory, occasional large ivory on charcoal. Sage underline and subtle highlight use #8B9E89; no random bright color accents or novelty effects.
- Approx one visual change every 0.7–2.8 sec, with quieter holds at the key lines. Editing should feel rhythmic and refined, **not chaotic**.
- Prefer strategically timed typography to unrelated generic B-roll. Optional Flow B-roll can be added, but do not overpopulate the edit.

## Official TLC palette

- Primary ivory `#FAF6F0`
- Secondary charcoal `#2B2B2B`
- Accent sage `#8B9E89`
- The **existing gold** in the official logo is the only gold allowed. Keep unaltered.

## Core speaker composition and safety

- Final render 1080x1920, 30 fps, ~59.8 sec.
- Source has 1080x1908; pad 6px vertical rather than cropping the original recording.
- Avoid hiding eyes/mouth at key speaker moments. On portrait cards, subtitles/kinetic copy should occupy the lower part of the composition or external negative space.
- Keep Toni's source audio continuous. Any duplicate portrait video layers MUST be muted.
- Use the original `1112.srt`; do not fabricate new voiceover, medical facts, or exact word timings. SRT has cue timing, not verified word timing. Manually nudge the animated words so they match speech.
- Avoid playback of the reference video's music or extraction of its assets. Add licensed music only if supplied or authorized.

## Editing storyboard and timing

The source currently defines specific beats in `referenceBeats.ts`. Keep the original spoken sequence:

- 0:00–3.9 — food noise hook: full-bleed source → huge typography on ivory → rounded card with "DON'T QUIET YOUR NUTRITION".
- 3.9–10.6 — GLP-1 labels and appetite: speaker card → minimal animated toggle and short typography changes.
- 10.866–16.1 — appetite versus nutrition needs: speaker card → split footage/text composition.
- 16.1–22.666 — skipped meals: repeated triptych of synced Toni footage → single rounded card with kinetic words.
- 22.666–25.066 — chips/desserts: giant phrase on ivory, no guilt/scare visuals.
- 25.233–29.1 — hero statement: charcoal full-screen, "LOSE WEIGHT" → "STILL BE" → "UNDERNOURISHED" with a sage accent.
- 29.233–36.7 — protein and nutrients: smaller portrait card → ivory 2×2 modern compact nutrient tiles.
- 36.7–44.7 — fatigue, brain fog, constipation, hair loss: full charcoal typographic punches → return to speaker card.
- 44.833–48.466 — "EVERY BITE COUNTS" → "PROTEIN FIRST": hard editorial typography on ivory.
- 48.633–53.133 — colourful vegetables then treat: animated circles/plate with short kinetic words (can polish with restrained vector elements).
- 53.366–59.8 — "YOUR PRESCRIPTION IS A TOOL" → "FOOD IS STILL MEDICINE" → authentic TLC gold logo on charcoal with READ THE FULL BLOG / LINK IN BIO.

## Technical goals

1. Review `src/data/referenceBeats.ts` and `src/components/ReferenceStyle.tsx`.
2. Run `npm install`; resolve any Remotion/React/TypeScript issues.
3. Run `npm run dev`; inspect multiple frames and validate every scene cut.
4. Fix any moment with text touching/cropping the edges, unnatural photographic zoom, duplicate audio, or excessive opacity changes.
5. Upgrade phrase timing by manually matching the provided talking-head audio. Do not treat SRT cue boundaries as exact word boundaries.
6. Leave `src/data/captions.ts` as the verbatim source. The v2 cut uses **kinetic editorial words instead of full regular captions** by default; an optional standard-caption variant can be enabled in `src/compositions/ToniTLCReel.tsx`.
7. Keep original logo untouched.
8. Validate H.264 MP4 export and optional graphics-only alpha mode, stating clearly that graphics-only overlays cannot reproduce picture-in-picture edits on their own.
9. Export the polished Reel.

## Quality bar

It must feel visually like the user's 29.63s sample: rapid but intentional oversized kinetic words, white/ivory space, floating video cards, occasional UI motifs and bold contrast cuts. It must NOT look like the earlier card-heavy, static nutrition infographic proposal.

Start by inspecting the source, installing dependencies, and running a preview; then refine the actual edit and render, not just outline a plan.
