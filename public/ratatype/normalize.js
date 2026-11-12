(function () {
  const DASHES = /[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g;
  const BROKEN = /\uFFFD+/g;

  function normalize(text) {
    if (typeof text !== "string") return text;
    return text
      .replace(DASHES, "-")
      .replace(BROKEN, "-")
      .replace(/\u00A0/g, " ");
  }

  window.normalizeText = normalize;
})();
