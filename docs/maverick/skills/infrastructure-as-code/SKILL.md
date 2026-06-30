---
name: infrastructure-as-code
title: Infrastructure as Code — Project Implementation
topic: infrastructure-as-code
last-verified: 2026-06-30
status: recommended
---

## Stack

No IaC tooling is used. There are no Terraform files, CloudFormation templates, Pulumi programs, Kubernetes manifests, or Docker files. Infrastructure is managed externally by Squiz Matrix (hosting) and Form.io (form backend) — both are third-party managed platforms operated by Queensland Government.

## Configuration

Deployment is handled by the CI `Publish` workflow using the `qld-gov-au/gha-publish-to-git@master` GitHub Action, which pushes the `dist/` build output to a separate target repository. The target repository and credentials are injected as GitHub Actions variables and secrets (`TARGET_REPO`, `GH_TOKEN`, `GH_PAT`). No infrastructure provisioning occurs; the target repo triggers Squiz via a webhook configured outside this codebase.

## Patterns

- No local development environment tooling (no Docker Compose, no devcontainer)
- Environment selection is runtime-based (URL detection in `src/environment.js`) rather than infrastructure-based
- The deploy shell script (`deploy.sh`) referenced in the readme has been superseded by the `gha-publish-to-git` action in the current CI workflow

## File Locations

- `.github/workflows/publish.yml` — deployment workflow using `gha-publish-to-git`
- `src/environment.js` — runtime environment detection (dev/uat/prod) used in place of IaC-managed env configs
