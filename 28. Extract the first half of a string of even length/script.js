const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    if (string.length % 2 === 0) {
        paragraph.innerText = `${string.slice(0, string.length / 2)}`
    } else {
        paragraph.innerText = "The length of the word is not even";
    }
})
