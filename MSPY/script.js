document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta');

    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecting to the TRY NOW page...');
        // Add your redirection logic here, e.g., window.location.href = 'try-now.html';
    });
});
