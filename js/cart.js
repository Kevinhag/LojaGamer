window.onload = cartList();

async function cartList() {
  var promise = await fetch("./php/cart.php", {
    method: "GET",
  });
  document.getElementById("cart-cards").innerHTML = "";
  var cartData = await promise.json();

  cartData.cart.forEach(function (cartItem) {
    let cartCard = CCard(cartItem);
    document.getElementById("cart-cards").innerHTML += cartCard;

  });

  cartRainbow(cartData.cart.length);
  checkoutSummary(cartData.total);
}

async function removeFromCart(productId) {
  const removeCartData = new FormData();
  removeCartData.append("removeProduct_id", productId);

  const response = await fetch("./php/cart-remove.php", {
    method: "POST",
    body: removeCartData,
  });

  const result = await response.text();
  alert(result);

  cartList();
}


function checkoutSummary(cart) {
  let totalItems = cart.total_produtos;
  let totalPrice = cart.total_valor;

  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice;
}
