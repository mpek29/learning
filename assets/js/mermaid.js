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
    mermaid.run({ nodes: blocks });
  };

  var start = function () {
    var blocks = collect();
    if (!blocks.length) return;
    render(blocks);

    // Re-render on light/dark toggle so the diagrams stay readable.
    var theme = currentTheme();
    new MutationObserver(function () {
      if (currentTheme() === theme) return;
      theme = currentTheme();
      render(blocks);
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
