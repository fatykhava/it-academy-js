const checkString = (e) => {
  e.target.value = e.target.value.trim();
};

const checkAllInput = () => {
  const usersNumb = document.querySelector('#users-during-day');
  const webName = document.querySelector('#web-name');

  if (usersNumb.value < 0) {
    usersNumb.value = '';
    alert('Число посетителей не может быть отрицательным!');
    return;
  }

  if (webName.value.trim().length < 3) {
    webName.value = '';
    alert('Название сайта должно быть более 3 символов');
    return;
  }

  form.submit();
};

document.querySelectorAll('[type="text"]').forEach((input) =>{
  input.addEventListener('change', checkString);
})

document.querySelector('.submit').addEventListener('click', checkAllInput);