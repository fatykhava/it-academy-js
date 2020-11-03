const text = document.querySelector('#input-text'),
	btn = document.querySelector('.btn-vowels'),
	value = document.querySelector('.vowels-counter'),
	vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

btn.addEventListener('click', function () {
	let str = text.value;
	let count = 0;

	console.log(str);
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowelsArr.length; j++) {
			if (str[i].toLowerCase() === vowelsArr[j]) count++;
		}
	};
	console.log(count);
	value.textContent = count;
});