/* ==========================================================================
   main.js — Alap funkciók: nyelvváltás, mobilmenü, vélemény-szlájder,
   navbar állapot, űrlap, blog szűrés/lapozás, évszám.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "fz-lang";
  var DEFAULT_LANG = "hu";
  var dict = window.translations || {};

  /* ----- Segéd: pontozott kulcs feloldása (pl. "about.p1") ---------------- */
  function resolve(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  /* ======================================================================
     NYELVI RENDSZER
     ====================================================================== */
  function applyLanguage(lang) {
    if (!dict[lang]) lang = DEFAULT_LANG;
    var pack = dict[lang];

    document.querySelectorAll("[data-translate]").forEach(function (el) {
      var val = resolve(pack, el.getAttribute("data-translate"));
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-translate-placeholder]").forEach(function (el) {
      var val = resolve(pack, el.getAttribute("data-translate-placeholder"));
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    document.documentElement.setAttribute("lang", lang);

    var lf = document.getElementById("langFlag");
    var lc = document.getElementById("langCode");
    if (lf) lf.setAttribute("src", "assets/images/flag-" + lang + ".png");
    if (lc) lc.textContent = lang.toUpperCase();

    document.querySelectorAll("#langMenu button[data-lang]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    /* a blog szövegei nyelvváltáskor frissülnek */
    if (typeof window.renderBlog === "function") window.renderBlog();

    /* GSAP elrendezés frissítése (a szövegek hossza változhat) */
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  function initLanguage() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLanguage(saved || DEFAULT_LANG);

    var wrap = document.getElementById("langSwitch");
    var trigger = document.getElementById("langTrigger");
    var menu = document.getElementById("langMenu");
    if (!wrap || !trigger || !menu) return;

    function closeMenu() {
      wrap.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    }

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = wrap.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      applyLanguage(btn.getAttribute("data-lang"));
      closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) closeMenu();
    });
  }

  /* ======================================================================
     NAVBAR — görgetési állapot + mobilmenü
     ====================================================================== */
  function initNavbar() {
    var navbar = document.getElementById("navbar");
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");

    if (navbar) {
      var onScroll = function () {
        navbar.classList.toggle("is-scrolled", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && links) {
      var backdrop = document.createElement("div");
      backdrop.className = "nav-backdrop";
      document.body.appendChild(backdrop);

      function setMenu(open) {
        links.classList.toggle("is-open", open);
        toggle.classList.toggle("is-open", open);
        backdrop.classList.toggle("is-open", open);
        if (navbar) navbar.classList.toggle("is-menu-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      }

      toggle.addEventListener("click", function () {
        setMenu(!links.classList.contains("is-open"));
      });
      backdrop.addEventListener("click", function () { setMenu(false); });
      links.addEventListener("click", function (e) {
        if (e.target.closest("a")) setMenu(false);
      });
    }
  }

  /* ======================================================================
     SIMA GÖRGETÉS a horgony-linkekhez
     ====================================================================== */

  /* Computes the total fixed-header clearance at call time so the offset
     stays correct whether or not the waitlist banner is currently visible. */
  function navOffset() {
    var style = getComputedStyle(document.documentElement);
    var navH    = parseInt(style.getPropertyValue("--nav-h"),    10) || 112;
    var bannerH = parseInt(style.getPropertyValue("--banner-h"), 10) || 0;
    return navH + bannerH + 16;
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - navOffset();
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  /* ======================================================================
     VÉLEMÉNY-SZLÁJDER — natív görgetés (mobilon ujjal húzható) + nyíl gombok
     ====================================================================== */
  function initReviewSlider() {
    var track = document.getElementById("reviewTrack");
    var prev = document.getElementById("reviewPrev");
    var next = document.getElementById("reviewNext");
    if (!track || !prev || !next) return;

    var viewport = track.parentElement;

    function step() {
      var card = track.querySelector(".review-card");
      if (!card) return viewport.clientWidth;
      var gap = parseFloat(getComputedStyle(track).gap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    next.addEventListener("click", function () {
      if (viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 4) {
        viewport.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        viewport.scrollBy({ left: step(), behavior: "smooth" });
      }
    });

    prev.addEventListener("click", function () {
      if (viewport.scrollLeft <= 4) {
        viewport.scrollTo({ left: viewport.scrollWidth, behavior: "smooth" });
      } else {
        viewport.scrollBy({ left: -step(), behavior: "smooth" });
      }
    });
  }

  /* ======================================================================
     KAPCSOLATI ŰRLAP — egyszerű kliensoldali ellenőrzés
     (a tényleges küldést / reCAPTCHA-t a kliens köti be a saját rendszerével)
     ====================================================================== */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;

      form.querySelectorAll("input, textarea").forEach(function (field) {
        field.style.borderColor = "";
        if (field.hasAttribute("required") && field.type === "checkbox" && !field.checked) ok = false;
        if (field.type === "email" && field.value && !/.+@.+\..+/.test(field.value)) {
          ok = false; field.style.borderColor = "#ef6a45";
        }
        if ((field.name === "first_name" || field.name === "email" || field.name === "message")
            && !field.value.trim()) {
          ok = false; field.style.borderColor = "#ef6a45";
        }
      });

      var btn = form.querySelector('button[type="submit"] span');
      if (!ok) {
        if (btn) btn.textContent = "Kérlek tölts ki minden kötelező mezőt";
        return;
      }
      if (btn) btn.textContent = "Köszönöm! Hamarosan jelentkezem.";
      form.reset();
      /* A kliens ide illeszti a tényleges backend-hívást vagy form-szolgáltatót. */
    });
  }

  /* ======================================================================
     ÉVSZÁM a footerben
     ====================================================================== */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ======================================================================
     BLOG — keresés, kategória-szűrés, lapozás
     ====================================================================== */
  function initBlog() {
    var grid = document.getElementById("blogGrid");
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll(".post-card"));
    var searchInput = document.getElementById("blogSearch");
    var catSelect = document.getElementById("blogCategory");
    var pagination = document.getElementById("blogPagination");
    var emptyMsg = document.getElementById("blogEmpty");
    var PER_PAGE = 6;
    var page = 1;

    function filtered() {
      var q = (searchInput && searchInput.value || "").toLowerCase().trim();
      var cat = (catSelect && catSelect.value) || "all";
      return cards.filter(function (card) {
        var text = card.innerText.toLowerCase();
        var cardCat = card.getAttribute("data-category") || "";
        var matchQ = !q || text.indexOf(q) !== -1;
        var matchC = cat === "all" || cardCat === cat;
        return matchQ && matchC;
      });
    }

    function paint() {
      var list = filtered();
      cards.forEach(function (c) { c.style.display = "none"; });
      list.slice(0, page * PER_PAGE).forEach(function (c) { c.style.display = ""; });

      if (emptyMsg) emptyMsg.style.display = list.length ? "none" : "block";

      if (pagination) {
        var pages = Math.ceil(list.length / PER_PAGE);
        pagination.innerHTML = "";
        if (pages > 1) {
          for (var i = 1; i <= pages; i++) {
            (function (n) {
              var b = document.createElement("button");
              b.type = "button";
              b.textContent = n;
              if (n === page) b.classList.add("is-active");
              b.addEventListener("click", function () {
                page = n;
                paint();
                grid.scrollIntoView({ behavior: "smooth", block: "start" });
              });
              pagination.appendChild(b);
            })(i);
          }
        }
      }
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }

    if (searchInput) searchInput.addEventListener("input", function () { page = 1; paint(); });
    if (catSelect) catSelect.addEventListener("change", function () { page = 1; paint(); });

    window.renderBlog = paint; /* nyelvváltáskor újrarajzol */
    paint();
  }

  /* ======================================================================
     INDÍTÁS
     ====================================================================== */
  /* ======================================================================
     HORGONY KORREKCIÓ
     Másik oldalról érkező #hivatkozás (pl. index.html#contact) esetén az
     oldal a képek és animációk betöltése előtt rosszul ugrik. A teljes
     betöltés után újra a megfelelő szakaszra görget.
     ====================================================================== */
  function initHashScroll() {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    function scrollToHash() {
      var target;
      try {
        target = document.querySelector(hash);
      } catch (e) {
        return;
      }
      if (!target) return;
      var top = target.getBoundingClientRect().top + window.scrollY - navOffset();
      window.scrollTo({ top: top, behavior: "auto" });
    }

    window.addEventListener("load", function () {
      scrollToHash();
      setTimeout(scrollToHash, 300);
    });
  }

  /* ======================================================================
     MEGOSZTÁS GOMBOK (blogcikk oldal)
     ====================================================================== */
  function initShare() {
    var li = document.getElementById("shareLinkedIn");
    var fb = document.getElementById("shareFacebook");
    var copy = document.getElementById("shareCopy");
    if (!li && !fb && !copy) return;

    var url = encodeURIComponent(window.location.href);

    if (li) {
      li.href = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
    }
    if (fb) {
      fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    }
    if (copy) {
      copy.addEventListener("click", function () {
        var link = window.location.href;
        function done() {
          copy.classList.add("is-copied");
          setTimeout(function () { copy.classList.remove("is-copied"); }, 1800);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).then(done, done);
        } else {
          var tmp = document.createElement("input");
          tmp.value = link;
          document.body.appendChild(tmp);
          tmp.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(tmp);
          done();
        }
      });
    }
  }

  function init() {
    initLanguage();
    initNavbar();
    initSmoothScroll();
    initHashScroll();
    initReviewSlider();
    initContactForm();
    initYear();
    initBlog();
    initShare();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();