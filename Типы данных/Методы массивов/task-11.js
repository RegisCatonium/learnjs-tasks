'use strict'

// Получить средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
	let summ = 0
	users.forEach((user) => {
		summ += user.age;
	})
	return (summ / (users.length));
}

console.log( getAverageAge(arr) );

// решение 2
function getAverageAge2(users) {
	let summ = users.reduce( function(res, user) {
		return res + user.age
	}, 0)
	return (summ / (users.length));
}

console.log( getAverageAge2(arr) );