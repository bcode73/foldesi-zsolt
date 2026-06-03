/* ==========================================================================
   translations.js — Az oldal összes szövege egy helyen.

   SZERKESZTÉS NEM PROGRAMOZÓKNAK:
   - Az oldal szövegeit ITT lehet módosítani, három nyelven (hu, en, de).
   - Keresd meg a kívánt nyelvi blokkot és a megfelelő kulcsot.
   - Csak az idézőjelek KÖZÖTTI szöveget írd át, az idézőjeleket hagyd meg.
   - Pl.:  title: "Régi szöveg"   ->   title: "Új szöveg"
   - A HTML-ben minden fordítható elemen data-translate="..." attribútum van,
     ennek értéke mutatja a kulcsot (pl. data-translate="hero.subtitle1").
   ========================================================================== */

const translations = {

  /* ===================== MAGYAR ========================================== */
  hu: {
    nav: {
      home: "Főoldal",
      intro: "Bemutatkozás",
      references: "Referenciák",
      services: "Miben segíthetek",
      blog: "Blog",
      contact: "Kapcsolat"
    },
    hero: {
      stat1num: "15+", stat1label: "Év tapasztalat",
      stat2num: "46",  stat2label: "Országban",
      subtitle1: "Marketing", subtitle2: "Technológia", subtitle3: "Stratégia",
      scroll: "Görgess lejjebb"
    },
    motto: {
      text: "Ismerd a piacod, segítsd az ügyfeled, növeld a profitod."
    },
    counters: {
      heading: "Eredmények számokban",
      c1num: "265", c1suffix: "%", c1label: "Növekedés az organikus forgalomban",
      c2num: "3",   c2suffix: "x", c2label: "Többszörös konverzió",
      c3num: "83",  c3suffix: "%", c3label: "Javulás az attribúcióban"
    },
    brands: {
      eyebrow: "Referenciák",
      heading: "Márkák, amikkel dolgoztam.",
      lead: "Ezeket az együttműködéseket elismerésnek és felelősségnek is tartom: elkötelezettség a vállalkozások gyors, biztonságos és jövőálló digitális fejlődése iránt."
    },
    about: {
      eyebrow: "Bemutatkozás",
      heading: "Pár szó magamról.",
      p1: "Több mint 15 éve foglalkozom digitális ügyfélszerzéssel és növekedési stratégiák tervezésével olyan vállalkozások számára, amelyek nem kampányokat, hanem kiszámítható eredményeket szeretnének. Dolgoztam nemzetközi nagyvállalatokkal és a KKV szektor szereplőivel egyaránt, B2B, B2C és startup környezetben, komplex vállalati és e-kereskedelmi projektekben.",
      p2: "Számomra a marketing nem költség, hanem mérhetően, összhangban működő, tervezett rendszer. Egy olyan rendszer, ami nem önmagáért létezik: azoknak a vállalkozásoknak segít teret nyerni, akik minden egyes nap értéket adnak az ügyfeleiknek.",
      p3: "Dolgoztam szövegíróként, fejlesztőként, marketingesként, értékesítőként. A szinergiát keresem. Hiába jó az üzenet, ha nincsen meg a csatorna, és hiába van meg a jó csatorna, ha nincs mögötte egy jól strukturált rendszer, ami az igényeket kiszolgálja. Stabil alapokat építek, optimális terhelés mellett. Automatizációval támogatom az emberi folyamatokat, hogy munkaórákat és kreativitást szabadíthassak fel.",
      li1: "Hiszek a stratégiai gondolkodás és a technikai megvalósítás összhangjában. Szerintem a kreatív ötleteket pontos adatok és optimalizált rendszerek teszik valóban sikeressé.",
      li2: "Célom a stabil keresletet és növekedést generáló, jól tervezett kommunikáció, ami segíti a mögötte álló szervezet folyamatos növekedését."
    },
    services: {
      eyebrow: "Szolgáltatások",
      heading: "Miben segíthetek?",
      lead: "Értsd a piacod, segítsd az ügyfeled, növeld a profitod. Ezekben az elvekben hiszek, és a tevékenységemet is ezek köré építettem fel.",
      s1: "Ügyfélszerzés & növekedés",
      s2: "Láthatóság növelése",
      s3: "Social jelenlét, ami üzleti célt szolgál",
      s4: "Analitika & döntéstámogatás",
      s5: "AI – Intelligens folyamatok és automatizáció",
      s6: "Digitális alapok: weboldalak és szoftverek",
      d1: "Bizalmat építő tartalom, olyan rendszerekkel összekötve, amelyek az első kattintástól a lezárásig végigkísérik az ügyfelet – így te az ügyfeleidre koncentrálhatsz.",
      d2: "Legyél ott, ahol a döntések születnek. Nem csak forgalom, hanem olyan érdeklődők, akik valóban értéket jelentenek az üzletnek. Keresőben és fizetett közösségi felületeken.",
      d3: "A social nem a posztolásról szól, hanem a bizalom és a kapcsolatok építéséről, amelyek valódi üzleti eredménnyé válnak.",
      d4: "Csak azt tudod fejleszteni, amit mérsz. A jó mérés minden növekedési döntés alapja.",
      d5: "Adatrögzítés, elemzés, vezetői összefoglaló – csak néhány azokból a feladatokból, amelyek egyetlen kattintásra egyszerűsödhetnek.",
      d6: "A marketing csak stabil alapokon működik. Logikus, átlátható és gyors weboldalakat és egyedi eszközöket építek."
    },
    quote: {
      pre: "Van egy víziód?",
      text: "Nekünk van kávénk és végtelen lelkesedésünk hozzá."
    },
    testimonials: {
      eyebrow: "Vélemények",
      heading1: "Rólam", heading2: "mondták.",
      lead: "Minden ügyfél egy bizalom, amit megbecsülünk, és egy felelősség, amit komolyan veszünk – biztonságos, gyors és jövőálló digitális megoldásokkal.",
      r1text: "Ahol Zsolt igazán kiemelkedik, az a technikai mélység összekötése stratégiai, konkrét meglátásokkal minden marketing területhez igazítva. SEO-tól a fizetett hirdetéseken át a CRO-ig és az analitikáig – nem csak megoldásokat valósít meg, hanem biztosítja, hogy minden technikai beállítás a csatorna- és kampánycélokat szolgálja.",
      r1name: "Victor Villarruel", r1role: "Lead Data Analyst @ Velux",
      r2text: "Lenyűgözött Zsolt képessége a folyamatok automatizálásában és az adatvezérelt döntéshozatalban, valamint a következetessége és megbízhatósága.",
      r2name: "Vattamány Imre", r2role: "Regional Digital Marketing Manager @ Bosch Magyarország",
      r3text: "Volt szerencsém együtt dolgozni Zsolttal. Igazán szenvedélyesen végzi a munkáját. Öröm vele dolgozni, mert mindig időben teljesít, és folyamatosan új ötletekkel áll elő, hogy értékes projektek szülessenek.",
      r3name: "Peter Gaspar", r3role: "CEO @ Oxifa project",
      r4text: "Mindig lenyűgözött a webanalitikában és a marketingtechnológiában szerzett szakértelme. Minden helyzethez pozitívan és őszinte segítőkészséggel állt hozzá, így a problémamegoldás egyszerre volt hatékony és élvezetes.",
      r4name: "András Komjáthy", r4role: "Senior Commercial Analyst @ VELUX"
    },
    contact: {
      eyebrow: "Kapcsolat",
      heading: "Küldj nekem üzenetet",
      lead: "Minden ügyfél egy bizalom, amit megbecsülünk, és egy felelősség, amit komolyan veszünk – biztonságos, gyors és jövőálló digitális megoldásokkal.",
      kEmail: "E-mail", kPhone: "Telefon", kSocial: "Közösségi",
      fFirst: "Keresztnév", fLast: "Vezetéknév", fEmail: "E-mail cím",
      fPhone: "Telefonszám", fMessage: "Írd meg az üzeneted",
      check1pre: "Hozzájárulok, hogy a fenti űrlapon megadott személyes adataimat és elérhetőségeimet az oldal tulajdonosa kezelje. Kijelentem, hogy elolvastam és megértettem az",
      check1link: "Adatvédelmi tájékoztatót",
      check1post: ", és a megadott adatok valósak.",
      check2: "Hozzájárulok, hogy az oldal tulajdonosa marketing célú e-maileket küldjön számomra.",
      btn: "Felveszem a kapcsolatot",
      recaptcha: "Nem vagyok robot"
    },
    footer: {
      label: "Segítségre van szükséged?",
      tw1: "HÍVJ", tw2: "ÍRJ!",
      tag1: "Marketing", tag2: "Technológia", tag3: "Stratégia",
      copy: "Minden jog fenntartva.",
      privacy: "Adatkezelési tájékoztató"
    },
    blog: {
      title: "Blog & meglátások",
      lead: "Gondolatok marketingről, technológiáról és növekedési stratégiákról – gyakorlati nézőpontból, valós projektek tapasztalataiból.",
      search: "Keresés a cikkek között…",
      allTopics: "Minden téma", allCats: "Minden kategória",
      readMore: "Tovább olvasom",
      loadMore: "További cikkek",
      catGrowth: "Növekedés", catSeo: "SEO", catAi: "AI & Automatizáció",
      catAnalytics: "Analitika", catStrategy: "Stratégia",
      p1title: "Hogyan építs kiszámítható ügyfélszerzési rendszert?",
      p1excerpt: "A kampányok jönnek-mennek, a rendszer marad. Megmutatom, milyen elemekből áll egy stabil, skálázható ügyfélszerzési folyamat.",
      p2title: "SEO 2026-ban: amire valóban érdemes figyelni",
      p2excerpt: "A keresőoptimalizálás alapjai nem változtak, de a hangsúlyok igen. Ezekre a tényezőkre koncentrálj idén.",
      p3title: "Az AI a marketingben: hol segít és hol nem",
      p3excerpt: "Az automatizáció időt szabadít fel, de nem helyettesíti a stratégiát. Józan keret az AI bevezetéséhez.",
      p4title: "Attribúció: miért hazudik a legtöbb riport?",
      p4excerpt: "Ha rosszul méred, rosszul döntesz. Az attribúciós modellek buktatói és egy működő megközelítés.",
      p5title: "A weboldal mint értékesítési eszköz",
      p5excerpt: "Egy weboldal nem névjegy, hanem munkatárs. Így alakítsd át a sajátodat bevételtermelő felületté.",
      p6title: "Konverzióoptimalizálás: kis lépések, nagy hatás",
      p6excerpt: "Nem kell mindent újratervezni. A CRO arról szól, hogyan hozd ki a maximumot a meglévő forgalomból."
    },
    post: {
      backToBlog: "Vissza a bloghoz",
      category: "Növekedés",
      title: "Hogyan építs kiszámítható ügyfélszerzési rendszert?",
      lead: "A legtöbb vállalkozás kampányokban gondolkodik, pedig a valódi növekedés egy jól felépített rendszerből fakad. Ebben a cikkben végigvesszük a stabil ügyfélszerzés építőköveit.",
      h1: "A kampány nem stratégia",
      pa: "A kampány egy eszköz, nem cél. Önmagában látványos eredményt hozhat rövid távon, de ha nincs mögötte rendszer, a hatás elillan, amint a költségkeret elfogy. A kiszámítható növekedés titka, hogy a kampányokat egy nagyobb gépezet részeként kezeljük.",
      pb: "Egy jól működő ügyfélszerzési rendszerben minden elem egymásra épül: a csatorna, az üzenet, a mérés és az utánkövetés. Ha bármelyik hiányzik, a teljes folyamat sérül.",
      h2: "A rendszer négy pillére",
      pc: "Az alábbi négy területet érdemes párhuzamosan, nem egymás után fejleszteni. A leggyakoribb hiba, hogy a vállalkozások csak a forgalomszerzésre koncentrálnak, a többit pedig elhanyagolják.",
      li1: "Forgalom: stabil, több lábon álló csatornamix, amely nem függ egyetlen platformtól.",
      li2: "Konverzió: a látogatóból érdeklődő, az érdeklődőből ügyfél válik – mérhető lépésekben.",
      li3: "Mérés: pontos attribúció, hogy lássuk, mi működik valójában.",
      li4: "Megtartás: a meglévő ügyfél a legolcsóbb növekedési forrás.",
      quote: "A marketing nem költség, hanem mérhetően működő, tervezett rendszer.",
      h3: "Hol kezdd?",
      pd: "Kezdd a méréssel. Ha nem látod tisztán, honnan jönnek az ügyfeleid és melyik lépésnél morzsolódnak le, minden további döntés találgatás. Ezután építsd fel a hiányzó pilléreket – egyenként, türelmesen.",
      pe: "A rendszerépítés lassabb, mint egy kampány elindítása, de a hozama tartós. Hat hónap következetes munka többet ér, mint tucatnyi szétszórt akció.",
      shareLabel: "Oszd meg:",
      recent: "Legfrissebb cikkek",
      categories: "Kategóriák",
      tags: "Címkék",
      ctaTitle: "Van egy projekted, vagy dolgoznál velem?",
      ctaBtn: "Beszéljünk most"
    },
    misc: { count: "cikk", noResult: "Nincs a keresésnek megfelelő cikk." }
  },

  /* ===================== ENGLISH ========================================= */
  en: {
    nav: {
      home: "Home", intro: "Introduction", references: "References",
      services: "How can I help", blog: "Blog", contact: "Contact Us"
    },
    hero: {
      stat1num: "15+", stat1label: "Years of experience",
      stat2num: "46",  stat2label: "Countries",
      subtitle1: "Marketing", subtitle2: "Technology", subtitle3: "Strategy",
      scroll: "Scroll down"
    },
    motto: {
      text: "Know your market, help your client, scale your profit."
    },
    counters: {
      heading: "Results in numbers",
      c1num: "265", c1suffix: "%", c1label: "Increase in organic traffic",
      c2num: "3",   c2suffix: "x", c2label: "Multiple conversions",
      c3num: "83",  c3suffix: "%", c3label: "Improvement in attribution"
    },
    brands: {
      eyebrow: "References",
      heading: "Brands I have worked with.",
      lead: "I see these partnerships as both recognition and responsibility: a commitment to deliver agile, secure and future-ready digital transformation for businesses worldwide."
    },
    about: {
      eyebrow: "Introduction",
      heading: "A few words about me.",
      p1: "For more than 15 years I have been planning digital customer acquisition and growth strategies for businesses that want predictable results rather than one-off campaigns. I have worked with international corporations and small and medium-sized companies alike, in B2B, B2C and startup environments, on complex enterprise and e-commerce projects.",
      p2: "For me, marketing is not a cost but a measurable, well-aligned and deliberately designed system. A system that does not exist for its own sake: it helps businesses gain ground when they deliver real value to their clients every single day.",
      p3: "I have worked as a copywriter, developer, marketer and salesperson. I look for synergy. A great message is worthless without the right channel, and a great channel is worthless without a well-structured system behind it that serves the actual needs. I build stable foundations under optimal load. I use automation to support human processes, freeing up working hours and creativity.",
      li1: "I believe in the alignment of strategic thinking and technical execution. Creative ideas become truly successful only when backed by accurate data and optimised systems.",
      li2: "My goal is well-designed communication that generates stable demand and growth, supporting the continuous development of the organisation behind it."
    },
    services: {
      eyebrow: "Services",
      heading: "How can I help?",
      lead: "Know your market, help your client, scale your profit. These are the principles I believe in, and I have built my work around them.",
      s1: "Customer acquisition & growth",
      s2: "Increasing visibility",
      s3: "Social presence that serves business goals",
      s4: "Analytics & decision support",
      s5: "AI – Intelligent processes and automation",
      s6: "Digital foundations: websites and software",
      d1: "Content that builds trust, joined up by frameworks that carry the customer from the first click to the close, so you can focus on serving clients.",
      d2: "Be found where decisions are made. Not just traffic, but the kind of prospects that are worth something to the business. Search and paid social.",
      d3: "Social isn’t about posting. It’s about building trust and relationships that turn into real business outcomes.",
      d4: "You can only improve what you measure. Good measurement is the foundation every growth decision sits on.",
      d5: "Data entry, analysis, an executive summary. Just a few of the things that can come down to a single click.",
      d6: "Marketing only works on solid ground. I build websites and custom tools that are logical, clear and fast."
    },
    quote: {
      pre: "Got a vision?",
      text: "We've got caffeine and emotional availability."
    },
    testimonials: {
      eyebrow: "Testimonials",
      heading1: "What people", heading2: "say about me.",
      lead: "Every client represents a trust we value and a responsibility we take seriously – delivering secure, agile and future-ready digital solutions.",
      r1text: "Where he truly stands out is in bridging that technical depth with strategic, actionable insights tailored to each marketing discipline. From SEO and paid media to CRO and analytics, Zsolt doesn't just implement solutions – he ensures every technical setup directly supports channel goals and campaign objectives.",
      r1name: "Victor Villarruel", r1role: "Lead Data Analyst @ Velux",
      r2text: "I was impressed by Zsolt's ability to drive process automation and data-driven decision making, along with his consistency and trustworthiness.",
      r2name: "Imre Vattamány", r2role: "Regional Digital Marketing Manager @ Bosch Hungary",
      r3text: "I've had the chance to work with Zsolt. He is really passionate about his job. It's a pleasure to work with him as he is always on time and always delivers new ideas to create valuable projects.",
      r3name: "Peter Gaspar", r3role: "CEO @ Oxifa project",
      r4text: "I was always impressed by his expertise in web analytics and marketing technology. He consistently approached each interaction with positivity and a genuine willingness to help, creating an atmosphere that made problem-solving both effective and enjoyable.",
      r4name: "András Komjáthy", r4role: "Senior Commercial Analyst @ VELUX"
    },
    contact: {
      eyebrow: "Contact",
      heading: "Send me a message",
      lead: "Every client represents a trust we value and a responsibility we take seriously – delivering secure, agile and future-ready digital solutions.",
      kEmail: "Email", kPhone: "Phone", kSocial: "Social",
      fFirst: "First name", fLast: "Last name", fEmail: "Email address",
      fPhone: "Phone number", fMessage: "Write a message",
      check1pre: "I agree that the personal data and contact details I provide in the form above may be processed by the owner of the site. I declare that I have read and understood the",
      check1link: "Privacy Policy",
      check1post: ", and that the data provided is accurate.",
      check2: "I agree that the owner of the site may send me marketing emails.",
      btn: "Let's Contact",
      recaptcha: "I'm not a robot"
    },
    footer: {
      label: "Need a hand?",
      tw1: "CALL", tw2: "WRITE!",
      tag1: "Marketing", tag2: "Technology", tag3: "Strategy",
      copy: "All rights reserved.",
      privacy: "Privacy Policy"
    },
    blog: {
      title: "Blog & insights",
      lead: "Thoughts on marketing, technology and growth strategy – from a practical point of view, based on real project experience.",
      search: "Search articles…",
      allTopics: "All topics", allCats: "All categories",
      readMore: "Read more",
      loadMore: "Load more articles",
      catGrowth: "Growth", catSeo: "SEO", catAi: "AI & Automation",
      catAnalytics: "Analytics", catStrategy: "Strategy",
      p1title: "How to build a predictable customer acquisition system",
      p1excerpt: "Campaigns come and go, the system stays. Here are the building blocks of a stable, scalable acquisition process.",
      p2title: "SEO in 2026: what really deserves your attention",
      p2excerpt: "The fundamentals of search optimisation haven't changed, but the priorities have. Focus on these factors this year.",
      p3title: "AI in marketing: where it helps and where it doesn't",
      p3excerpt: "Automation frees up time but doesn't replace strategy. A level-headed framework for adopting AI.",
      p4title: "Attribution: why most reports lie",
      p4excerpt: "If you measure it wrong, you decide it wrong. The pitfalls of attribution models and an approach that works.",
      p5title: "The website as a sales tool",
      p5excerpt: "A website is not a business card, it's a team member. Turn yours into a revenue-generating asset.",
      p6title: "Conversion optimisation: small steps, big impact",
      p6excerpt: "You don't need to redesign everything. CRO is about getting the most out of the traffic you already have."
    },
    post: {
      backToBlog: "Back to blog",
      category: "Growth",
      title: "How to build a predictable customer acquisition system",
      lead: "Most businesses think in campaigns, yet real growth comes from a well-built system. In this article we walk through the building blocks of stable customer acquisition.",
      h1: "A campaign is not a strategy",
      pa: "A campaign is a tool, not a goal. On its own it can deliver impressive short-term results, but without a system behind it the effect fades as soon as the budget runs out. The secret of predictable growth is treating campaigns as part of a larger machine.",
      pb: "In a well-functioning acquisition system every element builds on the others: the channel, the message, the measurement and the follow-up. If any one is missing, the whole process suffers.",
      h2: "The four pillars of the system",
      pc: "It's worth developing the following four areas in parallel rather than one after another. The most common mistake is that businesses focus only on traffic and neglect the rest.",
      li1: "Traffic: a stable, diversified channel mix that doesn't depend on a single platform.",
      li2: "Conversion: visitors become leads and leads become clients – in measurable steps.",
      li3: "Measurement: accurate attribution so we can see what truly works.",
      li4: "Retention: an existing client is the cheapest source of growth.",
      quote: "Marketing is not a cost but a measurable, deliberately designed system.",
      h3: "Where to start?",
      pd: "Start with measurement. If you can't clearly see where your clients come from and where they drop off, every further decision is guesswork. Then build the missing pillars – one by one, patiently.",
      pe: "Building a system is slower than launching a campaign, but the return lasts. Six months of consistent work is worth more than a dozen scattered actions.",
      shareLabel: "Share:",
      recent: "Recent articles",
      categories: "Categories",
      tags: "Tags",
      ctaTitle: "Have a project or want to work together?",
      ctaBtn: "Let's talk now"
    },
    misc: { count: "articles", noResult: "No articles match your search." }
  },

  /* ===================== DEUTSCH ========================================= */
  de: {
    nav: {
      home: "Startseite", intro: "Vorstellung", references: "Referenzen",
      services: "Wie ich helfe", blog: "Blog", contact: "Kontakt"
    },
    hero: {
      stat1num: "15+", stat1label: "Jahre Erfahrung",
      stat2num: "46",  stat2label: "Ländern",
      subtitle1: "Marketing", subtitle2: "Technologie", subtitle3: "Strategie",
      scroll: "Nach unten scrollen"
    },
    motto: {
      text: "Kenne deinen Markt, hilf deinem Kunden, steigere deinen Gewinn."
    },
    counters: {
      heading: "Ergebnisse in Zahlen",
      c1num: "265", c1suffix: "%", c1label: "Mehr organischer Traffic",
      c2num: "3",   c2suffix: "x", c2label: "Vielfache Conversions",
      c3num: "83",  c3suffix: "%", c3label: "Bessere Attribution"
    },
    brands: {
      eyebrow: "Referenzen",
      heading: "Marken, mit denen ich gearbeitet habe.",
      lead: "Ich verstehe diese Partnerschaften als Anerkennung und Verantwortung zugleich: als Verpflichtung zu agiler, sicherer und zukunftsfähiger digitaler Transformation für Unternehmen weltweit."
    },
    about: {
      eyebrow: "Vorstellung",
      heading: "Ein paar Worte über mich.",
      p1: "Seit mehr als 15 Jahren plane ich digitale Kundengewinnung und Wachstumsstrategien für Unternehmen, die keine einmaligen Kampagnen, sondern planbare Ergebnisse wollen. Ich habe sowohl mit internationalen Großunternehmen als auch mit kleinen und mittleren Betrieben gearbeitet – im B2B-, B2C- und Startup-Umfeld, an komplexen Unternehmens- und E-Commerce-Projekten.",
      p2: "Für mich ist Marketing keine Kostenstelle, sondern ein messbares, abgestimmtes und bewusst gestaltetes System. Ein System, das nicht um seiner selbst willen existiert: Es hilft Unternehmen, die ihren Kunden jeden Tag echten Wert liefern, Boden zu gewinnen.",
      p3: "Ich habe als Texter, Entwickler, Marketer und Vertriebler gearbeitet. Ich suche die Synergie. Eine gute Botschaft ist wertlos ohne den richtigen Kanal, und ein guter Kanal ist wertlos ohne ein gut strukturiertes System dahinter, das die tatsächlichen Bedürfnisse bedient. Ich baue stabile Grundlagen bei optimaler Auslastung. Mit Automatisierung unterstütze ich menschliche Prozesse und setze so Arbeitsstunden und Kreativität frei.",
      li1: "Ich glaube an den Einklang von strategischem Denken und technischer Umsetzung. Kreative Ideen werden erst durch präzise Daten und optimierte Systeme wirklich erfolgreich.",
      li2: "Mein Ziel ist gut geplante Kommunikation, die stabile Nachfrage und Wachstum erzeugt und die kontinuierliche Entwicklung der Organisation dahinter unterstützt."
    },
    services: {
      eyebrow: "Leistungen",
      heading: "Wie kann ich helfen?",
      lead: "Kenne deinen Markt, hilf deinem Kunden, steigere deinen Gewinn. An diese Prinzipien glaube ich, und um sie herum habe ich meine Arbeit aufgebaut.",
      s1: "Kundengewinnung & Wachstum",
      s2: "Sichtbarkeit steigern",
      s3: "Social-Präsenz mit Geschäftszielen",
      s4: "Analytik & Entscheidungshilfe",
      s5: "KI – Intelligente Prozesse und Automatisierung",
      s6: "Digitale Grundlagen: Websites und Software",
      d1: "Inhalte, die Vertrauen schaffen – verbunden mit Systemen, die den Kunden vom ersten Klick bis zum Abschluss begleiten, damit du dich auf deine Kunden konzentrieren kannst.",
      d2: "Sei dort sichtbar, wo Entscheidungen fallen. Nicht nur Traffic, sondern Interessenten, die für das Geschäft wirklich wertvoll sind. In der Suche und über bezahlte Social-Kanäle.",
      d3: "Social bedeutet nicht einfach Posten. Es geht um Vertrauen und Beziehungen, die zu echten Geschäftsergebnissen werden.",
      d4: "Du kannst nur verbessern, was du misst. Gute Messung ist die Grundlage jeder Wachstumsentscheidung.",
      d5: "Dateneingabe, Analyse, eine Management-Zusammenfassung. Nur einige der Dinge, die sich auf einen einzigen Klick reduzieren lassen.",
      d6: "Marketing funktioniert nur auf solidem Fundament. Ich baue logische, klare und schnelle Websites und maßgeschneiderte Tools."
    },
    quote: {
      pre: "Hast du eine Vision?",
      text: "Wir haben Koffein und grenzenlose Begeisterung dafür."
    },
    testimonials: {
      eyebrow: "Stimmen",
      heading1: "Das sagen", heading2: "andere über mich.",
      lead: "Jeder Kunde steht für Vertrauen, das wir schätzen, und Verantwortung, die wir ernst nehmen – mit sicheren, agilen und zukunftsfähigen digitalen Lösungen.",
      r1text: "Wo Zsolt wirklich herausragt, ist die Verbindung technischer Tiefe mit strategischen, umsetzbaren Erkenntnissen für jede Marketingdisziplin. Von SEO über Paid Media bis zu CRO und Analytik setzt er nicht nur Lösungen um – er stellt sicher, dass jedes technische Setup die Kanal- und Kampagnenziele direkt unterstützt.",
      r1name: "Victor Villarruel", r1role: "Lead Data Analyst @ Velux",
      r2text: "Mich hat Zsolts Fähigkeit zur Prozessautomatisierung und datengetriebenen Entscheidungsfindung beeindruckt, ebenso seine Beständigkeit und Verlässlichkeit.",
      r2name: "Imre Vattamány", r2role: "Regional Digital Marketing Manager @ Bosch Ungarn",
      r3text: "Ich hatte die Gelegenheit, mit Zsolt zu arbeiten. Er ist mit echter Leidenschaft bei der Sache. Die Zusammenarbeit macht Freude, denn er liefert stets pünktlich und bringt laufend neue Ideen ein, um wertvolle Projekte zu schaffen.",
      r3name: "Peter Gaspar", r3role: "CEO @ Oxifa project",
      r4text: "Seine Expertise in Web-Analytics und Marketingtechnologie hat mich stets beeindruckt. Er ging jede Interaktion mit Positivität und echter Hilfsbereitschaft an und schuf so eine Atmosphäre, in der Problemlösung effektiv und angenehm zugleich war.",
      r4name: "András Komjáthy", r4role: "Senior Commercial Analyst @ VELUX"
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Schreib mir eine Nachricht",
      lead: "Jeder Kunde steht für Vertrauen, das wir schätzen, und Verantwortung, die wir ernst nehmen – mit sicheren, agilen und zukunftsfähigen digitalen Lösungen.",
      kEmail: "E-Mail", kPhone: "Telefon", kSocial: "Social",
      fFirst: "Vorname", fLast: "Nachname", fEmail: "E-Mail-Adresse",
      fPhone: "Telefonnummer", fMessage: "Schreib eine Nachricht",
      check1pre: "Ich stimme zu, dass die im Formular oben angegebenen personenbezogenen Daten und Kontaktdaten vom Inhaber der Website verarbeitet werden dürfen. Ich erkläre, dass ich die",
      check1link: "Datenschutzerklärung",
      check1post: " gelesen und verstanden habe und dass die angegebenen Daten korrekt sind.",
      check2: "Ich stimme zu, dass mir der Inhaber der Website Marketing-E-Mails senden darf.",
      btn: "Kontakt aufnehmen",
      recaptcha: "Ich bin kein Roboter"
    },
    footer: {
      label: "Brauchst du Unterstützung?",
      tw1: "RUF AN", tw2: "SCHREIB!",
      tag1: "Marketing", tag2: "Technologie", tag3: "Strategie",
      copy: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung"
    },
    blog: {
      title: "Blog & Einblicke",
      lead: "Gedanken zu Marketing, Technologie und Wachstumsstrategie – aus praktischer Sicht, basierend auf echten Projekterfahrungen.",
      search: "Artikel durchsuchen…",
      allTopics: "Alle Themen", allCats: "Alle Kategorien",
      readMore: "Weiterlesen",
      loadMore: "Mehr Artikel laden",
      catGrowth: "Wachstum", catSeo: "SEO", catAi: "KI & Automatisierung",
      catAnalytics: "Analytik", catStrategy: "Strategie",
      p1title: "Wie man ein planbares Kundengewinnungssystem aufbaut",
      p1excerpt: "Kampagnen kommen und gehen, das System bleibt. Hier sind die Bausteine eines stabilen, skalierbaren Akquiseprozesses.",
      p2title: "SEO 2026: worauf es wirklich ankommt",
      p2excerpt: "Die Grundlagen der Suchoptimierung haben sich nicht geändert, die Schwerpunkte schon. Auf diese Faktoren solltest du dich konzentrieren.",
      p3title: "KI im Marketing: wo sie hilft und wo nicht",
      p3excerpt: "Automatisierung schafft Zeit, ersetzt aber keine Strategie. Ein nüchterner Rahmen für die KI-Einführung.",
      p4title: "Attribution: warum die meisten Reports lügen",
      p4excerpt: "Wer falsch misst, entscheidet falsch. Die Fallstricke von Attributionsmodellen und ein funktionierender Ansatz.",
      p5title: "Die Website als Vertriebswerkzeug",
      p5excerpt: "Eine Website ist keine Visitenkarte, sondern ein Teammitglied. So machst du deine zu einem umsatzstarken Werkzeug.",
      p6title: "Conversion-Optimierung: kleine Schritte, große Wirkung",
      p6excerpt: "Du musst nicht alles neu gestalten. CRO bedeutet, das Maximum aus dem vorhandenen Traffic herauszuholen."
    },
    post: {
      backToBlog: "Zurück zum Blog",
      category: "Wachstum",
      title: "Wie man ein planbares Kundengewinnungssystem aufbaut",
      lead: "Die meisten Unternehmen denken in Kampagnen, doch echtes Wachstum entsteht aus einem gut aufgebauten System. In diesem Artikel gehen wir die Bausteine stabiler Kundengewinnung durch.",
      h1: "Eine Kampagne ist keine Strategie",
      pa: "Eine Kampagne ist ein Werkzeug, kein Ziel. Für sich genommen kann sie kurzfristig beeindruckende Ergebnisse liefern, doch ohne ein System dahinter verpufft die Wirkung, sobald das Budget aufgebraucht ist. Das Geheimnis planbaren Wachstums liegt darin, Kampagnen als Teil einer größeren Maschine zu behandeln.",
      pb: "In einem gut funktionierenden Akquisesystem baut jedes Element auf den anderen auf: Kanal, Botschaft, Messung und Nachverfolgung. Fehlt eines davon, leidet der gesamte Prozess.",
      h2: "Die vier Säulen des Systems",
      pc: "Die folgenden vier Bereiche sollten parallel und nicht nacheinander entwickelt werden. Der häufigste Fehler ist, dass Unternehmen sich nur auf Traffic konzentrieren und den Rest vernachlässigen.",
      li1: "Traffic: ein stabiler, breit aufgestellter Kanalmix, der nicht von einer einzigen Plattform abhängt.",
      li2: "Conversion: Aus Besuchern werden Interessenten, aus Interessenten Kunden – in messbaren Schritten.",
      li3: "Messung: präzise Attribution, damit wir sehen, was wirklich funktioniert.",
      li4: "Bindung: Ein bestehender Kunde ist die günstigste Wachstumsquelle.",
      quote: "Marketing ist keine Kostenstelle, sondern ein messbares, bewusst gestaltetes System.",
      h3: "Wo fängst du an?",
      pd: "Beginne mit der Messung. Wenn du nicht klar siehst, woher deine Kunden kommen und wo sie abspringen, ist jede weitere Entscheidung Raterei. Baue dann die fehlenden Säulen auf – eine nach der anderen, geduldig.",
      pe: "Ein System aufzubauen ist langsamer als eine Kampagne zu starten, aber der Ertrag hält an. Sechs Monate konsequente Arbeit sind mehr wert als ein Dutzend verstreute Aktionen.",
      shareLabel: "Teilen:",
      recent: "Neueste Artikel",
      categories: "Kategorien",
      tags: "Schlagwörter",
      ctaTitle: "Hast du ein Projekt oder möchtest du zusammenarbeiten?",
      ctaBtn: "Lass uns sprechen"
    },
    misc: { count: "Artikel", noResult: "Keine Artikel entsprechen deiner Suche." }
  }
};

if (typeof window !== "undefined") { window.translations = translations; }