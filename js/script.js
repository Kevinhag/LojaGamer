// window.onload = async function productList() {
//   var promise = await fetch("/php/get-product.php", {
//     method: "GET",
//   });

//   var data = await promise.json();
//   for (var i = 0; i < data.length; i++) {
//     console.log(data);
//     console.log(data[i]);

//     // var icons = [
//     //   { nome: "Icon-Twitter" },
//     //   { nome: "Icon-Instagram" },
//     //   { nome: "Icon-YouTube" },
//     // ];

//     var customCard = `<div class="card">
//             <div class="card-icon">
//                 ${data[i].name}
//             </div>
//             <div class="card-title">
//                 ${data[i].brand}
//             </div>
//             <div class="card-description">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus iure possimus aliquid ea, soluta optio maxime officia.
//             </div>
//             <div class="card-button">
//                 <button class="btn-card">
//                     BUTTON
//                 </button>
//             </div>
//             </div>`;

//     document.getElementById("cards-app").innerHTML += customCard;
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
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
  border.style.inset = i * insetMult + "px ";
  // border.style.borderColor = "hsl(" + ((360/numBorders) * i) + ",100%, 50%)"
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
