---
name: commit
description: Creates professional git commits following conventional-commits format.
---

# Commit Skill

## Rules

- ALWAYS use `type(scope): description`.
- Scopes: `core`, `features`, `shared`, `ui`, `test`, `config`, `deps`.
- Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `style`.
- Keep the title line under 72 characters.
- Use the body for bullet points if multiple changes are present.

## Scopes Definition

| Scope      | Context                                 |
| ---------- | --------------------------------------- |
| `core`     | Core logic, services, adapters.         |
| `features` | Domain-specific features.               |
| `shared`   | Reusable components, directives, pipes. |
| `ui`       | Design system, global styling.          |
| `test`     | Unit, integration, or E2E tests.        |
| `config`   | Tooling, build config, CI/CD.           |
| `deps`     | Package updates.                        |
