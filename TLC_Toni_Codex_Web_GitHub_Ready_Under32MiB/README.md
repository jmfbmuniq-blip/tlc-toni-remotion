> **Using Codex Web?** Open [`CODEX_WEB_START_HERE.md`](CODEX_WEB_START_HERE.md) first. This repository includes the actual inspiration video for visual comparison.

# Toni — TLC Boutique Wellness: Kinetic Reference-Style Edit

A reference-inspired, **editable Remotion project** for Toni's original GLP-1 talking-head footage. The project replaces the previous static infographic-card treatment with punchier, fast-cut editorial typography and shifting layouts, based on the user-supplied 29.63-second reference video.

## Quick start

1. Extract this ZIP.
2. Open the folder in VS Code or Codex.
3. Install dependencies: `npm install`
4. Preview: `npm run dev`
5. Export MP4: `npm run render`

**The package includes an optimized H.264 copy of Toni's footage**, the original subtitle timings, source code, and official transparent TLC logo. It remains below 32 MiB. To maximize final quality, replace `public/assets/toni.mp4` with the original 1080×1908 raw file on your own computer after the graphic edit is approved.

## Reference style analysis

- 720 × 1280, 30 FPS, ~29.63 seconds.
- Quick rhythm: single-word / two-word oversized typography, footage and blank light canvases alternating, occasional full charcoal frame.
- Floating rounded speaker-video cards with soft shadows; a three-card repeating video layout; fast visual cut to abstract UI-style toggle cards.
- Predominantly bold modern sans-serif, not elegant serif headline cards.
- Most of the video is speaker footage, recomposed with motion, **not traditional B-roll**.
- Final short social call-to-action graphic; for Toni, use official TLC logo and a generic "Link in bio" rather than inventing a handle.

## TLC adaptation

- Background: warm ivory `#FAF6F0`
- Type: charcoal `#2B2B2B`
- Accent: muted sage `#8B9E89`
- Official **gold logo remains unchanged**; use on charcoal at the end.
- Large modern heavy sans-serif kinetics: `Inter` with system Arial fallback. No navy, gold *generated graphic elements*, or unrelated effects.
- Toni's original speech stays uninterrupted. The visual edit is now 27 **micro-beats** (including transition beats), mapped against the 21 supplied SRT cues and organized into 12 narrative topics.
- Same original speech order. No generated medical claims and no invented stats.

## Edit or tune the cut

- `src/data/referenceBeats.ts`: all beat start/end times, layout modes, displayed short phrases and highlights.
- `src/components/ReferenceStyle.tsx`: layout and animation components (`full`, `page`, `card`, `split`, `triptych`, `toggle`, `dark`, `nutrients`, `plate`, `end`).
- `src/compositions/ToniTLCReel.tsx`: master footage/audio layer and optional standard captions/B-roll toggles.
- `src/config/tlcBrand.ts`: exact colors, output dimensions, caption placement.
- `src/data/captions.ts`: full SRT cue text and timings, available for a verbatim caption variant.
- `public/assets/logo.webp`: unchanged original supplied gold logo.

### Motion sync note

SRT gives **cue-level**, not word-level timing. The large kinetic phrases are distributed *approximately* across their respective cues for a rough first-cut rhythm. **Manually review and shift each beat/phrase in Remotion Studio** to the exact phoneme/word onset, especially for important terms. Do not market estimated phrase timing as a verified word alignment.

### Audio note

The continuous unmuted base video is always mounted, even when the light editorial backgrounds appear. The smaller repeated video cards are muted, ensuring **no duplicate voice tracks**. The full video is shown at 1080×1908 inside 1080×1920 (6 px padding at top and bottom).

## Render exports

`npm run render` creates `out/renders/toni-tlc-final.mp4`.

`npm run overlay` generates a graphics-only alpha-supporting MOV; **the complete reference-style edit requires compositing the video cards and background surfaces**, so a graphics-only overlay cannot reproduce all the card/cutout changes by itself. Use the full composition for the reference look.

## Assets needed

**Already in ZIP:** optimized Toni source, `1112.srt`, TLC logo.  
**Optional:** Google Flow B-roll, licensed music (not included), actual official font files if different from suggested Inter.  
A 32 MiB upload limit is satisfied by the optimized included video.

## Production QA

The edit has been code-generated but Remotion dependencies were not installed/rendered in this environment. In Codex, run `npm install`, `npm run verify` and `npm run render` before publishing. Inspect at least every scene transition; verify phrases sync to Toni's natural delivery, her face isn't hidden unnecessarily and the final logo card displays as intended. Trim out the camera-stop movement.
