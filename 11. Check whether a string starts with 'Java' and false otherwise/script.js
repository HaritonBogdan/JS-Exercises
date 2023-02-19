const form = document.querySelector("form");
const input = document.querySelector("#string");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value.toLowerCase();
    if (string.slice(0, 4) === "java") {
        paragraph.innerText = "The string have Java inside";
    }
    else {
        paragraph.innerText = "The string does not have Java inside";
    }
})




