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

  return customCard;
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
