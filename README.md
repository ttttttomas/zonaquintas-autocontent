# ZonaQuintas Autocontent

Prototype for three weekly vertical reels with [HyperFrames](https://github.com/heygen-com/hyperframes) and GitHub Actions.

## Current scope
Three HTML video compositions using curated placeholder copy. **Not yet AI-generated or published automatically.** The render has not been verified in CI. The text-only brand placeholder must be replaced with the official ZonaQuintas logo.

## Weekly schedule
GitHub Actions workflow `.github/workflows/weekly-videos.yml` runs Sundays at 13:00 UTC (10:00 Argentina), with manual `workflow_dispatch` support. GitHub may delay scheduled jobs. It installs Node 22, FFmpeg, HyperFrames, renders compositions, and uploads MP4 artifacts retained for 14 days.

## Local use
```bash
npm install --no-save hyperframes
node scripts/generate.mjs
cd generated/reel-1
npx hyperframes preview
npx hyperframes render
```

## Next steps
1. Test manual workflow and fix CLI compatibility issues.
2. Add approved brand assets and official logo.
3. Integrate a reviewed weekly content source or AI script generator with secret management and spending limits.
4. Review outputs before any social publishing.

Never commit secrets, personal data, or private property photos.
