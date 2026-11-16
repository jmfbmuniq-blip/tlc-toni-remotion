# TLC Boutique Wellness — Toni GLP-1 Reel
## Codex + Remotion production brief (verified against actual source footage)

You are a senior motion designer, creative director, React/TypeScript engineer, and Remotion production specialist. **Implement and, where source files are provided, render** an actual professional Instagram/Facebook Reel from Toni's raw talking-head video. Do not stop at wireframes or sample animations.

## Source of truth — read these files first

- `public/assets/toni.mp4` — the actual original talking-head recording, **1080×1908, 30 fps, 61.37 seconds, H.265/HEVC video, stereo AAC audio**. The camera is vertical and locked off. Toni is seated at a desk, wearing a grey sweatshirt and black glasses, against a warm, naturally lit room with shelving and a window. Toni is generally just right of center, with a relatively clear upper-left wall. Her hands move frequently in the lower half. **There are no existing burned-in subtitles.**
- `public/assets/1112.srt` — the original subtitle file, 21 cues. First cue starts at 00:00.000; last cue is 00:54.966–00:59.900. Match these cue intervals; do not guess transcript/timing and do not use the timing of an earlier rearranged-hook edit.
- `public/assets/logo.webp` — **provided authentic TLC logo**, 300×166 RGBA WebP with a fully transparent background and gold sunburst/wordmark. This exact asset is supplied; do not request an extra logo before proceeding, do not recreate it, and do not recolor its gold artwork.
- `public/assets/broll/` — optional footage, filenames listed below.

**Important source discoveries**: The last audible speech ends around 59.55s, followed by silence and a friendly smile/hand gesture; by ~60.0–60.7s Toni raises a hand and reaches towards the camera. **Default published edit should trim at ~59.8 seconds** (1794 frames at 30 fps) to finish on her smile before the lens reach. Inspect 59.5–60.7 seconds in the source, adjust the exact cut if needed, and clamp the last subtitle cue to the end frame. Optionally create a separate 60.5s ending featuring the friendly wave, but **do not include the hand reaching to stop the recording**. Preserve speech without clipping.

The original is **1080×1908, not 1080×1920**. Output at 1080×1920 by centering unscaled footage (6 pixels of ivory padding above and below); do not crop Toni or stretch her face. If necessary, make the padding/subtle extend transparent under the overlay. Avoid gratuitous global zooms, because the source already fills nearly the entire canvas.

H.265 may not preview reliably in every browser. Check available Remotion version/media API; try current `@remotion/media` `<Video>` or a version-compatible fallback like `<OffthreadVideo>`. If local preview or rendering is unstable, produce a **frame-preserving H.264 editing proxy with AAC audio** at the original 1080×1908, 30fps and verify synchronisation; keep the original untouched. Use `staticFile()` for media paths. Do not embed the source video twice or duplicate its audio.

## Official TLC branding — exact user-approved colors

- **Primary warm ivory** `#FAF6F0`
- **Secondary deep charcoal** `#2B2B2B`
- **Accent muted sage** `#8B9E89`

Treat these three exact hex values as authoritative; do not revive the earlier guessed navy/gold palette. Build `src/config/tlcBrand.ts` with named tokens; do not hardcode colors in individual components. Use charcoal for important text, ivory for calm card surfaces, and sage predominantly for strokes, underlines, outline icons, and controlled highlight fills. Keep naturally colored food artwork realistic. Sage text on ivory is too low contrast for small captions; use charcoal text with sage accent bars or small fills. Use opacity variants of approved colors instead of adding random palettes.

Typography: prefer authentic supplied TLC fonts if available. **Fallback design choices, not asserted official fonts:** `Cormorant Garamond Semibold` for occasional editorial hero phrases, and `Inter Semibold` for subtitle and information labels. Keep captions modern, legible, and mostly sans-serif; avoid overly decorative medical content.

