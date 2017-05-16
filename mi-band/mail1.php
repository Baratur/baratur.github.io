<?php

$message = "Имя: {$_GET['name']}";
$message .= "<br>Time: {$_GET['time']}";
$message .= "<br>Телефон: {$_GET['phone']}";


require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '123_93_321';
$mail->Password = 'dM6LvGt2';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = '123_93_321@mail.ru';
$mail->FromName = 'noreply';
$mail->addAddress('goodbracer@mail.ru');
$mail->isHTML(true);
$mail->Subject = 'сайт mi band ЗАКАЗ';
$mail->Body = $message;

if( $mail->send() ){
	echo '<p class="modal-alert">Спасибо за заказ! <br>Мы вам перезвоним</p>';
}else{
	echo '<p style="color: red;">Ошибка!</p>';
}