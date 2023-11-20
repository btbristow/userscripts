// ==UserScript==
// @name      PWA Everything Reloaded
// @author    Evan Reichard
// @version   0.0.1
// @match     *://*/*
// @grant     none
// @run-at    document-idle
// @noframes
// ==/UserScript==

const webManifest = {
  "name": "",
  "short_name": "",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
};

const manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);

// Add viewport meta tag
const viewportMeta = document.createElement('meta');
viewportMeta.setAttribute('name', 'viewport');
viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
document.head.prepend(viewportMeta);

// Add CSS to style the safe area
const safeAreaStyle = document.createElement('style');
safeAreaStyle.innerHTML = `
  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    background-color: #ffffff; /* Set the background color to white */
  }
`;
document.head.prepend(safeAreaStyle);