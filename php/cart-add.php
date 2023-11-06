<?php
include("connect.php");

$productId = $_POST["productId"];

$stmt = $connect->prepare("SELECT * FROM lojagamer.cart WHERE product_id = ?");
$stmt -> bind_param("i", $productId);
$stmt -> execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    mysqli_query($connect, "UPDATE lojagamer.cart SET quantity = quantity + 1 WHERE product_id = $productId");
    echo json_encode("Mais um no carrinho");
} else {
    $stmt = $connect->prepare("INSERT INTO lojagamer.cart (product_id, quantity) VALUES (?, 1)");
    $stmt->bind_param("i", $productId);
    $stmt->execute();
    echo json_encode("Produto adicionado ao carrinho!");
}
$stmt->close();
$connect->close();
?>
