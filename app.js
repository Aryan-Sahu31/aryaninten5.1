// app.js — entry point. Wires up components that must run once.
// Route rendering itself is handled by router.js.

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  Cart.updateBadge();
});
