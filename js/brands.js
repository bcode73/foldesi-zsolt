/* Márka-előnézet: a kiemelt logó a képernyő közepére úszik.
   Asztali gépen hover, mobilon a képernyő közepén lévő elemre görgetve. */
(function () {
  function init() {
    var section = document.querySelector(".brands");
    if (!section) return;
    var rows = Array.prototype.slice.call(section.querySelectorAll(".brand-row"));
    if (!rows.length) return;

    var preview = document.createElement("div");
    preview.className = "brand-preview";
    preview.setAttribute("aria-hidden", "true");
    var pimg = document.createElement("img");
    pimg.alt = "";
    preview.appendChild(pimg);
    document.body.appendChild(preview);

    var hovering = false;
    var current = null;

    function activate(row) {
      if (row === current) return;
      current = row;
      rows.forEach(function (r) { r.classList.toggle("is-active", r === row); });
      if (row) {
        var img = row.querySelector(".brand-row__thumb img");
        if (img) pimg.src = img.getAttribute("src");
        preview.classList.add("is-active");
      } else {
        preview.classList.remove("is-active");
      }
    }

    rows.forEach(function (row) {
      row.addEventListener("mouseenter", function () { hovering = true; activate(row); });
    });
    section.addEventListener("mouseleave", function () { hovering = false; activate(null); });

    function onScroll() {
      if (hovering) return;
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var mid = vh / 2;
      var s = section.getBoundingClientRect();
      if (s.bottom < vh * 0.15 || s.top > vh * 0.85) { activate(null); return; }
      var best = null, bestDist = Infinity;
      rows.forEach(function (row) {
        var r = row.getBoundingClientRect();
        var c = r.top + r.height / 2;
        var d = Math.abs(c - mid);
        if (d < bestDist) { bestDist = d; best = row; }
      });
      if (best && bestDist < vh * 0.30) activate(best);
      else activate(null);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();