---
name: error-handling
title: Error Handling — Project Implementation
topic: error-handling
last-verified: 2026-06-30
---

## Stack

No error handling library is used. Error handling is implemented with native try/catch blocks and a single structured error throw. No global error handler, error boundaries, retry logic, or circuit breaker patterns exist.

## Configuration

No error handling configuration. ESLint enforces `no-console: error`, so `console.warn` calls require explicit disable comments. `no-alert: error` prevents `alert()` usage.

## Patterns

- `try/catch` is used in three `localStorage` operations within `FormioWrapper` — all fallback silently with `console.warn` and continue with empty/default state
- `FormioWrapper.notLoaded()` throws a structured plain object (not an `Error` instance): `{ element, loaded, settings, name: 'Loaded Exception', message: 'FormIO not properly loaded' }` — called when navigation methods are invoked before the wizard is initialised
- No async error handling for `Formio.createForm()` rejections — the `.then()` chain has no `.catch()`, meaning Form.io load failures are unhandled promise rejections
- PDF download via `XMLHttpRequest` checks `this.status === 200` in `onload` but has no `onerror` handler
- `_unpackageData()` catches parse errors and returns an empty object rather than propagating

## File Locations

- `src/components/formio-wrapper.js` — all error handling: `_updateStorage()`, `_populateDataFromStorage()`, `_unpackageData()`, `_areTermsAccepted()`, `notLoaded()`, `_downloadPDF()`
