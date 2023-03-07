let today = new Date();

let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

let formattedDate = `${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}-${year}`;

let formattedDate2 = `${day < 10 ? "0" + day : day}-${month < 10 ? "0" + month : month}-${year}`;

console.log(formattedDate);
console.log(formattedDate2);


