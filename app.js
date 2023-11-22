const menu = document.querySelector('.nav_menu');
const menuList = document.querySelector('.nav_list')
const links = document.querySelectorAll('.nav_link');
const sliders = [...document.querySelectorAll('.slider_body')];
const arrowAfter = document.getElementById('after');
const arrowBefore = document.getElementById('before')
let value;


// Funcionalidad del menú hamburguesa
menu.addEventListener('click', () => {
    menuList.classList.toggle('nav_list--show');
    menu.classList.toggle('nav_menu--active')
}); 

links.forEach((link)=> {
    link.addEventListener ('click', () => {
        menuList.classList.remove('nav_list--show')
        menu.classList.remove('nav_menu--active')
    })
})

// Funcionalidad del slider
arrowAfter.addEventListener('click', () => changePosition(1));

arrowBefore.addEventListener('click', () => changePosition(-1));

const changePosition = (change) => {
    const currentElement = Number(document.querySelector('.slider_body--show').
    dataset.id);

    value = currentElement;
    value += change;
    if (value === 0 || value == sliders.length+1) {
        value = value === 0 ? sliders.length : 1;
    }

    sliders[currentElement-1].classList.toggle('slider_body--show');
    sliders[value-1].classList.toggle('slider_body--show');
}