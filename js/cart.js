window.onload = async function cartList() {
  var promise = await fetch("./php/cart.php", {
    method: "GET",
  });

  var cartData = await promise.json();

  for (var j = 0; j < cartData.cart.length; j++) {
    var cartProduct = cartData.cart[j];
    let cartCard = CCard(cartProduct); 
    document.getElementById("cart-cards").innerHTML += cartCard;
    console.log(cartProduct);
  }

  cartRainbow(cartData.cart.length);
};
