<?php
include("connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["product_id_to_remove"])) {
        $product_id = $_POST["product_id_to_remove"];
        
        $query = "DELETE FROM lojagamer.cart WHERE product_id = ?";
        $stmt = mysqli_prepare($connect, $query);
        
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "i", $product_id);
            if (mysqli_stmt_execute($stmt)) {
                echo "Produto removido com sucesso do carrinho.";
            } else {
                echo "Erro ao remover o produto do carrinho.";
            }
            mysqli_stmt_close($stmt);
        } else {
            echo "Erro na preparação da consulta.";
        }
    }
}
?>