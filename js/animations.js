/* ==========================================================================
   animations.js — GSAP animációk (reveal, számlálók, márka-marquee,
   navbar, írógép-effekt). Csökkentett mozgás esetén kíméletes módba vált.
   ========================================================================== */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";

  document.documentElement.classList.add("is-ready");

  /* --- Csökkentett mozgás: minden azonnal látható -------------------------- */
  if (reduce || !hasGSAP) {
    document.querySelectorAll(".reveal, .reveal-img").forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = "none";
      el.style.clipPath = "none";
    });
    var firstWord = document.querySelector(".hero__word");
    if (firstWord) firstWord.classList.add("is-active");
    initTypewriter(true);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero belépő: kép halkan beúszik, fejléc felemelkedik --------------- */
  gsap.from(".hero__photo img", { opacity: 0, x: 40, duration: 1.2, ease: "power3.out" });
  gsap.from(".hero__eyebrow, .hero__headline, .hero__meta", {
    opacity: 0, y: 30, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15
  });

  /* --- Hero forgó szó: share / growth / reach / revenue ------------------- */
  (function rotateHeroWord() {
    var words = gsap.utils.toArray(".hero__word");
    if (words.length < 2) return;
    var active = 0;
    words.forEach(function (w, idx) {
      w.classList.toggle("is-active", idx === active);
    });
    setInterval(function () {
      words[active].classList.remove("is-active");
      active = (active + 1) % words.length;
      words[active].classList.add("is-active");
    }, 2200);
  })();

  /* --- Szöveges elemek: animáció nélkül, azonnal láthatók ----------------- */
  document.querySelectorAll(".reveal:not(.service-row):not(.brand-row)").forEach(function (el) {
    gsap.set(el, { opacity: 1, y: 0 });
  });

  /* --- Kép-reveal (clip-path) ---------------------------------------------- */
  document.querySelectorAll(".reveal-img").forEach(function (el) {
    gsap.to(el, {
      clipPath: "inset(0 0 0% 0)",
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  /* --- Szolgáltatás-sorok és márka-sorok: lépcsőzetes belépő -------------- */
  function revealRows(selector) {
    var rows = gsap.utils.toArray(selector);
    if (!rows.length) return;
    gsap.set(rows, { opacity: 0, y: 40 });
    ScrollTrigger.batch(rows, {
      start: "top 88%",
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true
        });
      }
    });
  }
  revealRows(".service-row");
  revealRows(".brand-row");

  /* --- About: csomópont-vonalak berajzolása, majd a dobozok megjelenése --- */
  (function aboutNodes() {
    var map = document.querySelector(".about__map");
    if (!map) return;
    var lines = map.querySelectorAll(".about__lines line");
    var nodes = map.querySelectorAll(".node");
    var photo = map.querySelector(".about__photo");

    lines.forEach(function (ln) {
      var len = ln.getTotalLength();
      ln.style.strokeDasharray = len;
      ln.style.strokeDashoffset = len;
    });
    gsap.set(nodes, { opacity: 0, scale: 0.8 });
    gsap.set(photo, { opacity: 0, scale: 0.9 });

    ScrollTrigger.create({
      trigger: map,
      start: "top 78%",
      once: true,
      onEnter: function () {
        gsap.to(photo, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" });
        gsap.to(lines, {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: "power2.inOut",
          stagger: 0.08
        });
        gsap.to(nodes, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "back.out(1.6)"
        });
      }
    });
  })();

  /* --- Számlálók ----------------------------------------------------------- */
  document.querySelectorAll(".count").forEach(function (el) {
    var target = parseFloat(el.getAttribute("data-target")) || 0;
    var obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: function () {
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () { el.textContent = Math.round(obj.val); }
        });
      }
    });
  });

  /* --- Footer parallax-szerű cím ------------------------------------------ */
  var headline = document.querySelector(".footer__headline");
  if (headline) {
    gsap.from(headline, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".footer", start: "top 85%" }
    });
  }

  /* --- Megbízható megjelenés --------------------------------------------- */
  /* Frissítjük a triggereket, ha a képek/betűk betöltődtek, és van egy
     biztonsági háló: ha valami 2,5 mp után is rejtve maradna, megjelenítjük. */
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  setTimeout(function () {
    document.querySelectorAll(".reveal, .reveal-img, .service-row, .brand-row").forEach(function (el) {
      if (parseFloat(getComputedStyle(el).opacity) < 0.05) {
        gsap.set(el, { opacity: 1, y: 0, scale: 1, clipPath: "none" });
      }
    });
    ScrollTrigger.refresh();
  }, 2500);

  initTypewriter(true);

  /* ======================================================================
     Írógép-effekt — a footer "HÍVJ / ÍRJ!" felirat
     ====================================================================== */
  function initTypewriter(staticMode) {
    var el = document.getElementById("typewriter");
    if (!el) return;

    var w1 = el.getAttribute("data-word1") || "HÍVJ";
    var w2 = el.getAttribute("data-word2") || "ÍRJ!";

    if (staticMode) { el.textContent = w1 + " / " + w2; return; }

    var words = [w1, w2];
    var wi = 0, ci = 0, deleting = false;

    function render(text) {
      el.innerHTML =
        '<span class="tw-word is-underline">' + text + "</span>" +
        '<span class="caret">&nbsp;</span>';
    }

    function tick() {
      var word = words[wi];
      ci += deleting ? -1 : 1;
      render(word.substring(0, ci));

      var delay = deleting ? 70 : 130;
      if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
      else if (deleting && ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        delay = 350;
      }
      setTimeout(tick, delay);
    }

    /* csak akkor indul, ha a footer látható lesz */
    ScrollTrigger.create({
      trigger: ".footer",
      start: "top 80%",
      once: true,
      onEnter: function () { ci = 0; tick(); }
    });
  }
})();