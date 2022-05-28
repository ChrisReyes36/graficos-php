<?php

require_once("../connection/connection.class.php");

$conn = new Connection();

class GraphicModel
{

    public function getGraphicsBar()
    {
        global $conn;
        $data = [];
        try {
            $sql = "CALL `SP_DatosGraficoBar`();";
            $stmt = $conn->connect()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll();
            foreach ($result as $row) {
                $data[] = $row;
            }
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        } finally {
            $conn->disconnect();
        }
        return $data;
    }

    public function getGraphicsPara($start, $end){
        global $conn;
        $data = [];
        try {
            $sql = "CALL `SP_DatosGraficoPara`(:start, :end);";
            $stmt = $conn->connect()->prepare($sql);
            $stmt->bindParam(':start', $start);
            $stmt->bindParam(':end', $end);
            $stmt->execute();
            $result = $stmt->fetchAll();
            foreach ($result as $row) {
                $data[] = $row;
            }
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        } finally {
            $conn->disconnect();
        }
        return $data;
    }
}
