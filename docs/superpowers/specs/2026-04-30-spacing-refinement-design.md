# Spacing Refinement Design

Date: 2026-04-30

## Goal

Refine spacing across the GitHub-inspired homepage so the page feels cleaner and more deliberate without increasing density too aggressively.

This iteration should:

- keep the current information structure
- make vertical rhythm more consistent
- keep the profile sidebar slightly roomier than the main content column
- preserve a personal-site sense of breathing room while staying compatible with GitHub visual language

## Scope

In scope:

- page-level spacing
- section padding
- README block rhythm
- card internal spacing
- desktop column relationship
- minor mobile spacing adjustments if needed for consistency

Out of scope:

- typography changes
- component redesign
- content changes
- button or badge restyling beyond spacing adjustments

## Design Direction

### Page spacing

- tighten uneven gaps
- make the space between header, main content, and footer feel more intentional
- keep desktop comfortable rather than dense

### Column balance

- let the left profile sidebar stay a little more open
- make the right content column more regular and slightly more compact
- avoid making both columns equally loose

### Section rhythm

- standardize vertical spacing between section headings, body text, and content blocks
- make README, Pinned, and Elsewhere sections feel like one system

### Card rhythm

- reduce accidental spacing variation between metadata, titles, descriptions, tags, and actions
- keep cards readable and calm

## Verification

- test suite passes
- lint passes
- build passes
- layout remains stable on desktop and mobile breakpoints
