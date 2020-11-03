const text = document.querySelector('#input-text'),
	btn = document.querySelector('.btn-vowels'),
	value = document.querySelector('.vowels-counter'),
	vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

btn.addEventListener('click', function () {
	let str = text.value;
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (vowelsArr.indexOf(str[i].toLowerCase()) >= 0) count++;
	};

	value.textContent = count;
});