# Multi-brand Autocontent — ZonaQuintas + iWeb

Experimental weekly video production pipeline using [HyperFrames](https://github.com/heygen-com/hyperframes) and GitHub Actions.

## Brands and weekly deliverables
- **ZonaQuintas:** three vertical reel compositions plus two post concepts; goal: reach property owners and renters.
- **iWeb:** three vertical reel compositions plus two post concepts; priority: Tranett, then websites and business systems.

Each brand has separate output and editorial metadata. This is **not yet AI-generated weekly content**: scripts are fixed placeholders until a dynamic editorial source is connected. Brand names are text placeholders, not official logos.

## Scheduling
Workflow `.github/workflows/weekly-videos.yml` runs Sundays at **13:00 UTC = 10:00 Argentina** and supports manual execution. Scheduled GitHub Actions may be delayed. On success, MP4s and editorial JSON are uploaded as artifacts for 14 days.

## Local development
```bash
npm install --no-save hyperframes
node scripts/generate.mjs
cd generated/zonaquintas/reel-1
npx hyperframes preview
npx hyperframes render
```

## Before production
1. Validate the HyperFrames CLI and workflow with a manual GitHub Actions run; rendering is currently unverified.
2. Add the real approved logos and visual assets for both brands; replace provisional colors for iWeb with its actual palette.
3. Integrate dynamic AI script generation using secrets, spending limits, and human approval.
4. Add approved image/audio assets and export verification.
5. Keep social publishing manual until an explicit approval workflow exists.

Never commit secrets, customer details, passenger data, or private property photos.
