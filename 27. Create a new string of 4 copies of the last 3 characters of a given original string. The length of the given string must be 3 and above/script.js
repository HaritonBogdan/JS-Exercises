const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    const newWord = string.slice(-3).repeat(3);
    paragraph.innerText = `${newWord}`;
})
