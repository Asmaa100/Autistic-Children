<?php
	//connect to mysql
	$con = mysqli_connect("localhost","root","","shoutit.sql");

	//test conncttion
	if (mysqli_connect_errno()) {
		die("Failed to connect to MySQL: ".mysqli_connect_errno());
	}