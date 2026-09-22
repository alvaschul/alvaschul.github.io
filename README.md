# alvaschul.github.io

Personal website built with Next.js 15, TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

Static files are generated in the `out/` directory.

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

The workflow:
1. Builds the Next.js app with `output: "export"`
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
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages + GitHub Actions