'use strict'

// Создать расширяемый калькулятор

function Calculator() {

	this.operation = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	}

	this.addMethod = (name, func) => {
		this.operation[name] = func;
	};

	this.calculate = (str) => {
		let arr = [];
		(typeof str != 'string') ? 'Введите верное выражение' : arr = str.split(' ');

		let operator = arr[1];
		if (arr.length != 3 || !this.operation[operator]
			|| Number.isNaN(+arr[0]) || Number.isNaN(+arr[2])) {
			return 'Введите верное выражение';
		} 
		return this.operation[operator](+arr[0], +arr[2]);
	};
}

let string = '111 - 23';

let calc = new Calculator;

console.log(calc.calculate(string));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate("3 ** 3") )
