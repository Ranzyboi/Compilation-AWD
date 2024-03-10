// JavaScript for futuristic animation
document.querySelectorAll('section.project').forEach((element) => {
        element.addEventListener('mouseover', () => {
                element.style.transform = 'perspective(600px) rotateX(0deg)';
                element.style.animation = 'colorChange 2s infinite';
        });
        element.addEventListener('mouseout', () => {
                element.style.transform = 'perspective(600px) rotateX(35deg)';
                element.style.animation = '';
        });
});

// Define the colorChange animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes colorChange {
        0% { background-color: #000; }
        50% { background-color: #0ff; }
        100% { background-color: #000; }
    }
`;
document.head.appendChild(style);
