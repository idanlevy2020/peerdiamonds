<html dir="rtl">
<?php
// קליטת המידע 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];


// המבנה של המייל שמתקבל בתגובה - יש לשנות את המייל הרצוי
$to = 'idan.peerdiamonds@gmail.com';
$subject = "subject: פנייה של לקוח מאתר idan.peerdiamonds@gmail.com";
$message = "$name דואר אלקטרוני:$email טלפון: $phone";

// שולח  את פרטי הטופס לפי פורמט הפקודה mail()
mail($to, $subject, $message);
echo '<b>תודה רבה שהשארת לנו את פרטיך</b><p>ההודעה שלך נשלחה לאימל שלנו  ל-'.$to.' אחד מנציגנו יחזור אליך בהקדם האפשרי.'; 





//header("Location: http://www.peerdiamonds.co.il/success.html");
?>
</html>
