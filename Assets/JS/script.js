// JavaScript for futuristic animation
document.querySelectorAll('section.project').forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.transform = 'perspective(600px) rotateX(0deg)';
    });
    element.addEventListener('mouseout', () => {
        element.style.transform = 'perspective(600px) rotateX(35deg)';
    });
});