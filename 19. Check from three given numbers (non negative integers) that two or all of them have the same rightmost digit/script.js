const form = document.querySelector("form");
const inputOne = document.querySelector("#numberOne");
const inputTwo = document.querySelector("#numberTwo");
const inputThree = document.querySelector("#numberThree");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOne = inputOne.value.slice(-1);
    const numberTwo = inputTwo.value.slice(-1);
    const numberThree = inputThree.value.slice(-1);
    if (numberOne === numberTwo && numberTwo === numberThree) {
        paragraph.innerText = `Every last digit is ${numberOne}`;
    }
    else if (numberOne === numberTwo || numberTwo === numberThree || numberOne === numberThree) {
        if (numberOne === numberTwo) {
            paragraph.innerText = `First number's last digit ${numberOne} is the same with second number's last digit ${numberTwo}`;
        } else if (numberOne === numberThree) {
            paragraph.innerText = `First number's last digit ${numberOne} is the same with third number's last digit ${numberThree}`;
        } else {
            paragraph.innerText = `Second number's last digit ${numberTwo} is the same with third number's last digit ${numberThree}`;
        }
    }
    else {
        paragraph.innerText = "No last digits are the same";
    }
})



