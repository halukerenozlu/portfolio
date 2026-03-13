## Project Overview

This repository is a personal portfolio site built with:

- Astro
- React
- TypeScript
- Tailwind CSS
- MDX
- pnpm

The visual target is a modern, polished, portfolio-style interface that stays close to the current design reference while remaining original enough to avoid direct cloning.

## Primary Goal

Improve the portfolio toward a more professional, visually refined, and production-safe result without breaking the Astro architecture or creating deployment issues.

## Core Priorities

1. Preserve clean deploy behavior on Vercel, Netlify, and similar static hosts.
2. Prefer static-first architecture.
3. Keep the project maintainable and easy to iterate on.
4. Make the UI feel premium, modern, and cohesive.
5. Stay visually close to the design reference where reasonable.

## Stack Rules

- Use `pnpm` for all package management commands.
- Keep Astro as the main framework.
- Use React only when interactivity is actually needed.
- Use TypeScript for all typed logic.
- Use Tailwind CSS utilities for styling.
- Use MDX for project content.
- Do not introduce unnecessary backend logic.
- Do not convert the project into Next.js or another framework.

## Commands

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## Working Style

- Make minimal, targeted changes.
- Preserve existing structure unless a refactor clearly improves maintainability.
- Prefer editing existing files over introducing unnecessary new abstractions.
- Keep components readable and moderately sized.
- Avoid overengineering.
- Do not add dependencies unless there is a strong reason.
- Explain important tradeoffs briefly when making architectural changes.

## UI / Design Guidance

- The site should feel elegant, dark, modern, and high quality.
- Keep strong spacing, visual hierarchy, and polished section transitions.
- Favor rounded corners, soft borders, subtle gradients, and restrained glow effects.
- Avoid clutter.
- Avoid excessively flashy animations.
- Preserve good readability and contrast.
- Maintain responsiveness across desktop, tablet, and mobile.

## Layout Guidance

The homepage is section-based and should generally include:

- Navbar
- Hero
- About
- Experience / Education
- Projects
- Contact

Preserve a clear narrative flow from top to bottom.

## Astro-Specific Rules

- Prefer `.astro` components for static sections.
- Use React components only for interactive UI, such as toggles, animated controls, filters, or menus when needed.
- Keep the default output static unless there is a compelling reason to change it.
- Do not introduce server-side rendering without clearly justifying it.
- Avoid features that create fragile deployment requirements.

## Content Rules

- Project entries should come from MDX content collections.
- Do not hardcode project detail content directly into page files when it belongs in MDX.
- Keep placeholder content professional and easy to replace.
- Write concise, clean copy for headings and descriptions.

## Code Quality Rules

- Keep TypeScript strictness intact.
- Avoid `any` unless absolutely necessary.
- Favor explicit props and clear interfaces.
- Keep class names organized and readable.
- Reuse patterns when they are genuinely repeated.
- Do not leave broken imports, dead files, or unused code behind.

## Deployment Safety Rules

- Changes must remain compatible with static deployment whenever possible.
- Avoid adding secrets, server mail logic, databases, or runtime-only assumptions unless explicitly requested.
- Before finishing substantial changes, always verify that the project still builds with:

```bash
pnpm build
```

## File and Refactor Rules

- Do not rename major files or folders unless necessary.
- Do not rewrite the whole project when a scoped improvement is enough.
- Keep the folder structure understandable for a solo developer.
- When splitting files, use practical section-based organization.

## When Updating the UI

Prioritize improvements in this order:

1. Visual hierarchy
2. Spacing and alignment
3. Component consistency
4. Responsiveness
5. Animation polish
6. Micro-interactions

## What to Avoid

- Large speculative rewrites
- Unnecessary libraries
- Framework drift
- Backend-heavy features for a static portfolio
- Styling inconsistency
- Hard-to-maintain abstractions
- Breaking the current build

## Output Expectations

When making changes:

- State what changed.
- Keep explanations brief and concrete.
- Mention any build or deployment risk.
- Prefer practical implementation over theory.

## Review Standard

Treat the project like a real portfolio that should be presentable to recruiters, internship applications, and technical reviewers.

Every change should improve at least one of these:

- clarity
- maintainability
- responsiveness
- visual quality
- deployment safety
