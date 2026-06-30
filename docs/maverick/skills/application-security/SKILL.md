---
name: application-security
title: Application Security — Project Implementation
topic: application-security
last-verified: 2026-06-30
status: recommended
---

## Stack

No application security middleware exists — this is a browser-only SPA with no server-side runtime. Security controls are inherited from Form.io (form submission, email dispatch) and Squiz Matrix (page hosting). No helmet, CORS configuration, CSP headers, JWT, or SAST tooling is configured in this codebase.

## Configuration

The SPA runs entirely in the browser without a Node.js server. Security-relevant configuration is limited to:
- Form.io API endpoints are environment-specific and set in `src/environment.js`
- No API keys or secrets are stored in the codebase; credentials are injected via GitHub Actions secrets (`GH_TOKEN`, `GH_PAT`) for the CI deploy step only
- `window.formEnv` is set to the environment flag and included in form submissions (used server-side by Form.io to route submissions)

## Patterns

- All user input is submitted to Form.io via the wizard form — validation occurs via Form.io's built-in field validation plus the custom JS validation snippets in `src/validations/`
- No direct DOM-based XSS vectors have been identified; `unsafeHTML` from lit-html is used in `ButtonGroup._createConfirmation()` for the close button icon, but the value comes from application config, not user input
- Email address fields have a confirm-email match validation and a format check (`src/validations/your-label/`)
- Form.io handles authentication and submission storage; this codebase has no auth logic
- No `eval`, `innerHTML` direct assignment, or `document.write` patterns detected in source JS

## File Locations

- `src/environment.js` — API endpoint configuration (no credentials stored)
- `src/validations/your-label/email.js`, `confirmEmail.js` — email input validation
- `src/components/button-group.js` — `unsafeHTML` usage (config-sourced, not user-sourced)
- `.github/workflows/publish.yml` — `GH_TOKEN` / `GH_PAT` secrets usage (CI only)
