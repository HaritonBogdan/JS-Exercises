const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const string = p.innerText;
    const lastIndex = string.slice(-1);
    const newString = lastIndex + string.slice(0, 8);
    p.innerText = newString;
})