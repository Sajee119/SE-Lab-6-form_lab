<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        $name = htmlspecialchars($_POST["name"]); 
        $email = htmlspecialchars($_POST["email"]); 
        $password = htmlspecialchars($_POST["password"]); 
        echo "<h2>Form Submission Successful</h2>"; 
        echo "<p><strong>Name:</strong> $name</p>"; 
        echo "<p><strong>Email:</strong> $email</p>"; 
        echo "<p><strong>Password:</strong> " . str_repeat("*", strlen($password)) . "</p>"; 
    } else { 
        echo "<p>Form was not submitted correctly.</p>"; 
    } 
?>