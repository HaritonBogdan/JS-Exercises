const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);

const countLetter = (letter, str) => {
    count = 0;
    for (let letters of str.toLowerCase()) {
        if (letters === letter) {
            count++;
        }
    }
    return count;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    if (countLetter("p", string) === countLetter("t", string)) {
        paragraph.innerText = `There are ${countLetter("p", string)} p and ${countLetter("t", string)} t, so they are equal`;
    } else {
        paragraph.innerText = "The p's and t's are not equal"
    }
})
