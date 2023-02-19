const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    const newWord = string.substring(1, string.length - 1);
    paragraph.innerText = newWord;
})
