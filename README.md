# MRS Developments — A Vision Set In Stone

The official cinematic website for **MRS Developments**, a leading Egyptian real-estate developer with twenty-two years of regional craft across the UAE and Egypt. Built as a Next.js 14 App-Router project and configured for one-command deployment to **Cloudflare Workers with Static Assets**.

> Dark, minimal, cinematic. Soft ivory typography over deep ink. Big serif headlines, italic script accents, parallax, scroll-triggered reveals, animated SVG silk lines, marquee ticker, glassmorphism. **No custom cursor** — the experience uses the native system cursor for maximum responsiveness and clarity.

## Real MRS content

All real company content has been sourced from the official MRS PDF set (About Us, Vision, Mission, Values, CEO letter, UAE Projects, Egypt Projects, Contact). The eight UAE landmarks and two Egypt developments listed are the real MRS portfolio:

- **UAE** — Furjan Towers, Queue Point Residences, Oasis 1 Tower, Oasis 2 Tower, Industrial Projects
- **Egypt** — Viale Residence (New Obour City · 267 units), Boulevard Mall (Banafseg · first service mall)
- **Heritage** — 22+ years, 31 UAE developments (2,256 units), 20 Egypt projects (180 units)
- **CEO** — Eng. Sary Mostafa, Founder & Chief Executive Officer
- **Office** — 236 Trivium Square, 2nd Floor — Cairo, Egypt
- **Hotline** — 15691 · **Mobile/WhatsApp** — +20 100 566 6297 · **Landline** — +20 2 537 6648
- **Email** — info@mrsdevelopment.com

## Stack

- **Next.js 14.2.35** (App Router, JS) with `output: 'export'` — emits a fully static `./out`
- **React 18.3.1 / React-DOM 18.3.1**
- **Tailwind CSS 3.4** with a custom luxury palette (`ink`, `ivory`, `sage`)
- **Framer Motion 11** for scroll-triggered + entrance animation
- **Lenis 1.1** for buttery smooth scrolling (desktop only — native scroll is preserved on touch devices for better mobile performance)
- **lucide-react** icons
- **Google Fonts** (Fraunces / Playfair Display / Inter) loaded over `<link>` so the build has no network dependency
- **Cloudflare Workers + Static Assets** for deployment — no Worker code required

## Run locally

```bash
cd "new mrs"
npm install
npm run dev
# → http://localhost:3000
```

Production build (emits to `./out`):

```bash
npm run build
```

## Deploy to Cloudflare

The project ships as a **Cloudflare Worker with Static Assets**. The `wrangler.toml` already points at `./out`, so all you need to do is wire up the build.

### Option A — Auto-deploy from Git via the Workers dashboard (recommended)

1. Push the project to GitHub / GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Workers → Connect to Git** (pick the repo).
3. Under **Build configuration**, set both fields exactly:
   - **Build command**: `npm install && npm run build`
   - **Deploy command**: `npx wrangler deploy`
   - **Root directory**: leave as `/`
4. Under **Variables and Secrets**, add:
   - `NODE_VERSION` = `20.18.0`
5. Save and deploy. Subsequent pushes auto-deploy.

### Option B — Local deploy with Wrangler

```bash
npx wrangler@latest login
npm run deploy      # Build + ship to production
npm run preview     # → http://localhost:8787
```

## Project structure

```
new mrs/
├── app/
│   ├── layout.jsx        # Fonts via <link>, smooth scroll wrapper, metadata, hero preload
│   ├── page.jsx          # Homepage composition
│   └── globals.css       # Tailwind layers + luxury utilities (no custom cursor)
├── components/
│   ├── SmoothScroll.jsx  # Lenis wrapper — desktop only, respects reduced-motion
│   ├── Navbar.jsx        # Fixed nav with utility strip, hotline, mobile drawer
│   ├── Hero.jsx          # Cinematic hero w/ parallax silk lines, real MRS copy
│   ├── Marquee.jsx       # Infinite ticker of sectors
│   ├── About.jsx         # Split layout, parallax image, MRS heritage stats
│   ├── VisionMission.jsx # Vision · Mission · five Values (accordion)
│   ├── CEO.jsx           # Eng. Sary Mostafa — full real CEO letter
│   ├── Projects.jsx      # UAE (5) + Egypt (2) real project cards
│   ├── Experience.jsx    # Cinematic section · "Not just building — elevating."
│   ├── Contact.jsx       # Real contact details + consultation form
│   └── Footer.jsx        # Giant mrs. wordmark + Useful / Short links + Contact
├── public/
│   ├── images/           # Local MRS imagery (hero, atelier, all project shots)
│   ├── favicon.svg       # MRS monogram favicon
│   └── _headers          # Cloudflare caching + security headers
├── wrangler.toml         # Cloudflare Workers config — points `[assets]` at ./out
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs       # output: 'export', images.unoptimized, console removed in prod
├── jsconfig.json
└── package.json
```

## Design notes

- **Palette** — `#0a0d0c` ink ground; `#f4ecd0` ivory accents; soft sage greens; selective dusty gradients via `bg-ivory-gradient`.
- **Type system** — Fraunces (300/400) as the display serif, Playfair Display *italic* as the script accent, Inter for body and eyebrows.
- **Motion** — Scroll-triggered y-translate + opacity reveals, mask-style word reveals on big headings, subtle parallax via `useScroll` + `useTransform`, infinite marquee, animated SVG silk lines, hover-only project descriptions.
- **Cursor** — The site uses the native system cursor everywhere. No custom cursor JS or CSS is shipped.
- **Smooth scroll** — Lenis is mounted only on devices with a fine pointer (desktop / large pointer devices). Touch devices retain native scrolling for smoother mobile UX.
- **Responsive** — Fluid typography uses `vw`/`clamp` for big serifs; layouts collapse to a single elegant column under `lg`; mobile fullscreen menu with staggered entrance. Hero uses `min-h-[100svh]` to avoid mobile address-bar jumps, and `lg:h-screen / lg:max-h-[1000px]` to prevent over-stretching on tall desktops.
- **Performance** — Hero image is preloaded; console calls stripped in production; Lenis disabled on touch; `prefers-reduced-motion` honored; `will-change-transform` only where required.

## Cloudflare-specific notes

- **Static export** — `output: 'export'` in `next.config.mjs` means Next emits the whole site to `./out`. Cloudflare Workers Static Assets serves it directly.
- **`_headers`** — Long-cache headers for `_next/static/*` and fonts, immediate-cache for HTML, plus `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`.
- **Images** — `images.unoptimized = true` is required for `output: 'export'`. All hero & project images are bundled locally under `public/images/`.
- **Fonts** — Loaded via `<link rel="stylesheet">` with preconnects. No build-time font fetching, so the build is fully deterministic.
