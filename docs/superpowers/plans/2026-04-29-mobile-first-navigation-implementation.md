# Mobile-First Navigation and Content Hierarchy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the mobile experience so the first screen prioritizes section navigation, compresses profile identity, and feels like a purpose-built phone layout rather than a scaled-down desktop page.

**Architecture:** Keep the current desktop layout intact and use targeted JSX and breakpoint-driven CSS changes for mobile. Add a dedicated mobile navigation strip near the top of the main flow, reorder profile details visually on small screens, and tighten spacing throughout the content sections.

**Tech Stack:** React 19, Vite, Vitest, CSS custom properties, responsive CSS

---

### Task 1: Add a failing test for the mobile navigation entry point

**Files:**
- Modify: `app/src/App.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
test('renders the mobile section navigation entry points', () => {
  render(<App />)

  expect(screen.getByRole('navigation', { name: /mobile sections/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /overview/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bunx vitest run src/App.test.jsx`
Expected: FAIL because the dedicated mobile navigation region does not exist yet.

- [ ] **Step 3: Commit**

```bash
git add app/src/App.test.jsx
git commit -m "test: cover mobile navigation entry"
```

### Task 2: Add a dedicated mobile navigation strip and compact profile ordering

**Files:**
- Modify: `app/src/App.jsx`
- Modify: `app/src/components/HeroSection.jsx`

- [ ] **Step 1: Add a dedicated mobile navigation block**

```jsx
<nav aria-label="Mobile sections" className="mobile-section-nav">
  {navigationItems.map((item) => (
    <a href={item.href} key={`mobile-${item.href}`}>
      {item.label}
    </a>
  ))}
</nav>
```

- [ ] **Step 2: Reorder hero content for mobile-first hierarchy**

```jsx
<div className="hero-mobile-summary">
  <div className="hero-profile__meta">...</div>
  <div className="hero-copy">...</div>
</div>

<div className="hero-actions hero-actions--stacked">...</div>
```

- [ ] **Step 3: Run test to verify it passes structurally**

Run: `bunx vitest run src/App.test.jsx`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/src/App.jsx app/src/components/HeroSection.jsx app/src/App.test.jsx
git commit -m "feat: add mobile-first navigation structure"
```

### Task 3: Rework mobile spacing, hierarchy, and card density

**Files:**
- Modify: `app/src/styles.css`

- [ ] **Step 1: Add mobile-first nav styling**

```css
.mobile-section-nav {
  display: none;
}

@media (max-width: 900px) {
  .mobile-section-nav {
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }
}
```

- [ ] **Step 2: Compress profile summary and move navigation ahead of profile emphasis**

```css
@media (max-width: 900px) {
  .profile-sidebar {
    order: 2;
  }

  .hero-shell {
    gap: 14px;
    padding: 16px;
  }

  .hero-profile__avatar {
    max-width: 88px;
  }
}
```

- [ ] **Step 3: Tighten section and card spacing for phones**

```css
@media (max-width: 900px) {
  .content-column,
  .site-main {
    gap: 16px;
  }

  .section-block,
  .showcase-card,
  .about-card {
    padding: 16px;
  }
}
```

- [ ] **Step 4: Run tests after CSS changes**

Run: `bunx vitest run src/App.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/src/styles.css
git commit -m "feat: optimize mobile layout hierarchy"
```

### Task 4: Final verification

**Files:**
- Verify only

- [ ] **Step 1: Run the full test suite**

Run: `bunx vitest run`
Expected: PASS

- [ ] **Step 2: Run lint**

Run: `bunx eslint .`
Expected: PASS

- [ ] **Step 3: Run a production build**

Run: `bunx vite build`
Expected: PASS

- [ ] **Step 4: Commit if verification-required tweaks were made**

```bash
git add app
git commit -m "chore: finalize mobile-first polish"
```
