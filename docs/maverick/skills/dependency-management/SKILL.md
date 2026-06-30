---
name: dependency-management
title: Dependency Management — Project Implementation
topic: dependency-management
last-verified: 2026-06-30
status: recommended
---

## Stack

npm with `package-lock.json` for lock file. No automated dependency update tooling (Dependabot, Renovate) is configured. No vulnerability scanning step in CI. No license compliance checking tooling.

## Configuration

All dependencies are declared in `package.json`. The single runtime dependency is `lit-html` 1.x. All other packages are `devDependencies`. Lock file is `package-lock.json` (npm lock format v1). CI uses `npm install` (not `npm ci`) — this allows the lock file to be updated in CI, which is not best practice.

## Patterns

- No automated PRs for dependency updates exist; updates are manual
- No `npm audit` step in CI workflows
- No `.npmrc` or registry override configuration
- `node_modules` is cached in CI using `actions/cache@v3` keyed on `package.json` hash (not `package-lock.json` hash — meaning cache is invalidated only when `package.json` changes, not when the lock file changes)
- `postinstall` script runs `node ./postinstall.js` after every `npm install`

## File Locations

- `package.json` — dependency declarations and npm scripts
- `package-lock.json` — lock file
- `postinstall.js` — post-install script (runs after npm install)
- `.github/workflows/node.js.yml`, `publish.yml` — CI cache and install steps
