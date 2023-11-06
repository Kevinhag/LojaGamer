function card(productArrayindex) {
  if (parseInt(productArrayindex.on_sale) === 0) {
    cardType = "common";
  } else {
    cardType = "promotion";
  }

  if (parseInt(productArrayindex.new) === 0) {
    cardNew = "";
  } else {
    cardNew = `<div class="product-new">
            NEW
          </div>`;
  }

  let customCard = `<div class="${cardType}" id="card">
    <div class="product">
  ${cardNew}
  <div class="card-product-name">
    <div class="product-name" name="name">${productArrayindex.name}</div>
    <div class="product-brand">${productArrayindex.brand}</div>
  </div>
  <div class="product-img">
    <img
      src="${imagePath(productArrayindex)}"
      alt=""
    />
  </div>
  <div class="card-price">
    R$ ${productArrayindex.price}
  </div>
  <div class="card-rating">
    <div class="rating-stars" id="stars">
       ${stars(productArrayindex.rating)}
    </div>
    <div class="rating-users">
      12348 Usuários
    </div>
  </div>
  <div type="button" class="product-btn" onclick="addToCart(${productArrayindex.id})">
  Adicionar ao Carrinho
  </div>
  </div>
  </div>`;

  return customCard;
}

function CCard(productArrayindex) {
  if (parseInt(productArrayindex.on_sale) === 0) {
    cardType = "common-cart";
  } else {
    cardType = "promotion-cart";
  }

  if (parseInt(productArrayindex.new) === 0) {
    cardNew = "";
  } else {
    cardNew = `<div class="product-new">
            NEW
          </div>`;
    cartCardNew = `<div class="cart-product-new">
            NEW
          </div>`;
  }

  let cartCard = `<div class="${cardType}">
  <div class="product-cart">
    <div class="cart-card-product-name">
      <div class="cart-product-name" name="name">${productArrayindex.name}</div>
      <div class="cart-product-brand">${productArrayindex.brand}</div>
    </div>
    <div class="cart-product-img">
      <img src="${imagePath(productArrayindex)}" alt="" />
    </div>
    <div class="cart-card-price">
      R$ ${productArrayindex.price}
    </div>
    <div class="cart-card-rating">
      <div class="rating-stars" id="stars">
      ${stars(productArrayindex.rating)}
      </div>
      <div class="rating-users">
        12348 Users
      </div>
    </div>
    <div type="button" class="cart-product-btn" onclick="removeFromCart(${productArrayindex.id})""> 
        Remover
    </div>
  </div>
  
</div>`;

  return cartCard;
}

function SCard(productArrayindex) {
  if (parseInt(productArrayindex.on_sale) === 0) {
    cardType = "common-cart";
  } else {
    cardType = "promotion-cart";
  }

  if (parseInt(productArrayindex.new) === 0) {
    cardNew = "";
  } else {
    cardNew = `<div class="product-new">
            NEW
          </div>`;
    cartCardNew = `<div class="cart-product-new">
            NEW
          </div>`;
  }

  let searchCard = `<div class="${cardType}">
  <div class="product-search">
  ${cardNew}
    <div class="search-card-product-name">
      <div class="cart-product-name" name="name">${productArrayindex.name}</div>
      <div class="cart-product-brand">${productArrayindex.brand}</div>
    </div>
    <div class="search-product-img">
      <img src="${imagePath(productArrayindex)}" alt="" />
    </div>
    <div class="search-card-price">
      R$ ${productArrayindex.price}
    </div>
    <div class="search-card-rating">
      <div class="rating-stars" id="stars">
      ${stars(productArrayindex.rating)}
      </div>
      <div class="rating-users">
        12348 Users
      </div>
    </div>
    <div type="button" class="search-product-btn" onclick="addToCart(${productArrayindex.id})"> 
        +
    </div>
  </div>
  
</div>`;
  return searchCard;
}


function stars(r) {
  let rp = parseInt(r);
  s = `<i class="fa-solid  fa-star" style="color: #ffd500"></i>`;
  se = `<i class="fa-regular  fa-star" style="color: var(--border)"></i>`;
  sr = `<i class="fa-solid  fa-star rainbow"></i>`;

  s1 = s.repeat(rp);
  s2 = se.repeat(5 - rp);
  s3 = sr.repeat(rp);

  if (rp < 5) {
    return s1 + s2;
  } else {
    return s3;
  }
}

function imagePath(productArrayindex) {
  let np = productArrayindex.name.replaceAll(" ", "-");
  let ip =
    "./assets/images/" +
    productArrayindex.part_type +
    "/" +
    productArrayindex.brand +
    "_" +
    np +
    "_" +
    productArrayindex.manufacturer +
    ".png";

  return ip;
}

function cartRainbow(dataCartLength) {
  if (dataCartLength > 0) {
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.classList.add("rainbow");
  }
}
