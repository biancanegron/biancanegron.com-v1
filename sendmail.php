<?php
if(isset($_POST['submit'])) {

$to = "bianca.i.negron@gmail.com";
$subject = "Website Inquiry";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$source = $_POST['source'];
$subject = $_POST['subject'];
$message = $_POST['message'];
 
$body = "From: $name_field\n E-Mail: $email_field\n Source: $source\n Subject: $subject\n Message:\n $message";
 
echo "Message has been sent! \n <a href='http://biancanegron.com'>Go back to Bianca Designs</a>";
mail($to, $subject, $body);

} else {

echo "Message Not Sent";

}
?> 