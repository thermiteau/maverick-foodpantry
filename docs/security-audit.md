# Security Audit

**Generated:** 2026-06-30T00:00:00Z
**Stack detected:** Node.js (browser SPA) — Parcel 1.x bundler, lit-html 1.x, Form.io (hosted backend), Squiz Matrix (hosting)

## Summary

No committed secrets or auth vulnerabilities were found. The primary risks are unencrypted PII in `localStorage`, absent dependency vulnerability scanning in CI, and a `postinstall.js` script that mutates `node_modules` package files in a way that can obscure dependency security state.

| Category | Status |
| --- | --- |
| Secret exposure | PASS |
| Dependency hygiene | WARN |
| Authentication / authorisation | N/A |
| Input validation / output encoding | WARN |
| Transport, headers, CORS | N/A |
| Data at rest | WARN |
| Logging, monitoring, rate limiting | N/A |
| Container / infrastructure | N/A |

---

## Details

### Secret exposure — PASS

No committed credentials, tokens, or private keys detected in tracked source files. All secrets are injected via GitHub Actions secrets (`GH_TOKEN`, `GH_PAT`) and are not present in the repository. No `.env` files exist in the repository. API endpoints in `src/environment.js` are public Form.io URLs without embedded credentials.

---

### Dependency hygiene — WARN

**Evidence:**

- `package-lock.json` is present — lock file exists. (`package-lock.json`)
- `npm install` (not `npm ci`) is used in both CI workflows — this allows the lock file to be silently updated in CI, meaning the version that ships may differ from what was reviewed. (`.github/workflows/node.js.yml:21`, `publish.yml:21`)
- No `npm audit` step in either CI workflow.
- No Dependabot configuration (`.github/dependabot.yml` absent).
- No Renovate configuration (`renovate.json` absent).
- `postinstall.js` overwrites `package.json` and creates `.browserslistrc` in every package under `node_modules/` (and nested `node_modules/`). This mutates installed package manifests, making it harder to verify the installed dependency state matches what a security scanner would expect. (`postinstall.js:1-33`)
- Several devDependencies are pinned to older major versions: `parcel-bundler@^1.12.4`, `karma@^6.1.1`, `husky@^5.1.2`.

**Recommendation:** Add `npm audit --audit-level=high` as a CI step before build. Add a Dependabot configuration for weekly npm updates. Replace `npm install` with `npm ci` in both CI workflows to enforce lock file integrity. Review whether `postinstall.js` can be eliminated or scoped more narrowly — it currently modifies every package under `node_modules`, which interferes with standard dependency auditing tooling.

---

### Authentication / authorisation — N/A

This is a browser-only SPA with no authentication or authorisation logic. User identity is not verified by this codebase. Form.io handles submission storage; Squiz Matrix controls page access. No auth primitives, session management, or role-based access controls exist in this repository.

---

### Input validation / output encoding — WARN

**Evidence:**

1. **`unsafeHTML` directive** (`src/components/button-group.js:107`): The `unsafeHTML` lit-html directive is used to render the close button icon (`configuration.confirmation.closeXButton`). The value is a static HTML string from application config (`'<i class="fa fa-times"></i>'`) — not sourced from user input. Risk is low but the pattern is worth noting: if config were ever sourced from an external store, this becomes an XSS vector.

2. **`document.body.innerHTML` assignment** (`src/scripts/print.js:9`): The print function sets `document.body.innerHTML` to the `innerHTML` of a Form.io-rendered DOM element. The source is Form.io's own rendered output rather than raw user input, but this pattern could amplify any stored XSS present in Form.io-rendered content. The entire page body is replaced, discarding security constraints of the original DOM.

3. **`location.hash` used as element ID** (`src/components/help-guide.js:173`): `location.hash.replace('#', '')` is passed directly to `_openAccordionItem()` which calls `document.getElementById()`. `getElementById` is not vulnerable to XSS injection, but the unsanitised hash is also passed to `element.scrollIntoView()`. This is low risk in current usage.

