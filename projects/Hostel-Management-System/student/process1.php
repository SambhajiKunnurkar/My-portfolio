<?php
session_start();
include('../includes/dbconn.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $feedback = $_POST['feedback'];
    $email = $_SESSION['login'];

    // Update registration table with feedback
    $updateQuery = "UPDATE registration SET feedback = ? WHERE emailid = ?";
    $stmt = $mysqli->prepare($updateQuery);
    $stmt->bind_param('ss', $feedback, $email);

    if ($stmt->execute()) {
        // Feedback submitted successfully
        echo "Feedback submitted successfully.";
        header('Location:room-details.php');
    } else {
        // Error updating feedback
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$mysqli->close();
?>
