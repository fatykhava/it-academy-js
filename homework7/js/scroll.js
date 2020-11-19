
const scrollWindow = () => {
	let scrolled = window.pageYOffset;
	let coords = document.documentElement.clientHeight;

	if (scrolled > coords*2) {
		goTopBtn.classList.add('back-to-top');
	}
	if (scrolled < coords*2) {
		goTopBtn.classList.remove('back-to-top');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -50);
		setTimeout(backToTop, 0);
	}
}

var goTopBtn = document.querySelector('.fa-chevron-up');

window.addEventListener('scroll', scrollWindow);
goTopBtn.addEventListener('click', backToTop);
