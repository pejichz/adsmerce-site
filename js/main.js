/* AdsMerce — i18n, geo language detection, creative grid, reveal animations */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ i18n */
  var BHS_COUNTRIES = ["BA", "RS", "HR", "ME"];
  var STORAGE_KEY = "adsmerce_lang";

  var I18N = {
    en: {
      "nav.services": "Services",
      "nav.work": "Work",
      "nav.results": "Results",
      "nav.why": "Why us",
      "nav.contact": "Contact",
      "nav.cta": "Get a free audit",

      "hero.eyebrow": "Performance marketing for e-commerce brands",
      "hero.title": "Profit.<br>Not <em>pageviews</em>.",
      "hero.lead": "We’ve put €50M+ to work on Meta for 20+ European e-commerce brands. No guessing, we combine media buying, scroll-stopping creative and AI automation, all in service of one metric: profitable growth.",
      "hero.cta1": "Get a free audit",
      "hero.cta2": "See our work",
      "hero.chip1": "4.3× average ROAS, last 12 months",
      "hero.chip2": "Meta Certified Media Buyer",

      "stats.s1": "years of performance marketing",
      "stats.s2": "ad spend managed on Meta",
      "stats.s3": "e-commerce brands scaled in the EU",
      "stats.s4": "average blended ROAS",

      "svc.kicker": "Services",
      "svc.title": "Full-stack <em>e-commerce</em> growth.",
      "svc.sub": "We don’t just run ads. We take ownership of the whole funnel to maximize ROAS and profitability.",
      "svc.1t": "Performance marketing",
      "svc.1d": "Meta Ads at expert level, with Google Ads where it compounds results. We scale campaigns on data with one focus — profit, not vanity metrics.",
      "svc.2t": "Creative production",
      "svc.2d": "We design and produce video and static ads that stop the scroll and convert.",
      "svc.3t": "Landing pages & CRO",
      "svc.3d": "Conversion-rate optimization and high-converting landing pages that turn clicks into customers.",
      "svc.4t": "AI & automation",
      "svc.4d": "AI implementations that automate processes, personalize the journey and cut operating costs.",
      "svc.5t": "E-com growth consulting",
      "svc.5d": "A holistic approach to growth: offer, pricing, LTV and retention. A partner in growth, not a vendor.",

      "work.kicker": "Work",
      "work.title": "Creative is the new <em>targeting</em>.",
      "work.sub": "We produce video and static ads that stop the scroll, carry the message and — most importantly — drive sales.",
      "work.note": "A selection of recent formats — full portfolio available on request.",
      "work.f1": "UGC video ad",
      "work.f2": "Product demo",
      "work.f3": "Advertorial video",
      "work.f4": "Static & carousel",
      "work.soon": "Sample coming soon",

      "res.kicker": "Results",
      "res.title": "Results that speak for <em>themselves</em>.",
      "res.sub": "Transparent performance, straight from our clients’ Ads Managers.",
      "res.m1": "blended ROAS — 12-month average",
      "res.m2": "CPA after creative & CRO overhaul",
      "res.m3": "revenue generated for clients",
      "res.shot": "Ads Manager screenshot",
      "res.shot2": "Ads Manager screenshot",

      "lp.kicker": "Landing pages",
      "lp.title": "Websites that <em>convert</em>.",
      "lp.sub": "We design and optimize landing pages with one single goal — maximum conversion rate.",
      "lp.c1badge": "+140% conversion rate",
      "lp.c1t": "E-commerce product page redesign",
      "lp.c1d": "A complete rebuild of the product page around buying psychology — new social-proof section and a clear CTA.",
      "lp.c2badge": "Higher AOV",
      "lp.c2t": "Advertorial landing page",
      "lp.c2d": "An advertorial page that educates the buyer before the purchase and significantly raises average order value.",

      "why.kicker": "Why us",
      "why.title": "A reliable partner for <em>e-commerce</em> growth.",
      "why.1t": "Meta Certified Media Buyer",
      "why.1d": "Officially certified by Meta for campaign management and budget optimization.",
      "why.2t": "European experience",
      "why.2d": "20+ e-commerce brands successfully scaled across EU markets.",
      "why.3t": "Data-driven decisions",
      "why.3d": "Everything rests on hard data. No guessing — testing, iteration and post-purchase strategy.",
      "why.chart": "total revenue generated for clients",

      "cta.kicker": "Contact",
      "cta.title": "Ready for the <em>next level</em>?",
      "cta.sub": "Pick what suits you best — request a free audit, or book a 1-on-1 consultation to solve specific problems.",
      "cta.free": "Free",
      "cta.a.t": "Free audit",
      "cta.a.d": "A 5-minute Loom video with a detailed analysis of your current setup and concrete steps to improve it.",
      "cta.a.1": "Meta Ads account analysis",
      "cta.a.2": "Creative review & critique",
      "cta.a.3": "CRO check of your store",
      "cta.a.4": "Quick-win identification",
      "cta.a.btn": "Request a free audit",
      "cta.b.t": "Consulting call",
      "cta.b.d": "Direct 1-on-1 consulting — strategy and solving specific e-commerce problems in real time. 60 minutes, over video call.",
      "cta.b.1": "Strategy & scaling roadmap",
      "cta.b.2": "Answers to your specific questions",
      "cta.b.3": "Recording included",
      "cta.b.btn": "Book a call",

      "clients.label": "Brands we’ve worked with",

      "proc.kicker": "Process",
      "proc.title": "From audit to <em>scale</em>.",
      "proc.sub": "A clear four-step system — you always know what’s happening and why.",
      "proc.1t": "Audit",
      "proc.1d": "We dig through your account, creative, store and numbers — and find where money is being left on the table.",
      "proc.2t": "Strategy",
      "proc.2d": "A concrete plan: offer, angles, creative roadmap, budget structure and KPI targets.",
      "proc.3t": "Launch",
      "proc.3d": "New creative and campaigns go live — with tracking set up properly from day one.",
      "proc.4t": "Scale",
      "proc.4d": "Weekly testing and iteration. We scale what works and kill what doesn’t — transparently, with reports you understand.",

      "faq.kicker": "FAQ",
      "faq.title": "Questions, <em>answered</em>.",
      "faq.q1": "What’s the minimum budget to work with you?",
      "faq.a1": "We deliver the best results for stores already spending around €5k+ per month on ads. Below that, we’ll tell you honestly what to fix first — that’s what the free audit is for.",
      "faq.q2": "Do you lock clients into long contracts?",
      "faq.a2": "No lock-ins — we work month to month. Keeping you should be our results’ job, not the contract’s.",
      "faq.q3": "How soon can I expect results?",
      "faq.a3": "First signals within 2–4 weeks. Meaningful, stable improvements typically take 60–90 days, depending on budget and starting point.",
      "faq.q4": "Who owns the ad account and the creatives?",
      "faq.a4": "You do. Everything runs inside your accounts, and every asset we produce stays yours — even if we part ways.",
      "faq.q5": "How does the collaboration start?",
      "faq.a5": "With the free audit. If we see potential, we send you a concrete plan. If we don’t, we tell you straight — no hard feelings.",
      "faq.q6": "Do you work with businesses outside e-commerce?",
      "faq.a6": "No — e-commerce only. That focus is exactly why we’re good at it.",

      "nav.blog": "Blog",
      "work.ugc": "Are you a content creator? Apply for paid UGC collaborations →",

      "why.4t": "Agency ad accounts",
      "why.4d": "We can run campaigns on agency ad accounts through Meta’s official partner Aleph — extra account stability and direct human support from Meta.",

      "faq.q7": "What are agency ad accounts?",
      "faq.a7": "Ad accounts provisioned through Meta’s official regional partner (Aleph). In practice: better account stability, faster issue resolution and access to real human support at Meta — not just chatbots and ticket queues.",

      "news.title": "One useful e-com growth idea. <em>Monthly</em>.",
      "news.sub": "Tactics from real campaigns — creative, CRO, Meta and Google Ads. No spam, unsubscribe anytime.",
      "news.ph": "you@brand.com",
      "news.btn": "Subscribe",
      "news.ok": "Thanks — your email app just opened, hit send to confirm.",

      "blog.title": "Growth <em>notes</em>.",
      "blog.kicker": "Blog",
      "blog.sub": "Practical writing on performance marketing, creative and CRO for e-commerce — written for store owners, readable by humans and AI alike.",
      "blog.read": "Read article →",
      "blog.back": "← All articles",

      "ugc.eyebrow": "For creators",
      "ugc.title": "Create UGC ads. <em>Get paid</em>.",
      "ugc.lead": "We produce ads for e-commerce brands across Europe and are always looking for creators — for videos in English, German, BHS and other languages. No follower count required: we pay for content, not reach.",
      "ugc.get.t": "What you get",
      "ugc.get.1": "Paid per video — clear rates, agreed upfront",
      "ugc.get.2": "Briefs and scripts from us — you focus on filming",
      "ugc.get.3": "Products shipped to you, yours to keep",
      "ugc.get.4": "Long-term collaboration if the work is good",
      "ugc.look.t": "What we look for",
      "ugc.look.1": "Solid smartphone video quality — good light and sound",
      "ugc.look.2": "Natural, believable on-camera delivery",
      "ugc.look.3": "Reliability — delivery within agreed deadlines",
      "ugc.f.t": "Apply",
      "ugc.f.name": "Name",
      "ugc.f.email": "Email",
      "ugc.f.social": "Instagram / TikTok profile",
      "ugc.f.lang": "Languages you create in",
      "ugc.f.about": "Briefly about you + links to example videos (if any)",
      "ugc.f.btn": "Send application",
      "ugc.f.note": "Submitting opens your email app with the application pre-filled. We reply within a few days if there’s a fit.",

      "sk.skip": "Skip to content",

      "cc.text": "We’d like to use cookies (analytics and Meta Pixel) to understand what works and measure our ads. Your call.",
      "cc.accept": "Accept",
      "cc.decline": "Decline",
      "cc.more": "Privacy policy",

      "nf.title": "Page not <em>found</em>.",
      "nf.text": "This page doesn’t exist — but your profit potential does.",
      "nf.btn": "Back to homepage",

      "pv.kicker": "Legal",
      "pv.title": "Privacy <em>policy</em>.",
      "pv.updated": "Last updated: July 6, 2026",
      "pv.1t": "Who we are",
      "pv.1d": "AdsMerce is a performance marketing agency for e-commerce brands. For anything related to your data, write to hello@adsmerce.com.",
      "pv.2t": "What we collect",
      "pv.2d": "Emails you send us and newsletter sign-ups (your email address). With your consent, anonymous analytics data (Google Analytics) and advertising data via Meta Pixel. To auto-detect your language, your IP country is looked up once via ipapi.co — we don’t store your IP.",
      "pv.3t": "Why we collect it",
      "pv.3d": "To reply to you, send the newsletter you asked for, understand how the site is used and measure our own advertising. We never sell or share your data.",
      "pv.4t": "Cookies & consent",
      "pv.4d": "Analytics and Meta Pixel run only after you click Accept in the cookie banner. You can change your mind anytime:",
      "pv.4btn": "Reset my cookie choice",
      "pv.5t": "Your rights",
      "pv.5d": "Under GDPR you can request access, correction or deletion of your data at any time — one email to hello@adsmerce.com is enough.",
      "pv.6t": "Third-party services",
      "pv.6d": "Google Analytics (traffic measurement), Meta Pixel (ad measurement and retargeting), ipapi.co (language auto-detection), Google Fonts (typography) and our newsletter provider once configured.",

      "ft.privacy": "Privacy policy",
      "ft.blurb": "Performance marketing agency specialized in e-commerce growth through Meta & Google Ads, creative, CRO and AI automation.",
      "ft.services": "Services",
      "ft.contact": "Contact",
      "ft.more": "More",
      "ft.blog": "Blog",
      "ft.ugc": "For UGC creators",
      "ft.rights": "All rights reserved.",
      "ft.top": "Back to top ↑"
    },
    bs: {
      "nav.services": "Usluge",
      "nav.work": "Kreative",
      "nav.results": "Rezultati",
      "nav.why": "Zašto mi",
      "nav.contact": "Kontakt",
      "nav.cta": "Zatraži besplatan audit",

      "hero.eyebrow": "Performance marketing agencija za e-commerce",
      "hero.title": "Profit,<br>ne <em>pregledi</em>.",
      "hero.lead": "Uložili smo preko €50M u Meta oglase za 20+ evropskih e-commerce brendova. Ne nagađamo, kombinujemo media buying, kreative koja zaustavlja scroll i AI automatizacija, sve u službi jedne metrike: profitabilnog rasta.",
      "hero.cta1": "Zatraži besplatan audit",
      "hero.cta2": "Pogledaj naš rad",
      "hero.chip1": "4.3× prosječni ROAS, zadnjih 12 mjeseci",
      "hero.chip2": "Meta Certified Media Buyer",

      "stats.s1": "godina performance marketinga",
      "stats.s2": "ad spend na Meta platformi",
      "stats.s3": "e-com brendova skaliranih u EU",
      "stats.s4": "prosječni blended ROAS",

      "svc.kicker": "Usluge",
      "svc.title": "Full-stack <em>e-commerce</em> rast.",
      "svc.sub": "Ne radimo samo oglase. Preuzimamo kontrolu nad cijelim funnelom kako bismo osigurali maksimalan ROAS i profitabilnost.",
      "svc.1t": "Performance marketing",
      "svc.1d": "Eksperti za Meta Ads platformu, uz Google Ads gdje donosi dodatne rezultate. Skaliramo kampanje bazirane na podacima, s fokusom na profit — ne na prazne metrike.",
      "svc.2t": "Izrada kreativa",
      "svc.2d": "Dizajniramo i produciramo video i statične oglase koji zaustavljaju scroll i konvertuju.",
      "svc.3t": "Landing stranice i CRO",
      "svc.3d": "Optimizacija stope konverzije i landing stranice koje pretvaraju klikove u kupce.",
      "svc.4t": "AI i automatizacija",
      "svc.4d": "Implementacija AI rješenja za automatizaciju procesa, personalizaciju i efikasnije vođenje e-commerce biznisa.",
      "svc.5t": "E-com growth consulting",
      "svc.5d": "Holistički pristup rastu: ponuda, cjenovna strategija, LTV i zadržavanje kupaca. Partner u rastu, ne izvođač.",

      "work.kicker": "Kreative",
      "work.title": "Kreativa je novi <em>targeting</em>.",
      "work.sub": "Pravimo video i statične oglase koji zaustavljaju scroll, prenose poruku i najvažnije - donose prodaju.",
      "work.note": "Nasumično odabrani primjeri — cijeli portfolio dostupan je na upit.",
      "work.f1": "UGC video oglas",
      "work.f2": "Product demo",
      "work.f3": "Advertorial video",
      "work.f4": "Statični i carousel",
      "work.soon": "Primjer uskoro",

      "res.kicker": "Rezultati",
      "res.title": "Rezultati koji govore <em>sami za sebe</em>.",
      "res.sub": "Transparentan prikaz performansi, direktno iz Ads Managera naših klijenata.",
      "res.m1": "blended ROAS — prosjek 12 mjeseci",
      "res.m2": "niža CPA nakon nove kreative i CRO-a",
      "res.m3": "generisanog prihoda za klijente",
      "res.shot": "Screenshot iz Ads Managera",
      "res.shot2": "Screenshot iz Ads Managera",

      "lp.kicker": "Landing stranice",
      "lp.title": "Sajtovi koji <em>konvertuju</em>.",
      "lp.sub": "Dizajniramo i optimizujemo landing stranice sa jednim jedinim ciljem — maksimalan conversion rate.",
      "lp.c1badge": "+140% stopa konverzije",
      "lp.c1t": "Redizajn e-commerce product stranice",
      "lp.c1d": "Kompletan redizajn product stranice po psihologiji kupovine — nova social-proof sekcija i jasan CTA.",
      "lp.c2badge": "Veći AOV",
      "lp.c2t": "Advertorial landing stranica",
      "lp.c2d": "Advertorial stranica koja educira kupca prije kupovine i značajno povećava prosječnu vrijednost narudžbe.",

      "why.kicker": "Zašto mi",
      "why.title": "Pouzdan partner za rast <em>e-commerce</em> biznisa.",
      "why.1t": "Meta Certified Media Buyer",
      "why.1d": "Zvanično certificirani od strane Mete za vođenje kampanja i optimizaciju budžeta.",
      "why.2t": "Evropsko iskustvo",
      "why.2d": "Uspješno skalirano 20+ e-commerce brendova širom EU tržišta.",
      "why.3t": "Odluke temeljene na podacima",
      "why.3d": "Sve počiva na čvrstim podacima. Nema nagađanja — testiranje, iteracija i post-purchase strategija.",
      "why.chart": "ukupan prihod generisan za klijente",

      "cta.kicker": "Kontakt",
      "cta.title": "Spremni za <em>sljedeći nivo</em>?",
      "cta.sub": "Izaberi opciju koja ti najviše odgovara — zatraži besplatan audit ili rezerviši 1-na-1 konsultacije za rješavanje specifičnih problema.",
      "cta.free": "Besplatno",
      "cta.a.t": "Besplatan audit",
      "cta.a.d": "5-minutni Loom video sa detaljnom analizom tvog trenutnog stanja i konkretnim koracima za poboljšanje.",
      "cta.a.1": "Analiza Meta Ads računa",
      "cta.a.2": "Pregled i kritika kreativa",
      "cta.a.3": "CRO pregled tvog sajta",
      "cta.a.4": "Identifikacija quick-win prilika",
      "cta.a.btn": "Zatraži besplatan audit",
      "cta.b.t": "Consulting poziv",
      "cta.b.d": "Direktne 1-na-1 konsultacije — strategija i rješavanje specifičnih e-commerce problema u realnom vremenu. 60 minuta, video poziv.",
      "cta.b.1": "Strategija i plan skaliranja",
      "cta.b.2": "Odgovori na tvoja konkretna pitanja",
      "cta.b.3": "Snimak poziva uključen",
      "cta.b.btn": "Zakaži poziv",

      "clients.label": "Brendovi s kojima smo radili",

      "proc.kicker": "Proces",
      "proc.title": "Od audita do <em>skaliranja</em>.",
      "proc.sub": "Jasan sistem u četiri koraka — uvijek znaš šta se dešava i zašto.",
      "proc.1t": "Audit",
      "proc.1d": "Prolazimo kroz tvoj račun, kreativu, sajt i brojke — i nalazimo gdje ostavljaš novac na stolu.",
      "proc.2t": "Strategija",
      "proc.2d": "Konkretan plan: ponuda, uglovi komunikacije, plan kreativa, struktura budžeta i KPI ciljevi.",
      "proc.3t": "Launch",
      "proc.3d": "Nove kreative i kampanje idu uživo — s trackingom postavljenim kako treba od prvog dana.",
      "proc.4t": "Skaliranje",
      "proc.4d": "Sedmično testiranje i iteracija. Skaliramo što radi, gasimo što ne radi — transparentno, uz izvještaje koje razumiješ.",

      "faq.kicker": "FAQ",
      "faq.title": "Pitanja i <em>odgovori</em>.",
      "faq.q1": "Koji je minimalni budžet za saradnju?",
      "faq.a1": "Najbolje rezultate donosimo shopovima koji već troše oko €5k+ mjesečno na oglase. Ispod toga — iskreno ti kažemo šta prvo treba popraviti, za to i služi besplatan audit.",
      "faq.q2": "Vežete li klijente dugim ugovorima?",
      "faq.a2": "Ne — radimo od mjeseca do mjeseca. Da ostaneš treba da te ubijede rezultati, a ne ugovor.",
      "faq.q3": "Kada mogu očekivati rezultate?",
      "faq.a3": "Prvi signali za 2–4 sedmice. Značajna i stabilna poboljšanja obično traju 60–90 dana, zavisno od budžeta i početnog stanja.",
      "faq.q4": "Čiji su ad account i kreative?",
      "faq.a4": "Tvoji. Sve se vrti u tvojim nalozima, a svaki materijal koji napravimo ostaje tvoj — čak i ako se raziđemo.",
      "faq.q5": "Kako počinje saradnja?",
      "faq.a5": "Besplatnim auditom. Ako vidimo potencijal, šaljemo konkretan plan. Ako ne vidimo — kažemo ti otvoreno.",
      "faq.q6": "Radite li s biznisima van e-commerca?",
      "faq.a6": "Ne — isključivo e-commerce. Upravo taj fokus je razlog zašto smo dobri u ovome.",

      "nav.blog": "Blog",
      "work.ugc": "Ti si kreator sadržaja? Prijavi se za plaćene UGC saradnje →",

      "why.4t": "Agency ad accounts",
      "why.4d": "Kampanje po potrebi vodimo na agencijskim ad account-ima preko zvaničnog Metinog partnera Aleph — dodatna stabilnost naloga i direktna ljudska podrška od Mete.",

      "faq.q7": "Šta su agency ad accounts?",
      "faq.a7": "Ad account-i obezbijeđeni preko zvaničnog Metinog regionalnog partnera (Aleph). U praksi: stabilniji nalozi, brže rješavanje problema i pristup pravoj ljudskoj podršci u Meti — a ne samo chatbotovima i redovima čekanja.",

      "news.title": "Jedna korisna ideja za e-com rast. <em>Mjesečno</em>.",
      "news.sub": "Taktike iz stvarnih kampanja — kreative, CRO, Meta i Google Ads. Bez spama, odjava kad god hoćeš.",
      "news.ph": "ti@tvojbrend.com",
      "news.btn": "Prijavi se",
      "news.ok": "Hvala — otvorio se tvoj email, samo klikni pošalji za potvrdu.",

      "blog.title": "Bilješke o <em>rastu</em>.",
      "blog.kicker": "Blog",
      "blog.sub": "Praktični tekstovi o performance marketingu, kreativi i CRO-u za e-commerce — pisani za vlasnike shopova, čitljivi i ljudima i AI alatima.",
      "blog.read": "Pročitaj tekst →",
      "blog.back": "← Svi tekstovi",

      "ugc.eyebrow": "Za kreatore",
      "ugc.title": "Snimaj UGC oglase. <em>Naplati to</em>.",
      "ugc.lead": "Produciramo oglase za e-commerce brendove širom Evrope i stalno tražimo kreatore — za videe na engleskom, njemačkom, BHS i drugim jezicima. Broj pratilaca nije bitan: plaćamo sadržaj, ne doseg.",
      "ugc.get.t": "Šta dobijaš",
      "ugc.get.1": "Plaćeno po videu — jasne cijene, dogovorene unaprijed",
      "ugc.get.2": "Brief i scenario od nas — ti se fokusiraš na snimanje",
      "ugc.get.3": "Proizvode šaljemo tebi i ostaju tvoji",
      "ugc.get.4": "Dugoročna saradnja ako je posao dobar",
      "ugc.look.t": "Šta tražimo",
      "ugc.look.1": "Solidan kvalitet videa mobitelom — dobro svjetlo i zvuk",
      "ugc.look.2": "Prirodan, uvjerljiv nastup pred kamerom",
      "ugc.look.3": "Pouzdanost — isporuka u dogovorenim rokovima",
      "ugc.f.t": "Prijavi se",
      "ugc.f.name": "Ime",
      "ugc.f.email": "Email",
      "ugc.f.social": "Instagram / TikTok profil",
      "ugc.f.lang": "Jezici na kojima snimaš",
      "ugc.f.about": "Ukratko o tebi + linkovi na primjere videa (ako ih imaš)",
      "ugc.f.btn": "Pošalji prijavu",
      "ugc.f.note": "Slanjem se otvara tvoj email sa popunjenom prijavom. Odgovaramo u roku od par dana ako postoji poklapanje.",

      "sk.skip": "Preskoči na sadržaj",

      "cc.text": "Željeli bismo koristiti kolačiće (analitika i Meta Pixel) da razumijemo šta radi i mjerimo vlastite oglase. Ti odlučuješ.",
      "cc.accept": "Prihvati",
      "cc.decline": "Odbij",
      "cc.more": "Politika privatnosti",

      "nf.title": "Stranica nije <em>pronađena</em>.",
      "nf.text": "Ova stranica ne postoji — ali tvoj potencijal za profit postoji.",
      "nf.btn": "Nazad na početnu",

      "pv.kicker": "Pravno",
      "pv.title": "Politika <em>privatnosti</em>.",
      "pv.updated": "Zadnja izmjena: 6. juli 2026.",
      "pv.1t": "Ko smo mi",
      "pv.1d": "AdsMerce je performance marketing agencija za e-commerce brendove. Za sve u vezi tvojih podataka piši na hello@adsmerce.com.",
      "pv.2t": "Šta prikupljamo",
      "pv.2d": "Emailove koje nam pošalješ i prijave na newsletter (tvoja email adresa). Uz tvoj pristanak, anonimne analitičke podatke (Google Analytics) i podatke za oglašavanje putem Meta Pixela. Za automatsko prepoznavanje jezika, država tvoje IP adrese se jednom provjerava preko ipapi.co — tvoju IP adresu ne čuvamo.",
      "pv.3t": "Zašto prikupljamo",
      "pv.3d": "Da ti odgovorimo, pošaljemo newsletter koji si tražio/la, razumijemo kako se sajt koristi i mjerimo vlastito oglašavanje. Tvoje podatke nikad ne prodajemo niti dijelimo.",
      "pv.4t": "Kolačići i pristanak",
      "pv.4d": "Analitika i Meta Pixel se pokreću tek nakon što klikneš Prihvati u banneru za kolačiće. Odluku možeš promijeniti bilo kad:",
      "pv.4btn": "Resetuj moj izbor kolačića",
      "pv.5t": "Tvoja prava",
      "pv.5d": "Po GDPR-u u svakom trenutku možeš zatražiti uvid, ispravku ili brisanje svojih podataka — dovoljan je jedan email na hello@adsmerce.com.",
      "pv.6t": "Servisi trećih strana",
      "pv.6d": "Google Analytics (mjerenje posjeta), Meta Pixel (mjerenje oglasa i retargeting), ipapi.co (automatsko prepoznavanje jezika), Google Fonts (tipografija) i newsletter servis kad bude podešen.",

      "ft.privacy": "Politika privatnosti",
      "ft.blurb": "Performance marketing agencija specijalizovana za e-commerce rast kroz Meta i Google Ads, kreative, CRO i AI automatizaciju.",
      "ft.services": "Usluge",
      "ft.contact": "Kontakt",
      "ft.more": "Ostalo",
      "ft.blog": "Blog",
      "ft.ugc": "Za UGC kreatore",
      "ft.rights": "Sva prava zadržana.",
      "ft.top": "Nazad na vrh ↑"
    }
  };

  var currentLang = "en";

  function applyLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (I18N[lang][key] !== undefined) el.placeholder = I18N[lang][key];
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });
    renderCreatives();
  }

  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { }
    if (stored && I18N[stored]) { applyLang(stored); return; }

    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 1500);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        clearTimeout(timer);
        if (data && BHS_COUNTRIES.indexOf(data.country_code) !== -1) applyLang("bs");
      })
      .catch(function () {
        clearTimeout(timer);
        var langs = navigator.languages || [navigator.language || ""];
        var isBhs = langs.some(function (l) { return /^(bs|hr|sr)/i.test(l || ""); });
        if (isBhs) applyLang("bs");
      });
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { }
      applyLang(lang);
    });
  });

  /* -------------------------------------------------------- creative grid */
  /* Drop mp4 files into assets/creative/ and set `src` (and optional
     `poster`) below, e.g. { src: "assets/creative/werkhus-ugc.mp4",
     labelKey: "work.f1" }. Tiles without src render as placeholders. */
  var CREATIVES = [
    { src: null, labelKey: "work.f1" },
    { src: null, labelKey: "work.f2" },
    { src: null, labelKey: "work.f3" },
    { src: null, labelKey: "work.f4" }
  ];

  function renderCreatives() {
    var grid = document.getElementById("creativeGrid");
    if (!grid) return;
    grid.innerHTML = "";
    CREATIVES.forEach(function (item, i) {
      var tile = document.createElement("div");
      tile.className = "creative-tile reveal in";
      var tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = I18N[currentLang][item.labelKey] || "";
      tile.appendChild(tag);

      if (item.src) {
        var video = document.createElement("video");
        video.src = item.src;
        if (item.poster) video.poster = item.poster;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";
        tile.appendChild(video);
        tile.addEventListener("click", function () {
          if (video.paused) { video.play(); } else { video.pause(); }
        });
      } else {
        var play = document.createElement("span");
        play.className = "play";
        play.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3.5v9l7.5-4.5L5 3.5Z" fill="currentColor"/></svg>';
        var label = document.createElement("span");
        label.className = "label";
        label.textContent = I18N[currentLang]["work.soon"];
        tile.appendChild(play);
        tile.appendChild(label);
      }
      grid.appendChild(tile);
    });
  }

  /* ------------------------------------------------------------ mobile nav */
  var burger = document.querySelector(".nav-burger");
  var mobileNav = document.querySelector(".nav-mobile");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
      mobileNav.classList.toggle("open", !open);
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        burger.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
        mobileNav.classList.remove("open");
      });
    });
  }

  /* ----------------------------------------------------------- newsletter */
  /* When you pick a provider (Mailchimp, Brevo, Buttondown…), paste its
     form action URL here and the form will POST to it directly. While it
     is empty, submissions fall back to a pre-filled email. */
  var NEWSLETTER_ENDPOINT = "";

  var newsForm = document.getElementById("newsletterForm");
  if (newsForm) {
    newsForm.addEventListener("submit", function (e) {
      var email = (newsForm.querySelector("input[type=email]") || {}).value || "";
      if (NEWSLETTER_ENDPOINT) {
        newsForm.action = NEWSLETTER_ENDPOINT;
        newsForm.method = "POST";
        return;
      }
      e.preventDefault();
      window.location.href = "mailto:hello@adsmerce.com?subject=" +
        encodeURIComponent("Newsletter signup") +
        "&body=" + encodeURIComponent("Please add me to the AdsMerce newsletter: " + email);
      var ok = document.getElementById("newsOk");
      if (ok) { ok.hidden = false; }
    });
  }

  /* ---------------------------------------------------------- UGC applies */
  var ugcForm = document.getElementById("ugcForm");
  if (ugcForm) {
    ugcForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (name) { return (ugcForm.querySelector('[name="' + name + '"]') || {}).value || "-"; };
      var body =
        "Name: " + v("name") + "\n" +
        "Email: " + v("email") + "\n" +
        "Profile: " + v("social") + "\n" +
        "Languages: " + v("langs") + "\n\n" +
        "About / examples:\n" + v("about") + "\n";
      window.location.href = "mailto:hello@adsmerce.com?subject=" +
        encodeURIComponent("UGC creator application — " + v("name")) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* --------------------------------------------------------------- reveal */
  var observer = null;
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* --------------------------------------------------- analytics & pixel */
  /* Paste your IDs here when ready. While both are empty, no tracking code
     loads and no cookie banner is shown. Tracking only ever loads after the
     visitor clicks Accept (GDPR consent). */
  var GA4_ID = "";        /* e.g. "G-XXXXXXXXXX" */
  var META_PIXEL_ID = ""; /* e.g. "123456789012345" */

  var CONSENT_KEY = "adsmerce_consent";
  /* Path prefix so the privacy link works from subfolders (blog/) too. */
  var ROOT = (function () {
    var s = document.querySelector('script[src$="main.js"]');
    return s ? s.getAttribute("src").replace("js/main.js", "") : "";
  })();

  function loadTracking() {
    if (window.__amTracked) return;
    window.__amTracked = true;
    if (GA4_ID) {
      var g = document.createElement("script");
      g.async = true;
      g.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", GA4_ID, { anonymize_ip: true });
    }
    if (META_PIXEL_ID) {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
        n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
        s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
    }
  }

  function buildConsentBanner() {
    var b = document.createElement("div");
    b.className = "consent";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Cookie consent");
    b.innerHTML =
      '<p data-i18n="cc.text">' + I18N[currentLang]["cc.text"] + "</p>" +
      '<div class="consent-actions">' +
      '<button type="button" class="btn btn-green btn-sm" id="ccAccept" data-i18n="cc.accept">' + I18N[currentLang]["cc.accept"] + "</button>" +
      '<button type="button" class="btn btn-ghost btn-sm" id="ccDecline" data-i18n="cc.decline">' + I18N[currentLang]["cc.decline"] + "</button>" +
      '<a href="' + ROOT + 'privacy.html" data-i18n="cc.more">' + I18N[currentLang]["cc.more"] + "</a>" +
      "</div>";
    document.body.appendChild(b);
    document.getElementById("ccAccept").addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "granted"); } catch (e) { }
      b.remove();
      loadTracking();
    });
    document.getElementById("ccDecline").addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "denied"); } catch (e) { }
      b.remove();
    });
  }

  /* Called from privacy.html — lets visitors change their cookie choice. */
  window.adsmerceResetConsent = function () {
    try { localStorage.removeItem(CONSENT_KEY); } catch (e) { }
    location.reload();
  };

  if (GA4_ID || META_PIXEL_ID) {
    var consent = null;
    try { consent = localStorage.getItem(CONSENT_KEY); } catch (e) { }
    if (consent === "granted") {
      loadTracking();
    } else if (!consent) {
      buildConsentBanner();
    }
  }

  /* ----------------------------------------------------------------- init */
  applyLang("en");
  detectLang();
})();
