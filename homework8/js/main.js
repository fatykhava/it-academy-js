const text = document.querySelector('#input-text'),
	btn = document.querySelector('.btn-vowels'),
	value = document.querySelector('.vowels-counter'),
	vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

// 1 variant
// btn.addEventListener('click', function () {
// 	let str = text.value;
// 	let arr = str.split('');
// 	let count = 0;

// 	arr.forEach((index) => {
// 		if (vowelsArr.indexOf(index.toLowerCase()) >= 0) count++;
// 	})

// 	value.textContent = count;
// });

// 2 variant
// btn.addEventListener('click', function () {
// 	let str = text.value;
// 	let arr = str.split('');

// 	let arrVowel = arr.filter((index) => {
// 		if (vowelsArr.indexOf(index.toLowerCase()) >= 0) return index;
// 	})

// 	value.textContent = arrVowel.length;
// });

// 3 variant
btn.addEventListener('click', function () {
	let str = text.value;
	let arr = str.split('');

	let arrVowel = arr.reduce((total, amount) => {
		console.log(amount);
		if (vowelsArr.indexOf(amount.toLowerCase()) >= 0) total.push(amount);
		return total;
	}, []);

	value.textContent = arrVowel.length;
});