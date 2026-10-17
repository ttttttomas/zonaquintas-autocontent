#!/usr/bin/env bash
set -euo pipefail
# Run in a trusted agent/development environment, not inside each weekly render.
# Official HyperFrames core skills; the agent must read and apply them.
npx --yes hyperframes skills update
echo "HyperFrames core skills installed/updated. See AGENTS.md and docs/creative-production.md."
