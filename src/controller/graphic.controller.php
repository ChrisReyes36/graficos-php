<?php

require_once("../model/graphic.model.php");

$gm = new GraphicModel();

if (isset($_POST) || isset($_GET)) {
    $action = isset($_GET['action']) ? $_GET['action'] : false;
    $inicio = isset($_POST['fechaInicio']) ? $_POST['fechaInicio'] : false;
    $fin = isset($_POST['fechaFin']) ? $_POST['fechaFin'] : false;
    if ($action) {
        switch ($action) {
            case 'getGraphicsBar':
                echo json_encode($gm->getGraphicsBar());
                break;

            case 'getGraphicsBarParametro':
                echo json_encode($gm->getGraphicsPara($inicio, $fin));
                break;

            default:
                # code...
                break;
        }
    }
}
