const form = document.querySelector("form");
const input = document.querySelector("#letter");
const house = document.querySelector("p");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.toLowerCase() === "h") {
        house.innerText = "HOUSE";
        const text = house.innerText;
        const result = text.slice(1);
        house.innerText = `${result}`;
        input.value = "";
    }
    else if (input.value.toLowerCase() === "o") {
        house.innerText = "HOUSE";
        const text = house.innerText;
        const result = text[0] + text.slice(2);
        house.innerText = `${result}`;
        input.value = "";
    }
    else if (input.value.toLowerCase() === "u") {
        house.innerText = "HOUSE";
        const text = house.innerText;
        const result = text.slice(0, 2) + text.slice(3);
        house.innerText = `${result}`;
        input.value = "";
    }
    else if (input.value.toLowerCase() === "s") {
        house.innerText = "HOUSE";
        const text = house.innerText;
        const result = text.slice(0, 3) + text.slice(4);
        house.innerText = `${result}`;
        input.value = "";
    }
    else if (input.value.toLowerCase() === "e") {
        house.innerText = "HOUSE";
        const text = house.innerText;
        const result = text.slice(0, 4) + text.slice(5);
        house.innerText = `${result}`;
        input.value = "";
    }
    else {
        house.innerText = "Try Again!"
        input.value = "";
    }
})




