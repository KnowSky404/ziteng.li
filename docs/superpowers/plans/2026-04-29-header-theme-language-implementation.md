# Header, Theme Toggle, and Language Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the header to feel more like GitHub, add a working system-aware light/dark theme toggle, and reserve a language toggle entry for future `zh-CN` / `en` support.

**Architecture:** Keep preference state in `App`, derive a resolved theme from `system | light | dark`, and apply it through a `data-theme` attribute on the root element. Pass header control props down from `App`, and keep the language toggle intentionally lightweight so the UI is ready for later localization without forcing a full content rewrite now.

**Tech Stack:** React 19, Vite, Vitest, Testing Library, CSS custom properties

---

### Task 1: Add failing tests for header utilities and theme behavior

**Files:**
- Modify: `app/src/App.test.jsx`

- [ ] **Step 1: Write the failing tests**

```jsx
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders header utility controls', () => {
  render(<App />)

  expect(screen.getByRole('group', { name: /theme preference/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /language: english/i })).toBeInTheDocument()
})

test('switches to dark theme when the dark control is pressed', () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: /use dark theme/i }))

  expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bunx vitest run src/App.test.jsx`
Expected: FAIL because the header does not yet expose theme controls, language controls, or `data-theme` updates.

- [ ] **Step 3: Commit**

```bash
git add app/src/App.test.jsx
git commit -m "test: cover header theme controls"
```

### Task 2: Implement app-level theme and language state

**Files:**
- Modify: `app/src/App.jsx`
- Modify: `app/src/main.jsx`

- [ ] **Step 1: Write the minimal app state implementation**

```jsx
const THEME_PREFERENCES = ['system', 'light', 'dark']
const DEFAULT_LANGUAGE = 'en'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [themePreference, setThemePreference] = useState('system')
  const [resolvedTheme, setResolvedTheme] = useState('light')
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    const nextTheme = themePreference === 'system' ? getSystemTheme() : themePreference
    document.documentElement.setAttribute('data-theme', nextTheme)
    setResolvedTheme(nextTheme)
  }, [themePreference])
}
```

- [ ] **Step 2: Add persistence and system sync**

```jsx
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function syncTheme() {
    if (themePreference === 'system') {
      const nextTheme = mediaQuery.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', nextTheme)
      setResolvedTheme(nextTheme)
    }
  }

  syncTheme()
  mediaQuery.addEventListener('change', syncTheme)
  return () => mediaQuery.removeEventListener('change', syncTheme)
}, [themePreference])
```

- [ ] **Step 3: Run test to verify the theme test now reaches the DOM**

Run: `bunx vitest run src/App.test.jsx`
Expected: still FAIL on missing header control markup, but no longer fail because `data-theme` wiring is impossible.

- [ ] **Step 4: Commit**

```bash
git add app/src/App.jsx app/src/main.jsx
git commit -m "feat: add theme and language app state"
```

### Task 3: Update the header UI and theme-aware styling

**Files:**
- Modify: `app/src/App.jsx`
- Modify: `app/src/styles.css`

- [ ] **Step 1: Add GitHub-like utility controls to the header**

```jsx
<div className="site-header__utilities">
  <div aria-label="Theme preference" className="theme-toggle" role="group">
    <button type="button">System</button>
    <button type="button">Light</button>
    <button type="button">Dark</button>
  </div>
  <button
    type="button"
    className="language-toggle"
    aria-label={`Language: ${language === 'en' ? 'English' : '简体中文'}`}
  >
    {language === 'en' ? 'EN' : '中文'}
  </button>
</div>
```

- [ ] **Step 2: Convert color tokens to theme variables**

```css
:root {
  --bg-default: #f6f8fa;
  --text-default: #1f2328;
}

:root[data-theme='dark'] {
  --bg-default: #0d1117;
  --bg-subtle: #161b22;
  --border-default: #30363d;
  --text-default: #e6edf3;
  --text-muted: #8b949e;
  --accent-fg: #58a6ff;
}
```

- [ ] **Step 3: Tighten the header to feel more like GitHub**

```css
.site-header {
  min-height: 64px;
  padding: 0 16px;
  background: var(--header-bg);
}

.site-header__utilities {
  display: flex;
  gap: 12px;
  align-items: center;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bunx vitest run src/App.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/src/App.jsx app/src/styles.css app/src/App.test.jsx
git commit -m "feat: add header theme and language controls"
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
git commit -m "chore: finalize header theme polish"
```
