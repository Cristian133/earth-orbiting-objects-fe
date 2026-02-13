---
name: vitest-testing
description: Guidelines for writing unit tests with Vitest and JSDOM.
---

# Vitest Testing Skill

## Configuration

- **Environment**: Use `jsdom`.
- **Setup**: `src/test-setup.ts` must use `BrowserTestingModule` and `platformBrowserTesting`.

## Writing Tests

- **Describe/It**: Use standard BDD syntax.
- **Mocking**: Use `vi.mock()` for module-level mocks and `vi.fn()` for spies.
- **Angular Testing**:
  - Use `TestBed.configureTestingModule()`.
  - Use `component.fixture.detectChanges()` sparingly in Zoneless mode (Signal updates handle this).

## Patterns

- **HTTP**: Mock the `HttpAdapter` or `HttpClient` to avoid real network calls.
- **Signals**: Test derived state by checking `computed` signals after updating inputs.
