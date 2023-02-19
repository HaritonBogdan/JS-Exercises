const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);

const words = (str) => str.split('').sort().join('');
const sort = (str) => str.split(" ").map(words).join(" ");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    paragraph.innerText = `${sort(string)}`;
})
