document.getElementById("registrationForm").onsubmit = function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
    }
};