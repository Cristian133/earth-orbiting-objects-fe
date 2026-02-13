---
name: angular-modern
description: Best practices for generating modern Angular components and services.
---

# Angular Modern Skill

## Components

- **Standalone**: Always use standalone components.
- **Change Detection**: Set `changeDetection: ChangeDetectionStrategy.OnPush`.
- **Signals**:
  - Use `input<T>()` and `input.required<T>()`.
  - Use `output<T>()`.
  - Use `signal<T>()` for local state and `computed(() => ...)` for derived state.
- **Lifecycle**: Prefer `effect()` for side effects and `OnInit` only when necessary.
- **Template**: Use native control flow (`@if`, `@for`, `@switch`).
- **Styles**: Use paths relative to the component file.

## Services & Dependency Injection

- **Injections**: Use the `inject()` function at the property level.
- **Singleton**: Default to `{ providedIn: 'root' }`.
- **Logic**: Keep services focused on a single domain responsibility.

## Zoneless Considerations

- Avoid `NgZone` APIs.
- Ensure all DOM updates are triggered via Signal updates or explicit notifications.
