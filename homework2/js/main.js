const treeSum = (arr) => {

	for (let i = 0; i< arr.length; i++) {
		if (typeof arr[i] === 'object') {
			return treeSum(arr.flat());
		}
	}

	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	return arr.reduce(reducer);
}

console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));