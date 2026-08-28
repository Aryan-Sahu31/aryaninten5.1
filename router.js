// router.js — minimal client-side hash router.
// No page reloads: we listen for hash changes and swap the
// content inside #app based on a simple route table.

const routes = [
  { pattern: /^#\/$/, handler: (app) => renderProductList(app) },
  { pattern: /^#\/products$/, handler: (app) => renderProductList(app) },
  { pattern: /^#\/product\/(\d+)$/, handler: (app, match) => renderProductDetail(app, match[1]) }
];

function handleRoute() {
  const app = document.getElementById("app");
  const hash = window.location.hash || "#/";

  for (const route of routes) {
    const match = hash.match(route.pattern);
    if (match) {
      route.handler(app, match);
      window.scrollTo(0, 0);
      return;
    }
  }

  // 404 fallback
  app.innerHTML = `<p class="not-found">Page not found. <a href="#/">Go home</a></p>`;
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
