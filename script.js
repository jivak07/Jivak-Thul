// Progressive enhancement only. Every word on this site lives in the raw
// HTML — this script just adds a scroll-reveal animation for human visitors.
// Search engines and AI crawlers that don't run JS still see everything.

(function () {
  var sections = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add("is-visible");
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach(function (el) { observer.observe(el); });
})();