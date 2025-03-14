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
