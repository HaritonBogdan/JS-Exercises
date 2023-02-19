const form = document.querySelector("form");
const input = document.querySelector("#string");
const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);

const vowels = ["a", "e", "i", "o", "u"];
const countVowels = (str) => {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

const sum = (a, b) => a + b;

const resultVowels = (str) => {
    return str.split(" ").map(countVowels).reduce(sum);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const string = input.value;
    paragraph.innerText = `There are ${resultVowels(string)} vowels`;
})
