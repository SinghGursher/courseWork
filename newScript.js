const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let isValid = true;
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            const msgElement = document.getElementById("msg");
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxgxf-q1qCEujDmQ-LrXvchSLAoeLW3TVPUKwv8TXUhS1N7oXA7UcCnWTvqTuoszb8MIg/exec';
            const form = document.forms['submit-to-google-sheet']
            https://kit.fontawesome.com/0d8d7b063e
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msgElement.textContent = "Message sent successfully!";
                    msgElement.style.color = "#08fdd8";
                    setTimeout(() => {
                        msgElement.textContent = "";
                    }, 5000);
                    form.reset();
                })
                .catch(error => {
                    msgElement.textContent = "Error! Please try again.";
                    msgElement.style.color = "#ff004f";
                    console.error('Error!', error.message);
                });
        }
    });