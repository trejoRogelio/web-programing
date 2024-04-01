<?php

include "./partials/connection.php";

try {
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

  $jsonString = json_encode($json);
  echo $jsonString;
} catch (PDOException $e) {
  echo $e->getMessage();
}
