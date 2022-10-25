const triggers = document.querySelectorAll('li');

function handleEnter() {
    console.log('enter');
}

function handleLeave() {
    console.log('leave');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));