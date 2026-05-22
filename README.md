# Földesi Zsolt — portfolio website

> 🇬🇧 English version below · 🇭🇺 Magyar verzió lentebb

A four-page, static, multilingual (HU / EN / DE) portfolio website.
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
├── privacy-policy.html Privacy policy (Adatkezelési tájékoztató)
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

### Images

All images live in `assets/images/` and split into two groups.

**A) Photo & logo slots — use the real files** (keep the filenames identical):

| File | What it should be |
|------|-------------------|
| `fzs-logo.png` | Logo for the navbar (dark version) |
| `fzs-logo-white.png` | Logo for the footer (white version) |
| `signature.png` | Signature-style mark in the footer |
| `standing.png` | Földesi Zsolt standing portrait (hero) |
| `shirt.png` | Földesi Zsolt portrait, arms crossed (About + Contact sections) |
| `victor.png`, `imre.png`, `gaspar.png`, `andras.png` | Testimonial profile photos |
| `dyson.png`, `volvo.png`, `szallas.png`, `velux.png`, `mazda.png`, `sanofi.png`, `unilever.png`, `aldi.png` | Brand logos (transparent PNG preferred) |
| `favicon.png` | Browser tab icon |

**B) Designed graphics — on-brand, ready to use** (replace only if you want to):

| File | What it is |
|------|------------|
| `blog-1.png` … `blog-6.png` | Blog post cover graphics (3:2) |
| `service-1.png` … `service-6.png` | Icons for the 6 service cards |
| `services-art.png` | Abstract background graphic in the Services section |
| `brick-wall.png` | Brick-wall texture behind the contact form |
| `flag-hu.png`, `flag-en.png`, `flag-de.png` | Flags for the language switcher |

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

Use the flag dropdown in the top-right corner to switch language: click the
flag, then pick HU / EN / DE from the list. The chosen language is remembered
by the browser (localStorage).

**Why the privacy policy page does not change language.** The language
switcher translates the homepage, blog and article pages, but the body of
`privacy-policy.html` stays in Hungarian no matter which language is selected.
This is intentional, not a bug:

- It is a binding legal document that quotes Hungarian legislation (Ptk.,
  Infotv. 2011. évi CXII.) and names the Hungarian authority (NAIH).
- An auto- or loosely-translated legal text can become legally inaccurate, so
  the original Hungarian wording must remain authoritative.
- The text was supplied by the client as the official version.

The navbar and footer on that page still translate normally — only the legal
body is fixed. If an official English or German privacy policy is needed
later, it should come from a translator or lawyer and be added as a separate
page; it should not be machine-translated.

### Contact form

The form has client-side validation only (required fields, email format).
Actual sending needs a backend or form service (e.g. Formspree, a custom PHP
script) — the hook is prepared in `main.js` (`initContactForm`), and the
reCAPTCHA goes where the `.recaptcha-box` element is.

### Share buttons (blog post page)

The LinkedIn / Facebook / copy-link buttons on `blog-post.html` are already
functional — they are wired up in `main.js` (`initShare`) and automatically
use the page's own address, so no link needs to be edited by hand.

Important: LinkedIn and Facebook sharing only works once the site is live on
a real public domain. Opened from a local file (`file:///...`) or `localhost`
the dialogs cannot read the page, so the preview will be empty — this is
expected and resolves itself after deployment. The copy-link button works
everywhere, including locally.

### External dependency

The `GSAP` animation library loads from a CDN (cdnjs). An internet connection
is required for it. To host it locally, download `gsap.min.js` and
`ScrollTrigger.min.js` and update the `<script src="...">` references.

### Deploy & updates

The project is version-controlled with Git and hosted on GitHub. To publish
changes after editing files:

```
git add .
git commit -m "Fix: short description of the change"
git push
```

To put the site online, enable **GitHub Pages** in the repository:
Settings → Pages → Branch: `main` → `/ (root)` → Save.

### Notes on the design

The site was built from the supplied Figma design (node 43:905): Bai Jamjuree
font, `#003e83` navy and `#00c7f2` cyan colours. The **"Motto"** and **"Quote"**
sections were requested in the brief but are not in the Figma file — they were
added, styled to match the Figma visual language.

---

## 🇭🇺 Magyar

Négyoldalas, statikus, többnyelvű (HU / EN / DE) portfólió weboldal.
Keretrendszer nélkül készült: tiszta HTML, CSS és JavaScript. GitHub Pages-re,
Netlify-ra, Vercelre vagy bármilyen tárhelyre feltölthető.

### Tartalom