Desired look: boutique wellness, polished but authentic, warm daylight, restrained editorial motion. Respect that Toni's source is a candid, natural talking-head shot rather than a staged luxury studio commercial. Avoid making the footage look artificially clinical or overproduced.

## Composition, geometry, and face/gesture protection

- 1080×1920, 30fps, H.264 MP4 with preserved original speaking audio.
- Initial default duration: **59.8 seconds / 1794 frames**, adjustable after checking the exact speech end and smile.
- Artwork overlays must use source footage as the full-frame backdrop, not a replacement ivory background.
- Establish a manually adjustable **exclusion region** for Toni's head, approximately `x = 390..960, y = 320..990` in final 1080×1920 coordinates. This is a starting guide, **not actual face tracking**. Inspect frames at least 0, 5, 13, 20, 26, 31, 38, 45, 52, 58 seconds, and tweak per scene.
- Hands often occupy `x ≈ 120..950, y ≈ 1130..1700`; don't place infographic blocks over her hands. Regular subtitle overlays may cross the sweatshirt, but must be legible and not needlessly hide active gestures.
- Prefer compact cards in the **upper-left negative-space area** (approximately `x = 55..390, y = 280..870`, adjustable per frame), tiny banners in the upper margin, or brief translucent typography overlays when a phrase is especially important. Do NOT force all text into the same top-left coordinate; check for collisions with hair/ceiling/window.
- Set a conservative upper UI margin of 250px, left/right inset ~80–90px and bottom reserve ~350px. These are editable layout preferences, **not guaranteed platform UI specifications**.
- Create a debug mode showing safe-zone guides, face/hands exclusion zones, centerlines, caption rectangle, and current scene name. Never render debug guides in final.
- Use max two caption lines. Move subtitle position by scene if a hand covers it; do not permanently cover Toni's mouth or glasses. Cards must wrap instead of overflowing.

## Editorial strategy and clip pacing

Use the supplied speech unchanged. **Do not move the 'you can lose weight and still be undernourished' sentence to the front** because this is the raw original timing. The video already opens with the effective hook 'Your GLP-1 has quieted the food noise. Don't let it quiet your nutrition.' Keep it.

Prioritize only **four hero graphic moments**:

1. **0:00–0:03.900** — “DON'T QUIET YOUR NUTRITION”
2. **0:25.233–0:29.100** — “STILL BE UNDERNOURISHED”
3. **0:44.833–0:48.466** — “EVERY BITE COUNTS / PROTEIN FIRST”
4. **0:54.966–final** — “FOOD IS STILL MEDICINE” + “READ THE FULL BLOG / LINK IN BIO”

Everything else is compact, informative, secondary. Toni should remain on-screen for most of the Reel. Avoid full-screen title cards or B-roll over these four hero moments unless directed in the storyboard.

## Exact 12-scene storyboard tied to original SRT

Use original cue timestamps. Treat each animation as one small, polished visual beat.

