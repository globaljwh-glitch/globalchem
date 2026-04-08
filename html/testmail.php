<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Adjust the path if needed

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
#    $mail->Host = '10.1.15.156';        // Your SMTP server
    $mail->SMTPAuth = false;            // Set to true if your server requires authentication
    $mail->Port = 25;                   // Common ports: 25, 587, 465
    $mail->SMTPSecure = false;          // Disable TLS/SSL if not needed
    $mail->SMTPAutoTLS = false;         // Prevent PHPMailer from upgrading to TLS automatically

    // Sender and recipient
    $mail->setFrom('vijay@globalchemicalscorp.com', 'Vijay');
    $mail->addAddress('vijaynpt@gmail.com');      // Recipient

    // Content
    $mail->isHTML(false);               // Plain text
    $mail->Subject = 'Email Test';
    $mail->Body    = 'Testing';

    $mail->send();
    echo 'Test email sent successfully.';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
