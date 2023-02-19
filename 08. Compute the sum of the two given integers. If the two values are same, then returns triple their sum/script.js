let button = document.querySelector("button");
let firstNum = document.querySelector("#firstNum");
let secondNum = document.querySelector("#secondNum");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);

button.addEventListener("click", function () {
    const first = parseInt(firstNum.value);
    const second = parseInt(secondNum.value);
    if (first === second) {
        let result = first * 3;
        paragraph.innerText = `The Result is ${result}`;
        firstNum.value = "";
        secondNum.value = "";
    }
    else {
        let result = first + second;
        paragraph.innerText = `The Result is ${result}`;
        firstNum.value = "";
        secondNum.value = "";
    }

})




