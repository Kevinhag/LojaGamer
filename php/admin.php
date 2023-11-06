<?php
include("connect.php");

$result = mysqli_query($connect, "SELECT * FROM lojagamer.product
ORDER BY lojagamer.product.part_type DESC");

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    array_push($data, $row);
}

mysqli_free_result($result);
$response = $data;
echo json_encode($response);