| Scene | Source time | Actual spoken idea | Graphics and visual placement |
|---|---|---|---|
| 01 | 00:00.000–00:03.900 | “your GLP1 has quieted the food noise / don't let it quiet your nutrition” | In the left wall space, thin sage waveform reduces in amplitude; brief masked ivory card reveals **DON'T QUIET / YOUR NUTRITION** in charcoal with sage underline. Don't hide Toni. |
| 02 | 00:03.900–00:10.600 | “whether you're taking GLP1 for food noise / inflammation or just trying to turn down the appetite” | Sequential small label chips: **FOOD NOISE**, **INFLAMMATION**, **APPETITE** with understated SVG icons. One/two at once maximum; use upper-left. Don't imply medical efficacy beyond the spoken wording. |
| 03 | 00:10.866–00:16.100 | “it will change how much you wanna eat / but it's not gonna change what your body needs” | Small comparison: **APPETITE ↓** vs **BODY NEEDS ≠ 0**, as a conceptual bar (not quantitative medical scale). Use left-side compact infographic and preserve facial visibility. Optional B-roll on first phrase. |
| 04 | 00:16.100–00:22.666 | “people that are not hungry are skipping meals / or using the little bit of hunger that they have” | Simple outline plate with one negative-space indication and **SKIPPING MEALS** label. Optional 1.5–2s untouched-meal B-roll, then return to Toni. |
| 05 | 00:22.666–00:25.066 | “to eat chips or desserts” | Small chips/dessert outlines OR optional 1.5–2s snack B-roll. No shame icons or caution symbols. |
| 06 | 00:25.233–00:29.100 | “the truth is you can lose weight and still be undernourished” | **HERO. No B-roll.** Brief well-composed ivory headline strip or stacked card to left of face, charcoal statement **LOSE WEIGHT / STILL UNDERNOURISHED**, sage underline on last word. Preserve the natural facial expression. |
| 07 | 00:29.233–00:31.566 | “low protein means you're gonna lose muscle” | Small protein/strength icon and **PROTEIN SUPPORTS MUSCLE** or original transcript highlights **LOW PROTEIN / MUSCLE LOSS**. When showing literal captions, preserve actual speech. Optional protein-food B-roll, not both giant graphics and B-roll. |
| 08 | 00:31.833–00:36.700 | “low iron fiber / B12 vitamin d is gonna show us fatigue” | Four small cards appearing with the words: **IRON / FIBER / B12 / VITAMIN D**. Do not fake laboratory measurements; show simple typography, not 4 big decorative blocks. |
| 09 | 00:36.700–00:44.700 | “brain fog constipation / which we see a lot in the GLPs / and even hair loss so when you are eating less” | Minimal staggered symptom labels **BRAIN FOG / CONSTIPATION / HAIR LOSS**. Optional brief related B-roll at ~36.7–38.7 and ~40.9–42.7. Don't depict medical certainty or exaggerated symptoms. |
| 10 | 00:44.833–00:48.466 | “every bite counts eat your protein first” | **HERO.** Animated **EVERY BITE COUNTS** with 10–15-frame sage underline; shift to **PROTEIN FIRST** plus a small line-drawn plate. Keep Toni's gesture unobstructed. No long B-roll here unless needed for an alternate version. |
| 11 | 00:48.633–00:53.133 | “then eat something on the rainbow / something colorful then maybe your treat” | A few small naturally colored vegetable icons forming a plate shape + little dessert icon. Optional vegetables/treat close-up B-roll. No literal rainbow gradient. |
| 12 | 00:53.366–~00:59.800 | “your prescription is a tool / food is still medicine full blog post in the link in my bio” | **HERO FINISH.** Elegant charcoal/ivory lines **YOUR PRESCRIPTION IS A TOOL**, then **FOOD IS STILL MEDICINE**, sage underline, small CTA **READ THE FULL BLOG — LINK IN BIO**. Use the **supplied real TLC logo** via `staticFile("assets/logo.webp")`, preserving gold artwork and aspect ratio on a small charcoal `#2B2B2B` plaque. The actual logo gold is a permitted exception to the three-color palette for the logo asset ONLY. Never convert its gold rays or lettering into sage. Hold over Toni's natural end smile; trim before lens-reaching gesture. |

IMPORTANT: For hero graphics, keep the meaning of the original spoken words. Display typography can be abbreviated, but captions must be transcript-faithful. Don't silently rewrite Toni's audio. Use capitalization/punctuation normalization only for readability.

## Caption/animation implementation

- Parse all 21 SRT cues; convert timestamp milliseconds to frames robustly with a consistent rounding policy. Clamp last cue to the edited end.
- Remotion frame-driven `spring()`, `interpolate()` and easing, no timeouts or randomized state. Prefer 10–16-frame soft text/card entrances and 7–10-frame exits.
- Provide presets for `EditorialHeadline`, `SageUnderline`, `LineDrawIcon`, `NutrientChip`, `KineticCaptions`, and `TLCCTA`.
- Keep captions phrase-level if only cue timestamps exist. Do not fabricate precise per-word alignments. Large headline and word-for-word subtitles should not compete.
- Small fonts should be legible at actual phone size. Use charcoal on ivory panels, warm ivory over dark footage, and sage as an accent only. Avoid white text directly over bright windows/wall without backing.
- When a B-roll layer appears, remove or reduce any competing infographics on top of it.
- No fake medical statistics, laboratory results, or unsupported efficacy claims.

