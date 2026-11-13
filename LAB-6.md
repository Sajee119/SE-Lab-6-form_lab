# Lab 6: Form Submission and Validation

**Duration:** 2 Hours

## Objective

- Create a basic form using HTML and CSS.
- Add form validation using JavaScript.
- Handle form submission and display the results using PHP.

## Lab Overview

Students will build a registration form to collect basic user data. The form will include validation (required fields, email format, and password strength), and upon submission, data will be processed using PHP to display a summary.

## Instructions

### 1. Setting Up the Form (HTML & CSS)

- Create a new folder for this lab (e.g., `form_lab`).
- In the folder, create an HTML file (`index.html`) and a CSS file (`styles.css`).
- Add the following form fields to `index.html`:
  - Name (text input)
  - Email (email input)
  - Password (password input)
  - Confirm Password (password input)
  - Submit Button

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Registration Form</h2>
    <form id="registrationForm" action="submit.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required>

        <button type="submit">Register</button>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

#### Basic CSS Styling (`styles.css`)

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}
form {
    display: flex;
    flex-direction: column;
    width: 300px;
}
label, input, button {
    margin: 5px 0;
}
button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}
```

### 2. Adding Form Validation (JavaScript)

- Create a `script.js` file and add the following validation:
  - Name field should not be empty.
  - Email field should be in valid format.
  - Password must be at least 8 characters.
  - Password Confirmation must match the password.

#### JavaScript Validation (`script.js`)

```javascript
document.getElementById("registrationForm").onsubmit = function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
    }
};
```

### 3. Processing and Displaying the Form Data (PHP)

- In the same folder, create a PHP file (`submit.php`) to handle the form data.
- Use PHP to retrieve the submitted data and display it on the page after submission.

#### PHP Code (`submit.php`)

```php
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
```

## Lab Tasks

1. **Form Setup:** Build the HTML structure for the form in `index.html`.
2. **CSS Styling:** Style the form elements using `styles.css`.
3. **JavaScript Validation:** Add validation to ensure data correctness.
4. **PHP Processing:** Display the form data in `submit.php` using PHP.

## Expected Outcome

By the end of this lab, students will understand how to:

- Structure and style a form using HTML and CSS.
- Implement form validation in JavaScript.
- Use PHP to process form data and display results.