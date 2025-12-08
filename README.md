# Object Orbiting Earth 🌍🛰️

A modern Angular application for visualizing and tracking objects orbiting Earth. Built with Angular 21, TypeScript, and following best practices for code quality and maintainability.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Building](#building)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- Real-time visualization of orbiting objects
- Modern Angular 21 with standalone components
- TypeScript strict mode
- Comprehensive linting and formatting
- Automated code quality checks
- Pre-commit hooks for consistent code quality

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v20.x or higher
- **npm**: v11.6.2 or higher
- **Git**: For version control

## 🚀 Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd object-orbiting-earth-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`

The application will automatically reload when you modify source files.

## 💻 Development Workflow

### Available Scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm start`            | Start development server on `http://localhost:4200` |
| `npm run build`        | Build the project for production                    |
| `npm test`             | Run unit tests with Vitest                          |
| `npm run lint`         | Check code for linting errors                       |
| `npm run lint:fix`     | Auto-fix linting errors                             |
| `npm run format`       | Format all source files with Prettier               |
| `npm run format:check` | Check if files are properly formatted               |

### Code Scaffolding

Generate new components, services, or other Angular elements:

```bash
ng generate component component-name
ng generate service service-name
ng generate directive directive-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

## 🎯 Code Quality

This project enforces strict code quality standards using multiple tools:

### ESLint

Linting for TypeScript and Angular templates with strict type checking:

- TypeScript strict mode
- Angular-specific component and template rules
- Template accessibility checks (WCAG compliance)
- Automatic integration with Prettier

**Configuration:** `eslint.config.mjs`

### Prettier

Consistent code formatting across the entire codebase:

- 100 character line width
- Single quotes
- 2 spaces indentation
- Angular HTML parser for templates

**Configuration:** `.prettierrc`

### Commitlint

Enforces [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

**Format:** `type(scope?): subject`

**Allowed types:**

- `feat` - New feature
- `fix` - Bug fix
- `chore` - Maintenance tasks
- `docs` - Documentation changes
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Test changes
- `build` - Build system changes
- `ci` - CI/CD changes
- `perf` - Performance improvements
- `revert` - Revert previous changes

**Examples:**

```bash
git commit -m "feat: add orbit visualization"
git commit -m "fix(api): correct satellite data fetch"
git commit -m "docs: update installation instructions"
```

### Pre-commit Hooks (Husky)

Automatic checks run before each commit:

1. **Prettier** - Formats staged files
2. **ESLint** - Lints and auto-fixes code
3. **Tests** - Runs full test suite
4. **Build** - Verifies production build

> **Note:** Pre-commit hooks ensure code quality but may take 20-30 seconds. To skip hooks in emergencies (not recommended):
>
> ```bash
> git commit --no-verify -m "message"
> ```

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for unit testing.

**Run tests:**

```bash
npm test
```

**Run tests in watch mode:**

```bash
npm test -- --watch
```

Tests are automatically run as part of the pre-commit hook to ensure all changes pass before committing.

## 📦 Building

Build the project for production:

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory. The production build is optimized for performance and speed.

**Build outputs:**

- Optimized bundles
- Minified code
- Tree-shaken dependencies
- Source maps (optional)

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Branch Naming

- `feat/description` - New features
- `fix/description` - Bug fixes
- `chore/description` - Maintenance tasks
- `docs/description` - Documentation updates

### Commit Messages

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This is enforced by commitlint.

### Pull Request Process

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Ensure all tests pass (`npm test`)
5. Ensure linting passes (`npm run lint`)
6. Ensure formatting is correct (`npm run format:check`)
7. Commit using conventional commit format
8. Push to your fork and submit a pull request

### Code Style

- All code must pass ESLint checks
- All code must be formatted with Prettier
- Follow Angular style guide
- Write meaningful tests for new features
- Keep components small and focused
- Use TypeScript features (types, interfaces, etc.)

## 🛠️ Tech Stack

- **Framework:** Angular 21
- **Language:** TypeScript 5.9
- **Build Tool:** Angular Build System
- **Testing:** Vitest 4.0
- **Linting:** ESLint 9 with Angular ESLint
- **Formatting:** Prettier 3
- **Commit Linting:** Commitlint
- **Git Hooks:** Husky 9

## 📝 VS Code Setup

For the best development experience, install the recommended VS Code extensions:

- Angular Language Service
- ESLint
- Prettier - Code formatter

These extensions are listed in `.vscode/extensions.json` and VS Code will prompt you to install them when you open the project.

**Auto-formatting is enabled by default:**

- Format on save
- ESLint auto-fix on save

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vitest Documentation](https://vitest.dev)
- [Conventional Commits](https://www.conventionalcommits.org)

---

**Made with ❤️ using Angular**
