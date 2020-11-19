document.querySelector('#burger').addEventListener('click', () => {
	document.querySelector('#burger').classList.toggle('open');
	document.body.classList.toggle('lock');
	document.querySelector('header').classList.toggle('show-menu');
})