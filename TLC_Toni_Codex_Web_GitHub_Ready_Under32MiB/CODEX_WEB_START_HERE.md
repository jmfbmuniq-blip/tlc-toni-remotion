# START HERE — Codex Web / Cloud setup

This package is intended for **Codex Web/Cloud**, not a local VS Code installation.

## What's included

- `public/assets/toni.mp4` — 1080x1908 optimized H.264 talking-head video, with original speech, <25 MiB
- `public/assets/1112.srt` — original transcript with source cue timing
- `public/assets/logo.webp` — official TLC logo. Never recolor it.
- `public/assets/editing-inspiration.mp4` — user-provided *style reference only*. Do NOT reuse its people, footage, dialogue, brand, or sound in output.
- `src/` — already-generated Remotion draft (27 kinetic beats). Refine this; don't start from scratch.
- `CODEX_IMPLEMENTATION_PROMPT.md` — complete editing brief.
- `PRODUCTION_BRIEF.md` — earlier creative/technical context.

## Browser-only setup, recommended

1. Download and **extract** the ZIP on your computer. Do not upload the ZIP itself to GitHub and expect it to unpack.
2. In GitHub.com, create a **private** repository, e.g. `tlc-toni-remotion`.
3. Open that repository, choose **Add file > Upload files** and drag the **contents** of the extracted folder (maintaining nested directories). Commit. GitHub web browser per-file upload limit is 25 MiB; the provided individual media files are below that limit. If the browser flattens folder structure, upload folders via GitHub Desktop or Git CLI instead.
4. In Codex Web, choose **Work in > Cloud**, select the connected repository/environment. Connect GitHub when prompted.
5. Paste the **Codex Web prompt below** into the task, and allow Codex to install dependencies, inspect the reference, render, and report.
6. Review its preview and output. For the best quality, use your original `toni.mp4` locally for a final export after approval.

Cloud environments may need network access to the npm registry for `npm install`. Grant that permission when prompted.

## Paste into Codex Web

You are working in my GitHub repository `tlc-toni-remotion`. This is a Remotion React/TypeScript project for TLC Boutique Wellness.

BEFORE EDITING, inspect these files:
- `public/assets/editing-inspiration.mp4`: the creative reference, study its actual rhythm, typography, rounded talking-head cards, transition speed, cutaways and UI toggle composition. It is strictly a style reference; never reproduce its actual people, audio, branding, or proprietary footage.
- `public/assets/toni.mp4`: the real talking-head footage and continuous, original speech audio.
- `public/assets/1112.srt`: authoritative cue times and original words.
- `public/assets/logo.webp`: authentic gold TLC logo; never recolor or remake.
- `CODEX_IMPLEMENTATION_PROMPT.md`, `src/data/referenceBeats.ts` and `src/components/ReferenceStyle.tsx`.

TASK: Refine the EXISTING 27-beat Remotion draft so it closely matches the editing language of the supplied reference: energetic and precise kinetic type, short punchy words, editorial full-bleed-to-ivory cuts, rounded video cards, split and triptych layouts, and occasional subtle UI graphics. Keep Toni and her original voice the focus. Do not revert to static infographics.

Official TLC palette: #FAF6F0 ivory, #2B2B2B charcoal, #8B9E89 sage. Only the authentic TLC logo retains its original gold. Render 1080x1920 30 fps. Toni source is 1080x1908; preserve full frame with 6 px vertical padding rather than cropping. Trim the camera-stop movement near the end. Never duplicate audio when using the same source video in multiple cards. Do not invent health statistics or alter Toni's words. The SRT supports cue times, not exact word-level timing: refine kinetic phrases by listening to the source.

1. Inspect source footage and inspiration video using ffprobe and selected contact sheets/frames.
2. Run `npm install` and `npm run verify`; solve dependency/type issues.
3. Review the existing timeline data and refine visual beats and spoken sync.
4. Render representative stills (start, hero sections, scene transitions, end), inspect the images and fix readability or face occlusion.
5. Render the final 1080x1920 MP4 with `npm run render` (or correct any script/API incompatibility).
6. Preserve the editable source and describe the actual preview and render locations. Do not claim success unless the render succeeds.
7. Do not commit generated output videos to Git unless asked; provide ways to access the render artifact from the cloud task.
8. Because my transfer/download limit is 32 MiB, also export a 1080x1920 H.264/AAC delivery version below 30 MiB, while retaining the higher-quality master in the workspace. Use ffmpeg with a sensible controlled bitrate (approximately 3000 kb/s video + 128 kb/s audio for a one-minute Reel) and verify the actual resulting file size. Do not trim spoken content to meet the size cap.

IMPORTANT: Implement and test the real edit rather than returning only a plan. If a required tool/asset cannot be accessed, explain precisely what's blocked and continue as far as possible.
