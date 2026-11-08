// Option A: progressive enhancement only. Content is fully visible without this file.
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  // Preview form: intercept submit, never send.
  var form = document.querySelector(".workorder");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) {
        status.textContent = "";
        window.setTimeout(function () { status.textContent = "Preview only. Nothing was sent."; }, 50);
      }
    });
  }

  // Scroll reveal (skipped for reduced motion or missing IntersectionObserver).
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var groups = [
    ".section-head", ".bento > *", ".rentals__copy", ".rentals__visual",
    ".fleet__head", ".unit", ".more-list", ".terms", ".sales__feature", ".consign",
    ".visit__info", ".workorder", ".closer__inner"
  ];
  var items = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.setProperty("--d", (i % 3) * 70 + "ms");
      items.push(el);
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
