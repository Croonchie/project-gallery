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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop form submit if failed
        let isValid = true;

        // Clear error messages from before
        document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");

        // Validate Name
        const name = document.getElementById("name");
        if (name.value.trim() === "") {
            showError(name, "Name is required.");
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById("email");
        if (!isValidEmail(email.value)) {
            showError(email, "Enter a valid email address.");
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById("message");
        if (message.value.trim() === "") {
            showError(message, "Message cannot be empty.");
            isValid = false;
        }

        // Submit form if only valid
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    function showError(input, message) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
