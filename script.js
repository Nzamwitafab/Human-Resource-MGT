// script.js

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for now

        // Date of Birth Validation
        const dobInput = document.getElementById("dob");
        const dobValue = new Date(dobInput.value);
        const currentDate = new Date();

        if (dobValue > currentDate) {
            alert("Date of birth cannot be in the future.");
            return;
        }

        // Password Strength Validation
        const passwordInput = document.getElementById("password");
        const password = passwordInput.value;

        if (password.length < 8) {
            alert("Password should be at least 8 characters long.");
            return;
        }

        // Check for at least one digit in the password
        if (!/\d/.test(password)) {
            alert("Password should contain at least one digit.");
            return;
        }

        // Check for at least one uppercase letter in the password
        if (!/[A-Z]/.test(password)) {
            alert("Password should contain at least one uppercase letter.");
            return;
        }

        // Check for at least one lowercase letter in the password
        if (!/[a-z]/.test(password)) {
            alert("Password should contain at least one lowercase letter.");
            return;
        }

        // Check for at least one special character in the password
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?/~\-]/.test(password)) {
            alert("Password should contain at least one special character.");
            return;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        registrationForm.submit();
    });
});
