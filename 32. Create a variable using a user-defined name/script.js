const variableName = prompt("Enter a variable name:");
const variableValue = prompt("Enter a value for the variable:");
window[variableName] = variableValue;
console.log(variableName + " = " + window[variableName]);