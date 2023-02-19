const form = document.querySelector("form");
const input = document.querySelector("#celsius");
const result = document.querySelector("p");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    result.innerText = "The Result is:";
    const celsius = input.value;
    const fahrenheit = (celsius * (9 / 5)) + 32;
    result.append(" " + fahrenheit)
    result.innerHTML += " <span>&#8457;</span>";
    input.value = "";
})




