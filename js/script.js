window.onload = async function productList() {
  var promise = await fetch("./php/get-product.php", {
    method: "GET",
  });

  var data = await promise.json();

  let randData = Math.floor(Math.random() * data.length);

  for (
    var i = 0;
    i < data.length /8 /*melhorar forma para limitar quantidade de cards*/; i++) {
    // console.log(data);
    // console.log(data[randData]);

    let namep = data[randData].name.replaceAll(" ", "-");
    let imagepath = "./assets/images/" + data[randData].part_type + "/" + data[randData].brand + "_" + namep + "_" + data[randData].manufacturer + ".png";

    let cardtype = null;
    let cardnew = null;

    if (data[randData].on_sale === "0") {
      cardtype = "common";
    } else {
      cardtype = "promotion";
    }

    if (data[randData].new === "0") {
      cardnew = "common";
    } else {
      cardnew = "promotion";
    }

    let customCard = `<div class="${cardtype}" id="card">
<div class="product">
  <div class="card-product-name">
    <div class="product-name" name="name">${data[randData].name}</div>
    <div class="product-brand">${data[randData].brand}</div>
  </div>
  <div class="product-img">
    <img
      src="${imagepath}"
      alt=""
    />
  </div>
  <div class="card-price">
    R$ ${data[randData].price}
  </div>
  <div class="card-rating">
    <div class="rating-stars" id="stars">
      ⭐⭐⭐⭐⭐ ${data[randData].rating} ${data[randData].new} ${
      data[randData].on_sale
    } ${data.length}
    </div>
    <div class="rating-users">
      12348 Users
    </div>
  </div>
  <div>
    <button type="button" class="product-btn">
      Adicionar ao Carrinho
    </button>
  </div>
</div>
</div>`;

    if (data[randData].on_sale === "0") {
      document.getElementById("cards-common").innerHTML += customCard;
    } else {
      document.getElementById("cards-promotion").innerHTML += customCard;
    }
    document.getElementById("cards-all").innerHTML += customCard;

    // document.getElementById("cards-all").innerHTML += data[i].part_type + imagepath;
    randData = Math.floor(Math.random() * data.length);
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
// });
function showCards() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}

const numBorders = 8;
const insetMult = 12;
const container = document.getElementById("promo-banner");
for (let i = 0; i < numBorders; i++) {
  let border = document.createElement("div");
  border.id = "teste" + (i + 1);
  border.classList.add("borda");
  border.classList.add("rainbow");
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
