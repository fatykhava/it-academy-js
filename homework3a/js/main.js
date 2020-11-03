const colors = ['red', 'orange', 'yellow', 'green', 'ligthBlue', 'blue', 'violet'];
let objColors = {
	red: false,
	orange: false,
	yellow: false,
	green: false,
	ligthBlue: false,
	blue: false,
	violet: false
}

function mood(numb) {
	let arr = [];
	for (let i = 0; i < numb; i++) {
		let random = randomDian(1, 7);
		let color = colors[random];
		if (color in objColors) {
			arr.push(color);
			delete objColors[color];
		} else {
			i--;
		}
	}
	return arr;
};

function randomDian(n, m) {
	return Math.floor(Math.random() * (m + n));
}

console.log(mood(5));
