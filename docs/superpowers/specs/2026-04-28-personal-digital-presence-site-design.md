# Personal Digital Presence Site Design

## Goal

Build a modern, responsive, minimalist personal site for Ziteng Li using a Bun-based frontend setup.

The site is not a service sales page. Its purpose is to present:

- who the person is
- selected products and projects
- publicly accessible online tools, sites, and running services

The site should feel warm, credible, and contemporary, with a narrative-first homepage that still supports efficient browsing of projects and public-facing work.

## Audience

Primary visitors:

- peers in tech
- potential collaborators
- people discovering the author's work online

Secondary visitors:

- recruiters or hiring managers
- users looking for publicly available tools or sites built by the author

## Product Direction

Chosen direction:

- narrative-led homepage
- warm and trustworthy visual tone
- identity anchored as an independent developer
- lifestyle-style portrait in the hero section
- project area displayed as a fast-browsing card grid
- online services represented as a card wall of public tools/sites, not consulting or client services

## Experience Principles

1. The page should introduce the person before it explains the work.
2. The page should feel human and calm, not corporate and not overly artistic.
3. Projects and public tools should be easy to scan without losing the editorial feel.
4. Motion should support hierarchy and polish, not draw attention to itself.
5. The design should avoid generic SaaS landing-page patterns.

## Site Structure

The site will be implemented as a single-page experience with five sections.

### 1. Hero

Purpose:

- establish first impression
- communicate identity quickly
- create visual warmth and memorability

Content:

- lifestyle-style portrait
- name
- short role label centered on "Independent Developer"
- one-line personal positioning statement
- one compact row of supporting descriptors such as product interests, technical focus, or areas of exploration

Behavior:

- portrait and copy enter with subtle staggered reveal on first load
- layout stacks vertically on small screens and uses a two-column composition on larger screens

Constraints:

- avoid multiple competing CTAs
- avoid dense paragraphs
- keep the first screen emotionally clear and visually calm

### 2. About

Purpose:

- explain who the author is with clarity and restraint

Content format:

- 2 to 4 short content blocks
- each block focuses on one idea, such as background, working style, product philosophy, or technical interests

Tone:

- concise
- thoughtful
- personal without sounding diary-like

Constraints:

- no long autobiography
- no timeline-heavy resume formatting

### 3. Selected Projects

Purpose:

- showcase breadth of work while staying easy to browse

Presentation:

- responsive project card grid
- each card contains:
  - project name
  - one-sentence description
  - optional technology tags
  - optional status, year, or category label
  - optional external or internal link

Behavior:

- cards lift slightly on hover
- on mobile, cards remain touch-friendly and readable without hover dependency

Constraints:

- optimize for multiple projects, not deep case-study storytelling on the homepage
- cards should remain visually clean and consistent even if project metadata varies

### 4. Online Services

Purpose:

- separate publicly accessible tools/sites from general projects
- help visitors discover things they can use immediately

Presentation:

- card wall visually related to the project grid but with a slightly different label treatment
- each card contains:
  - service or site name
  - short utility-focused description
  - clear access action such as Visit, Open, or Try
  - optional live status, type, or platform label

Constraints:

- this section must clearly read as "public things you can access" rather than "services I offer"
- do not use business-service copy or pricing language

### 5. Footer / Contact

Purpose:

- provide lightweight exit points and identity anchors

Content:

- email or preferred contact method
- GitHub and other selected profile links
- short closing line if it reinforces the overall tone

Constraints:

- no contact form in the initial version
- no heavy conversion language

## Visual Design

### Tone

The visual system should feel warm, calm, trustworthy, and modern.

It should not feel:

- coldly corporate
- startup-generic
- dark, neon, or cyber-styled
- overly decorative

### Color Direction

Use a warm neutral palette, likely built from:

- soft off-white or cream backgrounds
- sand, oat, or muted beige support tones
- restrained gray-brown or charcoal for text
- one subtle accent tone for active states and emphasis

The accent should stay understated and should not shift the overall tone toward playful branding.

### Typography

Use an editorial-leaning type pairing with stronger character than default product fonts.

Requirements:

- readable on mobile
- calm and mature in tone
- enough personality to avoid interchangeable-template feel

Suggested split:

- expressive display or serif/sans headline face
- neutral, high-legibility body face

### Layout

Layout should rely on:

- generous whitespace
- strong vertical rhythm
- clear section separation
- controlled line lengths

Desktop behavior:

- hero uses asymmetry or a weighted two-column composition
- project and online-service areas expand into multi-column card grids

Mobile behavior:

- all sections collapse cleanly into a single-column flow
- spacing remains spacious without causing excessive scrolling fatigue

### Imagery

Hero imagery should use a lifestyle-style portrait rather than a stiff studio profile.

The image treatment should:

- feel natural
- support the warm palette
- avoid harsh overlays or aggressive filters

## Motion

Motion should be sparse and meaningful.

Allowed motion:

- fade/slide reveal for hero content
- light upward reveal when sections enter the viewport
- small hover transitions on cards and links

Avoid:

- parallax-heavy scenes
- looping decorative animations
- effects that reduce readability or feel performative

## Content Model

The frontend should be structured so content can be updated without rewriting component markup.

Recommended data groupings:

- hero profile data
- about block data
- selected projects array
- online services array
- social/contact links

This enables easy future edits when adding new projects or public tools.

## Technical Design

### Stack

Recommended implementation:

- Bun for package management and scripts
- Vite for build tooling
- React for component structure
- CSS with a small, intentional design system using custom properties

This balances modern development speed with easy long-term maintenance.

### App Structure

Expected top-level frontend pieces:

- `HeroSection`
- `AboutSection`
- `ProjectsSection`
- `OnlineServicesSection`
- `FooterSection`

Supporting reusable pieces:

- `SectionHeading`
- `ProjectCard`
- `ServiceCard`
- `Tag`
- `LinkButton` or equivalent light action component

### Styling Strategy

Prefer a simple styling approach that keeps the design expressive without introducing unnecessary complexity.

Requirements:

- central CSS variables for palette, spacing, borders, and typography
- responsive layout via CSS grid/flexbox
- section-level composition styles
- card styles shared where appropriate, with subtle differentiation between project and service cards

### Accessibility

Minimum expectations:

- semantic section structure
- adequate color contrast
- keyboard-accessible links
- reduced-motion support
- portrait alt text that serves screen-reader users appropriately

## Content Distinction Rules

To prevent confusion between the two showcase sections:

- "Selected Projects" represents what was built
- "Online Services" represents what can be used live on the public internet

A single item can conceptually exist in both categories, but the homepage should avoid duplicating the same item in both sections unless there is a strong editorial reason. Prefer choosing the more useful category for each item.

## Initial Out-of-Scope Items

The first version should not include:

- blog system
- CMS integration
- authentication
- analytics dashboards
- multi-page case studies
- contact forms
- service booking flows
- multilingual support

These can be added later if the site evolves beyond a personal landing experience.

## Verification Expectations For Implementation

When implementation starts, validation should cover:

- responsive behavior across mobile and desktop widths
- hero readability with real portrait imagery
- distinction between project cards and online service cards
- keyboard navigation and reduced-motion handling
- successful local development and production build via Bun-based workflow

## Final Design Summary

The site should present Ziteng Li as an independent developer through a warm, narrative-first homepage. It should open with a human, lifestyle-driven portrait and a concise self-positioning statement, then transition into a clear About section, a fast-browsing project card grid, and a separate wall of public-facing online tools and sites. The visual language should be minimalist but not generic, warm rather than cold, and polished without becoming flashy.
