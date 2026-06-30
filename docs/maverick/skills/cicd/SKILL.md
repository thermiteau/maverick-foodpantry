---
name: cicd
title: CI/CD — Project Implementation
topic: cicd
last-verified: 2026-06-30
---

## Stack

GitHub Actions. Two workflows: `Test` (quality gate on PRs and non-deploy branches) and `Publish` (build + deploy on `master`, `develop`, and `uat` branches). The platform-specific best-practice skill is `mav-bp-cicd-github`.

## Configuration

Both workflows use Node.js 16.x on `ubuntu-latest`. `node_modules` is cached using `actions/cache@v3` keyed on `package.json` hash (key: `foodpantry-labelbuster-node_modules-<hash>`).

**Test workflow** (`node.js.yml`): triggers on push to any branch except `develop`/`uat`, and on pull requests to any branch. Steps: checkout → cache → install → lint → build → test.

**Publish workflow** (`publish.yml`): triggers on push to `master`, `develop`, or `uat`. Steps: checkout → cache → install → lint → build → test → archive dist artifact → extract branch name → publish via `qld-gov-au/gha-publish-to-git@master`. Required secrets: `GH_TOKEN`, `GH_PAT`. Required variable: `TARGET_REPO` (destination repository for dist output).

No separate deploy step exists; publishing pushes the `dist/` folder to a separate target repository (the deploy repo) on the same branch name as the triggering branch. No Squiz webhook step exists in the current workflow (removed from the original version in readme.md).

## Patterns

- Quality gate order is always: lint → build → test (lint failures block build)
- The same quality steps run in both Test and Publish workflows — no separate fast/full split
- Branch strategy: feature branches → PR → merge to `master`; `develop` and `uat` are deploy branches that publish to the corresponding environment
- No tagging or semantic versioning step; deployment is branch-name-based
- `actions/upload-artifact@v3` archives the `dist/` folder for inspection even when publish is skipped on failure

## File Locations

- `.github/workflows/node.js.yml` — Test workflow
- `.github/workflows/publish.yml` — Publish + deploy workflow
- `./deploy.sh` — referenced in readme but not present in current workflow; replaced by `gha-publish-to-git` action
