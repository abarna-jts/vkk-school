<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form inputs
    $name = filter_input(INPUT_POST, 'Name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'Email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'Phone', FILTER_SANITIZE_STRING);
    $subject = filter_input(INPUT_POST, 'Subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'Message', FILTER_SANITIZE_STRING);

    if ($name && $email && $phone && $subject && $message) {
        // Email details
        $to = 'abarnadevi2705@gmail.com'; 
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

        $email_subject = "New Contact Form Submission: $subject";
        $email_body = "You have received a new message from the contact form on your website.\n\n" .
                      "Here are the details:\n" .
                      "Name: $name\n" .
                      "Email: $email\n" .
                      "Phone: $phone\n" .
                      "Subject: $subject\n" .
                      "Message:\n$message\n";

        // Send email
        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "Thank you! Your message has been sent.";
        } else {
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        echo "Please fill in all required fields correctly.";
    }
} else {
    echo "Invalid request method.";
}

