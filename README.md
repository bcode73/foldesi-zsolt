# Földesi Zsolt — portfolio website

> 🇬🇧 English version below · 🇭🇺 Magyar verzió lentebb

A three-page, static, multilingual (HU / EN / DE) portfolio website.
Built with no framework — plain HTML, CSS and JavaScript. Can be hosted on
GitHub Pages, Netlify, Vercel or any web host.

---

## 🇬🇧 English

### Structure

```
foldesi-zsolt/
├── index.html          Homepage (11 sections)
├── blog.html           Blog list (search, filter, pagination)
├── blog-post.html      Single article page
├── css/style.css       Full stylesheet
├── js/
│   ├── translations.js All site text (HU/EN/DE) — EDIT TEXT HERE
│   ├── animations.js   GSAP animations
│   └── main.js         Language switch, menu, slider, form, blog logic
└── assets/images/      Images, logos, favicon
```

### Opening / running

You can open the site by double-clicking `index.html`. For development a local
server is recommended (more reliable for paths):

```
# Python 3
python3 -m http.server 8000
# then in the browser: http://localhost:8000
```

### ⚠️ IMPORTANT: images must be replaced

The `assets/images/` folder currently contains **placeholder images**, because
the original images were not available during the build. Before going live,
replace them with the real files — **keep the filenames exactly the same**:

| File | What it should be |
|------|-------------------|
| `fzs-logo.png` | Logo for the navbar (dark version) |
| `fzs-logo-white.png` | Logo for the footer (white version) |
| `signature.png` | Signature-style mark in the footer |
| `standing.png` | Földesi Zsolt standing portrait (hero, black & white) |
| `shirt.png` | Földesi Zsolt portrait, arms crossed (About + Contact) |
| `brick-wall.png` | Brick-wall texture behind the contact section |
| `victor.png`, `imre.png`, `gaspar.png`, `andras.png` | Testimonial profile photos |
| `dyson.png`, `volvo.png`, `szallas.png`, `velux.png`, `mazda.png`, `sanofi.png`, `unilever.png`, `aldi.png` | Brand logos (transparent PNG preferred) |
| `blog-1.png` … `blog-6.png` | Blog post cover images (3:2 ratio recommended) |
| `favicon.png` | Browser tab icon |

### Editing text (for non-developers)

All text lives in one place: **`js/translations.js`**.
The guide at the top of that file explains it in detail. In short:

1. Open `js/translations.js`.
2. Find the language block (`hu`, `en` or `de`).
3. Only rewrite the text **between** the quotation marks — keep the quotes.
4. Save the file and refresh the browser.

In the HTML, translatable elements are marked with a `data-translate="key.name"`
attribute showing which text they belong to.

### Languages

Use the HU / EN / DE buttons in the top-right corner to switch language.
The chosen language is remembered by the browser (localStorage).

### Contact form

The form has client-side validation only (required fields, email format).
Actual sending needs a backend or form service (e.g. Formspree, a custom PHP
script) — the hook is prepared in `main.js` (`initContactForm`), and the
reCAPTCHA goes where the `.recaptcha-box` element is.

### External dependency

The `GSAP` animation library loads from a CDN (cdnjs). An internet connection
is required for it. To host it locally, download `gsap.min.js` and
`ScrollTrigger.min.js` and update the `<script src="...">` references.

### Notes on the design

The site was built from the supplied Figma design (node 43:905): Bai Jamjuree
font, `#003e83` navy and `#00c7f2` cyan colours. The **"Motto"** and **"Quote"**
sections were requested in the brief but are not in the Figma file — they were
added, styled to match the Figma visual language.

---

## 🇭🇺 Magyar

Háromoldalas, statikus, többnyelvű (HU / EN / DE) portfólió weboldal.
Keretrendszer nélkül készült: tiszta HTML, CSS és JavaScript. GitHub Pages-re,
Netlify-ra, Vercelre vagy bármilyen tárhelyre feltölthető.

### Tartalom

