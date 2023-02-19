const form = document.querySelector("form");
const input = document.querySelector("#number");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value % 7 === 0) {
        paragraph.innerText = "The number is a multiple of 7."
    }
    else if (input.value % 3 === 0) {
        paragraph.innerText = "The number is a multiple of 3."
    }
    else {
        paragraph.innerText = "Enter a valid number."
    }
})




