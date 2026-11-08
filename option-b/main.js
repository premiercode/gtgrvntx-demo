// Option B: gentle reveals and the preview-only form handler.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal on scroll: only hide content once we know JS and IntersectionObserver work.
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
    var items = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });

    // Safety net: never leave anything hidden.
    window.setTimeout(function () {
      items.forEach(function (el) { el.classList.add("is-visible"); });
    }, 4000);
  }

  // Preview-only form: intercept submit and announce that nothing was sent.
  var form = document.querySelector(".request-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (status) {
        status.textContent = "";
        window.setTimeout(function () {
          status.textContent = "Preview only. Nothing was sent.";
        }, 50);
      }
    });
  }
})();
