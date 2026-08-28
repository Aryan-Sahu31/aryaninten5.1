// productDetail.js — renders a single product's detail page.

function renderProductDetail(container, id) {
  const product = getProductById(id);

  if (!product) {
    container.innerHTML = `<p class="not-found">Product not found. <a href="#/products">Back to products</a></p>`;
    return;
  }

  container.innerHTML = `
    <section class="product-detail">
      <img src="${product.image}" alt="${product.name}" loading="lazy" width="320" height="240" />
      <div class="product-info">
        <h2>${product.name}</h2>
        <p class="category">${product.category}</p>
        <p class="price">₹${product.price}</p>
        <p>${product.description}</p>
        <button class="btn btn-primary" onclick="Cart.add(${product.id})">Add to Cart</button>
        <a href="#/products" class="btn btn-secondary">Back to Products</a>
      </div>
    </section>
  `;
}
