# ClawdSaber Docs

Documentation source for the ClawdSaber desktop application.

Built with [VitePress](https://vitepress.dev/).

## Local Preview

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

Output goes to `.vitepress/dist`.

## Deployment

- `main` branch holds the documentation source
- `gh-pages` branch holds the built static site
- GitHub Pages is configured with "Deploy from a branch"

To publish, run `npm run docs:build` locally and push `.vitepress/dist` to the `gh-pages` branch.
