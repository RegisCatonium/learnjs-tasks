'use strict'

// Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
	name: "Василий Иванович",
	age: 35
};

let newUser = JSON.parse(JSON.stringify(user));

console.log(user);
console.log(newUser);