'use strict'

// Создайте калькулятор
//Возможно ли создать функции A и B, чтобы new A() == new B()?

// возможно, если обе функции будут возвращать один и тот же объект

let c = {}

function A() {
	return c
}
function B() {
	return c
}

let a = new A();
let b = new B();

alert( a == b ); 
console.log(a == b);