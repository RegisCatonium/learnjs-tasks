'use strict'

// Сумма пользовательских чисел

let array = [1, -2, 3, 4, -9, 6];
let array2 = [2, -1, 2, 3, -9];
let array3 = [-1, 2, 3, -9, 11];
let array4 = [-2, -1, 1, 2];
let array5 = [-2, -1, -1, -2];

function getMaxSubSum(arr) {
	let maxSum = 0;

	for (let i = 0; i < arr.length; i++) {
		let sum = 0;

		for (let j = i; j < arr.length; j++) {
			sum += arr[j];
			maxSum = Math.max(maxSum, sum);
		}
	}
	return maxSum;
}
console.log(getMaxSubSum(array4));

// данное решение сделал после прочтения подсказки
function getMaxSubSum2(arr) {
	let maxSum = 0;
	let sum = 0;

	arr.forEach(item => {
		sum += item;
		maxSum = Math.max(maxSum, sum);
		if (sum < 0) sum = 0
	})
	return maxSum;
}

console.log(getMaxSubSum2(array4));

