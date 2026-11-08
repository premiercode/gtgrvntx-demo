// Option C: progressive enhancement only. Content is fully visible without this file.
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveals: hide nothing until JS confirms it can reveal it again.
  if (!reduce && "IntersectionObserver" in window) {
    root.classList.add("js");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    // Safety net: never leave anything hidden.
    window.setTimeout(function () {
      document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("is-in");
      });
    }, 1500);
  }

  // Preview form: intercept submit, announce, send nothing.
  var form = document.querySelector(".postform");
  if (form) {
    var status = form.querySelector(".postform__status");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (status) {
        status.textContent = "";
        window.setTimeout(function () { status.textContent = "Preview only. Nothing was sent."; }, 50);
      }
    });
  }

  // Pause control for the ticker and sticker (WCAG 2.2.2). Shown only when motion is allowed.
  var toggle = document.querySelector(".motion-toggle");
  if (toggle && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    var root = document.documentElement;
    var setPaused = function (p) {
      root.classList.toggle("motion-paused", p);
      toggle.setAttribute("aria-pressed", p ? "true" : "false");
      toggle.textContent = p ? "Play motion" : "Pause motion";
    };
    var saved = false;
    try { saved = window.localStorage.getItem("gtg-motion-paused") === "1"; } catch (e) {}
    setPaused(saved);
    toggle.hidden = false;
    toggle.addEventListener("click", function () {
      var p = !root.classList.contains("motion-paused");
      setPaused(p);
      try { window.localStorage.setItem("gtg-motion-paused", p ? "1" : "0"); } catch (e) {}
    });
  }
})();
