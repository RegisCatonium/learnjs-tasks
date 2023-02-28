'use strict'

// Перемешайте массив

let arr = [1, 2, 3];


function sortByAge(array) {
	array.sort(() =>  Math.random() - 0.5);
}

sortByAge(arr);
console.log(arr);
sortByAge(arr);
console.log(arr);
sortByAge(arr);
console.log(arr);
