const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newString = shiftLetters(input.value);
    paragraph.innerText = `${newString}`;
})


const shiftLetters = function (text) {
    const str = text.split("");
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case " ":
                break;
            case "z":
                str[i] = "a";
            case "Z":
                str[i] = "A";
            default:
                str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
        }
    }
    return str.join("");
}

