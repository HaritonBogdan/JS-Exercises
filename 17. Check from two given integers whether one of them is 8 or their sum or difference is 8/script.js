const form = document.querySelector("form");
const inputOne = document.querySelector("#numberOne");
const inputTwo = document.querySelector("#numberTwo");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOne = parseInt(inputOne.value);
    const numberTwo = parseInt(inputTwo.value);
    const sum = numberOne + numberTwo;
    const diffOne = numberOne - numberTwo;
    const diffTwo = numberTwo - numberOne;
    if (numberOne === 8 || numberTwo === 8) {
        if (numberOne === 8 && numberTwo === 8) {
            paragraph.innerText = "Both numbers are 8";
        }
        else if (numberOne === 8) {
            paragraph.innerText = "First number is 8";
        } else {
            paragraph.innerText = "Second number is 8";
        }
    }
    else if (sum === 8) {
        paragraph.innerText = "The numbers sum is 8";
    }
    else if (diffOne === 8 || diffTwo === 8) {
        if (diffOne === 8) {
            paragraph.innerText = "First number minus second number is 8";
        } else {
            paragraph.innerText = "Second number minus first number is 8";
        }
    }
    else {
        paragraph.innerText = "No number, sum or diff is 8";
    }
})



