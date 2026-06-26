// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    const namePattern = /^[a-zA-Z\s']+$/;
    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Your Full Name is required.';
        isValid = false;
    } else if (fullName.length < 3) {
        document.getElementById('fullNameError').textContent = 'Full Name must be at least 3 characters long.';
        isValid = false;
    } else if (!namePattern.test(fullName)) {
        document.getElementById('fullNameError').textContent = 'Full Name can only contain letters, spaces, and apostrophes.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\+?\d{5,15}$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (5 to 15 digits) with an optional leading plus sign.';
        isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Please select a subject.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters long.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Thank you! Your message has been sent successfully.';
        document.getElementById('successMessage').className = 'success';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('successMessage').textContent = 'Please fix the error(s) above.';
        document.getElementById('successMessage').className = 'error';
    }
});