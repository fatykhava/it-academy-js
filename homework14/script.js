const HOURS = 12;
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



  setTimeout(showTime, 1000);
}

createClock();
showTime();
