'use strict'

// Сумма пользовательских чисел

function Calculator() {
	this.read = function() {
		this.a = +prompt('Введите первое значение', 0);
		this.b = +prompt('Введите второе значение', 0);		
	}
	this.sum = function() {
		return this.a + this.b;
	}
}

let calculator = new Calculator();
calculator.read();
alert( `${calculator.a} + ${calculator.b} = ${calculator.sum()}` );
