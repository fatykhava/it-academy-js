let drinkStorage = new HashStorageFunc();

document.querySelector('#add-btn').addEventListener('click', () => {
  let key = document.querySelector('#drink-name').value;
  let value = {};

  value['name'] = document.querySelector('#drink-name').value;
  value['instruction'] = document.querySelector('#instruction').value;

  if (document.querySelector('#alcohol').checked) {
    value['alcohol'] = 'да';
  } else if (document.querySelector('#alcohol-free').checked) {
    value['alcohol'] = 'нет';
  }

  clearInput();
  drinkStorage.addValue(key, value);
});

document.querySelector('#info-btn').addEventListener('click', () => {
  let key = document.querySelector('#search-drink').value;

  clearInput();

  let info = drinkStorage.getValue(key);

  if (info) {
    alert(`Название напитка: ${info['name']}, алкоголь: ${info['alcohol']}, рецепт приготовления: ${info['instruction']}`)
  } else {
    alert('Напитка нет в базе')
  }
})

document.querySelector('#delete-btn').addEventListener('click', () => {
  let key = document.querySelector('#delete-drink').value;

  clearInput();
  if (drinkStorage.getValue(key)) {
    drinkStorage.deleteValue(key);
    alert('Удаление прошло успешно!');
  } else {
    alert('Напитка нет в базе')
  }
})

document.querySelector('#show-drinks-btn').addEventListener('click', () => {
  let drinkArr = drinkStorage.getKeys();
  let str = '';
  drinkArr.forEach((item) => {
    str += item + ', '
  })
  alert(str);
})

function clearInput() {
  document.querySelectorAll('input').forEach((input) => {
    input.value = '';
  })
  document.querySelector('textarea').value = '';
}