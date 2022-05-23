<?php 
	include 'database.php';

	//create select query
	$query = "SELECT * FROM shouts ORDER BY id DESC";
	$shouts = mysqli_query($con, $query);
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Experiments</title>
      <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	  <link rel="stylesheet" type="text/css" href="css/style1.css">



</head>
<body>

     
	<div id="container">
		<header>
			<h1>Your experiment</h1>
		</header>
		<div id="shouts">
			<ul>
				<?php while($row = mysqli_fetch_assoc($shouts)) : ?>
						<li class="shout">
							<span><?php echo $row['time'] ?>- </span>
							<strong><?php echo $row['user'] ?>: </strong>
							<?php echo $row['message'] ?></li>
				<?php endwhile ?> 
			</ul>
		</div>
		<div id="input">
			<!-- here is some logic for getting the error message-->
			<?php if (isset($_GET['error'])) : ?>
					<div class="error"> <?php echo $_GET['error']; ?></div>
			<?php endif ?>	

			<form method="post" action="process.php">
				<input type="text" name="user" placeholder="Enter Your Name">
				<input type="text" name="message" placeholder="Enter Your experiment">
				<hr>
				<input class="shout-btn" type="submit" name="submit" value="Experiment">
			</form>
		</div>
	</div>
      <script src="js/jquery-1.11.1.min.js"></script> <!--  Jquary library -->
      <script src="js/socity.js"></script>


</body>
</html>