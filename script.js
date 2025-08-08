// Script vide pour démarrer

// Exemple : mettre à jour le compteur panier (0 au départ)
const cartBtn = document.getElementById('cart-btn');
let cartCount = 0;
function updateCartCount(count) {
  cartBtn.textContent = `Panier (${count})`;
}
updateCartCount(cartCount);

// Bouton "Accueil" : scroll vers le haut en douceur
document.getElementById('backToTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
