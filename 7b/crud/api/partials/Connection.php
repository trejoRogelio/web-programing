<?php

$host = "localhost";
$dbName = "taskList";
$user = "rogelio";
$password = "4492316585";
$protocol = "mysql:host={$host};dbname={$dbName}";
try {
  // Generación de la Conexion a la base de datos
  $conn = new PDO($protocol, $user, $password);
} catch (PDOException $e) {
  die($e->getMessage());
}
