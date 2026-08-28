// productList.js — renders the grid of product cards.
// This module only knows how to render a list; it doesn't fetch
// or own data, which keeps it reusable and testable in isolation.

function renderProductList(container) {
  const cardsHtml = PRODUCTS.map(productCardHtml).join("");

  container.innerHTML = `
    <section class="hero">
      <h1>Welcome to ShopEase</h1>
      <p>A live capstone demo — modular frontend, client-side routing, optimized assets.</p>
    </section>
    <section class="product-grid">
      ${cardsHtml}
    </section>
  `;
}

function productCardHtml(product) {
  return `
    <article class="card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" width="200" height="150" />
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <div class="card-actions">
        <a href="#/product/${product.id}" class="btn btn-secondary">View</a>
        <button class="btn btn-primary" onclick="Cart.add(${product.id})">Add to Cart</button>
      </div>
    </article>
  `;
}
