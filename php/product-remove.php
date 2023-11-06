<?php
include("connect.php");

if(isset($_POST['id'])) {
  $productId = $_POST['id'];

  $deleteQuery = "DELETE FROM lojagamer.product WHERE id = $productId";

  if (mysqli_query($connect, $deleteQuery)) {
    echo "Item excluído com sucesso.";
  } else {
    echo "Erro ao excluir o item: " . mysqli_error($connect);
  }
  mysqli_close($connect);
} else {
  echo "ID do produto não foi fornecido.";
}
?>