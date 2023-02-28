'use strict'

// Максимальная зарплата

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

// let [name, years] = Object.entries(salaries)

function topSalary(salaries) {
	let max = 0;
	let maxName = null;

	Object.entries(salaries).forEach(item => {
		let [name, salary] = item;
		if (salary > max) {
			max = salary;
			maxName = name;
		}
	})
	return maxName;
}

console.log(topSalary(salaries));