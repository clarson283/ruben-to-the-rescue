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
	//$From = $_POST['email'];
	$subject = 'Ruben to the Rescue - Technical Support';

	mail($to, $subject, $message, "From: " . $name);
	echo $name;
/*
	$mail->Host = "mail.yourdomain.com"; // SMTP server
	$mail->SMTPDebug = 2; // enables SMTP debug $mail->SMTPAuth = true; // enable SMTP authentication
	$mail->SMTPSecure = "ssl"; // sets the prefix to server
	$mail->Host = "smtp.gmail.com"; // GMAIL as SMTP srvr
	$mail->Port = 465; // set SMTP port for the GMAIL server
	$mail->Username = "yourusername@gmail.com"; // 
	$mail->Password = "yourpassword"; // GMAIL 
*/
}

?>