const form = document.querySelector("form");
const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const result = document.querySelector("p");
const multiply = document.querySelector("#multiply");
const devide = document.querySelector("#devide");

multiply.addEventListener("click", () => {
    result.innerText = "The Result is:"
    const calc = firstNum.value * secondNum.value;
    result.append(calc);
    firstNum.value = "";
    secondNum.value = "";
})

devide.addEventListener("click", () => {
    result.innerText = "The Result is:"
    const calc = firstNum.value / secondNum.value;
    result.append(calc);
    firstNum.value = "";
    secondNum.value = "";
})


