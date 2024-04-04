let menu = document.querySelector('#menu-icon');
let responsive_menu = document.querySelector('.responsive-menu');
let overlay = document.querySelector('.overlay');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    responsive_menu.classList.toggle('open');
    overlay.classList.toggle('show');

    if (responsive_menu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
