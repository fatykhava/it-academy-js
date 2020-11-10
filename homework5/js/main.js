const btnLink = document.querySelector('.link'),
	btnStyle = document.querySelector('.style'),
	btnFlex = document.querySelector('.flexbox'),
	body = document.body;

btnLink.addEventListener('click', function () {
	window.location.href = 'https://webref.ru/';
});

btnStyle.addEventListener('click', function () {
	body.classList.toggle('new-style');
});

btnFlex.addEventListener('click', function () {
	btnLink.classList.toggle('hide');
	btnStyle.classList.toggle('hide');
	btnFlex.classList.toggle('hide');

	body.classList.toggle('flex');

	for (let i = 0; i < 9; i++) {
		let item = document.createElement('div');
		item.classList.add('items');
		item.innerHTML = `ITEMS ${i+1}`
		body.appendChild(item);
	}

});