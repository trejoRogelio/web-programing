<?php
try {
  // Conexion a la base de datos
  $conn = new PDO(
    "mysql:host=localhost;dbname=taskList",
    "rogelio",
    "4492316585"
  );

  $state = $conn->query("SELECT * FROM user;");

  $json = [];
  while ($row = $state->fetch()) {
    array_push($json, [
      "id" => $row['id'],
      "firstname" => $row['firstname'],
      "lastname" => $row['lastname'],
      "email" => $row['email']
    ]);
  }


  header('Access-Control-Allow-Origin: *');


  $jsonString = json_encode($json);
  echo $jsonString;
} catch (PDOException $e) {
  echo $e->getMessage();
}
