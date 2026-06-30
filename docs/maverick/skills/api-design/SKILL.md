---
name: api-design
title: API Design — Project Implementation
topic: api-design
last-verified: 2026-06-30
status: recommended
---

## Stack

This project has no HTTP API server. There are no route definitions, REST endpoints, or OpenAPI specs. The project's internal "API" is an event bus on `window` using the browser's native `CustomEvent` / `addEventListener` / `dispatchEvent`. The external API consumed is Form.io's hosted REST API (form schema, submissions, PDF generation, email).

## Configuration

The Form.io API base URL is configured per environment in `src/environment.js` and merged into `config.form.location` and `config.form.baseLocation`. Endpoint paths are assembled by `FormioWrapper` from config values: `baseLocation + pdfEndpoint + '/' + endpoint` for PDF submission, `location` for the wizard form.

## Patterns

- Internal component communication uses named `CustomEvent` on `window` (see formio-wrapper.md for the full event catalogue)
- Events carry data in `event.detail` as plain objects
- No versioning scheme exists for the event interface
- Form.io API calls are made exclusively through the `Formio` global (loaded by Squiz from a CDN); no `fetch` or `XMLHttpRequest` is used for Form.io operations except the PDF binary download
- PDF download uses `XMLHttpRequest` with `responseType: arraybuffer` directly (no wrapper)

## File Locations

- `src/environment.js` — Form.io API base URLs per environment
- `src/config.js` — endpoint path config (`endpoint`, `pdfEndpoint`, `location`, `baseLocation`)
- `src/components/formio-wrapper.js` — all Form.io API interactions and event dispatch
