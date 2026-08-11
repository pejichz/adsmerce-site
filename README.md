# AdsMerce website

Static site for **adsmerce.com** — plain HTML, CSS and JS, no build step and no
dependencies. Files are served exactly as they sit in the repository.

Note that everything in this repository is published at the domain root, this
file included. Keep internal notes, credentials and anything you would not want
a visitor to read out of it.

## Structure

```
index.html        the one-page main site
ugc.html          landing page + Tally application form for UGC creators
privacy.html      privacy policy
404.html          not-found page
css/style.css     all styles
js/main.js        translations (BHS/EN), language detection, creative grid, interactions
js/tally-embed.js loads the Tally form iframe on ugc.html
assets/           logos, favicons, client logos, creative stills, result screenshots
robots.txt        crawler rules, sitemap and llms.txt pointers
sitemap.xml       indexable pages — add new ones here
llms.txt          plain-text site summary for AI crawlers and assistants
```

## Languages

The markup ships BHS, and `js/main.js` swaps it to English for visitors outside
BA / RS / HR / ME (country from `ipapi.co`, 1.5 s timeout, falling back to
browser language). The BHS / EN toggle in the nav overrides detection and is
remembered in localStorage.

All copy lives in the `I18N` object at the top of `js/main.js`, keyed by the
`data-i18n` attributes in the markup — edit texts there, not in the HTML. Keys
must exist in both language blocks. Watch for duplicates: a repeated key in the
same block silently wins over the earlier one.

## Content-Security-Policy

Every page carries the same policy in a `<meta http-equiv>` tag directly under
the viewport meta. One shared list is used deliberately — four drifting ones
break quietly. Three rules keep it working:

- **Keep the tag above every `<link>`, `<script>` and `<img>`.** Anything
  declared above it is not covered by it.
- **No inline `<script>` or `style="…"`.** The policy allows neither, so inline
  code is dropped by the browser while the HTML still looks correct. This is why
  the Tally loader sits in `js/tally-embed.js` and small style tweaks go in the
  utilities block at the end of `css/style.css`.
- **A new third-party origin has to be added to the policy** or its requests
  fail. Pointing `NEWSLETTER_ENDPOINT` at an external provider also means adding
  that provider to `form-action`.

## Images

Photographs and screenshots are WebP. `assets/og.png` deliberately is not —
social scrapers handle WebP poorly and it is the image that shows when the site
is shared — and neither are the favicons.

Every `<img>` carries `width` and `height` set to the file's intrinsic pixel
size, with CSS doing the visible sizing, so the layout does not shift while
images load. Keep that up on new markup. The creative tiles are built in JS,
where the sizes live on the `CREATIVES` entries in `js/main.js`.

## Deploying

`main` is the live site. Pushing it publishes to adsmerce.com through GitHub
Pages; the build takes about a minute. `staging` is the preview branch and
carries work in progress.

After changing `css/style.css` or `js/main.js`, bump the `?v=` query on every
page that links them. Otherwise returning visitors pair new HTML with a cached
old stylesheet, which is how a layout breaks right after a deploy.

`CNAME` and `robots.txt` are meant to differ between the two branches, so
`.gitattributes` keeps each branch's own copy during merges.

## Analytics

`js/main.js` holds three settings near the bottom:

- `GA4_ID` / `META_PIXEL_ID` — while both are empty, no tracking code loads.
- `REQUIRE_CONSENT` — `true` waits for the visitor to accept the cookie banner
  before anything loads; `false` loads on page load and shows no banner. The
  banner code stays in place either way, so switching is a one-line change.
  The wording on `privacy.html` describes one specific mode, so update it there
  when you flip this.
- `TRACKING_HOSTS` — tracking only runs on these hostnames. This file is shared
  with `staging`, and without the gate demo and local traffic would report into
  the same property as the live site.

Visitors can always opt out from `privacy.html`; the choice is stored in their
browser and honoured on later visits.

## Search Console

The `google-site-verification` meta tag in `index.html` verifies a **URL prefix**
property (`https://adsmerce.com/`) only.

A **Domain** property — `adsmerce.com`, covering every subdomain and both
protocols — cannot be verified from this repository at all. It needs a DNS TXT
record on the apex, added wherever the domain's DNS is hosted:

```
type   TXT
host   @        (the apex — not "www", and not "adsmerce.com" if the provider
                 appends the domain for you)
value  google-site-verification=<token from Search Console>
```

Add it alongside the existing TXT records rather than replacing them, or mail
delivery breaks. The two methods issue different tokens, so a token copied from
the DNS screen will not verify through the meta tag, or the other way round.

## Notes

- The `ipapi.co` free tier allows roughly 1k requests a day. If traffic outgrows
  it, swap the URL in `js/main.js` for a paid geo endpoint or Cloudflare's
  `cf-ipcountry` header.
- Logo files are path-based SVGs with no font dependency — safe for print and
  social use.
- Wistia videos load only once a visitor clicks a creative tile, so no
  third-party video request is made on page load.
