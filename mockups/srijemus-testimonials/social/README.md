# Social kreative — akcija za video iskustva

`png/` sadrži gotove fajlove za objavu. Ostalo je izvor.

| Fajl | Format | Namjena |
|------|--------|---------|
| `01-feed-najava` | 1080×1350 | glavna objava i oglas |
| `02-feed-iskrenost` | 1080×1080 | hook „Ne plaćamo pohvale" |
| `03`–`06-karusel-1..4` | 1080×1350 | karusel, 4 slajda |
| `07-story` | 1080×1920 | Story / Reel pozadina |

Tekstovi uz objave su u `TEKSTOVI.md`.

## Ponovni render

```
node fetch-fonts.mjs   # skida Cormorant Garamond + Inter i ugrađuje ih u fonts.css
node render.mjs        # snima svaki .frame iz frames.html u png/
```

`fonts.css` se ne čuva u repozitoriju — 1,5 MB base64 fontova, a regeneriše se
za nekoliko sekundi. Fontovi se ugrađuju umjesto da se linkuju da render ne bi
zavisio od mreže i da dijakritici (č, ć, š, ž, đ) uvijek budu iz latin-ext
podskupa.

## Uređivanje

Sav sadržaj je u `frames.html`, jedan `<div class="frame">` po kreativi.
Dimenzije nose klase `.f-1080`, `.f-1350`, `.f-1920`; `data-name` određuje ime
izlaznog PNG-a.

Dvije zamke ako se mijenja tipografija:

- CSS `font` skraćenica **resetuje** `font-variant-numeric`, pa lining brojeve
  treba deklarisati poslije nje, inače Cormorant vrati stari stil („ıoo KM").
- Cormorant Garamond crta caron visoko i odvojeno, pa „č" i „š" u velikim
  naslovima izgledaju prozračnije nego u sans fontu. To je osobina fonta.
