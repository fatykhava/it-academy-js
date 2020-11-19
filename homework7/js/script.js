$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000

	});
});

function bindPopup(trigerSelector, popupSelector, closeCelector) {
	const triger = document.querySelectorAll(trigerSelector);
	const popup = document.querySelector(popupSelector);
	const close = document.querySelectorAll(closeCelector);
	const windows = document.querySelectorAll('[data-modal]');

	for(let i = 0; i < triger.length; i++) {
		triger[i].addEventListener('click', function() {
			for(let j = 0; j < windows.length; j++) {
				windows[j].classList.add('hide');
			}

			popup.classList.remove('hide');
			popup.classList.add('show');
			document.body.classList.add('lock');
		})
	}

	close.forEach((btn) => {
		btn.addEventListener('click', function() {
			popup.classList.remove('show');
			document.body.classList.remove('lock');
		})
	})
}

bindPopup('.butn', '.popup-design', '.popup-close');
bindPopup('.butn-white', '.popup-consultation', '.popup-close');
