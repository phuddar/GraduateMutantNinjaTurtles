<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT *
FROM Game
WHERE Game.Game_Date >= ?
AND Referee_1 IS NULL
OR Referee_2 IS NULL
OR Referee_3 IS NULL
OR Referee_4 IS NULL';

$vars = [];

if (isset($_GET['Game_Date1'])) {
  $vars = [$_GET['Game_Date1']];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$offers = $stmt->fetchAll();


if (isset($_GET['format']) && $_GET['format']=='csv') {
    header('Content-Type: text/csv');

    echo "ID,Time,Date,Field,Referee 1,Referee 2,Referee 3,Referee 4\r\n";

    foreach($offers as $o) {
        echo "\"".$o['Game_ID'] ."\","
            .$o['Game_Time'] .','
            .$o['Game_Date'] .','
            .$o['Game_Field'] .','
            .$o['Referee_1'] .','
            .$o['Referee_2'] .','
            .$o['Referee_3'] .','
            .$o['Referee_4'] ."\r\n";
    }
} else {
// Step 3: Convert to JSON
$json = json_encode($offers, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
}