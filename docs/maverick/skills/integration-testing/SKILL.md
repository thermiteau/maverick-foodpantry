---
name: integration-testing
title: Integration Testing — Project Implementation
topic: integration-testing
last-verified: 2026-06-30
status: recommended
---

## Stack

No dedicated integration test suite exists. The project's only test suite is the Karma-based unit tests under `test/`. Integration with Form.io is tested only indirectly: `window.Formio` is stubbed in unit tests, meaning the actual Form.io API is never exercised in the test suite. No end-to-end or browser automation tooling (Cypress, Playwright, WebdriverIO) is configured.

## Configuration

No integration test configuration files exist. The Karma configuration in `karma.conf.js` covers only unit tests matching `test/**/*.test.js`.

## Patterns

- The closest to integration testing is the Karma browser environment: tests run in a real headless browser, DOM fixture creation is real, and custom events fired on `window` propagate as they would in production
- Form.io integration is excluded from tests by design — `Formio.createForm` is always stubbed with `stub(window.Formio, 'createForm').resolves()`
- Squiz Matrix integration (embedding, section nav DOM manipulation) is not covered by any automated tests

## File Locations

- `karma.conf.js` — only test runner config; no integration-specific entries
- `test/` — all existing tests are unit-scoped with stubs for external dependencies
