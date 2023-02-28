'use strict'

// Оставить уникальные элементы массива

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
	let newObj = {};
	array.reduce((obj, item) => {
		newObj[item.id] = item;
	}, {})
	return newObj;
}

let usersById = groupById(users);

console.log(usersById);










