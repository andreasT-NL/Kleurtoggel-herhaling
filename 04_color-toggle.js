// query select elements
const hamburger = document.querySelector('a img');
const menuBlok = document.querySelector('ul');
const allMenuItelms = Array.from(document.querySelectorAll('ul li a'));
const background = document.querySelector('body');
const colourDescription = document.querySelector('p');

const openMenu = function () {
    hamburger.addEventListener('click', function () {
        menuBlok.classList.toggle('show');
    });
};

const removeStyles = function () {
    background.classList.remove('home-background', 'red_menu', 'blue_menu', 'green_menu', 'purple_menu', 'yellow_menu');
};

let changeBackground = function () {
    allMenuItelms[0].addEventListener('click', function () {
        removeStyles();
        background.classList.add('home-background');
        menuBlok.classList.remove('show');
        colourDescription.innerHTML = 'grey';
    });
    allMenuItelms[1].addEventListener('click', function () {
        removeStyles();
        background.classList.add('red_menu');
        menuBlok.classList.remove('show');
        colourDescription.innerHTML = 'red';
    });
    allMenuItelms[2].addEventListener('click', function () {
        removeStyles();
        background.classList.add('blue_menu');
        menuBlok.classList.remove('show');
        colourDescription.innerHTML = 'blue';
    });
    allMenuItelms[3].addEventListener('click', function () {
        removeStyles();
        background.classList.add('green_menu');
        menuBlok.classList.remove('show');
        colourDescription.innerHTML = 'green';
    });
    allMenuItelms[4].addEventListener('click', function () {
        removeStyles();
        background.classList.add('purple_menu');
        menuBlok.classList.remove('show');
        colourDescription.innerHTML = 'purple';
    });
    allMenuItelms[5].addEventListener('click', function () {
        removeStyles();
        background.classList.add('yellow_menu');
        menuBlok.classList.remove('show');
        colourDescription.innerHTML = 'yellow';
    });
};
openMenu();
changeBackground();