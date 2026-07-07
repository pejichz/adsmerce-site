# AdsMerce website

Static one-page site for **adsmerce.com** — no build step, no dependencies.
Upload the folder contents to any hosting (Cloudflare Pages, Netlify, Vercel, or classic cPanel).

## Structure

```
index.html        the main one-page site (English by default)
ugc.html          landing page + application form for UGC creators
blog/index.html   blog listing
blog/*.html       individual posts (copy an existing post as a template)
css/style.css     styles
js/main.js        translations (EN/BHS), geo-IP language detection, interactions
assets/           logo.svg, logo-white.svg, favicon.svg
assets/clients/   client brand logos (shown in the marquee under the hero)
robots.txt        crawler rules + sitemap pointer
sitemap.xml       list of all pages (add new blog posts here!)
llms.txt          site summary for AI crawlers/assistants
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
4. **Ad creatives** — the `CREATIVES` array in `js/main.js` holds the Work tiles.
   Live now: 3 Wistia videos (facade pattern — local poster in `assets/creative/`,
   player loads from `fast.wistia.net` only on click) + 1 static image. To add more:
   push `{ type: "wistia", id: "<hashedId>", poster: "…", labelKey: "…" }`,
   `{ type: "image", src: "…", labelKey: "…" }`, or a bare `{ labelKey }` placeholder.
5. **Ads Manager screenshots** — replace the two dashed placeholder boxes in the
   Results section (`.shot`) with `<img>` tags once you export the screenshots.
6. **FAQ numbers** — the answers state "€5k+/month minimum budget", "month to month,
   no contracts" and "results in 60–90 days". Adjust in `js/main.js` (faq.* keys)
   if that's not how you actually work.
7. **Client logos** — the marquee shows all 13 logos from `assets/clients/`;
   add or remove `<img>` tags in `index.html` (remember: each logo appears twice,
   once in the visible track and once in the aria-hidden duplicate for the loop).
8. **Newsletter provider** — the form currently falls back to a pre-filled email.
   When you pick a provider (Mailchimp, Brevo, Buttondown…), paste its form action
   URL into `NEWSLETTER_ENDPOINT` at the bottom of `js/main.js`.
9. **UGC applications** — the form on `ugc.html` opens the applicant's email app
   with a pre-filled application to hello@adsmerce.com. If you later create an
   Airtable/Tally form, replace the `<form id="ugcForm">` block with their embed.
10. **Agency ad accounts claim** — the "Why us" bullet and FAQ mention agency ad
   accounts via Meta's partner Aleph. Verify the wording matches your actual setup.
11. **Blog** — the launch-offer post (`blog/google-ads-starter-offer.html`) says
   "fixed price" without naming one; add the price if you want it public. For each
   new post: copy an existing post file, update title/description/JSON-LD/date,
   add a card to `blog/index.html` and a URL entry to `sitemap.xml`.
12. **Analytics & Meta Pixel** — paste your IDs into `GA4_ID` and `META_PIXEL_ID`
   near the bottom of `js/main.js`. While both are empty nothing loads and no
   cookie banner shows. Once either is set, the GDPR consent banner appears
   automatically and tracking loads only after the visitor clicks Accept.
   The privacy policy page (`privacy.html`) has a "reset cookie choice" button.

## Notes

- The geo lookup free tier (ipapi.co) allows ~1k requests/day. If traffic grows,
  swap the URL in `js/main.js` for a paid geo endpoint or Cloudflare's `cf-ipcountry` header.
- Logo files are path-based SVGs (no font dependency) — safe for print/social use.
