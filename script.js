const products = {
  vetements: [
    { name: "T-shirt coton", price: 15000, image: "images/tshirt-coton.jpg" }
  ],
  accessoires: [
    { name: "Sac à main", price: 40000, image: "images/sac-a-main.jpg" }
  ]
};

function showCategories() {
  const categoryList = document.getElementById('category-list');
  categoryList.innerHTML = ""; // vide avant
  
  for (const category in products) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = capitalize(category);
    btn.addEventListener('click', () => {
      showProducts(category);
    });
    li.appendChild(btn);
    categoryList.appendChild(li);
  }
}

function showProducts(category) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = `<h2>${capitalize(category)}</h2>`;
  
  products[category].forEach(product => {
    const div = document.createElement('div');
    div.className = "product-item";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="80" />
      <div>
        <div><strong>${product.name}</strong></div>
        <div>Prix : ${product.price} CFA</div>
        <label>Quantité: <input type="number" min="0" max="10" value="0" style="width: 50px;"></label>
      </div>
    `;
    productList.appendChild(div);
  });
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
  showCategories();

  // Back to Top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
