# Personal Site V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a first working version of the personal digital presence site as a Bun-powered React + Vite single-page app.

**Architecture:** Scaffold a Vite React frontend, keep all site content in local data structures, and compose the homepage from focused sections with a shared visual system. Styling stays CSS-first with design tokens and responsive layout rules so the site is easy to tune later.

**Tech Stack:** Bun, Vite, React, CSS, Vitest, Testing Library

---

## File Structure

- Create: `package.json` and Bun/Vite project files for app scripts and dependencies
- Create: `index.html` as Vite entry HTML
- Create: `src/main.jsx` and `src/App.jsx` for React bootstrap and top-level composition
- Create: `src/styles.css` for global tokens, layout, components, and responsive styles
- Create: `src/data/siteContent.js` for hero/about/projects/services/contact content
- Create: `src/components/` files for section and card components
- Create: `src/assets/` only if a local placeholder visual is needed for the hero
- Create: `src/App.test.jsx` and `src/test/setup.js` for behavior coverage
- Create: `vite.config.js` and `vitest.config.js` only if default scaffold is insufficient

### Task 1: Scaffold the frontend baseline

**Files:**
- Create: `package.json`
- Create: `bun.lock` or `bun.lockb`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`

- [ ] **Step 1: Scaffold the Vite React app with Bun**

```bash
bun create vite . --template react
```

- [ ] **Step 2: Install dependencies and verify scripts exist**

Run: `bun install`
Expected: dependencies installed and `package.json` includes `dev`, `build`, and `preview`

- [ ] **Step 3: Normalize scripts for Bun-first local development**

Update `package.json` scripts to:

```json
{
  "scripts": {
    "dev": "bunx --bun vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 4: Run the default build**

Run: `bun run build`
Expected: Vite production build completes successfully

- [ ] **Step 5: Commit scaffold baseline**

```bash
git add .
git commit -m "Scaffold Bun Vite React app"
```

### Task 2: Add test tooling and the first failing UI test

**Files:**
- Modify: `package.json`
- Create: `src/App.test.jsx`
- Create: `src/test/setup.js`
- Modify: `vite.config.js` or create `vitest.config.js` if needed

- [ ] **Step 1: Add test dependencies**

Run:

```bash
bun add -d vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 2: Write the failing homepage structure test**

Create `src/App.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the core homepage sections for the personal site', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: /independent developer/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /selected projects/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /online services/i }),
  ).toBeInTheDocument()
})
```

- [ ] **Step 3: Add test setup**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom'
```

Configure test environment so setup file is loaded and `jsdom` is used.

- [ ] **Step 4: Run the test and verify it fails for the right reason**

Run: `bun run test`
Expected: FAIL because the scaffolded app does not render the required homepage headings

- [ ] **Step 5: Commit the red test baseline**

```bash
git add package.json src/App.test.jsx src/test/setup.js vite.config.js vitest.config.js
git commit -m "Add homepage structure test"
```

### Task 3: Implement the homepage content model and section skeleton

**Files:**
- Create: `src/data/siteContent.js`
- Modify: `src/App.jsx`
- Create: `src/components/HeroSection.jsx`
- Create: `src/components/AboutSection.jsx`
- Create: `src/components/ProjectsSection.jsx`
- Create: `src/components/OnlineServicesSection.jsx`
- Create: `src/components/FooterSection.jsx`
- Create: `src/components/SectionHeading.jsx`
- Create: `src/components/ProjectCard.jsx`
- Create: `src/components/ServiceCard.jsx`

- [ ] **Step 1: Add structured site content**

Create `src/data/siteContent.js` with exported objects/arrays for hero, about blocks, projects, online services, and contact links. Seed it with realistic placeholder content that matches the approved design direction.

- [ ] **Step 2: Replace the scaffolded app with semantic homepage composition**

`src/App.jsx` should:

```jsx
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import OnlineServicesSection from './components/OnlineServicesSection'
import ProjectsSection from './components/ProjectsSection'
import { aboutItems, heroContent, onlineServices, projects, socialLinks } from './data/siteContent'

function App() {
  return (
    <>
      <HeroSection content={heroContent} />
      <main>
        <AboutSection items={aboutItems} />
        <ProjectsSection projects={projects} />
        <OnlineServicesSection services={onlineServices} />
      </main>
      <FooterSection links={socialLinks} />
    </>
  )
}

export default App
```

- [ ] **Step 3: Implement minimal semantic section components**

Each section component should render headings and content with semantic tags so the failing test can pass with minimal styling assumptions.

- [ ] **Step 4: Run tests and verify they pass**

Run: `bun run test`
Expected: PASS for the homepage structure test

- [ ] **Step 5: Commit the semantic homepage**

```bash
git add src/App.jsx src/components src/data/siteContent.js
git commit -m "Build homepage section structure"
```

### Task 4: Add the visual system and responsive layout

**Files:**
- Modify: `src/styles.css`
- Modify: `src/main.jsx`
- Modify: section/card component files as needed

- [ ] **Step 1: Write the failing visual regression-style test**

Extend `src/App.test.jsx` with checks that verify project cards and service cards are rendered from data collections:

```jsx
expect(screen.getAllByTestId('project-card').length).toBeGreaterThan(2)
expect(screen.getAllByTestId('service-card').length).toBeGreaterThan(1)
```

- [ ] **Step 2: Run tests to verify the new expectations fail**

Run: `bun run test`
Expected: FAIL because card test ids are not implemented yet

- [ ] **Step 3: Implement the full styling system**

Add:

- warm neutral CSS variables
- editorial-style typography pairing via web font import or fallbacks
- hero two-column layout with mobile collapse
- card grid layouts for projects and services
- subtle hover, reveal, and focus states
- reduced-motion handling

Ensure `ProjectCard` and `ServiceCard` render `data-testid` values required by the test.

- [ ] **Step 4: Run tests and build verification**

Run:

```bash
bun run test
bun run build
```

Expected: both commands pass

- [ ] **Step 5: Commit the first polished UI**

```bash
git add src/App.test.jsx src/components src/styles.css src/main.jsx
git commit -m "Style personal site homepage"
```

### Task 5: Final content pass and developer ergonomics

**Files:**
- Modify: `src/data/siteContent.js`
- Modify: `README.md` if scaffold created one

- [ ] **Step 1: Refine placeholder copy so each section has consistent tone**

Ensure hero, about, projects, and online services all align with:

- independent developer identity
- warm and trustworthy voice
- no consulting-sales language

- [ ] **Step 2: Add concise project run instructions**

If `README.md` exists, include:

```md
## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```
```

- [ ] **Step 3: Run final verification**

Run:

```bash
bun run test
bun run build
```

Expected: both commands pass cleanly

- [ ] **Step 4: Commit the first usable version**

```bash
git add src/data/siteContent.js README.md
git commit -m "Finalize personal site v1 content"
```

## Self-Review

- Spec coverage: hero, about, project grid, online services card wall, footer, warm visual system, responsive layout, and Bun-based build workflow are all covered by Tasks 1 through 5.
- Placeholder scan: no `TODO` or `TBD` markers remain; each task has concrete files, commands, and expected results.
- Type consistency: `heroContent`, `aboutItems`, `projects`, `onlineServices`, and `socialLinks` are named consistently across data and section composition tasks.
