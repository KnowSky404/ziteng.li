# Ziteng Li Personal Site

A Bun-powered React + Vite single-page site for presenting personal identity, selected projects, and public online tools.

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Deployment

### Cloudflare Workers

Connect the repository with Workers Builds and use these Git build settings:

- Production branch: `main`
- Root directory: `app`
- Build command: `bun run build`
- Deploy command: `npx wrangler deploy`
- Worker name: `ziteng-li`
- Environment variable: `BUN_VERSION=1.3.14`

The matching Wrangler source of truth is `wrangler.jsonc`. A manual deployment
is also available after Cloudflare authentication. The command builds the Vite
site before publishing its `dist` directory as Workers Static Assets:

```bash
bun run deploy:cloudflare
```

### GitHub Pages

Set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.
The repository workflow then builds and deploys `dist` on every push to `main`,
or when started manually from the Actions tab.

## Where To Edit

Most copy and card content lives in `src/data/siteContent.js`.

Core page structure is composed from section components in `src/components/`.
