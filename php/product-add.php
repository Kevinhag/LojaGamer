<?php
include("connect.php");

$productDD = $_POST["productDD"];
$id = $_POST["id"];
$name = $_POST["name"];
$brand = $_POST["brand"];
$price = floatval($_POST["price"]);
$stock = intval($_POST["stock"]);
$description = $_POST["description"];
$rating = intval($_POST["rating"]);
$new = isset($_POST["new"]);
$on_sale = isset($_POST["onsale"]);
$part_type = $_POST["part_type"];
$manufacturer = $_POST["manufacturer"];
$model = $_POST["model"];
$pline = $_POST["product_line"];

if ($productDD === "null") {
  // Inserir um produto
  $query = "INSERT INTO lojagamer.product (name, brand, price, stock, description, rating, new, on_sale, part_type, manufacturer, model, product_line,  date_added)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";
  $stmt = mysqli_prepare($connect, $query);
  mysqli_stmt_bind_param($stmt, "ssdissiissss", $name, $brand, $price, $stock, $description, $rating, $new, $on_sale, $part_type, $manufacturer, $model, $pline);
} else {
  // Atualizar um produto
  $query = "UPDATE lojagamer.product
              SET name=?, brand=?, price=?, stock=?, description=?, rating=?, new=?, on_sale=?, part_type=?, manufacturer=?, model=?, product_line=?
              WHERE id=?";
  $stmt = mysqli_prepare($connect, $query);
  mysqli_stmt_bind_param($stmt, "ssdissiissssi", $name, $brand, $price, $stock, $description, $rating, $new, $on_sale, $part_type, $manufacturer, $model, $pline, $id);
}

if (mysqli_stmt_execute($stmt)) {
  echo "Produto Adicionado/Modificado com sucesso!";
} else {
  echo "Erro Adicionando/Modificando produto: " . mysqli_error($connect);
}

mysqli_close($connect);
?>