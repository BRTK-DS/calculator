function calculate(num1, num2, operator) {
	switch (operator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			return num2 !== 0 ? num1 / num2 : "Error";
		default:
			return num2;
	}
}

export { calculate };