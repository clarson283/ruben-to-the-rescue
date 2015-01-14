<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$message = $_POST['message'];
	$monday = $_POST['mon'];
	$tuesday = $_POST['tues'];
	$wednesday = $_POST['wed'];
	$thursday = $_POST['thurs'];
	$friday = $_POST['fri'];
	$saturday = $_POST['sat'];
	$sunday = $_POST['sun'];

	$to	= 'clarson283@gmail.com';
	$From = $_POST['email'];
	$subject = 'Ruben to the Rescue - Technical Support';

	mail($to, $subject, $message, "From: " . $name);
	echo $name;
}

?>