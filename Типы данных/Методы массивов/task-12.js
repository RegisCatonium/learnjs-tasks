'use strict'

// Оставить уникальные элементы массива
let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
	let array = [];
	arr.forEach(item => {
		if(!array.includes(item)) {
			array.push(item)
		}
	})
	return array
}

console.log(unique(strings))



