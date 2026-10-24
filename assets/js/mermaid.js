// Mermaid diagrams: converts the ```mermaid code blocks rendered by Rouge
// into real diagrams, and keeps them in sync with the light/dark theme.
(function () {
  if (typeof mermaid === "undefined") return;

  var BLOCK_SELECTOR = "div.language-mermaid.highlighter-rouge, pre > code.language-mermaid";

  var collect = function () {
    var nodes = document.querySelectorAll(BLOCK_SELECTOR);
    var blocks = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      // For `pre > code`, replace the whole `pre` so no stray markup is left behind.
      var target = node.tagName === "CODE" ? node.parentNode : node;
      var source = node.textContent.replace(/\s+$/, "");
      if (!source) continue;
      var host = document.createElement("div");
      host.className = "mermaid";
      host.setAttribute("data-mermaid-source", source);
      target.parentNode.replaceChild(host, target);
      blocks.push(host);
    }
    return blocks;
  };

  var currentTheme = function () {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "default";
  };

  var render = function (blocks) {
    mermaid.initialize({
      startOnLoad: false,
      theme: currentTheme(),
      securityLevel: "loose",
      fontFamily: "Roboto, sans-serif",
      flowchart: { htmlLabels: true, curve: "basis", useMaxWidth: true },
    });
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].removeAttribute("data-processed");
      blocks[i].innerHTML = blocks[i].getAttribute("data-mermaid-source");
    }
    return mermaid.run({ nodes: blocks });
  };

  // A render that runs while the page is still settling (MathJax typesetting
  // right after load) sometimes spreads the nodes several times too far apart,
  // so the SVG is scaled down until the text is unreadable. Detect that and redo it.
  var MAX_ATTEMPTS = 3;
  var isShrunk = function (block) {
    var svg = block.querySelector("svg");
    var box = svg && svg.viewBox && svg.viewBox.baseVal;
    if (!box || !box.width) return false;
    return svg.getBoundingClientRect().width / box.width < 0.35;
  };

  var renderChecked = function (blocks, attempt) {
    return Promise.resolve(render(blocks)).then(function () {
      if (attempt >= MAX_ATTEMPTS || !blocks.some(isShrunk)) return;
      return new Promise(function (resolve) {
        setTimeout(resolve, 500);
      }).then(function () {
        return renderChecked(blocks, attempt + 1);
      });
    });
  };

  var start = function () {
    var blocks = collect();
    if (!blocks.length) return;
    renderChecked(blocks, 1);

    // Re-render on light/dark toggle so the diagrams stay readable.
    var theme = currentTheme();
    new MutationObserver(function () {
      if (currentTheme() === theme) return;
      theme = currentTheme();
      renderChecked(blocks, 1);
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  };

  // Start once stylesheets, fonts and MathJax are done, which removes most of
  // the bad first renders; renderChecked catches the rest.
  var whenReady = function () {
    var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    var mathjax = window.MathJax && MathJax.startup && MathJax.startup.promise ? MathJax.startup.promise : Promise.resolve();
    Promise.all([fonts, mathjax]).then(start, start);
  };

  if (document.readyState === "complete") {
    whenReady();
  } else {
    window.addEventListener("load", whenReady);
  }
})();
