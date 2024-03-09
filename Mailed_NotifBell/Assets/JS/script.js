document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('_button');
    const notification = document.getElementById('_notification');

    let counter = 0; // Initialize the counter

    button.addEventListener('click', () => {
        counter++;
        notification.setAttribute('data-count', counter);
        notification.classList.add('count', 'notify');
        button.classList.add('active');

        // Add animation to the button
        button.style.animation = 'scaleUp 0.3s ease-in-out';
        setTimeout(() => {
            button.style.animation = ''; // Reset the animation after it completes
        }, 300);
    });

    notification.addEventListener('animationend', () => {
        notification.classList.remove('notify');
        button.classList.remove('active');
    });
});