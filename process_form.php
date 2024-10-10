<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields
    $name = htmlspecialchars(trim($_POST['Name']));
    $email = htmlspecialchars(trim($_POST['Email']));
    $phone = htmlspecialchars(trim($_POST['Phone']));
    $subject = htmlspecialchars(trim($_POST['Subject']));
    $message = htmlspecialchars(trim($_POST['Message']));

    // Validation
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($subject) && !empty($message)) {
        // Email configuration
        $to = 'abarnadevi2705@gmail.com'; // Change to your email address
        $email_subject = "New Contact Form Submission: $subject";
        $email_body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        $headers = "From: $email\n";

        // Send email
        if (mail($to, $email_subject, $email_body, $headers)) {
            // Success message
            echo "Thank you for contacting us. We will get back to you shortly.";
        } else {
            // Error message
            echo "Oops! Something went wrong, and we couldn't send your message.";
        }
    } else {
        // Missing fields
        echo "Please fill in all required fields.";
    }
} else {
    // Invalid request method
    echo "Invalid request method.";
}
?>
