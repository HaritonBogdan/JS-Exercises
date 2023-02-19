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
    if ((50 < numberOne && numberOne < 90) && (50 < numberTwo && numberTwo < 90)) {
        paragraph.innerText = "The values are between 50 and 90";
    }
    else {
        paragraph.innerText = "The values are not between 50 and 90";
    }
})




