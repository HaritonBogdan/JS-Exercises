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
    if (sum > 50 && sum < 80) {
        paragraph.innerText = "65";
    }
    else {
        paragraph.innerText = "80";
    }
})




