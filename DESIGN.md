# ziteng.li Design System

Status: UI refactor baseline
Last reviewed: 2026-07-23

## Purpose

This site introduces Ziteng Li, selected projects, and public online services.
It should feel calm, direct, useful, and personal. The design takes inspiration
from OpenAI's published UI guidance without copying ChatGPT or presenting this
site as an OpenAI product.

The source review behind this document is recorded in
[`docs/references/openai-design-research.md`](docs/references/openai-design-research.md).

For the UI refactor, this file is the current visual source of truth. Dated
specifications under `docs/superpowers/` remain useful product history, but this
file takes precedence where an older visual direction conflicts with it unless
a newer approved specification explicitly replaces this baseline.

## Source Interpretation

OpenAI does not publish a general-purpose `DESIGN.md` for ordinary websites.
The current official material is primarily for apps embedded in ChatGPT and for
the `@openai/apps-sdk-ui` package.

For this standalone personal site:

- Adopt the reusable foundations: restraint, clear hierarchy, neutral system
  colors, system typography, consistent spacing, accessibility, mobile-first
  layout, and concise interaction.
- Adapt component and token ideas to the site's existing React and plain-CSS
  stack.
- Do not adopt ChatGPT-only display modes, composer behavior, tool-call
  patterns, app submission rules, or restrictions that assume an embedded
  widget.
- Do not use OpenAI logos, wordmarks, or product identity. "OpenAI-inspired"
  describes the interaction and visual principles only.

## Product Principles

1. **Identity first.** The first viewport must make the person's name, face,
   role, and current focus immediately clear.
2. **Content before decoration.** Every visible element should introduce the
   person, explain work, expose a service, or enable contact.
3. **One job per section.** About, projects, services, and contact should each
   have a distinct purpose and hierarchy.
4. **Calm, not empty.** Use whitespace to organize information, but keep enough
   real content visible that the page remains useful and scannable.
5. **Progressive detail.** Show the decision-making information first; reveal
   secondary metadata without hiding important facts.
6. **Predictable interaction.** Links look like links, controls communicate
   state, and motion confirms change rather than decorating the page.

## Information Architecture

The homepage remains a single, continuous experience:

1. **Header** - name or personal mark, primary section navigation, language,
   and theme controls.
2. **Hero** - portrait, `Ziteng Li` as the H1, role, short positioning statement,
   and a restrained set of primary links.
3. **About** - a concise introduction and a small number of meaningful facts.
4. **Selected projects** - work worth explaining, ordered by relevance rather
   than volume.
5. **Online services** - public tools and sites that visitors can use now,
   including clear availability or status where useful.
6. **Contact/footer** - direct contact and profile links without a conversion
   funnel.

On common desktop and mobile viewports, the hero must leave a visible hint of
the next section so the page does not read as a standalone poster.

## Visual Direction

### Color

Use neutral surfaces for structure and reserve color for meaning, identity,
imagery, and actions. Do not use decorative gradients, patterned backgrounds,
or a single accent hue across every surface.

Proposed semantic tokens for the refactor:

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--color-canvas` | `#ffffff` | `#0d0d0d` | Page background |
| `--color-surface` | `#f9f9f9` | `#181818` | Secondary surface |
| `--color-surface-strong` | `#ededed` | `#212121` | Selected or emphasized surface |
| `--color-text` | `#0d0d0d` | `#f9f9f9` | Primary text |
| `--color-text-muted` | `#5d5d5d` | `#b9b9b9` | Supporting text |
| `--color-border` | `rgba(13, 13, 13, 0.12)` | `rgba(255, 255, 255, 0.12)` | Dividers and outlines |
| `--color-focus` | `#0d0d0d` | `#ffffff` | Focus ring |
| `--color-success` | `#008635` | `#40c977` | Live/healthy state only |
| `--color-danger` | `#ba2623` | `#ff6764` | Error/unavailable state only |

Primary buttons should use high-contrast neutral fills. Project artwork,
screenshots, and service marks may introduce broader color without recoloring
the surrounding interface.

All text/background pairs must meet WCAG AA contrast. Muted text is never a
substitute for disabled or hidden content.

### Typography

Use the platform system stack for clarity and reliable multilingual rendering:

```css
font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Noto Sans", Helvetica, Arial, sans-serif;
```

Use a small, deliberate scale rather than many near-identical sizes:

