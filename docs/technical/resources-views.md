---
title: Resources and Views
scope: component
relates-to: [architecture-overview.md, validation-system.md, help-guide.md]
last-verified: 2026-07-03
---

## Overview

`src/resources/` contains the HTML/SCSS view templates for each wizard section and a standalone PDF layout. These are built by Parcel's multi-entry `build:resources` script and either embedded in Squiz Matrix pages or pasted into Form.io. They are not loaded dynamically by the SPA runtime.

## Build Targets

Two Parcel build commands produce separate output sets:

| Command | Entry points | Output |
|---|---|---|
| `build:resources` | `src/resources/**/*.html` and `src/resources/**/**/*.html` | Multi-page static HTML/CSS for Squiz and Form.io content |
| `build:squiz` | `src/index.html` | Single SPA bundle for Squiz embedding |

## Wizard Sections

The Form.io wizard has 11 pages (0-indexed). Resources map to sections as follows:

| Page | Wizard step | Resource directory | Description |
|---|---|---|---|
| 0 | Home / landing | `src/resources/home/` | Entry point with food category tiles |
| 1 | Terms & Conditions | `src/resources/terms-and-conditions/` | T&C acceptance; skipped if accepted previously |
| 2 | About Food Labels | `src/resources/about-food-labels/` | Informational accordion (expand/collapse via `step-handlers.js`) |
| 3 | Food Category (initial limitations) | `src/resources/limitations/` | Q&A gate: determines if food type requires labelling |
| 4 | Food Name | `src/resources/food-name/` | Food name and description entry |
| 5 | Business Details | `src/resources/business-details/` | Business name and address |
| 6 | Date Marks | `src/resources/date-marks/` | Best-before / use-by date and lot identification |
| 7 | Storage and Use | `src/resources/storage-and-use/` | Storage conditions, cooking instructions, directions |
| 8 | Ingredients | `src/resources/ingredients/` | Ingredient declaration |
| 9 | Statements | `src/resources/statements/` | Mandatory statements (allergen, alcohol, edible oil, salt) |
| 10 | Your Label / Summary | `src/resources/your-label/` | Assembled label preview; email trigger at render |

## Resource Directory Structure Pattern

Most sections follow a consistent sub-directory pattern:

```
src/resources/<section>/
  view.html          — primary section view (embedded in Form.io page)
  styles.scss        — section-specific styles (compiled by Parcel)
  section-N/         — sub-sections for multi-part pages
    view.html
  questions/         — conditional question fragments shown/hidden by Form.io logic
    N.html
    N_yes.html / N_no.html
```

Sections with conditional Q&A paths (`limitations/`, `date-marks/`, `food-name/`, `questions-ingredients/`) use numbered question fragments. Form.io conditional logic controls which fragments are displayed based on user responses.

## PDF Layout (`src/resources/pdf/`)

The PDF section is a separate Parcel build target that produces a printable label layout, distinct from the main wizard UI.

| File/Directory | Purpose |
|---|---|
| `your-label.html` | Full assembled PDF label view |
| `example-food-label.html` | Reference label example shown to user |
| `legibility.html` | Legibility requirements information |
| `styles.html` / `styles.scss` | PDF-specific print styles |
| `product-sheet/` | Individual label sections as partials |

### Product Sheet Partials

Each partial covers one label element. Form.io assembles them dynamically based on the user's wizard answers:

| Partial | Label element |
|---|---|
| `business-details.html` | Business name and address |
| `claims.html` | Nutrition/health claims |
| `country.html` | Country of origin statement |
| `date.html` | Best before / use-by date |
| `health-star.html` | Health Star Rating |
| `ingredients.html` | Ingredient list |
| `lot-id.html` | Lot identification |
| `nutritional.html` | Nutrition information panel |
| `product-name.html` | Food name and description |
| `statement.html` | Mandatory statements |
| `storage.html` | Storage conditions |
| `weight.html` | Net content / weight |

## Food Category Assets (`src/assets/`)

SVG icons representing food categories shown on the home landing page. 38 icons covering categories from the Australia New Zealand Food Standards Code, including: BreadsCerealsGrains, MilkDairy, Meat, Fish, Eggs, FruitVegetables, LegumesPulses, NutsSeeds, and specialist categories (InfantFormulaFood, GeneticallyModifiedFood, IrradiatedFood, SpecialMedicalPurpose, etc.).

At build time, `npm run svg-icons-to-png` converts SVGs to 24×24px PNGs using `convert-svg-to-png` and moves them to `static/`.

## Utility Scripts (`src/scripts/`)

| File | Purpose |
|---|---|
| `step-handlers.js` | Attaches expand/collapse listeners to the accordion on page 2 (About Food Labels) |
| `collapse-expand.js` | `modifyAccordionState()` and `addExpandCollapse()` — sets all checkbox inputs in a `.qg-accordion` to checked/unchecked; both functions guard against a missing accordion section or missing expand/collapse controls and return silently rather than throwing |
| `reapply-selected.js` | `ReapplySelected` class — adds `.radio-selected` CSS class to checked radio containers; compensates for Form.io re-rendering stripping applied classes |
| `print.js` | Print-specific script for PDF label view |

`ReapplySelected.reapply(['radio'])` is called from a `MutationObserver` on the `#formio` element in `index.js`, firing on every child-list mutation to ensure radio button styles persist after Form.io re-renders.

## Design Decisions

- **Separate `build:resources` vs `build:squiz`**: Resources and the SPA are independent Parcel entry points. This allows resource views to be deployed to Squiz as standalone HTML pages (for static content sections) without rebuilding the SPA bundle.
- **Conditional Q&A fragments**: Rather than building conditional logic into JavaScript, Form.io's native conditional display rules control which question fragments appear. This keeps the content manageable by non-developers in the Form.io UI.
- **`MutationObserver` for radio CSS fix**: Form.io re-renders the entire form page on any change, removing previously applied CSS classes from radio containers. The observer pattern re-applies them without needing to hook into Form.io's internal rendering lifecycle.
