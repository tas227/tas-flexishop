// Liste des produits par catégorie
const products = {
  vetements: [
    { name: "T-shirt coton", price: 15000, image: "images/tshirt-coton.jpg" }
  ],
  accessoires: [
    { name: "Sac à main", price: 40000, image: "images/sac-a-main.jpg" },
    { name: "Ceinture en cuir", price: 20000, image: "images/ceinture.jpg" }
  ]
};

// Fonction pour afficher la liste des catégories dans la colonne de gauche
function showCategories() {
  const leftCol = document.querySelector('.left-column ul');
  if (!leftCol) return console.error("La colonne de gauche (.left-column ul) est introuvable dans le HTML.");
  leftCol.innerHTML = '';
  Object.keys(products).forEach(cat => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = capitalize(cat);
    btn.onclick = () => showCategory(cat);
    li.appendChild(btn);
    leftCol.appendChild(li);
  });
}

// Fonction pour afficher les produits d'une catégorie dans la colonne de droite
function showCategory(category) {
  const rightCol = document.querySelector('.right-column');
  if (!rightCol) return console.error("La colonne de droite (.right-column) est introuvable dans le HTML.");
  rightCol.innerHTML = `<h2>${capitalize(category)}</h2>`;
  products[category].forEach(prod => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" width="80" />
      <div>
        <div><strong>${prod.name}</strong></div>
        <div>Prix: ${prod.price} CFA</div>
        <label>Quantité:
          <select>
            <option value="0">0</option>
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
    `;
    rightCol.appendChild(div);
  });
}

// Fonction utilitaire pour mettre la première lettre en majuscule
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Au chargement complet de la page, on affiche la liste des catégories
document.addEventListener('DOMContentLoaded', () => {
  showCategories();
});
