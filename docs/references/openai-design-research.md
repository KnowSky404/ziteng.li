# OpenAI Design Research

Reviewed: 2026-07-23

## Result

No general-purpose `DESIGN.md` was found in OpenAI's public GitHub organization
during this review. OpenAI's current, relevant public material is split across:

- official ChatGPT Apps UX principles;
- official ChatGPT Apps UI guidelines;
- the open-source Apps SDK UI design system;
- an official Figma component library linked from the UI guidelines.

These sources target experiences embedded inside ChatGPT. They are useful as a
reference for a standalone personal site, but they are not a complete website
design specification and should not be copied without interpretation.

## Primary Sources

1. [UI guidelines for ChatGPT apps](https://developers.openai.com/apps-sdk/concepts/ui-guidelines)
   - Covers visual hierarchy, color, typography, spacing, imagery,
     accessibility, and display modes.
   - The reusable guidance emphasizes system colors, restrained brand accents,
     system typography, consistent spacing, outlined monochrome icons, and WCAG
     AA contrast.
2. [UX principles for ChatGPT apps](https://developers.openai.com/apps-sdk/concepts/ux-principles)
   - Emphasizes focused jobs, useful rather than ornamental UI, concise
     responses, predictable actions, and avoiding full-product duplication.
3. [OpenAI Apps SDK UI](https://github.com/openai/apps-sdk-ui)
   - Official MIT-licensed React design system with CSS-variable tokens,
     Tailwind 4 integration, accessible Radix-based components, responsive
     utilities, and dark-mode support.
   - Reviewed package version: `0.2.2`.
   - Reviewed `main` commit:
     [`0f00143c7a639906f1621fe58e1b6be7b5bea46d`](https://github.com/openai/apps-sdk-ui/commit/0f00143c7a639906f1621fe58e1b6be7b5bea46d).
4. [Apps SDK UI Storybook](https://openai.github.io/apps-sdk-ui/)
   - Live component and foundation reference.
5. [Official Figma component library](https://www.figma.com/community/file/1625636989296445101)
   - Linked directly from OpenAI's UI guidelines as the visual design starting
     point for ChatGPT apps.

The [OpenAI brand page](https://openai.com/brand/) is an adjacent source for
trademark and asset usage, not the technical UI foundation used here. The site
must not reuse OpenAI identity or imply affiliation.

## Reusable Findings

### Visual system

- Neutral gray surfaces carry most of the interface.
- Accent color is restrained and attached to actions or meaningful status.
- Decorative gradients and patterns are discouraged.
- Borders, text, surfaces, and states use semantic tokens rather than arbitrary
  one-off values.
- Light and dark themes are first-class, not separate component designs.

### Typography

- The official UI guidance prefers platform-native system fonts.
- Apps SDK UI exposes a compact type scale with semibold headings, regular body
  text, readable line heights, and `0em` tracking.
- Representative values include `48/48`, `36/42`, `32/38`, `24/28`, `20/26`,
  `18/26` for headings and `18/29`, `16/24`, `14/20`, `12/18` for text.

### Layout and responsiveness

- Build mobile-first and add complexity only when width supports it.
- Apps SDK UI's published breakpoints are `380`, `576`, `768`, `1024`, `1280`,
  and `1536px`.
- Maintain a clear order of heading, supporting text, and action.
- Consistent padding and alignment matter more than visual novelty.

### Components and interaction

- Keep each surface focused on a small number of decisions.
- Avoid deep navigation, nested scrolling, and duplicated controls in compact
  surfaces.
- Keep actions few and explicit.
- Use accessible primitives, visible states, and responsive behavior.
- The source design system uses a default `150ms ease` transition foundation.

### Accessibility

- Meet WCAG AA text contrast.
- Provide alternative text for images.
- Support text resizing without breaking layout.
- Accessibility is part of the component contract, not a final polish pass.

## ChatGPT-Specific Guidance Not Carried Over

The following source guidance is intentionally excluded from the standalone
site specification:

- inline card, carousel, fullscreen, and picture-in-picture display modes;
- ChatGPT composer placement and conversational follow-up behavior;
- tool-call labels and model-generated response placement;
- app/plugin review and distribution requirements;
- prohibitions that exist only because ChatGPT already provides the surrounding
  navigation or input controls.

## Dependency Decision

Do not install `@openai/apps-sdk-ui` during the initial refactor. The package is
designed for ChatGPT apps and requires Tailwind 4, while this project currently
uses React with a plain global stylesheet. Recreating the desired principles
with local semantic CSS variables keeps the change smaller and avoids adopting
an unrelated runtime/design dependency.

Reconsider the package only if the project later becomes a ChatGPT app or
adopts Tailwind 4 for independent reasons.

## Refresh Procedure

Before a major visual-system rewrite:

1. Revisit the two official OpenAI developer documentation pages.
2. Check the current `@openai/apps-sdk-ui` release and its `main` branch tokens.
3. Record the new review date, package version, and source commit here.
4. Update `DESIGN.md` only where the source change is relevant to a standalone
   personal site.

This file is a concise, attributed research snapshot rather than a verbatim
mirror of the upstream documentation, so the canonical links remain the source
of truth.
