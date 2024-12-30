<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $foodName = htmlspecialchars($_POST['foodName']);    
    $consistsOf = htmlspecialchars($_POST['consistsOf']);
    $additionalNotes = htmlspecialchars($_POST['additionalNotes']);


    $to = "praneelsrini2012@gmail.com";  
    $subject = "New Food Request";


    $email_body = "A Cook Web user has a request to add a new food!\n\n";
    $email_body .= "The food's name was $foodName\n";
    $email_body .= "It consists of: $consistsOf\n";
    $email_body .= "And the additional notes they had include:\n$additionalNotes\n";


    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Your request has been recorded."; 
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>