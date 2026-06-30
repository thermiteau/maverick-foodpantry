---
name: database
title: Database — Project Implementation
topic: database
last-verified: 2026-06-30
status: recommended
---

## Stack

No database is used. All persistent state is stored in browser `localStorage`. Form submission data is sent to Form.io's hosted platform (which uses MongoDB internally), but this codebase has no direct database access. No ORM, migration tooling, or connection configuration exists.

## Configuration

Two `localStorage` keys are used:
- Form title (`"Label Buster"`) — stores wizard form data, current page, seen pages, last navigation, and terms acceptance flag
- `lbcompleted` — stores an array of completed form titles (JSON-serialised)
- `lbtermsAndConditions` — stores terms acceptance boolean (separate from main form data)
- `help-guide` — stores boolean indicating user has seen the onboarding screen

Storage type is configurable in `config.storage.type` (defaults to `localStorage`); `config.terms.termsStorageType` is separately configurable (defaults to `localStorage`).

## Patterns

- Data is double-serialised: each field value is individually `JSON.stringify`'d, then the container object is `JSON.stringify`'d again — see `FormioWrapper._packageData()` / `_unpackageData()`
- All `localStorage` reads are wrapped in try/catch; corruption is handled by falling back to empty state with a `console.warn`
- Storage is cleared entirely on Cancel action when `clearStorageOnCancel: true`, followed by `document.location.reload()`
- No expiry or TTL on stored data; form data persists until explicitly cleared

## File Locations

- `src/components/formio-wrapper.js` — `_updateStorage()`, `_populateDataFromStorage()`, `_packageData()`, `_unpackageData()`, `_clearStorage()` methods
- `src/config.js` — `storage` and `terms` config blocks defining storage keys and types
