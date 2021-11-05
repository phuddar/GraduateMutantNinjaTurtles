<?php
require 'class/DbConnection.php';
// good problem solving link for PHP
// https://stackoverflow.com/questions/8028957/how-to-fix-headers-already-sent-error-in-php 
// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Game';
$vars = [];

if (isset($_GET['ref'])) {
    // This is an example of a parameterized query
    //echo 'working working working working working';
    $sql = 'SELECT * FROM Game 
    WHERE ? IN (Referee_1, Referee_2, Referee_3, Referee_4)';
  
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