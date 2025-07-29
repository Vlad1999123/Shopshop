
function checkLogin() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (login === "zaza" && password === "zaza123321") {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("adminSection").style.display = "block";
  } else {
    alert("Неверный логин или пароль");
  }
}

function addProduct() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const qty = parseInt(document.getElementById("qty").value);
  const file = document.getElementById("img").files[0];

  if (!name || !desc || isNaN(qty) || !file) {
    alert("Заполните все поля");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({ name, desc, qty, image: reader.result });
    localStorage.setItem("products", JSON.stringify(products));
    alert("Товар добавлен!");
    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("img").value = "";
  };
  reader.readAsDataURL(file);
}
