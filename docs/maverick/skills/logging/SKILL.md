---
name: logging
title: Logging — Project Implementation
topic: logging
last-verified: 2026-06-30
---

## Stack

No structured logging library is used. Logging is limited to browser `console.warn` calls for non-fatal data corruption events within `FormioWrapper`. The `no-console` ESLint rule is set to `error`, requiring `// eslint-disable-next-line no-console` comments for every console call.

## Configuration

No log level configuration, log transport, or log aggregation service is configured. All logging is implicit browser console output. The ESLint config enforces `no-console` as an error to discourage ad-hoc console logging.

## Patterns

- `console.warn` is used in three `try/catch` blocks within `FormioWrapper` to signal `localStorage` data corruption without throwing — allowing the form to continue with fallback behaviour
- `console.warn` also surfaces a warning when Terms & Conditions storage parse fails
- The codebase has no `console.log`, `console.error`, or `console.info` calls; only `console.warn` is used and always guarded by ESLint disable comments
- GTM (`window.dataLayer`) is used for user interaction tracking but is not a logging system

## File Locations

- `src/components/formio-wrapper.js` — all four `console.warn` call sites (lines containing `Data corrupted, ignoring`, `Stored data corrupted, skipping`, `terms not set`)
- `.eslintrc.json` — `"no-console": "error"` rule
