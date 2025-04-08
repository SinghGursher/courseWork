class FormValidator {
    constructor(username,password) {
        this.username = username;
        this.password = password;
    }

    validateUsername() {
        const emailentered = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailentered.test(this.username);
    }

    validatePassword() {
        return this.password.length >= 8;
    }

    validateForm() {
        if (!this.validateUsername()) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!this.validatePassword()) {
            alert("Password must be at least 8 characters long.");
            return false;
        }

        return true;
    }
}

function setupValidation() {
    const form = document.getElementById("user-input");

    form.addEventListener("submit",function(event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const formValidator = new FormValidator(username,password);
        if (!formValidator.validateForm()) {
            event.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded",setupValidation);