| Role | Mobile | Desktop | Weight |
| --- | --- | --- | --- |
| Hero title | `36px / 42px` | `48px / 48px` | 600 |
| Section title | `24px / 28px` | `32px / 38px` | 600 |
| Card title | `18px / 26px` | `20px / 26px` | 600 |
| Lead/body | `18px / 29px` | `18px / 29px` | 400 |
| Body | `16px / 24px` | `16px / 24px` | 400 |
| Metadata | `14px / 20px` | `14px / 20px` | 400 or 500 |

- Letter spacing is `0` for all interface text.
- Semibold (`600`) is the default emphasis weight.
- Keep prose near `60-70ch`; do not stretch paragraphs across the container.
- Do not scale type continuously with viewport width. Change sizes only at
  explicit breakpoints.

### Spacing And Layout

Use a 4px base with the practical scale `4, 8, 12, 16, 24, 32, 48, 64, 96`.
Favor consistent section rhythm over one-off margins.

- Content width: no more than `1200px`.
- Page gutter: `16px` on mobile, `24px` from tablet upward, and `32px` on wide
  desktop where space allows.
- Section spacing: `64px` mobile and `96px` desktop by default.
- Start mobile-first with a single reading column.
- Use the official Apps SDK UI breakpoint vocabulary when useful: `380`, `576`,
  `768`, `1024`, `1280`, and `1536px`.
- Switch layout only when the content needs it, not merely because a device
  label has been reached.

### Shape And Elevation

- Use `8px` corner radii for cards and controls.
- Use circular shapes only for avatars, status dots, and icon controls that are
  genuinely circular.
- Prefer hairline borders and surface contrast over shadows.
- Reserve shadows for menus, dialogs, and other temporary elevated layers.
- Do not place cards inside cards or style whole page sections as floating
  cards.

### Imagery And Icons

- The hero portrait must show the actual person clearly and remain a strong
  first-viewport signal.
- Project and service images should show the real product or interface rather
  than generic atmospheric artwork.
- Use a single outlined, monochrome icon family. Icons inherit the current text
  color unless semantic status requires otherwise.
- Provide meaningful alternative text for content images. Decorative images
  use empty alt text.

## Component Contracts

### Header

The header is an unframed navigation layer with a subtle divider or surface
change. Desktop navigation remains visible; mobile navigation uses one familiar
menu icon and a labeled accessible disclosure. Theme and language are controls,
not navigation links.

### Buttons And Links

- One primary action per local context.
- Use icon-only buttons for familiar utilities and provide an accessible name
  plus tooltip where meaning may be unclear.
- Use text or icon-plus-text for commands whose meaning is not obvious from a
  symbol.
- External links must remain identifiable and must not masquerade as buttons
  unless they are the primary card action.
- Minimum touch target: `44px` square where practical.

### Project And Service Items

Cards are reserved for repeated projects and services. Each card has:

- a clear title;
- one concise description;
- no more than two lines of secondary metadata in the summary state;
- one clear destination or action;
- optional technology, year, or live-status metadata only when it helps a
  visitor decide what to open.

Project and service cards may share structure, but services must read as public
things visitors can access, not consulting packages.

### Theme And Language

Theme supports light, dark, and system preference. Persist explicit user choice
and update when the system preference changes if "system" is selected. Language
selection preserves the current section and does not cause layout shifts.

## Motion

- Default state transitions use `150ms ease`.
- Use motion for hover, focus, disclosure, and route/section continuity.
- Avoid ambient movement, parallax, and repeated entrance animations.
- Honor `prefers-reduced-motion`; essential state changes must remain clear
  without animation.
- Hover effects must not be required to discover content or actions.

## Accessibility And Quality Bar

- Use semantic landmarks and a logical heading hierarchy.
- All controls are reachable and operable by keyboard.
- Focus indicators are visible on every interactive element.
- Text resizing to 200% must not clip, overlap, or hide controls.
- Layout must work from `320px` through wide desktop without horizontal page
  scrolling.
- Dynamic content must not resize fixed-format controls or cause avoidable
  layout shift.
- Test light/dark themes and both supported languages at mobile and desktop
  widths.

## Non-Goals

- Recreating the ChatGPT conversation interface.
- Installing Apps SDK UI solely to copy its appearance.
- Using OpenAI branding or implying an affiliation with OpenAI.
- Turning the homepage into a SaaS landing page, dashboard, or dense resume.
- Hiding important project or service information to achieve visual minimalism.

## Implementation Note

This document defines the target direction; it does not claim the current UI
already complies. During the refactor, introduce semantic CSS variables first,
then update structure and components, and finally validate responsive behavior,
accessibility, and visual consistency in a browser.
