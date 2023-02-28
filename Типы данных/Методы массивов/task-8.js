'use strict'

// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];


let usersMapped = [];
users.forEach((item) => {
	let user = {};
	user.id = item.id;
	user.fullName = item.name + ' ' + item.surname;
	usersMapped.push(user);
})

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );

let usersMapped2  = users.map(item => ({
	id: item.id,
	fullName: item.name + ' ' + item.surname
}));

console.log( usersMapped2[1].id );
console.log( usersMapped2[1].fullName );

