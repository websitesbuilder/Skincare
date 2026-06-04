const products = [
  {
    id: 1,
    name: "Glow Hydration Serum",
    price: 25,
    image: "serum.png"
  },
  {
    id: 2,
    name: "Gentle Foaming Cleanser",
    price: 18,
    image: "cleanser.png"
  },
  {
    id: 3,
    name: "Vitamin C Brightening Cream",
    price: 30,
    image: "mosturizing.png"
  },
  {
    id: 4,
    name: "Overnight Repair Oil",
    price: 28,
    image: "oil.png"
  }
];

let cart = [];

const productList = document.getElementById("shop");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

// DISPLAY PRODUCTS WITH IMAGES
products.forEach(p => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    total += item.price;
  });

  totalEl.textContent = total;
}

function checkout() {
  document.getElementById("checkout-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("checkout-modal").classList.add("hidden");
}

function placeOrder() {
  alert("Payment successful! Welcome to Glow Skincare ✨");
  cart = [];
  renderCart();
  closeModal();
}
