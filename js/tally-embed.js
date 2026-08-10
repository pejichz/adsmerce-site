/* Tally embed loader for the UGC application form (ugc.html).
   Lifted out of an inline <script> so the page can run under a
   Content-Security-Policy without allowing inline scripts. Behaviour is
   unchanged: the iframe's real src is only set once Tally's widget script is
   available, and it is set anyway if that script fails to load. */
(function () {
  "use strict";

  var WIDGET = "https://tally.so/widgets/embed.js";

  function loadEmbeds() {
    if (typeof Tally !== "undefined") { Tally.loadEmbeds(); return; }
    document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (frame) {
      frame.src = frame.dataset.tallySrc;
    });
  }

  if (typeof Tally !== "undefined") {
    loadEmbeds();
  } else if (document.querySelector('script[src="' + WIDGET + '"]') === null) {
    var s = document.createElement("script");
    s.src = WIDGET;
    s.onload = loadEmbeds;
    s.onerror = loadEmbeds;
    document.body.appendChild(s);
  }
})();
