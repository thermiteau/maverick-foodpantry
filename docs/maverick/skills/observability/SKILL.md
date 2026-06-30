---
name: observability
title: Observability — Project Implementation
topic: observability
last-verified: 2026-06-30
status: recommended
---

## Stack

No OpenTelemetry, Prometheus, Datadog, or APM tooling is configured. The only observability mechanism is Google Tag Manager (GTM) via `window.dataLayer` for user interaction tracking. No server-side metrics, distributed tracing, health check endpoints, or SLI/SLO definitions exist (this is a browser SPA with no server runtime).

## Configuration

GTM tracking is configured inline in `src/index.js`. Events are pushed to `window.dataLayer` on every form field interaction that triggers the `formioWrapperTracking` custom event. GTM must be separately configured in the Squiz Matrix page template to actually collect and forward these events.

## Patterns

- `window.dataLayer.push()` is called with a structured object containing: `event: 'formio-interaction'`, form name, input ID, input type, input value, input key, label, form version, category, and action
- Tracking fires on every `change` event from the Form.io wizard, filtered to events where `form.changed.component` is an object
- No page view tracking is implemented in this codebase (assumed to be handled by Squiz/GTM template)
- No error tracking (no Sentry or similar) — errors are swallowed with `console.warn`

## File Locations

- `src/index.js` — `formioWrapperTracking` listener and `window.dataLayer.push` calls
- `src/components/formio-wrapper.js` — `_fireTrackingEvent()` method that emits `formioWrapperTracking`
