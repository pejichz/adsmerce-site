# Srijemuš La Vita — stranica za prikupljanje video iskustava

Prijedlog sadržaja i dizajna. Mockup: `index.html` (otvoriti u browseru).

---

## 1. Šta stranica treba da uradi

Postojeći sajt već ima sekciju **„Priče onih koji već koriste"**, ali su to
screenshotovi poruka i komentara. To radi posao do neke mjere, ali screenshot
ne prenosi lice, glas ni godine — a upravo to je ono što kod ove kategorije
(dodatak ishrani, kupac 50+) gradi povjerenje.

Ova stranica je mašina koja tu sekciju hrani pravim video materijalom, i
istovremeno proizvodi sirovinu za Meta oglase, gdje UGC testimonial i dalje
nadmašuje produkcijski spot.

Tri izlaza iz jednog uloška:

1. **Sajt** — video zamjenjuje screenshotove u sekciji s pričama
2. **Oglasi** — svaki snimak je gotov hook za Meta/TikTok kreativu
3. **Proizvod** — odgovori na pitanje 4 i 6 su besplatan istraživački input

## 2. Centralna odluka: nagrada se ne veže za pohvalu

Ovo je jedina stvar koju ne treba kompromitovati, i iz dva razloga.

**Pravni.** EU Omnibus direktiva (u BiH i Srbiji preko zakona o zaštiti
potrošača i oglašavanju, u HR direktno) traži da se plaćene ili nagrađene
recenzije označe kao takve, i zabranjuje predstavljanje nagrađenih recenzija
kao spontanih. Uslovljavanje nagrade pozitivnom ocjenom je zaseban prekršaj.
Meta u svojim pravilima za oglase o zdravstvenim proizvodima gleda isto.

**Praktični, i važniji.** Publika ovu razliku osjeti. Testimonial koji zvuči
kao da je plaćen ne konvertuje — a kad u snimku stoji „meni prvih mjesec dana
nije bilo ništa, tek drugi mjesec sam osjetila", cijela ostala poruka postane
vjerodostojna. Blaga negativna nota je najjači element u testimonial oglasu,
ne slabost.

Zato u mockupu tri mjesta nose istu poruku, namjerno ponovljenu:

- hero: „bez obzira na to da li je vaše iskustvo dobro, mlako ili loše"
- pledge blok: **„Ne plaćamo pohvale. Plaćamo iskrenost."**
- lista uslova, u crvenom: „Ne tražimo da proizvod pohvalite"

I, najvažnije, mehanizam koji to čini stvarnim a ne dekorativnim — **pitanja 4
i 5 su dvostrana**. Ne pita se „šta se promijenilo", nego „šta se promijenilo
a šta nije". Ne pita se „kome preporučujete", nego „kome biste preporučili a
kome ne biste". Kad pitanje samo traži i drugu stranu, čovjek je da bez
osjećaja da kvari uslugu.

## 3. Pet pitanja

| # | Pitanje | Šta izvlači |
|---|---------|-------------|
| 1 | Predstavite se ukratko | Ime, grad, godine — identifikacija koja gradi povjerenje |
| 2 | Šta vas je navelo da probate srijemuš? | „Prije" stanje — hook za oglas |
| 3 | Kako ste ga koristili? | Dozira očekivanja, otkriva greške u korištenju |
| 4 | **Šta se promijenilo — a šta nije?** | Jezgro. Dvostrano po dizajnu |
| 5 | **Kome biste preporučili, a kome ne?** | Segmentacija publike, iz usta kupca |
| + | Šta bismo trebali popraviti? | Bonus, nije uslov. Čist R&D input |

