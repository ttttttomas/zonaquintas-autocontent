# Production system v2 — plan and quality gates

## Current state
The workflow can render six MP4s, but `src/reels.mjs` is a fixed placeholder feed and `scripts/generate.mjs` is a repeated text-card layout. Successful MP4 rendering is **not** successful creative production.

## Editorial contract
Each reel is represented by a reviewed brief:
- brand, audience, funnel stage, objective and distribution channel
- single-sentence audience problem and concrete promised takeaway
- factual sources / approved URLs / current product proof
- 0–3s hook; story beats with timing, purpose, on-screen copy, source-backed visual and transition
- closing CTA tied to a real action, caption and optional voiceover/music treatment
- asset references and rights, privacy checks, risk flags
- status: `draft` → `needs_review` → `approved` → `rendered` → `reviewed`
Never turn an unapproved draft into a public post.

## Proposed weekly content
Per brand: three reels and two supporting post concepts, **with distinct creative angles**, not three near-identical variants. Start with **one pilot reel per brand** and get approval before scaling.

## AI API: budget-controlled implementation (not yet enabled)
1. Choose provider/model and define hard monthly budget in USD.
2. Store API credentials only as GitHub Actions secrets, never in repo or logs.
3. Generate **structured JSON briefs**, not arbitrary executable HTML, from vetted brand context.
4. Validate schema, source claims, brand constraints, privacy and content diversity.
5. Enforce max output tokens, per-run request cap, max retries, cost estimates, and a fail-closed budget ledger / provider-side spend cap where supported.
6. Save generated proposals as artifacts or PR for review; do not auto-render/publish unapproved proposals.
7. After approval, produce storyboard and composition with agent using official HyperFrames skills.
8. Run `hyperframes lint`, inspect frames, render MP4, and perform human quality review.
9. Keep existing successful render workflow as fallback; do not replace it until pilots pass.

## Visual QA rubric (each scored 0–5; fail below 4 on any)
- Narrative specificity and factual support
- Correct brand identity and authorized assets
- Useful, non-generic visual storytelling
- Legibility, timing, audio and pacing
- Privacy, rights and truthful CTA

## Missing inputs
ZonaQuintas official logo; authorized real-world photos/videos; iWeb logo asset and exact palette/fonts from official site; anonymized current product recordings; API provider, account spend cap, approval process and editorial references.

## Security
No real passenger/reservation data in public repositories, AI prompts or generated media. Mask or replace at source; do not rely on a last-minute blur.
