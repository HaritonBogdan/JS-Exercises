const form = document.querySelector("form");
const input = document.querySelector("#number");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value >= 40 && input.value <= 10000) {
        paragraph.innerText = "The number is between 40 and 10000."
    }
    else {
        paragraph.innerText = "The number is not between 40 and 10000"
    }
})




