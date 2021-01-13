const BIG_WINDOW = 992;
const MID_WINDOW = 768;
let allWidth = 0;
let slidesToShow = 0;
let itemWidth = 0;
const imgItems = document.querySelectorAll('.all__items .item__photo');
const btnsSlider = document.querySelector('.items__button');

const moveSlide = (indexItem = 0, triggerBlock, widthItem = 0) => {
  document.querySelector(triggerBlock).style.transform = `translate3d(${widthItem - (widthItem * indexItem)}px, 0, 0)`;
}

const countSlides = function () {
  allWidth = document.body.clientWidth;

  if (allWidth > 992) {
    slidesToShow = 3
  } else if (allWidth > 768) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }

  itemWidth = allWidth / slidesToShow;

  imgItems.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  })
}

const putActiveDot = () => {
  let activeIndex = 0;
  const items = document.querySelectorAll('.dot__item');

  items.forEach((elem, index) => {
    if (elem.classList.contains('dot__active')) activeIndex = index;
  })

  countSlides();

  return activeIndex + 1;
}

const getActiveSlide = () => {
  const allWidth = document.body.clientWidth;
  const activeDot = putActiveDot();
  let result = allWidth / slidesToShow;

  moveSlide(activeDot, '.all__items', result);
}

const putActiveSlide = (nextActive) => {

  imgItems.forEach((elem) => {
    if (elem.classList.contains('active__item')) elem.classList.remove('active__item');
    if (elem.classList.contains('next__item')) elem.classList.remove('next__item');
    if (elem.classList.contains('prev__item')) elem.classList.remove('prev__item');
  })

  imgItems[nextActive - 1].classList.add('next__item');
  imgItems[nextActive].classList.add('active__item');
  imgItems[nextActive + 1].classList.add('next__item');
}

window.addEventListener('load', getActiveSlide);
window.addEventListener('resize', countSlides)

btnsSlider.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.classList.contains('dot__item')) {
    const prevActiveDots = document.querySelector('.dot__active');
    prevActiveDots.classList.remove('dot__active');
    e.target.closest('li').classList.add('dot__active');
  }

  // const activeIndex = putActiveDot();
  getActiveSlide();
  // putActiveSlide(activeIndex);
})

