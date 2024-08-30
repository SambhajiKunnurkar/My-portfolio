<?php
session_start();
include('../includes/dbconn.php');
include('../includes/check-login.php');
check_login();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the response is set, otherwise default to 'yes'
    $response = isset($_POST['response']) ? $_POST['response'] : 'yes';
    $emailid = $_SESSION['login'];

    // Sanitize the input
    $response = $mysqli->real_escape_string($response);

    // Update the database
    if ($response == 'yes') {
        $sql = "UPDATE registration SET attend=?, yes_counter=yes_counter+1 WHERE emailid=?";
    } else {
        $sql = "UPDATE registration SET attend=? WHERE emailid=?";
    }
    
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('ss', $response, $emailid);

    if ($stmt->execute()) {
        echo "Record updated successfully";
        header('Location:room-details.php');
    } else {
        echo "Error updating record: " . $stmt->error;
    }
    $stmt->close();
} else {
    echo "Invalid request method";
}

$mysqli->close();
?>
