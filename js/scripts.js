(function () {
    let form = document.querySelector('.contact-form');
    let emailInput = document.querySelector('#email');
    let telephoneInput = document.querySelector('#telephone')
    let messageInput = document.querySelector('#message');

    // ========== VALIDATE EMAIL ====================================================
    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }

        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    // ========== VALIDATE MESSAGE =============================
    function validateMessage() {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    // ========== SHOW ERROR MESSAGE ============================
    function showErrorMessage(input, message) {
        let container = input.parentElement;

        // Check and Remove any existing errors
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // Now add the error if the message isn’t empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    // ========== VALIDATE FORM =================================
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('Message sent successfully!');
        }
    })


    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // THE RETURN STATEMENT HERE

})();