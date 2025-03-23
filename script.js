
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');   
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); 
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-tex', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 80,
    loop: true,
  });
