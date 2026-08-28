// cart.js — tiny cart module. Kept isolated so it can be swapped
// for localStorage or a real backend later without touching other files.

const Cart = (() => {
  let items = [];

  function add(productId) {
    items.push(productId);
    updateBadge();
  }

  function count() {
    return items.length;
  }

  function updateBadge() {
    const badge = document.getElementById("cart-count");
    if (badge) badge.textContent = count();
  }

  return { add, count, updateBadge };
})();
