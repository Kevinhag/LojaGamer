<?php

    $connect = mysqli_connect("localhost:3306","root","Piunxzero11!","lojagamer");
    $result = mysqli_query($connect,"SELECT * FROM lojagamer.product");

    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {

        array_push($data,$row);

    }

    echo json_encode($data)
?>
