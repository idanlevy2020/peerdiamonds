<html dir="rtl">
<?php
// ����� ����� 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];


// ����� �� ����� ������ ������ - �� ����� �� ����� �����
$to = 'idan.peerdiamonds@gmail.com';
$subject = "subject: ����� �� ���� ���� idan.peerdiamonds@gmail.com";
$message = "$name ���� ��������:$email �����: $phone";

// ����  �� ���� ����� ��� ����� ������ mail()
mail($to, $subject, $message);
echo '<b>���� ��� ������ ��� �� �����</b><p>������ ��� ����� ����� ����  �-'.$to.' ��� ������� ����� ���� ����� ������.'; 





//header("Location: http://www.peerdiamonds.co.il/success.html");
?>
</html>
