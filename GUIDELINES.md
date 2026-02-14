# Project Guidelines

This document outlines the best practices and conventions to be followed in this project. All contributors (including AI agents) must adhere to these rules.

---

## 🅰️ Angular Best Practices

Follow modern Angular (v19+) patterns to ensure better performance and maintainability.

### 📶 Signals for Reactive State

- **Single Source of Truth**: Use minimal writable signals for independent state.
- **Computed Signals**: Use `computed()` for derived state. They must be **pure functions**.
- **Effects**: Use `effect()` for side effects only (logging, custom DOM manipulation). Keep them small and untrack the rest of the logic if necessary.
- **Conversion**: Use `toSignal()` to convert Observables to Signals when needed in a reactive context.

### ⚓ Dependency Injection with `inject()`

- **Prefer `inject()`**: Use the `inject()` function instead of constructor-based injection for better readability and type inference.
- **Singleton Services**: Use `providedIn: 'root'` for globally available services.
- **No Templates**: Never inject services directly into HTML templates.

### 🧱 Standalone Components

- **Architecture**: All new components, directives, and pipes must be `standalone: true`.
- **Imports**: Explicitly import necessary dependencies (directives, components) in the `imports` array of the `@Component` decorator.
- **Feature-Based Structure**: Organize code by feature (e.g., `src/app/features/map/`) rather than by type.

---

## 🌿 Git Branch Naming Convention

Format: `<type>/<description-or-ticket>`

| Prefix      | Description                                           | Example                   |
| :---------- | :---------------------------------------------------- | :------------------------ |
| `feat/`     | New features or functionality                         | `feat/satellite-tracker`  |
| `fix/`      | Bug fixes                                             | `fix/map-initialization`  |
| `refactor/` | Code changes that neither fix a bug nor add a feature | `refactor/api-adapter`    |
| `docs/`     | Documentation changes                                 | `docs/setup-guide`        |
| `test/`     | Adding or correcting tests                            | `test/satellite-service`  |
| `chore/`    | Maintenance tasks, configuration, dependencies        | `chore/update-angular`    |
| `perf/`     | Performance optimizations                             | `perf/optimize-rendering` |

**Rules:**

- Use lowercase only.
- Separate words with hyphens (`-`).
- Keep it concise (2-5 words).

---

## 💬 Commit Message Convention (Commitlint)

All commits must follow the **Conventional Commits** specification:
`<type>(<scope>): <description>`

**Allowed Types:**

- `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`, `build`, `ci`, `perf`, `revert`.

**Rules:**

- **Description**: Use imperative, present tense (e.g., "add service" instead of "added service").
- **Case**: Description must not start with an uppercase letter.
- **Termination**: Description must not end with a period.
- **Scope**: Optional, but recommended for specific features/modules.

_Example:_ `feat(map): implement real-time ISS tracking`

---

## 📝 Pull Request Descriptions

When creating a PR description, use the following rules:

- **Language**: English only.
- **No Emojis**: Do not use emojis in the title or body.
- **Standard Template**:
  - **Description**: Concise summary of what changed.
  - **Type of Change**: List the type (Bug fix, Feat, etc.).
  - **Testing**: How it was verified.
  - **Checklist**: Standard quality checks.

---

## 🎨 Design and UI Best Practices

- **Vanilla CSS**: Use Vanilla CSS (SCSS) for styling. Avoid TailwindCSS unless explicitly requested.
- **Rich Aesthetics**: Prioritize modern, premium designs with smooth transitions and subtle animations.
- **Accessibility**: Ensure high contrast and semantic HTML.
- **SEO**: Use appropriate title tags, meta descriptions, and heading hierarchy.

---

## 🚀 Performance and Tools

- **Zoneless**: This project is configured for **Zoneless** mode. Do not introduce dependencies on `zone.js`.
- **Testing**: Use **Vitest** for unit tests and **Playwright** for E2E tests.
- **Lighthouse**: Maintain high scores (90+) in performance, accessibility, and SEO.
