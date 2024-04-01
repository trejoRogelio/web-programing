<?php
header("Access-Control-Allow-Origin: *");

try {
  // Conexion a la base de datos
  $conn = new PDO(
    "mysql:host=localhost;dbname=taskList",
    "rogelio",
    "4492316585"
  );
} catch (PDOException $e) {
  echo $e->getMessage();
}
