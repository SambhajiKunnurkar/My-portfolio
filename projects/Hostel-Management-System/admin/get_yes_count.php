<?php
session_start();
include('../includes/dbconn.php');

$query = "SELECT COUNT(*) AS yes_count FROM registration WHERE attend = 'yes'";
$stmt = $mysqli->prepare($query);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

echo json_encode(['yes_count' => $row['yes_count']]);
?>
