'use strict'

// Создайте калькулятор

let calculator = {
	read() {
		this.a = +prompt('введите первое значение', 0);
		this.b = +prompt('введите второе значение', 0);
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
