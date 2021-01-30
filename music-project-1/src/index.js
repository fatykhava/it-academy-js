import router from "./routes";
import {burgerHandle, /* burger */} from "../src/components/burger";
import getPreloader from "./components/preloader";
import {/* dots , */putActiveDot, getActiveSlide, putActiveSlide, getTemplateSlides} from "./components/slider";
import createRadioList from "./components/music";

document.body.innerHTML = `
    <main>
       <div class="header" id="header"></div>
       <div id="content">
            testksdjhfjksdkf
       </div> 
    </main>
`;

window.addEventListener('load', async () => {
    // Загрузка страницы Loading page
    await router();
    // Burger click
    let burger = document.querySelector('#menu-toggle');
    burger.addEventListener('click', burgerHandle);
    // Preloader
    setTimeout(getPreloader, 2000);
    // Slider
    getActiveSlide();
    let dots = document.querySelector('.items__button');
    dots.addEventListener('click', getTemplateSlides);
    // List radio
    createRadioList();
} );

window.addEventListener('hashchange',async () => {
    //Loading page
    await router();
    // Burger click
    let burger = document.querySelector('#menu-toggle');
    burger.addEventListener('click', burgerHandle);
    // Preloader
    setTimeout(getPreloader, 1000);
    //Slider
    // Slider
    getActiveSlide();
    let dots = document.querySelector('.items__button');
    dots.addEventListener('click', getTemplateSlides);
} );









  