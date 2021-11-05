<?php
require 'class/DbConnection.php';
// good problem solving link for PHP
// https://stackoverflow.com/questions/8028957/how-to-fix-headers-already-sent-error-in-php 
// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Referees';
$vars = [];

if (isset($_GET['ref'])) {
    // This is an example of a parameterized query
    //echo 'working working working working working';
    $sql = 'SELECT r.Referee_ID, r.fname, r.lname, r.age, r.Referee_Grade, r.Assignment_status,r.Referee_skill_rating 
    FROM Referees AS r
    INNER JOIN Game
    ON r.Referee_ID = Game.Referee_1
    OR r.Referee_ID = Game.Referee_2
    WHERE Game.Game_ID = ?';
  
    //NOT THIS WAY
    // $sql = 'SELECT * FROM offer WHERE studentId = ' . $_GET['student'];
  
    $vars = [ $_GET['ref'] ];}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$offers = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($offers, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;