## Optional Flow B-roll — correctly mapped to raw timestamps

B-roll is NOT required to render the reel. Build support with `startSec`, `endSec`, `filename`, `muted`, `graphicMode`. Keep Toni's original audio continuous underneath. Do not fetch random stock footage.

Recommended short inserts if files are supplied:

- `broll/appetite.mp4`: **11.0–13.4s** — a woman looking at a small balanced meal (appetite changes).
- `broll/skip-meal.mp4`: **17.1–19.2s** — untouched meal beside laptop.
- `broll/chips-dessert.mp4`: **22.8–24.8s** — chips and small dessert.
- `broll/protein-food.mp4`: **29.4–31.4s** — realistic eggs/chicken/fish/beans.
- `broll/brain-fog.mp4`: **36.8–38.8s** — subtle fatigue or distraction; avoid severe illness visuals.
- `broll/hairbrush.mp4`: **41.0–42.7s** — tasteful few hair strands in a brush.
- `broll/vegetables.mp4`: **48.8–50.9s** — naturally colorful vegetables.
- `broll/treat.mp4`: **51.7–52.9s** — small dessert as a treat.

These are editable proposed edit windows **aligned to the original SRT**, not new transcript timestamps. The earlier proposal to place chips over 26.5s was incorrect; 26.5s is the **undernourished** hero statement. Keep B-roll OFF this moment. Keep B-roll OFF the final medicine/CTA statement.

B-roll requirements: 9:16 vertical, ideally 1080×1920 or better, 30fps preferred, no burned-on text, no generated voiceover, no logos, no watermark, natural movements and warm daylight. B-roll may be 6–8s generated in Flow and trimmed to these 1–2.5s inserts. Do not invent footage if absent.

## Audio treatment

Use Toni's embedded speech audio once, without time-stretching. Optionally add gentle noise reduction/room hum reduction if necessary, avoiding metallic artifacts. Only add optional licensed instrumental background music if provided; mix underneath speech at very low volume with gentle intro/outro; music must not overpower words. No AI voiceovers. No prominent whooshes.

## Project deliverables and code architecture

- `src/config/tlcBrand.ts`: exact official palette and typography token defaults
- `src/config/scenes.ts`: 12 original timing segments; all text and motion spec in data
- `src/config/broll.ts`: optional insert schedule; disabled when files absent
- `src/utils/parseSrt.ts`, `src/utils/time.ts`
- `src/components/EditorialHeadline.tsx`
- `src/components/SageUnderline.tsx`
- `src/components/AnimatedWaveform.tsx`
- `src/components/NutrientChip.tsx`
- `src/components/PlateIllustration.tsx`
- `src/components/SymptomLabels.tsx`
- `src/components/KineticCaptions.tsx`
- `src/components/BrollLayer.tsx`
- `src/components/TLCClosingCTA.tsx`
- `src/compositions/ToniFinal.tsx`
- `src/compositions/ToniOverlay.tsx`
- `src/compositions/ToniPreview.tsx`
- `src/Root.tsx`, `src/index.ts`, `package.json`, `README.md`

Register:
1. **ToniFinal** — final 1080×1920 H.264/AAC talking head with captions/graphics/B-roll.
2. **ToniOverlay** — GRAPHICS ONLY, transparent, no talking-head imagery or audio. Use alpha-capable **ProRes 4444** (or transparent PNG sequence); do not claim H.264 MP4 is transparent.
3. **ToniPreview** — convenient debug preview with scene selection and optional geometry guides (debug off in final).

