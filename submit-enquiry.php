<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $apartment_type = htmlspecialchars(trim($_POST['apartment_type']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Basic validation
    if (!$name || !$email || !$phone || !$apartment_type) {
        echo "Please fill all required fields correctly.";
        exit;
    }

    // Optional: Save to database (Uncomment and configure below)
    /*
    $conn = new mysqli('localhost', 'username', 'password', 'database_name');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO enquiries (name, email, phone, apartment_type, wing, message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $email, $phone, $apartment_type, $wing, $message);
    
    if ($stmt->execute()) {
        echo "Thank you! Your enquiry has been submitted.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
    */

    // Or send email instead of storing
    $to = "nisha@nspiresoft.com";  // change this to your actual email
    $subject = "New Enquiry for {$apartment_type}";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nApartment Type: $apartment_type\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Thank you! Your enquiry has been submitted.";
    } else {
        echo "Something went wrong. Please try again later.";
    }
}
?>
