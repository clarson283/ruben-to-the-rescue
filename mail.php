<?php

if(isset($_GET['submit'])) {
	$name = $_GET['name'];
	$email = $_GET['email'];
	$number = $_GET['number'];
	$message = $_GET['message'];
	$monday = $_GET['mon'];
	$tuesday = $_GET['tues'];
	$wednesday = $_GET['wed'];
	$thursday = $_GET['thurs'];
	$friday = $_GET['fri'];
	$saturday = $_GET['sat'];
	$sunday = $_GET['sun'];

	$to	= 'clarson283@gmail.com';
	$From = $_GET['email'];
	$subject = 'Ruben to the Rescue - Technical Support';

	mail($to, $subject, $message, "From: " . $name);
	echo $name;
}

?>