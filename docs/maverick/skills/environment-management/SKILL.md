---
name: environment-management
title: Environment Management — Project Implementation
topic: environment-management
last-verified: 2026-06-30
---

## Stack

No `.env` files, dotenv library, devcontainer, or Docker Compose configuration. Environments (development/uat/production) are detected at runtime from `window.location.href` in `src/environment.js`. No environment variable injection at build time.

## Configuration

Three named environments, detected by URL substring matching:
- `localhost` or `dev` in URL → development (Form.io tenant: `dev-tzkqydhwrjrviss`)
- `uat` in URL → uat (Form.io tenant: `uat-tzkqydhwrjrviss`)
- Default → production (Form.io tenant: `tzkqydhwrjrviss`)

The only environment-varying values are `form.location`, `form.baseLocation`, and `form.adminEmail`. These are hard-coded in `environment.js` — no secrets or tokens are stored in the source.

## Patterns

- `Environment` class is instantiated in `index.js` and its properties are merged over `configuration` keys to produce the final runtime config object
- `window.formEnv` is set to the flag string (`dev`/`uat`/`prod`) and included in Form.io submission data
- No `.env.example` or `CONTRIBUTING.md` onboarding documentation exists
- Prerequisites for local development: Node.js (16.x used in CI), npm; then `npm install` and `npm run start` (Parcel dev server on port 1234)
- Parcel's dev server serves on `localhost`, which triggers the development environment branch automatically

## File Locations

- `src/environment.js` — `Environment` class with URL-based env detection and per-env config values
- `src/index.js` — `Environment` instantiation and merge with `configuration`
- `src/config.js` — base configuration defaults (overridden by `Environment` at runtime)
