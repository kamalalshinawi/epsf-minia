# Contributing

## Branches

Create branches from the latest `main` branch. Use a short, lowercase, hyphenated description:

- `feature/<short-description>` for new features
- `fix/<short-description>` for bug fixes
- `chore/<short-description>` for maintenance tasks such as dependencies or configuration
- `docs/<short-description>` for documentation-only changes
- `refactor/<short-description>` for code restructuring with no behavior change

## Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages must follow:

```
<type>(<optional scope>): <short summary>
```

Allowed types are `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, and `build`.

Examples:

- `feat(navbar): add mobile menu toggle`
- `fix(contact-form): correct email validation regex`
- `chore(deps): bump react-router-dom to v6.24`

Husky validates every commit message and runs linting plus TypeScript type-checking before each commit.

## Change workflow

1. `git checkout main && git pull`
2. `git checkout -b feature/<name>` (or `fix/`, `chore/`, `docs/`, `refactor/`)
3. Make the change, then `git add .`
4. `git commit -m "feat(scope): description"` (Husky validates it)
5. `git push -u origin feature/<name>` (or `fix/`, `chore/`, `docs/`, `refactor/`)
6. Open a Pull Request into `main` for review before merging.
