---
name: unit-testing
title: Unit Testing — Project Implementation
topic: unit-testing
last-verified: 2026-06-30
---

## Stack

- **Test runner**: Karma 6.x with `@open-wc/testing-karma` preset
- **Test framework**: Mocha (via Open-WC preset) with Chai assertions (`expect`)
- **Mocking**: Sinon 9.x (`stub`, `spy`, `assert`)
- **DOM fixtures**: `@open-wc/testing` (`fixture`, `html`, `oneEvent`)
- **Module format**: ES modules (type: `module` in Karma file config)
- **Node resolver**: `esm.nodeResolve: true` in Karma config (handles bare specifier imports)

## Configuration

Karma is configured in `karma.conf.js` using `createDefaultConfig` from `@open-wc/testing-karma` merged with project overrides. Test file pattern: `test/**/*.test.js`. Tests can be filtered via `--grep` flag. No coverage tooling is configured. Tests run in a real browser environment (headless Chromium via Karma's default launcher).

## Patterns

- Each test file uses `describe`/`it` blocks (Mocha)
- `beforeEach` creates a DOM fixture using `fixture(html\`...\`)` and stubs external dependencies
- `window.Formio` is stubbed in FormioWrapper tests: `stub(window.Formio, 'createForm').resolves()`
- `spy` is used to assert that DOM methods (`scroll`, `focus`) are called with expected arguments
- `assert.calledOnce` / `assert.calledWith` used for stub/spy assertions
- Tests instantiate components directly (not via HTTP or build step) — ES module imports resolve from source

## File Locations

- `karma.conf.js` — Karma configuration
- `test/formio-wrapper.test.js` — FormioWrapper unit tests
- `test/formio-wrapper-events.test.js` — FormioWrapper event-handling tests
- `test/button-group.test.js` — ButtonGroup unit tests
- `test/help-guide.test.js` — HelpGuide unit tests
- `test/config.js` — shared test configuration object
