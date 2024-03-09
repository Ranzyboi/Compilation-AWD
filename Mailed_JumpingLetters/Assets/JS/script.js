document.addEventListener('DOMContentLoaded', function () {
    const letters = document.querySelectorAll('#_letters #_letter');

    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            letter.classList.add('active');
            setTimeout(() => {
                letter.classList.remove('active');
            }, 1000); // Adjust the duration as needed
        });
    });
});