const form = document.querySelector("form");
const inputOne = document.querySelector("#numberOne");
const inputTwo = document.querySelector("#numberTwo");
const inputThree = document.querySelector("#numberThree");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOne = parseInt(inputOne.value);
    const numberTwo = parseInt(inputTwo.value);
    const numberThree = parseInt(inputThree.value);
    if (numberOne === numberTwo && numberTwo === numberThree) {
        paragraph.innerText = "30";
    }
    else if (numberOne === numberTwo || numberTwo === numberThree || numberOne === numberThree) {
        paragraph.innerText = "40";
    }
    else {
        paragraph.innerText = "20";
    }
})



