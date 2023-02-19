const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    if (string.length > 3) {
        const newWord = string.slice(0, 3).toLowerCase() + string.slice(3).toUpperCase();
        paragraph.innerText = `${newWord}`;
    } else {
        const newWord = string.toUpperCase();
        paragraph.innerText = `${newWord}`;

    }
})




