


const passwordInput = document.getElementById('passwordInput');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', function() {
    if (this.value.length < 6) {
        feedback.textContent = 'Wachtwoord te kort';
        feedback.style.color = 'red';

    } else {
        feedback.textContent = 'Sterk wachtwoord!';
        feedback.style.color = 'green';
    }
}); 