# ZonaQuintas — Pilot 02 (creative rebuild)

This is **a new HyperFrames/GSAP source composition**, not a finished video. It intentionally does not reuse the rejected AI-image collage or the generic weekly reel template.

## Creative intent
- Audience: people looking for a weekend quinta.
- Hook: "Que el finde valga."
- Sequence: mood → occasion → search intent → official brand CTA.
- 15 seconds, 1080 × 1920, four editorial beats.
- Illustrative pool / sun / leaf motifs are CSS illustrations, **not real property photos**.
- GSAP: one paused, registered timeline; root has explicit 15-second duration.
- No invented product UI, listings, ratings, reviews, or protection guarantees.

## Required original brand asset
Place the user's supplied original 500×500 transparent PNG at `pilots/zonaquintas/assets/zonaquintas-logo.png`. **This file is not yet committed** because the GitHub connector currently supports text files but not direct upload of the conversation's binary attachment. The composition uses plain-text brand fallback only while the image is missing. Do not approve or publish the final reel until the original logo is present.

## Preview and render
From repo root:

```bash
npm install --no-save hyperframes
cd pilots/zonaquintas
npx hyperframes lint
npx hyperframes render
```

This source is built following official `hyperframes-core`, `hyperframes-creative`, and `hyperframes-animation` guidelines. It has **not yet been rendered or visually reviewed** in GitHub Actions. Review first and improve before integrating into the weekly automation. The production workflow is unchanged.

## Acceptance checklist
- Original logo present and correctly proportioned
- All four beats visible, no blank frames
- Legible 9:16 text at phone size
- Correct duration (15 s), no timeline readiness warnings
- No claim that CSS illustrations are actual listings
- Visual quality approved by owner before release
