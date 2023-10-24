window.onload = async function productList() {
  var promise = await fetch("./php/get-product.php", {
    method: "GET",
  });

  var data = await promise.json();
  for (var j = 0; j < data.promoProducts.length; j++) {
      var promoProduct = data.promoProducts[j];
      let promoCard = card(promoProduct)
      document.getElementById("cards-promotion").innerHTML += promoCard;
  }

  for (var i = 0; i < data.commonProducts.length; i++) {
    var commonProduct = data.commonProducts[i];
    let commonCard = card(commonProduct)
    document.getElementById("cards-common").innerHTML += commonCard;
  }

  for (var k = 0; k < data.products.length; k++) {
    var product = data.products[k];
    let productCard = card(product)
    document.getElementById("cards-all").innerHTML += productCard;
  }
};

const body = document.body;
const themeSwitch = document.getElementById("theme-switch");
const themeStyle = document.getElementById("theme-style");

// Função para alternar entre os temas
function toggleTheme() {
  if (themeSwitch.checked) {
    body.classList.add("light-theme");
    themeStyle.href = "css/light-theme.css"; // Carrega o estilo escuro
  } else {
    body.classList.remove("light-theme");
    themeStyle.href = "css/dark-theme.css"; // Carrega o estilo claro
  }
}
// Adicione um evento pra quando o checkbox muda de estado
themeSwitch.addEventListener("change", toggleTheme);
toggleTheme();

const numBorders = 8;
const insetMult = 12;
const container = document.getElementById("promo-banner");
for (let i = 0; i < numBorders; i++) {
  let border = document.createElement("div");
  border.id = "teste" + (i + 1);
  border.classList.add("borda");  
  border.classList.add("rainbow-border");
  border.style.border = ((numBorders / 1.5) - (i / 2)) + "px dotted red";
  border.style.inset = i * insetMult + "px " + i * (insetMult - 6) + "px";
  border.style.animationDelay = i * -0.5 + "s";
  container.appendChild(border);
  border.style.opacity = (numBorders - i) / numBorders;
  border.style.zIndex = -1 - i;
}

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  for (let i = 0; i < numBorders; i++) {
    const teste = document.getElementById("teste" + (i + 1));
    teste.style.top = i * insetMult + (scrollY / 20) * i + "px";
    teste.style.bottom = i * insetMult + (-scrollY / 20) * i + "px";
  }
});
