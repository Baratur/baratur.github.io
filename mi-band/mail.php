<?php

$message = "Имя: {$_GET['name']}";
$message .= "<br>E-mail: {$_GET['email']}";
$message .= "<br>Телефон: {$_GET['phone']}";

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 2;

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '123_93_321';
$mail->Password = 'dM6LvGt2';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = '123_93_321@mail.ru';
$mail->FromName = 'noreply';
$mail->addAddress('hgrejhuyft13fb6@mail.ru');
$mail->isHTML(true);
$mail->Subject = 'сайт mi band';
$mail->Body = $message;

if( $mail->send() ){
	echo '<p style="color: green;">Ваша заявка отправлена. <br>Мы с вами свяжемся!</p>';
}else{
	echo '<p style="color: red;">Ошибка!</p>';
}