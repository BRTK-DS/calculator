import "./style.css";
import { calculate } from "./calculate.js";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let currentInput = "";
let operator = null;
let previousInput = "";

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const value = button.textContent;

		if (!isNaN(value)) {
			currentInput += value;
			display.textContent = currentInput;
		} else if (value === "C") {
			currentInput = "";
			previousInput = "";
			operator = null;
			display.textContent = "0";
		} else if (value === "=") {
			if (operator && previousInput) {
				const result = calculate(
					parseFloat(previousInput),
					parseFloat(currentInput),
					operator
				);
				display.textContent = result;
				currentInput = result.toString();
				previousInput = "";
				operator = null;
			}
		} else {
			if (currentInput) {
				if (previousInput) {
					const result = calculate(
						parseFloat(previousInput),
						parseFloat(currentInput),
						operator
					);
					display.textContent = result;
					previousInput = result.toString();
				} else {
					previousInput = currentInput;
				}
				currentInput = "";
			}
			operator = value;
		}
	});
});

calculate;