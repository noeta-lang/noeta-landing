# noeta-landing

The [Noeta](https://noeta.dev) landing page — the marketing/entry site at the noeta.dev root.

An [Astro](https://astro.build) static site, deployed as a Cloudflare Worker with static assets
(no Worker script — `dist/` is served directly). The design is "Ink & Signal": warm near-black,
paper-cream type, one terminal-amber accent; Instrument Serif for display, Hanken Grotesk for
body, Spline Sans Mono for code. All fonts self-hosted (Fontsource).

## Layout

- `src/pages/index.astro` — the page; code samples come from the language's own docs/examples.
- `src/pages/og.astro` — the 1200×630 OG-card screenshot target. Built, screenshotted by
  `scripts/build-og-image.mjs` (Playwright) into `dist/images/og-image.png`, then deleted so it
  never ships. Runs as part of `pnpm run build`; skip with `OG_IMAGE_SKIP=1`.
- `src/lib/highlight.ts` — a tiny build-time Noeta syntax highlighter for the samples.
- `src/components/BaseHead.astro` — SEO meta, OpenGraph/Twitter cards, Schema.org JSON-LD.
- `.github/workflows/deploy.yml` — push to main → build (incl. OG image via headless Chromium)
  → `wrangler deploy`. Needs `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` secrets.

## Local development

```sh
pnpm install
pnpm run dev        # astro dev — http://localhost:4321
pnpm run build      # dist/ + OG image (needs a Playwright chromium)
pnpm run preview    # build, then serve dist/ through wrangler
```

## Deploy (your Cloudflare account)

```sh
pnpm run deploy
```

Then bind the custom domain noeta.dev via the `routes` entry in `wrangler.jsonc`.

Generated with assistance from Claude Code; not yet deployed.
