# AdsMerce website — design spec (2026-07-04)

## Goal
One-page marketing site for adsmerce.com — a performance marketing agency for e-commerce
(Meta ads, creative production, CRO, AI automation). Replaces the rejected orange/black draft.
Content structure of the old draft is kept; visual style is new.

## Approved decisions
- **Style:** light editorial — warm paper background (#F7F5F0), near-black ink (#171614),
  hairline rules, generous whitespace, single emerald accent (#0E6F4E). No gradients, no glows.
- **Typography:** Inter Tight (headlines, tight tracking), Inter (body),
  Instrument Serif italic (editorial accent words).
- **Logo:** variant A — lowercase `adsmerce.` wordmark, green period ("Profit. Period.").
  Delivered as path-based SVGs: `assets/logo.svg`, `assets/logo-white.svg`, `assets/favicon.svg`.
- **Languages:** English default. Client-side geo-IP (ipapi.co, 1.5s timeout) switches to BHS
  for BA / RS / HR / ME; fallback to browser language (bs/hr/sr); manual EN⁄BS toggle in nav,
  persisted in localStorage (manual choice overrides geo).
- **Stack:** static site — `index.html` + `css/style.css` + `js/main.js`. No build step.
  All copy lives in a JS i18n dictionary keyed by `data-i18n` attributes; HTML ships English.

## Sections (content carried over from old draft, translated)
1. Nav: logo, anchors (Services, Work, Results, About, Contact), lang toggle, CTA "Get a free audit".
2. Hero: "Profit. Not pageviews." / BHS "Profit, ne pregledi." + proof chips (4.3× avg ROAS, Meta Certified).
3. Stats bar: 8+ years · €50M+ managed ad spend · 20+ EU e-com brands · Meta Certified Media Buyer.
4. Services (5): performance marketing, creative production, landing pages & CRO,
   AI & automation, e-com growth consulting.
5. Creative: "Creative is the new targeting." — video card grid driven by a JS array;
   flat placeholders until the owner drops mp4 files into `assets/creative/`.
6. Results: metric cards (from old draft: 4.3× ROAS, −42% CPA, €12.4M+ client revenue)
   + two Ads-Manager screenshot slots (placeholders).
7. Landing pages: two case cards (+140% CR product page redesign, advertorial page → higher AOV).
8. Why us: Meta Certified, European experience, data-driven.
9. CTA: free Loom audit (mailto) vs. 60-min consulting call (Calendly placeholder).
10. Footer: inverted (ink bg, white logo), contact hello@adsmerce.com, socials, legal line.

## Non-goals
No CMS, no backend forms, no blog, no cookie banner (no tracking scripts shipped).