Prefer the version-compatible Remotion video and audio API discovered in `package.json`; check `@remotion/media`, `remotion`, `@remotion/cli`, their actual installed APIs. Do not mix incompatible versions. For H.265 source, implement reliable seek and frame sync, with a proxy-generation script when needed. Use `staticFile()` for local assets.

## Quality assurance before reporting complete

- Run metadata inspection (`ffprobe`) and verify source video 1080×1908, 30fps, 61.37s, HEVC/AAC.
- Inspect source stills for face and hands and show proof from real preview, not placeholder visuals.
- Confirm original cue numbering/time mapping, especially hero 25.233–29.100 and ending 54.966–59.900.
- Verify finish cut occurs after the last spoken syllable and before the hand reaches the camera; last subtitle ends no later than cut.
- Confirm no crop, stretch or letterboxing of meaningful video content (only 6px top/bottom padding).
- Verify exactly one copy of Toni's audio and natural lip sync.
- Check at least 12 representative frames plus ~5 seconds around scene boundaries.
- Ensure all key words are readable at mobile size and face/hands are not badly occluded.
- Render final MP4 and alpha graphics overlay if source assets and rendering tools are available. Else render a working placeholder preview and clearly report which inputs remain unavailable.
- Provide actual launch, preview and render commands and a short guide for inserting new B-roll and the real TLC logo.

**START WORK NOW:** inspect repo and supplied media, initialize Remotion if required, implement the complete project, test and preview, fix issues, render deliverables when possible. Don't stop at planning or pseudocode.

## Asset checklist (what the editor needs)

**Already supplied in conversation**: `toni.mp4` (raw source with embedded speech audio), `1112.srt` (timed subtitles), palette (`#FAF6F0 / #2B2B2B / #8B9E89`). Copy both files into the local Codex project's `public/assets/` folder.

**Recommended additional assets**:
1. **Official logo already PROVIDED** as `public/assets/logo.webp` (300×166 transparent WebP). A higher-resolution SVG/PNG would only be an optional upgrade for larger logo display; do not block production.
2. Optional exact website/brand font files or font names; otherwise use the fallback typography described above.
3. Optional 5–8 short AI or real B-roll clips, as listed in the timing table. Not required for the motion-only version.
4. Optional properly licensed soft instrumental music track (`music.mp3` or `.wav`), no vocals, subtle under voice.
5. Optional brand-approved CTA destination or exact blog title; the video can use **LINK IN BIO** without adding a URL.
6. Optional verified professional title/credentials for Toni **only if** the user wants a name/credentials lower third; do not invent credentials.
7. Optional references (past TLC Reels, approved visual examples) to refine style; not required to start.

**Not required as separate user files**: the voiceover (already in `toni.mp4`), still photos of Toni (the video is sufficient), social safe-zone graphic, icons/illustrations (generate via Remotion SVG), or 1080×1920 rescaled raw footage (handle the 6px padding programmatically).


## Important update — official logo received

The user has uploaded the official logo as `logo.webp` (300×166 with genuine alpha transparency). It contains fine gold sunburst rays and the gold “TLC BOUTIQUE WELLNESS” wordmark. Use this asset directly with its native gold appearance. Keep the **motion-graphics theme** strictly ivory `#FAF6F0`, charcoal `#2B2B2B`, sage `#8B9E89`; the logo's existing gold is **exempt only inside the original artwork**.

On the closing CTA, put the WebP on a neat charcoal plaque with sufficient padding and a width around 300–360px. Do not place the gold rays directly over the beige wall where contrast would be poor. Preserve alpha and aspect ratio; no background-removal process is needed. Avoid enlarging well beyond native size because this is a small raster image. Keep any additional lines, CTA text, and buttons charcoal/sage/ivory, never new gold graphics.

`logo.webp` is now a supplied required asset, **not** a missing dependency. The remaining optional creative inputs are a licensed music track, 9:16 Flow B-roll clips, and a high-resolution logo source if the client wants a larger lockup.
