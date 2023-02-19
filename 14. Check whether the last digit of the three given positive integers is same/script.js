const form = document.querySelector("form");
const input = document.querySelector("#number");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputVal = input.value;
    const inputString = inputVal.toString();
    const firstNum = inputString.slice(-1);
    const secondNum = inputString.slice(-2, -1);
    const thirdNum = inputString.slice(-3, -2);
    if (firstNum === secondNum && secondNum === thirdNum) {
        paragraph.innerText = "The last three digit are the same"
    } else {
        paragraph.innerText = "The last three digit are NOT the same"
    }
})




