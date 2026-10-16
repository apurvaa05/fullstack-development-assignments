function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        resultElement.textContent = "Please enter both numbers.";
        return;
    }

    const a = Number(num1);
    const b = Number(num2);
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            resultElement.textContent = "Cannot divide by zero.";
            return;
        }

        result = a / b;
    } else {
        resultElement.textContent = "Invalid operator.";
        return;
    }

    resultElement.textContent = "Result: " + result;
}