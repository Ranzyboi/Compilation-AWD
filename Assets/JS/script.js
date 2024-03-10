// JavaScript for futuristic animation
document.querySelectorAll('section.project').forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.transform = 'perspective(600px) rotateX(0deg)';
    });
    element.addEventListener('mouseout', () => {
        element.style.transform = 'perspective(600px) rotateX(35deg)';
    });
});

class Card extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('div');
        const image = document.createElement('img');
        image.src = this.getAttribute('data-image');
        wrapper.appendChild(image);
        shadow.appendChild(wrapper);
    }
}

customElements.define('card', Card);

Vue.component('card', {
    props: ['image', 'title', 'description'],
    template: `
        <div class="card" :style="{ backgroundImage: 'url(' + image + ')' }">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
    `
})

new Vue({
    el: '#app',
    data: {
        projects: [
            { link: './Mailed_Calculator/index.html', image: './Assets/Pics/Calculator.jpeg', title: 'Calculator', description: 'A simple calculator webpage with rotating color background.' },
            // Add the rest of your projects here
        ],
        projects: [
            { link: './Mailed_JumpingLetters/index.html', image: './Assets/Pics/JumpingLetters.jpeg', title: 'Jumping Letters', description: 'A webpage with letters that jump around.' },
        ],
        projects: [
            { link: './Mailed_NotifBell/index.html', image: './Assets/Pics/NotifBell.jpeg', title: 'Notification Bell', description: 'SMASH THAT LIKE BUTTON!' },
        ],
        projects: [
            { link: './Mailed_Resume/index.html', image: './Assets/Pics/Resume.png', title: 'Resume', description: 'A sample resume with a button to change colors.' },
        ],
        projects: [
            { link: './Mailed_XOXGame/index.html', image: './Assets/Pics/XOX.png', title: 'XOX Game', description: 'Timeless fun with friends or a clever AI. Quick, strategic battles for laughs and friendly competition.' },
        ],
        projects: [
            { link: './Mailed_Scrollindicator/index.html', image: './Assets/Pics/Scrollindic.jpeg', title: 'Scroll Indicator', description: 'Scroll to make the bar longer.' },
        ]
    }
})
