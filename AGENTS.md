# Repository Agent Guide

## Project Purpose

This repository contains the personal site for Ziteng Li. Its primary jobs are
to present personal identity, a concise introduction, selected projects, public
online services, and direct contact/profile links.

The site should remain a personal digital presence. Do not turn it into a SaaS
landing page, an admin dashboard, a generic portfolio template, or a dense
resume.

## Repository Layout

- `app/` - React 19 and Vite application.
- `app/src/data/siteContent.js` - primary copy, project, service, and social data.
- `app/src/components/` - section-level UI components.
- `app/src/styles.css` - current global styles and theme tokens.
- `DESIGN.md` - current visual and interaction source of truth.
- `docs/references/openai-design-research.md` - reviewed OpenAI design sources
  and their applicability to this standalone site.
- `docs/superpowers/` - dated product and implementation history.

## Instruction Priority

When instructions conflict, use this order:

1. The user's explicit request for the current task.
2. This `AGENTS.md` for repository workflow and engineering constraints.
3. `DESIGN.md` for UI, visual, responsive, motion, and accessibility decisions.
4. Current application behavior and content contracts.
5. Dated documents under `docs/superpowers/` as historical context.

An older specification must not override the current `DESIGN.md` unless the
user explicitly promotes a newer approved specification.

## Required UI Workflow

Before making a substantial UI change:

1. Read `DESIGN.md` completely.
2. Read `docs/references/openai-design-research.md` when interpreting or
   changing the OpenAI-inspired direction.
3. Inspect the live components, data, styles, tests, and responsive behavior.
4. Identify the concrete problems and state a scoped implementation plan.
5. Implement the complete requested experience rather than stopping at a mockup
   or a list of recommendations.
6. Verify behavior and rendering in a browser at mobile and desktop sizes.

Preserve personal information, project/service meaning, theme behavior,
language behavior, and working links unless the task explicitly changes them.
Do not replace real content with generic placeholder copy.

## Design Contract

Use OpenAI's published UI principles as a reference for restraint, clarity,
semantic tokens, system typography, consistent spacing, accessible components,
and concise interaction. Do not copy ChatGPT, reuse OpenAI identity, or imply
that this site is affiliated with OpenAI.

Apply the complete rules in `DESIGN.md`, including these non-negotiable points:

- The first viewport clearly presents Ziteng Li's name, real portrait, role,
  and short introduction, while leaving a hint of the next section visible.
- Use neutral surfaces and semantic color variables. Reserve color for
  meaningful actions, status, identity, and real project imagery.
- Do not add decorative gradients, glow effects, background blobs, patterned
  surfaces, or ornamental animation.
- Use system typography, semibold headings, readable line heights, and zero
  letter spacing. Do not scale font sizes continuously with viewport width.
- Keep page sections unframed. Cards are for repeated projects and services
  only; do not nest cards.
- Use 8px card and control radii by default. Use pills only for genuine badges,
  statuses, or compact selections.
- Show important project and service information instead of hiding it to create
  artificial minimalism.
- Use real portraits, product interfaces, and service imagery when visual
  assets are needed. Avoid generic atmospheric stock imagery.
- Keep motion purposeful, short, and compatible with
  `prefers-reduced-motion`.
- Support light, dark, and system theme behavior without layout shift.
- Make all controls keyboard accessible with visible focus states and useful
  accessible names.
- Meet WCAG AA contrast and support text resizing without clipping or overlap.
- Prevent incoherent overlap, truncated controls, and horizontal page scrolling
  from 320px through wide desktop.

Do not install `@openai/apps-sdk-ui` or Tailwind solely to imitate OpenAI's
appearance. The current implementation uses plain CSS; introduce dependencies
only when they solve a concrete project need and fit the existing stack.

## Engineering Constraints

- Keep the React component structure understandable and data-driven.
- Prefer existing components and patterns before adding abstractions.
- Keep content in `siteContent.js` unless there is a clear reason to introduce
  another content boundary.
- Use semantic HTML and maintain a logical heading hierarchy.
- Keep changes scoped to the requested behavior; avoid unrelated refactors.
- Do not hide important desktop content on mobile. Adapt its presentation.
- Give fixed-format controls stable dimensions so labels, icons, and state
  changes do not shift surrounding layout.
- Use concise comments only where behavior is not self-explanatory.

## Package Manager And Commands

Use Bun for dependency management and project scripts. Run commands from
`app/` unless the command is repository-level.

```bash
bun install
bun run lint
bun run test
bun run build
```

For browser testing, start Vite on an externally reachable listener and verify
the actual socket before sharing the preview URL:

```bash
bun run dev -- --host :: --port <available-port>
ss -lntp
```

Share `http://oc-de-fra-1.knowsky.uk:<port>` rather than a localhost URL. Check
desktop and mobile viewports, both themes, supported languages, console errors,
content overflow, and interaction states.

## Verification Expectations

Match verification effort to risk. A complete UI refactor normally requires:

- `bun run lint`;
- `bun run test`;
- `bun run build`;
- browser checks at representative mobile and desktop viewports;
- light, dark, and system-theme checks;
- English and Simplified Chinese checks where both are present;
- keyboard, focus, overflow, overlap, and console-error checks;
- screenshots or an equivalent recorded visual inspection.

Documentation-only changes do not require application tests, but must be
checked for internal consistency, valid paths, and formatting errors.

## Git And Delivery

- Preserve unrelated user changes in a dirty worktree.
- Group completed work into focused, atomic commits that follow the repository's
  concise imperative commit style.
- Report the commit hash and remaining worktree state after committing.
- Do not push, open a pull request, deploy, or perform other remote mutations
  unless the user explicitly requests that action.
