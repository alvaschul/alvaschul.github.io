# alvaschul.github.io

Personal developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS 4. A single home page with an editorial hero (name, bio, GitHub link) and a grid of five project cards linking to GitHub repos. Dark theme by default, with a light/dark toggle. Statically exported to `out/` and deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Content

All page content is defined statically in `src/data/projects.ts`:

- The `site` object sets the name, title, bio, and GitHub URL rendered by the hero.
- The `projects` array defines the project cards on the page (name, description, language). Each card links to `https://github.com/alvaschul/<name>`.

New GitHub repos don't appear automatically — after creating a repo, add an entry to the `projects` array (and update `site` if needed), then rebuild.

## Dark / Light Theme

The site defaults to dark. The toggle in the top-right corner switches between dark and light by toggling the `dark` class on the root `<html>` element (class-based dark mode via Tailwind v4's `@custom-variant dark`).

The chosen theme is persisted in `localStorage` under the `theme` key, and an inline script in `src/app/layout.tsx` applies it before hydration to avoid a flash of the wrong theme. If `localStorage` is unavailable (private browsing, blocked cookies), the site falls back to dark and the toggle still works for the current session.

## Build for Production

```bash
npm run build
```

Static files are generated in the `out/` directory.

## Lint & Type Check

```bash
npm run lint
npx tsc --noEmit
```

Run both locally before pushing to `main`.

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

The workflow:
1. Builds the Next.js app with `output: "export"` (see `next.config.ts`)
2. Uploads the `out/` directory as an artifact
3. Deploys to GitHub Pages

### First-time Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` to trigger the first deployment

Your site will be available at: https://alvaschul.github.io

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (class-based dark mode)
- **Export**: Static site via `output: "export"`
- **Deployment**: GitHub Pages + GitHub Actions