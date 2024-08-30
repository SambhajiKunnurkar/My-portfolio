<?php 
include 'dbase.php';

$name = $_POST['name'];
$age=$_POST['age'];
$gdr=$_POST['gender'];
$email=$_POST['email'];
$pass=$_POST['password'];


// $query="INSERT INTO `register1` (`name`, `age`, `gender`, `email`, `password`) 
// 						VALUES ('$name', '$age', '$gdr', '$email', '$pass');";


$query="INSERT INTO `register1` (  `name`, `Surname`, `age`, `date`, `gender`, `email`, `password`, `State`)
                         VALUES (  '$name', '$surname', '$age', '$date', '$gdr', '$email', '$password', '$state');";

$result=mysqli_query($con, $query);
if ($result) {
	echo"<script> alert ('inserted');</script>";
}
else{
	echo"<script> alert ('error in insersion,check your details');</script>";
}

?>
<meta http-equiv="refresh" content="0,url=login.html">