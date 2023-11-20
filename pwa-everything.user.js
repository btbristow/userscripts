// ==UserScript==
// @name      PWA Everything
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
  "theme_color": "#ffff",
  "background_color": "#ffff",
  "display": "standalone"
};

const manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);