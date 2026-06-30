---
name: accessibility
title: Accessibility — Project Implementation
topic: accessibility
last-verified: 2026-06-30
---

## Stack

No automated accessibility testing tooling (axe-core, pa11y, jest-axe, Lighthouse CI) is configured. Accessibility is implemented manually via ARIA attributes and focus management in component code. The SWE (Queensland Government Web Template) design system provides the base accessible HTML patterns for accordions, alerts, and navigation.

## Configuration

No a11y-specific config files. `eslint-plugin-jsx-a11y` is not installed (project uses plain JS, not JSX). SWE design system is loaded externally by Squiz Matrix.

## Patterns

### ARIA Attributes (Help Guide Partials)

- `<section>` elements use `aria-label="Accordion Label"` on SWE accordion wrappers
- Accordion control buttons have `aria-controls` pointing to panel IDs and `aria-expanded="false"` (static — not dynamically updated on toggle)
- Accordion checkboxes have `role="checkbox"` applied in the SWE pattern
- Alert divs in resource HTML use `role="alert"` for info and warning messages

### Focus Management (HelpGuide component)

- **Onboarding focus lock**: on first visit, a `keydown` listener traps all keyboard events to `#gotHelpGuide` until the user clicks it, preventing tab escape from the onboarding overlay
- **Accordion keyboard trap**: `_addKeyboardTrap()` queries all focusable elements within an active accordion article, focuses the first, and listens for Tab on the last element to close the panel and return focus to the triggering button
- **Callout button**: when the panel is closed, a `<button class="help-guide-callout">` is rendered with an explicit `#expand` focus target
- `HelpGuide.updateTemplate()` focuses `#focusTarget` after onboarding dismissal

### Keyboard Navigation (ButtonGroup)

- All navigation controls are `<button>` elements, not `<a>` tags — keyboard-native
- `disabled` attribute is applied via lit-html `?disabled=${disabled}` for proper native disabled behaviour
- Cancel confirmation dialog is rendered in-document (not a true modal) with no ARIA dialog role or focus trap

## File Locations

- `src/components/help-guide.js` — `_addKeyboardTrap()`, `_initAccordionButtons()`, onboarding focus lock, `_onHashChange()`
- `src/components/partials/help-guide-lb-statement.js`, `help-guide-lb-storage.js` (and others) — ARIA attributes on accordion sections
- `src/resources/**/*.html` — `role="alert"` on informational messages
- `src/components/button-group.js` — button rendering with `?disabled` binding
