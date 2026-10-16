
const form = document.getElementById("registration-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const successMessage = document.getElementById("success-message");

function showError(input, message) {
    document.getElementById(input.id + "-error").textContent = message;
    input.classList.add("invalid");
    input.classList.remove("valid");
    input.setAttribute("aria-invalid", "true");
}

function showValid(input) {
    document.getElementById(input.id + "-error").textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
    input.setAttribute("aria-invalid", "false");
}

function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
        showError(nameInput, "Name is required.");
        return false;
    }

    if (!/^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u.test(name)) {
        showError(nameInput, "Enter a valid name using letters only.");
        return false;
    }

    showValid(nameInput);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        showError(emailInput, "Email address is required.");
        return false;
    }

    if (!emailPattern.test(email)) {
        showError(emailInput, "Please enter a valid email address.");
        return false;
    }

    showValid(emailInput);
    return true;
}

function validatePhone() {
    const phone = phoneInput.value.trim();

    if (phone === "") {
        showError(phoneInput, "Phone number is required.");
        return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
        showError(phoneInput, "Enter a valid 10-digit Indian mobile number.");
        return false;
    }

    showValid(phoneInput);
    return true;
}

function validatePassword() {
    const password = passwordInput.value;

    if (password === "") {
        showError(passwordInput, "Password is required.");
        return false;
    }

    if (password.length < 8) {
        showError(passwordInput, "Password must contain at least 8 characters.");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        showError(passwordInput, "Include at least one uppercase letter.");
        return false;
    }

    if (!/[a-z]/.test(password)) {
        showError(passwordInput, "Include at least one lowercase letter.");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        showError(passwordInput, "Include at least one number.");
        return false;
    }

    if (!/[^A-Za-z0-9\s]/.test(password)) {
        showError(passwordInput, "Include at least one special character.");
        return false;
    }

    showValid(passwordInput);
    return true;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent = "";

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();

    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid
    ) {
        successMessage.textContent =
            "Registration successful! All inputs are valid.";

        form.reset();

        [nameInput, emailInput, phoneInput, passwordInput].forEach(
            function (input) {
                input.classList.remove("valid", "invalid");
                input.removeAttribute("aria-invalid");
            }
        );
    }
});

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);
