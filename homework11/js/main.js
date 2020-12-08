const checkString = (e) => {
  e.target.value = e.target.value.trim();
};

const checkNumber = (e) => {
  if (e.target.value < 0) {
    e.target.value = '';
  }
};

document.querySelectorAll('[type="text"]').forEach((input) =>{
  input.addEventListener('change', checkString);
})

document.querySelector('[type="number"]').addEventListener('change', checkNumber);