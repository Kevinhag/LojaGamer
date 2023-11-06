<?php
include("connect.php");

function imagePath($name, $brand, $manufacturer)
{
    $formatName = str_replace(' ', '-', $name);
    $Fname = $brand . "_" . $formatName . "_" . $manufacturer . ".png";
    return $Fname;
}

if (isset($_FILES['productImage'])) {
    $name = $_POST['name'];
    $brand = $_POST['brand'];
    $partType = $_POST['part_type'];
    $manufacturer = $_POST['manufacturer'];

    $targetDirectory = '../assets/images/' . $partType . "/";

    if (!file_exists($targetDirectory)) {
        mkdir($targetDirectory, 0755, true);
    }

    $imageName = imagePath($name, $brand, $manufacturer);
    $targetFile = $targetDirectory . $imageName;

    if (move_uploaded_file($_FILES['productImage']['tmp_name'], $targetFile)) {
        $return = "Upload concluído e salva como: $imageName";
    } else {
        $return = "Falha no upload da imagem.";
    }
} else {
    $return = "Nenhuma imagem foi carregada.";
}

$returnJson = json_encode($return);
echo $returnJson;
