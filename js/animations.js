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
    initTypewriter(true);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero belépő (csak kép, szöveg animáció nélkül) --------------------- */
  gsap.from(".hero__photo img", { opacity: 0, duration: 1, ease: "power3.out" });

  /* --- Szöveges elemek: animáció nélkül, azonnal láthatók ----------------- */
  document.querySelectorAll(".reveal:not(.service-card)").forEach(function (el) {
    gsap.set(el, { opacity: 1, y: 0 });
  });

  /* --- Szolgáltatás-kártyák — lépcsőzetes belépő -------------------------- */
  var svcCards = gsap.utils.toArray(".service-card");
  if (svcCards.length) {
    gsap.set(svcCards, { y: 50, scale: 0.96 });
    ScrollTrigger.batch(svcCards, {
      start: "top 86%",
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          overwrite: true
        });
      }
    });
  }

  /* --- Kép-reveal (clip-path) ---------------------------------------------- */
  document.querySelectorAll(".reveal-img").forEach(function (el) {
    gsap.to(el, {
      clipPath: "inset(0 0 0% 0)",
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  /* --- Szolgáltatás-kártyák — lépcsőzetes belépő --------------------------- */
  var serviceCards = document.querySelectorAll(".service-card");
  if (serviceCards.length) {
    gsap.set(serviceCards, { opacity: 0, y: 56 });
    ScrollTrigger.batch(serviceCards, {
      start: "top 86%",
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          overwrite: true
        });
      }
    });
  }

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

  /* --- Márka-sorok: végtelen marquee + görgetésre gyorsul ------------------ */
  document.querySelectorAll(".brands__row").forEach(function (row) {
    var dir = row.getAttribute("data-direction") === "left" ? 1 : -1;
    var loopWidth = row.scrollWidth / 2; // a tartalom fele = egy teljes szett
    if (loopWidth <= 0) return;

    var startX = dir < 0 ? 0 : -loopWidth;
    gsap.set(row, { x: startX });

    var drift = gsap.to(row, {
      x: dir < 0 ? -loopWidth : 0,
      duration: 38,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: function (x) {
          var v = parseFloat(x) % loopWidth;
          if (v > 0) v -= loopWidth;
          return v + "px";
        }
      }
    });

    /* görgetési sebesség: a scroll picit „meglöki" a sort */
    ScrollTrigger.create({
      trigger: ".brands",
      start: "top bottom",
      end: "bottom top",
      onUpdate: function (self) {
        var boost = 1 + Math.min(Math.abs(self.getVelocity()) / 600, 4);
        gsap.to(drift, { timeScale: boost * dir * -1 < 0 ? boost : boost, duration: 0.4, overwrite: true });
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
    document.querySelectorAll(".reveal, .reveal-img, .service-card").forEach(function (el) {
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