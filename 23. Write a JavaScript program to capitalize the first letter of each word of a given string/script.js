const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);

const capString = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const capSentence = (str) => {
    return str.split(" ").map(capString).join(" ");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    paragraph.innerText = `${capSentence(string)}`;
})
