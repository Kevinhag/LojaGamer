<?php
include("connect.php");

$result = mysqli_query($connect, "SELECT * FROM lojagamer.product
    ORDER BY RAND()
    LIMIT 5");
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    array_push($data, $row);
}
mysqli_free_result($result);


$promo = mysqli_query($connect, "SELECT * FROM lojagamer.product WHERE on_sale = 1
    ORDER BY RAND()
    LIMIT 5");
$pdata = array();
while ($row = mysqli_fetch_assoc($promo)) {
    array_push($pdata, $row);
}
mysqli_free_result($promo);

$common = mysqli_query($connect, "SELECT * FROM lojagamer.product WHERE on_sale = 0
    ORDER BY RAND()
    LIMIT 5");
$pcommon = array();
while ($row = mysqli_fetch_assoc($common)) {
    array_push($pcommon, $row);
}
mysqli_free_result($common);


$cart = mysqli_query($connect, "SELECT * FROM lojagamer.cart");
$pcart = array();
while ($row = mysqli_fetch_assoc($cart)) {
    array_push($pcart, $row);
}
mysqli_free_result($cart);

$response = array(
    'products' => $data,
    'promoProducts' => $pdata,
    'commonProducts' => $pcommon,
    'cart' => $pcart
);

echo json_encode($response);
?>