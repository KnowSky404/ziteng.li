# Header, Theme Toggle, and Language Toggle Design

Date: 2026-04-29

## Goal

Extend the current GitHub-inspired personal site with:

- a more GitHub-like header
- a light/dark theme toggle
- a reserved language toggle entry for future `zh-CN` / `en` support

This iteration should improve the first-screen navigation experience without forcing a full internationalization rewrite.

## Scope

In scope:

- update the visual and structural design of the site header
- implement a working light/dark theme system
- support `system` preference by default, with manual override
- persist manual theme choice in `localStorage`
- add a language toggle button in the header
- add state and content structure that can grow into bilingual support later
- add tests for header controls and theme switching behavior

Out of scope:

- full bilingual translation of all site content
- routing changes
- server-side persistence of user preferences
- implementing locale-specific copy beyond the minimal toggle labels

## UX Design

### Header

The header should move closer to GitHub's navigation style:

- denser horizontal layout
- stronger top-bar identity
- clear separation between navigation links and utility controls

Proposed structure:

- left: site mark and site title
- center/right: section links such as `Overview`, `Projects`, `Services`
- far right: utility controls for theme and language

The language control is intentionally lightweight for now. It should visually communicate future support for Chinese and English without pretending that the whole site is already localized.

### Theme Toggle

Theme behavior:

- initial preference source:
  - use saved user preference if present
  - otherwise follow `prefers-color-scheme`
- supported values:
  - `system`
  - `light`
  - `dark`
- user interaction:
  - the header control cycles or opens a compact choice set for these states

For this iteration, the simplest reliable implementation is a compact button-based selector that clearly exposes all three states instead of a hidden dropdown. This reduces ambiguity and makes testing straightforward.

### Language Toggle

Language behavior for this iteration:

- expose a visible header button or segmented control
- support toggling between `zh-CN` and `en` state
- keep most content unchanged for now
- only reserve the state and data flow needed for future translation rollout

The user-visible language control should not claim full localization. It should behave as a prepared entry point rather than a complete translation feature.

## Architecture

### State Ownership

App-level state should own:

- active theme preference
- resolved theme mode
- active language

This keeps header controls and content rendering aligned without introducing a larger state library.

### Theme Model

Use a small theme model:

- `themePreference`: `system | light | dark`
- `resolvedTheme`: `light | dark`

`resolvedTheme` is derived from:

- saved user preference, if it exists
- current system preference, when `themePreference === system`

The resolved theme should be written to the DOM through a top-level attribute such as `data-theme` on `document.documentElement` or the app root. CSS variables should switch off this attribute.

### Language Model

Use a small language model:

- `language`: `zh-CN | en`

For now, only header-level labels or small control text need to be ready to vary. The existing site content can remain authored in its current language until a future localization pass.

### Content Structure Preparation

Current static content should be adjusted only where necessary to avoid a later rewrite.

Recommended approach:

- keep the existing site content file
- allow selected labels to come from a small UI text map keyed by language
- avoid converting every content block to bilingual objects in this iteration

This preserves momentum while still preparing a clean future migration path.

## Implementation Plan Shape

Expected implementation areas:

1. `App` state and initialization logic
2. header structure and utility controls
3. theme-aware CSS variable system
4. minimal language toggle state wiring
5. tests for controls and theme persistence behavior

## Error Handling and Edge Cases

Theme handling should account for:

- unavailable or blocked `localStorage`
- first render before client preference resolution
- system theme changes while the app is in `system` mode

Language handling should account for:

- defaulting cleanly when no language has been selected
- avoiding partial translation claims in UI labels

In environments where persistence cannot be written, the app should continue functioning with in-memory state.

## Testing Strategy

Add or update tests to cover:

- header navigation and control presence
- theme control rendering
- default theme initialization behavior
- manual theme override persistence
- language toggle presence and state change entry point

Build verification should continue to include:

- test suite
- lint
- production build

## Decision Summary

This design intentionally chooses:

- a more GitHub-like header now
- a complete theme toggle now
- only a prepared language toggle now

That keeps this iteration focused, visually meaningful, and compatible with a later full bilingual rollout.
