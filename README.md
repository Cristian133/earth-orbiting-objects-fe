# Object Orbiting Earth 🌍🛰️

A modern Angular application for visualizing and tracking objects orbiting Earth. Built with Angular 21, TypeScript, and following best practices for code quality, testing, documentation, and performance.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Project Structure](#project-structure)
- [Code Quality Tools](#code-quality-tools)
- [Testing](#testing)
- [Documentation](#documentation)
- [Performance \u0026 PWA](#performance--pwa)
- [Contributing](#contributing)

## ✨ Features

- **Modern Angular 21** with standalone components
- **TypeScript Strict Mode** for type safety
- **Path Aliases** for clean imports (`@app/`, `@core/`, `@shared/`)
- **Multi-Environment** support (dev, staging, production)
- **Comprehensive Testing** (Unit + E2E)
- **Automated Documentation** with Compodoc
- **PWA** with offline support
- **Performance Monitoring** with Lighthouse CI
- **Pre-commit Hooks** ensuring code quality

## 🔧 Prerequisites

- **Node.js**: v20.x or higher
- **npm**: v11.6.2 or higher
- **Git**: For version control

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd object-orbiting-earth-frontend

# Install dependencies
npm install

# Start development server
npm start
```

Open `http://localhost:4200/` in your browser.

## 💻 Development Commands

### Core Development

| Command                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `npm start`             | Development server (port 4200)                 |
| `npm run start:staging` | Development server with staging config         |
| `npm run build`         | Production build                               |
| `npm run build:staging` | Staging build                                  |
| `npm test`              | Run unit tests                                 |
| `npm run test:coverage` | Run tests with coverage report (80% threshold) |

### Code Quality

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run lint`         | Check code with ESLint    |
| `npm run lint:fix`     | Auto-fix ESLint issues    |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check code formatting     |

### Documentation

| Command                 | Description                        |
| ----------------------- | ---------------------------------- |
| `npm run docs:generate` | Generate documentation             |
| `npm run docs:serve`    | Serve documentation locally        |
| `npm run docs:build`    | Build documentation for deployment |

### E2E Testing

| Command              | Description                 |
| -------------------- | --------------------------- |
| `npm run e2e`        | Run E2E tests (headless)    |
| `npm run e2e:headed` | Run E2E tests (headed mode) |
| `npm run e2e:debug`  | Debug E2E tests             |
| `npm run e2e:ui`     | Open Playwright UI          |

### Performance \u0026 Security

| Command                  | Description                        |
| ------------------------ | ---------------------------------- |
| `npm run lighthouse`     | Run Lighthouse performance audit   |
| `npm run security:audit` | Check for security vulnerabilities |
| `npm run security:check` | Security audit with moderate level |

### Component Development

| Command                                        | Description     |
| ---------------------------------------------- | --------------- |
| `ng run object-orbiting-earth:storybook`       | Start Storybook |
| `ng run object-orbiting-earth:build-storybook` | Build Storybook |

## 📁 Project Structure

```
src/
├── app/
│   ├── core/          # Core services, guards, interceptors
│   ├── shared/        # Shared components, pipes, directives
│   ├── features/      # Feature modules
│   └── app.ts         # Main app component
├── environments/      # Environment configurations
│   ├── environment.ts           # Development
│   ├── environment.staging.ts   # Staging
│   └── environment.prod.ts      # Production
└── assets/           # Static assets
```

### Path Aliases

Use clean imports with configured path aliases:

```typescript
// ❌ Bad
import { Service } from '../../../core/services/service';

// ✅ Good
import { Service } from '@core/services/service';
```

Available aliases:

- `@app/*` → `src/app/*`
- `@core/*` `src/app/core/*`
- `@shared/*` → `src/app/shared/*`
- `@features/*` → `src/app/features/*`
- `@environments/*` → `src/environments/*`

## 🎯 Code Quality Tools

### ESLint

- TypeScript strict type checking
- Angular-specific rules
- Template accessibility checks (WCAG)
- Auto-integrated with Prettier

### Prettier

- 100 character line width
- Single quotes, 2-space indentation
- Angular HTML parser

### Commitlint

Enforces [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add orbit visualization"
git commit -m "fix(api): correct satellite data"
git commit -m "docs: update README"
```

**Types**: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `perf`, `revert`

### Pre-commit Hooks

Automatic checks before each commit:

1. Format with Prettier (staged files only)
2. Lint with ESLint
3. Run unit tests (all)
4. Production build validation

> **Tip**: Use `git commit --no-verify` to skip hooks (use sparingly)

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm test                # Run tests
npm run test:coverage   # With coverage report
npm run test:watch      # Watch mode
```

**Coverage Thresholds**: 80% lines, 75% branches, 80% functions

### E2E Tests (Playwright)

```bash
npm run e2e            # Run all E2E tests
npm run e2e:headed     # See browser
npm run e2e:debug      # Debug mode
npm run e2e:ui         # Interactive UI
```

**Browsers**: Chrome, Firefox, Safari (WebKit)

## 📚 Documentation

### Compodoc

Auto-generated documentation from code comments:

```bash
npm run docs:generate  # Generate docs
npm run docs:serve     # View at http://localhost:8080
```

### Storybook

Component development environment:

```bash
ng run object-orbiting-earth:storybook
# Opens at http://localhost:6006
```

## ⚡ Performance \u0026 PWA

### Progressive Web App

- **Offline Support**: Service worker caching
- **Installable**: Add to home screen
- **Fast Loading**: App shell architecture

Manifest: `src/manifest.webmanifest`  
Service Worker Config: `ngsw-config.json`

### Lighthouse CI

Performance budgets enforced:

- **Performance**: 90%+
- **Accessibility**: 90%+
- **FCP**: < 2s
- **LCP**: < 2.5s
- **CLS**: < 0.1

```bash
npm run lighthouse  # Run performance audit
```

## 🤝 Contributing

### Branch Naming

- `feat/description` - New features
- `fix/description` - Bug fixes
- `chore/description` - Maintenance
- `docs/description` - Documentation

### Commit Messages

Follow Conventional Commits (enforced by commitlint)

### Pull Request Process

1. Fork and create feature branch
2. Make changes
3. Ensure all tests pass: `npm test`
4. Ensure linting passes: `npm run lint`
5. Ensure formatting is correct: `npm run format:check`
6. Commit with conventional format
7. Push and create pull request

### Code Standards

- TypeScript strict mode
- ESLint + Prettier compliance
- 80% test coverage minimum
- Accessibility (WCAG AA)
- Performance budgets met

## 🛠️ Tech Stack

**Core**:

- Angular 21
- TypeScript 5.9
- RxJS 7.8

**Development**:

- ESLint 9 + Angular ESLint
- Prettier 3
- Husky 9 + lint-staged

**Testing**:

- Vitest 4 (unit tests)
- Playwright (E2E tests)

**Documentation**:

- Compodoc
- Storybook 10

**Quality \u0026 Performance**:

- Lighthouse CI
- PWA (Angular Service Worker)
- Commitlint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [Conventional Commits](https://www.conventionalcommits.org)

---

**Made with ❤️ using Angular**