```
foldesi-zsolt/
├── index.html          Főoldal (11 szekció)
├── blog.html           Blog lista (keresés, szűrés, lapozás)
├── blog-post.html      Egy cikk oldala
├── privacy-policy.html Adatkezelési tájékoztató
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

### Képek

Minden kép a `assets/images/` mappában van, két csoportra osztva.

**A) Fotó- és logóhelyek — a valódi fájlokat tedd be** (a fájlneveket tartsd meg):

| Fájl | Mi legyen rajta |
|------|-----------------|
| `fzs-logo.png` | Logó a navbarba (sötét változat) |
| `fzs-logo-white.png` | Logó a footerbe (fehér változat) |
| `signature.png` | Aláírás-jellegű jel a footerben |
| `standing.png` | Földesi Zsolt álló portré (hero) |
| `shirt.png` | Földesi Zsolt portré, összefont karral (About + Kapcsolat szekció) |
| `victor.png`, `imre.png`, `gaspar.png`, `andras.png` | A vélemények profilképei |
| `dyson.png`, `volvo.png`, `szallas.png`, `velux.png`, `mazda.png`, `sanofi.png`, `unilever.png`, `aldi.png` | Márkalogók (lehetőleg átlátszó PNG) |
| `favicon.png` | Böngészőfül-ikon |

**B) Tervezett grafikák — márkahűek, használatra készek** (csak ha cserélni szeretnéd):

| Fájl | Mi ez |
|------|-------|
| `blog-1.png` … `blog-6.png` | Blog cikkek borítógrafikái (3:2) |
| `service-1.png` … `service-6.png` | A 6 szolgáltatás-kártya ikonjai |
| `services-art.png` | Absztrakt háttérgrafika a Szolgáltatások szekcióban |
| `brick-wall.png` | Téglafal-textúra a kapcsolati űrlap mögött |
| `flag-hu.png`, `flag-en.png`, `flag-de.png` | Zászlók a nyelvváltóhoz |

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

A jobb felső sarokban lévő zászlós legördülő menüvel váltható a nyelv:
kattints a zászlóra, majd válassz a HU / EN / DE közül. A választott
nyelvet a böngésző megjegyzi (localStorage).

**Miért nem vált nyelvet az adatkezelési tájékoztató oldal.** A nyelvváltó a
főoldalt, a blogot és a cikkoldalakat fordítja, de a `privacy-policy.html`
törzsszövege magyar marad, bármelyik nyelvet is választod. Ez szándékos, nem
hiba:

- Ez egy kötelező érvényű jogi dokumentum, amely magyar jogszabályokat idéz
  (Ptk., 2011. évi CXII. Infotv.), és a magyar hatóságot (NAIH) nevezi meg.
- Egy gépi vagy pontatlan fordítás jogilag félrevezető lehet, ezért az eredeti
  magyar szövegnek kell mérvadónak maradnia.
- A szöveget a megrendelő adta át hivatalos változatként.

Az oldal navigációja és lábléce továbbra is fordítódik — csak a jogi
törzsszöveg fix. Ha később hivatalos angol vagy német adatkezelési tájékoztató
kell, azt fordítótól vagy jogásztól érdemes beszerezni, és külön oldalként
hozzáadni; gépi fordítás nem javasolt.

### Kapcsolati űrlap

Az űrlap kliensoldali ellenőrzéssel működik (kötelező mezők, e-mail formátum).
A tényleges küldéshez egy backend vagy form-szolgáltató (pl. Formspree, saját
PHP-szkript) bekötése szükséges — a hely elő van készítve a `main.js`
`initContactForm` függvényében, a reCAPTCHA pedig a `.recaptcha-box` elem helyén.

### Megosztás gombok (blogcikk oldal)

A `blog-post.html` oldalon a LinkedIn / Facebook / link-másolás gombok már
működnek — a `main.js` `initShare` függvénye köti be őket, és automatikusan
az oldal saját címét használják, így kézzel nem kell linket átírni.

Fontos: a LinkedIn és Facebook megosztás csak akkor működik, ha az oldal egy
valódi, publikus domainen él. Helyi fájlból (`file:///...`) vagy `localhost`-ról
megnyitva a megosztó ablak nem tudja beolvasni az oldalt, ezért a kép üres lesz
— ez normális, és élesítés után magától megoldódik. A link-másolás gomb
mindenhol működik, helyben is.

### Külső függőség

A `GSAP` animációs könyvtár CDN-ről töltődik be (cdnjs). Internetkapcsolat
szükséges hozzá. Ha helyben szeretnéd tárolni, töltsd le a `gsap.min.js` és
`ScrollTrigger.min.js` fájlokat, és cseréld a `<script src="...">` hivatkozásokat.

### Közzététel & frissítés

A projekt Git verziókezelés alatt áll, és GitHubon van tárolva. A fájlok
szerkesztése után a változások közzététele:

```
git add .
git commit -m "Fix: rövid leírás a változásról"
git push
```

A weboldal élesítéséhez kapcsold be a **GitHub Pages**-t a repóban:
Settings → Pages → Branch: `main` → `/ (root)` → Save.

### Megjegyzések a designhoz

A weboldal a megadott Figma terv (node 43:905) alapján készült: Bai Jamjuree
betűtípus, `#003e83` navy és `#00c7f2` cyan színekkel. A Figma tervben nem
szereplő, de a feladatkiírásban kért **„Mottó”** és **„Idézet”** szekciók a
Figma vizuális stílusához igazítva kerültek be.