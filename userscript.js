// Note: as of Catalina, custom local fonts are no longer supported in any way.

// Use the monospace (SF Mono) font on GitHub.
if (window.location.host === "github.com") {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
code, pre, .blob-code, .blob-code-inner {
  font-family: monospace !important;
  font-size: 12px !important;
}
`;

  document.body.appendChild(style);
}
