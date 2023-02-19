const form = document.querySelector("form");
const trgBase = document.querySelector("#trgBase");
const trgHeight = document.querySelector("#trgHeight");
const result = document.querySelector("p");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    result.innerText = "The Area is:"
    const area = ` ${(trgBase.value * trgHeight.value) / 2} cm`;
    result.append(area);
    trgBase.value = "";
    trgHeight.value = "";
})

