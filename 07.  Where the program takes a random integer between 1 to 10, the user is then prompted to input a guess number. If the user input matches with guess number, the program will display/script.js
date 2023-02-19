let button = document.querySelector("button");
let input = document.querySelector("input");
let container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.append(paragraph);

let number = Math.floor(Math.random() * 10) + 1;
let attemps = 0;

button.addEventListener("click", function () {
    attemps++;
    let guess = parseInt(input.value);
    if (guess === number) {
        paragraph.innerHTML = `Congrats, you tryed ${attemps} times, the number was ${number}`;
    }
    else {
        paragraph.innerHTML = `Try Again, ${attemps} attemps`;
    }
    input.value = "";
})




