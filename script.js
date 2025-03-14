document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const details = event.target.nextElementSibling;
            if (details.classList.contains("hidden")) {
                details.classList.remove("hidden");
                event.target.textContent = "Hide Details";
            } else {
                details.classList.add("hidden");
                event.target.textContent = "Show Details";
            }
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission to validate 

    // Clear any previous error messages
    clearErrorMessages();

    // Validate each field
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        showError("name", "Name is required.");
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        showError("message", "Message is required.");
        isValid = false;
    }

    // If all fields are valid, submit the form (for now, we will just log the success)
    if (isValid) {
        console.log("Form submitted successfully!");
        // You can submit the form here if needed: this.submit();
    }
});

// Function to validate email format using regular expressions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to display error messages
function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Function to clear any previous error messages
function clearErrorMessages() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(error => {
        error.textContent = "";
        error.style.display = "none";
    });
}

