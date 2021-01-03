function add (a,b) {
	return +a + +b;
}

function subtract (a,b) {
	return +a - +b;
}

function sum (arr) {
	return arr.reduce((result, term) => result + term, 0);
}

function multiply (arr) {
	return arr.reduce((result, term) => result * term, 1);
}

function power(a,b) {
	return a ** b;
}

function factorial(num) {
	if (num === 0) return 1;
	let total = 1;
	for (let i = 1; i <= num; i++) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}