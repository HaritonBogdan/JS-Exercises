const filename = prompt("Enter a filename:");
const lastPeriodIndex = filename.lastIndexOf(".");
const extension = filename.substring(lastPeriodIndex + 1);

console.log("Extension: " + extension);
