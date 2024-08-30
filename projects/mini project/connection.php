<?php

		$name = $_POST['name'];
		$uname = $_POST['uname'];
		$email = $_POST['email'];
		$phoneNumber = $_POST['phoneNumber'];
		$password = $_POST['password'];
		$ConfirmPassword = $_POST['ConfirmPassword'];
		$gender = $_POST['gender'];

		$conn = new mysqli('localhost','root','','test');
		if($conn->connect_error){
			die('Connection Failed : '.$conn->connect_error);
		} else{
			$stmt = $conn->prepare("insert into register(name, uname, email, phoneNumber, password, ConfirmPassword, gender)
				values(?, ?, ?, ?, ?, ?, ?");
			$stmt->bind_param("sssisss", $name,$uname, $email, $phoneNumber, $password, $ConfirmPassword, $gender  );
			$stmt->execute();
			echo "registration Successful...";
			$stmt->close();
			$conn->close();
		}
?>