let header = document.querySelector('.introduction');
let heroimage = document.querySelector('.introimage');
let wave = document.querySelector('.wave');


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    header.style.paddingLeft = value * 1.5 + 'px';
    heroimage.style.paddingRight = value * 1.5 + 'px';
    wave.style.padding = value * 1 + 'px';
}); 
