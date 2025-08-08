// Les produits initialement dans la catégorie "vetements"
const products = {
  vetements: [
    {
      name: "T-shirt coton",
      price: 15000,
      image: "images/tshirt-coton.jpg",
      description: "T-shirt confortable en coton bio"
    }
  ]
};

let cart = [];

// Affiche la liste des catégories (pour l'instant juste vetements)
function showCategories() {
  const content = document.getElementById("content-area");
  content.innerHTML = `
    <div class="left-column">
      <div class="category-header">Catégories</div>
      <ul id="categories-list">
        <li><button data-category="vetements">Vêtements</button></li>
      </ul>
    </div>
    <div class="right-column" id="products-area">
      <h2>Sélectionnez une catégorie</h2>
    </div>
  `;

  // Ajoute les événements aux boutons catégories
  document.querySelectorAll("#categories-list button").forEach(btn => {
    btn.addEventListener("click", () => {
      showProducts(btn.dataset.category);
    });
  });
}

// Affiche les produits d’une catégorie
function showProducts(category) {
  const productsArea = document.getElementById("products-area");
  productsArea.innerHTML = `<h2>${capitalize(category)}</h2>`;

  products[category].forEach((item, index) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="150" />
      <div><strong>${item.name}</strong></div>
      <div>${item.description}</div>
      <div>Prix : ${item.price} CFA</div>
      <label>Quantité:
        <select data-category="${category}" data-index="${index}">
          <option value="0">0</option>
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
    `;
    productsArea.appendChild(productDiv);
  });

  // Écoute le changement des quantités
  productsArea.querySelectorAll("select").forEach(sel => {
    sel.addEventListener("change", () => {
      const cat = sel.dataset.category;
      const idx = parseInt(sel.dataset.index);
      const qty = parseInt(sel.value);
      updateCart(cat, idx, qty);
    });
  });
}

// Met à jour le panier
function updateCart(category, index, qty) {
  const product = products[category][index];
  const cartIndex = cart.findIndex(item => item.name === product.name);

  if (qty === 0) {
    // Retirer si qty 0
    if (cartIndex !== -1) cart.splice(cartIndex, 1);
  } else {
    if (cartIndex !== -1) {
      cart[cartIndex].qty = qty;
    } else {
      cart.push({ name: product.name, price: product.price, qty });
    }
  }
  updateCartCount();
}

// Met à jour le compteur panier dans le header
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-btn").innerText = `Panier (${count})`;
}

// Simple capitalisation pour les titres
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
  showCategories();
  updateCartCount();

  // Ajout gestion clic sur panier (pour l'instant simple alert)
  document.getElementById("cart-btn").addEventListener("click", () => {
    alert("Fonction panier à venir...");
  });
});
