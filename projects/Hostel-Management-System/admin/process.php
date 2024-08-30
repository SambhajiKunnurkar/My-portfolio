<?php
session_start();
include('../includes/dbconn.php');
include('../includes/check-login.php');
check_login();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input
    $attend = isset($_POST['attend']) ? $_POST['attend'] : '';

    // Check current attendance status
    $sql_check = "SELECT attend FROM registration WHERE emailid = ?";
    $stmt_check = $mysqli->prepare($sql_check);
    $stmt_check->bind_param('s', $_SESSION['login']);
    $stmt_check->execute();
    $stmt_check->store_result();
    
    if ($stmt_check->num_rows == 0) {
        echo "User not found or not registered";
        exit();
    }

    $stmt_check->bind_result($current_attend);
    $stmt_check->fetch();
    $stmt_check->close();

    // Update the attendance based on user's choice
    if ($attend == 'yes' && $current_attend != 'yes') {
        // User is updating to 'yes'
        $sql_update = "UPDATE registration SET attend = 'yes', yes_counter = yes_counter + 1 WHERE emailid = ?";
    } elseif ($attend == 'no' && $current_attend == 'yes') {
        // User is updating to 'no' from 'yes'
        $sql_update = "UPDATE registration SET attend = 'no', yes_counter = yes_counter - 1 WHERE emailid = ?";
    } else {
        // No change needed or invalid input
        echo "Attendance not updated";
        exit();
    }

    // Execute the update query
    $stmt_update = $mysqli->prepare($sql_update);
    $stmt_update->bind_param('s', $_SESSION['login']);

    if ($stmt_update->execute()) {
        echo "Attendance updated successfully";
    } else {
        echo "Error updating attendance: " . $stmt_update->error;
    }
    $stmt_update->close();
} else {
    echo "Invalid request method";
}

$mysqli->close();
?>
