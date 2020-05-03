<?php
 
   $to = 'info@legalchoice.by, market@legalchoice.by';       
   $from = 'legalchoice@yandex.by'; 
   $subject = 'Заказ с сайта LegalChoice'; 
   $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
   $headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
   $headers .= "From: <". $from .">\r\n"; 
   $headers .= "MIME-Version: 1.0\r\n"; 
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n"; 
   $message = 'Хочу заказать у вас услуги'; 
if(isset($_POST['name']))

$message = "
Информация о покупателе:
Имя: ".$_POST['name']."
E-mail: ".$_POST['e-mail']."
Телефон: ".$_POST['phone']."
Сообщение: ".$_POST['text']."
Время заказа: ".date("Y-m-d H:i:s");
   
   mail($to, $subject, $message, $headers);

{
	header('Location: good.html');
	
}