```
foldesi-zsolt/
├── index.html          Főoldal (11 szekció)
├── blog.html           Blog lista (keresés, szűrés, lapozás)
├── blog-post.html      Egy cikk oldala
├── css/style.css       Teljes stíluslap
├── js/
│   ├── translations.js Az összes szöveg (HU/EN/DE) — ITT szerkeszthető
│   ├── animations.js   GSAP animációk
│   └── main.js         Nyelvváltás, menü, szlájder, űrlap, blog logika
└── assets/images/      Képek, logók, favicon
```

### Megnyitás / futtatás

A weboldal megnyitható az `index.html` fájlra duplán kattintva.
Fejlesztéshez ajánlott egy helyi szerver (az útvonalak miatt biztosabb):

```
# Python 3
python3 -m http.server 8000
# majd böngészőben: http://localhost:8000
```

### ⚠️ FONTOS: a képeket cserélni kell

A `assets/images/` mappában jelenleg **helykitöltő (placeholder) képek** vannak,
mert az eredeti képek nem voltak elérhetők a build során. Éles használat előtt
ezeket cseréld le a valódi fájlokra — **a fájlneveket tartsd meg változatlanul**:

| Fájl | Mi legyen rajta |
|------|-----------------|
| `fzs-logo.png` | Logó a navbarba (sötét változat) |
| `fzs-logo-white.png` | Logó a footerbe (fehér változat) |
| `signature.png` | Aláírás-jellegű jel a footerben |
| `standing.png` | Földesi Zsolt álló portré (hero, fekete-fehér) |
| `shirt.png` | Földesi Zsolt portré, összefont karral (About + Kapcsolat) |
| `brick-wall.png` | Téglafal-textúra a Kapcsolat szekció hátterében |
| `victor.png`, `imre.png`, `gaspar.png`, `andras.png` | A vélemények profilképei |
| `dyson.png`, `volvo.png`, `szallas.png`, `velux.png`, `mazda.png`, `sanofi.png`, `unilever.png`, `aldi.png` | Márkalogók (lehetőleg átlátszó PNG) |
| `blog-1.png` … `blog-6.png` | Blog cikkek borítóképei (3:2 arány ajánlott) |
| `favicon.png` | Böngészőfül-ikon |

> Megjegyzés: a `blog-1.png` … `blog-6.png` borítóképek helykitöltők — cseréld
> valódi cikk-képekre, vagy add meg a végleges fájlneveket.

### Szöveg szerkesztése (nem programozóknak)

Minden szöveg egy helyen van: **`js/translations.js`**.
A fájl elején lévő útmutató részletesen leírja a teendőt. Röviden:

1. Nyisd meg a `js/translations.js` fájlt.
2. Keresd meg a nyelvi blokkot (`hu`, `en` vagy `de`).
3. Csak az idézőjelek **közötti** szöveget írd át, az idézőjeleket hagyd meg.
4. Mentsd a fájlt, frissítsd a böngészőt.

A HTML-ben a fordítható elemeken `data-translate="kulcs.név"` attribútum jelzi,
melyik szöveghez tartoznak.

### Nyelvek

A jobb felső sarokban a HU / EN / DE gombokkal váltható a nyelv.
A választott nyelvet a böngésző megjegyzi (localStorage).

### Kapcsolati űrlap

Az űrlap kliensoldali ellenőrzéssel működik (kötelező mezők, e-mail formátum).
A tényleges küldéshez egy backend vagy form-szolgáltató (pl. Formspree, saját
PHP-szkript) bekötése szükséges — a hely elő van készítve a `main.js`
`initContactForm` függvényében, a reCAPTCHA pedig a `.recaptcha-box` elem helyén.

### Külső függőség

A `GSAP` animációs könyvtár CDN-ről töltődik be (cdnjs). Internetkapcsolat
szükséges hozzá. Ha helyben szeretnéd tárolni, töltsd le a `gsap.min.js` és
`ScrollTrigger.min.js` fájlokat, és cseréld a `<script src="...">` hivatkozásokat.

### Megjegyzések a designhoz

A weboldal a megadott Figma terv (node 43:905) alapján készült: Bai Jamjuree
betűtípus, `#003e83` navy és `#00c7f2` cyan színekkel. A Figma tervben nem
szereplő, de a feladatkiírásban kért **„Mottó”** és **„Idézet”** szekciók a
Figma vizuális stílusához igazítva kerültek be.