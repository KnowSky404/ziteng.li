# Mobile-First Navigation and Content Hierarchy Design

Date: 2026-04-29

## Goal

Refine the current GitHub-inspired personal site for mobile devices so the experience behaves more like a real mobile product page instead of a compressed desktop layout.

The mobile-first priority for this iteration is:

- shorten the first screen
- move content navigation to the top of the mobile experience
- reduce the visual dominance of profile information
- preserve access to profile, projects, and services without making the page feel crowded

## Scope

In scope:

- redesign the mobile layout and hierarchy
- make the mobile header more compact
- prioritize `Overview`, `Projects`, and `Services` navigation on first screen
- compress the profile summary into a smaller mobile block
- reorganize mobile spacing, stacking, and card density

Out of scope:

- changing the desktop information architecture in a major way
- adding new content sections
- full content rewrite
- navigation routing changes

## User Experience

### Primary mobile intent

On phones, the first thing the visitor should understand is where they can go next.

That means the first screen should prioritize:

1. compact identity header
2. content navigation
3. short profile summary

Call-to-action buttons such as GitHub and contact should remain available, but they should not dominate the top of the mobile view.

### Header

Desktop can keep the current GitHub-like structure.

On mobile, the header should become a denser utility bar:

- site mark and title remain visible
- theme and language controls stay accessible
- spacing tightens significantly

The mobile header should feel operational, not decorative.

### Navigation

The main section navigation should become a first-class mobile element.

Recommended mobile behavior:

- present `Overview`, `Projects`, and `Services` immediately below the header
- render these entries as compact tabs or pill buttons
- allow horizontal scrolling if needed rather than wrapping into a tall block

This makes the first screen useful immediately and reduces scroll friction.

### Profile summary

The current desktop-style sidebar should not remain visually dominant on mobile.

On mobile it should collapse into a compact summary block:

- avatar shrinks
- name and handle stay visible
- headline and summary become shorter in visual footprint
- focus tags remain, but spacing becomes tighter

The profile section should still communicate identity, but it should feel secondary to navigation.

### Actions

The GitHub and contact buttons should move lower in the mobile flow.

Recommended placement:

- after the short identity summary
- before or after the highlight cards, depending on final spacing balance

They should remain easy to access without consuming the first screen.

### Content sections

`Overview`, `Pinned Projects`, and `Public Services` should all become cleaner on mobile.

Recommended adjustments:

- reduce vertical spacing between sections
- simplify section padding
- tighten meta chips and card spacing
- keep cards single-column
- make card headings and labels more scan-friendly

The goal is not to hide content. The goal is to make each section feel intentional at phone width.

## Architecture

### Responsive strategy

Keep the existing desktop layout logic, but treat mobile as a distinct hierarchy instead of a scaled-down desktop.

Implementation should favor:

- existing component reuse
- CSS breakpoint-driven reordering
- minimal structural changes unless a component boundary becomes awkward

If mobile ordering becomes difficult with CSS alone, modest JSX restructuring is acceptable as long as desktop remains stable.

### Component responsibilities

Likely areas of change:

- `App` for layout ordering if needed
- `HeroSection` for mobile summary structure
- global stylesheet for responsive hierarchy and spacing

No new state model should be required for this iteration.

## Error Handling and Risks

Key risks:

- making navigation more prominent without making the header overcrowded
- moving action buttons too far down and hurting discoverability
- preserving desktop quality while aggressively reworking mobile layout

Mitigation:

- keep mobile navigation compact and scrollable
- maintain clear visual grouping between nav, identity, and actions
- verify both desktop and mobile breakpoints after changes

## Testing Strategy

Add or update tests only if structure or accessible labels materially change.

Verification should include:

- existing test suite still passing
- lint passing
- production build passing
- manual review of mobile breakpoint behavior in layout and spacing

## Decision Summary

This design intentionally chooses:

- navigation-first mobile layout
- reduced first-screen profile dominance
- product-like phone experience rather than desktop compression

That aligns with the user request to make mobile feel purpose-built and to surface content destinations before everything else.
