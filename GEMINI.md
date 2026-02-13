You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following modern Angular and TypeScript best practices.

## Available Skills

Use these skills for detailed patterns on-demand:

| Skill            | Description                                                                | URL                                               |
| ---------------- | -------------------------------------------------------------------------- | ------------------------------------------------- |
| `commit`         | Creates professional git commits following conventional-commits format.    | [SKILL.md](.agent/skills/commit/SKILL.md)         |
| `angular-modern` | Best practices for modern Angular (Signals, Zoneless, OnPush, Standalone). | [SKILL.md](.agent/skills/angular-modern/SKILL.md) |
| `vitest-testing` | Guidelines for unit testing with Vitest and JSDOM in Angular projects.     | [SKILL.md](.agent/skills/vitest-testing/SKILL.md) |

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Never use the `any` type; use `unknown` or specific interfaces
- Use template literals instead of string concatenation
- Write self-explanatory code (minimal comments for "what", focused on "why")

## Angular Best Practices

- **Architecture**: Always use standalone components and functional APIs.
- **Zoneless**: Ensure compatibility by avoiding `NgZone` and relying on Signals.
- **Change Detection**: Always use `ChangeDetectionStrategy.OnPush`.
- **State Management**: Use Signals for all local and derived state (`signal`, `computed`).
- **Data Flow**: Use `input()` and `output()` functions.
- **Dependency Injection**: Use the `inject()` function.
- **Templates**: Use native control flow (`@if`, `@for`, `@switch`).

## Testing Best Practices (Vitest)

- Use Vitest and JSDOM for fast, isolated unit tests.
- Prefer `test-setup.ts` using `BrowserTestingModule` and `platformBrowserTesting`.
- Mock external dependencies and services using Vitest's mocking utilities.
- Ensure high coverage for core logic and state transitions.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums (focus, contrast, ARIA).
