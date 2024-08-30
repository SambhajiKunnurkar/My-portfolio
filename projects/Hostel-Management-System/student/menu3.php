<p>Query executed and data fetched successfully!</p>
                <p>Number of students with feedback: <?php echo count($students); ?></p>
                <!-- Display data in a table -->
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="zero_config" class="table table-striped table-bordered no-wrap">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Room Number</th>
                                        <th>First Name</th>
                                        <th>Feedback</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($students as $student) { ?>
                                        <tr>
                                            <td><?php echo $student['id']; ?></td>
                                            <td><?php echo $student['roomno']; ?></td>
                                            <td><?php echo $student['firstName']; ?></td>
                                            <td><?php echo $student['feedback']; ?></td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>












 <?php
session_start();
include('../includes/dbconn.php');
include('../includes/check-login.php');
check_login();

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

$query = "SELECT id, roomno, firstName, feedback FROM registration WHERE feedback IS NOT NULL AND feedback != ''";
$stmt = $mysqli->prepare($query);

if (!$stmt) {
    die("Error preparing statement: " . $mysqli->error);
}

if (!$stmt->execute()) {
    die("Error executing statement: " . $stmt->error);
}

$stmt->store_result();

if ($stmt->num_rows == 0) {
    echo "No feedback found.";
    $stmt->close();
    $mysqli->close();
    exit;
}

$stmt->bind_result($id, $roomno, $firstName, $feedback);

$students = array();

while ($stmt->fetch()) {
    $student = array(
        'id' => $id,
        'roomno' => $roomno,
        'firstName' => $firstName,
        'feedback' => $feedback
    );
    $students[] = $student;
}

$stmt->close();
$mysqli->close();


?>