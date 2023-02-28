'use strict'

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

// решение 1
let names = [];
users.forEach((item) => {
	names.push(item.name);
})
// решение 2
let names2 = users.map(item => item.name);

console.log( names );
console.log( names2 );
