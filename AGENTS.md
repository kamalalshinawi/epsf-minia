# EPSF Minia - Project Context & Repository Structure

This file provides comprehensive information regarding the **EPSF Minia (`org-site`)** codebase structure, git log history, architecture, tech stack, and development workflows. It is automatically loaded by Antigravity on every turn.

---

## 1. Project Overview & Repository Metadata

- **Project Name:** EPSF Minia Official Website (`org-site`)
- **Organization:** Egyptian Pharmaceutical Students' Federation - Minia
- **Repository:** `kamalalshinawi/epsf-minia`
- **Main Branch:** `main`
- **Live Deployment:** GitHub Pages (via GitHub Actions automated workflow)

---

## 2. Technology Stack

| Layer | Technology / Library | Version / Details |
| :--- | :--- | :--- |
| **Frontend Framework** | React | `^19.2.8` |
| **Language** | TypeScript | `~6.0.2` |
| **Build Tool & Dev Server** | Vite | `^8.3.0` |
| **Routing** | React Router DOM | `^7.18.3` |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/vite ^4.3.3` |
| **Linter** | Oxlint | `^1.81.0` |
| **Commit Validation** | Commitlint & Husky | Conventional Commits enforced |
| **Deployment** | GitHub Actions | `.github/workflows/deploy.yml` |

---

## 3. Directory & File Structure

```
org-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── .husky/                     # Pre-commit & commit-msg Git hooks
├── public/                     # Static public assets
│   ├── favicon.svg             # Website favicon icon
│   └── icons.svg               # SVG icons sprite / assets
├── src/                        # Main source code
│   ├── assets/                 # Images & icons assets
│   │   ├── hero.png            # Hero section image
│   │   ├── icons/              # Custom SVG/PNG icons (.gitkeep)
│   │   ├── images/
│   │   │   └── minia-logo.png  # EPSF Minia official logo
│   │   ├── react.svg           # React logo asset
│   │   └── vite.svg            # Vite logo asset
│   ├── components/             # Reusable UI components
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Card.tsx            # Reusable card layout component
│   │   ├── Footer.tsx          # Main website footer component
│   │   ├── Layout.tsx          # Root site layout (Navbar + Outlet + Footer)
│   │   └── Navbar.tsx          # Responsive header navbar component
│   ├── pages/                  # Route page components
│   │   ├── About.tsx           # About EPSF Minia page
│   │   ├── Contact.tsx         # Contact page & form
│   │   ├── Events.tsx          # EPSF Minia events page
│   │   ├── History.tsx         # EPSF Minia history & timeline page
│   │   ├── Home.tsx            # Main landing page (hero, stats, sections)
│   │   └── StudentExchange.tsx # Student Exchange Program (SEP) page
│   ├── types/                  # TypeScript interface & type definitions
│   │   └── index.ts            # Exported interfaces (NavLink, StatItem, EventItem)
│   ├── App.css                 # Application-level styles
│   ├── App.tsx                 # BrowserRouter & Route declarations
│   ├── index.css               # Tailwind CSS main entrypoint & global styles
│   └── main.tsx                # Application root entry point
├── .gitignore                  # Git ignore definitions
├── .oxlintrc.json              # Oxlint linter rules & settings
├── commitlint.config.cjs       # Conventional commits rules configuration
├── CONTRIBUTING.md             # Git branch naming & commit guidelines
├── index.html                  # HTML template entrypoint
├── package.json                # NPM dependencies, scripts, metadata
├── package-lock.json           # Locked dependencies version tree
├── README.md                   # Project setup & template overview
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.app.json           # TypeScript config for application source
├── tsconfig.json               # Root TypeScript configuration
├── tsconfig.node.json          # TypeScript config for Vite/Node tools
└── vite.config.ts              # Vite server & plugin setup
```

---

## 4. Git Log History & Commit Tracking

### Recent Commit Log

| Commit Hash | Branch / Tags | Message |
| :--- | :--- | :--- |
| `c386229` | `HEAD -> main`, `origin/main` | `chore: add GitHub Pages deploy workflow` |
| `0e2c30b` | | `chore: update site name and some formating to our code` |
| `92bac3d` | | `feat(site): finalize home layout and routing` |
| `328307f` | PR #2 | `Merge pull request #2 from kamalalshinawi/feature/home-page` |
| `eda0f10` | `origin/feature/home-page` | `feat(home): build home page sections` |
| `84a019c` | | `Delete CNAME` |
| `7fafc15` | PR #1 | `Merge pull request #1 from kamalalshinawi/feature/layout` |
| `aed21af` | `origin/feature/layout` | `feat(layout): add navbar, footer and theme colors` |
| `3d0cb91` | | `Update CNAME` |
| `2e6b714` | | `Create CNAME` |
| `704e932` | | `chore: initial project setup` |

### Branching & Conventional Commit Guidelines

- **Branch Naming:**
  - `feature/<short-description>` – New feature implementations
  - `fix/<short-description>` – Bug fixes
  - `chore/<short-description>` – Dependencies, config, or maintenance
  - `docs/<short-description>` – Documentation updates
  - `refactor/<short-description>` – Restructuring without functional changes

- **Commit Format:**
  - `<type>(<optional scope>): <short summary>`
  - Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`

---

## 5. Application Architecture & Routing

All routes are nested inside `<Layout />` (containing `Navbar` and `Footer`) in `src/App.tsx`:

| Route Path | Component | Purpose |
| :--- | :--- | :--- |
| `/` (index) | `<Home />` | Landing hero, organization intro, statistics, highlight sections |
| `/events` | `<Events />` | EPSF Minia events showcase |
| `/about` | `<About />` | Mission, vision, structure, and executive board |
| `/history` | `<History />` | Organization timeline and historical achievements |
| `/student-exchange` | `<StudentExchange />` | SEP information for pharmacy students |
| `/contact` | `<Contact />` | Contact info, social links, message form |

---

## 6. Available Scripts & NPM Commands

- `npm run dev` – Launch Vite development server
- `npm run build` – Type-check with `tsc -b` and build for production via Vite
- `npm run lint` – Run fast code linting via `oxlint`
- `npm run type-check` – Perform TypeScript compilation check (`tsc --noEmit`)
- `npm run preview` – Preview production build locally
