---
name: linting
title: Linting — Project Implementation
topic: linting
last-verified: 2026-06-30
---

## Stack

- **ESLint 7.x** — JavaScript linting with `eslint-config-airbnb-base` (strict Airbnb rules) extended with `eslint-config-prettier` (disables formatting rules that conflict with Prettier)
- **eslint-plugin-html** — lints JS in HTML files
- **eslint-plugin-import** — import/export validation (from Airbnb preset)
- **Prettier 2.2.1** — code formatting for JS and HTML
- **Husky 5.x** — pre-commit hooks
- **lint-staged 10.x** — runs linters on staged files only in pre-commit

## Configuration

ESLint config is at `.eslintrc.json` with `env: { browser: true, es6: true }`. Key rule overrides from Airbnb base:
- `no-console: error` (all console calls disallowed, require eslint-disable comments)
- `no-alert: error`
- `max-len: 80` (with URL/string/template literal exceptions)
- `no-underscore-dangle: off` (FormioWrapper uses underscore-prefixed private methods)
- `valid-jsdoc: 2` (JSDoc required but return descriptions optional)
- `import/prefer-default-export: off`

Prettier config is in `package.json`: `singleQuote: true`, `trailingComma: all`, `printWidth: 80`, `arrowParens: avoid`.

Husky pre-commit hook runs: `lint-staged && npm run build && npm test && npm run format:partials`. lint-staged runs `eslint --fix` on `*.js` and `prettier --write` on `*.html`.

## Patterns

- `npm run lint` runs `lint:eslint` then `lint:prettier` (check-only, no fix)
- `npm run format` runs ESLint fix + Prettier write + format:partials (a custom formatFile.js for component partials)
- `Formio` is declared as a global in `.eslintrc.json` to suppress no-undef errors for the externally-loaded Form.io library
- ESLint is run against `.js` and `.html` files; `.gitignore` is used as the ignore path

## File Locations

- `.eslintrc.json` — ESLint configuration
- `package.json` — Prettier config (`"prettier"` key), Husky hooks, lint-staged config, npm lint/format scripts
- `formatFile.js` — custom formatter for component partial files (used in `format:partials` script)
- `.github/workflows/node.js.yml` — CI runs `npm run lint` before build and test
