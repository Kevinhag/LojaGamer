<?php
include("connect.php");

$result = mysqli_query($connect, "SELECT c.*, p.* FROM lojagamer.cart AS c
JOIN lojagamer.product AS p ON p.id = c.product_id");

$cart = array();
while ($row = mysqli_fetch_assoc($result)) {
    array_push($cart, $row);
}
mysqli_free_result($result);

$total = mysqli_query($connect, "SELECT COUNT(*) AS total_produtos, SUM(p.price) AS total_valor
FROM lojagamer.cart AS c
JOIN lojagamer.product AS p ON p.id = c.product_id");
$cart_total = mysqli_fetch_assoc($total);
mysqli_free_result($total);

$response = array(
    'cart' => $cart,
    'total' => $cart_total,
);

echo json_encode($response);
?>