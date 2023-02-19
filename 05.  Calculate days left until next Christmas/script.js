const today = new Date();
const xmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() === 11 && today.getDate() > 25) {
    xmas.setUTCFullYear(xmas.getFullYear() + 1);
}

const oneDay = 1000 * 60 * 60 * 24;
const diff = Math.ceil((xmas.getTime() - today.getTime()) / (oneDay));

const daysLeft = document.querySelector("p").innerText = `${diff} Days Left`;
