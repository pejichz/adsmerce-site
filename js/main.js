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
      "nav.why": "Why AdsMerce",
      "nav.contact": "Contact",
      "nav.cta": "Get a free audit",

      "hero.eyebrow": "Performance marketing for e-commerce brands",
      "hero.title": "Profit,<br>not <em>pageviews</em>.",
      "hero.lead": "We help e-commerce brands scale sales profitably through performance marketing, continuous creative production and CRO. €50M+ in ad budget managed for 20+ brands across Europe.",
      "hero.cta1": "Get a free audit",
      "hero.cta2": "See the results",
      "hero.chip1": "4.3× average ROAS · last 12 months",
      "hero.chip2": "Meta Certified Media Buying Professional",

      "stats.s1": "years of performance marketing experience",
      "stats.s2": "ad budget managed on Meta",
      "stats.s3": "e-commerce brands across Europe",
      "stats.s4": "average ROAS, last 12 months",

      "svc.kicker": "Services",
      "svc.title": "From ad to <em>profitable purchase</em>.",
      "svc.sub": "We don’t just optimize campaigns. We connect advertising, creative production and store optimization so more clicks become profitable purchases.",
      "svc.1t": "Performance marketing",
      "svc.1d": "Meta Ads are the core of our work, while we bring in Google and TikTok where they can drive additional profitable growth. We plan budgets, set a clear campaign structure and optimize for sales and profit, not metrics that only look good in reports.",
      "svc.2t": "Creative production",
      "svc.2d": "We develop creative concepts and produce UGC videos, product-demo ads, static visuals and other formats. Every creative is a structured test, with a clear hypothesis, goal and measurable result.",
      "svc.3t": "Landing pages & CRO",
      "svc.3d": "We analyze the path from click to purchase. We improve and test the offer, product pages, trust elements, CTAs and the other places where users most often drop off.",
      "svc.4t": "Data, AI & automation",
      "svc.4d": "We bring in AI and automation where they speed up analysis, simplify routine processes and help us spot opportunities and make better decisions faster. We build dashboards and tools for reporting, stock tracking and demand forecasting, so your team has more time for work that directly drives growth. The focus is real business impact, not chasing trends.",
      "svc.5t": "Growth strategy & e-commerce operations",
      "svc.5d": "We work on the offer, pricing, average order value, LTV, customer retention, and stock and procurement planning based on sales data. You get a partner who understands the whole store economics and sees the bigger picture, not just the numbers inside Ads Manager.",

      "work.kicker": "Work",
      "work.title": "Creative is the new <em>targeting</em>.",
      "work.sub": "We create video and static ads that grab attention, present the offer clearly, and give the algorithm more quality opportunities to find buyers.",
      "work.note": "A selection of recently created ads. Full portfolio available on request.",
      "work.f1": "UGC video ad",
      "work.f2": "Product demo",
      "work.f3": "AI-generated video",
      "work.f4": "Static ads",
      "work.soon": "Sample coming soon",

      "res.kicker": "Results",
      "res.title": "Numbers, not <em>promises</em>.",
      "res.sub": "Real, unedited exports from Meta Ads Manager. Sensitive data hidden for confidentiality.",
      "res.m1": "average ROAS · last 12 months",
      "res.m2": "lower CPA after new creative & CRO",
      "res.m3": "revenue recorded across selected clients",
      "res.shotnote": "Results are shown from real client accounts. Some client and campaign names are hidden for confidentiality.",
      "res.cap1": "Portfolio of active e-commerce accounts · last 30 days",
      "res.cap2": "DokiShop: scaling to 15+ European markets · full engagement",
      "res.cap3": "Werkhus: building and scaling a brand from zero · campaign results, full engagement",
      "res.cap4": "Providio d.o.o. · active campaigns · last 30 days",

      "lp.kicker": "Landing pages",
      "lp.title": "Websites that <em>convert</em>.",
      "lp.sub": "We design and optimize landing pages with one single goal: maximum conversion rate.",
      "lp.c1badge": "+140% conversion rate",
      "lp.c1t": "E-commerce product page redesign",
      "lp.c1d": "A complete rebuild of the product page around buying psychology, with a new social-proof section and a clear CTA.",
      "lp.c2badge": "Higher AOV",
      "lp.c2t": "Advertorial landing page",
      "lp.c2d": "An advertorial page that educates the buyer before the purchase and significantly raises average order value.",

      "why.kicker": "Why AdsMerce",
      "why.title": "One partner for ads, store and <em>profitable growth</em>.",
      "why.sub": "A campaign can’t fix a weak offer, a bad ad or a page where the buyer gives up. So we look at the entire path to purchase and solve the problem where it actually starts.",
      "why.1t": "Profit before vanity numbers",
      "why.1d": "We don’t just look at how much was sold. We track what a new purchase costs, what an order is worth and what’s left after ad spend. We scale budget only when the math makes sense.",
      "why.2t": "Experience you can verify",
      "why.2d": "You get senior, hands-on work based on 8+ years with e-commerce accounts across Europe. Strategy and key decisions aren’t handed to juniors after you sign.",
      "why.3t": "Your accounts stay yours",
      "why.3d": "We run campaigns from accounts you own. Data, ads and every asset we produce stay yours, no matter how long we work together.",
      "why.chart": "revenue recorded across selected clients",

      "founder.kicker": "The founder",
      "founder.title": "Senior experience, directly on your account.",
      "founder.body1": "AdsMerce is led by Zoran Pejić, a performance marketer with 8+ years of hands-on experience scaling e-commerce brands across European markets.",
      "founder.body2": "Strategy and key decisions aren’t handed off to juniors. When needed, we bring in vetted creators, designers and technical collaborators, while performance and the project’s direction stay in the founder’s hands.",
      "founder.name": "Zoran Pejić",
      "founder.role": "Founder",

      "cta.kicker": "Contact",
      "cta.title": "Choose how you want to <em>start</em>.",
      "cta.sub": "Apply for a free audit if you’re considering a long-term collaboration, or book a 1-on-1 consultation if you want to solve a specific e-commerce problem.",
      "cta.free": "Free",
      "cta.a.t": "Free audit",
      "cta.a.d": "A personalized audit with the key findings and concrete steps to solve your biggest problem.",
      "cta.a.1": "Meta Ads account & results analysis",
      "cta.a.2": "Review of creative & messaging angles",
      "cta.a.3": "CRO review of key pages",
      "cta.a.4": "Identification of the biggest growth opportunity",
      "cta.a.btn": "Apply for a free audit",
      "cta.a.note": "For e-commerce brands where we see real potential for collaboration.",
      "cta.b.badge": "60 min",
      "cta.b.t": "1-on-1 consultation",
      "cta.b.d": "Direct 1-on-1 consulting to analyze and solve a specific e-commerce problem. Come with questions, leave with clear next steps.",
      "cta.b.1": "Analysis of a specific problem",
      "cta.b.2": "Answers to your questions",
      "cta.b.3": "A plan of next steps",
      "cta.b.4": "Recording included",
      "cta.b.btn": "Book a consultation",

      "clients.label": "Brands we’ve worked with",

      "proc.kicker": "How we work",
      "proc.title": "What happens in the first <em>90 days</em>?",
      "proc.sub": "The most important fixes and tests start immediately. Over the first three months we set up the system, verify what actually works and create the conditions for controlled budget scaling. Fixes start immediately, scaling comes once the data confirms the math makes sense.",
      "proc.1t": "Week 1: audit & priorities",
      "proc.1d": "We analyze campaigns, tracking, creative, the offer, product economics and key store pages. We define the biggest opportunities and the order in which we tackle them.",
      "proc.2t": "First two weeks: system & quick fixes",
      "proc.2d": "We fix measurement, campaign structure and reporting. In parallel we launch the first optimizations and prepare the plan for new ads.",
      "proc.3t": "Month 1–2: testing & learning",
      "proc.3d": "We test angles, formats, offers and key page elements. We direct budget toward the tests that show real potential.",
      "proc.4t": "Month 2–3: optimization & scaling",
      "proc.4d": "Once results are stable enough, we gradually increase budget. In parallel we keep testing so growth doesn’t depend on a single ad or campaign.",

      "faq.kicker": "FAQ",
      "faq.title": "Questions, <em>answered</em>.",
      "faq.q1": "How long is the initial engagement?",
      "faq.a1": "We set the initial engagement at three months. The most important fixes and first tests start immediately, and 90 days gives us enough time to verify what works and scale results based on data. After that we review performance and agree on continuing. Past the initial period, the collaboration continues month to month.",
      "faq.q2": "How much ad budget do I need?",
      "faq.a2": "There’s no single number that fits every store. The budget you need depends on the market, product price, margin, goals and the scope of testing. That’s why the application asks how much you currently invest or plan to invest. Based on that we assess what plan is realistic and whether we can genuinely help you at this stage. If it doesn’t make sense yet, we’ll tell you openly and suggest what to fix first.",
      "faq.q3": "When can I expect results?",
      "faq.a3": "We usually start the first optimizations and tests within the first week. Early signals typically appear within the first two to four weeks, while more reliable conclusions and stable scaling usually take one to two months. The pace depends on budget, how much existing data there is, the offer and the account’s starting point.",
      "faq.q4": "Who owns the ad accounts and creatives?",
      "faq.a4": "You do. We run campaigns in accounts you own, and every ad and asset we produce stays yours even after the collaboration ends.",
      "faq.q5": "How does the collaboration start?",
      "faq.a5": "It starts with a free-audit application. We review the ad account and store, goals, current results and budget to assess where the biggest potential is and whether we’re a good fit. If we believe we can bring concrete value, we get back to you with a proposal for next steps.",
      "faq.q6": "Do you work with businesses outside e-commerce?",
      "faq.a6": "No. We focus exclusively on e-commerce. That specialization lets us spot problems faster, make better decisions and apply experience from similar situations and markets.",

      "nav.blog": "Blog",
      "work.ugc": "Are you a content creator? Apply for paid UGC collaborations →",

      "why.4t": "You always know what we do and why",
      "why.4d": "You get a clear view of results, completed tests and the next priorities. No hiding behind complicated reports and vague explanations.",

      "faq.q7": "What are agency ad accounts?",
      "faq.a7": "Ad accounts available through Meta’s official regional partner. When they make sense for a specific brand, they can provide an extra support channel and easier communication in case of technical issues or restrictions.",

      "news.title": "One useful e-com growth idea. <em>Monthly</em>.",
      "news.sub": "Tactics from real campaigns: creative, CRO, Meta and Google Ads. No spam, unsubscribe anytime.",
      "news.ph": "you@brand.com",
      "news.btn": "Subscribe",
      "news.ok": "Thanks. Your email app just opened, hit send to confirm.",

      "blog.title": "Growth <em>notes</em>.",
      "blog.kicker": "Blog",
      "blog.sub": "Practical writing on performance marketing, creative and CRO for e-commerce, written for store owners and readable by humans and AI alike.",
      "blog.read": "Read article →",
      "blog.back": "← All articles",

      "ugc.eyebrow": "For creators",
      "ugc.title": "Create UGC ads<br>and <em>get paid per video</em>.",
      "ugc.lead1": "We send the product, the brief and clear guidelines. You film natural video content from home and receive an agreed fee per video.",
      "ugc.lead2": "You don’t need a large following and you don’t have to post anything on your own profile.",
      "ugc.cta": "Apply as a creator",
      "ugc.ctanote": "Applying is free. Price, deadline and terms are agreed before filming.",
      "ugc.how.t": "How the collaboration <em>works</em>.",
      "ugc.s1t": "You send an application",
      "ugc.s1d": "Tell us a bit about yourself, the languages you speak and the types of content you can film.",
      "ugc.s2t": "You get a project offer",
      "ugc.s2d": "When we have a product that fits your profile, we send you the brief, deadline, requirements and the proposed fee.",
      "ugc.s3t": "You film the content",
      "ugc.s3d": "The product arrives at your address, together with examples and clear filming guidelines.",
      "ugc.s4t": "You get paid",
      "ugc.s4d": "Once you deliver the agreed content, payment is made under the terms confirmed before the project started. You can usually keep the product.",
      "ugc.get.t": "What you get",
      "ugc.get.1": "Payment per agreed video",
      "ugc.get.2": "Clear examples and filming guidelines",
      "ugc.get.3": "The product delivered free of charge",
      "ugc.get.4": "The possibility of long-term collaboration",
      "ugc.get.5": "Feedback that can help you improve your content",
      "ugc.look.t": "What we look for",
      "ugc.look.1": "A natural on-camera presence",
      "ugc.look.2": "Clear vertical video, good light and clean sound",
      "ugc.look.3": "Following the brief and agreed deadlines",
      "ugc.look.4": "Reliable and timely communication",
      "ugc.look.5": "That you’re 18-65+ years old",
      "ugc.exp": "Previous UGC experience is a plus, but not required.",
      "ugc.form.t": "Application <em>form</em>.",
      "ugc.faq.t": "Questions, <em>answered</em>.",
      "ugc.q1": "Do I need a large following?",
      "ugc.a1": "No. We pay for the content you create, not access to your audience.",
      "ugc.q2": "Do I have to post the video on my own profile?",
      "ugc.a2": "No. You film and deliver content that the brand uses in its ads.",
      "ugc.q3": "Do I need previous experience?",
      "ugc.a3": "It’s not required. Sample videos help us assess your on-camera presence, filming quality and communication style.",
      "ugc.q4": "How much is one video paid?",
      "ugc.a4": "The fee depends on the product, the complexity of the brief and the number of videos. You always know the exact amount before you accept a project.",
      "ugc.q5": "Where will my video be used?",
      "ugc.a5": "Most often in paid ads on Meta platforms (Facebook and Instagram) and other digital channels.",
      "ugc.q6": "When do I get paid?",
      "ugc.a6": "Payment is made within 7 days of delivering the final content.",
      "ugc.f.t": "Apply",

      "sk.skip": "Skip to content",

      "cc.text": "We’d like to use cookies (analytics and Meta Pixel) to understand what works and measure our ads. Your call.",
      "cc.accept": "Accept",
      "cc.decline": "Decline",
      "cc.more": "Privacy policy",

      "nf.title": "Page not <em>found</em>.",
      "nf.text": "This page doesn’t exist, but your profit potential does.",
      "nf.btn": "Back to homepage",

      "pv.kicker": "Legal",
      "pv.title": "Privacy <em>policy</em>.",
      "pv.updated": "Last updated: July 6, 2026",
      "pv.1t": "Who we are",
      "pv.1d": "AdsMerce is a performance marketing agency for e-commerce brands. For anything related to your data, write to hello@adsmerce.com.",
      "pv.2t": "What we collect",
      "pv.2d": "Emails you send us and newsletter sign-ups (your email address). With your consent, anonymous analytics data (Google Analytics) and advertising data via Meta Pixel. To auto-detect your language, your IP country is looked up once via ipapi.co. We don’t store your IP.",
      "pv.3t": "Why we collect it",
      "pv.3d": "To reply to you, send the newsletter you asked for, understand how the site is used and measure our own advertising. We never sell or share your data.",
      "pv.4t": "Cookies & consent",
      "pv.4d": "Analytics and Meta Pixel run only after you click Accept in the cookie banner. You can change your mind anytime:",
      "pv.4btn": "Reset my cookie choice",
      "pv.5t": "Your rights",
      "pv.5d": "Under GDPR you can request access, correction or deletion of your data at any time: one email to hello@adsmerce.com is enough.",
      "pv.6t": "Third-party services",
      "pv.6d": "Google Analytics (traffic measurement), Meta Pixel (ad measurement and retargeting), ipapi.co (language auto-detection), Google Fonts (typography), Wistia (video hosting, loads only when you click play on a video), Tally (creator application form) and our newsletter provider once configured.",

      "ft.privacy": "Privacy policy",
      "ft.cookie": "Cookie policy",
      "ft.blurb": "Performance marketing agency specialized in e-commerce growth through Meta, Google and TikTok Ads, creative, CRO and AI automation.",
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
      "nav.why": "Zašto AdsMerce",
      "nav.contact": "Kontakt",
      "nav.cta": "Zatraži besplatan audit",

      "hero.eyebrow": "Performance marketing za e-commerce brendove",
      "hero.title": "Profit,<br>ne <em>pregledi</em>.",
      "hero.lead": "Pomažemo e-commerce brendovima da profitabilno skaliraju prodaju kroz performance marketing, kontinuiranu produkciju kreativa i CRO. Iza nas je više od €50M oglasnog budžeta kojim smo upravljali za 20+ brendova širom Evrope.",
      "hero.cta1": "Zatraži besplatan audit",
      "hero.cta2": "Pogledaj rezultate",
      "hero.chip1": "4,3× prosječni ROAS · posljednjih 12 mjeseci",
      "hero.chip2": "Meta Certified Media Buying Professional",

      "stats.s1": "godina iskustva u performance marketingu",
      "stats.s2": "oglasnog budžeta na Meta platformi",
      "stats.s3": "e-commerce brendova širom Evrope",
      "stats.s4": "prosječni ROAS u zadnjih 12 mjeseci",

      "svc.kicker": "Usluge",
      "svc.title": "Od oglasa do <em>profitabilne kupovine</em>.",
      "svc.sub": "Ne optimizujemo samo kampanje. Povezujemo oglašavanje, produkciju kreativa i optimizaciju shopa kako bi više klikova postalo profitabilna kupovina.",
      "svc.1t": "Performance marketing",
      "svc.1d": "Meta Ads su u fokusu našeg rada, dok Google i TikTok uključujemo tamo gdje mogu donijeti dodatni profitabilan rast. Planiramo budžete, postavljamo jasnu strukturu kampanja i optimizujemo prema prodaji i profitu, a ne prema metrikama koje dobro izgledaju samo u izvještajima.",
      "svc.2t": "Izrada kreativa",
      "svc.2d": "Razvijamo kreativne koncepte i produciramo UGC videe, product demo oglase, statične vizuale i druge formate. Svaku kreativu razvijamo kao strukturisan test, sa jasnom hipotezom, ciljem i mjerljivim rezultatom.",
      "svc.3t": "Landing stranice i CRO",
      "svc.3d": "Analiziramo put od klika do kupovine. Unapređujemo i testiramo ponudu, stranice proizvoda, elemente povjerenja, CTA elemente i druga mjesta na kojima korisnici najčešće odustaju od kupovine.",
      "svc.4t": "Podaci, AI i automatizacija",
      "svc.4d": "AI i automatizaciju uvodimo tamo gdje može ubrzati analizu, pojednostaviti rutinske procese i pomoći nam da brže prepoznamo prilike i donosimo kvalitetnije odluke. Razvijamo dashboarde i alate za izvještavanje, praćenje zaliha i predikciju buduće potražnje, kako bi tvoj tim imao više vremena za posao koji direktno doprinosi rastu. Fokus je na konkretnom poslovnom učinku, a ne na praćenju trendova.",
      "svc.5t": "Strategija rasta i e-commerce operacije",
      "svc.5d": "Radimo na ponudi, cijenama, prosječnoj vrijednosti narudžbe, LTV-u, zadržavanju kupaca te planiranju zaliha i nabavke na osnovu prodajnih podataka. Dobijaš partnera koji razumije cijelu ekonomiku shopa i gleda širu sliku, ne samo rezultate unutar Ads Managera.",

      "work.kicker": "Kreative",
      "work.title": "Kreativa je novi <em>targeting</em>.",
      "work.sub": "Kreiramo video i statične oglase koji privlače pažnju, jasno predstavljaju ponudu i daju algoritmu više kvalitetnih prilika za pronalazak kupaca.",
      "work.note": "Izbor nedavno kreiranih oglasa. Kompletan portfolio dostupan je na upit.",
      "work.f1": "UGC video oglas",
      "work.f2": "Product demo",
      "work.f3": "AI-generisani video",
      "work.f4": "Statični oglasi",
      "work.soon": "Primjer uskoro",

      "res.kicker": "Rezultati",
      "res.title": "Brojevi, ne <em>obećanja</em>.",
      "res.sub": "Stvarni, neizmijenjeni izvještaji iz Meta Ads Managera. Osjetljivi podaci sakriveni su radi povjerljivosti.",
      "res.m1": "prosječni ROAS · posljednjih 12 mjeseci",
      "res.m2": "niži CPA nakon novih kreativa i CRO optimizacije",
      "res.m3": "prihoda evidentiranog kod odabranih klijenata",
      "res.shotnote": "Rezultati su prikazani iz stvarnih klijentskih računa. Neka od imena klijenata i kampanja sakrivena su radi povjerljivosti.",
      "res.cap1": "Portfolio aktivnih e-commerce računa · posljednjih 30 dana",
      "res.cap2": "DokiShop: skaliranje na 15+ evropskih tržišta · cijeli period saradnje",
      "res.cap3": "Werkhus: razvoj i skaliranje brenda od nule · rezultati kampanja za cijeli period saradnje",
      "res.cap4": "Providio d.o.o. · aktivne kampanje · posljednjih 30 dana",

      "lp.kicker": "Landing stranice",
      "lp.title": "Sajtovi koji <em>konvertuju</em>.",
      "lp.sub": "Dizajniramo i optimizujemo landing stranice sa jednim jedinim ciljem: maksimalan conversion rate.",
      "lp.c1badge": "+140% stopa konverzije",
      "lp.c1t": "Redizajn e-commerce product stranice",
      "lp.c1d": "Kompletan redizajn product stranice po psihologiji kupovine, uz novu social-proof sekciju i jasan CTA.",
      "lp.c2badge": "Veći AOV",
      "lp.c2t": "Advertorial landing stranica",
      "lp.c2d": "Advertorial stranica koja educira kupca prije kupovine i značajno povećava prosječnu vrijednost narudžbe.",

      "why.kicker": "Zašto AdsMerce",
      "why.title": "Jedan partner za oglase, shop i <em>profitabilan rast</em>.",
      "why.sub": "Kampanja ne može popraviti slabu ponudu, loš oglas ili stranicu na kojoj kupac odustane. Zato gledamo cijeli put do kupovine i rješavamo problem tamo gdje stvarno nastaje.",
      "why.1t": "Profit prije praznih brojeva",
      "why.1d": "Ne gledamo samo koliko je prodano. Pratimo koliko košta nova kupovina, koliko vrijedi narudžba i šta ostaje nakon troška oglasa. Budžet povećavamo tek kada računica ima smisla.",
      "why.2t": "Iskustvo koje možeš provjeriti",
      "why.2d": "Dobijaš senior, hands-on pristup zasnovan na više od osam godina rada sa e-commerce računima širom Evrope. Strategiju i ključne odluke ne prebacujemo na juniore nakon potpisivanja saradnje.",
      "why.3t": "Tvoji računi ostaju tvoji",
      "why.3d": "Kampanje vodimo iz računa koje ti posjeduješ. Podaci, oglasi i svi materijali koje napravimo ostaju tvoji, bez obzira na trajanje saradnje.",
      "why.chart": "prihoda evidentiranog kod odabranih klijenata",

      "founder.kicker": "Osnivač",
      "founder.title": "Senior iskustvo, direktno na tvom projektu.",
      "founder.body1": "AdsMerce vodi Zoran Pejić, performance marketer sa više od osam godina iskustva u skaliranju e-commerce brendova na evropskim tržištima.",
      "founder.body2": "Strategiju i ključne odluke ne prebacujemo na juniore. Po potrebi uključujemo provjerene kreatore, dizajnere i tehničke saradnike, dok performance i smjer projekta ostaju direktno vođeni.",
      "founder.name": "Zoran Pejić",
      "founder.role": "Osnivač",

      "cta.kicker": "Kontakt",
      "cta.title": "Odaberi kako želiš da <em>krenemo</em>.",
      "cta.sub": "Prijavi se za besplatan audit ako razmatraš dugoročnu saradnju ili rezerviši 1-na-1 konsultacije ako želiš riješiti konkretan e-commerce problem.",
      "cta.free": "Besplatno",
      "cta.a.t": "Besplatan audit",
      "cta.a.d": "Personalizovani audit sa najvažnijim nalazima i konkretnim koracima za rješenje najvećeg problema.",
      "cta.a.1": "Analiza Meta Ads računa i rezultata",
      "cta.a.2": "Pregled kreativa i komunikacijskih uglova",
      "cta.a.3": "CRO pregled ključnih stranica",
      "cta.a.4": "Identifikacija najveće prilike za rast",
      "cta.a.btn": "Prijavi se za besplatan audit",
      "cta.a.note": "Namijenjeno e-commerce brendovima kod kojih vidimo realan potencijal za saradnju.",
      "cta.b.badge": "60 min",
      "cta.b.t": "1-na-1 konsultacije",
      "cta.b.d": "Direktne 1-na-1 konsultacije za analizu i rješavanje konkretnog e-commerce problema. Dolaziš s pitanjima, odlaziš s jasnim narednim koracima.",
      "cta.b.1": "Analiza konkretnog problema",
      "cta.b.2": "Odgovori na tvoja pitanja",
      "cta.b.3": "Plan narednih koraka",
      "cta.b.4": "Snimak poziva uključen",
      "cta.b.btn": "Rezerviši konsultacije",

      "clients.label": "Brendovi s kojima smo radili",

      "proc.kicker": "Kako radimo",
      "proc.title": "Šta se dešava u prvih <em>90 dana</em>?",
      "proc.sub": "Najvažnije korekcije i testovi kreću odmah. Tokom prva tri mjeseca postavljamo sistem, provjeravamo šta stvarno radi i stvaramo uslove za kontrolisano povećavanje budžeta. Korekcije kreću odmah, skaliranje dolazi kada podaci potvrde da računica ima smisla.",
      "proc.1t": "Prva sedmica: audit i prioriteti",
      "proc.1d": "Analiziramo kampanje, tracking, kreative, ponudu, ekonomiku proizvoda i ključne stranice shopa. Definišemo najveće prilike i redoslijed kojim ih rješavamo.",
      "proc.2t": "Prve dvije sedmice: sistem i brze korekcije",
      "proc.2d": "Uređujemo mjerenje, strukturu kampanja i izvještavanje. Paralelno pokrećemo prve optimizacije i pripremamo plan novih oglasa.",
      "proc.3t": "Prvi i drugi mjesec: testiranje i učenje",
      "proc.3d": "Testiramo komunikacijske uglove, formate, ponude i ključne elemente stranica. Budžet usmjeravamo prema testovima koji pokazuju stvaran potencijal.",
      "proc.4t": "Drugi i treći mjesec: optimizacija i skaliranje",
      "proc.4d": "Kada rezultati postanu dovoljno stabilni, postepeno povećavamo budžet. Paralelno nastavljamo s novim testovima kako rast ne bi zavisio od jednog oglasa ili kampanje.",

      "faq.kicker": "FAQ",
      "faq.title": "Pitanja i <em>odgovori</em>.",
      "faq.q1": "Koliko traje početna saradnja?",
      "faq.a1": "Početni angažman ugovaramo na tri mjeseca. Najvažnije korekcije i prvi testovi kreću odmah, dok nam 90 dana daje dovoljno vremena da provjerimo šta radi i skaliramo rezultat na osnovu podataka. Nakon toga analiziramo učinak i dogovaramo nastavak saradnje. Nakon početnog perioda saradnja se nastavlja iz mjeseca u mjesec.",
      "faq.q2": "Koliki budžet za oglašavanje je potreban?",
      "faq.a2": "Ne postoji iznos koji odgovara svakom shopu. Potreban budžet zavisi od tržišta, cijene proizvoda, marže, ciljeva i obima testiranja. Zato u prijavi pitamo koliko trenutno ulažeš ili planiraš ulagati. Na osnovu toga procjenjujemo kakav je plan realan i možemo li ti u ovoj fazi zaista pomoći. Ako saradnja još nema smisla, reći ćemo ti to otvoreno i predložiti šta prvo treba riješiti.",
      "faq.q3": "Kada mogu očekivati rezultate?",
      "faq.a3": "Prve optimizacije i testovi najčešće pokrećemo tokom prve sedmice. Rani signali obično se pojavljuju kroz prve dvije do četiri sedmice, dok su za pouzdanije zaključke i stabilnije skaliranje najčešće potrebna jedan do dva mjeseca. Tempo zavisi od budžeta, količine postojećih podataka, ponude i početnog stanja računa.",
      "faq.q4": "Čiji su ad accounti i kreative?",
      "faq.a4": "Tvoji. Kampanje vodimo u računima koje ti posjeduješ, a svi oglasi i materijali koje napravimo ostaju tvoji i nakon završetka saradnje.",
      "faq.q5": "Kako počinje saradnja?",
      "faq.a5": "Saradnja počinje prijavom za besplatan audit. Pregledamo ad account i shop, ciljeve, trenutne rezultate i budžet kako bismo procijenili gdje postoji najveći potencijal i da li smo dobar fit. Ako vjerujemo da možemo donijeti konkretnu vrijednost, javljamo ti se sa prijedlogom narednih koraka.",
      "faq.q6": "Radite li s biznisima van e-commercea?",
      "faq.a6": "Ne. Fokusirani smo isključivo na e-commerce. Ta specijalizacija nam omogućava da brže prepoznamo probleme, donosimo kvalitetnije odluke i primjenjujemo iskustvo iz sličnih situacija i tržišta.",

      "nav.blog": "Blog",
      "work.ugc": "Ti si kreator sadržaja? Prijavi se za plaćene UGC saradnje →",

      "why.4t": "Uvijek znaš šta radimo i zašto",
      "why.4d": "Dobijaš jasan pregled rezultata, završenih testova i sljedećih prioriteta. Bez skrivanja iza komplikovanih izvještaja i nejasnih objašnjenja.",

      "faq.q7": "Šta su agency ad accounti?",
      "faq.a7": "To su oglasni računi dostupni preko zvaničnog Metinog regionalnog partnera. Kada imaju smisla za konkretan brend, mogu omogućiti dodatni kanal podrške i lakšu komunikaciju u slučaju tehničkih problema ili restrikcija.",

      "news.title": "Jedna korisna ideja za e-com rast. <em>Mjesečno</em>.",
      "news.sub": "Taktike iz stvarnih kampanja: kreative, CRO, Meta i Google Ads. Bez spama, odjava kad god hoćeš.",
      "news.ph": "ti@tvojbrend.com",
      "news.btn": "Prijavi se",
      "news.ok": "Hvala. Otvorio se tvoj email, samo klikni pošalji za potvrdu.",

      "blog.title": "Bilješke o <em>rastu</em>.",
      "blog.kicker": "Blog",
      "blog.sub": "Praktični tekstovi o performance marketingu, kreativi i CRO-u za e-commerce, pisani za vlasnike shopova i čitljivi i ljudima i AI alatima.",
      "blog.read": "Pročitaj tekst →",
      "blog.back": "← Svi tekstovi",

      "ugc.eyebrow": "Za kreatore",
      "ugc.title": "Snimaj UGC oglase<br>i <em>zaradi po videu</em>.",
      "ugc.lead1": "Mi šaljemo proizvod, brief i jasne smjernice. Ti snimaš prirodan video sadržaj od kuće i dobijaš dogovorenu naknadu po videu.",
      "ugc.lead2": "Nije ti potreban veliki broj pratilaca i ne moraš objavljivati sadržaj na svom profilu.",
      "ugc.cta": "Prijavi se kao kreator",
      "ugc.ctanote": "Prijava je besplatna. Cijenu, rok i uslove dogovaramo prije snimanja.",
      "ugc.how.t": "Kako saradnja <em>izgleda</em>.",
      "ugc.s1t": "Pošalješ prijavu",
      "ugc.s1d": "Kažeš nam nešto o sebi, jezicima koje govoriš i vrstama sadržaja koje možeš snimati.",
      "ugc.s2t": "Dobiješ ponudu za projekat",
      "ugc.s2d": "Kada imamo proizvod koji odgovara tvom profilu, šaljemo ti brief, rok, zahtjeve i predloženu naknadu.",
      "ugc.s3t": "Snimiš sadržaj",
      "ugc.s3d": "Proizvod dobijaš na adresu, zajedno sa primjerima i jasnim smjernicama za snimanje.",
      "ugc.s4t": "Dobiješ isplatu",
      "ugc.s4d": "Nakon što dostaviš dogovoreni sadržaj, isplata se vrši prema uslovima potvrđenim prije početka projekta. Proizvod najčešće možeš zadržati.",
      "ugc.get.t": "Šta dobijaš",
      "ugc.get.1": "Plaćanje po dogovorenom videu",
      "ugc.get.2": "Jasne primjere i smjernice za snimanje",
      "ugc.get.3": "Proizvod dostavljen bez troška",
      "ugc.get.4": "Mogućnost dugoročne saradnje",
      "ugc.get.5": "Povratne informacije koje ti mogu pomoći da unaprijediš sadržaj",
      "ugc.look.t": "Šta tražimo",
      "ugc.look.1": "Prirodan nastup pred kamerom",
      "ugc.look.2": "Jasan vertikalni video, dobro svjetlo i čist zvuk",
      "ugc.look.3": "Poštovanje uputa i dogovorenih rokova",
      "ugc.look.4": "Pouzdanu i pravovremenu komunikaciju",
      "ugc.look.5": "Da imaš 18-65+ godina",
      "ugc.exp": "Prethodno UGC iskustvo je prednost, ali nije obavezno.",
      "ugc.form.t": "Forma za <em>prijavu</em>.",
      "ugc.faq.t": "Pitanja i <em>odgovori</em>.",
      "ugc.q1": "Treba li mi veliki broj pratilaca?",
      "ugc.a1": "Ne. Plaćamo sadržaj koji kreiraš, ne pristup tvojoj publici.",
      "ugc.q2": "Moram li objaviti video na svom profilu?",
      "ugc.a2": "Ne. Snimaš i dostavljaš sadržaj koji će brend koristiti u oglasima.",
      "ugc.q3": "Treba li mi prethodno iskustvo?",
      "ugc.a3": "Nije obavezno. Primjeri videa pomažu nam da procijenimo tvoj nastup, kvalitet snimanja i stil komunikacije.",
      "ugc.q4": "Koliko se plaća jedan video?",
      "ugc.a4": "Naknada zavisi od proizvoda, zahtjevnosti briefa i broja videa. Tačan iznos uvijek znaš prije nego što prihvatiš projekat.",
      "ugc.q5": "Gdje će se moj video koristiti?",
      "ugc.a5": "Najčešće u plaćenim oglasima na Meta platformama (Facebook i Instagram) i drugim digitalnim kanalima.",
      "ugc.q6": "Kada se vrši isplata?",
      "ugc.a6": "Isplata se vrši u roku od 7 dana nakon dostavljanja finalnog sadržaja.",
      "ugc.f.t": "Prijavi se",

      "sk.skip": "Preskoči na sadržaj",

      "cc.text": "Željeli bismo koristiti kolačiće (analitika i Meta Pixel) da razumijemo šta radi i mjerimo vlastite oglase. Ti odlučuješ.",
      "cc.accept": "Prihvati",
      "cc.decline": "Odbij",
      "cc.more": "Politika privatnosti",

      "nf.title": "Stranica nije <em>pronađena</em>.",
      "nf.text": "Ova stranica ne postoji, ali tvoj potencijal za profit postoji.",
      "nf.btn": "Nazad na početnu",

      "pv.kicker": "Pravno",
      "pv.title": "Politika <em>privatnosti</em>.",
      "pv.updated": "Zadnja izmjena: 6. juli 2026.",
      "pv.1t": "Ko smo mi",
      "pv.1d": "AdsMerce je performance marketing agencija za e-commerce brendove. Za sve u vezi tvojih podataka piši na hello@adsmerce.com.",
      "pv.2t": "Šta prikupljamo",
      "pv.2d": "Emailove koje nam pošalješ i prijave na newsletter (tvoja email adresa). Uz tvoj pristanak, anonimne analitičke podatke (Google Analytics) i podatke za oglašavanje putem Meta Pixela. Za automatsko prepoznavanje jezika, država tvoje IP adrese se jednom provjerava preko ipapi.co. Tvoju IP adresu ne čuvamo.",
      "pv.3t": "Zašto prikupljamo",
      "pv.3d": "Da ti odgovorimo, pošaljemo newsletter koji si tražio/la, razumijemo kako se sajt koristi i mjerimo vlastito oglašavanje. Tvoje podatke nikad ne prodajemo niti dijelimo.",
      "pv.4t": "Kolačići i pristanak",
      "pv.4d": "Analitika i Meta Pixel se pokreću tek nakon što klikneš Prihvati u banneru za kolačiće. Odluku možeš promijeniti bilo kad:",
      "pv.4btn": "Resetuj moj izbor kolačića",
      "pv.5t": "Tvoja prava",
      "pv.5d": "Po GDPR-u u svakom trenutku možeš zatražiti uvid, ispravku ili brisanje svojih podataka: dovoljan je jedan email na hello@adsmerce.com.",
      "pv.6t": "Servisi trećih strana",
      "pv.6d": "Google Analytics (mjerenje posjeta), Meta Pixel (mjerenje oglasa i retargeting), ipapi.co (automatsko prepoznavanje jezika), Google Fonts (tipografija), Wistia (hosting videa, učitava se tek kad klikneš play na video), Tally (forma za prijavu kreatora) i newsletter servis kad bude podešen.",

      "ft.privacy": "Politika privatnosti",
      "ft.cookie": "Politika kolačića",
      "ft.blurb": "Performance marketing agencija specijalizovana za e-commerce rast kroz Meta, Google i TikTok Ads, kreative, CRO i AI automatizaciju.",
      "ft.services": "Usluge",
      "ft.contact": "Kontakt",
      "ft.more": "Ostalo",
      "ft.blog": "Blog",
      "ft.ugc": "Za UGC kreatore",
      "ft.rights": "Sva prava zadržana.",
      "ft.top": "Nazad na vrh ↑"
    }
  };

  var currentLang = "bs";

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
        if (data && data.country_code && BHS_COUNTRIES.indexOf(data.country_code) === -1) applyLang("en");
      })
      .catch(function () {
        clearTimeout(timer);
        var langs = navigator.languages || [navigator.language || ""];
        var isBhs = langs.some(function (l) { return /^(bs|hr|sr)/i.test(l || ""); });
        if (!isBhs) applyLang("en");
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
  /* Each tile is one of:
       { type: "wistia", id: "<hashedId>", poster: "<img>", labelKey: "…" }
         — shows the local poster + play button; loads the Wistia player only
           when the visitor clicks (no third-party request until then).
       { type: "image", src: "<img>", labelKey: "…" } — static ad creative.
       { labelKey: "…" } — placeholder tile ("sample coming soon").
     To add a Wistia video: open the share link, the player embeds from
     fast.wistia.net/embed/iframe/<hashedId>. */
  var CREATIVES = [
    { type: "wistia", id: "ykip63i1al", poster: "assets/creative/ugc-video.jpg", labelKey: "work.f1" },
    { type: "wistia", id: "evrykh8n27", poster: "assets/creative/product-demo.jpg", labelKey: "work.f2" },
    { type: "wistia", id: "txxa4u95sx", poster: "assets/creative/ai-video.jpg", labelKey: "work.f3" },
    { type: "image", src: "assets/creative/static-carousel.png", labelKey: "work.f4" }
  ];

  function playWistia(tile, id, label) {
    var frame = document.createElement("iframe");
    frame.src = "https://fast.wistia.net/embed/iframe/" + id +
      "?autoPlay=true&playerColor=0E6F4E";
    frame.title = label;
    frame.allow = "autoplay; fullscreen";
    frame.setAttribute("allowfullscreen", "");
    frame.className = "creative-frame";
    tile.innerHTML = "";
    tile.appendChild(frame);
    tile.style.cursor = "default";
  }

  function renderCreatives() {
    var grid = document.getElementById("creativeGrid");
    if (!grid) return;
    grid.innerHTML = "";
    CREATIVES.forEach(function (item) {
      var label = I18N[currentLang][item.labelKey] || "";
      var tile = document.createElement("div");
      tile.className = "creative-tile reveal in";

      var tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = label;
      tile.appendChild(tag);

      if (item.type === "wistia") {
        var poster = document.createElement("img");
        poster.src = item.poster;
        poster.alt = label;
        poster.loading = "lazy";
        var play = document.createElement("span");
        play.className = "play";
        play.innerHTML = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3.5v9l7.5-4.5L5 3.5Z" fill="currentColor"/></svg>';
        tile.appendChild(poster);
        tile.appendChild(play);
        tile.setAttribute("role", "button");
        tile.setAttribute("tabindex", "0");
        tile.setAttribute("aria-label", "Play: " + label);
        var start = function () { playWistia(tile, item.id, label); };
        tile.addEventListener("click", start);
        tile.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start(); }
        });
      } else if (item.type === "image") {
        var img = document.createElement("img");
        img.src = item.src;
        img.alt = label;
        img.loading = "lazy";
        tile.style.cursor = "default";
        tile.appendChild(img);
      } else {
        var pl = document.createElement("span");
        pl.className = "play";
        pl.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3.5v9l7.5-4.5L5 3.5Z" fill="currentColor"/></svg>';
        var soon = document.createElement("span");
        soon.className = "label";
        soon.textContent = I18N[currentLang]["work.soon"];
        tile.style.cursor = "default";
        tile.appendChild(pl);
        tile.appendChild(soon);
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
    var s = document.querySelector('script[src*="js/main.js"]');
    return s ? s.getAttribute("src").replace(/js\/main\.js.*$/, "") : "";
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
  applyLang("bs");
  detectLang();
})();
