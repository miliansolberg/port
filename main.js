const triggers = document.querySelectorAll('ul > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('nav');

function handleEnter() {
    console.log('enter');
}

function handleLeave() {
    console.log('leave');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));