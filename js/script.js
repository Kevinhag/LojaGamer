window.onload = async function productList() {
  var promise = await fetch("./php/get-product.php", {
    method: "GET",
  });

  var data = await promise.json();
  for (let j = 0; j < data.promoProducts.length; j++) {
    let promoProduct = data.promoProducts[j];
    let promoCard = card(promoProduct);
    document.getElementById("cards-promotion").innerHTML += promoCard;
  }

  for (let i = 0; i < data.commonProducts.length; i++) {
    let commonProduct = data.commonProducts[i];
    let commonCard = card(commonProduct);
    document.getElementById("cards-common").innerHTML += commonCard;
  }

  for (let k = 0; k < data.products.length; k++) {
    let product = data.products[k];
    let productCard = card(product);
    document.getElementById("cards-all").innerHTML += productCard;
  }
  
  cartRainbow(data.cart.length);

  // Pesquisa

  var productsPromise = await fetch("./php/admin.php", {
    method: "GET",
  });

  var products = await productsPromise.json();

  const searchInput = document.getElementById("search");
  const searchResultsContainer = document.getElementById("search-results");

  searchInput.addEventListener("blur", function () {
    searchInput.value = "";
    searchResultsContainer.innerHTML = ""
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    searchResultsContainer.innerHTML = "";

    const matchingProducts = products.filter(function (product) {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    });

    if (matchingProducts.length === 0) {
      searchResultsContainer.innerHTML = "Nenhum produto encontrado.";
    } else {

      matchingProducts.forEach(function (product) {
        const productCard = document.createElement("div");
        productCard.innerHTML = SCard(product);
        searchResultsContainer.appendChild(productCard);
      });
    }
  });
};



const body = document.body;
const themeSwitch = document.getElementById("theme-switch");
const themeStyle = document.getElementById("theme-style");

// Função para alternar entre os temas
function toggleTheme() {
  if (themeSwitch.checked) {
    body.classList.add("light-theme");
    themeStyle.href = "css/light-theme.css";
  } else {
    body.classList.remove("light-theme");
    themeStyle.href = "css/dark-theme.css";
  }
}

// Adicione um evento pra quando o checkbox muda de estado
themeSwitch.addEventListener("change", toggleTheme);
toggleTheme();

const numBorders = 8;
const insetMult = 12;
const container = document.getElementById("promo-banner");

for (let i = 0; i < numBorders; i++) {
  const border = document.createElement("div");
  border.classList.add("borda");
  border.classList.add("rainbow-border");
  border.id = "teste" + (i + 1);
  border.style.border = numBorders / 1.5 - i / 2 + "px solid red";
  border.style.left = (i * insetMult) / 2 + "px";
  border.style.right = (i * insetMult) / 2 + "px";
  border.style.top = i * insetMult + "px";
  border.style.bottom = i * insetMult + "px";
  // border.style.inset = i * insetMult + "px " + i * (insetMult - 6) + "px";
  border.style.animationDelay = i * -0.4 + "s";
  border.style.opacity = (numBorders * 1.25 - i) / numBorders;
  border.style.zIndex = -1 - i;
  container.appendChild(border);
}

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  for (let i = 0; i < numBorders; i++) {
    const teste = document.getElementById("teste" + (i + 1));
    teste.style.top = i * insetMult + (scrollY / 20) * i + "px";
    teste.style.bottom = i * insetMult + (-scrollY / 20) * i + "px";
  }
});

async function addToCart(productId) {
  const addCartData = new FormData();
  addCartData.append("productId", productId);

  const response = await fetch("./php/cart-add.php", {
    method: "POST",
    body: addCartData,
  });

  const data = await response.json();
  alert(data);
}
