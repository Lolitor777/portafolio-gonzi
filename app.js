const menu = document.querySelector('.nav_menu');
const menuList = document.querySelector('.nav_list')
const links = document.querySelectorAll('.nav_link');


menu.addEventListener('click', () => {
    menuList.classList.toggle('nav_list--show');
}); 

links.forEach((link)=> {
    link.addEventListener ('click', () => {
        menuList.classList.remove('nav_list--show')
    })
})