4. **`sectionNav.innerHTML` assignment** (`src/index.js:62`): Sets `innerHTML` to a hardcoded string. Not user-influenced; low risk.

5. **Form input validation**: All form field input is validated by Form.io's built-in validation engine plus custom JS snippets in `src/validations/`. Validation runs server-side within Form.io's context; the SPA has no secondary sanitisation layer.

**Recommendation:** For the print functionality (`print.js`), consider scoping the replacement to a print-specific container element rather than `document.body.innerHTML`. For the `unsafeHTML` usage, add a code comment confirming the config source is static so future maintainers understand the risk boundary.

---

### Transport, headers, CORS — N/A

This project has no server-side runtime. HTTP security headers (CSP, HSTS, X-Frame-Options, etc.) are the responsibility of Squiz Matrix's hosting configuration. CORS is managed by Form.io's API platform. No configuration for these exists in this codebase.

---

### Data at rest — WARN

**Evidence:**

- Business name and address (`src/validations/business-details/`), email address (`src/validations/your-label/`), food product details, and cooking/storage information are all persisted to `localStorage` under the key `"Label Buster"` during wizard completion.
- Data is stored in plain JSON (double-serialised but not encrypted). Any other script running on the same origin can read all stored form data.
- Terms acceptance is stored separately under `lbtermsAndConditions`.
- No TTL or expiry is set on any `localStorage` key — data persists indefinitely after form completion.
- `_clearStorage()` calls `this.config.terms.termsStorageType.clear()` followed by `this.config.storage.type.clear()`. Both default to `localStorage`, so cancelling the form clears all `localStorage` for the origin — not just Label Buster's own keys. (`src/components/formio-wrapper.js:345`)

**Recommendation:** Evaluate whether full business name, address, and email need to persist in `localStorage` between sessions — or whether session storage (`sessionStorage`) would be sufficient, since data only needs to survive page refreshes, not browser restarts. Replace `localStorage.clear()` with targeted key removal (`removeItem`) to avoid clearing unrelated data for the domain. Add a storage expiry mechanism (e.g., store a timestamp and clear stale data on load).

---

### Logging, monitoring, rate limiting — N/A

Browser SPA with no server runtime. No authentication events to log. Rate limiting is the responsibility of Form.io's API platform. GTM interaction tracking is configured in `src/index.js` but is a product analytics tool, not a security monitoring channel.

---

### Container / infrastructure — N/A

No Docker, Kubernetes manifests, or IaC files exist in this repository. Deployment is via `qld-gov-au/gha-publish-to-git` GitHub Action pushing `dist/` to a target repository. Infrastructure is managed externally by Squiz Matrix and Form.io.

---

## Recommendations (prioritised)

1. **Medium** — Add `npm ci` to CI workflows and `npm audit --audit-level=high` before the build step. Current use of `npm install` allows lock file drift; absent audit step means known CVEs in devDependencies go undetected. Files: `.github/workflows/node.js.yml`, `publish.yml`.

2. **Medium** — Scope `localStorage` clearing in `_clearStorage()` to remove only Label Buster's own keys by name rather than calling `localStorage.clear()`. Current implementation clears all origin-scoped storage, which could affect other applications on the same domain. File: `src/components/formio-wrapper.js`.

3. **Medium** — Evaluate replacing `localStorage` with `sessionStorage` for form progress data, or add a timestamp-based expiry so PII (email, business address) does not persist indefinitely in the browser. File: `src/components/formio-wrapper.js`, `src/config.js`.

4. **Low** — Replace `document.body.innerHTML = contentSource.innerHTML` in the print function with a scoped clone approach to avoid wholesale DOM replacement and reduce XSS amplification risk. File: `src/scripts/print.js`.

5. **Low** — Add a Dependabot configuration for weekly npm dependency updates to ensure patched versions of dependencies are tracked. File: `.github/dependabot.yml` (create).

6. **Low** — Review and document `postinstall.js`. The script mutates every `package.json` under `node_modules/`, which interferes with dependency auditing tooling. If still needed for IE 11 browserlist compatibility, scope it narrowly and add a comment explaining the intent. File: `postinstall.js`.
