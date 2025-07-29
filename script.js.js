
let cart = [];

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" width="100" />
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p>В наличии: ${p.qty}</p>
        <button onclick="addToCart(${i})">В корзину</button>
      </div>
    `;
  });
}

function addToCart(index) {
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products[index];
  if (product.qty > 0) {
    product.qty -= 1;
    cart.push(product.name);
    localStorage.setItem("products", JSON.stringify(products));
    updateCart();
    loadProducts();
  } else {
    alert("Нет в наличии");
  }
}

function updateCart() {
  document.getElementById("cart").innerHTML = cart.map(item => `<li>${item}</li>`).join("");
}

function sendOrder() {
  if (cart.length === 0) {
    alert("Корзина пуста!");
    return;
  }
  const message = encodeURIComponent("Заказ: " + cart.join(", "));
  const phone = "79102961051";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

loadProducts();
