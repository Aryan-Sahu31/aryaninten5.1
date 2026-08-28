# ShopEase — Product Catalog (Capstone Project)

A vanilla HTML/CSS/JS e-commerce product catalog demonstrating modular
architecture, client-side routing, and asset optimization — ready for
static deployment.

## How this satisfies the assignment

| Requirement | Where it's done |
|---|---|
| Modular frontend | Each concern lives in its own file: `js/data.js` (data), `js/components/*.js` (UI pieces), `js/router.js` (navigation), `js/app.js` (bootstrap) |
| Client-side routing | `js/router.js` — a hash-based router that swaps `#app` content on `hashchange`, no full page reloads |
| Asset optimization | Product images are hand-written SVGs (a few hundred bytes each, resolution-independent) instead of large raster photos; images use `loading="lazy"` |
| Live deployment | Static site — deploys as-is to Vercel, Netlify, or Render (steps below) |

## Project structure

```
product-catalog/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   ├── router.js
│   ├── app.js
│   └── components/
│       ├── navbar.js
│       ├── productList.js
│       ├── productDetail.js
│       └── cart.js
└── assets/
    └── *.svg
```

## Run locally

No build step needed. From the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Opening `index.html` directly by
double-clicking also works for this project since there's no build tool.)

## Deploy — Netlify (drag-and-drop, easiest)

1. Go to https://app.netlify.com/drop
2. Drag the whole `product-catalog` folder onto the page
3. Netlify gives you a live public URL immediately

## Deploy — Vercel

1. Install the CLI: `npm i -g vercel`
2. From inside `product-catalog/`, run: `vercel`
3. Follow the prompts (accept defaults — it's a static site, no build command needed)
4. Vercel prints your live URL

## Deploy — Render

1. Push this folder to a GitHub repo
2. On Render: New → Static Site → connect the repo
3. Build command: leave blank (or `echo "no build"`)
4. Publish directory: `.` (the project root)

## Extending it

- Swap `js/data.js` for a `fetch()` call to a real API and nothing else changes
- Add more routes in `js/router.js` (e.g. a cart page, a checkout page)
- Replace placeholder SVGs in `assets/` with real product photos — keep them compressed (WebP/optimized JPG) to preserve load performance