Pitanje 3 („recite i ako ste zaboravljali ili prekidali") ima skrivenu
vrijednost: ako se u dvadeset snimaka ponovi da ljudi zaboravljaju večernju
kapsulu, to je podatak koji mijenja uputstvo na pakovanju.

## 4. Struktura stranice

```
1  Hero              obećanje + poklon + „i ako nije bilo nikako"
2  Traka s brojevima 5 pitanja / 60–180 sek / 7 dana
3  PLEDGE            „Ne plaćamo pohvale" — potpisan, centriran
4  Zašto ovo tražimo kratko, ljudski, iz prvog lica
5  Poklon paket      sadržaj + vrijednost, uz listu uslova
6  Pet pitanja       numerisane kartice, 4 i 5 zlatno istaknute
7  Kako snimiti      ovako da / ovako nemojte + checklist
8  Kako poslati      forma / Viber / WhatsApp / telefon
9  Forma             podaci, upload, četiri saglasnosti
10 Šta se dešava     timeline u četiri koraka
11 FAQ               dvokolonski, kao na postojećem sajtu
12 CTA traka
13 Pravila           sitna slova, krupno napisana + disclaimer
```

## 5. Dizajn — kako se veže na postojeći sajt

Preuzeto iz postojećeg vizuelnog jezika:

- **Duboka šumska zelena** (`#15402A`) za hero i trake, **krem** (`#F6F1E5`)
  za tijelo stranice, **zlatna** (`#B8912F`) za akcente i emfazu
- **Cormorant Garamond** za naslove, sans za tekst; kurziv u zlatnoj za
  istaknutu riječ u naslovu — isti potez kao na naslovnoj
- Centrirana zaglavlja sekcija s malim verzalnim eyebrow tekstom
- Bijele kartice s tankim okvirom, FAQ u dvije kolone

Prilagođeno za ovu publiku (50+, uglavnom mobilni telefon):

- Osnovni tekst **17px**, ne 15px. Dugmad visine 54px, preko cijele širine na
  telefonu
- Nema hover-only informacija, nema karusela, nema koraka koji se kriju
- Jedan zadatak po ekranu, redoslijedom kojim se stvarno radi: *shvati
  ponudu → vidi pitanja → nauči snimiti → pošalji*
- Dugme **„Odštampajte pitanja"** (radi u mockupu) — realno, dio ove publike
  će htjeti papir pored sebe
- Broj telefona za pomoć uživo, vidljiv na dva mjesta

## 6. Tehnička izvedba

Preporuka: **Tally forma** s video uploadom, isto kao na `ugc.html`.
Alternativa je Typeform, ali Tally ima besplatan file upload do 10 MB po fajlu
na free planu, a na Pro planu do 5 GB — za video je Pro nužan.

Kritično za ovu publiku: **Viber kao ravnopravan kanal.** Dio ljudi neće
uspjeti da uradi upload na formi, ali će bez problema proslijediti snimak kao
Viber poruku. Ako se to izostavi, gubi se realno 30–40% odziva.

Snimci s telefona su 100–400 MB. Ako upload postane usko grlo, jeftina
varijanta je da forma prima samo podatke, a snimak ide na Viber broj.

## 7. Šta treba potvrditi prije izrade

- [ ] **Sadržaj poklon paketa** i njegova vrijednost — u mockupu su kapsule 60,
      mast, ulje i sprej, „preko 100 KM". Zamijeniti stvarnim.
- [ ] **Da li paket ide svima** ko ispuni uslove, ili prvih N. Preporuka: svima,
      uz jasan rok trajanja akcije — ograničenje na prvih N ruši povjerenje koje
      cijela stranica gradi.
- [ ] Viber i WhatsApp broj, besplatni telefon za pomoć
- [ ] Rok trajanja akcije
- [ ] Ko interno pregleda snimke i u kojem roku
- [ ] Pravni pregled sekcije „Pravila" — tekst je pisan da bude razumljiv, ne
      da bude pravno provjeren

## 8. Rizici

**Upload video fajlova je najveća tačka otkaza.** Zato tri kanala i telefon.

**Zdravstvene tvrdnje u snimcima.** Ljudi će spontano reći „izliječio mi je" ili
navesti ime lijeka. Takvi snimci se ne smiju objaviti — a osoba svejedno dobija
poklon, što je i napisano u FAQ-u. Računati da 20–30% materijala bude
neupotrebljivo iz ovog razloga.

**Označavanje objava.** Svaka objava nagrađenog snimka mora nositi vidljivu
oznaku. Prijedlog formulacije za overlay u videu i za caption:

> *Snimak korisnika. Za učešće je dobijen poklon paket, bez uslova da mišljenje
> bude pozitivno.*

**Očekivani odziv.** Iz baze od 10.000 korisnika, uz e-mail/SMS kampanju i
poklon vrijednosti preko 100 KM, realno je 2–5% pokretanja i 0,5–1,5%
upotrebljivih snimaka. Na 10.000 kontakata to je 50–150 videa, što je više nego
dovoljno za godinu dana kreativa.

---

*Mockup ne sadrži aktivnu formu. Sve cifre, rokovi i kontakti su primjeri.*
