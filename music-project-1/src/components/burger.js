let burger = document.querySelector('#menu-toggle');
const burgerHandle = () => {
    
    const headerMenu = document.querySelector('.header__menu');
    headerMenu.classList.toggle('menu__show');
    burger.classList.toggle('active');
}

export {burgerHandle , burger};