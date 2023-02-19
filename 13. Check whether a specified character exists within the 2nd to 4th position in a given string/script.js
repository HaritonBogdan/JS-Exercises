const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const theWord = document.querySelector("#theWord").innerText;
const paragraph = document.createElement("p");
container.append(paragraph);
const theCut = theWord.slice(1, 5);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value.toUpperCase();
    if (theCut.includes(string)) {
        paragraph.innerText = `The letter ${string} is between the 2nd and the 4th position`;
    }
    else {
        paragraph.innerText = `The letter ${string.toUpperCase()} is not between the 2nd and the 4th position`;
    }
})




