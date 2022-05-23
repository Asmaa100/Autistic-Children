<?php 
	include 'database.php';

	//check if form is submitted
	if($_POST['submit']){
		$user = mysqli_real_escape_string($con, $_POST['user']);
		$message = mysqli_real_escape_string($con, $_POST['message']);

		//set timezone
		$timezone = date_default_timezone_get();
		date_default_timezone_set($timezone);
		$time = date('h:i:s a', time());

		//validate input
		if (!isset($user) || $user =='' || !isset($message) || $message =='' ) {
			$error = "Please fill in your name and a message";
			header("Location: index2.php?error=".urlencode($error));
			exit();
		}else { 
			$query = "INSERT INTO shouts (user, message, time)
					 VALUES ('$user','$message', '$time')";

			if (!mysqli_query($con, $query)) {
			 	die('Error'.mysqli_error($con));
			 }else{
			 	header("Location: index2.php");
			 	exit();
			 }

		}
	}