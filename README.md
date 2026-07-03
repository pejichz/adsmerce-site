# AdsMerce website

Static one-page site for **adsmerce.com** — no build step, no dependencies.
Upload the folder contents to any hosting (Cloudflare Pages, Netlify, Vercel, or classic cPanel).

## Structure

```
index.html        the whole site (English by default)
css/style.css     styles
js/main.js        translations (EN/BHS), geo-IP language detection, interactions
assets/           logo.svg, logo-white.svg, favicon.svg
docs/             design spec
```

## Languages

- Default: **English**.
- Visitors with an IP from **BA / RS / HR / ME** are switched to **BHS** automatically
  (client-side lookup via `ipapi.co`, 1.5 s timeout; falls back to browser language).
- The EN / BS toggle in the nav overrides detection and is remembered (localStorage).
- All copy lives in the `I18N` object at the top of `js/main.js` — edit texts there.

## Things to replace before going live

1. **Calendly link** — `https://calendly.com/adsmerce` in `index.html` (Book a call button).
2. **Email** — `hello@adsmerce.com` appears in the CTA button and footer.
3. **Social links** — LinkedIn / Instagram URLs in the footer.
4. **Ad creatives** — drop mp4 files into `assets/creative/` and set the `src` values
   in the `CREATIVES` array in `js/main.js`. Tiles without `src` show placeholders.
5. **Ads Manager screenshots** — replace the two dashed placeholder boxes in the
   Results section (`.shot`) with `<img>` tags once you export the screenshots.

## Notes

- The geo lookup free tier (ipapi.co) allows ~1k requests/day. If traffic grows,
  swap the URL in `js/main.js` for a paid geo endpoint or Cloudflare's `cf-ipcountry` header.
- Logo files are path-based SVGs (no font dependency) — safe for print/social use.
