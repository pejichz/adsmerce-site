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
js/tally-embed.js loads the Tally form iframe on ugc.html
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
12. **Analytics & Meta Pixel** — `GA4_ID` near the bottom of `js/main.js` is set to
   the live GA4 property (`G-6XRG7P94DM`); `META_PIXEL_ID` is still empty.
   `REQUIRE_CONSENT` is `false`, so `gtag.js` loads on page load without asking
   and no cookie banner is shown. The banner code is still there — set
   `REQUIRE_CONSENT = true` to go back to opt-in (nothing loads until the visitor
   clicks Accept). Visitors can still opt out from `privacy.html`, which stores
   the choice and keeps them untracked; the wording there describes whichever
   mode is active, so update it if you flip the flag. Tracking is also gated on
   `TRACKING_HOSTS`, so it stays off on demo.adsmerce.com and local previews —
   this file is shared with `staging`, and without the gate demo traffic would
   land in the same property. Add a host there if you ever need it counted.
   Note the tradeoff you accepted: tracking without prior consent is what GDPR
   and the ePrivacy directive restrict for EU visitors, which is most of this
   site's audience. Flipping `REQUIRE_CONSENT` back to `true` is the fix.
13. **Search Console** — the `google-site-verification` meta tag in the `<head>` of
   `index.html` verifies a **URL prefix** property (`https://adsmerce.com/`) only.
   A **Domain** property (`adsmerce.com`, covering every subdomain and both
   protocols) cannot be verified from this repo at all — it needs a DNS TXT
   record on the apex, added at whoever hosts the domain's DNS:

       type  TXT
       host  @            (apex — not "www", and not "adsmerce.com" if the
                           provider appends the domain for you)
       value google-site-verification=<token from Search Console>

   Add it alongside any existing TXT records rather than replacing them, or you
   will break SPF. The two methods issue different tokens, so a token copied
   from the DNS screen will not verify via the meta tag, and vice versa.

## Content-Security-Policy

Every page carries the same CSP in a `<meta http-equiv>` tag, high in the `<head>`
— one shared list, because four drifting ones break silently. Things to know
before editing:

- **Anything above the tag is not covered.** Keep it directly under the viewport
  meta, ahead of every `<link>`, `<script>` and `<img>`.
- **No inline `<script>` or `style="…"` anywhere.** The policy allows neither, so
  new inline code is dropped by the browser without touching the page's HTML.
  That is why the Tally loader lives in `js/tally-embed.js` and the handful of
  old inline styles moved into the utilities block at the end of `css/style.css`.
- **A new third-party origin must be added to the policy** or its requests fail.
  Currently allowed: Google Fonts, googletagmanager, connect.facebook.net,
  fast.wistia.net, tally.so, ipapi.co, google-analytics.
- **`form-action 'self'` will block the newsletter form** if `NEWSLETTER_ENDPOINT`
  in `js/main.js` is ever pointed at an external provider (Mailchimp, Brevo…).
  Add that provider's origin to `form-action` at the same time.
- **`frame-ancestors` cannot be set from a meta tag**, so there is no clickjacking
  protection. That needs a real HTTP header, which GitHub Pages cannot send —
  it would take a proxy such as Cloudflare in front of the site.

## Images

Photographic and screenshot assets are WebP. `assets/og.png` is deliberately
**not** — social scrapers handle WebP poorly — and neither are the favicons.
Every `<img>` carries `width` and `height` (intrinsic pixel size, with CSS doing
the actual sizing) so nothing shifts while images load; keep that up on new
markup. The creative tiles are built in JS, where the sizes live on the
`CREATIVES` entries in `js/main.js`.

When you change `css/style.css` or `js/main.js`, bump the `?v=` query on every
page that links them. Returning visitors otherwise get new HTML against a cached
old stylesheet, which is how layouts break after a deploy.

## Notes

- The geo lookup free tier (ipapi.co) allows ~1k requests/day. If traffic grows,
  swap the URL in `js/main.js` for a paid geo endpoint or Cloudflare's `cf-ipcountry` header.
- Logo files are path-based SVGs (no font dependency) — safe for print/social use.
