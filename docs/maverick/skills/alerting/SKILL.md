---
name: alerting
title: Alerting — Project Implementation
topic: alerting
last-verified: 2026-06-30
status: recommended
---

## Stack

No alerting library or notification service is integrated. The only notification mechanism is transactional email dispatched via Form.io: an admin email is sent automatically when the user reaches the final wizard page (page 10), and a user copy is sent on explicit button click. No PagerDuty, SNS, Opsgenie, or Sentry integration exists.

## Configuration

Admin email recipients are environment-specific and set in `src/environment.js`:
- development: `FoodPantryDefects@DSITIAQLD.onmicrosoft.com`
- uat: `foodpantry@health.qld.gov.au`
- production: `foodsafety@health.qld.gov.au`

Email is triggered by dispatching the `formiowrapperSendAdminEmail` custom event on `window`. Form.io handles the actual email delivery through its own submission hooks — no SMTP configuration exists in this codebase.

## Patterns

- Admin email is triggered automatically in `index.js` when `formioNewPageRender` fires with `event.detail.page === 10`
- User email has a 3-second debounce to prevent duplicate sends (`requestedEmail` flag)
- Admin sends temporarily override the `emailField` and `emailConfirmField` values with the admin address, then restore them after submission

## File Locations

- `src/environment.js` — admin email addresses per environment
- `src/config.js` — `adminEmail`, `adminField`, `emailField`, `emailConfirmField` config keys
- `src/components/formio-wrapper.js` — `_sendEmail()`, `_triggerEmailSubmission()`, `_triggerEmailSubmission()` methods
- `src/index.js` — page 10 detection triggering admin email dispatch
