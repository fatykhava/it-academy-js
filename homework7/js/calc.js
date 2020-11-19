function calcCost() {
	let oneOperand = parseInt(document.querySelector('input[name="city"]:checked').value);
	let twoOperand = parseInt(document.querySelector('input[name="floor"]:checked').value);
	let threeOperand = parseInt(document.querySelector('#square-house').value);
	let indexFlat = 6;
	return oneOperand * twoOperand * threeOperand * indexFlat;
}

document.querySelector('.btn-add').addEventListener('click', function () {
	document.querySelector('#result-sum').innerHTML = `${calcCost().toLocaleString()}$`;
})
