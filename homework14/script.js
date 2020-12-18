const HOURS = 12;
const MIN = 60;
const SEC = 60;
const DEGREE = 360;

const clock = document.querySelector('#clock');


function createClock() {
  for (let i = 0; i < HOURS; i++) {
    const itemContainer = document.createElement('div');
    const item = document.createElement('div');

    item.classList.add('hour');
    item.innerHTML = i + 1;

    itemContainer.classList.add('hour-container');
    itemContainer.style.transform = `translateX(-50%) rotate(${DEGREE / HOURS * (i + 1)}deg)`
    item.style.transform = `rotate(${-DEGREE / HOURS * (i + 1)}deg)`

    itemContainer.append(item);
    clock.append(itemContainer);
  }
}


function showTime() {
  const time = new Date();
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const hourArrow = document.querySelector('#hour');
  const minArrow = document.querySelector('#min');
  const secArrow = document.querySelector('#sec');

  hourArrow.style.transform = `translate(-50%, -50%) rotate(${DEGREE / HOURS * hours}deg)`;
  minArrow.style.transform = `translate(-50%, -50%) rotate(${DEGREE / MIN * min}deg)`;
  secArrow.style.transform = `translate(-50%, -50%) rotate(${DEGREE / SEC * sec}deg)`;

  setTimeout(showTime, 1000);
}

createClock();
showTime();
