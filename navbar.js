// navbar.js — renders the site header/navigation once on load.
// Uses hash links so the router (router.js) can intercept navigation
// without full page reloads.

function renderNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
    <nav class="navbar">
      <a href="#/" class="brand">ShopEase</a>
      <div class="nav-links">
        <a href="#/">Home</a>
        <a href="#/products">Products</a>
        <span class="cart-icon">🛒 <span id="cart-count">0</span></span>
      </div>
    </nav>
  `;
}
